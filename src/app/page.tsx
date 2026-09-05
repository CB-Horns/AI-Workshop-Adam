import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#summary", label: "Summary" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Advisory" },
  { href: "#contact", label: "Contact" },
];

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
      "Early-Stage Operational Leadership",
    ],
  },
  {
    group: "Company Building & Sales",
    items: [
      "Executive Sales & Enterprise Deal Closing",
      "Business Development & Go-to-Market",
      "Data Room, Accounting & Compliance",
      "Global / Cross-Cultural Teams (U.S., Japan, Asia)",
    ],
  },
  {
    group: "Technical Expertise",
    items: [
      "Advanced Materials & Device Physics",
      "OLEDs, Organic Electronics & Thin-Film Coatings",
      "AI, ML & Quantum Integration",
      "R&D, Process Engineering & Scale-Up",
    ],
  },
  {
    group: "Credibility & Leadership",
    items: [
      "128 Granted Patents",
      "60+ Publications",
      "Journal Reviewer (JACS, Chemistry of Materials)",
      "Board & Community Leadership",
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
  { year: "2026", text: "Oklahoma AI Roundtable — Secretary/Treasurer" },
  { year: "2025", text: "Term sheet, Copernic Catalysts partnership (SiC)" },
  { year: "2009", text: "Plextronics, Innovation of the Year" },
  { year: "2005", text: "Kodak Mees R&D Award runner-up" },
  { year: "2004", text: "AISES Sequoyah Medal" },
  { year: "1994", text: "NSF East Asia Fellow" },
  { year: "1985", text: "Eagle Scout, BSA" },
];

const certifications = [
  "Machine Learning — DeepLearning.AI–Coursera (3 courses, Aug. 2026)",
  "Oklahoma Teaching Certificate — OSDE (Feb. 2026)",
  "What is Data Science? — IBM–Coursera (Mar. 2020)",
  "Finance for Senior Executives — Harvard Business School (2020)",
  "MIT xPRO Quantum Computing Certificate Series (QCx1–QCx4, 2019)",
  "Lean Six Sigma Yellow Belt (Nov. 2014)",
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-10 text-3xl font-bold tracking-tight text-accent sm:text-4xl">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 z-50 w-full border-b border-edge bg-navbg/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight text-accent">
              Christopher T. Brown, Ph.D.
            </a>
            <div className="flex items-center gap-5">
              <div className="hidden gap-6 md:flex">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <header className="px-6 pb-16 pt-32 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Technical Executive &amp; Commercialization Leader
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Christopher T. Brown, Ph.D.
            </h1>
            <p className="text-xl leading-relaxed text-muted sm:text-2xl">
              Advanced Materials, AI, Quantum Computing, Early-Stage Growth
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              Senior technical executive with a 25-year record of advancing breakthrough
              technologies in advanced materials, AI, OLEDs, and quantum computing — from lab
              breakthroughs to commercial products, strategic partnerships, and early-stage growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/christopher-brown-1ba0144/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/CB-Horns"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-pill px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-pill-hover"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="summary" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="summary-title">Summary</SectionHeading>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Senior technical executive and commercialization leader with a 25-year record of
              advancing breakthrough technologies in advanced materials, AI, OLEDs, and quantum
              computing. Known for translating complex scientific innovation into commercial
              products, strategic partnerships, and operational systems that scale.
            </p>
            <p>
              Experienced in building early-stage companies, strengthening technical credibility
              with investors and partners, and guiding founders through growth inflection points,
              fundraising readiness, and market entry.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="experience-title">Professional Experience</SectionHeading>
          <div className="space-y-12">
            {experience.map((job) => (
              <div key={`${job.org}-${job.dates}`} className="border-l-2 border-accent pl-6">
                <div className="mb-3 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                    <p className="text-lg font-medium text-accent">
                      {job.org}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                  </div>
                  <p className="mt-1 shrink-0 text-sm tabular-nums text-muted md:mt-0">{job.dates}</p>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="skills-title">Technical Skills</SectionHeading>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group} className="space-y-4">
                <h3 className="text-lg font-bold text-accent">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-pill px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-pill-hover"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="leadership-title">Leadership &amp; Community</SectionHeading>
          <ul className="space-y-6">
            {advisory.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted sm:text-base">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mb-6 mt-14 text-2xl font-bold tracking-tight text-foreground">Education</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {education.map((item) => (
              <div key={item.degree} className="rounded-xl border border-edge bg-background p-5">
                <p className="font-semibold text-foreground">{item.degree}</p>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="honors" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="honors-title">Awards &amp; Honors</SectionHeading>
          <ul className="space-y-5">
            {honors.map((item) => (
              <li key={item.text} className="flex items-baseline gap-4">
                <span className="w-14 shrink-0 text-sm font-bold tabular-nums text-accent">{item.year}</span>
                <span className="text-sm leading-6 text-muted sm:text-base">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="education-certifications" className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="certifications-title">Certifications</SectionHeading>
          <ul className="space-y-3">
            {certifications.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-muted sm:text-base">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading id="contact-title">Contact</SectionHeading>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Location</h3>
                  <p className="mt-1 text-muted">Norman, Oklahoma</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/christopher-brown-1ba0144/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-accent transition-colors hover:underline"
                  >
                    linkedin.com/in/christopher-brown-1ba0144
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 shrink-0 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-foreground">GitHub</h3>
                  <a
                    href="https://github.com/CB-Horns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-accent transition-colors hover:underline"
                  >
                    github.com/CB-Horns
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="mt-1 h-6 w-6 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Initiative</h3>
                  <p className="mt-1 text-muted">Oklahoma AI Roundtable — Secretary/Treasurer (volunteer)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-edge bg-surface px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted">
          © {new Date().getFullYear()} Christopher T. Brown, Ph.D.
        </div>
      </footer>
    </div>
  );
}