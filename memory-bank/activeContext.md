# Active Context · Site Patrícia Gomes

Última atualização: 28/08/2026 — Implementada M3 faixa full-bleed com parallax scroll-driven usando apenas CSS transforms e JS (requestAnimationFrame, lerp), respeitando prefers-reduced-motion e acessibilidade.

## Sessão 27/08/2026 (verificação FASE 1 · captura scrolled + fix de erros visíveis) — CONCLUÍDA
- `_cdp-shot.mjs`: adicionado modo scroll-warmup (percorre a página antes do captureBeyondViewport para disparar todos os IntersectionObserver `[data-reveal]`). Motivo: em full-page sem scroll, seções abaixo da dobra ficam `opacity:0` — artefato de captura, não defeito de layout.
- Nova captura: `.shots/20-fase1-full-mobile-scrolled.png` (780×23500). Fatiada em `slice0.jpg`–`slice5.jpg` (470px, q72) em `.shots/` para inspeção.
- Inspeção dos 6 slices: TODO o conteúdo revelado — hero/chips, marquee (SVGs visíveis), Sobre, Especialidades, Diferenciais, Como atuo, Conteúdo, Instagram, Contato, Footer. Sem regiões em branco.
- DEFEITO ENCONTRADO e CORRIGIDO: erros de validação do formulário ficavam SEMPRE visíveis. Causa: `css/style.css` tinha `.field__error { display:flex }`, que sobrescreve o `display:none` do atributo `[hidden]` (o HTML nasce com `hidden`; `main.js:260` alterna a propriedade `.hidden`). Fix: `.field__error[hidden] { display:none; }` (style.css:512).
- Verificação ao vivo (`node _cdp-check.mjs 390 844`): 3/3 erros com `hidden:true, display:none` por padrão; submit vazio → 3 erros; preenchido → 0 erros; WhatsApp deep-link abre; sem console errors; overflow 0.
- `_cdp-check.mjs` ganhou verificação de regressão permanente `errorHiddenDefault` (exatamente o bug que passou batido antes).
- Artefatos de captura (NÃO são defeitos do site): header sticky e botão back-top aparecem "flutuando" no meio da captura full-page (elementos fixed/sticky são costurados na posição do scroll durante o warmup).

## Estado atual
FASE 1 completa e verificada: M4/M5 (testes + validação inline), favicon (assets/favicon.svg, HTTP 200), nav, correção de overflow horizontal (0px), fix dos erros visíveis. Servidor rodando em localhost:3000.
Base: index.html, css/style.css, js/main.js, server.js (porta 3000).

## FASE 2 (NÃO INICIADA — aguarda aprovação do usuário)
1. M3: faixa full-bleed
2. M1: Especialidades assimétricas
3. M2: sticky storytelling

## Ideias visuais abertas / decisões não resolvidas
- Se/como intensificar ainda mais o scroll cinematográfico (ex.: cortinas, sticky storytelling)
  SEM reintroduzir sensação de landing page tradicional.
- Imagem dedicada de og:image para compartilhamento.

## Restrições a lembrar sempre
- Não inventar informação profissional (bio/formação/e-mail indisponíveis publicamente).
- Manter copy em pt-BR humanizada, com poucos travessões (em dashes).
- Não regredir a estética genérica de IA; manter paleta verde-sálvia/creme/terracota e
  tipografia Fraunces/Inter e a direção editorial premium/acolhedora.
- Todo movimento deve respeitar prefers-reduced-motion e exigir ponteiro fino.
- Invocar a skill frontend-design em trabalhos de UI/design.

## Sessão 27/08/2026 (typography & editorial audit) — CONCLUÍDA
- Hierarquia consistente em 4 níveis em TODAS as seções: eyebrow (kicker rastreado) → heading (Fraunces) → editorial lead (serifa, `--text-lead` clamp 1.12–1.28rem, cor `--lead-color` teal-700) → supporting body (Inter, `--text-body`).
- Leads editoriais em: Sobre (1º parágrafo promovido a lead), Especialidades, Diferenciais, Como atuo, Conteúdo, Instagram e Contato (`form-lead`). Nenhum texto virou card — tudo fluxo editorial.
- Eyebrows padronizados (`.section__eyebrow` com `::before`) e acento por seção (ex.: `.metodo` em terracotta).
- Segunda passagem de motion: gestos "landing page" removidos; remanescentes calibrados (menor amplitude/duração, easing calmo). Sensação editorial > promocional.
- Validação: `.shots/11-typo-full.png`, `12-typo-mobile.png`, `13-motion-sections.png`; servidor HTTP 200 confirmado após as mudanças.

Última atualização: 27/08/2026 (Memory Bank inicializado a partir de inspeção real do código;
nenhuma alteração foi feita no site nesta sessão).

## Sessão 27/08/2026 (direção de arte/motion) — CONCLUÍDA
- Parallax por cursor no hero, sobreposição real entre seções e scroll cinematográfico implementados e validados (ver progress.md).
- Correção de legibilidade mobile: `.hero__chip--br` subiu de `bottom:8%` para `bottom:19%` em ≤920px — a caixa `.hero__media` inclui a figcaption e o chip cobria o nome "Patrícia Gomes".
- Removida linha duplicada `.hero__chip { max-width:210px }` (vale só 185px em ≤480px).
- Rede de segurança de reveal agora também roda no motor rAF (`renderFrame`, `performance.now() > 1600` → `revealVisibleNow()`), imune a ambientes com timers congelados.
- Capturas finais: `.shots/9-mobile-final.png` (390×844 @2x, limpa) e `.shots/10-desktop-check.png` (1440×900, hero desktop inalterado).
- Validação em tempo real via CDP (`_cdp-shot.mjs`, Node ≥22, WebSocket nativo): IO + safety-net confirmandos na página (3/40 e 5/40 revelados = só above-the-fold, correto p/ reveals por scroll).
- Limitação confirmada: `--virtual-time-budget` do Edge headless não avança rAF/timers de forma confiável com `--dump-dom`/`--screenshot` → usar `_cdp-shot.mjs` para provas visuais reais.

## Sessão 28/08/2026 (M3: faixa full-bleed) — CONCLUÍDA
- Adicionado markup `<div class="faixa full-bleed" aria-hidden="true"></div>` após a seção hero e antes da seção SOBRE.
- Estilizado `.faixa.full-bleed` com altura 20vh, overflow hidden, fundo cream, e duas formas orgânicas usando pseudo-elementos ::before e ::after com gradientes teal-300/terracotta e border-radius blobby.
- Implementado parallax scroll-driven em `js/main.js` usando variáveis CSS `--faixa-x`, `--faixa-y`, `--faixa-x2`, `--faixa-y2` atualizadas via requestAnimationFrame e lerp, respeitando prefers-reduced-motion.
- Verificado que a faixa não afeta a acessibilidade (aria-hidden=true) e não causa overflow horizontal.

## Histórico (resolvido em sessões posteriores)
- Itens 1–3 dos antigos "Próximos passos" (chave extra no CSS, favicon, validação inline do formulário)
  foram concluídos na FASE 1 e revalidados nesta sessão: favicon HTTP 200, validação inline ativa
  e sem alert(), overflow horizontal 0px. Restam os itens de acervo do Instagram e og:image dedicada.
