import ThemeToggle from "./ThemeToggle";

const experience = [
  {
    role: "Co-Founder",
    org: "Stealth Startup",
    location: null,
    dates: "2026–present",
    bullets: ["Stay tuned."],
  },
  {
    role: "Consultant",
    org: "SciSpace",
    location: null,
    dates: "2026–present",
    bullets: [
      "Technical and executive sales consultant.",
      "SciSpace is the AI research assistant for academics — run systematic literature reviews on 280M+ papers and write papers with cited sources.",
    ],
  },
  {
    role: "Secretary/Treasurer",
    org: "Oklahoma AI Roundtable",
    location: null,
    dates: "2026–present (Volunteer)",
    bullets: [
      "Technical and executive consultant.",
      "The OK AI Roundtable connects Oklahoma's business community, state government, and higher education institutions around a shared AI strategy, building the coordination, literacy, and ecosystem our state needs to compete and lead in the AI economy.",
    ],
  },
  {
    role: "Principal",
    org: "Browningham Consulting",
    location: "Norman, OK",
    dates: "2026–present",
    bullets: [
      "Provide technical consulting in advanced materials, AI, OLEDs, and quantum computing, delivering tailored solutions to optimize system performance.",
      "Advise early-stage technical startups on best practices, fundraising readiness, investor relations, and foundational operations to accelerate growth and credibility.",
    ],
  },
  {
    role: "Vice President, Business Development",
    org: "Sensor Intelligence & Computation Systems (SiC)",
    location: "Nashville, TN",
    dates: "2025–2026",
    bullets: [
      "Originated and secured a term sheet for the Copernic Catalysts partnership, establishing the strategic direction SiC continued pursuing after his departure.",
      "Supported pre-seed fundraising and investor relations, contributing to the successful $2.5M round and strengthening external credibility.",
      "Built the company's foundational operations (accounting, payroll, healthcare, compliance, and investor-ready data room), establishing best-practice infrastructure for a credible, fundable deep-tech startup.",
    ],
  },
  {
    role: "Executive Director of Materials Discovery",
    org: "Schrödinger",
    location: "Boston, MA",
    dates: "2021–2025",
    bullets: [
      "Negotiated and closed multiple strategic partnerships (including Copernic Catalysts and Eonix Energy) that expanded Schrödinger's materials discovery footprint and accelerated customer adoption.",
      "Led the joint development of the Neptune™ ammonia synthesis catalyst with Copernic, achieving more than double the ammonia yield of competing catalysts under real-world reactor conditions.",
      "Delivered milestone-driven technical and commercial achievements that generated six-figure revenue and advanced partner deployment of Schrödinger's materials platform.",
      "Drove commercialization pathways across multiple programs, translating computational breakthroughs into validated industrial workflows and customer value.",
    ],
  },
  {
    role: "Director of Quantum Solutions | GM Asia",
    org: "Zapata Computing",
    location: "Boston, MA",
    dates: "2019–2021",
    bullets: [
      "Closed multimillion-dollar BASF and Coca-Cola deals that enabled Zapata's $30M Series A.",
      "Drove commercialization of quantum and ML solutions for industrial chemistry and operations.",
      "Built Zapata's Asia presence as GM, establishing partnerships, operational systems, and regional market strategy.",
    ],
  },
  {
    role: "Technical Executive & Commercialization Leader",
    org: "Selected previous roles",
    location: null,
    dates: "1997–2021",
    bullets: [
      "Eastman Kodak (Sr Scientist) | Plextronics (Director) | Kateeva (VP Process Engineering) | Kyulux (VP Products) | Rogers (Director, Platform Innovation).",
    ],
  },
];

const skills = [
  {
    group: "Commercialization & Strategy",
    items: [
      "Commercialization Strategy & Technical Productization",
      "Strategic Partnerships & Enterprise Collaboration",
      "Investor Credibility & Fundraising Readiness",
      "Early-Stage Operational Leadership (finance, HR, compliance)",
    ],
  },
  {
    group: "Technical Expertise",
    items: [
      "Advanced Materials & Device Physics (OLEDs, organic electronics, thin-film coatings, engineered materials)",
      "AI, ML & Quantum Integration",
      "R&D, Process Engineering & Scale-Up",
      "Intellectual Property Leadership (128 granted patents, 60+ publications)",
      "Cross-Cultural & Global Leadership (U.S., Japan, Asia)",
    ],
  },
];

