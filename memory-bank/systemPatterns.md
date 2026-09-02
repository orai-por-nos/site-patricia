# System Patterns · Site Patrícia Gomes

## Arquitetura
One-page estática vanilla. Três arquivos principais: index.html (estrutura+conteúdo),
css/style.css (design tokens em :root, componentes, responsividade e MOTION & DEPTH LAYER),
js/main.js (IIFE única com todos os comportamentos). Sem estado global além das variáveis da IIFE.

## Convenção editorial de serviços
Usar “RPG” em áreas compactas e “RPG – Método Souchard” em cards, explicações e contexto detalhado.

## Convenções CSS (BEM-like)
Blocos: nav, hero, marquee, sobre, servicos/card, diferenciais/dif, metodo/metodo__step,
conteudo/tema, insta/insta__item, contato, footer. Modificadores com -- (ex.: hero__chip--tl).
Animações de entrada via atributo [data-reveal] (+ variantes left/right/scale) com delays
escalonados inline (--rd:0.08s etc.), revelados por IntersectionObserver adicionando a classe .in.

## Camada Motion & Depth (final do style.css, seções numeradas 1–6)
1. Motor de profundidade do hero: JS escreve --px/--py (-1..1) no .hero via rAF com lerp 0.075;
   .hero__media translada (12px/9px), .hero__figure aplica tilt 3D perspective(950px) ±2.6°/±2.2°,
   a img dá contra-movimento interno (-5px/-4px, scale 1.05 = sensação de lente),
   halo quente (radial-gradient terracota/verde) segue o cursor e respira (halo-breathe 6s).
2. Linha manuscrita SVG do título desenha ao carregar (stroke-dashoffset, animação draw-line 1.15s, delay 0.95s).
3. Fluxo vertical natural: todas as seções ocupam a própria altura e seguem a ordem do documento,
   sem margens negativas, pinning, alturas artificiais ou cobertura do conteúdo anterior.
4. Microinterações: tilt discreto nos cards [data-tilt] (perspective 850px, ±2.4°) + spotlight
   radial que segue o cursor (::after com --cx/--cy), underline crescente em card__link,
   overlay do Instagram com texto+ícone subindo juntos, brilho lateral no nav CTA,
   back-top com leve rotação no hover.
5. Responsividade da camada: amplitudes decorativas são reduzidas abaixo de 920px.
6. prefers-reduced-motion: reduce → movimentos decorativos desligam (transforms none,
   halo display:none e animação da linha desativada).

## Padrões JS (main.js)
- Loop rAF unificado: onScroll marca dirty e um único renderFrame cuida de nav--scrolled,
  back-top (.show >500), link ativo (offsetTop+140) e parallax;
  lerp do ponteiro só roda se depthOn = (hover:hover)(pointer:fine) && !reduced-motion.
- Números-fantasma (.section__ghost, data-lag default 0.22): paralaxe editorial por posição
  relativa na viewport ((rel-0.5)*speed*120px), medidos em load/resize.
- Reveals escalonados com IntersectionObserver (threshold 0.12, rootMargin -6% bottom);
  fallback: sem IO ou reduced-motion => tudo visível imediatamente.
- Instagram dinâmico SEM API: pool local de 6 imagens (post2..post7 com objectPosition afinado);
  seed = hora atual (Date.now()/3600000); PRNG mulberry32 determinístico + Fisher-Yates embaralha
  os slots; checa virada de hora a cada 60s e troca com crossfade (opacity 0.12 → swap → fade in);
  acervo pré-carregado no window.load. Mesma hora = mesma disposição; hora nova = nova disposição.
- Formulário (#contactForm): valida nome/whats/mensagem (alert se faltar), monta texto em pt-BR
  e abre wa.me/5521982338381 com encodeURIComponent; mostra hint (#formHint) após abrir.
  Links [data-wa-msg] idem (preventDefault + window.open com ?text=).
- Menu mobile: toggle .open, aria-expanded sincronizado, fecha ao clicar fora ou navegar.

## Acessibilidade transversal
Skip-link; noscript força [data-reveal] visível; aria-labels corretos;
reduced-motion respeitado tanto no CSS quanto no JS.
