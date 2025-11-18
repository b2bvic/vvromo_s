

import { TimelineEvent, Principle, Venture, SkillData, ExperienceItem } from './types';

export const FULL_BIO_CONTEXT = `
# ROMO_S: THE DIGITAL TWIN OF VICTOR VALENTINE ROMO
Identity: Systems Architect, Semantic SEO Specialist, Entrepreneur.
System Status: Online.
Mission: Architecting proprietary digital moats using Semantic Search, Information Retrieval principles, and Hybrid Intelligence (AI + Human) infrastructure.
Career Highlights: Drove 2,700% revenue growth, 1,400% organic click increase, and audited 200+ enterprise entities across 30+ verticals.

KEY NARRATIVE ENTITIES & ARCS:
1. **The Foundation (1993-2009):** Born in Inland Empire, CA. Developed pattern recognition via survival necessity. Mastered beatboxing (Rahzel lineage) at age 10. Pivoted to Trombone at 15.
2. **The Grind (2013-2017):** Manual labor, warehousing. Autodidact in SEO. Marketing Supervisor at Cobra Carbide.
3. **The Crucible (2019):** Relocated to Raleigh, NC. Rebuilt collapsed agency infrastructure after critical infrastructure failure.
4. **Mastery & Scale (2020-Present):** 
   - **Grey Matter:** Enterprise SEO for 147 clients.
   - **Scale With Search:** AI Systems Agency.
   - **SEO for Executives:** Strategic Thought Leadership.
   - **FOUND:** Local & Service Based Business Agency.

CORE PHILOSOPHY (11 UNIVERSAL PRINCIPLES):
1. Infinite Potential Manifestation
2. Differentiation Creates Value
3. Relationship Over Elements
4. Hierarchical Organization
5. Emergence From Interaction
6. Feedback Amplifies
7. Adaptation Through Learning
8. Criticality (Edge of Chaos)
9. Fractal Pattern Recognition
10. Constraint Enables Creation
11. Irreversibility Compounds

SIGNATURE QUOTE: "You can't bullshit someone from the ghetto. I don't care how Canadian you are."
`;

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2003',
    title: 'Pattern Recognition Origin',
    location: 'Inland Empire, CA',
    description: 'Began self-directed mastery via Beatboxing. Deconstructed complex sonic patterns to reconstruct rhythm.',
    category: 'foundation'
  },
  {
    year: '2008',
    title: 'Rapid Skill Acquisition',
    location: 'Riverside, CA',
    description: 'Trombone Pivot. Competence in 3 months, Section Leader in 6. Validated "Immersion Protocol".',
    category: 'foundation'
  },
  {
    year: '2013',
    title: 'SEO Genesis',
    location: 'Third Eye SEO',
    description: 'Manual entry into search algorithms. Optimized 20+ WP sites and wrote 450k words of semantic content.',
    category: 'grinding',
    stats: ['20+ WP SITES OPTIMIZED', '450K WORDS WRITTEN', 'MANUAL BACKLINKING']
  },
  {
    year: '2017',
    title: 'Corporate Systems',
    location: 'Cobra Carbide',
    description: 'Transformed legacy manufacturing sales. Implemented email automation and Amazon FBA optimization.',
    category: 'grinding',
    stats: ['7-FIGURE REV GROWTH', '18-MONTH SPRINT', 'FULL AUTOMATION']
  },
  {
    year: '2019',
    title: 'The Infrastructure Collapse',
    location: 'Raleigh, NC',
    description: 'The Infrastructure Collapse. Rebuilt collapsed agency infrastructure. Forged reputation as "The Fixer".',
    category: 'crucible',
    stats: ['CRISIS ARCHITECTURE', 'AGENCY REBUILD', 'ZERO RETREAT']
  },
  {
    year: '2020',
    title: 'Growth Consulting',
    location: 'Ideamarket / AFF',
    description: 'Targeted entity optimization and content repurposing for pre-AI organic growth.',
    category: 'mastery',
    stats: ['2.5X RANK LIFT', '80% EVENT GROWTH', 'PRE-AI SCALE']
  },
  {
    year: '2020',
    title: 'FOUND Agency Launch',
    location: 'Raleigh, NC',
    description: 'Co-founded FOUND to service Local & Service Based Business owners. Built systems for local market dominance in the Research Triangle.',
    category: 'mastery',
    stats: ['LOCAL DOMINANCE', 'BRICK & MORTAR', 'AGENCY OPS']
  },
  {
    year: '2022',
    title: 'Enterprise SEO Scale',
    location: 'Grey Matter',
    description: 'Managed organic search strategy for 147 concurrent entities. Audited and resolved technical debt at scale.',
    category: 'mastery',
    stats: ['147 CLIENTS', '250K+ ERRORS FIXED', '3X OUTPUT VIA AI']
  },
  {
    year: '2024',
    title: 'Agency Architecture',
    location: 'Scale With Search',
    description: 'Deploying hybrid intelligence systems (Local LLMs + Human in the Loop) for SaaS and Enterprise.',
    category: 'mastery',
    stats: ['1,400% CLICK BOOST', '90% RETENTION', 'LOCAL INFERENCE HUBS']
  }
];

