import { Icons } from "@/components/icons";

export const DATA = {
  name: "Dileep Kumar Verma",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer at PwC India. I love building things and helping people.",
  summary:
    "Full Stack Developer with a deep understanding of Data Structures and a specialization in Core Java and the Spring Framework. I excel in creating efficient and scalable web applications, leveraging Microservices architecture and RESTful Web Services. With extensive experience in cloud technologies, particularly AWS, and proficiency in Git, Docker, and Jenkins, I deliver solutions that enhance business growth and user experiences. As an AWS Certified Developer Associate, I am dedicated to staying ahead in technology to solve complex challenges and build innovative software solutions.",
  avatarUrl: "/me.jpg",
  skills: [
    "Data Structures & Algorithms",
    "Java",
    "Spring MVC",
    "Spring Boot",
    "Microservices",
    "Junit",
    "Angular",
    "Postgres",
    "Kafka",
    "Oracle SQL",
    "TCP/IP Socket Programming",
    "Docker","Jenkins","Kubernetes",
    "HTML5", "CSS3", "Bootstrap"
  ],
  contact: {
    email: "dileepverma107@gmail.com",
    tel: "+91 8299848083",
    social: {
      GitHub: {
        url: "https://github.com/dileepverma107",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/dileep-verma-35a319139/",
        icon: Icons.linkedin,
      },
      X: {
        url: "",
        icon: Icons.x,
      },
      Youtube: {
        url: "",
        icon: Icons.youtube,
      },
    },
  },

  work: [
    {
      company: "PwC India",
      href: "https://www.pwc.in/",
      badges: [],
      location: "Gurgaon",
      title: "Senior Associate Consultant",
      logoUrl: "/pwc.jpg",
      start: "May 2024",
      end: "Present",
      description:
        "",
    },
    {
      company: "Accenture",
      badges: [],
      href: "https://www.accenture.com/in-en",
      location: "Noida",
      title: "Sr Application Development Analyst",
      logoUrl: "/accenture.png",
      start: "August 2021",
      end: "May 2024",
      description:
        "",
    },
    {
      company: "Tech Mahindra",
      href: "https://www.techmahindra.com/",
      badges: [],
      location: "Mumbai",
      title: "Jr. Software Engineer",
      logoUrl: "/techm.png",
      start: "June 2019",
      end: "August 2021",
      description:
        "",
    },
  ],
  education: [
    {
      school: "Shri Ramswaroop Memorial University, Lucknow",
      href: "https://srmu.ac.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/srmu.jpeg",
      start: "2014",
      end: "2018",
    },
    {
      school: "Saraswati Vidya Mandir Inter College, Gola Kheri",
      href: "http://svmicgola.com/",
      degree: "Intermediate",
      logoUrl: "/vidyamandir.png",
      start: "2012",
      end: "2013",
    },
    {
      school: "Saraswati Vidya Mandir Inter College, Gola Kheri",
      href: "http://svmicgola.com/",
      degree: "High School",
      logoUrl: "/vidyamandir.png",
      start: "2010",
      end: "2011",
    },
  ],
  projects: [
    {
      title: "Generali Insurance",
      href: "https://www.generali.com/",
      dates: "August 2021 - May 2024",
      active: true,
      description:[
        "Led end-to-end development of web applications from requirements gathering to production deploymen",
        "Implemented RESTful and SOAP APIs using Spring Boot, Hibernate, and integrated Retrofit for external service calls.",
        "Implemented Liquibase for automated database schema migrations across services.",
        "Enhanced endpoint security with AWS Identity Provider token integration for authorization.",
        "Conducted unit tests (JUnit), integration tests using WireMock, and repository tests using Docker containers.",
        "Mentored and led a team of 3 developers, facilitating bi-weekly calls, tracking tasks, and managing weekly roadmaps and blockers.",
        "Established a CI/CD pipeline as a standard for automated application deployment, promoting modern engineering practices.",
      ] as string[],
      technologies: [
        "Java 8",
        "Spring Boot",
        "Microservices",
        "PostgreSQL",
        "Kafka",
        "Docker",
        "Kubernetes",
        "Liquibase",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.generali.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/generaliproject.jpg",
      video:
        "",
    },
    {
      title: "SBI - Cash Management Product",
      href: "https://www.newcmp.sbi/cmpadmin/login.htm",
      dates: "June 2019 - August 2021",
      active: true,
      description:[
        "Collaborated within a team of 15 to deliver robust solutions for complex application challenges.",
        "Independently developed and integrated core modules, resolving critical issues in the application.",
        "Designed and implemented 6 key modules for the SBI CMP branch portal, including:Branch Mapping ,Onboarding of Agencies, Agency Mapping,VAN Dealers, and other essential components, covering end-to-end processes from inception to deployment.",
        "Developed and optimized Spring Batch and Cron Job services in Spring Boot for large-scale data processing, utilizing Multithreading to manage the insertion of millions of records and the generation of reports in Excel, CSV and pdf formats.",
        "Provided comprehensive support for bug fixes in both lower and production environments, ensuring smooth and uninterrupted service.",
        "Implemented code quality improvements that led to a 27% reduction in downtime.",
      ] as string[],
      technologies: [
        "Java",
        "Spring MVC",
        "Spring Batch",
        "Bootstrap",
        "HTML",
        "CSS",
        "Javascript",
        "Oracle SQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.newcmp.sbi/cmpadmin/login.htm",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sbiproject.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Aws Certified Developer - Associate",
      dates: "Issued March 2022 - Expires March 2025",
      location: "India",
      description: [
        "Demonstrated expertise in building, deploying, and maintaining scalable and secure AWS applications, leveraging services like EC2, Lambda, and S3. Proven ability to implement effective CI/CD pipelines and manage infrastructure as code.",
      ] as string[],
      image:
        "/aws.png",
      mlh: "/aws.png",
      links: [],
    },
    {
      title: "Tech Star 2023",
      dates: "May 2023",
      location: "Noida",
      description: [
        "Recognized with “Ace” and “Tech Star” award in Accenture.",
      ] as string[],
      image:
        "/accenture.png",
      links: [],
    },
    {
      title: "Pat on the back",
      dates: "May 2023",
      location: "Noida",
      description: [
        "Recognized with “Pat on the back” award in Tech Mahindra.",
      ] as string[],
      image:
        "/techm.png",
      links: [],
    },
  ]
} as const;
