import type {
  Project,
  Experience,
  SkillCategory,
  Education,
  Certification,
  Achievement,
  Language,
} from '../types/portfolio';

export const personalInfo = {
  name: 'Asjath Ahamath',
  title: 'Software Engineer | Full-Stack Developer | Web & Mobile Developer',
  badge: 'Available for Software Engineering Opportunities',
  headline: 'Building scalable digital experiences with code.',
  headlineHighlight: 'Software Engineer',
  location: 'Colombo, Sri Lanka',
  email: 'asjath904@gmail.com',
  phone: '+94 75 507 1696',
  githubUrl: 'https://github.com/AsjathAhamath',
  linkedinUrl: 'https://www.linkedin.com/in/asjath-ahamath',
  resumeUrl: '/Asjath_Ahamath_Software_Engineer_Resume.pdf',
  profileImage: '/profile.jpeg',
  bio: 'Software Engineering graduate with hands-on experience building web, mobile, and full-stack applications using modern technologies across frontend, backend, databases, APIs, and cloud-connected systems.',
  aboutIntro:
    'I am a Software Engineering graduate with practical experience developing, debugging, and maintaining robust applications. My foundation spans frontend user interfaces, backend REST APIs, relational databases, and mobile systems. Having worked on real-world web applications and enterprise tools, I emphasize writing clean, maintainable code, adhering to Agile development best practices, and delivering solutions that solve concrete problems.',
  highlightCards: [
    {
      title: 'Software Engineering',
      subtitle: 'BEng (Hons) Software Engineering',
      description: 'London Metropolitan University via ESOFT Metro Campus with focus on enterprise architectures and engineering practices.',
    },
    {
      title: 'Professional Experience',
      subtitle: 'Software Engineer Intern at GoSetup Pvt Ltd',
      description: 'Developed and maintained Laravel-based web application features, database operations, and software debugging.',
    },
    {
      title: 'Development Focus',
      subtitle: 'Web • Mobile • Full-Stack',
      description: 'Architecting scalable applications across React, React Native, PHP/Laravel, .NET, and cloud services.',
    },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['C#', 'Java', 'PHP', 'JavaScript', 'Python', 'Dart'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'React Native', 'Flutter', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Frameworks',
    skills: ['Laravel', '.NET', 'ASP.NET', 'Node.js'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Microsoft SQL Server', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'APIs & Services',
    skills: ['REST APIs', 'Google Maps API', 'Google Gemini AI'],
  },
  {
    title: 'Tools & Workflows',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'Figma'],
  },
];

export const experiences: Experience[] = [
  {
    id: 'gosetup-intern',
    role: 'Software Engineer Intern',
    company: 'GoSetup Pvt Ltd',
    period: 'February 2026 – August 2026',
    location: 'Colombo, Sri Lanka',
    responsibilities: [
      'Developed and maintained Laravel-based web application features using PHP, Laravel, and MySQL.',
      'Implemented backend functionality, database operations, and application features based on project requirements.',
      'Investigated, debugged, and resolved software issues while testing new and existing application features.',
      'Used Git-based version control and participated in code reviews and Agile development discussions.',
      'Collaborated with senior developers to follow coding standards, software development practices, and project requirements.',
    ],
    techStack: ['PHP', 'Laravel', 'MySQL', 'Git', 'Agile'],
  },
];

export const projects: Project[] = [
  {
    id: 'track-me-buddy',
    title: 'Track Me Buddy',
    category: 'Full-Stack Mobile & Web Application',
    shortDescription:
      'A real-time group location tracking application designed for multi-vehicle travel coordination.',
    technologies: [
      'React Native',
      'React.js',
      'Node.js',
      'Firebase',
      'Google Maps API',
      'Google Gemini AI',
    ],
    features: [
      'Live GPS location sharing',
      'Distance monitoring',
      'Route visualization',
      'Real-time Firebase synchronization',
      'SOS emergency alerts',
      'AI-powered travel assistance',
      'Administrative dashboard',
      'User and trip management',
    ],
    overview:
      'Track Me Buddy is an end-to-end multi-vehicle travel coordination and safety platform. It enables travel groups, convoys, and tour operators to monitor vehicle positions in real time, calculate relative distances, trigger instant emergency SOS alerts, and receive intelligent route insights via AI assistance.',
    problem:
      'During multi-vehicle journeys, convoys frequently encounter communication drops, route disconnections, blind spots, and delays in emergency notification. Conventional messaging apps lack real-time proximity awareness and automated safety dispatch.',
    solution:
      'Designed a distributed mobile client (React Native) paired with an administrative management dashboard (React.js). Utilizing Firebase real-time listeners, drivers and passengers share sub-second GPS telemetry, while Google Maps provides visual path tracking and Google Gemini AI delivers real-time conversational travel assistance.',
    architecture: [
      'Mobile Client: Cross-platform React Native app with background location services and geofencing',
      'Admin Portal: React.js web dashboard for trip dispatchers, fleet monitoring, and user permission management',
      'Backend & State: Node.js coordination endpoints with Firebase Firestore & Realtime DB for live state synchronization',
      'APIs: Google Maps API for path rendering & distance matrix; Google Gemini AI for contextual travel advisories',
    ],
    challenges: [
      'Optimizing background battery consumption while maintaining high-accuracy GPS telemetry during highway travel',
      'Managing intermittent network connectivity in rural regions with local queue synchronization',
      'Handling concurrent multi-user location broadcast streams without UI frame drops',
    ],
    githubUrl: 'https://github.com/AsjathAhamath/TrackMeBuddyMobileApplication',
    featured: true,
    mockupBadge: 'Featured Multi-Platform Project',
  },
  {
    id: 'eshift-logistics',
    title: 'EShift – Logistics Management System',
    category: 'Desktop Management System',
    shortDescription:
      'An enterprise desktop logistics and transport coordination management system for freight operations.',
    technologies: ['C#', '.NET', 'Windows Forms', 'Microsoft SQL Server'],
    features: [
      'CRUD operations',
      'Role-based authentication',
      'Scheduling',
      'Transport allocation',
      'Tracking',
      'Relational database management',
      'Payment features',
      'Reporting',
    ],
    overview:
      'EShift is an enterprise desktop management solution built for logistics companies to oversee transport fleet logistics, schedule driver allocations, manage customer contracts, track shipment milestones, and generate financial reports.',
    problem:
      'Logistics dispatch operations often struggle with manual paper logs, uncoordinated driver schedules, and error-prone billing calculations leading to transport delays and loss of audit trails.',
    solution:
      'Engineered a robust, desktop-based management suite using C# and .NET Windows Forms backed by a normalized Microsoft SQL Server database. The system delivers complete role-based segregation of responsibilities, automated scheduling checks, and dynamic report generation.',
    architecture: [
      'Presentation Layer: C# .NET Windows Forms UI with custom data grids and validation logic',
      'Business Logic: Modular service layer managing scheduling rules, transport capacity, and fee calculations',
      'Data Access: ADO.NET and parameterized stored procedures interacting with Microsoft SQL Server',
      'Security: Role-based authorization for administrators, dispatch coordinators, and billing specialists',
    ],
    challenges: [
      'Designing normalized database schemas to handle complex multi-stop routes and vehicle weight limits',
      'Preventing double-booking of transport units using atomic database transaction locks',
      'Generating exportable management reports with aggregated financial metrics',
    ],
    githubUrl: 'https://github.com/AsjathAhamath/AdCw_01',
    featured: false,
    mockupBadge: 'Enterprise Desktop System',
  },
  {
    id: 'bus-seat-reservation',
    title: 'Bus Seat Reservation System',
    category: 'Data Structures & Algorithms',
    shortDescription:
      'An algorithmic transit booking and ticketing engine demonstrating core data structure principles.',
    technologies: ['Java', 'Data Structures & Algorithms'],
    features: [
      'Seat booking',
      'Cancellation',
      'Customer management',
      'Queue-based waiting list',
      'Stack-based recent operations',
      'Route and availability search',
      'Sorting algorithms',
      'Object-oriented programming',
    ],
    overview:
      'A software engineering implementation of transit booking and seat allocation built from the ground up in Java, emphasizing core algorithmic efficiency, custom collections, and object-oriented principles.',
    problem:
      'High-concurrency ticketing portals require predictable memory footprints and deterministic order of operations for waitlists and rollbacks without unnecessary database overhead.',
    solution:
      'Implemented clean data structure abstractions: FIFO Queues to manage passenger waitlists systematically, LIFO Stacks to support atomic transaction undos and booking rollbacks, and quick search and sort routines for route lookup.',
    architecture: [
      'Queue Management: Custom FIFO queue handling waitlisted bookings upon passenger cancellation',
      'Stack Operations: LIFO stack tracking completed transactions for rollback and operation logging',
      'Search & Sorting: Binary search and quick-sort implementations for seat availability indexing',
      'OOP Architecture: Strongly encapsulated domain models for Passengers, Buses, Routes, and Tickets',
    ],
    challenges: [
      'Ensuring instantaneous queue resolution when seats become vacant after cancellation',
      'Maintaining state integrity during multi-step cancellation rollbacks using custom stack structures',
      'Optimizing route search complexity within tight algorithmic time bounds',
    ],
    githubUrl: 'https://github.com/AsjathAhamath/Bus-Reservation-with-DSA',
    featured: false,
    mockupBadge: 'Algorithmic Software Engine',
  },
];

export const educations: Education[] = [
  {
    degree: 'BEng (Hons) Software Engineering',
    institution: 'London Metropolitan University',
    affiliate: 'via ESOFT Metro Campus',
    period: '2025 – 2026',
    description:
      'Rigorous software engineering curriculum covering distributed systems, software architecture patterns, advanced web engineering, cloud computing, and industry-standard agile practices.',
  },
  {
    degree: 'HND in Computing (Software Engineering)',
    institution: 'Pearson BTEC',
    affiliate: 'via ESOFT Metro Campus',
    period: '2023 – 2025',
    description:
      'Comprehensive foundation in computer science, object-oriented programming, relational databases, data structures & algorithms, and full-stack software development.',
  },
];

export const certifications: Certification[] = [
  {
    title: 'Design and Implement Database Objects with SQL',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'Database Engineering',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/7D89HKVZ?sharingId=BAB2D490ACEC48FC',
  },
  {
    title: 'Implement Programmability Objects with SQL',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'Database Engineering',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/ABH6HKD7?sharingId=BAB2D490ACEC48FC',
  },
  {
    title: 'Work Smarter with AI',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'Artificial Intelligence',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/EGRLTHBP?sharingId=BAB2D490ACEC48FC',
  },
  {
    title: 'Draft Impactful Documents Using AI',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'Artificial Intelligence',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/FECE5UDX?sharingId=BAB2D490ACEC48FC',
  },
  {
    title: 'Unlock Productivity and Unleash Creativity with AI-Powered Chat',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'Artificial Intelligence',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/FECELW6X?sharingId=BAB2D490ACEC48FC',
  },
  {
    title: 'Uncover New Data Insights with AI',
    issuer: 'Microsoft Learn',
    date: 'September 2026',
    category: 'AI & Data Analytics',
    credentialUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/AsjathAhamath-5543/9AJAS9KU?sharingId=BAB2D490ACEC48FC',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'graffon-puzzle',
    title: 'Winner – Graffon Puzzle Challenge',
    event: 'Google DevFest Sri Lanka 2025',
    description:
      'Won a technical puzzle challenge demonstrating problem-solving and logical reasoning skills under competitive time constraints.',
    date: '2025',
    type: 'award',
  },
  {
    id: 'thinkfest-hackathon',
    title: 'ThinkFest Hackathon 2025 Participant',
    event: 'ESOFT Metro Campus',
    description:
      'Participated in a national-level hackathon representing ESOFT Metro Campus and collaborated with a team to develop an AI-powered solution.',
    date: '2025',
    type: 'hackathon',
  },
  {
    id: 'devfest-2025',
    title: 'Google DevFest Sri Lanka 2025 Attendee',
    event: 'Google Developer Groups Sri Lanka',
    description:
      'Attended technical sessions and networking activities focused on AI, cloud technologies, and modern web application development.',
    date: '2025',
    type: 'conference',
  },
];

export const languages: Language[] = [
  {
    name: 'Tamil',
    proficiency: 'Native',
    level: 'Mother Tongue',
  },
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
    level: 'Full Professional Fluency',
  },
  {
    name: 'Sinhala',
    proficiency: 'Conversational',
    level: 'Conversational Competence',
  },
];
