export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
          AWS Certified Cloud Practitioner
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Jyothish Boyina
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium text-slate-300 sm:text-xl">
          Computer Science Undergraduate crafting full-stack web experiences with{' '}
          <span className="text-white">React, Spring Boot &amp; Python</span>.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I build AI-powered and data-driven applications — from intelligent chatbots to
          forecasting tools and full-stack platforms. Scroll down to see my work.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
          >
            View Projects
          </a>
          <a
            href="mailto:jyothish24092004@gmail.com"
            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/jyothish-boyina_prft"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600 text-slate-200 transition hover:border-slate-400 hover:text-white"
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
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-600 text-slate-200 transition hover:border-slate-400 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">9.10</span>
            <div className="text-left">
              <p className="font-semibold text-white">9.10 CGPA</p>
              <p className="text-slate-400">VIT-AP University</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">AWS</span>
            <div className="text-left">
              <p className="font-semibold text-white">AWS Certified</p>
              <p className="text-slate-400">Cloud Practitioner</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">3+</span>
            <div className="text-left">
              <p className="font-semibold text-white">3+</p>
              <p className="text-slate-400">Projects built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
