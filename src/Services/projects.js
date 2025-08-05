import {
    SiGraphql,
    SiJquery,
    SiMongodb,
    SiMysql,
    SiNodedotjs,
    SiPhp, SiPostgresql,
    SiPython,
    SiReact,
    SiRedux,
    SiServerless
} from "react-icons/si";
import olova from "../assets/projects/olova-B0FjVVEL.png";
import equimondo from "../assets/projects/equimondo.png";
import wellbeing from "../assets/projects/wellbeing.png";
import nutislab from "../assets/projects/nutislab.png";
import cromdn from "../assets/projects/cromdn.png";
import linkaura from "../assets/projects/linkaura.jpg";
import {FaWordpress} from "react-icons/fa";
import {BiLogoJavascript} from "react-icons/bi";
import lascensoriste from "../assets/projects/nutislab.png";
import codekori from "../assets/projects/codekori.png";

export const projects = [
    {
        icon: Code2,
        title: "Profili",
        description:
            "Is a web plateform to generate website portfolio with resume parser and a drag and drop system",
        tags: [
            {
                name: "Node.js",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "Flask",
                icon: <SiPython className="w-4 h-4 text-[#4584b6]" />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
            },
            {
                name: "REST APIs",
                icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
            },
            {
                name: "React JS",
                icon: <SiRedux className="w-4 h-4 text-[#764ABC]" />,
            },
        ],
        links: {
            github: "https://github.com/olovajs/olova",
            demo: "#",
        },
        image: olova,
        featured: true,
        category: 1,
        color: 'text-purple-400',
        cms:''
    },
    {
        icon: Code2,
        title: "EQUIMONDO",
        description:
            "Web application designed to meet the specific needs of equestrian centres. It's built with Php, providing a clean and professional look",
        tags: [
            {
                name: "Php",
                icon: <SiPhp className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "jQuery",
                icon: <SiJquery className="w-4 h-4 text-[#4584b6]" />,
            },
            {
                name: "Ajax",
                icon: <SiJquery className="w-4 h-4 text-[#47A248]" />,

            },
            {
                name: "REST APIs",
                icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
            },

            {
                name: "MySQL",
                icon: <SiMysql className="w-4 h-4 text-[#764ABC]" />,
            },
        ],
        links: {
            github: "https://github.com/equimondo1/",
            demo: "https://alpha.equimondo.fr/",
        },
        image: equimondo,
        featured: true,
        category: 1,
        color: 'text-blue-400',
        cms:''
    },
    {
        icon: Code2,
        title:
            "Wellbeing",
        description:"Mobile application: a marketplace for reserving beauty & care services, it contain AI features to detect skin problems and recommendation systems ",
        tags: [
            {
                name: "React Native",
                icon: <SiReact className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="w-4 h-4 text-[#4584b6]" />,
            },
            {
                name: "REST APIs",
                icon: <SiServerless className="w-4 h-4 text-[#FF6C37]" />,
            },
            {
                name: "Node JS",
                icon: <SiNodedotjs className="w-4 h-4 text-[#764ABC]" />,
            },
            {
                name: "Amazon EC2",
                icon: <Server className="w-4 h-4 text-[#764ABC]" />,
            },
        ],
        links: {
            github: "https://github.com/seraprogrammer/portfolio",
            demo: "#",
        },
        image: wellbeing,
        featured: true,
        category: 1,
        color: 'text-blue-400',
        cms:''
    },
    {
        icon: Code2,
        title:
            "Nutislab",
        description:
            "Web application dedicated to manage orthodontists. Built with Laravel, Angular and MySQL as database.",
        tags: [
            {
                name: "Laravel",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "Angular",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "Laravel",
                icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
            },
            {
                name: "MySQL",
                icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
            },
            {
                name: "REST APIs",
                icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
            },
            {
                name: "GraphQL",
                icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
            },
        ]
        ,

        links: {
            github: "https://github.com/FarahKa/nutislabFront",
            demo: "https://dashboad.nutislab.com/",
        },
        image: nutislab,
        featured: true,
        category: 1,
        color: 'text-purple-400',
        cms:''
    },
    {
        icon: Code2,
        title:
            "Cromdn",
        description:
            "Web application dedicated to manage and filter tunisian dentists based on multiple features. Built with laravel and MySQL as database",
        tags: [
            {
                name: "Laravel",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "Html",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "CSS",
                icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
            },
            {
                name: "MySQL",
                icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
            },
            {
                name: "Laravel",
                icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
            },
        ],
        links: {
            github: "https://github.com/Ryhanee/CROMDN",
            demo: "https://cromdn.business-mania.services/",
        },
        image: cromdn,
        featured: true,
        category: 1,
        color: 'text-purple-400',
        cms:''
    },
    {
        icon:'' ,
        title:
            "Linkaura",
        description:
            "An API of an intelligent instagram influencers based on specific inputs. Built with Flask, ML models and mongodb as database",
        tags: [
            {
                name: "Html",
                icon: <Server className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "CSS",
                icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
            },
            {
                name: "Flask",
                icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
            },
            {
                name: "Machine learning",
                icon: <Server className="w-4 h-4 text-[#FF6C37]" />,
            },
        ],
        links: {
            github: "#",
            demo: "#",
        },
        image: linkaura,
        featured: true,
        category: 1,
        color: 'text-purple-400',
        cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />
    },
    {
        icon: '',
        title:
            "Lascensoriste",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [
            {
                name: "Wordpress",
                icon: <FaWordpress className="w-4 h-4 text-[#339933]" />,
            },
            {
                name: "CSS",
                icon: <FileCode className="w-4 h-4 text-[#3776AB]" />,
            },
            {
                name: "jQuery",
                icon: <BiLogoJavascript className="w-4 h-4 text-[#336791]" />,
            },
        ],
        links: {
            github: "#",
            demo: "https://lascensoriste.tn/",
        },
        image: lascensoriste,
        featured: true,
        category: 2,
        color: 'text-purple-400',
        cms: <FaWordpress className="w-4 h-4 text-[#E10098]" />
    },
    {
        icon: Code2,
        title:
            "Marship",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        category: 2,
        color: 'text-purple-400',
        cms:''
    },
    {
        icon: Code2,
        title:
            "Botanical",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        color: 'text-purple-400',
        category: 2,
        cms:''
    },
    {
        icon: Code2,
        title:
            "Atelier la fabrique",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        color: 'text-purple-400',
        category: 2,
        cms:''
    },

    {
        icon: Code2,
        title:
            "CRAFTECH",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        color: 'text-purple-400',
        category: 2,
        cms:''
    },

    {
        icon: Code2,
        title:
            "Simulateur",
        description:
            "Web tool to calculate the cost of a digital service based on client choices with AI features to analyse client extra services, Built with React JS and Laravel.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        color: 'text-purple-400',
        category: 1,
        cms:''
    },
    {
        icon: Code2,
        title:
            "Eyeverda",
        description:
            "This portfolio is a sleek and modern showcase of my skills and projects. It's built with React and Tailwind CSS, providing a clean and professional look that reflects my professional brand.",
        tags: [{"name":"React"}, {"name":"Node JS"}, {"name":"Mongo DB"}, {name:"Flask"} , {name: "NLP"}],
        links: {
            github: "https://github.com/seraprogrammer/CodeKori",
            demo: "https://codekori.js.org/",
        },
        image: codekori,
        featured: true,
        color: 'text-purple-400',
        category: 2,
        cms:''
    },

];
