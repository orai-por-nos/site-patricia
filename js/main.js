/* =========================================================
   Patrícia Gomes — interatividade
   Refino: reveals escalonados, parallax sutil, menu ativo,
   data-wa-msg (WhatsApp) e respeito a prefers-reduced-motion.
   ========================================================= */

(function () {
  'use strict';

  var prefersReduced = false;
  document.documentElement.classList.add('js');
  try {
    prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) { /* noop */ }

  var nav = document.getElementById('nav');
  var backTop = document.getElementById('backTop');
  var navLinks = document.getElementById('navLinks');
  var hero = document.getElementById('home');
  var heroGhost = document.querySelector('.hero__ghost');
  var ringOne = document.querySelector('.hero__ring--one');
  var ringTwo = document.querySelector('.hero__ring--two');
  var finePointer = false;
  try {
    finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  } catch (e) { /* noop */ }
  var depthOn = finePointer && !prefersReduced;
  var pt = { x: 0, y: 0, cx: 0, cy: 0 };
  var lastHp = -1;
  var scrollYState = 0;
  var ghostEls = [].slice.call(document.querySelectorAll('.section__ghost')).map(function (el) {
    return { el: el, top: 0, h: 1, speed: parseFloat(el.getAttribute('data-lag')) || 0.22 };
  });

  /* ---- Hero cinematográfico: playlist progressiva com crossfade em duas camadas ---- */
  var heroVideoShell = hero && hero.querySelector('.hero__video');
  var heroVideoLayers = heroVideoShell
    ? [].slice.call(heroVideoShell.querySelectorAll('.hero__video-layer'))
    : [];
  var heroVideoSources = [
    'assets/videos/01.mp4',
    'assets/videos/02.mp4',
    'assets/videos/03.mp4',
    'assets/videos/04.mp4',
    'assets/videos/05.mp4'
  ];

  function initHeroVideo() {
    if (!heroVideoShell || heroVideoLayers.length !== 2) return;

    var activeSlot = 0;
    var currentIndex = 0;
    var transitioning = false;
    var fadeDuration = 1250;
    var heroInViewport = true;
    var prepareTimer = 0;

    function canAnimateVideo() {
      return !prefersReduced && heroInViewport && !document.hidden;
    }

    function configureVideo(video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
    }

    function safePlay(video) {
      var playAttempt;
      try { playAttempt = video.play(); } catch (error) { return Promise.reject(error); }
      return playAttempt && typeof playAttempt.then === 'function'
        ? playAttempt
        : Promise.resolve();
    }

    function loadIntoSlot(slot, sourceIndex) {
      var video = heroVideoLayers[slot];
      if (video.dataset.sourceIndex === String(sourceIndex) && video.getAttribute('src')) return;
      configureVideo(video);
      video.dataset.sourceIndex = String(sourceIndex);
      video.preload = 'auto';
      if (video.getAttribute('src') !== heroVideoSources[sourceIndex]) {
        video.src = heroVideoSources[sourceIndex];
      }
      video.load();
    }

    function prepareNext() {
      if (!canAnimateVideo()) return;
      loadIntoSlot(1 - activeSlot, (currentIndex + 1) % heroVideoSources.length);
    }

    function scheduleNext() {
      window.clearTimeout(prepareTimer);
      if (!canAnimateVideo()) return;
      var active = heroVideoLayers[activeSlot];
      if (!Number.isFinite(active.duration) || active.duration <= 0) return;
      // Prepare only the next clip near the existing crossfade. Short clips
      // retain four seconds of preparation; longer clips get up to eight.
      var preparationLead = Math.min(8, Math.max(4, active.duration * 0.35));
      var delay = Math.max(0, (active.duration - active.currentTime - preparationLead) * 1000);
      prepareTimer = window.setTimeout(prepareNext, delay);
    }

    function pauseVideoLayers() {
      heroVideoLayers.forEach(function (video) { video.pause(); });
    }

    function resumeActiveVideo() {
      if (!canAnimateVideo() || heroVideoShell.classList.contains('has-playback-fallback')) return;
      safePlay(heroVideoLayers[activeSlot]).then(function () {
        scheduleNext();
      }).catch(function () {
        heroVideoShell.classList.add('has-playback-fallback');
      });
    }

    function finishTransition(previousSlot, nextSlot, nextIndex) {
      window.setTimeout(function () {
        var previous = heroVideoLayers[previousSlot];
        previous.pause();
        previous.removeAttribute('src');
        previous.removeAttribute('data-source-index');
        previous.preload = 'none';
        previous.load();
        activeSlot = nextSlot;
        currentIndex = nextIndex;
        transitioning = false;
        scheduleNext();
      }, fadeDuration);
    }

    function transitionToNext() {
      if (transitioning || !canAnimateVideo()) return;
      var previousSlot = activeSlot;
      var nextSlot = 1 - activeSlot;
      var previous = heroVideoLayers[previousSlot];
      var next = heroVideoLayers[nextSlot];
      var nextIndex = parseInt(next.dataset.sourceIndex || '', 10);

      if (!Number.isFinite(nextIndex)) {
        prepareNext();
        return;
      }
      if (next.readyState < 2) {
        next.addEventListener('canplay', transitionToNext, { once: true });
        return;
      }

      transitioning = true;
      next.currentTime = 0;
      safePlay(next).then(function () {
        next.classList.add('is-active');
        previous.classList.remove('is-active');
        finishTransition(previousSlot, nextSlot, nextIndex);
      }).catch(function () {
        transitioning = false;
        heroVideoShell.classList.add('has-playback-fallback');
      });
    }

    heroVideoLayers.forEach(function (video, slot) {
      configureVideo(video);
      video.addEventListener('timeupdate', function () {
        if (slot !== activeSlot || transitioning || !Number.isFinite(video.duration)) return;
        if (video.duration - video.currentTime <= 1.4) transitionToNext();
      });
      video.addEventListener('loadedmetadata', function () {
        if (slot === activeSlot && !transitioning) scheduleNext();
      });
      video.addEventListener('ended', transitionToNext);
      video.addEventListener('error', function () {
        if (slot === activeSlot) heroVideoShell.classList.add('has-playback-fallback');
      });
    });

    var first = heroVideoLayers[0];
    first.dataset.sourceIndex = '0';
    if (prefersReduced) {
      first.autoplay = false;
      first.removeAttribute('autoplay');
      first.pause();
    }
    function revealFirstFrame() {
      heroVideoShell.classList.add('is-ready');
      if (prefersReduced) {
        first.pause();
        return;
      }
      safePlay(first).then(function () {
        scheduleNext();
      }).catch(function () {
        heroVideoShell.classList.add('has-playback-fallback');
      });
    }
    first.addEventListener('loadeddata', revealFirstFrame, { once: true });
    if (first.readyState >= 2) revealFirstFrame();

    if ('IntersectionObserver' in window && !prefersReduced) {
      var heroVideoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          heroInViewport = entry.isIntersecting && entry.intersectionRatio > 0.05;
          if (heroInViewport) resumeActiveVideo();
          else {
            window.clearTimeout(prepareTimer);
            pauseVideoLayers();
          }
        });
      }, { threshold: [0, 0.05, 0.2] });
      heroVideoObserver.observe(hero);
    }

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        window.clearTimeout(prepareTimer);
        pauseVideoLayers();
      } else {
        resumeActiveVideo();
      }
    });
  }

  initHeroVideo();

  /* ---- Nav fixa com sombra + link ativo + back-top ao rolar ---- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle('nav--scrolled', y > 30);
      if (backTop) backTop.classList.toggle('show', y > 500);
      setActive(y + 140);
      syncScroll(y);
      ticking = false;
    });
  }

  /* ---- Destaque do link da seção atual ---- */
  var sectionIds = ['home', 'sobre', 'servicos', 'diferenciais', 'metodo', 'conteudo', 'instagram', 'contato'];
  function setActive(pos) {
    if (!navLinks) return;
    var current = 'home';
    sectionIds.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= pos) current = id;
    });
    navLinks.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ---- Motor unificado de profundidade (scroll + ponteiro) ---- */
  var revealSafetyDone = false;

  function measureGhosts() {
    ghostEls.forEach(function (g) {
      var r = g.el.getBoundingClientRect();
      g.top = r.top + (window.scrollY || window.pageYOffset);
      g.h = r.height || 1;
    });
  }

  function syncScroll(y) { scrollYState = y; }

  function renderFrame() {
    var vh = window.innerHeight || 1;

    /* deriva suave do ponteiro (lerp) */
    if (depthOn) {
      pt.cx += (pt.x - pt.cx) * 0.075;
      pt.cy += (pt.y - pt.cy) * 0.075;
    }

    if (hero) {
      hero.style.setProperty('--px', pt.cx.toFixed(4));
      hero.style.setProperty('--py', pt.cy.toFixed(4));

      /* progresso de saida do hero (0..1): coreografia de scroll
         em camadas (copia sobe rapido, foto afunda devagar) */
      var rawHp = scrollYState / vh;
      if (rawHp > 1) rawHp = 1; else if (rawHp < 0) rawHp = 0;
      if (Math.abs(rawHp - lastHp) > 0.002) {
        lastHp = rawHp;
        hero.style.setProperty('--hp', rawHp.toFixed(3));
      }
    }
    if (heroGhost) {
      heroGhost.style.transform =
        'translateX(-50%) translateY(' + (scrollYState * 0.16 + pt.cx * 8) + 'px)';
    }
    if (ringOne) {
      ringOne.style.transform =
        'translateY(' + (scrollYState * 0.10 + pt.cx * 14) + 'px)';
    }
    if (ringTwo) {
      ringTwo.style.transform =
        'translateY(' + (scrollYState * 0.06 - pt.cx * 10) + 'px)';
    }

    /* números-fantasma: paralaxe editorial entre as seções */
    for (var i = 0; i < ghostEls.length; i++) {
      var g = ghostEls[i];
      var rel = (scrollYState + vh - g.top) / (vh + g.h);
      if (rel > -0.25 && rel < 1.25) {
        g.el.style.transform =
          'translate3d(0,' + ((rel - 0.5) * g.speed * 120).toFixed(1) + 'px,0)';
      }
    }

    /* rede de seguranca extra: acionada pelo proprio motor de frames,
       imune a ambientes onde timers ficam congelados (headless, tab em
       segundo plano, economia de bateria). Garante o 1o ecra visivel. */
    if (!revealSafetyDone && window.performance.now() > 1600) {
      revealSafetyDone = true;
      revealVisibleNow();
    }

    window.requestAnimationFrame(renderFrame);
  }

  if (!prefersReduced) {
    measureGhosts();
    window.addEventListener('resize', measureGhosts);
    window.requestAnimationFrame(renderFrame);
  }

  /* ---- Profundidade interativa na foto (desktop, ponteiro fino) ---- */
  if (hero && depthOn) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      pt.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      pt.y = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (!hero.classList.contains('is-live')) hero.classList.add('is-live');
    }, { passive: true });
    hero.addEventListener('pointerleave', function () {
      pt.x = 0;
      pt.y = 0;
      hero.classList.remove('is-live');
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile: closed content is inert; open content owns the focus ---- */
  var toggle = document.getElementById('navToggle');
  var links = navLinks;
  var mobileMenuQuery = window.matchMedia('(max-width: 860px)');
  var menuBackground = [document.querySelector('main'), document.querySelector('footer'),
    backTop, document.querySelector('.skip-link'), nav && nav.querySelector('.nav__brand')]
    .filter(Boolean);
  var savedMenuBackground = [];
  var savedHtmlOverflow = '';
  var savedMenuLayout = [];

  function saveMenuStyle(el, property, value) {
    savedMenuLayout.push({ el: el, property: property, value: el.style[property] });
    el.style[property] = value;
  }

  function menuIsOpen() {
    return mobileMenuQuery.matches && links && links.classList.contains('open');
  }

  function menuFocusables() {
    return [].slice.call(links.querySelectorAll('a[href]')).filter(function (el) {
      return el.getClientRects().length && window.getComputedStyle(el).display !== 'none';
    }).concat(toggle);
  }

  function syncClosedMenu() {
    if (!links) return;
    var hidden = mobileMenuQuery.matches && !links.classList.contains('open');
    links.inert = hidden;
    if (hidden) links.setAttribute('aria-hidden', 'true');
    else links.removeAttribute('aria-hidden');
  }

  function openMenu() {
    if (!mobileMenuQuery.matches || menuIsOpen()) return;
    links.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Fechar menu');
    syncClosedMenu();
    savedMenuBackground = menuBackground.map(function (el) {
      var state = { el: el, inert: el.hasAttribute('inert') };
      el.inert = true;
      return state;
    });
    savedHtmlOverflow = document.documentElement.style.overflowY;
    // Compensate the removed scrollbar without changing viewport-based typography.
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      saveMenuStyle(document.body, 'paddingRight',
        (parseFloat(window.getComputedStyle(document.body).paddingRight) + scrollbarWidth) + 'px');
      saveMenuStyle(nav, 'right', scrollbarWidth + 'px');
      saveMenuStyle(links, 'right', scrollbarWidth + 'px');
    }
    document.documentElement.style.overflowY = 'hidden';
    menuFocusables()[0].focus({ preventScroll: true });
  }

  function closeMenu(returnFocus) {
    if (!links || !toggle) return;
    var wasOpen = links.classList.contains('open');
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    if (wasOpen) {
      savedMenuBackground.forEach(function (state) { state.el.inert = state.inert; });
      savedMenuBackground = [];
      document.documentElement.style.overflowY = savedHtmlOverflow;
      savedMenuLayout.forEach(function (state) { state.el.style[state.property] = state.value; });
      savedMenuLayout = [];
      if (returnFocus !== false && mobileMenuQuery.matches) toggle.focus({ preventScroll: true });
    }
    syncClosedMenu();
  }

  if (toggle && links) {
    syncClosedMenu();
    toggle.addEventListener('click', function () {
      if (menuIsOpen()) closeMenu();
      else openMenu();
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(); });
    });
    document.addEventListener('click', function (e) {
      if (menuIsOpen() && !links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (!menuIsOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
      } else if (e.key === 'Tab') {
        var items = menuFocusables();
        var first = items[0];
        var last = items[items.length - 1];
        var active = document.activeElement;
        if (e.shiftKey && (active === first || (!links.contains(active) && active !== toggle))) {
          e.preventDefault();
          last.focus({ preventScroll: true });
        } else if (!e.shiftKey && (active === last || (!links.contains(active) && active !== toggle))) {
          e.preventDefault();
          first.focus({ preventScroll: true });
        }
      }
    });
    document.addEventListener('focusin', function (e) {
      if (menuIsOpen() && !links.contains(e.target) && e.target !== toggle) {
        menuFocusables()[0].focus({ preventScroll: true });
      }
    });
    mobileMenuQuery.addEventListener('change', function () {
      var active = document.activeElement;
      var wasOpen = links.classList.contains('open');
      if (!mobileMenuQuery.matches) closeMenu(false);
      syncClosedMenu();
      if (mobileMenuQuery.matches && links.contains(active) && !menuIsOpen()) {
        toggle.focus({ preventScroll: true });
      } else if (!mobileMenuQuery.matches && (wasOpen || active === toggle)) {
        menuFocusables()[0].focus({ preventScroll: true });
      }
    });
  }

  /* ---- Voltar ao topo ---- */
  if (backTop) {
    backTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* ---- Animações de entrada (escalonadas) ---- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  var io = ('IntersectionObserver' in window && !prefersReduced)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    : null;

  revealEls.forEach(function (el) {
    if (!io) el.classList.add('in');
    else io.observe(el);
  });

  /* Rede de seguranca: o primeiro ecran NUNCA fica invisivel.
     Sob carga, o observador pode demorar; se um elemento visivel
     ainda nao foi revelado pouco apos o load, revela na hora. */
  function revealVisibleNow() {
    var vhNow = window.innerHeight || 1;
    revealEls.forEach(function (el) {
      if (io && !el.classList.contains('in')) {
        var r = el.getBoundingClientRect();
        if (r.top < vhNow * 0.9 && r.bottom > -40) {
          el.classList.add('in');
          io.unobserve(el);
        }
      }
    });
  }
  window.addEventListener('load', function () { setTimeout(revealVisibleNow, 900); });
  setTimeout(revealVisibleNow, 1600);

  /* ---- Links com data-wa-msg (monta o link do WhatsApp com texto) ---- */
  document.querySelectorAll('a[data-wa-msg]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var href = a.getAttribute('href') || '';
      var msg = a.getAttribute('data-wa-msg') || '';
      if (href.indexOf('wa.me') !== -1 && msg) {
        ev.preventDefault();
        var url = href + (href.indexOf('?') === -1 ? '?text=' : '&text=') + encodeURIComponent(msg);
        window.open(url, '_blank');
      }
    });
  });

  /* ---- Formulário -> WhatsApp (validação inline acessível, sem alert) ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    var inputs = {
      nome: document.getElementById('nome'),
      whats: document.getElementById('whats'),
      mensagem: document.getElementById('mensagem')
    };
    var errEls = {
      nome: document.getElementById('erro-nome'),
      whats: document.getElementById('erro-whats'),
      mensagem: document.getElementById('erro-mensagem')
    };

    function setFieldError(name, on) {
      var input = inputs[name];
      if (!input) return;
      var field = input.closest('.field');
      if (field) {
        field.classList.toggle('field--error', on);
        // sucesso = campo preenchido sem erro
        field.classList.toggle('field--success', !on && input.value.trim().length > 0);
      }
      if (errEls[name]) errEls[name].hidden = !on;
      if (on) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }

    function setWhatsMessage(txt) {
      var span = errEls.whats && errEls.whats.querySelector('span');
      if (span) span.textContent = txt;
    }

    ['nome', 'whats', 'mensagem'].forEach(function (name) {
      var input = inputs[name];
      if (!input) return;
      var clear = function () { setFieldError(name, false); };
      input.addEventListener('input', clear);
      input.addEventListener('change', clear);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = ((inputs.nome && inputs.nome.value) || '').trim();
      var whats = ((inputs.whats && inputs.whats.value) || '').trim();
      var assuntoEl = document.getElementById('assunto');
      var assunto = (assuntoEl && assuntoEl.value) || '';
      var mensagem = ((inputs.mensagem && inputs.mensagem.value) || '').trim();

      var invalid = [];

      if (!nome) invalid.push('nome');
      else setFieldError('nome', false);

      var digits = whats.replace(/\D/g, '');
      if (!whats) {
        setWhatsMessage('Preciso do seu WhatsApp para responder.');
        invalid.push('whats');
      } else if (digits.length < 10 || digits.length > 13) {
        setWhatsMessage('Digite um WhatsApp válido, com DDD.');
        invalid.push('whats');
      } else {
        setFieldError('whats', false);
      }

      if (!mensagem) invalid.push('mensagem');
      else setFieldError('mensagem', false);

      if (invalid.length) {
        invalid.forEach(function (name) { setFieldError(name, true); });
        var first = inputs[invalid[0]];
        if (first) first.focus();
        return;
      }

      var texto =
        'Olá, Patrícia! Me chamo ' + nome + '.\n' +
        'WhatsApp: ' + whats + '\n' +
        'Assunto: ' + assunto + '\n' +
        'Mensagem: ' + mensagem;

      var url = 'https://wa.me/5521982338381?text=' + encodeURIComponent(texto);

      var hint = document.getElementById('formHint');
      if (hint) hint.hidden = false;

      window.open(url, '_blank');
    });
  }

  /* ---- Microinteração: inclinação discreta nos cards ---- */
  if (finePointer && !prefersReduced) {
    document.querySelectorAll('[data-tilt]').forEach(function (cardEl) {
      cardEl.addEventListener('pointermove', function (e) {
        var r = cardEl.getBoundingClientRect();
        var nx = ((e.clientX - r.left) / r.width) * 2 - 1;
        var ny = ((e.clientY - r.top) / r.height) * 2 - 1;
        cardEl.style.setProperty('--cx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        cardEl.style.setProperty('--cy', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
        cardEl.style.transform =
          'perspective(850px) rotateY(' + (nx * 2.4).toFixed(2) + 'deg)' +
          ' rotateX(' + (-ny * 2).toFixed(2) + 'deg) translateY(-2px)';
      }, { passive: true });
      cardEl.addEventListener('pointerleave', function () {
        cardEl.style.transform = '';
      });
    });
  }

  /* ---- Conteúdo e Instagram: catálogo local com rotação horária ---- */
  var FEED_CATALOG_URL = 'assets/data/instagram-posts.json';
  var instaItems = document.querySelectorAll('[data-instagram-feed] .insta__item');
  var contentCards = document.querySelectorAll('[data-content-feed] [data-content-card]');
  var feedCatalog = [];
  var lastFeedHour = hourSeed();

  function hourSeed() {
    return Math.floor(Date.now() / 3600000);
  }

  /* PRNG determinístico: mesma hora = mesma disposição, próxima hora = nova */
  function mulberry32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffledIndexes(seed, len) {
    var arr = [];
    var rand = mulberry32(seed);
    var i, j, tmp;
    for (i = 0; i < len; i++) arr.push(i);
    for (i = len - 1; i > 0; i--) {
      j = Math.floor(rand() * (i + 1));
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  /* A ordem muda diariamente e a janela avança uma posição por hora.
     Assim, o conjunto sempre troca (não apenas a posição dos mesmos posts). */
  function selectHourly(posts, count, salt, targetHour) {
    if (!posts.length || !count) return [];
    var daySeed = Math.floor(targetHour / 24) + salt;
    var order = shuffledIndexes(daySeed, posts.length);
    var start = ((targetHour + salt) % posts.length + posts.length) % posts.length;
    var selected = [];
    var i;
    for (i = 0; i < Math.min(count, posts.length); i++) {
      selected.push(posts[order[(start + i) % posts.length]]);
    }
    return selected;
  }

  function setImagePost(img, post) {
    img.src = post.image;
    img.style.objectPosition = post.objectPosition || '50% 50%';
    img.alt = 'Publicação sobre ' + post.title + ' no perfil @fisio.patriciagomes';
  }

  function applyInstagram(posts, withFade) {
    instaItems.forEach(function (item, slotIdx) {
      var post = posts[slotIdx];
      var img = item.querySelector('img');
      if (!post || !img) return;

      item.href = post.url;
      item.dataset.postId = post.id;
      if (img.getAttribute('src') === post.image &&
          (img.style.objectPosition || '') === (post.objectPosition || '50% 50%')) return;

      var swap = function () {
        setImagePost(img, post);
        img.style.opacity = '';
      };

      if (withFade && !prefersReduced) {
        var preloader = new Image();
        preloader.onload = function () {
          img.style.opacity = '0.12';
          setTimeout(swap, 220);
        };
        preloader.onerror = swap;
        preloader.src = post.image;
      } else {
        swap();
      }
    });
  }

  function applyContent(posts, withFade) {
    contentCards.forEach(function (card, slotIdx) {
      var post = posts[slotIdx];
      var heading = card.querySelector('h3');
      var link = heading ? heading.querySelector('.tema__link') : null;
      var summary = card.querySelector('p');
      if (!post || !link || !summary) return;

      var swap = function () {
        link.textContent = post.title;
        link.href = post.url;
        summary.textContent = post.summary;
        card.dataset.postId = post.id;
        card.style.opacity = '';
      };

      if (withFade && !prefersReduced) {
        card.style.transition = 'opacity .35s ease';
        card.style.opacity = '0.25';
        setTimeout(swap, 180);
      } else {
        swap();
      }
    });
  }

  function renderFeeds(withFade, targetHour) {
    applyInstagram(selectHourly(feedCatalog, instaItems.length, 173, targetHour), withFade);
    applyContent(selectHourly(feedCatalog, contentCards.length, 941, targetHour), withFade);
  }

  /* Prepara apenas as imagens novas da próxima hora, sem baixar o catálogo inteiro. */
  function warmNextHour() {
    var next = selectHourly(feedCatalog, instaItems.length, 173, hourSeed() + 1);
    var loaded = {};
    instaItems.forEach(function (item) {
      var img = item.querySelector('img');
      if (img) loaded[img.getAttribute('src')] = true;
    });
    next.forEach(function (post) {
      if (!loaded[post.image]) {
        var pre = new Image();
        pre.src = post.image;
      }
    });
  }

  function startFeedRotation() {
    renderFeeds(false, lastFeedHour);
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(warmNextHour, { timeout: 2500 });
    } else {
      setTimeout(warmNextHour, 1200);
    }

    setInterval(function () {
      var nowHour = hourSeed();
      if (nowHour !== lastFeedHour) {
        lastFeedHour = nowHour;
        renderFeeds(true, nowHour);
        warmNextHour();
      }
    }, 60000);
  }

  if (instaItems.length || contentCards.length) {
    instaItems.forEach(function (item) {
      var img = item.querySelector('img');
      if (img) img.style.transition =
        'opacity .55s ease, transform .7s var(--ease-out), filter .5s var(--ease)';
    });

    fetch(FEED_CATALOG_URL)
      .then(function (response) {
        if (!response.ok) throw new Error('Não foi possível carregar o catálogo de publicações.');
        return response.json();
      })
      .then(function (catalog) {
        if (!catalog || !Array.isArray(catalog.posts) || !catalog.posts.length) {
          throw new Error('O catálogo de publicações está vazio.');
        }
        feedCatalog = catalog.posts;
        startFeedRotation();
      })
      .catch(function (error) {
        /* O HTML contém um conjunto estático completo para manter a seção disponível. */
        console.warn('[feed] Catálogo indisponível; usando conteúdo de fallback.', error);
      });
  }

  /* ---- Ano corrente no rodapé ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();