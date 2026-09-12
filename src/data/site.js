export const person = {
  name: 'Uwayo Pascaline',
  firstName: 'Pascaline',
  headline: 'Software Engineer • Researcher • Builder',
  subheadline:
    'Computer Science student at Columbia Engineering exploring the intersection of artificial intelligence, software engineering, engineering, and technology for social impact.',
  introduction:
    'I build software, explore research questions, and develop technology around problems that matter. My interests span AI, health technology, data science, embedded systems, robotics, aerospace engineering, and accessible STEM education.',
  institution: 'Columbia University',
  school: 'The Fu Foundation School of Engineering and Applied Science',
  program: 'Computer Science',
  minor: 'Economics',
  graduation: '2030',
  background: 'Rwanda Coding Academy — Software Programming & Embedded Systems',
  github: 'https://github.com/upascalin3',
  githubHandle: 'upascalin3',
  linkedin: 'https://www.linkedin.com/in/uwayo-pascaline-0968903b7/',
  portfolio: 'https://portfolio-uwayo.vercel.app',
  email: 'uwayopascaline87@gmail.com',
  resumePdf: '/resume.pdf',
  resumeDoc:
    'https://docs.google.com/document/d/19MQ7Fzy9nqWLuiCPkhnvaAlBxHWu-Ce8EgEZuiCozuk/preview',
  interests: [
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Embedded Systems',
    'Health Technology',
    'Aerospace Engineering',
    'Robotics',
    'Financial Technology',
    'STEM Education',
    'Technology for Social Impact',
  ],
};

export const storyArc = [
  'Curious Student',
  'Researcher',
  'Builder',
  'Leader',
  'Community Contributor',
  'Columbia Engineering Student',
  'Future Technology Builder',
];

export const about = {
  title: 'About Me',
  paragraphs: [
    'I am a Computer Science student at Columbia Engineering. I will take Economics as a minor. I have a background in software programming and embedded systems from Rwanda Coding Academy.',
    'My journey in technology has been shaped by curiosity, research, building, leadership, and a desire to make technology useful in the real world.',
    'At Rwanda Coding Academy, I developed experience in software development, embedded systems, robotics, research, student leadership, mentoring, and community initiatives. I also conducted three research projects under the supervision of Dr. Awet Fesseha.',
    'My projects have explored healthcare, agriculture, financial decision-making, nutrition, STEM education, robotics, and aerospace engineering.',
    'I enjoy working at the intersection of different disciplines because many important problems cannot be solved by one field alone.',
  ],
  intersections: [
    {
      from: 'A healthcare challenge',
      to: 'can become a software and data problem.',
    },
    {
      from: 'An agricultural challenge',
      to: 'can become an AI problem.',
    },
    {
      from: 'An aerospace challenge',
      to: 'can become an optimization problem.',
    },
    {
      from: 'An education challenge',
      to: 'can become a technology-access problem.',
    },
  ],
  closing: [
    'At Columbia, I am continuing to develop my skills in computer science and will take Economics as a minor, while exploring the connections between computing, engineering, economics, research, and social impact.',
    "My long-term goal is to use technology and engineering to contribute to Rwanda's growing technology ecosystem and build solutions that address meaningful problems.",
  ],
};

export const experience = [
  {
    id: 'sacola',
    org: 'SACOLA',
    role: 'Full-Stack Developer Intern',
    date: 'Summer 2025',
    description:
      'Worked as a full-stack developer intern in a professional software-development environment. Contributed to frontend and backend development and gained practical experience working with application logic, APIs, databases, authentication, debugging, and collaborative software development.',
    highlights: [
      'Full-Stack Development',
      'Backend Development',
      'APIs',
      'Databases',
      'Authentication',
    ],
  },
  {
    id: 'nhic',
    org: 'New Health Intelligence Center',
    role: 'Software / Technology Contributor',
    date: 'September 2025 – August 2026',
    description:
      'Contributed to technology projects focused on healthcare data and digital systems. Worked on software and data-related components while gaining experience with systems designed to support healthcare workflows and the management of complex information.',
    highlights: [
      'Health Technology',
      'Software Development',
      'Data Systems',
      'APIs',
      'Digital Health',
    ],
  },
];

