import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Huy Nguyen',
  title: "Hi all, I'm Huy Nguyen",
  description:
    "I'm an spiring Computer Science major with a strong foundation in software development and problem-solving, actively seeking internships or part-time roles in Software Engineering, Software Development, Data Science, or Deep Learning.",
  resumeLink:
    'https://docs.google.com/document/d/1DdrnA7r4DXKh2iGTgdVjGlEv177PJ93D5P9FNTR_4dI/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'huyducnguyen1198',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'tbd',
  linkedin: 'https://www.linkedin.com/in/huyducnguyen1198/',
  github: 'https://github.com/huyducnguyen1198',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Data-Machine Learning Scientist, Fullstack and Software Developer',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/dataAnalys.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Perform data analysis and visualization using Python, Pandas, Numpy, Matplotlib, and Seaborn'
        ),
        emoji(
          '⚡ Building Machine Learning models using Scikit-Learn, Keras, and Tensorflow'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'typescript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'sklearn',
          iconifyTag: 'logos:scikit-learn',
        },
        {
          skillName: 'numpy',
          iconifyTag: 'logos:numpy',
        },
        {
          skillName: 'pandas',
          iconifyTag: 'logos:pandas',
        },
        {
          skillName: 'matplotlib',
          iconifyTag: 'logos:matplotlib',
        },
        {
          skillName: 'tensorflow',
          iconifyTag: 'logos:tensorflow',
        }
      ],
    }

    /**
     * { add more as i learn more in the future
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          iconifyTag: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          iconifyTag: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          iconifyTag: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          iconifyTag: 'logos:ganache-icon',
        },
      ],
    },*/
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '60', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Weber State University',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'January 2023 - January 2025',
    desc: 'Focusing of Data Science and Machine Learning',
    grade: 'Grade A - 3.6 GPA',
    descBullets: [
      
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Sous Chef',
    company: 'Vietnamese Restaurant',
    companyLogo: '',
    date: 'June 2017 – 2018',
    desc: 'I worked as a Sous Chef to prepare and cook Vietnamese food for customers. I also managed the kitchen and trained new employees.',
  }
  /**
  {
    role: 'Frontend Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
  },
  {
    role: 'API Engineer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Jan 2022 – Mar 2022',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Bleed-AI',
    companyLogo: '/img/icons/common/bleedAI.jpg',
    date: 'Sept 2021 - Oct 2021',
    desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Sept 2021',
    desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  },  */

];
export const projects: ProjectType[] = [
  {
    name: 'Recomendation System',
    desc: 'A recommendation system is a type of information filtering system using Pandas and sklearn(KNN, SVD, KMeans, etc.) to recommend movies to users based on their previous ratings. The app is built with Django as backend and React-Typescript as frontend.',
    github: 'https://github.com/huyducnguyen1198/CS4580RecommendationEngine',
    link: ''
  },
  {
    name: 'PostgreSQL Database with Prisma',
    desc: 'A Database with RESTapi for a online game developed with PostgreSQL and Prisma.',
    github: 'https://github.com/huyducnguyen1198/CS3750/tree/main/RestAPITanstack/restapi',
  },

  {
    name: 'Stock Market Prediction',
    desc: 'A stock analysis on NVIDIA, and predictions using XGBoost, LSTM, and SVR.',
    github: 'https://github.com/huyducnguyen1198/CS4580_StockMarket_EDA_Prediction',
  },
];

export const feedbacks: FeedbackType[] = [/*
{  
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },*/
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Huy Nguyen | Software Developer',
  description:
    'A passionante Data-Machine Learning Scientist, Fullstack and Software Developer.',
  keywords:[],
  /*image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
    author: 'Hanzla Tauqeer',

  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],*/
};
