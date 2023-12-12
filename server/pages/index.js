"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./portfolio.ts + 1 modules
var portfolio = __webpack_require__(805);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/SEO.tsx




function SEO() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: portfolio/* seoData.author */.hD.author
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: portfolio/* seoData.keywords.join */.hD.keywords.join(", ")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:url",
                content: portfolio/* seoData.url */.hD.url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:title",
                content: portfolio/* seoData.title */.hD.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:description",
                content: portfolio/* seoData.description */.hD.description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "twitter:image",
                content: portfolio/* seoData.image */.hD.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "Index"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "./favicon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "./favicon.png"
            })
        ]
    });
}
// SEO.prototype = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string,
//     description: PropTypes.string,
//     image: PropTypes.string,
//     url: PropTypes.string,
//     keywords: PropTypes.arrayOf(PropTypes.string),
//   }).isRequired,
// };
/* harmony default export */ const components_SEO = (SEO);

;// CONCATENATED MODULE: external "@emailjs/browser"
const browser_namespaceObject = require("@emailjs/browser");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser_namespaceObject);
;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(981);
;// CONCATENATED MODULE: ./components/Alerts.tsx



const Alert = ({ message , color , icon  })=>{
    return(// this should reappear every time the user clicks on the button
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.UncontrolledAlert, {
        color: color,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: icon
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "alert-inner--text",
                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: message
                })
            })
        ]
    }));
};
/* harmony default export */ const Alerts = (Alert);

;// CONCATENATED MODULE: ./components/ContactUs.tsx






const ContactUs = ()=>{
    const form = (0,external_react_.useRef)(null);
    const [alert, setAlert] = (0,external_react_.useState)(null);
    const successAlert = {
        color: "success",
        icon: "ni ni-like-2",
        message: " Your message has been sent successfully!"
    };
    const errorAlert = {
        color: "danger",
        icon: "ni ni-bell-55",
        message: " Oops! Something went wrong. Please try again later."
    };
    const sendEmail = (e)=>{
        e.preventDefault();
        console.log("submitting");
        console.log(form.current);
        const emailJsServiceId = "service_t3cx2ll";
        const emailJsTemplateId = "template_bvqagme";
        const emailJsPublicKey = "BMUCSVRkXF5zc8mKo";
        if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey && form.current) {
            browser_default().sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsPublicKey).then((result)=>{
                console.log(result.text);
                setAlert(successAlert);
            }, (error)=>{
                console.log(error.text);
                setAlert(errorAlert);
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "section section-lg section-shaped",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                ref: form,
                onSubmit: sendEmail,
                children: [
                    alert && /*#__PURE__*/ jsx_runtime_.jsx(Alerts, {
                        color: alert.color,
                        icon: alert.icon,
                        message: alert.message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Row, {
                            className: "justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Col, {
                                lg: "8",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Card, {
                                    className: "bg-gradient-secondary shadow",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
                                        className: "p-lg-5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "mb-1",
                                                children: "Want to work with me?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-0",
                                                children: "Reach out to me using the form below."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()("mt-5", {}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-user-run"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "Your name",
                                                            type: "text",
                                                            name: "user_name"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: external_classnames_default()({}),
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.InputGroup, {
                                                    className: "input-group-alternative",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupAddon, {
                                                            addonType: "prepend",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.InputGroupText, {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "ni ni-email-83"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                            placeholder: "Email address",
                                                            name: "user_email",
                                                            type: "email"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.FormGroup, {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Input, {
                                                    className: "form-control-alternative",
                                                    cols: "80",
                                                    name: "user_message",
                                                    placeholder: "Type a message...",
                                                    rows: "4",
                                                    type: "textarea"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Button, {
                                                    block: true,
                                                    className: "btn-round",
                                                    color: "default",
                                                    size: "lg",
                                                    type: "submit",
                                                    children: "Send Message"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_ContactUs = (ContactUs);

;// CONCATENATED MODULE: ./pages/index.tsx


const Navigation = dynamic_default()(()=>__webpack_require__.e(/* import() */ 581).then(__webpack_require__.bind(__webpack_require__, 581)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Navigation"
        ]
    }
});
const Greetings = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(471)]).then(__webpack_require__.bind(__webpack_require__, 471)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Greetings"
        ]
    }
});
const Skills = dynamic_default()(()=>__webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(__webpack_require__, 7)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Skills"
        ]
    }
});
const Proficiency = dynamic_default()(()=>__webpack_require__.e(/* import() */ 440).then(__webpack_require__.bind(__webpack_require__, 440)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Proficiency"
        ]
    }
});
const Education = dynamic_default()(()=>__webpack_require__.e(/* import() */ 380).then(__webpack_require__.bind(__webpack_require__, 380)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Education"
        ]
    }
});
const Experience = dynamic_default()(()=>__webpack_require__.e(/* import() */ 949).then(__webpack_require__.bind(__webpack_require__, 949)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Experience"
        ]
    }
});
const Projects = dynamic_default()(()=>__webpack_require__.e(/* import() */ 668).then(__webpack_require__.bind(__webpack_require__, 668)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Projects"
        ]
    }
});
const Feedbacks = dynamic_default()(()=>__webpack_require__.e(/* import() */ 85).then(__webpack_require__.bind(__webpack_require__, 85)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../containers/Feedbacks"
        ]
    }
});
const GithubProfileCard = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(819), __webpack_require__.e(77)]).then(__webpack_require__.bind(__webpack_require__, 77)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/GithubProfileCard"
        ]
    }
});



