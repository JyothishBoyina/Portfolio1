import profileImage from '../assets/Profile.jpg'

function TechIcon({ name }) {
  const common = 'h-4 w-4 fill-current'

  switch (name) {
    case 'Java':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M6 4h10a2 2 0 0 1 2 2v2.5A2.5 2.5 0 0 1 15.5 11H14v2h1.5A2.5 2.5 0 0 1 18 15.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2Zm2 3h6v2H8V7Zm0 5h6v2H8v-2Zm-2 6h10v2H6v-2Z" fill="currentColor"/>
          <path d="M17 8c1.2 0 2.5-.6 3.3-1.6.3-.4.7-.3.8.1.1.6.1 1.7-.1 2.3-.6 1.7-2.4 3.2-4.1 3.2H15V9.4c0-1.1.8-1.4 2-1.4Z" fill="currentColor" opacity=".75"/>
        </svg>
      )
    case 'Python':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M9 2h6v4h-2v2h2v2H9V8h2V6H9V2Zm-1 6h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm2 2v4h4v-4h-4Zm1 1h2v2h-2v-2Z" fill="currentColor"/>
        </svg>
      )
    case 'SQL':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4 5.5C4 4.1 6.2 3 9 3s5 1.1 5 2.5S11.8 8 9 8s-5-1.1-5-2.5Zm0 5.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v2c0 1.4-2.2 2.5-5 2.5s-5-1.1-5-2.5v-2Zm0 5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v2c0 1.4-2.2 2.5-5 2.5s-5-1.1-5-2.5v-2Zm12-12h4v12h-4v2h6V3h-6v2.5Z" fill="currentColor"/>
        </svg>
      )
    case 'React':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor"/>
          <path d="M12 2.5c-2.3 0-4.3 1.2-5.7 3.1-1.5 2-2.2 4.7-1.8 7.3.4 2.7 2 5.1 4.2 6.5 2.1 1.4 4.8 2 7.3 1.6 2.6-.4 4.8-2 6.2-4.2 1.4-2.2 1.9-4.9 1.5-7.4-.4-2.6-2-4.9-4.4-6.2A8.3 8.3 0 0 0 12 2.5Zm0 2.2a6.5 6.5 0 0 1 5.4 3.2 6.6 6.6 0 0 1-1.5 7.1 6.5 6.5 0 0 1-7.8 1.2 6.6 6.6 0 0 1-2.8-7.3A6.6 6.6 0 0 1 12 4.7Zm0 4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z" fill="currentColor" opacity=".7"/>
        </svg>
      )
    case 'HTML5':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Zm3.5 4.2 1 9.2 5 1.4 5-1.4 1-9.2H7.5Zm1.8 2.1h6.3l-.2 2.1-2 1.1-2-.9-.2-1.2h-1.8l.4 3.4 3.6 1.3 3.6-1.3.8-5.1H9.3l-.2 1.7H11l.1 1.2 1.9.8 1.9-.8.2-2.1H8.3Z" fill="currentColor"/>
        </svg>
      )
    case 'CSS3':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4 3h16l-1.5 16.1L12 21l-6.5-1.9L4 3Zm3.3 4.1 1.1 8.7 5.6 1.7 5.5-1.7.9-7.3H7.3Zm4.7 1.6h3.4l-.6 3.2-1.3.6-1.2-.6-.2-1.1h-1.5l.5 3.8 3.3 1.2 3.2-1.2.5-4.5H9.9l-.4-2h7.3l-.1-1.4H8.3l.2 1.4h3.7Z" fill="currentColor"/>
        </svg>
      )
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2 4 5.5v13L12 22l8-3.5v-13L12 2Zm0 2.3 5.8 2.6L12 9.5 6.2 6.9 12 4.3Zm-6 4.1 5 2.2v7.3l-5-2.1V8.4Zm12 0v7.4l-5 2.1v-7.3l5-2.2Z" fill="currentColor"/>
        </svg>
      )
    case 'Spring Boot':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2c5.7 0 10 3.6 10 8.1 0 2.8-2.1 5.2-5.5 6.5l-1.3.5v2.9h-6.4v-2.8l-1.4-.5C4.1 15.3 2 12.9 2 10.1 2 5.6 6.3 2 12 2Zm-1.3 5.3L7 11.7l3.1 1.3v2.9l2.8-2.6-2.8-1.3v-2.7Zm3.1 0v7.5h2.4V7.3h-2.4Z" fill="currentColor"/>
        </svg>
      )
    case 'REST APIs':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M6 8.5A2.5 2.5 0 1 1 6 13.5a2.5 2.5 0 0 1 0-5Zm12 0A2.5 2.5 0 1 1 18 13.5a2.5 2.5 0 0 1 0-5ZM9 11h6v2H9v-2Zm-1 4h8v3H8v-3Zm0-8h8v3H8V7Z" fill="currentColor"/>
        </svg>
      )
    case 'Git':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM8 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-4.5V8.5m0 0h6.5A2.5 2.5 0 0 1 17 11v1.5m-9 0V14" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.04 1.56 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02A9.45 9.45 0 0 1 12 7.2c.85 0 1.7.11 2.49.33 1.9-1.29 2.74-1.02 2.74-1.02.56 1.4.2 2.45.1 2.7.64.7 1.03 1.58 1.03 2.68 0 3.85-2.33 4.69-4.56 4.94.36.31.67.92.67 1.85v2.74c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" fill="currentColor"/>
        </svg>
      )
    case 'VS Code':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M16.8 3.7 8 9.2l-3.5-2.4L3 7.7l4.4 3L3 14.3l1.5 1.1L8 13l8.8 5.5 4.2-2V5.7l-4.2-2Zm0 4.2v8.2l-7.1-4.1 7.1-4.1Z" fill="currentColor"/>
        </svg>
      )
    case 'MySQL':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M6 3.5h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Zm0 3h12v2H6v-2Zm0 4h12v2H6v-2Zm0 4h8v2H6v-2ZM18 6h1v2h-1V6Zm0 4h1v2h-1v-2Zm0 4h1v2h-1v-2Z" fill="currentColor"/>
        </svg>
      )
    case 'Postman':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M7 4.5A2.5 2.5 0 0 1 9.5 2h5A2.5 2.5 0 0 1 17 4.5v1.2A2.3 2.3 0 0 1 19.3 8v.7h-14.6V8A2.3 2.3 0 0 1 7 5.7V4.5Zm2 4.2h6l.6 8.1A2.3 2.3 0 0 1 13.3 19h-2.6a2.3 2.3 0 0 1-2.3-2.2L7 8.7Z" fill="currentColor"/>
        </svg>
      )
    case 'Power BI':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M4 18h2V8h3v10H4Zm5 0h2V4h3v14h-5Zm5 0h2V12h3v6h-5Z" fill="currentColor"/>
        </svg>
      )
    case 'OpenAI':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2c1.7 0 3.3.7 4.4 1.9l-1.2 1.3A6.4 6.4 0 0 0 12 5.5a6.5 6.5 0 0 0-5.4 3.1l-1.4-1A8.7 8.7 0 0 1 12 2Zm-6.1 7c.2-.5.5-1 .8-1.5l1.4 1A6.5 6.5 0 0 0 5.5 12 6.5 6.5 0 0 0 12 18.5c1.8 0 3.4-.7 4.6-1.8l1.2 1.3A8.7 8.7 0 0 1 12 21a8.9 8.9 0 0 1-8.4-5.5l1.5-1A6.5 6.5 0 0 0 12 18.5a6.5 6.5 0 0 0 5.6-3.1l1.3 1.1A8.7 8.7 0 0 1 12 21a8.9 8.9 0 0 1-8.4-5.5L12 10.7l2.8 3.2 1.5-1.2-2.7-3.2-1.6 1.1L12 10.7 9 7.3l-1.6 1.1 2.5 2.9-1.5 1.2L7 9.9l-1.1.8Z" fill="currentColor"/>
        </svg>
      )
    case 'Machine Learning':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M8 3.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.2h1.5A2.5 2.5 0 0 1 20 7.2V9a2 2 0 0 1-2 2h-1.1v2H18a2 2 0 0 1 2 2v1.8a2.5 2.5 0 0 1-2.5 2.5H16v1.2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.2H6.5A2.5 2.5 0 0 1 4 16.8V15a2 2 0 0 1 2-2h1.1v-2H6A2 2 0 0 1 4 9V7.2A2.5 2.5 0 0 1 6.5 4.7H8V3.5Zm2 1.7h4v1.2H10V5.2Zm-1.5 3h7V9h-7v-.8Zm-1.5 4h10v2h-10v-2Zm2 4h6v1.3h-6V16.2Z" fill="currentColor"/>
        </svg>
      )
    case 'Pandas':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M8 2h2v4H8V2Zm0 6h2v14H8V8Zm6-6h2v4h-2V2Zm0 6h2v14h-2V8ZM4 6h2v2H4V6Zm10 0h2v2h-2V6ZM4 12h2v2H4v-2Zm10 0h2v2h-2v-2ZM4 18h2v2H4v-2Zm10 0h2v2h-2v-2Z" fill="currentColor"/>
        </svg>
      )
    case 'NumPy':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M7 4h2v16H7V4Zm8 0h2v16h-2V4ZM6 7h12v2H6V7Zm0 8h12v2H6v-2Z" fill="currentColor"/>
        </svg>
      )
    case 'scikit-learn':
      return (
        <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
          <path d="M12 2.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19Zm0 2.1a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 0-14.8Zm-1.3 2.3h2.6v1.8h-2.6V6.9Zm-2 3.3h6.6v1.8H8.7V10.2Zm-1.1 3.7h8.8v1.8H7.6v-1.8Z" fill="currentColor"/>
        </svg>
      )
    default:
      return <span className="h-4 w-4 rounded-full bg-slate-500" />
  }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.20),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="text-left">
            <span className="hero-badge inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-[0.12em] text-indigo-300 uppercase">
              AWS Certified Cloud Practitioner
            </span>

            <div className="hero-badge mt-4 inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              Associate Technical Consultant @ Perficient India
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Jyothish Boyina
              </span>
            </h1>

            <p className="mt-5 max-w-4xl text-xl font-medium leading-[1.2] text-slate-200 sm:text-2xl lg:text-3xl">
              Working in the{' '}
              <span className="text-white">AI Product Development &amp; Delivery</span> line —
              building AI-powered and data-driven applications with{' '}
              <span className="text-white">React, Java &amp; AI</span>.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
              From intelligent chatbots and LLM-powered tools to forecasting systems and
              full-stack platforms, I build impactful digital products that turn ideas into
              scalable, real-world solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
              >
                View Projects
              </a>
              <a
                href="mailto:jyothish24092004@gmail.com"
                className="rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/jyothish-boyina_prft"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                <svg viewBox="0 0 16 16" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/boyina-jyothish/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-600 bg-slate-900/60 text-slate-200 transition hover:border-slate-400 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-card relative mx-auto w-full max-w-md">
            <div className="hero-glow absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-indigo-500/30 via-sky-400/20 to-cyan-400/10 blur-2xl" />
            <div className="hero-image-wrap relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/60">
              <img
                src={profileImage}
                alt="Jyothish Boyina profile"
                className="h-[440px] w-full rounded-[1.5rem] object-cover object-center"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-slate-800/80 p-3">
                  <div className="text-lg font-bold text-white">9.10</div>
                  <div className="text-[11px] text-slate-400">CGPA</div>
                </div>
                <div className="rounded-xl bg-slate-800/80 p-3">
                  <div className="text-lg font-bold text-white">AWS</div>
                  <div className="text-[11px] text-slate-400">Certified</div>
                </div>
                <div className="rounded-xl bg-slate-800/80 p-3">
                  <div className="text-lg font-bold text-white">3+</div>
                  <div className="text-[11px] text-slate-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6 text-left">
          <div className="info-card rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30">
            <h2 className="mb-5 text-lg font-semibold uppercase tracking-[0.12em] text-sky-300">
              Certifications
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2">
                <span className="font-medium text-white">AWS Certified Cloud Practitioner</span>
                <span className="rounded-full bg-amber-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-300">
                  AWS
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2">
                <span className="font-medium text-white">MongoDB Database Administrator</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-300">
                  MongoDB
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-3 py-2">
                <span className="font-medium text-white">Oracle GenAI Certification</span>
                <span className="rounded-full bg-red-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-red-300">
                  Oracle
                </span>
              </div>
            </div>
          </div>

          <div className="info-card rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30">
            <h2 className="mb-5 text-lg font-semibold uppercase tracking-[0.12em] text-sky-300">
              Technical Skills
            </h2>

            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Python', 'SQL'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  Frontend
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  Backend
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Spring Boot', 'REST APIs', 'Java'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'MySQL', 'Postman', 'Power BI'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-300">
                  AI/ML
                </div>
                <div className="flex flex-wrap gap-2">
                  {['OpenAI', 'Machine Learning', 'Pandas', 'NumPy', 'scikit-learn'].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-100"
                    >
                      <TechIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="info-card rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30">
            <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.12em] text-sky-300">
              Relevant Coursework
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Data Structures and Algorithms</li>
              <li>• Object-Oriented Programming</li>
              <li>• Database Management Systems</li>
              <li>• Operating Systems</li>
              <li>• Software Development Life Cycle</li>
            </ul>
          </div>

          <div className="info-card rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/30">
            <h2 className="mb-4 text-lg font-semibold uppercase tracking-[0.12em] text-sky-300">
              Leadership &amp; Activities
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>• Member, Designing Team – Photography Club, VIT-AP University</li>
              <li>• Participated in Google DevSprint Hackathon 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