export const researchIntro = {
  title: 'Research',
  paragraphs: [
    'At Rwanda Coding Academy, I developed a strong interest in research as a way to investigate complex problems before attempting to build solutions.',
    'Under the supervision of Dr. Awet Fesseha, I conducted three research projects exploring topics across artificial intelligence, engineering, data science, economics, and technology for social impact.',
    'These experiences introduced me to research-question development, literature review, technical investigation, data analysis, scientific writing, and research communication.',
  ],
};

export const research = [
  {
    slug: 'adaptive-morphing-aircraft-wings',
    number: '01',
    title:
      'Adaptive Morphing Aircraft Wings: A Nano-Electromechanical Systems and Artificial Intelligence Framework for Next-Generation Aerodynamic Optimization',
    date: '11 January 2026',
    institution: 'Rwanda Coding Academy',
    instructor: 'Nshimiyimana Jean de Dieu',
    areas: [
      'NEMS',
      'Artificial Intelligence',
      'Aerospace Engineering',
      'Aerodynamics',
      'Optimization',
    ],
    status: 'Student research',
    illustration: 'aerospace',
    description:
      'A student research paper on how NEMS actuators and AI control could help aircraft wings change geometry in response to flight conditions, instead of remaining fixed-wing structures.',
    paperNote:
      'The paper reviews continuum mechanics, NEMS actuation, Navier–Stokes / CFD ideas, and AI methods such as reinforcement learning and explainable control. Simulated CFD–FEA comparisons are included as analysis, not as flight-tested results.',
    connection:
      'The project connected my interests in aerospace engineering, intelligent systems, optimization, and emerging technologies.',
    problem:
      'Fixed-wing designs are optimized for a limited set of conditions. The paper asks how morphing wings might adapt lift, drag, and stall behavior across different flight regimes.',
    motivation:
      'The project grew from a desire to understand aerospace engineering not only as a mechanical problem, but as an optimization and intelligent-systems problem.',
    approach:
      'The paper outlines a framework linking composite wing structures, distributed NEMS actuators, sensor feedback, and an AI controller, with a research protocol from materials design through simulation and proposed wind-tunnel validation.',
    challenges:
      'The paper notes challenges including scaling NEMS arrays, real-time simulation cost, certification of AI control, and integrating materials, mechanics, electronics, and AI.',
    results:
      'This was a student research paper at Rwanda Coding Academy. Simulated performance tables are presented for discussion; the work does not claim a built aircraft, wind-tunnel proof, or certified aerodynamic gains.',
    learned:
      'The work strengthened my interest in the intersection of aerospace engineering, intelligent systems, and optimization, and in writing across those fields.',
    future:
      'I hope to continue exploring questions at the intersection of AI and engineering.',
  },
  {
    slug: 'data-science-and-poverty-traps',
    number: '02',
    title:
      'Causal Analysis of Trap in East Africa: Policy Implications by Mobile Money Transaction Data',
    date: 'January 2026',
    institution: 'Rwanda Coding Academy',
    instructor: 'Dr. Awet Fesseha',
    areas: [
      'Data Science',
      'Economics',
      'Mobile Money',
      'Financial Inclusion',
      'Social Impact',
    ],
    status: 'Student research',
    illustration: 'data',
    description:
      'A student research paper asking whether mobile-money transaction data can serve as timely signals of economic vulnerability and poverty-trap dynamics in Kenya, Uganda, Tanzania, and Rwanda.',
    paperNote:
      'The paper discusses features such as transaction count, average balance, and balance volatility, and compares logistic regression and ensemble methods as possible modeling tools. Mobile-money analytics are treated as a complement to broader policy, not a complete solution.',
    connection:
      'The project strengthened my interest in the intersection of data science, economics, financial systems, and social impact.',
    problem:
      'Traditional poverty metrics are often slow to update. The paper explores whether digital financial behavior could offer more timely proxies for household vulnerability.',
    motivation:
      'I wanted to understand whether data science could help investigate questions that sit between economics, financial inclusion, and social impact in East Africa.',
    approach:
      'The paper combines literature on poverty traps and financial inclusion with feature engineering and predictive-model discussion, and places Rwanda in comparative perspective with Kenya, Uganda, and Tanzania.',
    challenges:
      'Mobile-money data is sensitive, economic behavior is complex, and digital signals cannot replace education, healthcare, and infrastructure reform.',
    results:
      'This was student research. Model-comparison figures in the paper are drawn from cited and illustrative sources; the work does not claim a production poverty-prediction system or a proven causal policy instrument.',
    learned:
      'The project made clearer why investigation should come before building, especially when data touches people’s financial lives.',
    future:
      'I remain interested in the intersection of data and economics, and in how technology can inform more grounded social and financial questions.',
  },
  {
    slug: 'algorithmic-bias-in-health-datasets',
    number: '03',
    title:
      'Algorithmic Bias in Health Datasets: A Rwanda-Centered Case Study and Ethical AI Mitigation Frameworks for Underrepresented Populations',
    date: '12 January 2026',
    institution: 'Rwanda Coding Academy',
    instructor: 'Dr. Awet Fesseha',
    areas: [
      'Algorithmic Bias',
      'Health Data',
      'Ethical AI',
      'Machine Learning',
      'Social Impact',
    ],
    status: 'Student research',
    illustration: 'health',
    description:
      'A student research paper on how algorithmic bias can appear in Rwanda’s health data ecosystem, and how fairness-aware methods might reduce harm for rural, low-income, and historically marginalized populations.',
    paperNote:
      'The paper looks at community health worker reports, HMIS, EMRs, and Community-Based Health Insurance claims, and discusses sampling, measurement, and label bias. It proposes a Rwanda-centered ethical AI framework spanning data, model training, stakeholder validation, and oversight.',
    connection:
      'The project connected my interests in health technology, data science, and technology for social impact.',
    problem:
      'AI systems trained on uneven health data can perform worse for groups that are less visible in digital records, including rural and lower-income communities.',
    motivation:
      'A healthcare challenge can become a software and data problem. I wanted to understand that problem in a Rwandan context, not only as a global abstraction.',
    approach:
      'The paper reviews bias mechanisms in Rwanda’s health information architecture, fairness criteria used in medical machine learning, and mitigation ideas such as fairness-aware training, data reweighting, and post-processing.',
    challenges:
      'Fairness metrics can conflict, proxy labels such as utilization can encode access rather than health, and technical fixes are not enough without governance and better rural data infrastructure.',
    results:
      'This was a student research paper. It argues for a context-sensitive ethical framework; it does not claim a deployed clinical model or a validated national bias audit.',
    learned:
      'I learned to treat bias as a sociotechnical issue: data gaps, proxies, and policy choices matter as much as the algorithm.',
    future:
      'I want to keep learning at the intersection of AI and healthcare, with attention to fairness and whose data a system actually represents.',
  },
];

