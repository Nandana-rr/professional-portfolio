/**
 * All portfolio content lives here. Edit this file to update the site.
 * Values set to `null` render as visible "to be added" placeholders.
 */

export const profile = {
  name: "NANDANARAJ R",
  firstName: "NANDANARAJ",
  lastName: "R",
  designation: "Assistant Professor",
  department: "Department of Computer Science and Engineering",
  institution: "College of Engineering Cherthala - IHRD",
  location: "Alappuzha, Kerala",
  intro:
    "Computer Science educator with an M.Tech in Computer Science and Engineering and a strong foundation in Machine Learning, Natural Language Processing, Database Management Systems and programming. Passionate about teaching, mentoring students and contributing to academic excellence.",
  contact: {
    email: "rajrnandana@gmail.com",
    phone: "+91 7909133465",
    linkedin: "https://www.linkedin.com/in/nandana-raj-r-4b1487273",
    linkedinLabel: "in/nandana-raj-r-4b1487273",
    github: "https://github.com/Nandana-rr",
    githubLabel: "github.com/Nandana-rr",
  },
};

export const about = {
  paragraphs: [
    "I am an M.Tech graduate in Computer Science and Engineering from APJ Abdul Kalam Technological University, with my academic journey beginning in a Diploma in Computer Engineering and continuing through a B.Tech in the same discipline.",
    "My work sits at the intersection of teaching and applied machine learning. I enjoy translating complex ideas — from language models to database design — into clear, structured learning experiences for students.",
  ],
  interests: [
    "Machine Learning",
    "Natural Language Processing",
    "Explainable AI",
    "Data Science",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
  teachingPhilosophy: null as string | null,
};

export const education = [
  {
    degree: "M.Tech in Computer Science and Engineering",
    institution: "College of Engineering and Management, Punnapra",
    university: "APJ Abdul Kalam Technological University",
    year: "2026",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "College of Engineering and Management, Punnapra",
    university: "APJ Abdul Kalam Technological University",
    year: "2024",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Carmel Polytechnic College, Alappuzha",
    university: null as string | null,
    year: "2021",
  },
];

export const teaching = [
  {
    code: "CST473",
    title: "Natural Language Processing",
    role: "Course faculty",
    cohort: null as string | null,
    note: "Text processing, language modelling and core NLP techniques.",
  },
  {
    code: null as string | null,
    title: "Data Analytics Laboratory",
    role: "Lab handled",
    cohort: "S5 AI & DS",
    note: "Hands-on data analysis and visualisation practice.",
  },
  {
    code: null as string | null,
    title: "Python and Statistical Modeling Laboratory",
    role: "Lab handled",
    cohort: "S3 AI & DS",
    note: "Python programming applied to statistical modelling.",
  },
];

export const research = {
  featured: {
    title: "Explainable Hybrid Fake News Detection using Machine Learning and BERT",
    type: "Academic Project",
    summary:
      "A fake news detection system combining classical Machine Learning with BERT, designed so that every prediction comes with an explanation.",
    points: [
      "Developed a fake news detection system using Machine Learning and BERT.",
      "Implemented preprocessing, classification, and explainable AI techniques.",
      "Improved transparency by providing explanations for prediction results.",
    ],
    stack: ["Python", "BERT", "Machine Learning", "Explainable AI", "NLP"],
    link: null as string | null,
  },
  publications: [] as { title: string; venue: string; year: string; link?: string }[],
};

export const expertise = [
  { group: "Programming", items: ["Python", "Java", "C"] },
  { group: "Data & Intelligence", items: ["Machine Learning", "Data Science", "Natural Language Processing"] },
  { group: "Systems & Databases", items: ["MySQL", "Database Management Systems"] },
  { group: "Tools & Collaboration", items: ["Git", "GitHub"] },
];

export const development = [
  {
    title: "NPTEL Certification in Data Science",
    issuer: "NPTEL",
    kind: "Certification",
    duration: null as string | null,
    year: null as string | null,
  },
  {
    title: "Data Science & Machine Learning Training Program",
    issuer: "Camerin Group Pvt. Ltd., Kochi",
    kind: "Training",
    duration: "1 month",
    year: null as string | null,
  },
];

export const contributions = [
  {
    title: "Hacktoberfest Contributor",
    detail: "Participated across three editions of Hacktoberfest, contributing to open-source projects.",
    tag: "3 editions",
  },
  {
    title: "Open-source contributions",
    detail: "Contributed to open-source repositories using GitHub.",
    tag: "GitHub",
  },
  {
    title: "Faculty Development Programmes",
    detail: "Assisted in organising Faculty Development Program (FDP) activities.",
    tag: "FDP",
  },
  {
    title: "Technical seminars & academic events",
    detail: "Participated in technical seminars and academic events.",
    tag: "Seminars",
  },
];

/** Site sections in reading order. Used by navigation and the home index. */
export const sections = [
  { to: "/about", label: "About Me", short: "About", blurb: "Background & interests" },
  { to: "/education", label: "Education", short: "Education", blurb: "M.Tech, B.Tech, Diploma" },
  { to: "/teaching", label: "Teaching Portfolio", short: "Teaching", blurb: "Courses & laboratories" },
  { to: "/research", label: "Research & Projects", short: "Research", blurb: "Explainable fake news detection" },
  { to: "/expertise", label: "Technical Expertise", short: "Expertise", blurb: "Languages, ML, data" },
  { to: "/development", label: "Professional Development", short: "Development", blurb: "Certification & training" },
  { to: "/contributions", label: "Academic Contributions", short: "Contributions", blurb: "Open source, FDPs, seminars" },
  { to: "/contact", label: "Contact", short: "Contact", blurb: "Email, LinkedIn, GitHub" },
] as const;

export type SectionPath = (typeof sections)[number]["to"];
