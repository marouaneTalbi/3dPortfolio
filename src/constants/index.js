export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.svg',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.svg',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.svg',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.svg',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'ÉTOILE',
      desc: "Implémentation d'un système de notifications en temps réel pour améliorer l'interaction utilisateur. Intégration de l'IA via l'API ChatGPT.",
      subdesc: 'technoslogies utilisées : Vue.js, TypeScript, AWS Lambda, Amazon CloudWatch, DynamoDB, et ChatGPT pour des fonctionnalités avancées.',
      href: '', // Remplace par le lien approprié
      texture: '/textures/projects/yomeva.png',
      logo: '/textures/projects/yomeva.png', // Remplace par le logo de Yomeva ou le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'Vue.js',
          path: '/assets/technos/vuedotjs.svg', // Remplace par le chemin du fichier SVG Vue.js
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/technos/typescript.svg', // Remplace par le chemin du fichier TypeScript
        },
        {
          id: 3,
          name: 'AWS Lambda',
          path: '/assets/technos/awslambda.svg', // Remplace par le chemin du fichier AWS Lambda
        },
        {
          id: 4,
          name: 'Amazon DynamoDB',
          path: '/assets/technos/amazondynamodb.svg', // Remplace par le chemin du fichier DynamoDB
        },
        {
          id: 5,
          name: 'GraphQL',
          path: '/assets/technos/graphql.svg', // Remplace par le chemin du fichier GraphQL
        },
        {
          id: 6,
          name: 'Jira',
          path: '/assets/technos/jira.svg', // Remplace par le chemin du fichier Jira
        },
      ],
    },
    {
      title: 'MY CONSTAT',
      desc: "Développement d'une application mobile avec React Native. Utilisation de Docker pour la gestion des environnements.",
      subdesc: 'technoslogies utilisées : React, TypeScript, Symfony, Docker, PostgreSQL, avec des outils comme Jira, DBeaver, Postman et Insomnia.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM', // Remplace par le lien approprié
      texture: '/textures/projects/foncia.png',
      logo: '/textures/projects/foncia.png', // Remplace par le logo de Foncia ou le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'React Native',
          path: '/assets/technos/react.svg', // Remplace par le chemin du fichier React Native
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/technos/typescript.svg', // Remplace par le chemin du fichier TypeScript
        },
        {
          id: 3,
          name: 'Symfony',
          path: '/assets/technos/symfony.svg', // Remplace par le chemin du fichier Symfony
        },
        {
          id: 4,
          name: 'Docker',
          path: '/assets/technos/docker.svg', // Remplace par le chemin du fichier Docker
        },
        {
          id: 5,
          name: 'PostgreSQL',
          path: '/assets/technos/postgresql.svg', // Remplace par le chemin du fichier PostgreSQL
        },
        {
          id: 6,
          name: 'Jira',
          path: '/assets/technos/jira.svg', // Remplace par le chemin du fichier Jira
        },
        {
          id: 7,
          name: 'DBeaver',
          path: '/assets/technos/dbeaver.svg', // Remplace par le chemin du fichier DBeaver
        },
        {
          id: 8,
          name: 'Insomnia',
          path: '/assets/technos/insomnia.svg', // Remplace par le chemin du fichier Insomnia
        },
        {
          id: 9,
          name: 'GitLab',
          path: '/assets/technos/gitlab.svg', // Remplace par le chemin du fichier GitLab
        },
        {
          id: 10,
          name: 'Bitbucket',
          path: '/assets/technos/bitbucket.svg', // Remplace par le chemin du fichier Bitbucket
        },
      ],
    },
    {
      title: 'MANAGER ROOM / AMADEUS',
      desc: "Développement de composants React.js et gestion des API RESTful avec Symfony. Optimisation des performances front-end.",
      subdesc: 'technoslogies utilisées : React, TypeScript, Symfony, Docker, MySQL, et des outils comme Jira, Postman et GitLab.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM', // Remplace par le lien approprié
      texture: '/textures/projects/thales.png',
      logo: '/textures/projects/thales.png', // Remplace par le logo de Thales ou le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/technos/react.svg', // Remplace par le chemin du fichier React
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/technos/typescript.svg', // Remplace par le chemin du fichier TypeScript
        },
        {
          id: 3,
          name: 'Symfony',
          path: '/assets/technos/symfony.svg', // Remplace par le chemin du fichier Symfony
        },
        {
          id: 4,
          name: 'Docker',
          path: '/assets/technos/docker.svg', // Remplace par le chemin du fichier Docker
        },
        {
          id: 5,
          name: 'MySQL',
          path: '/assets/technos/mysql.svg', // Remplace par le chemin du fichier MySQL
        },
        {
          id: 6,
          name: 'Jira',
          path: '/assets/technos/jira.svg', // Remplace par le chemin du fichier Jira
        },
        {
          id: 7,
          name: 'Postman',
          path: '/assets/technos/postman.svg', // Remplace par le chemin du fichier Postman
        },
        {
          id: 8,
          name: 'GitLab',
          path: '/assets/technos/gitlab.svg', // Remplace par le chemin du fichier GitLab
        },
      ],
    },
    {
      title: 'ALTO TOUR',
      desc: "Développement avec Ionic Angular, amélioration continue de l'application selon les feedbacks clients.",
      subdesc: 'technoslogies utilisées : Angular, TypeScript, Symfony, Ionic, Docker, PostgreSQL, avec des outils comme Jira, Postman et GitLab.',
      href: '', // Remplace par le lien approprié
      texture: '/textures/projects/iviflo.png',
      logo: '/textures/projects/iviflo.png', // Remplace par le logo de Iviflo ou le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'Angular',
          path: '/assets/technos/angular.svg', // Remplace par le chemin du fichier Angular
        },
        {
          id: 2,
          name: 'TypeScript',
          path: '/assets/technos/typescript.svg', // Remplace par le chemin du fichier TypeScript
        },
        {
          id: 3,
          name: 'Symfony',
          path: '/assets/technos/symfony.svg', // Remplace par le chemin du fichier Symfony
        },
        {
          id: 4,
          name: 'Ionic',
          path: '/assets/technos/ionic.svg', // Remplace par le chemin du fichier Ionic
        },
        {
          id: 5,
          name: 'Docker',
          path: '/assets/technos/docker.svg', // Remplace par le chemin du fichier Docker
        },
        {
          id: 6,
          name: 'PostgreSQL',
          path: '/assets/technos/postgresql.svg', // Remplace par le chemin du fichier PostgreSQL
        },
        {
          id: 7,
          name: 'Jira',
          path: '/assets/technos/jira.svg', // Remplace par le chemin du fichier Jira
        },
        {
          id: 8,
          name: 'Postman',
          path: '/assets/technos/postman.svg', // Remplace par le chemin du fichier Postman
        },
        {
          id: 9,
          name: 'GitLab',
          path: '/assets/technos/gitlab.svg', // Remplace par le chemin du fichier GitLab
        },
      ],
    }
    
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.5 : isMobile ? 0.6 :0.5,
      deskPosition: isMobile ? [1, -0, 0] : [1, -1, 1],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'ÉTOILE',
      pos: 'Développeur Full Stack',
      duration: 'Septembre 2024 - Mars 2024',
      title: "Implémentation d'un système de notifications en temps réel pour améliorer l'interaction utilisateur. Intégration de l'IA via l'API ChatGPT.",
      icon: '/textures/projects/yomeva.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'MY CONSTAT',
      pos: 'Développeur Full Stack',
      duration: 'Septembre 2022 - Février 2024',
      title: "Développement d'une application mobile avec React Native. Utilisation de Docker pour la gestion des environnements.",
      icon: '/textures/projects/foncia.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'MANAGER ROOM / AMADEUS',
      pos: 'Développeur Full Stack',
      duration: 'Mars 2022 - Septembre 2022',
      title: "Développement de composants React.js et gestion des API RESTful avec Symfony. Optimisation des performances front-end.",
      icon: '/textures/projects/thales.png',
      animation: 'salute',
    },
    {
      id: 4,
      name: 'ALTO TOUR',
      pos: 'Développeur Full Stack',
      duration: 'Septembre 2021 - Mars 2022',
      title: "Développement avec Ionic Angular, amélioration continue de l'application selon les feedbacks clients.",
      icon: '/textures/projects/iviflo.png',
      animation: 'salute',
    },
  ];
  