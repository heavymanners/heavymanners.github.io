export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://michaeltoddlewis.com',
    title: 'BIGTIME',
    subtitle: 'I\'m on my way. I\'m making it.',
    description: 'Personal blog and portfolio built using Astro and Dante.',
    image: {
        src: '/hike.jpg',
        alt: 'A picture of me'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/mikebigtime'
        }
    ],
    hero: {
        title: 'Hi There',
        text: "My name is Michael Todd Lewis, though my friends call me Bigtime, or more often Biggie or just Big. My pronouns are whatever you feel like, but most people use he/him with me. This website serves as a place to capture some thoughts and share things I find interesting.<br/><br/> About me: I am a software development team leader by trade. I believe very deeply in the principles of servant leadership and find great joy in helping others be successful.<br/><br/> I also dabble in creating art, making music, and writing. I am tattoo collector. I love dogs. I love music and art and reading. I enjoy hiking and trying new restaurants or visiting old favorites. I like laughing with my friends.<br/><br/>I am firm believer that life isn’t just for surviving but that it should be filled with things that make it worth living. It’s for joy and meaning and fulfillment however you find it. Not just bread, but roses too.",
        image: {
            src: '/hike.jpg',
            alt: 'A picture of me'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
