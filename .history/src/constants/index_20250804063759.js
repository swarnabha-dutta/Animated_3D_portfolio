const navLinks = [
    {
        name: "Work",
        link: "#work",
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
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 4, suffix: "", label: "Enhanced Projects with Added Features and Looking for  Future  Optimizations" },
    { value: 3, suffix: "", label: "AI-Powered Features Integrated (Chatbot, Emotion Detection, etc.)" },
    { value: 900, suffix: "+Hrs", label: "Practical Learning, Debugging & Implementation In Projects" },

    { value: 600, suffix: "+Hrs", label: "DSA Learning & Problem Solving" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React",
        imgPath: "/images/logos/react.png",
    },
    
    {
        name: "MongoDB Database",
        imgPath: "/images/logos/mongodb.png",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "javascript",
        modelPath: "/models/0.glb",
        scale: 20,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    // 1. AI Code Reviewer
    {
        review:
            "Faced frequent Gemini API quota exhaustion & rate-limit issues during development. Solved it by implementing backend caching and prompt optimization. This reduced API failures by 35% and significantly improved review response speed.",
        imgPath: "/images/AI.png",
        logoPath: "/images/AI.png",
        title: "AI Code Reviewer - Full Stack Developer",
        date: "Feb 2024 – Mar 2024",
        responsibilities: [
            "Built real-time code review interface using React.js, HTML, and Tailwind CSS.",
            "Developed secure RESTful APIs using Node.js and Express.js with Gemini AI integration.",
            "Used MongoDB to store review history, improving feedback tracking.",
            "Deployed on Render; optimized latency by 40% with server-side enhancements.",
        ],
    },

    // 2. HealthMate
    {
        review:
            "Implemented dynamic scheduling logic and secure appointment flow with Clerk Auth. Faced issues integrating payment system with Prisma ORM initially, but resolved it via API re-mapping. App now supports 36+ users with smooth UX.",
        imgPath: "/images/Next.png",
        logoPath: "/images/Next.png",
        title: "HealthMate - Full Stack Developer",
        date: "April 2025 – May 2025",
        responsibilities: [
            "Built a scalable health consultation platform using Next.js and Tailwind CSS.",
            "Used Prisma ORM + PostgreSQL for structured and reliable data modeling.",
            "Integrated Clerk for user auth, including OTP & MFA, improving security by 60%.",
            "Deployed on Vercel; achieved 92/100 Lighthouse score for performance and UX.",
        ],
    },

    // 3. 3D Portfolio
    {
        review:
            "Initially struggled with Three.js lighting and animation lag on low-end devices. Fixed it using adaptive rendering and lazy-loading. Also integrated Auth0 securely for multi-device login, improving accessibility and user safety.",
        imgPath: "/images/Three.png",
        logoPath: "/images/Three.png",
        title: "3D Portfolio - Frontend Developer",
        date: "June 2025 – July 2025",
        responsibilities: [
            "Designed immersive interactive portfolio using React.js, Three.js, and GSAP.",
            "Added multi-platform Auth0 login with OAuth and MFA for secure access.",
            "Showcased 2 projects with images, live links, and animated tech stack display.",
            "Deployed on Vercel; ensured fast load time and mobile responsiveness.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/React.png",
    },
    {
        name: "logo2",
        imgPath: "/images/MongoDB.png",
    },
    {
        name: "logo3",
        imgPath: "/images/Node.js.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};