export const projects = [
  {
    slug: 'survie',
    name: 'SurVie',
    category: 'Health Technology / AI',
    subtitle: 'Personalized Health Intelligence Platform',
    status: 'Concept',
    featured: true,
    illustration: 'health',
    description:
      'SurVie is a health technology platform concept designed to create a more connected healthcare ecosystem. The platform explores an ecosystem in which authorized medical information from different hospitals can be accessed through a unified system rather than remaining isolated across individual healthcare institutions. SurVie also explores personalized AI capabilities and biometric identification for emergency situations, with the goal of making relevant health information more accessible when it matters most.',
    problem:
      'Healthcare information can become fragmented across hospitals and healthcare providers.',
    vision:
      'Create a more connected digital health ecosystem that gives people a unified view of their medical information while exploring AI-powered personalization and emergency identification.',
    motivation:
      'A healthcare challenge can become a software and data problem. SurVie comes from that observation: medical information often stays isolated inside individual institutions, which makes it harder to access relevant information when it matters most—including in emergencies.',
    approach:
      'The concept explores a unified system for authorized medical information, alongside personalized AI capabilities and biometric identification for emergency situations. The emphasis is on investigating the ecosystem, not on presenting a finished clinical product.',
    technologies: [
      'AI',
      'Health Technology',
      'Digital Health',
      'Biometrics',
      'Data Integration',
      'Backend Systems',
    ],
    challenges:
      'Connecting health information across institutions raises questions of authorization, privacy, identity, and trust. Emergency identification adds another layer: information needs to be available quickly without being available carelessly. These are design and systems questions the concept is meant to sit with, not claims of a solved product.',
    results:
      'SurVie is a concept. It is not a clinically validated system, a production healthcare product, or a proven biometric identification platform.',
    learned:
      'Working on SurVie reinforced that healthcare problems are also software, data, and systems problems. It also made the difference between a meaningful idea and a deployable health system much clearer.',
    future:
      'I want to keep learning at the intersection of AI and healthcare—especially how computing can support more connected, more useful health information without overstating what a system can do.',
  },
  {
    slug: 'stratiq',
    name: 'Stratiq',
    category: 'AI / Data Science / FinTech',
    subtitle: 'AI-Powered Financial Prediction and Decision Support',
    status: 'Exploration',
    featured: true,
    illustration: 'finance',
    description:
      'Stratiq is a project focused on using artificial intelligence and data science to help companies understand financial patterns, make predictions, and improve financial decision-making. The platform explores predictive analytics, financial data analysis, and AI-assisted decision-making to transform complex financial information into useful insights for organizations.',
    problem:
      'Financial information is often complex and difficult to turn into timely, useful decisions.',
    vision:
      'Explore how artificial intelligence and data science can help organizations understand financial patterns, make predictions, and support decision-making.',
    motivation:
      'I am interested in how data science and AI can make financial information more interpretable. Stratiq is an exploration of that question in an organizational setting.',
    approach:
      'The project explores predictive analytics, financial data analysis, and AI-assisted decision support. The aim is to investigate how complex financial information might be transformed into insights that help people decide—not to present a guaranteed forecasting engine.',
    technologies: [
      'Artificial Intelligence',
      'Data Science',
      'Financial Analytics',
      'Predictive Modeling',
      'FinTech',
    ],
    challenges:
      'Financial patterns are noisy, and prediction is easy to overstate. A central challenge is keeping the work honest: exploring decision support without implying that an AI system can reliably foresee financial outcomes.',
    results:
      'Stratiq is an exploration. It is not a production trading system, a scientifically proven predictor, or a finished financial product.',
    learned:
      'The project strengthened my interest in using AI and data science to interpret complex information, and in the discipline required when that information is financial.',
    future:
      'I want to continue developing skills in artificial intelligence, data science, and financial technology, including through research and real-world projects.',
  },
  {
    slug: 'openlab',
    name: 'OpenLab',
    category: 'Education / EdTech / STEM',
    subtitle: 'Virtual STEM Laboratory for Underserved Communities',
    status: 'Exploration',
    featured: true,
    illustration: 'education',
    description:
      'OpenLab is a virtual laboratory platform designed to make practical STEM learning more accessible to students in rural communities and schools with limited laboratory resources. The platform explores how virtual experiments and interactive simulations can provide students with opportunities to engage with STEM concepts even when physical laboratory infrastructure is unavailable. The goal is not to replace physical laboratories, but to create another pathway to practical STEM education for students who may otherwise have limited access.',
    problem:
      'Many students in rural communities and schools with limited laboratory resources have few opportunities for practical STEM learning.',
    vision:
      'Create another pathway to practical STEM education through virtual experiments and interactive simulations, without treating virtual labs as a replacement for physical laboratories.',
    motivation:
      'An education challenge can become a technology-access problem. OpenLab comes from wanting practical STEM learning to remain possible even when a physical laboratory is not.',
    approach:
      'The platform explores virtual experiments and interactive simulations as a way for students to engage with STEM concepts. Accessibility is the design constraint: rural communities and schools with limited laboratory resources are the intended context.',
    technologies: [
      'EdTech',
      'STEM',
      'Virtual Labs',
      'Education',
      'Accessibility',
      'Software Engineering',
    ],
    challenges:
      'A virtual lab has to be more than a video or a quiz. The challenge is making experiments feel practical enough to teach, while remaining usable in places where infrastructure, devices, and connectivity may be limited. Another challenge is staying clear that this is a pathway, not a substitute for physical laboratories.',
    results:
      'OpenLab is an exploration. It is not a completed nationwide education product or a replacement for school laboratories.',
    learned:
      'The project made technology-access feel like a core engineering problem, not an afterthought. It also connected my interest in software engineering with STEM education and social impact.',
    future:
      'I remain interested in the intersection of technology and education, and in building tools that make learning more possible for students with limited resources.',
  },
  {
    slug: 'sarura',
    name: 'Sarura',
    category: 'AgriTech / AI / Financial Technology',
    subtitle: 'Agricultural and financial decision support for farmers',
    status: 'Exploration',
    featured: false,
    illustration: 'agriculture',
    description:
      'Sarura is a platform designed to help farmers make better agricultural and financial decisions using AI, data, climate information, and financial planning tools. The platform explores monthly yield prediction, climate forecasting, AI-powered agricultural assistance, farm financial management, short-term savings, long-term savings, and better allocation of income between agricultural and household needs. The goal is to help farmers make informed decisions about both their farms and their financial futures.',
    problem:
      'Agricultural decisions and household financial decisions are tightly connected for many farmers, but the information that could support both is often scattered or hard to use.',
    vision:
      'Help farmers make informed decisions about both their farms and their financial futures by bringing agricultural intelligence and financial planning into one place.',
    motivation:
      'An agricultural challenge can become an AI problem—and often a financial one as well. Sarura explores that overlap: yield, climate, and the way income is allocated between the farm and the household.',
    approach:
      'The platform explores monthly yield prediction, climate prediction analysis, an AI agricultural assistant, farm financial management, short-term savings, long-term savings, and financial planning. The design treats farming and household finance as one decision space rather than two separate apps.',
    features: [
      'Monthly yield prediction',
      'Climate prediction analysis',
      'AI agricultural assistant',
      'Farm financial management',
      'Short-term savings',
      'Long-term savings',
      'Financial planning',
    ],
    technologies: [
      'AI',
      'Agriculture',
      'Climate Intelligence',
      'Predictive Analytics',
      'Financial Planning',
    ],
    challenges:
      'Yield and climate prediction are uncertain. Financial planning has to respect real household constraints. The project’s challenge is combining those domains without pretending that prediction replaces a farmer’s judgment.',
    results:
      'Sarura is an exploration. It is not a proven agricultural forecasting service or a production financial product.',
    learned:
      'The work reinforced that useful technology for farmers has to hold agricultural information and financial reality together. It also connected my interests in AI, agriculture, and financial technology.',
    future:
      'I want to keep learning how data, climate information, and financial tools can support more informed agricultural decisions.',
  },
  {
    slug: 'platy-ai',
    name: 'Platy AI',
    category: 'AI / Nutrition / Mobile & Web',
    subtitle: 'Nutrition and grocery decisions within a budget',
    status: 'Exploration',
    featured: false,
    illustration: 'nutrition',
    description:
      'Platy AI is a mobile and web-based application designed to help users make better nutrition and grocery decisions. Users can scan food and analyze its nutritional information. The platform also explores personalized grocery planning based on the amount of money a user has available, helping them make balanced food choices while staying within their budget. The platform also includes hydration guidance and aims to make healthy eating more practical and accessible.',
    problem:
      'Healthy eating is often harder in practice than in principle, especially when nutritional information is unclear and grocery decisions have to fit a real budget.',
    vision:
      'Make healthy eating more practical and accessible by combining nutrition analysis, budget-aware grocery planning, and hydration guidance.',
    motivation:
      'I wanted to explore how AI could help with everyday decisions that sit between nutrition, money, and habit—not as a perfect health oracle, but as a more practical companion for food choices.',
    approach:
      'The application explores food scanning, nutrition analysis, grocery planning, budget-aware food recommendations, balanced diet planning, and hydration guidance, across mobile and web.',
    features: [
      'Food scanning',
      'Nutrition analysis',
      'Grocery planning',
      'Budget-aware food recommendations',
      'Balanced diet planning',
      'Hydration guidance',
    ],
    technologies: [
      'AI',
      'Computer Vision',
      'Nutrition',
      'Mobile Development',
      'Web Development',
      'Personalization',
    ],
    challenges:
      'Food scanning and nutrition analysis are easy to overclaim. A useful system has to handle imperfect scans, incomplete labels, and budgets that change. Personalization also has to stay within what the user actually has available.',
    results:
      'Platy AI is an exploration of a mobile and web application concept. It is not a clinically validated nutrition system or a finished consumer product.',
    learned:
      'The project connected computer vision, personalization, and everyday constraints. It also made accessibility—here, budget—part of the design rather than a later feature.',
    future:
      'I want to keep exploring how AI can support practical health-related decisions without presenting itself as medical advice or a proven clinical tool.',
  },
];

