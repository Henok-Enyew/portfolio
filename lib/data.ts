import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'henokenyew86@gmail.com',

    emailSubject: "Let's collaborate on something impactful",
    emailBody: 'Hi Henok, I am reaching out to you because...',

    // portfolio: 'https://your-portfolio-url.com',
    githubProfile: 'https://github.com/henok-enyew',
    upworkProfile: 'https://www.upwork.com/freelancers/~01578499d0b97c0f37',
    resume: 'https://drive.google.com/file/d/1aOatOSD7-FiG9m2aeDZMRl0gTPpKUSbx/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/henokenyew/' },
    { name: 'x', url: 'https://x.com/enoch90s' },
    { name: 'telegram', url: 'https://t.me/enoch90s' },
    { name: 'leetcode', url: 'https://leetcode.com/enoch90s' },
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
        title: 'HRMS',
        slug: 'human-resource-management-system',
        techStack: ['React.js', 'Zustand', 'Tailwind CSS', 'MantineUI'],
        thumbnail: '/projects/thumbnail/hrms-1.png',
        longThumbnail: '/projects/long/hrms-1.png',
        images: ['/projects/images/hrms-1.png', '/projects/images/hrms-2.png'],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'Vercatile and easily adaptable to any company Human Resource Management System.',
        role: 'Backend Developer',
    },
    {
        title: 'ESSS Website',
        slug: 'esss-website',
        techStack: ['Reactjs', 'MaterialUI', 'Zustand', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/esss-2.jpg',
        longThumbnail: '/projects/long/esss-1.jpg',
        images: ['/projects/images/esss-1.jpg', '/projects/images/esss-2.jpg'],
        // sourceCode: GENERAL_INFO.githubProfile,
        liveUrl: 'https://esssethiopia.org',
        year: 2025,
        description:
            'Official website of the Ethiopian Space Science Society (ESSS), dedicated to promoting space science and education in Ethiopia.',
        role: 'Designer and Frontend Developer.',
    },
    {
        title: 'Tana Car Rental',
        slug: 'tana-car-rental',
        techStack: ['React', 'Tailwind CSS', 'Swiper.js'],
        thumbnail: '/projects/thumbnail/tanacars-1.png',
        longThumbnail: '/projects/long/tanacars-1.png',
        images: [
            '/projects/images/tanacars-1.png',
            '/projects/images/tanacars-2.png',
        ],
        liveUrl: 'https://tana-car-rental.netlify.app/',
        year: 2024,
        description:
            'Tana Car Rental is a platform that simplifies the process of renting cars for users.',
        role: 'Frontend Developer.',
    },
    {
        title: 'Rick and Morty',
        slug: 'rick-and-morty',
        techStack: ['Vue', 'GraphQl', 'Tailwind'],
        thumbnail: '/projects/thumbnail/rick-and-morty-1.png',
        longThumbnail: '/projects/long/rick-and-morty-1.png',
        images: [
            '/projects/images/rick-and-morty-1.png',
            '/projects/images/rick-and-morty-2.png',
        ],
        sourceCode: GENERAL_INFO.githubProfile,
        liveUrl: 'https://rick-and-morty-tv-show.netlify.app/',
        year: 2024,
        description:
            'Rick and Morty fan site that provides information about characters, episodes, and locations from the show.',
        role: 'Designer and Frontend Developer.',
    },
    {
        title: 'Gafat E-commerce',
        slug: 'gafat-e-commerce',
        techStack: ['React', 'Redux Toolkit', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/gafat-e-commerce-1.png',
        longThumbnail: '/projects/long/gafat-e-commerce-1.png',
        images: [
            '/projects/images/gafat-e-commerce-1.png',
            '/projects/images/gafat-e-commerce-2.png',
        ],
        liveUrl: 'https://gafat-e-commerce.netlify.app/',
        year: 2024,
        description:
            'Gafat E-commerce is a platform that connects buyers and sellers, offering a wide range of products and services.',
        role: 'Frontend Developer.',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'FullStack Engineer',
        company: 'Brainbite AI',
        duration: 'September 2025 - Present',
    },
    {
        title: 'FullStack Developer',
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