export const PRINCIPLES: Principle[] = [
  { id: 1, title: "Infinite Potential", description: "Reality proceeds from undifferentiated potential to concrete manifestation." },
  { id: 2, title: "Differentiation", description: "Generic is worthless; specific, custom-built systems create 10x returns." },
  { id: 3, title: "Relationships", description: "Meaning derives from connections (edges) and interactions, not isolated nodes." },
  { id: 4, title: "Hierarchy", description: "Systems organize into nested levels with distinct properties at each scale." },
  { id: 5, title: "Emergence", description: "3 automations don't yield 3x value; they yield 10x through emergent properties." },
  { id: 6, title: "Feedback Loops", description: "Systems self-regulate; compounding happens through positive loops." },
  { id: 7, title: "Adaptation", description: "Systems that survive modify internal rules based on environmental feedback." },
  { id: 8, title: "Criticality", description: "Peak performance happens at the 'edge of chaos' (Phase Transition)." },
  { id: 9, title: "Fractals", description: "Similar structures recur at different scales (Self-Similarity)." },
  { id: 10, title: "Constraints", description: "Limitations enable action; constraints focus energy where ROI is highest." },
  { id: 11, title: "Irreversibility", description: "Time flows one direction; every month without systems work is permanent loss." }
];

export interface ExtendedVenture extends Venture {
  id: string;
  color: string;
  cta: string;
  features: string[];
  audience: string[];
  isComingSoon?: boolean;
}