export const roboticsIntro =
  'My interest in robotics developed at Rwanda Coding Academy, where I worked with other students on projects combining programming, electronics, mechanical systems, and problem solving.';

export const robotics = [
  {
    slug: 'sign-language-robotic-arm',
    name: 'Sign-Language Robotic Arm',
    category: 'Robotics / Embedded Systems',
    status: 'Student project',
    featured: false,
    illustration: 'robotics',
    description:
      'Worked on a robotics project exploring how a robotic arm could be used to reproduce sign-language gestures. The project combined programming, robotics, mechanical movement, and human-computer interaction.',
    problem:
      'Sign language is a physical, spatial language. This project asked whether a robotic arm could reproduce gestures in a way that connects mechanical movement with human communication.',
    vision:
      'Explore how robotics and human-computer interaction might support sign-language gesture reproduction.',
    motivation:
      'The project grew from collaborative robotics work at Rwanda Coding Academy and from an interest in combining programming with mechanical systems and communication.',
    approach:
      'I worked with other students on a robotic arm that explored sign-language gestures, bringing together programming, robotics, mechanical movement, and human-computer interaction.',
    technologies: [
      'Robotics',
      'Embedded Systems',
      'Arduino',
      'Automation',
      'Mechanical Systems',
    ],
    challenges:
      'Gesture reproduction is both a mechanical-control problem and a communication problem. Coordinating movement so that it remains recognizable as language was part of what the project had to explore.',
    results:
      'This was a student robotics project. It explored a concept through building and collaboration; it is not a production assistive device.',
    learned:
      'I learned how programming, electronics, and mechanical systems have to work together, and how robotics becomes more interesting when it is connected to human interaction.',
    future:
      'I want to keep developing my skills in robotics, embedded systems, and intelligent systems through further projects and study.',
  },
  {
    slug: 'aquatic-waste-collection-robot',
    name: 'Aquatic Waste-Collection Robot',
    category: 'Robotics / Environmental Technology',
    status: 'Student project',
    featured: false,
    illustration: 'aquatic',
    description:
      'Worked on a robotic fish concept designed to operate in water bodies and collect waste, particularly plastic pollution. The project explored how robotics and embedded systems could be applied to environmental challenges.',
    problem:
      'Plastic pollution in water bodies is difficult to address at scale. This project asked whether a robotic fish could operate in water and collect waste.',
    vision:
      'Explore how robotics and embedded systems could be applied to environmental challenges such as plastic pollution.',
    motivation:
      'The project connected my interest in robotics with an environmental problem that is visible, physical, and worth taking seriously.',
    approach:
      'I worked with other students on a robotic fish concept designed to operate in water bodies and collect waste, particularly plastic pollution, using robotics and embedded systems.',
    technologies: [
      'Robotics',
      'Embedded Systems',
      'Arduino',
      'Automation',
      'Mechanical Systems',
      'Environmental Technology',
    ],
    challenges:
      'Operating in water changes everything: movement, sealing, control, and how waste is actually collected. The concept had to hold both the mechanical problem and the environmental one at the same time.',
    results:
      'This was a student project and concept exploration. It is not a deployed environmental cleanup system.',
    learned:
      'The work showed how embedded systems and mechanical design become specific to their environment, and how robotics can be pointed at problems beyond the lab.',
    future:
      'I remain interested in robotics, embedded systems, and technology that addresses environmental and social problems.',
  },
];

