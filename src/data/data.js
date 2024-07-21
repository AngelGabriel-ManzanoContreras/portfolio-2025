import { icons, makhaiImages, littlesitesImages, externalImages } from './images.js'
//import { pdfs } from './pdfs.js'

export const profiles = [
  {
    img: icons.linkedin,
    name: 'LinkedIn - Angel Gabriel Manzano Contreras',
    link: 'https://www.linkedin.com/in/angel-gabriel-manzano-contreras/'
  },
  {
    img: icons.gmail,
    name: 'Gmail - Angel Gabriel Manzano Contreras',
    link: 'mailto:amanzanocontreras@gmail.com'
  },
  {
    img: icons.github,
    name: 'GitHub - Angel Gabriel Manzano Contreras',
    link: 'https://github.com/AngelGabriel-ManzanoContreras'
  },
  {
    img: icons.cv_icon,
    name: 'CV - Angel Gabriel Manzano Contreras',
    //link: pdfs.angelCV
  }
]

export const skills = [
  {
    name: 'Adaptability',
    img: icons.adaptability,
    category: 'professional'
  },
  {
    name: 'Communication',
    img: icons.communication,
    category: 'professional'
  },
  {
    name: 'Creativity',
    img: icons.creativity,
    category: 'professional'
  },
  {
    name: 'Critical Thinking',
    img: icons.criticalThinking,
    category: 'professional'
  },
  {
    name: 'CSS3',
    img: icons.css,
    category: 'technical'
  },
  {
    name: 'Empathy',
    img: icons.empathy,
    category: 'professional'
  },
  {
    name: 'Figma',
    img: icons.figma,
    category: 'technical'
  },
  {
    name: 'Git',
    img: icons.git,
    category: 'technical'
  },
  {
    name: 'Github',
    img: icons.github,
    category: 'technical'
  },
  {
    name: 'Golang',
    img: icons.golang,
    category: 'technical'
  },
  {
    name: 'HTML5',
    img: icons.html,
    category: 'technical'
  },
  {
    name: 'Java',
    img: icons.java,
    category: 'technical'
  },
  {
    name: 'JavaScript',
    img: icons.javascript,
    category: 'technical'
  },
  {
    name: 'MySQL',
    img: icons.mysql,
    category: 'technical'
  },
  {
    name: 'Pragmatism',
    img: icons.pragmatism,
    category: 'professional'
  },
  {
    name: 'Problem Solving',
    img: icons.problemSolving,
    category: 'professional'
  },
  {
    name: 'Python',
    img: icons.python,
    category: 'technical'
  },
  {
    name: 'React',
    img: icons.react_svg,
    category: 'technical'
  },
  {
    name: 'Teamwork',
    img: icons.teamwork,
    category: 'professional'
  },
  {
    name: 'Time Management',
    img: icons.timeManagement,
    category: 'professional'
  },
  {
    name: 'TypeScript',
    img: icons.typescript,
    category: 'technical'
  }
];

