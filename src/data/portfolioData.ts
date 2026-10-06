import exelonImage from "../assets/experience/exelon.jpg";
import pcaldImage from "../assets/experience/pcald.jpg";
import acceleratorLogo from "../assets/certifications/global-career-accelerator.jpg";

export const experience = [
  {
    company: "Exelon",
    location: "Philadelphia, PA",
    role: "OT Security Governance Intern",
    dates: "JUN 2026 – AUG 2026",
    image: exelonImage,
    bullets: [
      // Paste your 4 Exelon bullets
      "Developed a Microsoft Copilot agent leveraging LLMs for natural language querying of OT governance documentation.",
    "Created a Power BI dashboard to visualize OT governance metrics, enabling data-driven decision-making.",
    "Collaborated with cross-functional teams to enhance OT security governance processes and documentation.",
    "Conducted research on emerging OT security trends and best practices, contributing to the organization's knowledge base.",
    ],
  },

  {
    company: "Latzo Software",
    location: "Seminole, FL",
    role: "Software Engineer",
    dates: "DEC 2025 – AUG 2026",
    image: null,
    bullets: [
      // Paste your 3 Latzo bullets
      "Engineered a HIPAA-compliant AI voice receptionist to automate high-volume medical scheduling and patient inquiries.",
      "Implemented secure, privacy-centric workflows that significantly reduced manual administrative overhead.",
      "Leveraged AI telephony to streamline prescription refills and patient communication within a healthcare setting.",
    ],
  },

  {
    company: "PCALD",
    location: "St. Petersburg, FL",
    role: "Software & IT Intern",
    dates: "MAY 2023 – AUG 2025",
    image: pcaldImage,
    bullets: [
      // Paste your 3 PCALD bullets
      "Architected and launched a fully ADA-compliant patient website using HTML5, CSS3, and JavaScript.",
      "Modernized clinical operations by digitizing patient intake forms and securing Electronic Medical Record (EMR) workflows.",
      "Provided critical technical support and system troubleshooting for 25–50 healthcare patients on a daily basis.",
    ],
  },
];

export const projects = [
  {
    title: "Phishing Website Detection",
    technologies: "Python / Scikit-learn / Pandas / NumPy",
    description:
      "End-to-end machine learning pipeline to classify 10,000 websites using 50 URL and webpage features. Trained and evaluated Logistic Regression, KNN, and SVM models with feature selection, scaling, and leakage-safe validation, achieving 98.5% test accuracy.",
    linkText: "Open Colab Notebook",
    link: "https://colab.research.google.com/drive/1ghE6idxZG9XKwKTDkGkvUhhtLNA6IM56?usp=sharing",
  },
  {
    title: "Pasadena Center for Asthma and Lung Disorders Website",
    technologies: "HTML / CSS / JavaScript",
    description:
      "Patient-facing website for a medical practice with a focus on accessibility, usability, and security. Built the site to support ADA and HIPAA-conscious design principles while making important practice information easier for patients to access.",
    linkText: "Open Live Site",
    link: "https://pcald.com/",
  },
  {
    title: "AI Healthcare Voice Assistant",
    technologies: "Python / REST APIs / ECW Integration / LLM Technologies",
    description:
      "Voice-enabled healthcare assistant concept that integrates with electronic health record systems through FHIR APIs, with a focus on securely retrieving patient information and supporting common healthcare workflows through natural-language interactions.",
    linkText: "Call Assistant",
    link: "",
  },
];

export const certifications = [
  {
    name: "Python and Data Certification",
    description:
      "Gained hands-on experience doing professional-level data analysis utilizing Python and Jupyter Notebooks. Working with large, real-world data sets, they investigated business problems and made data-driven recommendations to inform business decisions.",
    technicalSkills:
      "programming fundamentals, visualizing data with the Plotly library, Pandas functions and methods, grouping and aggregating data",
    professionalSkills:
      "communicating with data, understanding business metrics, and collaborating with a global team.",
    logo: acceleratorLogo,
    credentialLink: "https://www.credential.net/7cca63f0-127f-4f5c-9db6-167ec235d4bb#acc.T7J5GrY1",
  },
  {
    name: "Querying Data Certification",
    description:
      "Gained hands-on experience experience doing professional-level data analysis utilizing SQL (Structured Query Language). Working with large, real-world data sets, they investigated business problems and made data-driven recommendations to inform business decisions.",
    technicalSkills:
      "Querying data, Filtering data, summarizing data with GROUP BY, joining data, and cleaning data.",
    professionalSkills:
      "understanding databases, working with large datasets, writing and debugging code, and data storytelling.",
    logo: acceleratorLogo,
    credentialLink: "https://www.credential.net/b3f1b75b-33a5-41fb-b572-f164c5116550#acc.DoWPUxRu",
  },
  {
    name: "AI Professional Skills Certification",
    description:
      "Gained practical knowledge of artificial intelligence, including how large language models (LLMs) like ChatGPT function, and how to responsibly and effectively use them in professional settings. Through real-world examples and guided instruction, they explored the use of Gen AI as a tool to complete tasks, a teammate to support problem-solving, and a tutor to guide rapid skill acquisition.",
    technicalSkills: "",
    professionalSkills:
      "designing effective prompts, evaluating AI-generated content critically, integrating AI into workplace tasks, and understanding how AI is shaping the future of work.",
    logo: acceleratorLogo,
    credentialLink: "https://www.credential.net/87f022c6-b33c-40a3-94a5-520bdcf52d57#acc.Wfc4BxiR",
  },
  {
    name: "Intercultural Skills Certification",
    description:
      "Demonstrated intercultural skills and the ability to communicate and collaborate effectively and appropriately with diverse team members. Activities included intercultural communication practice, personal reflections, and workplace situations simulations.",
    technicalSkills: "",
    professionalSkills:
      "cultural self-awareness, listening, suspending judgment, managing bias, effectively responding to conflict, and cultivating curiosity and cultural humility.",
    logo: acceleratorLogo,
    credentialLink: "https://www.credential.net/79871f4c-28d2-4be0-b557-f571e66d23f5#acc.pb4GZwJP",
  },
];

export const leadership = [
  {
    role: "Vice President",
    organization: "Artists Anonymous Club at NYU",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Assembly",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Frameworks",
    skills: [
      "React",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Numba",
      "PIL",
      "Matplotlib",
    ],
  },

  {
    title: "Systems",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "GDB",
      "QEMU",
      "Visual Studio Code",
      "Xcode",
      "Power BI",
      "Power Apps",
      "REST APIs",
      "FHIR APIs",
      "Node.js",
      "npm",
      "Vite",
      "ESLint",
    ],
  },
];

export const education = [
  {
    school: "New York University, Tandon School of Engineering",
    date: "Expected May 2027",
    degree: "B.S. in Computer Science",
    minors: "Minors: Cybersecurity and Mathematics.",
    gpa: "GPA: 3.42",
    deansList: "Dean's List: Fall 2024 – Spring 2025",
    coursework:
      "Relevant coursework: Computer Architecture, Algorithms, Object Oriented Programming, Data Structures, Discrete Math, Machine Learning, Operating Systems, Networking, Security, Software Engineering.",
  },
];

export const studyAbroad = {
  title: "Study Abroad - NYU London",
  date: "Spring 2025",
  description:
    "Studying abroad in London was one of the most meaningful parts of my college experience. Living and learning in a new country pushed me outside of my comfort zone, helped me become more independent, and gave me the opportunity to experience different cultures and perspectives firsthand. It also taught me how quickly I can adapt to unfamiliar environments, something I now carry with me in both school and work.",
};