export const roboticsTags = [
  'Robotics',
  'Embedded Systems',
  'Arduino',
  'Automation',
  'Mechanical Systems',
  'Environmental Technology',
];

export const leadership = [
  {
    id: 'minister',
    title: 'Minister of Sports, Culture & Entertainment',
    org: 'Rwanda Coding Academy Student Council',
    description:
      'Served as Minister of Sports, Culture & Entertainment in the Rwanda Coding Academy Student Council. Represented students and helped coordinate sports, cultural, entertainment, and student engagement activities. The role strengthened my leadership, communication, coordination, and event-organization skills.',
  },
  {
    id: 'media',
    title: 'Advisor & Social Media Manager',
    org: 'Rwanda Coding Academy Media Club',
    description:
      'Served as an advisor and social media manager for the Rwanda Coding Academy Media Club. Responsibilities included writing articles, helping manage the student information and broadcasting website, reviewing information for accuracy and appropriateness, photographing school events, and preparing content for publication. This experience strengthened my communication, editorial judgment, digital media, photography, and information-management skills.',
  },
  {
    id: 'basketball',
    title: 'Basketball',
    org: 'High school team leadership',
    description:
      'Played basketball in high school and took on team leadership responsibilities. Helped coordinate practices, communication, and game-day responsibilities, particularly when an official coach was unavailable.',
  },
  {
    id: 'soccer',
    title: 'Soccer',
    org: 'High school',
    description:
      'Played soccer during high school, developing teamwork, discipline, communication, adaptability, and commitment through competitive team participation.',
  },
  {
    id: 'robotics-club',
    title: 'Robotics Club Member',
    org: 'Rwanda Coding Academy',
    description:
      'Member of the Rwanda Coding Academy Robotics Club, collaborating with other students on robotics and embedded-systems projects including a sign-language robotic arm and an aquatic waste-collection robot.',
  },
];

