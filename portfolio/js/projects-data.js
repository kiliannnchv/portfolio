// Données des projets — modifie / ajoute / supprime des entrées ici.
// Chaque projet apparaît automatiquement dans le carrousel de l'accueil
// et sur sa propre page (project.html?slug=...).
const PROJECTS = [
  {
    slug: "memory-archives-2079",
    title: "Memory Archives",
    tagline: "Site éditorial immersif imaginant un nouveau chapitre de la saga Blade Runner.",
    year: "2026",
    category: "Design éditorial",
    tags: ["UI/UX", "Édition", "Figma"],
    color: "blue",
    link: "https://tomroussely.github.io/Projet-MEMORY-ARCHIVE/",
    description:
      "Projet de groupe (Bachelor Web, 2e année) : concevoir un site éditorial interactif autour d'un univers narratif fictif. Avec mon binôme, nous avons imaginé un nouvel opus de la saga Blade Runner et écrit le scénario reliant le dernier film sorti à ce nouveau chapitre fictif. J'ai travaillé sur la maquette Figma (UI), le contenu éditorial, ainsi que la direction artistique et l'UX en binôme.",
    details:
      "Trimestre 1 du Bachelor Web, 2e année — travail en binôme, encadré par plusieurs intervenants (contenu éditorial, direction artistique, UX, UI, code, motion design). Sur ce projet, j'ai réalisé la maquette Figma (desktop & mobile), le contenu éditorial, et j'ai travaillé la direction artistique et l'UX avec mon binôme.",
    cover: "assets/projects/memory-archives-2079/site-accessing.png",
    gallery: [
      "assets/projects/memory-archives-2079/site-accessing.png",
      "assets/projects/memory-archives-2079/site-fragments.png",
      "assets/projects/memory-archives-2079/site-alert.png",
    ],
  },
  {
    slug: "de-lautre-cote-du-miroir",
    title: "De l'autre côté du miroir",
    tagline: "Scrollytelling mobile first adaptant le texte de Lewis Carroll, entre récit du miroir et histoire réelle d'Alice Liddell.",
    year: "2026",
    category: "Scrollytelling",
    tags: ["Scrollytelling", "UI/UX", "Figma"],
    color: "yellow",
    link: "https://lewiscarroll.netlify.app/",
    description:
      "Projet de groupe (Bachelor Web, 2e année, trimestre 2) : transformer un article ou une œuvre en expérience de lecture interactive au défilement (scrollytelling), pensée mobile first. Avec mon groupe, nous avons choisi \"De l'autre côté du miroir\" de Lewis Carroll, avec une double lecture : le conte du miroir, et en double-tapant l'écran, l'histoire réelle d'Alice Liddell. La direction artistique et l'identité visuelle ont été pensées à trois ; je me suis principalement occupé du contenu éditorial, de la maquette Figma et du dossier de recherche.",
    details:
      "Trimestre 2 du Bachelor Web, 2e année — travail de groupe (3), encadré par plusieurs intervenants (design éditorial, sémiologie, UX, prototypage). Sur ce projet, j'ai rédigé l'essentiel du contenu éditorial, réalisé la maquette Figma et le dossier de recherche du projet.",
    cover: "assets/projects/de-lautre-cote-du-miroir/site-titre.png",
    gallery: [
      "assets/projects/de-lautre-cote-du-miroir/site-titre.png",
      "assets/projects/de-lautre-cote-du-miroir/site-chapitre1-livre.png",
      "assets/projects/de-lautre-cote-du-miroir/site-chapitre1-liddell.png",
    ],
  },
  {
    slug: "bookster-letranger",
    title: "Bookster — L'Étranger",
    tagline: "Affiche éditoriale autour de L'Étranger d'Albert Camus, où le titre se dissout dans le texte intégral du roman.",
    year: "2026",
    category: "Design Graphique",
    tags: ["Affiche", "Typographie", "Figma"],
    color: "ink",
    link: "",
    description:
      "Projet individuel : concevoir un \"bookster\" (affiche éditoriale) autour d'un roman. J'ai choisi L'Étranger d'Albert Camus et construit le visuel autour d'une déconstruction du titre — les lettres de \"L'ÉTRANGER\" sont fragmentées et dissoutes dans la masse du texte intégral du roman, sur une grille stricte de deux colonnes et cinq lignes. Le noir et blanc strict, sans autre couleur, traduit la froideur, le détachement émotionnel et l'absurdité du récit : il faut faire un effort pour reconstituer le titre, comme le lecteur doit accepter l'absence de repères classiques dans le roman.",
    details:
      "Projet individuel, réalisé en 2026. Composition entièrement pensée sur Figma : typographie (Inter, modifiée pour le titrage), grille et déconstruction typographique du titre en négatif dans le texte intégral du roman.",
    cover: "assets/projects/bookster-letranger/bookster.jpg",
    coverFit: "contain",
    gallery: ["assets/projects/bookster-letranger/bookster.jpg"],
  },
];
