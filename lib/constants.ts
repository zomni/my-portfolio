export const siteConfig = {
    name: 'Paolo Vilches Serrano',
    description:
        'Computer Engineering student with a solid background in technical support, databases, and software development.',
    mainNav: [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Education', href: '/education' },
        { title: 'Skills', href: '/skills' },
        { title: 'Experience', href: '/experience' },
        { title: 'Projects', href: '/projects' },
        { title: 'Certificates', href: '/certificates' },
        { title: 'Contact', href: '/contact' },
    ],
    links: {
        github: 'https://github.com/zomni',
        linkedin: 'https://linkedin.com/in/paolo-vilches',
        twitter: '', 
        facebook: '',
        instagram: '',
        whatsapp: 'https://wa.me/56996742085',
        email: 'mailto:paolovilches@hotmail.com',
        phone: 'tel:+56996742085',
    },
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
    {
        title: 'Merchandiser',
        company: 'LANCO',
        location: 'Chile',
        startDate: 'Oct 2022',
        endDate: 'May 2025',
        description: [
            'Managed replenishment and inventory control using precision and traceability criteria.',
            'Coordinated orders and purchase requests through digital tools.',
            'Maintained effective communication with clients and work teams, strengthening organizational skills.',
        ],
        technologies: ['Digital Inventory Tools', 'Logistics Management'],
    },
    {
        title: 'Technical Support in Equipment and Networks',
        company: 'KONECTA',
        location: 'Chile',
        startDate: 'Dec 2021',
        endDate: 'Mar 2022',
        description: [
            'Diagnosed and resolved failures in computer equipment, networks, and telecommunications systems.',
            'Configured IP connections in Windows environments.',
            'Provided remote support via AnyDesk, including software installation, malware removal, and system optimization.',
        ],
        technologies: ['Windows', 'Networking', 'AnyDesk', 'Hardware Troubleshooting'],
    },
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Structural Analysis Software',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
    {
        degree: 'Bachelor of Computer Engineering',
        field: 'Computer Science',
        institution: 'DuocUC',
        location: 'Chile',
        startDate: 'Mar 2023',
        endDate: 'Present',
        achievements: [
            'Focus on technical objective fulfillment and continuous learning.',
            'Developing advanced skills in software architecture and databases.',
        ],
    },
    {
        degree: 'Civil Informatics and Telecommunications Engineering',
        field: 'Engineering',
        institution: 'Universidad Diego Portales',
        location: 'Chile',
        startDate: '2021',
        endDate: '2022',
        achievements: [
            'Foundational studies in computer systems and network infrastructure.',
        ],
    },
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Node.js (Express)', level: 8, category: 'software' },
    { name: 'Java (Spring Boot)', level: 7, category: 'software' },
    { name: 'Angular', level: 8, category: 'software' },
    { name: 'Ionic', level: 7, category: 'software' },
    { name: 'MySQL / Oracle PL/SQL', level: 8, category: 'software' },
    { name: 'Firebase', level: 7, category: 'software' },
    { name: 'Git / GitHub', level: 9, category: 'software' },
    { name: 'Postman / Selenium', level: 7, category: 'software' },
    
    // Technical Skills
    { name: 'RESTful APIs', level: 8, category: 'technical' },
    { name: 'Network Diagnostics', level: 8, category: 'technical' },
    { name: 'Technical Support', level: 9, category: 'technical' },
    { name: 'Data Analysis (Excel/Colab)', level: 7, category: 'technical' },

    // Soft Skills
    { name: 'Problem Solving', level: 9, category: 'soft' },
    { name: 'Attention to Detail', level: 9, category: 'soft' },
    { name: 'Collaborative Work', level: 8, category: 'soft' },
    { name: 'Agile Methodologies', level: 7, category: 'soft' },
	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
];