export const initiatives = [
  {
    id: 'brainiacs',
    name: 'Brainiacs',
    role: 'Peer Mentor',
    description:
      'Mentored new students entering Rwanda Coding Academy by helping them adapt to the academic and technical environment, understand programming concepts, develop study strategies, and build confidence in their abilities.',
  },
  {
    id: 'spring',
    name: 'Spring Initiative',
    role: 'Technology Mentor',
    description:
      'Participated as a technology mentor in the Spring Initiative, teaching children from communities near Rwanda Coding Academy about technology. The initiative focused on introducing children in a rural community to technology and encouraging curiosity, exploration, and confidence in learning.',
  },
  {
    id: 'plp',
    name: 'PLP — Peace and Love Proclaimers',
    role: 'Member',
    description:
      'Participated in Peace and Love Proclaimers, a community initiative focused on helping people in need, promoting compassion, and strengthening community connections. Participated in charity activities, community events, and initiatives designed to bring people together.',
  },
  {
    id: 'her-impact',
    name: 'Her Impact',
    role: 'Founder',
    description:
      'Founded Her Impact at Rwanda Coding Academy, a student initiative designed to encourage girls entering the school to see themselves as capable participants in technology and engineering. The initiative introduced new female students to technology, encouraged confidence, and challenged the perception that technology and technical fields are primarily for men. The goal was to help girls begin their academic journey with a strong mindset and recognize that they belong in technical spaces where they can build, lead, and innovate.',
  },
];

