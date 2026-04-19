/**
 * Case study content — plain data, no framework coupling.
 * Edit here to update any case study page.
 */

export type CaseStudyMetric = { label: string; value: string };

export type CaseStudyApproach = { heading: string; body: string };

export type CaseStudy = {
  slug: string;
  client: string;
  tagline: string;            // one-line hero headline
  year: string;
  role: string;                // "Product engineering" / "Design + engineering"
  tags: string[];              // short chip labels
  liveUrl?: string;

  motto: string;               // the ONE engineering thesis
  intro: string;               // 1-2 sentence product summary

  challenge: string;           // the problem
  approach: CaseStudyApproach[];

  engineering: {
    heading: string;
    body: string;
    highlights: CaseStudyMetric[];
  };

  scale: string;               // one-liner on what's live
  coverKind: 'fresherbot' | 'askdino' | 'plotmagic' | 'kura' | 'piofx' | 'oddits';
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fresherbot',
    client: 'Fresherbot',
    tagline: 'Campus recruitment, rebuilt around AI proctoring.',
    year: '2024',
    role: 'Product engineering',
    tags: ['B2B SaaS', 'AI proctoring', 'EdTech', 'Enterprise'],
    liveUrl: 'https://fresherbot.com',

    motto: 'Deterministic AI proctoring at university scale.',
    intro:
      'Enterprise campus-recruitment platform unifying assessments, training, resume tools, and alumni networks — trusted by 100+ universities and 500+ hiring partners.',

    challenge:
      'University placement cells were juggling fragmented tools — assessment vendors, resume builders, alumni directories, recruiter CRMs — none talking to each other. Companies running campus drives couldn\'t verify candidate integrity at scale. Proctoring vendors were opaque black boxes that fell over when 2,000 students took an exam at once.',

    approach: [
      {
        heading: 'One data model across placement, assessment, and alumni',
        body: 'We replaced four stitched-together tools with a single schema where a student, a test, a placement offer, and an alumni record all live in one queryable graph. Universities finally get the reports they\'ve been building manually in Excel.',
      },
      {
        heading: 'AI proctoring as a first-class subsystem',
        body: 'Not a widget bolted on the exam page — a pipeline. Browser signals + camera frames + audio anomalies flow into an event queue, get scored by inference workers, and emit deterministic flags with confidence scores and frame-level evidence.',
      },
      {
        heading: 'Exam engine built for concurrency',
        body: 'Tens of thousands of candidates take assessments simultaneously during placement season. The exam runtime is stateless; session state lives in Redis; proctoring inference runs async so exam UI stays snappy.',
      },
      {
        heading: 'Tenancy from day one',
        body: 'Multi-university, multi-institution isolation baked into the data layer — a university admin never sees another university\'s student data, even by accident. Row-level tenant scoping, not app-level filtering.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'Every proctoring vendor we looked at was a black box — they flag a candidate, you trust them, and when a student disputes the flag you have nothing to show the grievance committee. We built the proctoring pipeline differently: every frame, every anomaly, every confidence score is retained as structured evidence. Universities can defend a flag (or clear one) with receipts. That audit trail is what made Fresherbot the platform universities trust for high-stakes placement assessments.',
      highlights: [
        { label: 'Universities', value: '100+' },
        { label: 'Hiring partners', value: '500+' },
        { label: 'Peak concurrent sessions', value: 'tens of thousands' },
        { label: 'Avg proctoring inference latency', value: '< 400ms' },
      ],
    },

    scale:
      'Trusted by 100+ universities and 500+ hiring partners for end-to-end campus recruitment.',
    coverKind: 'fresherbot',
  },

  {
    slug: 'askdino',
    client: 'AskDino',
    tagline: 'Study-abroad counseling, scaled with LLMs that don\'t hallucinate.',
    year: '2025',
    role: 'Product engineering',
    tags: ['AI', 'EdTech', 'Consumer', 'Recommendation'],
    liveUrl: 'https://askdino.firstacademy.in/',

    motto: 'Match a student to a university before the CV is ready.',
    intro:
      'AI-powered study-abroad companion that turns a conversation into a structured student profile — then matches it against universities, programs, and scholarships using a deterministic scoring engine.',

    challenge:
      'Study-abroad counseling is a 1-to-many bottleneck. A single human counselor can only guide a handful of students deeply, and the matching problem — "given this student, which universities and scholarships fit?" — is combinatorial. Every naive "AI counselor" we saw hallucinated university rankings, fees, and admission cutoffs.',

    approach: [
      {
        heading: 'Chat as input, structured profile as output',
        body: 'The LLM-powered intake is a conversation, not a form. Function-calling extracts a canonical profile: goals, budget, geography, test scores, preferences.',
      },
      {
        heading: 'University knowledge base as source of truth',
        body: 'A curated graph of universities, programs, score cutoffs, fees, and scholarships. The LLM never invents data — it only narrates matches the engine produces.',
      },
      {
        heading: 'Deterministic matcher',
        body: 'Given a profile, a rule-based scoring engine ranks programs. Counselors can trace why a match surfaced — not wave it away as "the AI said so".',
      },
      {
        heading: 'Human-in-the-loop review',
        body: 'Counselors see AI suggestions before the student does. They can edit, override, or add personal notes. AI scales the 80%; humans own the last mile.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'We split the problem into two layers that most LLM products blur: the conversation (fuzzy, language-model-native) and the decision (structured, rule-based). The conversation extracts a profile; the matcher decides; the LLM narrates the decision. This separation means when a counselor asks "why this university?" the answer is a traceable rule chain — not a black-box vibe. It also means we can swap the LLM vendor tomorrow without touching the matching logic.',
      highlights: [
        { label: 'Programs indexed', value: 'Thousands' },
        { label: 'Match latency', value: '< 800ms' },
        { label: 'Hallucinated data rate', value: '~0%' },
        { label: 'Counselor review turnaround', value: 'Minutes, not days' },
      ],
    },

    scale: 'Live for counseling teams handling study-abroad applications at scale.',
    coverKind: 'askdino',
  },

  {
    slug: 'plotmagic',
    client: 'Plotmagic',
    tagline: 'Real-estate plot layouts in seconds — not spreadsheets.',
    year: '2025',
    role: 'Product engineering',
    tags: ['Real estate', 'Generative design', 'B2B'],
    liveUrl: 'https://plotmagic.in',

    motto: 'Generative geometry beats AutoCAD for first-pass layouts.',
    intro:
      'A plot-design platform for real-estate developers: feed it a boundary polygon and planning constraints, get instant layout variants with road networks, setbacks, and saleable-area math.',

    challenge:
      'Developers planning plot layouts — land subdivided into sellable plots — were spending weeks in AutoCAD + Excel, re-measuring every iteration by hand. Every tweak to road width or minimum plot size meant redrawing. Regulators wanted explainable, defensible layouts; ML-based layout tools couldn\'t produce them.',

    approach: [
      {
        heading: 'Constraint-first input',
        body: 'Boundary polygon + setback rules + road-width minimums + target plot sizes — the planner declares what they want, not where to put it.',
      },
      {
        heading: 'Rule-based solver, not ML',
        body: 'The generator walks the constraint space deterministically. Every plot polygon emerges from explicit rules, annotated with area, setback, and frontage metadata.',
      },
      {
        heading: 'Multiple variants, instant iteration',
        body: 'One constraint set yields several layout candidates. Pan, zoom, compare, lock segments, regenerate the rest.',
      },
      {
        heading: 'DXF + PDF export for site execution',
        body: 'Surveyors and contractors need drawings they can take to site. Export preserves geometry, annotations, and layer metadata.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'We considered ML-based generative layouts — the fashionable approach — and rejected it. Planners need outputs they can defend to regulators, lenders, and buyers. "The AI designed it" isn\'t a defence. A rule-based geometric solver produces layouts that are explainable down to every edge: this road is 9m because the local bye-law requires 9m; this plot has 3m setback because you said so. Explainability isn\'t a nice-to-have in regulated planning — it\'s the product.',
      highlights: [
        { label: 'Avg layout generation', value: '< 2s' },
        { label: 'Variants per constraint set', value: '3–5' },
        { label: 'Export formats', value: 'DXF, PDF' },
        { label: 'Traceable rules per edge', value: '100%' },
      ],
    },

    scale: 'Live for real-estate developers and planning consultants.',
    coverKind: 'plotmagic',
  },

  {
    slug: 'kura',
    client: 'Kura',
    tagline: 'Architects ship projects. The software handles everything else.',
    year: '2025',
    role: 'Product engineering · Design',
    tags: ['B2B SaaS', 'Vertical', 'Bloom-powered'],
    liveUrl: 'https://kura-app.fly.dev/',

    motto: 'Bloom\'s userapp template, customized into a vertical SaaS in weeks.',
    intro:
      'A practice-management platform for architecture studios: one project = one page, phased timelines that map to how architects actually work (SD → DD → CD → CA), and a client-facing portal that shares only what clients need to see.',

    challenge:
      'Architects running a practice juggle 20+ active projects, each with its own client stakeholders, drawings, phase deliverables, invoicing, and constantly-sliding schedules. Generic PM tools (Asana, Trello) don\'t speak architectural phase language. Big architect ERPs are enterprise-heavy. The space was underserved.',

    approach: [
      {
        heading: 'Scaffolded on our own framework',
        body: 'Kura started from a `bloom create userapp` command. Auth, roles, multi-tenant database, admin console, email — all pre-wired. Zero infrastructure time.',
      },
      {
        heading: 'Phase-aware progress model',
        body: 'Schematic Design → Design Development → Construction Documents → Construction Administration. The data model speaks architectural language, not generic "task / status".',
      },
      {
        heading: 'Role-split UI',
        body: 'Architects see the full picture. Clients see a trimmed portal — progress, invoices, comments — nothing internal.',
      },
      {
        heading: 'File + invoice + client comms in one view',
        body: 'One project, one page. No tab-hopping between Google Drive, the PM tool, the invoicing tool, and WhatsApp.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'We used our own framework — Bloom — to ship Kura faster than we could have shipped it on any alternative. Every "add a feature" request becomes a folder (Feature-Based Component Architecture). Auth and database and admin came pre-wired. We spent our time on what differentiates Kura (the phase-aware workflow, the client portal) and none of it on infrastructure boilerplate. Kura is proof that the framework we author is production-worthy — because we shipped a vertical SaaS on it ourselves.',
      highlights: [
        { label: 'Time to MVP', value: 'Weeks, not quarters' },
        { label: 'Infrastructure code written', value: 'Near zero' },
        { label: 'Stack', value: 'Bloom · Prisma · Fly.io' },
        { label: 'Built on', value: '@bloomneo/bloom userapp template' },
      ],
    },

    scale: 'Live for architecture practices managing active project portfolios.',
    coverKind: 'kura',
  },

  {
    slug: 'piofx',
    client: 'Piofx',
    tagline: 'Growth, not attendance — an LMS built for outcomes.',
    year: '2024',
    role: 'Product engineering',
    tags: ['EdTech', 'Multi-tenant', 'SaaS'],
    liveUrl: 'https://piofx.com',

    motto: 'Student-centric growth, not course-centric completion.',
    intro:
      'Learning management platform for educational institutions that measures actual student growth over time — with isolation strict enough that one institution\'s student data never meets another\'s, even by accident.',

    challenge:
      'Education institutions (coaching centres, tutoring networks, test-prep chains) needed to measure actual student growth — not just attendance and lesson completion like every off-the-shelf LMS. Their faculty and parents wanted clear, student-centric outcome dashboards they could read on a phone. Tenant isolation had to be iron-clad.',

    approach: [
      {
        heading: 'Outcome-first data model',
        body: 'The primary entity isn\'t a course or lesson — it\'s a student\'s growth timeline. Assessments, feedback, and improvement signals attach to the student, not the lesson plan.',
      },
      {
        heading: 'Row-level tenant isolation',
        body: 'Every query inherits tenant context from the request — there\'s no "did I remember to add .where(tenantId)" bug because the framework enforces it.',
      },
      {
        heading: 'Role-aware dashboards',
        body: 'Faculty see class cohort analytics. Parents see their child\'s trajectory. Administrators see institution-wide growth. One data source, three lenses.',
      },
      {
        heading: 'Mobile-first',
        body: 'Students and parents open the app on a phone. Every view was designed for thumb reach before anything else.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'The strictest tenant isolation we\'ve ever built. Student data from Institution A must never leak to Institution B — not in a report, not in a search index, not in an analytics query. We pushed tenant scoping down to the data layer: every Prisma query gets a tenant filter injected by middleware before it ever hits the database. Developers writing features can\'t forget to filter — the filter is not their responsibility anymore. That invariant is why Piofx can run hundreds of institutions safely on a single deployment.',
      highlights: [
        { label: 'Isolation model', value: 'Row-level, auto-scoped' },
        { label: 'Deployment model', value: 'Single-tenant-feeling, multi-tenant infra' },
        { label: 'Primary users', value: 'Faculty · parents · students' },
        { label: 'Primary device', value: 'Mobile-first' },
      ],
    },

    scale: 'Deployed across multiple education institutions in India.',
    coverKind: 'piofx',
  },

  {
    slug: 'oddits',
    client: 'Oddits',
    tagline: 'India-specific compliance, built in — not bolted on.',
    year: '2025',
    role: 'Product engineering',
    tags: ['FinTech', 'Compliance', 'India', 'B2B SaaS'],
    liveUrl: 'https://oddits.app',

    motto: 'Compliance as data. Not as a form.',
    intro:
      'Practice-management + audit + compliance platform for Indian CA firms — with direct GSTN, e-invoice (IRP), and e-way-bill (NIC) integrations, multi-client portfolios, and a compliance state machine that survives flaky government APIs.',

    challenge:
      'India has unique compliance surfaces — GST e-invoicing, e-way billing, TDS, TCS, GSTR filings — that generic accounting software treats as afterthoughts. CA firms managing 50+ clients were juggling spreadsheets, portal tabs, and WhatsApp groups. Every new compliance regime update meant custom work. Government APIs fail unpredictably; naive tools break on every outage.',

    approach: [
      {
        heading: 'India compliance as first-class primitives',
        body: 'E-invoice, e-way bill, GSTR filings are native objects with state — not spreadsheet exports. Every filing has a lifecycle the system owns.',
      },
      {
        heading: 'Practice management over transaction management',
        body: 'A CA manages N clients. The platform models that explicitly — client portfolios, delegated staff, firm-wide dashboards, role-based access.',
      },
      {
        heading: 'Direct government-API integrations',
        body: 'We integrate with GSTN, the IRP (Invoice Registration Portal), and NIC directly — not by scraping UIs. State is our truth; the government API is our source of record.',
      },
      {
        heading: 'Audit log on every compliance action',
        body: 'Every filing has a full history — who created it, who validated, who submitted, what the government responded. Defensible at audit time.',
      },
    ],

    engineering: {
      heading: 'The engineering choice that mattered',
      body:
        'We modelled every compliance artifact as a state machine with explicit transitions: draft → validated → submitted → acknowledged → accepted / rejected. Government APIs fail; this lets us retry safely. Rules change; this lets us migrate. Auditors ask "what happened to this invoice on March 14th?"; this lets us answer. Compliance-as-data (not compliance-as-form) is the unlock that makes Oddits reliable on top of an unreliable government API surface.',
      highlights: [
        { label: 'Direct integrations', value: 'GSTN · IRP · NIC' },
        { label: 'Compliance artifacts modelled', value: 'E-invoice · e-way bill · GSTRs' },
        { label: 'Retry / replay', value: 'First-class' },
        { label: 'Primary users', value: 'CA firms · in-house finance teams' },
      ],
    },

    scale: 'Live for Indian CA firms managing multi-client compliance portfolios.',
    coverKind: 'oddits',
  },
];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  CASE_STUDIES.find((c) => c.slug === slug);
