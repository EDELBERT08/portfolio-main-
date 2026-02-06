const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certificates",
    link: "#certificates",
  },
];

const words = [
  { text: "Systems", imgPath: "/images/code.svg" },
  { text: "Engineering", imgPath: "/images/code.svg" },
  { text: "Backend", imgPath: "/images/code.svg" },
  { text: "Infrastructure", imgPath: "/images/code.svg" },
  { text: "Compliance", imgPath: "/images/code.svg" },
  { text: "Resilience", imgPath: "/images/code.svg" },
  { text: "Innovation", imgPath: "/images/code.svg" },
  { text: "Automation", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 98, suffix: "%", label: "Regulatory Compliance" },
  { value: 70, suffix: "%", label: "Registration Time Reduction" },
  { value: 99, suffix: "%", label: "System Uptime" },
  { value: 15, suffix: "%", label: "Efficiency Improvement" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Strategic Systems Engineering",
    desc: "Expertise in Health Insurance Systems management and infrastructure optimization.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Bridging the gap between business needs and technical specifications.",
  },
  {
    imgPath: "/images/time.png",
    title: "Project Delivery",
    desc: "Proven track record in managing critical system upgrades and disaster recovery.",
  },
];

const techStackImgs = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React",
    imgPath: "/images/logos/react-icon.svg",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python-icon.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node-icon.svg",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/threejs.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git-icon.svg",
  },
  {
    name: "Kotlin",
    imgPath: "/images/logos/kotlin.svg",
  },
  {
    name: "Spring Boot",
    imgPath: "/images/logos/springboot.svg",
  },
  {
    name: "Go",
    imgPath: "/images/logos/go.svg",
  },
  {
    name: "AWS",
    imgPath: "/images/logos/aws.svg",
  },
  {
    name: "MariaDB",
    imgPath: "/images/logos/mariadb.svg",
  },
  {
    name: "Vue.js",
    imgPath: "/images/logos/vue.svg",
  },
];

const expCards = [
  {
    review: "Strategically managed Health Insurance Systems, conducting RCA and ensuring 24/7 availability through rigorous health checks and security audits.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Systems Engineer",
    company: "APA Insurance",
    date: "Dec 2024 – Present",
    responsibilities: [
      "Translated business requirements into technical specifications for system acquisitions.",
      "Performed comprehensive RCA to diagnose and resolve system errors and change requests.",
      "Managed end-to-end testing, deployment, and implementation of system upgrades.",
      "Orchestrated system health checks and security audits for high availability.",
      "Executed Disaster Recovery operations and maintained infrastructure resilience.",
    ],
  },
  {
    review: "Achieved 98% regulatory compliance and reduced claims processing cycle time by 15% through operational enhancements in Actisure system.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Provider & Claims Operations Associate",
    company: "APA Insurance",
    date: "Jun 2024 - Nov 2024",
    responsibilities: [
      "Validated and reconciled medical claims data with 99% accuracy rate.",
      "Collaborated with IT to implement business rules for automated claim adjudication.",
      "Analyzed claims trends to identify bottlenecks and recommend improvements.",
      "Maintained strategic relationships with healthcare providers.",
    ],
  },
  {
    review: "Ensured 99%+ uptime for educational operations by administering multi-platform IT infrastructure and implementing security policies.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "IT Support Specialist",
    company: "Chebisaas Boys’ National High School",
    date: "May 2023 - Nov 2023",
    responsibilities: [
      "Administered multi-platform IT infrastructure and Windows OS deployments.",
      "Executed incident resolution and hardware diagnostics to minimize MTTR.",
      "Administered Active Directory RBAC and endpoint security policies.",
      "Orchestrated patch management cycles and automated backup operations.",
    ],
  },
];

const projects = [
  {
    title: "QR Event Registration System",
    desc: "High-performance event platform reducing registration time by 70% through real-time QR validation and instant analytics.",
    tech: ["Golang", "Vanilla JavaScript"],
    href: "https://github.com/EDELBERT08",
    logo: "", // Removing missing logo
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    tags: [
      { id: 1, name: "Go", path: "" },
      { id: 2, name: "JavaScript", path: "" },
    ],
  },
  {
    title: "Legal OCR & AI Intelligence Platform",
    desc: "AI-powered document processing system that automated legal document extraction and classification using machine learning.",
    tech: ["Kotlin", "Spring Boot", "Vue.js"],
    href: "https://github.com/EDELBERT08",
    logo: "",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    tags: [
      { id: 1, name: "Kotlin", path: "" },
      { id: 2, name: "Spring Boot", path: "" },
      { id: 3, name: "Vue", path: "" },
    ],
  },
  {
    title: "Provider Management System",
    desc: "Centralized healthcare provider network platform for credentials, contracts, and compliance tracking with real-time validation.",
    tech: ["Kotlin", "Spring Boot", "Vue.js"],
    href: "https://github.com/EDELBERT08",
    logo: "",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60f5a1, #60f5a1), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    tags: [
      { id: 1, name: "Kotlin", path: "" },
      { id: 2, name: "Spring Boot", path: "" },
      { id: 3, name: "Vue", path: "" },
    ],
  },
  {
    title: "Chronic Disease Management (WhatsApp Integration)",
    desc: "Patient engagement platform enabling automated monitoring, medication reminders, and health education via WhatsApp API.",
    tech: ["Kotlin", "Spring Boot", "Vue.js", "WhatsApp API"],
    href: "https://github.com/EDELBERT08",
    logo: "",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    tags: [
      { id: 1, name: "Kotlin", path: "" },
      { id: 2, name: "Spring Boot", path: "" },
      { id: 3, name: "WhatsApp", path: "" },
    ],
  },
];

const certifications = [
  {
    title: "Google Advanced Data Analytics",
    issuer: "Coursera/Google",
    date: "",
  },
  {
    title: "Data Analytics",
    issuer: "ExploreAI Academy",
    date: "",
  },
  {
    title: "Professional Development Skills for the Digital Age",
    issuer: "ExploreAI Academy",
    date: "",
  },
  {
    title: "Information Systems Auditing, Controls and Assurance",
    issuer: "Coursera/The Hong Kong University of Science and Technology",
    date: "",
  },
  {
    title: "Cloud Audit Academy for Federal and DoD Workloads in AWS",
    issuer: "AWS",
    date: "",
  },
  {
    title: "Data Visualization and Dashboards with Excel",
    issuer: "Coursera",
    date: "",
  },
];

const testimonials = [
  {
    name: "Cosmas Langat",
    mentions: "Enterprise Application Manager-Health Division, APA Insurance",
    review: "Reference available upon request.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Mercline Monari",
    mentions: "Quality Assurance Manager, APA Insurance",
    review: "Reference available upon request.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    href: "https://linkedin.com/in/edelbert-kipchumba-a947922b7",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    href: "https://x.com",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  certifications,
};
