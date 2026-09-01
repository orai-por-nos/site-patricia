# Progress · Site Patrícia Gomes

## FASE 1 — COMPLETA e VERIFICADA (27/08/2026)
- Scroll-warmup adicionado ao `_cdp-shot.mjs` (percorre a página antes do captureBeyondViewport
  para disparar todos os IntersectionObserver `[data-reveal]`). Blank areas em full-page eram
  artefato de captura (opacity:0 sem scroll), não defeito de layout.
- Captura `.shots/20-fase1-full-mobile-scrolled.png` (780×23500) + slices `slice0–5.jpg` inspecionados:
  TODO o conteúdo revelado em todas as seções; chips, marquee SVGs, Diferenciais e formulário íntegros.
- DEFEITO CORRIGIDO: erros de validação do formulário sempre visíveis — `.field__error { display:flex }`
  sobrescrevia o `[hidden]` do HTML. Fix em `css/style.css:512`: `.field__error[hidden] { display:none; }`.
  Verificado ao vivo via CDP: hidden por padrão, aparecem no submit vazio, somem ao preencher.
- `_cdp-check.mjs` ganhou regressão permanente `errorHiddenDefault`.
- Revalidado nesta sessão: favicon HTTP 200, overflow horizontal 0px, console sem erros,
  validação inline sem alert(), WhatsApp deep-link funcional.

## FASE 2 — NÃO INICIADA (aguarda aprovação do usuário)
- M3: faixa full-bleed [concluído] · M1: Especialidades assimétricas · M2: sticky storytelling.

- Auditoria tipográfica/editorial (27/08/2026): hierarquia eyebrow + heading + editorial lead + supporting body em todas as seções, sem converter textos em cards. Tokens: `--text-lead`, `--lead-color`; classes `.section__eyebrow`, `.section__lead`, `form-lead`. Validado com `.shots/11-typo-full.png`, `12-typo-mobile.png`, `13-motion-sections.png`.
- Segunda passagem de motion (27/08/2026): gestos estilo landing page removidos; remanescentes calibrados (amplitude/duração menores, easing calmo).

## Completo (verificado no código em 27/08/2026)
- One-page completa: Hero, Marquee, Sobre, Especialidades (4 cards), Diferenciais (4 itens),
  Como atuo (4 passos), Conteúdo (4 temas reais dos posts), Instagram (mosaico de 7 slots),
  Contato, Footer.
- Identidade visual aprovada e aplicada: verde-sálvia + creme + terracota, Fraunces + Inter,
  arcos orgânicos nas fotos, chips flutuantes, números-fantasma, linha manuscrita SVG,
  marquee assinatura escuro.
- Copy humanizada pt-BR derivada dos posts públicos; nada inventado (bio/formação/e-mail).
- Camada Motion & Depth completa: parallax REAL de mouse no hero (tilt 3D + contra-movimento
  interno da foto + halo respirante seguindo o cursor), placas sobrepostas nas transições
  entre seções com curvas assimétricas variadas, parallax editorial dos números-fantasma,
  reveals escalonados, tilt+spotlight nos cards, brilho no nav CTA, linha que desenha ao carregar.
- Microinterações premium e scroll cinematográfico (rAF unificado, lerp do ponteiro).
- Acessibilidade: prefers-reduced-motion desliga toda a camada; skip-link; ARIA correto.
- WhatsApp integrado (CTAs data-wa-msg + formulário que monta a mensagem). Número confirmado:
  (21) 98233-8381.
- Instagram integrado sem API: rotação horária determinística (mulberry32 + Fisher-Yates)
  com crossfade na virada da hora.
- Responsividade: breakpoints 1024/920/760/480 cobertos.
- Servidor dev Node simples (server.js, porta 3000); README documenta fontes e decisões.
- Validação visual final 27/08/2026: `8-full.png` (travessia marquee→Sobre intacta, contato sticky correto), `9-mobile-final.png` (primeira tela visível e chips limpos), `10-desktop-check.png` (hero desktop inalterado). Console sem erros; `node --check js/main.js` OK.
- Fix de legibilidade mobile: chip Instagram do hero não cobre mais a figcaption (≤920px, `bottom:19%`). Rede de segurança de reveal duplicada no motor rAF (imune a timers congelados).

## Pendente
- Logo é apenas tipográfica (tile PG em CSS); não há asset de logo/monograma definitivo.
- og:image aponta para assets/img/avatar-hd.jpg; poderia ter imagem dedicada de compartilhamento.
- Acervo do Instagram é manual: atualizar pool quando houver posts novos desejados.
- (Resolvidos na FASE 1: favicon criado; alert() substituído por validação inline.)

## Problemas/limitações conhecidos (levantados por inspeção)
- css/style.css (~linha 680): chave de fechamento EXTRA solta após o último bloco
  @media prefers-reduced-motion. Browsers ignoram, mas deve ser removida.
- avatar.jpg tem só 2KB (miniatura antiga); a foto real usada é avatar-hd.jpg (356KB).
- Números-fantasma usam -webkit-text-stroke (teoricamente limitado em browsers muito antigos).
- Sem testes automatizados nem CI (aceitável para estático simples hoje).
- Bio oficial dela segue inacessível publicamente: qualquer texto novo deve continuar
  vindo somente dos posts públicos.

## Decisões registradas
- Não usar embed/API do Instagram: pool local + rotação horária determinística.
- Placas de transição com ritmo propositalmente variado para fugir do padrão mecânico.
- Em dashes reduzidos na copy (preferência consciente anti-estética-de-IA).
- Crédito obrigatório no footer: “Site criado por Silvio Cesar · Todos os direitos autorais reservados”.
