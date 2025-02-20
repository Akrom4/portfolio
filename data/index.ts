export const navItems = [
  { name: "À Propos", link: "#about", icon: "FaUser" },
  { name: "Projets", link: "#projets", icon: "FaCode" },
  { name: "Expériences", link: "#experiences", icon: "FaBriefcase" },
  { name: "Formations", link: "#formations", icon: "FaGraduationCap" },
  { name: "Contact", link: "#contact", icon: "FaEnvelope" },
];


export const gridItems = [
  {
    id: 1,
    title: "Prêt à relever tous vos défis",
    description: "Curieux & Autonome",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Disponible et flexible pour toutes opportunités dans le Grand Ouest",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute top-0 left-1/4 h-auto opacity-30",
    titleClassName: "text-left text-lg font-semibold",
    img: "/mapFr.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack technologique",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "De la stratégie aux algorithmes",
    description: "Ancien entraîneur d'échecs, reconverti en développeur web.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "opacity-80",
    titleClassName: "justify-start",
    img: "/chessToCode.webp",
    spareImg: "",
  },
  {
    id: 5,
    title: "Actuellement en veille et en apprentissage continu",
    description: "Toujours à l'affût des dernières tendances",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Échangeons ensemble !",
    description: "Vous recherchez un développeur motivé ?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 1,
    title: "Plateforme de Formation Primavera P6",
    des: "Plateforme e-commerce dédiée à la formation sur Primavera P6, axée principalement sur la vente d'accès à des vidéos de formation.",
    img: "/prim.png", // image illustrative de la plateforme
    iconLists: ["/re.svg", "/symfony.svg", "/mysql.svg", "/tail.svg"],
    link: "https://primtest.akrom.xyz/", // lien vers le projet ou sa démo
    technicalDetails: [
      "Système de paiement sécurisé (Stripe)",
      "Gestion du panier d'achat",
      "Espace d'accès personnel aux vidéos de formation achetées par les utilisateurs",
      "Facturation et gestion des achats",
      "Panneau d’administration",
      "Formulaires de contact et de demande de formation",
      "Référencement SEO, optimisation des performances et de l'accessibilité",
    ]
  },
  {
    id: 2,
    title: "Application d'Entraînement aux Échecs",
    des: "Application web pour l'entraînement aux échecs, l'utilisateur peut suivre les leçons basées sur des parties commentées d'échecs.",
    img: "/chesstraining.png", // image illustrative de l'application
    iconLists: ["/symfony.svg", "/re.svg", "/mysql.svg"],
    link: "https://github.com/Akrom4/trainingApp", // lien vers le projet ou sa démo

    technicalDetails: [
      "Création du jeu d’échecs, logique et interface utilisateur, architecture MVVM",
      "Importation de parties commentées d’échecs",
      "Lecteur de partie d’échecs",
      "Panneau d’administration",
      "Authentification et gestion des comptes utilisateurs",
      "Collection de leçons disponibles",
      "Possibilité pour l'utilisateur d'ajouter des leçons à son espace personnel"
    ]
  },
  {
    id: 3,
    title: "Agrégateur d'offres d'emploi",
    des: "Projet personnel dédié à ma recherche d'emploi. Permet d'accéder rapidement à un vaste choix d'offres d'emploi, selon les critères d'intitulé et de localisation.",
    img: "/job.png",
    iconLists: ["/vite.svg", "/re.svg", "/tail.svg", "/php.svg", "/ts.svg"],
    link: "https://akrom.xyz/jobs",
    technicalDetails: [
      "Utilisation de l'API Jsearch pour récupérer les offres d'emploi",
      "Proxy PHP pour éviter les CORS et permettre l'accès à l'API",
      "Mise en place d'un système de recherche",
      "Mise en place d'un système de filtre",
    ]
  },
  {
    id: 4,
    title: "Adaptation du jeu Sokoban",
    des: "Projet personnel, le joueur doit ranger des caisses sur des cases cibles. Il peut se déplacer dans les quatre directions, et pousser (mais pas tirer) une seule caisse à la fois.",
    img: "/soko.png",
    iconLists: ["/js.svg", "/css.svg", "/python.svg"],
    link: "https://akrom.xyz/SokoPac/",

    technicalDetails: [
      "Découverte du JavaScript et du CSS",
      "Architecture MVVM",
      "Outils Python pour la création des niveaux",
      "Joystick ou clavier pour le déplacement du personnage",
    ]
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Concepteur de Systèmes d’Information",
    desc: "Niveau Bac +3",
    className: "md:col-span-2",

    thumbnail: "/exp-akrom4.svg",
  },
  {
    id: 2,
    title: "Développeur/Intégrateur de Solutions Internet et Intranet",
    desc: "Niveau Bac +2 spécialisé en développement, j'ai acquis des compétences en gestion de projets, apprentissage de langages et frameworks de programmation web, conception de bases de données et administration des systèmes d'information.",
    className: "md:col-span-2",
    thumbnail: "/exp-scholarfab.svg",
  },
  {
    id: 3,
    title: "Entraîneur d'Échecs - Échecs Plus",
    desc: "Cours particuliers et en groupe, animation en club et dans les écoles.",
    className: "md:col-span-2",
    thumbnail: "/exp-echecsplus.svg",
  },
  {
    id: 4,
    title: "Développeur Python (Stage) - Université de Caen",
    desc: "Transcription d'un algorithme de tri de suffixe de C++ vers Python, permettant une amélioration significative en temps linéaire pour le traitement des données.",
    className: "md:col-span-2",
    thumbnail: "/exp-unicaen.svg",

  },
];