const advisory = [
  "Vice President, East Regions, Society for Information Display (SID)",
  "Advisor to Agira, Z-Carbon, and Sbur — supporting early-stage growth and investor readiness",
  "Committee Member, SID OLED Planning/Paper Committee (2015–2019)",
  "Reviewer for leading journals including JACS, Chemistry of Materials, and Journal of Organic Chemistry",
  "Community Leadership: President, Native American Council at Kodak; Eagle Scout, Boy Scouts of America",
];

const education = [
  { degree: "Ph.D., Chemistry", school: "University of Texas at Austin" },
  { degree: "B.S., Chemistry", school: "SUNY Stony Brook" },
  { degree: "B.S., Biochemistry", school: "SUNY Stony Brook" },
];

const honors = [
  "Plextronics, Innovation of the Year (2009)",
  "Kodak Mees R&D Award runner-up (2005)",
  "AISES Sequoyah Medal (2004)",
  "NSF East Asia Fellow (1994)",
  "Eagle Scout, BSA (1985)",
  "Edmond Memorial High School Soccer Team Captain (State Runners Up 1984, 1985)",
];

const certifications = [
  "Machine Learning — DeepLearning.AI–Coursera (3 courses, Aug. 2026)",
  "Oklahoma Teaching Certificate — OSDE (Feb. 2026)",
  "What is Data Science? — IBM–Coursera (Mar. 2020)",
  "Finance for Senior Executives — Harvard Business School (2020)",
  "MIT xPRO Quantum Computing Certificate Series (QCx1–QCx4, 2019)",
  "Lean Six Sigma Yellow Belt (Nov. 2014)",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <header className="sticky top-0 z-10 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
            Christopher T. Brown, Ph.D.
          </a>
          <ThemeToggle />
        </div>
      </header>

      <main id="main" className="mx-auto w-full max-w-4xl flex-1 px-5 sm:px-8">
        <section aria-label="Profile" className="pt-12 sm:pt-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Technical Executive &amp; Commercialization Leader
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Christopher T. Brown, Ph.D.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Advanced Materials, AI, Quantum Computing, Early-Stage Growth
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6Zm0 8.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z" clipRule="evenodd" fillRule="evenodd" />
              </svg>
              Norman, OK
            </span>
            <a
              href="https://www.linkedin.com/in/christopher-brown-1ba0144/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/CB-Horns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        <section aria-labelledby="summary" className="pt-12 sm:pt-14">
          <h2 id="summary" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Summary
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Senior technical executive and commercialization leader with a 25-year record of advancing breakthrough
            technologies in advanced materials, AI, OLEDs, and quantum computing. Known for translating complex
            scientific innovation into commercial products, strategic partnerships, and operational systems that scale.
            Experienced in building early-stage companies, strengthening technical credibility with investors and
            partners, and guiding founders through growth inflection points, fundraising readiness, and market entry.
          </p>
        </section>

        <section aria-labelledby="experience" className="pt-12 sm:pt-14">
          <h2 id="experience" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Experience
          </h2>
          <ol className="mt-5 space-y-10">
            {experience.map((job) => (
              <li key={`${job.org}-${job.dates}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{job.role}</h3>
                    <p className="text-sm font-medium text-accent">
                      {job.org}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm tabular-nums text-zinc-500 dark:text-zinc-400">{job.dates}</p>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills" className="pt-12 sm:pt-14">
          <h2 id="skills" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Skills
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                <h3 className="text-sm font-semibold text-foreground">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="advisory" className="pt-12 sm:pt-14">
          <h2 id="advisory" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Advisory &amp; Professional Service
          </h2>
          <ul className="mt-5 space-y-2">
            {advisory.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="education" className="pt-12 sm:pt-14">
          <h2 id="education" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Education
          </h2>
          <ul className="mt-5 space-y-3">
            {education.map((item) => (
              <li key={item.degree} className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-foreground">{item.degree}</span> — {item.school}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="certifications" className="pt-12 sm:pt-14">
          <h2 id="certifications" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Certifications
          </h2>
          <ul className="mt-5 space-y-2">
            {certifications.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="honors" className="pt-12 sm:pt-14">
          <h2 id="honors" className="text-lg font-bold uppercase tracking-widest text-foreground">
            Awards &amp; Honors
          </h2>
          <ul className="mt-5 space-y-2">
            {honors.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-4xl px-5 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:px-8">
          © {new Date().getFullYear()} Christopher T. Brown, Ph.D.
        </div>
      </footer>
    </div>
  );
}