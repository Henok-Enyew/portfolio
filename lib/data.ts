import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'henokenyew86@gmail.com',

    emailSubject: "Let's collaborate on something impactful",
    emailBody: 'Hi Henok, I am reaching out to you because...',

    portfolio: 'https://your-portfolio-url.com',
    githubProfile: 'https://github.com/henok-enyew',
    upworkProfile: 'https://www.upwork.com/freelancers/~01578499d0b97c0f37',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/your-username' },
    { name: 'x', url: 'https://x.com/your-handle' },
    { name: 'portfolio', url: GENERAL_INFO.portfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'vue',
            icon: '/logo/vue.svg',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Django',
            icon: '/logo/django.svg',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        // {
        //     name: 'AWS',
        //     icon: '/logo/aws.png',
        // },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Tankwa Tours',
        slug: 'tankwa-tours',
        liveUrl: 'https://tankwatours.com/',
        year: 2025,
        description:
            'Tankwa tours is a travel agency specializing in unique experiences in the across the world.',
        role: 'Fullstack Developer',
        techStack: [
            'Reactjs',
            'Django',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Netlify',
        ],
        thumbnail: '/projects/thumbnail/tankwatours-1.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/tankwatours-1.png',
            '/projects/images/tankwatours-2.png',
        ],
    },
    {
        title: 'Tana Car Rental',
        slug: 'tana-car-rental',
        techStack: ['React', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/tanacars-1.png',
        longThumbnail: '/projects/long/tanacars-1.png',
        images: [
            '/projects/images/tanacars-1.png',
            '/projects/images/tanacars-2.png',
        ],
        liveUrl: 'https://tana-car-rental.netlify.app/',
        year: 2023,
        description:
            'Tana Car Rental is a platform that simplifies the process of renting cars for users.',
        role: 'Frontend Developer.',
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Project description coming soon. Henok will personalize this section with accomplishments and metrics for Resume Roaster.',
        role: 'Role details coming soon.',
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'Project description coming soon. Henok will add an overview of the PropertyPro build, challenges, and impact.',
        role: 'Role details coming soon.',
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: GENERAL_INFO.githubProfile,
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'Project description coming soon. Henok will refresh this case study with updated positioning and insight.',
        role: 'Role details coming soon.',
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: GENERAL_INFO.githubProfile,
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description:
            'Project description coming soon. Henok will document the devLinks build with personal commentary.',
        role: 'Role details coming soon.',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Lead FullStack Engineer',
        company: 'Tankwa Tours',
        duration: 'April 2025 - Present',
    },
    {
        title: 'Backend Developer',
        company: 'Ethioden IT Consultancy',
        duration: 'November 2024 - May 2025',
    },
    {
        title: 'Frontend Developer',
        company: 'Ethiopian Space Science Society',
        duration: 'January 2024 - October 2024',
    },
];
