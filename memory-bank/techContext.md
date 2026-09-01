# Tech Context · Site Patrícia Gomes

## Stack
- Vanilla puro: index.html + css/style.css (~39KB, inclui camada Motion & Depth) + js/main.js (~12KB, IIFE ES5-style).
- Zero dependências npm, zero framework, zero build step.
- Fontes via Google Fonts CDN (Fraunces + Inter).
- Ambiente: Windows (PowerShell), workspace C:\AI-Teste-Nemotron\site-patricia.

## Como rodar
```
node server.js   # servidor estático Node puro (módulo http), porta 3000 (env PORT faz override)
```
Abrir http://localhost:3000. Alternativa: abrir index.html direto no navegador (funciona;
formulário e âncoras ok; o WhatsApp abre em nova aba).

## Arquivos
- index.html: única página (444 linhas), pt-BR, meta/OG tags, noscript fallback para [data-reveal].
- css/style.css: design tokens (:root) + layout + responsividade + MOTION & DEPTH LAYER (seção final).
- js/main.js: nav/back-top/reveals/parallax de ponteiro/tilt dos cards/form→WhatsApp/Instagram dinâmico.
- server.js: estático simples com MIME map e proteção básica de path traversal.
- assets/img/: avatar-hd.jpg (356KB, foto real usada no hero/sobre/OG), avatar.jpg (2KB, miniatura antiga),
  post2.webp..post7.webp (publicações reais do perfil).
- README.md: fonte dos dados, decisões de design e documentação da camada de motion.
- .clinerules/memory-bank.md: política da Memory Bank.

## Integrações
- WhatsApp: número único confirmado (21) 98233-8381 → https://wa.me/5521982338381.
  CTAs usam data-wa-msg (main.js concatena ?text=); formulário monta mensagem formatada.
- Instagram: perfil público @fisio.patriciagomes. SEM API/embeds: mosaico estático de links
  com rotação determinística por hora implementada localmente (ver systemPatterns.md).

## Skill instalada
- frontend-design (skill do ambiente Cline) disponível e deve ser invocada em trabalhos de UI/design.

## Constraints técnicos conhecidos
- Formulário usa alert() para validação simples (fallback proposital, sem backend).
- Números-fantasma dependem de -webkit-text-stroke (Chrome/Safari/Edge/Firefox moderno ok).
- .hero__halo escondido em pointer coarse; depth engine exige (hover:hover) and (pointer:fine).
- Sem favicon e sem arquivo de logo (ver progress.md).
