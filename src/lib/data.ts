export const profile = {
  name: "Jeevan Musku",
  role: "Senior Software Engineer & Technical Lead",
  subroles: [
    "Architecture & Engineering Leadership",
    "C# / .NET / Azure",
    "AI-Assisted Engineering",
    "Secure, Scalable Microservices",
  ],
  location: "Australia",
  email: "jeevan.musku@live.com",
  linkedin: "https://www.linkedin.com/in/jeevan-musku",
  resumeUrl: "/assets/Jeevan_Musku_CV.pdf",
  summary:
    "I design and deliver secure, scalable Azure solutions — thinking beyond just code, to the whole system. I treat AI as an accelerator, not a crutch: equally effective delivery with it or without it, and never at the cost of data security or code quality. Nearly two decades leading technical delivery and engineering coordination across business, QA, UAT, ICT and external vendor teams, with strong quality-gate and CI/CD governance.",
  stats: [
    { value: "19+", label: "Years in software engineering" },
    { value: "8", label: "Enterprises & consultancies delivered for" },
    { value: "2", label: "Cloud architect certifications" },
    { value: "5", label: "Countries worked across" },
  ],
};

export type TimelineEntry = {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  project: string;
  skills: string[];
  highlights: string[];
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    company: "Webstercare",
    companyUrl: "https://www.webstercare.com.au",
    role: "Technical Lead",
    period: "Oct 2022 — Present",
    location: "Australia",
    project: "Medcare",
    current: true,
    skills: ["C#", ".NET", "Azure", "AKS", "DDD/CQRS", "MediatR", "Claude Code"],
    highlights: [
      "Own the event-driven architecture end to end — Azure Service Bus topics and Azure Functions, built on DDD, CQRS and MediatR.",
      "Run cloud infrastructure across App Services, AKS, Key Vault, Service Bus, Cosmos DB and SQL Server.",
      "Containerised services with Docker, publishing to Azure Container Registry and operating them on AKS.",
      "Built and hardened government-grade integrations: ADHA My Health Record, Services Australia and FRED eRx Prescribing — meeting every regulatory and security criterion.",
      "Embedded OWASP, zero-trust and least-privilege principles with a shift-left security posture across design, dev and CI/CD.",
      "Implemented automated PR-gating pipelines (build, test, quality checks) across all microservices, blocking non-compliant merges.",
      "Lead a team of five, including three offshore, on priorities, sprint planning and delivery — plus hands-on AI-assisted engineering with Claude Code and Copilot.",
    ],
  },
  {
    company: "KPMG Australia",
    companyUrl: "https://home.kpmg/au",
    role: "Senior Software Engineer / Lead",
    period: "Mar 2022 — Oct 2022",
    location: "Australia",
    project: "Track and Trace · Building Trustworthy Index",
    skills: [".NET Core", "React.js", "PostgreSQL", "Azure DevOps"],
    highlights: [
      "Owned technical design for individual features, from story breakdown through to front-end and back-end delivery.",
      "Built backend services in C# using Entity Framework, MediatR and NServiceBus.",
      "Delivered front-end components in React, TypeScript and MUI, translating Figma designs into pixel-accurate UI.",
      "Authored custom NuGet and NPM packages reused across teams; wrote unit and integration tests with NUnit and Fluent Assertions.",
      "Built E2E test automation with CodeceptJS and supported QA through regression cycles.",
    ],
  },
  {
    company: "Hitachi Vantara",
    companyUrl: "https://www.hitachivantara.com",
    role: "Technical Lead — Manager, Specialised Services",
    period: "Sep 2019 — Jan 2022",
    location: "India",
    project: "AIMS (Asset Integrity Management System) · Claim Management System",
    skills: [".NET Core", "AWS", "React.js", "CDK", "Lambda"],
    highlights: [
      "Designed and built AIMS as a greenfield project — delivered ahead of schedule and defect-free.",
      "Assisted the principal architect on a scalable AWS architecture serving ~1,500 users at 30–50 requests/sec.",
      "Worked across VPC, EC2, S3, IAM, Cognito, ECS Fargate, Secrets Manager, CloudFront, API Gateway, RDS, Lambda and CDK.",
      "Built .NET Core microservices using Entity Framework with the Repository and Unit-of-Work patterns.",
      "Delivered a desktop and mobile application, including a React PWA front-end with online/offline sync.",
      "Led the development team — code reviews, delivery coordination and technical governance across releases.",
    ],
  },
  {
    company: "iSentia",
    companyUrl: "https://www.isentia.com",
    role: "Senior Software Lead Developer",
    period: "Nov 2018 — Jun 2019",
    location: "Sydney, Australia",
    project: "Media Portal",
    skills: ["AngularJS", "Angular 6", "Node.js", "C#.NET"],
    highlights: [
      "Re-engineered rendering logic, cutting render time by 50% and materially improving user experience.",
      "Built complex UI components with embedded media players, consistent across browsers and device sizes.",
      "Led the development team — coordinating priorities, code reviews and delivery across sprints.",
    ],
  },
  {
    company: "Wissen Infotech",
    companyUrl: "https://www.wissen.com",
    role: "Technical Lead",
    period: "Oct 2015 — Nov 2018",
    location: "Hyderabad, India",
    project: "Quickpath",
    skills: ["ASP.NET MVC 5", "AngularJS", "Angular 4", "TypeScript"],
    highlights: [
      "Built Angular modules, components, services and pipes to meet evolving business requirements.",
      "Implemented routing, route guards and JWT-based authentication.",
      "Delivered defect-free, on-time, business-critical work — achieved the team's highest customer satisfaction index.",
      "Led the development team as Technical Lead, owning work allocation, code quality and delivery outcomes.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    companyUrl: "https://www.tcs.com",
    role: "Assistant Consultant",
    period: "Jan 2011 — Sep 2015",
    location: "India & United Kingdom",
    project: "AVIVA IT Care · BT NIEA · BT BCP · BT SaaS",
    skills: ["ASP.NET MVC 5", "AngularJS", "WCF", "SQL Server"],
    highlights: [
      "Designed and structured solutions using SOLID principles and established architectural patterns.",
      "Built UI, client-side behaviour and service calls with AngularJS controllers, directives and factories.",
      "Recognised as a STAR performer for outstanding contribution.",
      "Acted as single point of contact on-site, coordinating client teams, suppliers and internal stakeholders.",
    ],
  },
  {
    company: "Infosys Technologies",
    companyUrl: "https://www.infosys.com",
    role: "Technology Analyst",
    period: "Apr 2010 — Dec 2010",
    location: "Mangalore, India",
    project: "AON AuMine (Gold Mine)",
    skills: [".NET 3.5", "SQL Server", "ASP.NET"],
    highlights: [
      "Delivered a brand-new application one week ahead of schedule with a >95% UAT success rate.",
      "Built business components in C# and the UI from wireframes; supported data migration and regression testing.",
    ],
  },
  {
    company: "Tech Mahindra",
    companyUrl: "https://www.techmahindra.com",
    role: "Software Engineer",
    period: "Sep 2006 — Mar 2010",
    location: "India & Italy",
    project: "GSK Moxa Balance Service · GSK CTS · GSK Comet",
    skills: ["C#.NET", "WCF", ".NET 2.0/1.1", "PL/SQL"],
    highlights: [
      "Built a WCF service interfacing with multiple hardware weighing devices for reuse across the estate.",
      "Delivered mission-critical Clinical Trial applications for GlaxoSmithKline, including a disaster-recovery environment built in just 3 days.",
      "Led incident resolution — testing, debugging and correcting defects within agreed SLAs.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Architecture",
    items: [
      "Azure",
      "AWS",
      "Microservices",
      "Domain-Driven Design",
      "CQRS & MediatR",
      "Event-Driven Architecture",
      "Serverless (Azure Functions)",
      "Docker",
      "Azure Kubernetes Service",
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      "C#",
      ".NET Core / ASP.NET MVC",
      "Web API",
      "Entity Framework",
      "JavaScript / TypeScript",
      "React.js",
      "Angular",
      "SQL / PL-SQL",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    items: [
      "Claude Code",
      "GitHub Copilot",
      "Context engineering",
      "Token optimisation",
      "Guardrailed, secrets-safe AI use",
    ],
  },
  {
    title: "Delivery & Leadership",
    items: [
      "Technical team leadership",
      "Distributed / offshore teams",
      "Agile & Scrum",
      "CI/CD governance",
      "PR-gating pipelines",
      "Stakeholder coordination",
      "Mentoring",
    ],
  },
];

export const industries = [
  "Healthcare",
  "Pharmaceuticals",
  "Insurance",
  "Telecommunications",
  "Media Intelligence",
  "Mining",
  "Life Sciences",
];

export type Certification = {
  title: string;
  issuer: string;
  detail: string;
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    detail: "Earned earlier in career; currently recertifying against the latest Azure curriculum.",
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    detail: "Cloud-native architecture and infrastructure design on AWS.",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech), Electronics and Communications",
  institution: "Jawaharlal Nehru Technological University, Hyderabad",
  year: "2006",
};
