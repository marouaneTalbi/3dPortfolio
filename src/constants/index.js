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
  

  
  export const myProjects = [
    {
      title: 'Weddy',
      desc: "Application mobile Android de gestion de mariage. Elle permet aux utilisateurs de gérer leur budget, d'être en contact avec les organisateurs de mariage via un chat, et de rester à jour sur toute la gestion de leur événement. Les utilisateurs peuvent également chercher et contacter des DJ, des salles de mariage, des fleuristes, des caméramans directement depuis l'application. Le système inclut des notifications en temps réel via Firebase.",
      subdesc: 'Technologies utilisées : GoLang, Flutter, AWS EC2, Grafana, Docker, PostgreSQL, ainsi que des outils comme Postman et Jira.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM', // Remplace par le lien approprié
      texture: '/textures/projects/weddy.png',
      logo: '/textures/projects/weddy-logo.png', // Remplace par le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'GoLang',
          path: '/assets/technos/go.svg', // Remplace par le chemin du fichier GoLang
        },
        {
          id: 2,
          name: 'Flutter',
          path: '/assets/technos/flutter.svg', // Remplace par le chemin du fichier Flutter
        },
        {
          id: 3,
          name: 'AWS EC2',
          path: '/assets/technos/amazonec2.svg', // Remplace par le chemin du fichier AWS EC2
        },
        {
          id: 4,
          name: 'Grafana',
          path: '/assets/technos/grafana.svg', // Remplace par le chemin du fichier Grafana
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
          name: 'Postman',
          path: '/assets/technos/postman.svg', // Remplace par le chemin du fichier Postman
        },
        {
          id: 8,
          name: 'Jira',
          path: '/assets/technos/jira.svg', // Remplace par le chemin du fichier Jira
        },
      ],
    },
    {
      title: 'Water Ways',
      desc: "Application web permettant aux utilisateurs de louer des bateaux dans les environs. L'application offre une interface intuitive pour rechercher, comparer et réserver des bateaux. Les utilisateurs peuvent également consulter des informations détaillées sur les bateaux et contacter directement les propriétaires via la plateforme.",
      subdesc: 'Technologies utilisées : React, API Platform, AWS EC2, S3, RDS, PostgreSQL, Docker et TypeScript.',
      href: '', // Remplace par le lien approprié
      texture: '/textures/projects/water.png',
      logo: '/textures/projects/water-logo.svg', // Remplace par le logo approprié
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
          name: 'API Platform',
          path: '/assets/technos/symfony.svg', // Remplace par le chemin du fichier API Platform
        },
        {
          id: 3,
          name: 'AWS EC2',
          path: '/assets/technos/amazonec2.svg', // Remplace par le chemin du fichier AWS EC2
        },
        {
          id: 4,
          name: 'AWS S3',
          path: '/assets/technos/amazons3.svg', // Remplace par le chemin du fichier AWS S3
        },
        {
          id: 5,
          name: 'AWS RDS',
          path: '/assets/technos/amazonrds.svg', // Remplace par le chemin du fichier AWS RDS
        },
        {
          id: 6,
          name: 'PostgreSQL',
          path: '/assets/technos/postgresql.svg', // Remplace par le chemin du fichier PostgreSQL
        },
        {
          id: 7,
          name: 'Docker',
          path: '/assets/technos/docker.svg', // Remplace par le chemin du fichier Docker
        },
        {
          id: 8,
          name: 'TypeScript',
          path: '/assets/technos/typescript.svg', // Remplace par le chemin du fichier TypeScript
        },
      ],
    },
    {
      title: 'Memory',
      desc: "Application de jeu multijoueur en temps réel. Memory est un jeu où les joueurs doivent trouver le plus de cartes identiques distribuées aléatoirement. Le jeu prend en charge des parties en temps réel grâce à Socket.io. Deux joueurs peuvent s'affronter dans des parties classées, non classées, ou privées. Les parties privées permettent à un joueur de créer une session et d'envoyer une clé secrète pour inviter un autre joueur à le rejoindre.",
      subdesc: 'Technologies utilisées : Vue.js, Node.js, JavaScript, PostgreSQL, Docker, Jira, Postman, et AWS EC2.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM', // Remplace par le lien approprié
      texture: '/textures/projects/memory.png',
      logo: '/textures/projects/memory-logo.png', // Remplace par le logo approprié
      logoStyle: {
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png', // Remplace par l'image en spotlight appropriée
      tags: [
        {
          id: 1,
          name: 'Vue.js',
          path: '/assets/technos/vuedotjs.svg', // Remplace par le chemin du fichier Vue.js
        },
        {
          id: 2,
          name: 'Node.js',
          path: '/assets/technos/nodedotjs.svg', // Remplace par le chemin du fichier Node.js
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/technos/javascript.svg', // Remplace par le chemin du fichier JavaScript
        },
        {
          id: 4,
          name: 'PostgreSQL',
          path: '/assets/technos/postgresql.svg', // Remplace par le chemin du fichier PostgreSQL
        },
        {
          id: 5,
          name: 'Docker',
          path: '/assets/technos/docker.svg', // Remplace par le chemin du fichier Docker
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
          name: 'AWS EC2',
          path: '/assets/technos/amazonec2.svg', // Remplace par le chemin du fichier AWS EC2
        },
      ],
    },
    {
      title: 'ÉTOILE',
      desc: "Plateforme de recherche d'emploi dédiée aux experts IT, permettant aux recruteurs de trouver des développeurs, DevOps, experts en sécurité, etc. L'application utilise l'IA pour analyser les CV envoyés et déterminer leur correspondance avec les offres, tout en affichant un pourcentage de compatibilité. Une solution innovante pour simplifier et accélérer le processus de recrutement.",
      subdesc: 'Technologies utilisées : Vue.js, TypeScript, AWS Lambda, Amazon DynamoDB, GraphQL, et des outils comme Jira.',
      href: '', // Remplace par le lien approprié
      texture: '/textures/projects/yomeva.png',
      logo: '/textures/projects/yomeva.png', // Remplace par le logo approprié
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
      desc: "Application mobile permettant de réaliser des états des lieux pour appartements et maisons. L'application simplifie les tâches des agents en regroupant tout sur mobile, notamment la prise de photos, l'évaluation de l'état des lieux et la signature électronique du client.",
      subdesc: 'technoslogies utilisées : React, TypeScript, Symfony, Docker, PostgreSQL, avec des outils comme Jira, DBeaver, Postman et Insomnia.',
      href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM', // Remplace par le lien approprié
      texture: '/textures/projects/logo-foncia.png',
      logo: '/textures/projects/logo-foncia.png', // Remplace par le logo de Foncia ou le logo approprié
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
      desc: "Application permettant la réservation de chambres et de salles de réunion en quelques clics. Les utilisateurs peuvent recevoir des notifications pour les alerter de la date de début ou de fin de leur réservation, simplifiant ainsi la gestion des espaces.",
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
      desc: "Application mobile développée avec Ionic Angular, permettant aux utilisateurs d'accéder à divers services pour simplifier leur quotidien au sein de la tour. L'application offre des fonctionnalités comme la localisation des issues de secours, la recherche d'ascenseurs, le scan de carte pour accéder à la tour et la possibilité de signaler des problèmes.",
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
    },
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
      icon: '/textures/projects/logo-foncia.png',
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
  