export const experiences = [
  {
    id: 1,
    company: "Prominos",
    location: "Cherbourg En Cotentin",
    period: "2023 - 2024",
    title: "Développeur Web",
    tasks: [
      "Réalisation d’une plateforme web destinée à la formation sur le logiciel de gestion de projet Primavera P6",
    ],
    thumbnail: "",
  },
  {
    id: 2,
    company: "Echecs Plus",
    location: "Cherbourg En Cotentin",
    period: "2022 - 2023",
    title: "Développeur Web",
    tasks: [
      "Réalisation d'une application web pour l'entraînement aux échecs"
    ],
    thumbnail: "",
  },
  {
    id: 3,
    company: "Echecs Plus",
    location: "Cherbourg En Cotentin",
    period: "2019 - 2022",
    title: "Entraîneur d'échecs",
    tasks: [
      "Animations dans les écoles et en club",
      "Cours d'échecs particuliers ou en groupes",
    ],
    thumbnail: "",
  },
  {
    id: 4,
    company: "Restaurant Telles Qu'Elles",
    location: "Cherbourg En Cotentin",
    period: "2018 - 2019",
    title: "Commis de cuisine / Épicerie sociale",
    tasks: [],
    thumbnail: "",
  },
  {
    id: 5,
    company: "Pompes Funèbres Anger",
    location: "Cherbourg En Cotentin",
    period: "2015 - 2017",
    title: "Assistant funéraire",
    tasks: [],
    thumbnail: "",
  },
  {
    id: 6,
    company: "",
    location: "Cherbourg En Cotentin",
    period: "2010 - 2014",
    title: "Entraîneur d'échecs",
    tasks: [
      "Cours d'échecs particuliers",
    ],
    thumbnail: "",
  },
  {
    id: 7,
    company: "Université de Caen",
    location: "Caen",
    period: "2010",
    title: "Développeur Python",
    tasks: [
      "Transcription d'un algorithme de tri de suffixe en temps linéaire de C++ vers Python"
    ],
    thumbnail: "",
  },
];



export const education = [
  {
    "id": 1,
    "institution": "ScholarFab",
    "location": "Caen",
    "period": "2023 - 2024",
    "degree": "Concepteur de Systèmes d’Information",
    "description": "Niveau Bac +3",

    "thumbnail": ""
  },
  {
    "id": 2,
    "institution": "ScholarFab",
    "location": "Cherbourg",
    "period": "2022 - 2023",
    "degree": "Développeur Intégrateur de Solutions Internet et Intranet",
    "description": "Niveau Bac +2",
    "thumbnail": ""
  },
]


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/akrom4",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/fchaplain/",
  },
];

export const stackList = [
  { name: "ReactJS", icon: "/re.svg" },
  { name: "Symfony", icon: "/symfony.svg" },
  { name: "TypeScript", icon: "/ts.svg" },
  { name: "Next.js", icon: "/next.svg" },
  { name: "TailwindCSS", icon: "/tail.svg" },
  { name: "MySQL", icon: "/mysql.svg" },
  { name: "Git/GitHub", icon: "/git.svg" },
  { name: "Figma", icon: "/figma.svg" },
  { name: "WordPress", icon: "/wp.svg" },
  { name: "C#", icon: "/csharp.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "VS Code", icon: "/vscode.svg" },
];
