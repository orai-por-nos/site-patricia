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

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById('navToggle');
  var links = navLinks;

  function closeMenu() {
    if (links && links.classList) {
      links.classList.remove('open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      }
    }
  }

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') &&
          !links.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu();
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

  /* ---- Instagram dinâmico: o mosaico muda de hora em hora ---- */
  var INSTA_POOL = [
    { src: 'assets/img/post3.jpg', pos: '50% 32%' },
    { src: 'assets/img/post2.webp', pos: '50% 44%' },
    { src: 'assets/img/post4.webp', pos: '50% 38%' },
    { src: 'assets/img/post5.webp', pos: '50% 34%' },
    { src: 'assets/img/post6.webp', pos: '52% 40%' },
    { src: 'assets/img/post7.webp', pos: '48% 38%' }
  ];
  var instaItems = document.querySelectorAll('.insta__mosaic .insta__item');
  var lastInstaHour = hourSeed();

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

  function applyInstaRotation(withFade) {
    if (!instaItems.length) return;
    var order = shuffledIndexes(hourSeed(), instaItems.length);
    instaItems.forEach(function (item, slotIdx) {
      var img = item.querySelector('img');
      if (!img) return;
      var pick = INSTA_POOL[order[slotIdx] % INSTA_POOL.length];
      if (img.getAttribute('src') === pick.src &&
          (img.style.objectPosition || '') === pick.pos) return;

      var swap = function () {
        img.src = pick.src;
        img.style.objectPosition = pick.pos;
        img.style.opacity = '';
      };

      if (withFade && !prefersReduced) {
        img.style.opacity = '0.12';
        setTimeout(function () {
          img.src = pick.src;
          img.style.objectPosition = pick.pos;
          if (img.complete) {
            window.requestAnimationFrame(function () { img.style.opacity = ''; });
          } else {
            img.onload = swap;
          }
        }, 240);
      } else {
        swap();
      }
    });
  }

  if (instaItems.length) {
    /* transição suave de opacidade nas trocas */
    instaItems.forEach(function (item) {
      var img = item.querySelector('img');
      if (img) img.style.transition =
        'opacity .55s ease, transform .7s var(--ease-out), filter .5s var(--ease)';
    });

    applyInstaRotation(false);

    /* pré-carrega o acervo para as trocas horárias serem instantâneas */
    window.addEventListener('load', function () {
      INSTA_POOL.forEach(function (p) {
        var pre = new Image();
        pre.src = p.src;
      });
    });

    /* verifica a cada 60s se a virada de hora aconteceu */
    setInterval(function () {
      var nowHour = hourSeed();
      if (nowHour !== lastInstaHour) {
        lastInstaHour = nowHour;
        applyInstaRotation(true);
      }
    }, 60000);
  }

  /* ---- Ano corrente no rodapé ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
