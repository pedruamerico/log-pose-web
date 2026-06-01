import { APP_VERSION, BrandMark, DownloadButton } from "./components";

const FAQ_ITEMS = [
  {
    q: "O Log Pose é gratuito?",
    a: "Sim, totalmente grátis. É um catálogo curado que usa o winget (o gerenciador de pacotes oficial da Microsoft) para instalar os apps direto da fonte oficial de cada um.",
  },
  {
    q: "É seguro? De onde vêm os programas?",
    a: "Sim. O Log Pose não hospeda nem modifica os instaladores — ele apenas aciona o winget, que baixa cada programa direto do publisher oficial. Nada de bloat ou software pirata.",
  },
  {
    q: "Com quais versões do Windows funciona?",
    a: "Windows 10 e 11. O winget já vem incluído nessas versões; se não estiver presente, o Windows o instala automaticamente pela Microsoft Store.",
  },
  {
    q: "Preciso instalar o Log Pose?",
    a: "Não. É um arquivo único e portátil — baixou, abriu e já está pronto pra navegar. Sem setup demorado e sem deixar resíduos no sistema.",
  },
  {
    q: "Posso escolher só alguns apps?",
    a: "Com certeza. Você navega por categorias curadas — navegadores, jogos, dev, mídia, drivers e mais — e marca apenas o que importa pra você. O Log Pose instala tudo de uma vez.",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* page-wide background decoration */}
      <div className="bg-deco" aria-hidden="true">
        <div className="grid-deco" />
        <svg className="rings" viewBox="0 0 920 920">
          <circle cx="460" cy="460" r="120" />
          <circle cx="460" cy="460" r="220" />
          <circle cx="460" cy="460" r="320" />
          <circle cx="460" cy="460" r="430" />
          <line x1="460" y1="0" x2="460" y2="920" />
          <line x1="0" y1="460" x2="920" y2="460" />
        </svg>
      </div>

      <header>
        <div className="wrap nav">
          <div className="brand">
            <BrandMark />
            Log Pose
          </div>
          <nav className="nav-links">
            <a href="#como-funciona">Como funciona</a>
            <a href="#screenshot">O app</a>
            <a href="#faq">FAQ</a>
            <DownloadButton className="btn btn-primary btn-sm" label="Baixar" />
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <svg
            className="hero-compass"
            viewBox="0 0 560 560"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="280"
              cy="280"
              r="60"
              stroke="rgba(var(--accent-rgb),0.5)"
              strokeWidth="1.2"
            />
            <circle
              cx="280"
              cy="280"
              r="130"
              stroke="oklch(0.4 0.02 285 / 0.45)"
              strokeWidth="1"
            />
            <circle
              cx="280"
              cy="280"
              r="200"
              stroke="oklch(0.36 0.02 285 / 0.4)"
              strokeWidth="1"
            />
            <circle
              cx="280"
              cy="280"
              r="270"
              stroke="oklch(0.32 0.02 285 / 0.3)"
              strokeWidth="1"
            />
            <line
              x1="280"
              y1="10"
              x2="280"
              y2="550"
              stroke="oklch(0.34 0.02 285 / 0.3)"
              strokeWidth="1"
            />
            <line
              x1="10"
              y1="280"
              x2="550"
              y2="280"
              stroke="oklch(0.34 0.02 285 / 0.3)"
              strokeWidth="1"
            />
            <g className="compass-needle">
              <polygon
                points="280,150 296,280 280,280"
                fill="var(--accent-bright)"
                opacity="0.9"
              />
              <polygon
                points="280,410 264,280 280,280"
                fill="oklch(0.45 0.02 285)"
              />
              <circle cx="280" cy="280" r="9" fill="var(--accent)" />
            </g>
          </svg>
          <div className="wrap">
            <span className="eyebrow">
              <span className="dot" />
              Instalador para Windows · winget
            </span>
            <h1>
              Guiando o seu PC para a{" "}
              <span className="hl">Ilha do Desempenho</span>
            </h1>
            <p className="sub">
              Um catálogo curado de apps essenciais, sem bloat. Marque o que você
              quer e o Log Pose instala tudo em um clique — leve, rápido e do seu
              jeito.
            </p>
            <div className="cta-row">
              <DownloadButton />
              <a className="btn btn-ghost" href="#como-funciona">
                Como funciona
              </a>
            </div>
            <div className="meta">
              <span>
                <span className="d" />
                Grátis
              </span>
              <span>
                <span className="d" />
                Windows 10 / 11
              </span>
              <span>
                <span className="d" />
                Arquivo único · v{APP_VERSION}
              </span>
            </div>
          </div>
        </section>

        {/* SCREENSHOT */}
        <section className="shot-section" id="screenshot">
          <div className="wrap">
            <div className="window">
              <div className="shot-glow" aria-hidden="true" />
              <div className="titlebar">
                <span className="tdot" style={{ background: "#ff5f57" }} />
                <span className="tdot" style={{ background: "#febc2e" }} />
                <span className="tdot" style={{ background: "#28c840" }} />
                <span className="title">Log Pose — v{APP_VERSION}</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/log-pose-app.png"
                alt="Interface do Log Pose mostrando o catálogo de apps por categorias"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how" id="como-funciona">
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">Como funciona</div>
              <h2>Do download ao PC pronto em três passos</h2>
              <p>
                Sem instalação chata, sem caçar instaladores na internet. O Log
                Pose traça a rota.
              </p>
            </div>
            <div className="steps">
              <div className="step">
                <div className="num">01</div>
                <h3>Baixe e abra</h3>
                <p>
                  Um único arquivo, leve e portátil. Abriu, já está pronto pra
                  navegar — sem setup demorado.
                </p>
                <div className="glyph">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                  </svg>
                </div>
              </div>
              <div className="step">
                <div className="num">02</div>
                <h3>Escolha seus apps</h3>
                <p>
                  Navegue por categorias curadas — navegadores, jogos, dev,
                  mídia, drivers e mais. Marque tudo que importa.
                </p>
                <div className="glyph">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
              </div>
              <div className="step">
                <div className="num">03</div>
                <h3>Instale em 1 clique</h3>
                <p>
                  O Log Pose cuida do resto via winget e baixa tudo direto da
                  fonte oficial. Você só espera a mágica acontecer.
                </p>
                <div className="glyph">
                  <svg
                    viewBox="0 0 24 24"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section" id="faq">
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">FAQ</div>
              <h2>Perguntas frequentes</h2>
              <p>O que você precisa saber antes de zarpar.</p>
            </div>
            <div className="faq">
              {FAQ_ITEMS.map((item) => (
                <details className="faq-item" key={item.q}>
                  <summary>
                    {item.q}
                    <svg
                      className="faq-chevron"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <div className="brand">
            <BrandMark />
            Log Pose
          </div>
          <div className="copy">© 2026 Log Pose · feito para Windows</div>
        </div>
      </footer>
    </>
  );
}