function Home({ githubProfileData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SEO, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Navigation, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Greetings, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Skills, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Proficiency, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Education, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Experience, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Feedbacks, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Projects, {}),
            portfolio/* showContactUs */.Nd ? /*#__PURE__*/ jsx_runtime_.jsx(components_ContactUs, {}) : null,
            /*#__PURE__*/ jsx_runtime_.jsx(GithubProfileCard, {
                ...githubProfileData
            })
        ]
    });
}
// Home.prototype = {
//   githubProfileData: PropTypes.object.isRequired,
// };
async function getStaticProps() {
    const githubProfileData = await fetch(`https://api.github.com/users/${portfolio/* openSource.githubUserName */.qL.githubUserName}`).then((res)=>res.json());
    return {
        props: {
            githubProfileData
        }
    };
}


/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Bv": () => (/* binding */ SkillBars),
  "E5": () => (/* binding */ educationInfo),
  "b8": () => (/* binding */ experience),
  "KK": () => (/* binding */ feedbacks),
  "c0": () => (/* binding */ greetings),
  "qL": () => (/* binding */ openSource),
  "q": () => (/* binding */ projects),
  "hD": () => (/* binding */ seoData),
  "Nd": () => (/* binding */ showContactUs),
  "LO": () => (/* binding */ skillsSection),
  "KT": () => (/* binding */ socialLinks)
});

// UNUSED EXPORTS: contact

;// CONCATENATED MODULE: external "react-easy-emoji"
const external_react_easy_emoji_namespaceObject = require("react-easy-emoji");
var external_react_easy_emoji_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_emoji_namespaceObject);
;// CONCATENATED MODULE: ./portfolio.ts

