# Site — Patrícia Gomes · Fisioterapia, Pilates & RPG

Página profissional e responsiva construída para a fisioterapeuta **Patrícia Gomes**, a partir
das informações publicamente disponíveis no perfil público do Instagram
**[@fisio.patriciagomes](https://www.instagram.com/fisio.patriciagomes/)** e das confirmações
editoriais fornecidas pela responsável pelo projeto.

## Como rodar

```bash
cd C:\AI-Teste-Nemotron\site-patricia
node server.js
```

Acesse **http://localhost:3000**.

> Alternativa: abra `index.html` diretamente no navegador (o formulário e as âncoras
> funcionam; o envio pelo WhatsApp abre em nova aba).

## Estrutura

```
site-patricia/
├── index.html        # página única com todas as seções
├── css/style.css     # estilos (design + responsividade)
├── js/main.js        # interatividade (menu, scroll, formulário)
├── server.js         # servidor estático local (Node)
├── assets/img/       # imagens públicas reais baixadas do perfil
└── README.md
```

## Seções

Home · Sobre · Serviços/Tratamentos · Diferenciais · Como atuo · Conteúdo · Instagram · Contato

---

## Origem das informações

### Fonte (Instagram — dados públicos reais)

- **Nome:** Patrícia Gomes
- **Usuário:** @fisio.patriciagomes (perfil público)
- **Métricas do perfil:** 660 seguidores · 52 publicações (coletadas do embed oficial do perfil)
- **Profissão:** Fisioterapeuta
- **Serviços/áreas citados em posts:** Fisioterapia, Pilates (incluindo “Pilates avançado” e
  “Pilates para bailarinos”) e **Recovery**
- **Formação/abordagem confirmada editorialmente:** **RPG – Método Souchard**
- **Abordagem divulgada em posts:** restaurar movimentos, prevenir lesões, melhorar a
  funcionalidade, tratamento da dor, reabilitação de lesões e **atendimento individualizado**
- **Temas recorrentes dos posts:** tendinopatia/tendinite/tendinose/tenossinovite, gelo x calor,
  tempo de cicatrização dos tecidos, reabilitação e prevenção de lesões
- **Contato público (publicado em posts):** WhatsApp **(21) 98233-8381** e endereço do local de
  atendimento — **Physical Center by Roberta Lomenha, Av. Treze de Maio, 47 · Sala 2106 · Centro,
  Rio de Janeiro/RJ**
- **Imagens:** foto de perfil e fotos públicas de publicações do perfil, baixadas diretamente
  (pasta `assets/img/`)

### Não disponível publicamente (sem acesso anônimo)

- O **texto literal da bio** do perfil não foi recuperável sem login — o site usa os temas e
  frases publicados nos próprios posts, sem inventar formação ou títulos.
- Não há **e-mail, site próprio, horários ou lista formal de serviços** publicados no perfil;
  portanto essas informações **não foram inventadas** no site.

### Decisões de design (não vieram do Instagram)

- **Estrutura/nomenclatura das seções** (Home, Sobre, Serviços, Diferenciais, Conteúdo,
  Instagram, Contato).
- **Identidade visual:** paleta verde-sálvia + creme + terracota, tipografia (Fraunces + Inter),
  layout, animações, ícones e composição geral — criados para transmitir saúde, movimento,
  acolhimento e elegância.
- **Textos de apoio** que resumem/parafraseiam os temas reais dos posts (frases como
  “movimento é saúde, prevenção e cura” são adaptações das frases publicadas por ela).
- **Formulário de contato** — envia a mensagem para o WhatsApp real publicado no perfil.

---

## Camada de motion & profundidade

- **Foto do hero:** parallax de ponteiro com leve tilt 3D, contra-movimento da imagem e halo
  quente que segue o cursor — ativo apenas em desktop com ponteiro fino, suavizado por lerp e
  desativado com `prefers-reduced-motion`.
- **Transições entre seções:** blocos sobrepostos em camadas ("placas") com curvas orgânicas
  assimétricas avançando sobre a seção anterior.
- **Instagram dinâmico:** o mosaico é reorganizado deterministicamente por hora (seed = hora
  atual, PRNG mulberry32), com crossfade na virada enquanto a página fica aberta.
- **Rodapé:** site criado por **Silvio Cesar** — todos os direitos autorais reservados.