export const education = [
  {
    cert: 'Higher university technician in computer systems',
    org: 'PTECH - IBM - JA Worldwide',
    current: true,
    image: externalImages.ptech,
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Professional Technologist in Computer Systems',
    org: 'Escuela Politécnica de Guadalajara - UdeG',
    image: externalImages.udeg,
    skills: [ 'Programming', 'Web Development', 'Networking', 'Project Management' ]
  },
  {
    cert: 'Google Professional Certificate Project Management',
    org: 'Google - Coursera',
    current: true,
    image: externalImages.google_pm,
    skills: [ 'Project Management', 'Project Planning', 'Project Scheduling', 'Agile Project Management' ]
  },
  {
    cert: 'Google Professional Certificate User Exeprience (UX) Design',
    org: 'Google - Coursera',
    badge: 'https://coursera.org/verify/professional-cert/M7GX5AD5SDXU',
    image: externalImages.google_ux,
    skills: [ 'User Experience', 'User Research', 'User-centered Design', 'User Interface Design' ]
  },
  {
    cert: 'Git Essentials',
    org: `O'Reilly Media`,
    badge: 'https://www.credly.com/badges/664a764c-55b8-4bbf-88e8-11c52838ad3b',
    image: externalImages.oreilly_git,
    skills: [ 'Git', 'Github', 'Version Control', 'Software Collaboration' ]
  },
  {
    cert: 'Artificial Intelligence Fundamentals',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/df7ecc00-e6cf-4e07-8f03-b2ab446d8309/public_url',
    image: externalImages.sks_ia,
    skills: [ 'Artificial Intelligense', 'AI Applications', 'AI Capabilities', 'AI Ethics' ]
  },
  {
    cert: 'Enterprise Design Thinking Practitioner',
    org: 'IBM',
    badge: 'https://www.credly.com/badges/779b1a70-904a-408f-8575-d10ccb154158/public_url',
    image: externalImages.designThinkingPractitioner,
    skills: [ 'Experience Design', 'User-centered Design', 'User Experience', 'User Research' ]
  },
  {
    cert: 'CCNA: Introduction to Networks',
    org: 'Cisco',
    badge: 'https://www.credly.com/badges/8dcf4dc8-41e7-4b1f-896c-9926505509fe/public_url',
    image: externalImages.ccna_itn,
    skills: [ 'Network Fundamentals', 'Ethernet', 'IPv4 and IPv6 Addressing', 'IP Connectivity' ]
  },
  {
    cert: 'IBM Agile Explorer',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/2c92f743-0d57-459a-95e3-c8e7fc44d974',
    image: externalImages.sks_agile,
    skills: [ 'Agile Operations', 'Scrum methodology', 'Sprints', 'Iterations' ]
  },
  {
    cert: 'Working in a Digital World',
    org: 'IBM - SkillsBuild',
    badge: 'https://www.credly.com/badges/fef651be-a916-46ad-a071-15e04a5a139b/public_url',
    image: externalImages.sks_workingInADigitalWorld,
    skills: [ 'Creative and Critical Thinking', 'Interpersonal Communication', 'Problem Solving', 'Team Collaboration' ]
  }
]

export const projectsData = {
  'sites' : {
    head : {
      title: 'Sites',
      slogan: 'Cafesito con pan',
      img: littlesitesImages[0]
    },
    problem : 'My team and I were looking to address the problem of SMEs (PyMEs) not having a website. We wanted a platform where they could create their own website with a few clicks and a little help from us. We wanted to make it easy for them to have a website and be able to manage it themselves.',
    task: 'As UI Designer, I had to build an intuitive and pleasant Interface where the users were able to input their information and see their Landing page. Later on, I had to correct some CSS styles to accomplish what was planned and help with the website\'s backend development. Currently, only the Landing page is available, but the rest of the website is under development.',
    tools: [
      {
        name: 'Figma',
        img: icons.figma
      },
      {
        name: 'CSS3',
        img: icons.css
      },
      {
        name: 'Next',
        img: icons.next
      },
      {
        name: 'Django',
        img: icons.django
      },
      {
        name: 'PHP',
        img: icons.php
      },
      {
        name: 'MySQL',
        img: icons.mysql
      },
      {
        name: 'Git',
        img: icons.git
      },
      {
        name: 'Github',
        img: icons.github
      }
    ],
    results: {
      proofs: littlesitesImages,
      href: 'https://github.com/LittleSites/UI-CLIENT-NextJS'
    }
  },
  'makhai' : {
    head: {
      title: 'Makhai',
      slogan: 'Schoolar project',
      img: makhaiImages[0]
    },
    problem: 'My team and I were asked to build a website for a Hotel where they could show their rooms, events, and activities. Also, make Room reservations and Logistic administration possible.',
    task: 'As my team\'s Product Owner, I was responsible for structuring the Team\'s backlog, task relegation, and handing deliverables weekly. In addition, I was responsible for debugging and refactoring front-end code, creating the website\'s back-end, and deploying the website.',
    tools: [
      {
        name: 'HTML5',
        img: icons.html
      },
      {
        name: 'CSS3',
        img: icons.css
      },
      {
        name: 'Javascript',
        img: icons.javascript
      },
      {
        name: 'PHP',
        img: icons.php
      },
      {
        name: 'MySQL',
        img: icons.mysql
      }
    ],
    results: {
      proofs: makhaiImages,
      href: 'https://hotel-makhai-nayarit.000webhostapp.com/'
    }
  }
}