export const VENTURES: ExtendedVenture[] = [
  {
    id: 'sws',
    name: "Scale With Search",
    role: "Founder & Architect",
    description: "Building proprietary AI moats with hybrid infrastructure. Transforming manual chaos into self-evolving systems for SaaS founders and CTOs using Semantic SEO.",
    color: "brand-blue",
    link: "https://scalewithsearch.com/meet",
    cta: "Book Strategy Call",
    features: [
      "The System (Weekly Flagship Newsletter)",
      "Playbook Thursday (Tactical Automation Guides)",
      "3-System Setup Template",
      "Complete Automation Stack"
    ],
    audience: ["Scaling Sarah (SaaS)", "Technical Tim (CTO)", "Enterprise Emily"]
  },
  {
    id: 'sfe',
    name: "SEO for Executives",
    role: "Thought Leader",
    description: "Positioning SEO as a strategic asset, not a marketing channel. An intellectual discipline connecting Search to Cognition and Knowledge Management.",
    color: "suit",
    link: "https://seoforexecutives.com",
    cta: "Read The Brief",
    features: [
      "The Executive Brief (Strategic Deep Dives)",
      "Search Notes (Curated Insights)",
      "Technical Masterclass (SOPs)",
      "Executive SEO Audit Framework"
    ],
    audience: ["Strategic Steve (CEO)", "Curious Carol (CMO)", "Practitioner Pete"]
  },
  {
    id: 'found',
    name: "FOUND",
    role: "Co-Founder & COO",
    description: "Agency built from 2020-Present. Currently focused on Local & Service Based Business owners in the Research Triangle, NC.",
    color: "found",
    link: "#",
    cta: "Local Strategy",
    features: [
      "Local Market Dominance",
      "Service Business Systems",
      "Research Triangle Focus",
      "Brick & Mortar Growth"
    ],
    audience: ["Local Founders", "Service Providers", "NC Entrepreneurs"]
  },
  {
    id: 'bos',
    name: "Browser OS",
    role: "Product Creator",
    description: "The operating system for your digital life. 5 Fundamentals to reduce cognitive load, context switching, and RAM usage.",
    color: "browser-os",
    link: "#",
    cta: "Preorder Now",
    isComingSoon: true,
    features: [
      "Workona Organization Protocols",
      "Contextualization Frameworks",
      "Separation of Concerns",
      "Focus State Design"
    ],
    audience: ["Knowledge Workers", "Agency Owners", "Digital Natives"]
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Semantic SEO', A: 98, fullMark: 100 },
  { subject: 'Systems Arch', A: 90, fullMark: 100 },
  { subject: 'Crisis Mgmt', A: 100, fullMark: 100 },
  { subject: 'SOP Dev', A: 95, fullMark: 100 },
  { subject: 'Tech SEO', A: 95, fullMark: 100 },
  { subject: 'AI Workflows', A: 92, fullMark: 100 },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Founder & Architect",
    company: "Scale With Search",
    period: "2024 - Present",
    location: "Raleigh, NC",
    points: [
      "Deploying hybrid intelligence systems (Local LLMs + Human in the Loop) for SaaS and Enterprise.",
      "Architecting proprietary digital moats using Semantic Search and Information Retrieval principles.",
      "Achieved 1,400% click boost and 90% retention rate for clients."
    ]
  },
  {
    role: "Head of SEO",
    company: "Grey Matter",
    period: "2022 - 2024",
    location: "Remote",
    points: [
      "Managed organic search strategy for 147 concurrent entities.",
      "Audited and resolved technical debt at enterprise scale (250k+ errors fixed).",
      "Implemented AI-driven content workflows increasing output by 3x."
    ]
  },
  {
    role: "Co-Founder & COO",
    company: "FOUND",
    period: "2020 - Present",
    location: "Raleigh, NC",
    points: [
      "Built agency infrastructure focused on Local & Service Based Business owners in the Research Triangle.",
      "Developed repeatable organic growth systems for brick & mortar entities.",
      "Scaling service-based revenue through semantic local SEO."
    ]
  },
  {
    role: "Growth Consultant",
    company: "Ideamarket / AFF",
    period: "2020 - 2022",
    location: "Remote",
    points: [
      "Targeted entity optimization and content repurposing for pre-AI organic growth.",
      "Achieved 2.5x rank lift and 80% event growth.",
      "Developed strategies for decentralized information markets."
    ]
  },
  {
    role: "Crisis Architect",
    company: "Confidential Agency",
    period: "2019 - 2020",
    location: "Raleigh, NC",
    points: [
      "Rebuilt collapsed agency infrastructure after major fraud event.",
      "Restored client trust and operational stability during 'The Crucible'.",
      "Forged reputation as 'The Fixer' through crisis management."
    ]
  },
  {
    role: "Marketing Supervisor",
    company: "Cobra Carbide",
    period: "2017 - 2019",
    location: "Riverside, CA",
    points: [
      "Transformed legacy manufacturing sales processes.",
      "Implemented email automation and Amazon FBA optimization.",
      "Drove 7-figure revenue growth in 18-month sprint through automation."
    ]
  },
  {
    role: "SEO Specialist",
    company: "Third Eye SEO",
    period: "2013 - 2017",
    location: "Inland Empire, CA",
    points: [
      "Manual entry into search algorithms and semantic content creation.",
      "Optimized 20+ WP sites and wrote 450k words of content.",
      "Developed foundational knowledge of search engine mechanisms."
    ]
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "REPUTATION_LOG_001",
    quote: "Victor has upgraded everything he's touched, including my business. I'm on track to the best-performing year in Real Estate after 18 years in the industry. I've officially been \"VIC'D\", a term I coined after seeing him successfully transform multiple businesses.",
    author: "Tim Clarke, Realtor",
    role: "President, TMC Team",
    context: "BUSINESS_UPGRADE"
  },
  {
    id: "REPUTATION_LOG_002",
    quote: "I've worked with Victor for many years, and I don't know anyone better at SEO... and I've looked. Victor is an absolute wizard and I have on multiple occasions referred him to clients who said, 'I'm great at SEO, I don't need help...' ...they all hired him.",
    author: "Garret Dailey",
    role: "Founder, Lucid Consulting",
    context: "AUTHORITY_VERIFICATION"
  },
  {
    id: "REPUTATION_LOG_003",
    quote: "Victor is an energy magnet and artist. He is easy to connect with and definitely has a level of integrity that is uncommon. Just speaking with him catalyzed my own awareness of my voice and mission.",
    author: "Taylor Burrowes, PhD",
    role: "The Vetting Specialist",
    context: "INTEGRITY_CATALYST"
  },
  {
    id: "REPUTATION_LOG_004",
    quote: "He's the best SEO in the game. Certified Abrasive.",
    author: "Shane Hunter",
    role: "The Abrasive Entrepreneur",
    context: "PEER_RECOGNITION"
  },
  {
    id: "REPUTATION_LOG_005",
    quote: "Vic is one of the smartest people I know. His systems have helped my company grow beyond expectation. This guy knows more information about stuff than any one person has a right knowing. Work with him!",
    author: "Frank Marina",
    role: "Pro-Choice Contractors",
    context: "SYSTEMS_GROWTH"
  },
  {
    id: "REPUTATION_LOG_006",
    quote: "Vic is a master at SEO and a wizard with no-code automations. He is a BEAST at training new team members to be independent profit-makers at marketing agencies within weeks, as he's an awesome teacher.",
    author: "John Giuffre",
    role: "Founder, Logos Productions",
    context: "AUTOMATION_MASTERY"
  },
  {
    id: "REPUTATION_LOG_007",
    quote: "Vic thoroughly analyzed my site's technical SEO issues that had been frustrating me for years and provided clear, practical solutions to fix them. I'm very happy with the time spent working with him.",
    author: "Jonathan Pritchard",
    role: "Business Consultant",
    context: "TECHNICAL_ANALYSIS"
  },
  {
    id: "REPUTATION_LOG_008",
    quote: "Vic is the kind of guy you can say 'I have a problem, figure out how to solve it' — and he will. He’s familiar with a wide variety of tools & capable of weaving them into complex automated systems.",
    author: "Mike Elias",
    role: "Founder, Ideamarket",
    context: "PROBLEM_SOLVING"
  },
  {
    id: "REPUTATION_LOG_009",
    quote: "Vic gave me clear, actionable SEO advice in just 30 minutes that has already helped boost my website traffic. I went from struggling to understand SEO to having a much stronger grasp and a plan to improve my site.",
    author: "Asad Chisty",
    role: "Founder, DailyBeat",
    context: "STRATEGIC_CLARITY"
  },
  {
    id: "REPUTATION_LOG_010",
    quote: "I've heard that Substack is one of the most difficult platforms to optimize for search engines. And that's 100% true until you reach out to Vic. He helped me get everything squared away in less than an hour.",
    author: "Jeff Putnam",
    role: "Writer, The Converted Catholic",
    context: "PLATFORM_OPTIMIZATION"
  }
];