// src/constants/store.js

export const DATA = {
  profile: {
    name: "Prajwal Hiremath",
    designation: "Architect of Enterprise Integrations",
    title: "MuleSoft & Java Full Stack Developer",
    company: "Cognizant Technology Solutions",
    location: "Pune, India", // [cite: 15, 82]
    email: "psh23g@gmail.com", // [cite: 2, 44]
    about: "Programmer Analyst Trainee at Cognizant with hands-on experience in backend, full-stack, cloud, and AI-based applications. Awarded 'Best Paper' for AI-powered accessibility systems and winner of multiple national-level technical competitions.", // [cite: 72, 75]
    summary: "MuleSoft Developer and Platform Support Engineer with hands-on experience in API development, deployment automation, cloud platform operations, CI/CD troubleshooting, and observability across enterprise production environments.", // [cite: 3]
    resumeLink: "/PRAJWAL_HIREMATH_RESUME.pdf"
  },

  navLinks: [
    { id: "about", title: "Legacy" },
    { id: "work", title: "Experience" },
    { id: "projects", title: "Gallery" },
    { id: "contact", title: "Inquire" },
    {id: "connect", title: "Connect"}
  ],

  services: [
    { title: "MuleSoft Development", icon: "mule" },
    { title: "Java Full Stack", icon: "java" },
    { title: "Cloud Ops (AWS EKS)", icon: "cloud" },
    { title: "Splunk Observability", icon: "monitor" }
  ],

  skills: [
    { name: "MuleSoft / RTF", category: "Integration" }, // [cite: 8, 50]
    { name: "Java / Spring Boot / Microservices / Spring Security", category: "Backend" }, // [cite: 7, 10, 94]
    { name: "React / JavaScript / Angular", category: "Frontend" }, // [cite: 7, 58, 96]
    { name: "AWS / Kubernetes / EKS", category: "Cloud" }, // [cite: 9, 69, 91]
    { name: "Splunk / SPL", category: "Observability" }, // [cite: 9, 49, 88]
    { name: "Jenkins / CI/CD", category: "DevOps" }, // [cite: 9, 20, 89]
    { name: "Python / TensorFlow", category: "AI/ML" }, // [cite: 7, 31, 56]
    { name: "SQL / MySQL / PostgreSQL", category: "Database" } // [cite: 7, 25, 95]
  ],

  experience: [
    {
      company: "Cognizant", // [cite: 12, 78]
      role: "Programmer Analyst Trainee", // [cite: 13, 80]
      duration: "Sep 2025 - Present", // [cite: 81]
      type: "Full-time",
      tech: ["MuleSoft", "AWS EKS", "Splunk", "Jenkins", "Kubernetes", "Anypoint Platform"], // [cite: 4, 8, 9, 16, 21, 22]
      points: [
        "Architected automation for contract application lifecycle via Anypoint Exchange REST APIs and JavaScript, reducing manual effort by 70%.", // [cite: 18, 84]
        "Engineered Java-based cryptographic utilities to securely decrypt JKS and P12 certificates, optimizing security operations.", // [cite: 19, 87]
        "Designed sophisticated Splunk dashboards using SPL with 20+ monitoring panels for proactive platform observability.", // [cite: 21, 88]
        "Managed Kubernetes/EKS clusters, including upgrades and non-prod environments, while maintaining 100% security compliance for 4+ months.", // [cite: 22, 91, 92]
        "Orchestrated CI/CD via Jenkins, resolving deployment failures and ensuring high availability across enterprise application releases." // [cite: 20, 89, 91]
      ]
    },
    {
      company: "Cognizant", // [cite: 12, 78]
      role: "Programmer Analyst Trainee Intern", // [cite: 93]
      duration: "May 2025 - Sep 2025", // [cite: 14, 93]
      type: "Internship",
      tech: ["Java", "Spring Boot", "React", "Microservices", "SQL"], // [cite: 94, 95, 96, 97]
      points: [
        "Developed microservices-based backend systems utilizing Java and Spring Boot architecture.", // [cite: 94, 97]
        "Designed and optimized complex SQL queries to drive business logic and database performance.", // [cite: 95]
        "Built responsive frontend components using React.js to enhance user interaction.", // [cite: 96]
        "Collaborated within Agile teams to follow SDLC best practices and rapid deployment cycles." // [cite: 98]
      ]
    },
    {
      company: "Rooman Technologies", // [cite: 99]
      role: "AI - Machine Learning Intern", // [cite: 100]
      duration: "Sep 2024 - Mar 2025", // [cite: 101]
      type: "Internship",
      tech: ["Artificial Intelligence", "Python", "Machine Learning"], // [cite: 103, 104]
      points: [
        "Developed AI/ML models for real-world applications using Python for data processing.", // [cite: 103, 104]
        "Applied Machine Learning concepts to build intelligent systems.", // [cite: 104]
        "Contributed to accessibility-focused AI solutions including CNN-based gesture recognition." // [cite: 32, 104]
      ]
    }
  ],

  projects: [
    {
      name: "Prince Mart", // [cite: 23]
      tech: ["React", "SpringBoot", "Microservices", "SQL", "Tailwind"], // [cite: 25]
      description: "Enterprise e-commerce engine with automated client application processes and secure API integration.", // [cite: 26, 28]
      image: "/prince-mart.png",
      link: "https://prince-mart-three.vercel.app/"
    },
    {
      name: "Inclusive Voice Assistant & Sign Language Detection", // [cite: 30, 66]
      tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe"], // [cite: 31]
      description: "Award-winning AI accessibility solution utilizing CNN-based gesture recognition for real-time translation.", // [cite: 32, 33]
      image: "/inclusive.png",
      link: "https://github.com/PrajwalSH1930/Inclusive-Voice-Assistant-and-Real-Time-Sign-Language-Detection"
    },
    {
      name: "Furnituraa",
      tech: ["HTML", "CSS", "JS", "Styled Components"],
      description: "High-performance furniture commerce platform with advanced filtering and state management.",
      image: "/img1.png",
      link: "https://furnituraa-by-princeinc.netlify.app/"
    },
    {
      name: "EaseBank",
      tech: ["HTML", "CSS", "JS", "PHP", "MySQL"],
      description: "Secure banking simulation focusing on transaction atomicity and RESTful account management.",
      image: "/img2.png",
      link: "http://easebankbyprinceinc.kesug.com/"
    },
    {
      name: "Forkify",
      tech: ["JavaScript", "Sass"],
      description: "Recipe application implementing complex API data fetching and custom pagination logic.",
      image: "/img10.png",
      link: "https://forkify-byprinceinc.netlify.app"
    },
    {
      name: "Omnifood",
      tech: ["HTML5", "CSS3", "Responsive Design"],
      description: "AI-powered meal subscription landing page optimized for conversion and performance.",
      image: "/img7.png",
      link: "https://omnifood-by-princeinc.netlify.app"
    },
    {
      name: "Mapty",
      tech: ["Geolocation API", "Leaflet.js", "OOP"],
      description: "Workout tracking application using browser-based geolocation and persistent local storage.",
      image: "/img5.png",
      link: "#"
    },
    {
      name: "Dice Game",
      tech: ["DOM Manipulation", "State Logic"],
      description: "Logic-based interactive game focused on clean state transitions and UI updates.",
      image: "/img6.png",
      link: "https://simpledice-game.netlify.app"
    },
    {
      name: "Simon Game",
      tech: ["jQuery", "Sequence Algorithms"],
      description: "Pattern recognition game implementing automated sequence generation and user input validation.",
      image: "/img8.png",
      link: "https://simon-gamepro.netlify.app"
    }
  ],

  achievements: [
    { title: "Best Paper Award - ICRTET-2025", detail: "Inclusive Voice Assistant and Real-Time Sign Language Detection System." }, // [cite: 39, 66]
    { title: "1st Prize - National Level SQL Workshop", detail: "Conducted by IIM Kashipur." }, // [cite: 39]
    { title: "Winner - National Code Craft Competition", detail: "PRAXIS 2K24, KLECET Chikodi." }, // [cite: 40, 60]
    { title: "100% Security Compliance Score", detail: "Enterprise Candor scorecard maintained for 4+ months." }, // [cite: 41, 92]
    { title: "VTU State Level Yogasana Winner", detail: "Consecutive success in 2023-24 and 2024-25 competitions." } // [cite: 61, 64]
  ],

  socials: {
    linkedin: "https://www.linkedin.com/in/prajwal-hiremath-678528255", // [cite: 4, 5, 26]
    github: "https://github.com/PrajwalSH1930",
    instagram: "https://instagram.com/_prajwalhiremath.ig",
    twitter: "https://x.com/Prajwal32790689", // Update this
    facebook: "https://www.facebook.com/prajwal.hiremath.9237/",
    leetcode: "https://leetcode.com/u/PrinceHiremath", // Update this
    gfg: "https://www.geeksforgeeks.org/profile/psh2wkjb", // Update this
    interviewbit: "https://www.interviewbit.com/profile/prajwal-hiremath_226", // Update this
    email: "psh23g@gmail.com" // [cite: 3]
    },

  education: {
    degree: "Bachelor of Engineering in Computer Science", // [cite: 36, 107]
    institute: "Hirasugar Institute of Technology, Nidasoshi", // [cite: 35, 106]
    score: "CGPA: 9.28/10", // [cite: 36]
    duration: "Dec 2021 - May 2025" // [cite: 38, 107]
  }
};