export const skills = {
  Languages: [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'C/C++',
    'PHP',
    'Kotlin',
    'Swift',
    'SQL',
    'R',
    'HTML/CSS',
    'Dart',
  ],
  'Web Development': [
    'React',
    'Next.js',
    'Vue.js',
    'Node.js',
    'Express.js',
    'FastAPI',
    'Spring Boot',
    'Laravel',
    'NestJS',
    'Hibernate',
    'REST APIs',
    'WebSockets',
    'Tailwind CSS',
    'Bootstrap',
  ],
  'Mobile Development': [
    'React Native',
    'Flutter',
    'Kotlin',
    'Swift',
    'SwiftUI',
    'Android',
    'iOS',
    'Expo',
  ],
  'AI/ML & Data Science': [
    'TensorFlow',
    'PyTorch',
    'Keras',
    'OpenCV',
    'ONNX Runtime',
    'ArcFace',
    'MediaPipe',
    'Pandas',
    'NumPy',
    'Data Analysis',
    'Statistical Analysis',
    'Data Visualization',
    'Data Pipelines',
    'OpenAI API',
  ],
  'Data & BI': [
    'Tableau',
    'Data Visualization',
    'Data Analytics',
    'Statistical Computing',
    'SQL',
    'Data Cleaning',
    'Exploratory Data Analysis',
  ],
  Databases: [
    'PostgreSQL',
    'MySQL',
    'MariaDB',
    'MongoDB',
    'Database Design',
    'Data Modeling',
    'JSON/JSONB',
  ],
  'DevOps & Tools': [
    'Docker',
    'Kubernetes',
    'Git',
    'GitHub',
    'Jenkins',
    'CI/CD',
    'Linux/Kali Linux',
    'Figma',
    'VS Code',
  ],
  Cybersecurity: [
    'Nmap',
    'Wireshark',
    'Burp Suite',
    'Metasploit',
    'Masscan',
    'Recon-ng',
    'PicoCTF',
  ],
  'Embedded & IoT': [
    'Arduino',
    'ESP32',
    'LoRa/RFM95',
    'Sensors',
    'Robotics',
    'Embedded Systems',
    'Computer Vision',
  ],
  'Research Skills': [
    'Research Methodology',
    'Literature Review',
    'Data Collection',
    'Quantitative Data Analysis',
    'Statistical Analysis',
    'Computational Research',
    'Critical Thinking',
    'Scientific Writing',
    'Data Interpretation',
    'Research Presentation',
  ],
  'Professional Skills': [
    'Leadership',
    'Mentoring',
    'Teamwork',
    'Communication',
    'Research',
    'Technical Writing',
    'Problem Solving',
    'Organization',
    'Adaptability',
  ],
};