const greetings = {
    name: "Huy Nguyen",
    title: "Hi all, I'm Huy Nguyen",
    description: "I'm an spiring Computer Science major with a strong foundation in software development and problem-solving, actively seeking internships or part-time roles in Software Engineering, Software Development, Data Science, or Deep Learning.",
    resumeLink: "https://docs.google.com/document/d/1DdrnA7r4DXKh2iGTgdVjGlEv177PJ93D5P9FNTR_4dI/edit?usp=sharing"
};
const openSource = {
    githubUserName: "huyducnguyen1198"
};
const contact = {};
const socialLinks = {
    url: "tbd",
    linkedin: "https://www.linkedin.com/in/huyducnguyen1198/",
    github: "https://github.com/huyducnguyen1198"
};
const skillsSection = {
    title: "What I do",
    subTitle: "Data-Machine Learning Scientist, Fullstack and Software Developer",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/dataAnalys.json",
            skills: [
                external_react_easy_emoji_default()("⚡ Perform data analysis and visualization using Python, Pandas, Numpy, Matplotlib, and Seaborn"),
                external_react_easy_emoji_default()("⚡ Building Machine Learning models using Scikit-Learn, Keras, and Tensorflow"),
                external_react_easy_emoji_default()("⚡ Building responsive static websites using Next.js"),
                external_react_easy_emoji_default()("⚡ Building RESTful APIs in Django & Django REST Framework")
            ],
            softwareSkills: [
                {
                    skillName: "typescript",
                    iconifyTag: "logos:typescript-icon"
                },
                {
                    skillName: "Reactjs",
                    iconifyTag: "vscode-icons:file-type-reactjs"
                },
                {
                    skillName: "Nextjs",
                    iconifyTag: "vscode-icons:file-type-light-next"
                },
                {
                    skillName: "Python",
                    iconifyTag: "logos:python"
                },
                {
                    skillName: "Django",
                    iconifyTag: "vscode-icons:file-type-django"
                },
                {
                    skillName: "sklearn",
                    iconifyTag: "logos:scikit-learn"
                },
                {
                    skillName: "numpy",
                    iconifyTag: "logos:numpy"
                },
                {
                    skillName: "pandas",
                    iconifyTag: "logos:pandas"
                },
                {
                    skillName: "matplotlib",
                    iconifyTag: "logos:matplotlib"
                },
                {
                    skillName: "tensorflow",
                    iconifyTag: "logos:tensorflow"
                }
            ]
        }
    ]
};
const SkillBars = [
    {
        Stack: "Frontend/Design",
        progressPercentage: "60"
    },
    {
        Stack: "Backend",
        progressPercentage: "70"
    },
    {
        Stack: "Programming",
        progressPercentage: "70"
    }
];
const educationInfo = [
    {
        schoolName: "Weber State University",
        subHeader: "Bachelor of Science in Computer Science",
        duration: "January 2023 - January 2025",
        desc: "Focusing of Data Science and Machine Learning",
        grade: "Grade A - 3.6 GPA",
        descBullets: []
    }
];
const experience = [
    {
        role: "Sous Chef",
        company: "Vietnamese Restaurant",
        companyLogo: "",
        date: "June 2017 – 2018",
        desc: "I worked as a Sous Chef to prepare and cook Vietnamese food for customers. I also managed the kitchen and trained new employees."
    }
];
const projects = [
    {
        name: "Recomendation System",
        desc: "A recommendation system is a type of information filtering system using Pandas and sklearn(KNN, SVD, KMeans, etc.) to recommend movies to users based on their previous ratings. The app is built with Django as backend and React-Typescript as frontend.",
        github: "https://github.com/huyducnguyen1198/CS4580RecommendationEngine",
        link: ""
    },
    {
        name: "PostgreSQL Database with Prisma",
        desc: "A Database with RESTapi for a online game developed with PostgreSQL and Prisma.",
        github: "https://github.com/huyducnguyen1198/CS3750/tree/main/RestAPITanstack/restapi"
    },
    {
        name: "Stock Market Prediction",
        desc: "A stock analysis on NVIDIA, and predictions using XGBoost, LSTM, and SVR.",
        github: "https://github.com/huyducnguyen1198/CS4580_StockMarket_EDA_Prediction"
    }
];
const feedbacks = [];
// option to hide or show the ContactUs component
const showContactUs = true;
// See object prototype on /types/section.ts page
const seoData = {
    title: "Huy Nguyen | Software Developer",
    description: "A passionante Data-Machine Learning Scientist, Fullstack and Software Developer.",
    keywords: []
};


/***/ }),

/***/ 895:
/***/ ((module) => {

module.exports = require("headroom.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 189:
/***/ ((module) => {

module.exports = require("react-lottie");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 981:
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ }),

/***/ 566:
/***/ ((module) => {

module.exports = import("@iconify/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,152], () => (__webpack_exec__(987)));
module.exports = __webpack_exports__;

})();