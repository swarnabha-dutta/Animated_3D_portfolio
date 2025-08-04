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
    {
        review: "Faced challenges: integrating Gemini AI into a full-stack MERN application and handling real-time prompt responses. Learned how to connect AI models with user input securely and effectively.",
        logoPath: "/images/Node.js.png",
        title: "AI Code Reviewer",
        date: "Feb 2024 – Mar 2024",
        responsibilities: [
            "Developed real-time code analysis UI using React.js, HTML, CSS, and JavaScript.",
            "Built RESTful APIs with Node.js, Express.js, and MongoDB integrated with Gemini AI.",
            "Engineered a full-stack MERN platform to simulate a production-grade code review experience.",
            "Deployed the application on Render with live AI response support."
        ]
    },
    {
        review: "Faced integration challenges while combining scheduling, health records, and secure authentication in one platform. Used modular design with Clerk Auth and Prisma ORM to solve complexity.",
        logoPath: "/images/Next.js.png",
        title: "HealthMate",
        date: "Apr 2025 – May 2025",
        responsibilities: [
            "Built responsive healthcare consultation interface using Next.js, React.js, and Tailwind CSS.",
            "Developed backend using Prisma ORM, PostgreSQL, and Clerk Auth for secure appointment handling.",
            "Integrated scheduling, health records, and payment systems for a complete health solution.",
            "Deployed on Vercel; achieved 92/100 Lighthouse score and currently serving 36+ active users."
        ]
    },
    {
        review: "Faced implementation challenges while integrating 3D visuals with authentication systems. Solved through combining Three.js with Auth0 and responsive layout handling.",
        logoPath: "/images/React.png",
        title: "3D Developer Portfolio",
        date: "May 2025 – June 2025",
        responsibilities: [
            "Created immersive 3D visuals using React.js and Three.js with responsive animations.",
            "Integrated Auth0 with MFA and OAuth for secure cross-device authentication.",
            "Showcased full-stack development skills via real-time interactivity and clean design.",
            "Deployed on Vercel with full device compatibility and real-world production standards."
        ]
    }
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
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};