export const education = [
  {
    place: "FAWE Girls' School",
    program: 'Ordinary Level — General Studies',
    date: '2020–2023',
  },
  {
    place: 'Rwanda Coding Academy',
    program: 'Software Programming & Embedded Systems',
    date: '2023–2026',
  },
  {
    place: 'Columbia University',
    program: 'The Fu Foundation School of Engineering and Applied Science — Computer Science',
    extra: 'I will take Economics as a minor.',
    date: '2026–Present',
  },
];

export const journey = [
  {
    place: "FAWE Girls' School",
    role: 'Ordinary Level — General Studies',
    date: '2020–2023',
  },
  {
    place: 'Rwanda Coding Academy',
    role: 'Software Programming & Embedded Systems',
    date: '2023–2026',
  },
  {
    place: 'SACOLA',
    role: 'Full-Stack Developer Intern',
    date: 'Summer 2025',
  },
  {
    place: 'New Health Intelligence Center',
    role: 'Software / Technology Contributor',
    date: 'September 2025 – August 2026',
  },
  {
    place: 'Columbia University',
    role: 'Columbia Engineering — Computer Science, Economics minor',
    date: '2026–Present',
  },
];

export const approach = [
  {
    number: '01',
    title: 'Understand',
    text: 'I start by understanding the problem, the people affected by it, and the constraints surrounding it.',
  },
  {
    number: '02',
    title: 'Research',
    text: 'I investigate existing solutions, evidence, and technologies before deciding what should be built.',
  },
  {
    number: '03',
    title: 'Design',
    text: 'I translate the problem into a system that can be understood, tested, and improved.',
  },
  {
    number: '04',
    title: 'Build',
    text: 'I prototype, develop, test, debug, and iterate.',
  },
  {
    number: '05',
    title: 'Learn',
    text: 'Every project creates new questions. I use those questions to guide what I learn and build next.',
  },
];

export const philosophy = [
  "I don't want to build technology just because I can.",
  'I want to understand important problems deeply and use technology to create solutions that are useful to people.',
];

export const future = {
  title: "What's Next?",
  paragraphs: [
    'I am beginning a new chapter at Columbia Engineering, where I am studying Computer Science and will take Economics as a minor. I am continuing to explore the connections between computing, engineering, economics, research, and social impact.',
    'I want to deepen my knowledge of artificial intelligence, software engineering, data science, and intelligent systems while gaining more experience through research and real-world projects.',
    "In the long term, I hope to contribute to Rwanda's growing technology ecosystem and build technology-driven solutions that address meaningful challenges.",
    'I want to become not simply someone who can write code, but someone who can identify important problems, investigate them deeply, and build technology that makes a difference.',
  ],
  intersections: [
    'AI × Healthcare',
    'AI × Engineering',
    'Data × Economics',
    'Technology × Education',
    'Software × Social Impact',
  ],
};

export const contact = {
  title: "Let's Build Something Meaningful.",
  text: 'I am always interested in connecting with people working on ambitious technical, research, educational, and social-impact projects.',
};

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/impact', label: 'Impact' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export const allProjects = [...projects, ...robotics];

export function getProject(slug) {
  return allProjects.find((item) => item.slug === slug);
}

export function getResearch(slug) {
  return research.find((item) => item.slug === slug);
}
