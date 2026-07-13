import { Service, ValueProposition, Testimonial } from './types';
import photoClim from './assets/photos/climatisation-installation-exterieure.jpg';
import photoElec from './assets/photos/electricite-tableau.jpg';
import photoPlomb from './assets/photos/plomberie-collecteur-compteurs.jpg';

export const COMPANY_INFO = {
  name: "ETS Kofroid",
  tagline: "Expertise en Froid, Climatisation, Électricité, Plomberie & Travaux de Bâtiment",
  description: "ETS Kofroid est votre partenaire de confiance à Abidjan pour tous vos besoins en génie climatique, installations électriques, plomberie sanitaire et rénovation de bâtiment. Nous garantissons des interventions rapides, soignées et adaptées de façon professionnelle et durable.",
  location: "Zoé Bruno, Abidjan, Côte d'Ivoire",
  phone: "0505718945",
  phoneFormatted: "+225 05 05 71 89 45",
  email: "ets.kofroid@gmail.com",
  whatsappUrl: "https://wa.me/2250505718945?text=Bonjour%20ETS%20Kofroid%2C%20je%20souhaiterais%20obtenir%20des%20informations%20ou%20un%20devis%20pour%20un%20projet.",
  workingHours: "Lun - Sam: 7h30 - 18h00"
};

export const SERVICES: Service[] = [
  {
    id: "froid-clim",
    title: "Froid & Climatisation",
    shortDescription: "Installation, maintenance préventive et dépannage rapide de tous systèmes de climatisation et de réfrigération.",
    fullDescription: "Nous assurons la pose et le dépannage professionnels de climatiseurs de type Split (mural), d'armoires de climatisation verticales de forte capacité, ainsi que les centrales de traitement d'air et chambres froides à Abidjan.",
    // Vraie photo ETS Kofroid : technicien installant une unité extérieure Daikin
    image: photoClim,
    iconName: "Wind",
    features: [
      "Pose de climatiseurs Split et armoires",
      "Maintenance de chambres froides professionnelles",
      "Diagnostic de pannes et recharge de gaz écologique",
      "Contrats de maintenance préventive pour entreprises",
      "Nettoyage haute pression des filtres et évaporateurs"
    ]
  },
  {
    id: "electricite",
    title: "Électricité Générale",
    shortDescription: "Installations électriques complètes, mise aux normes de sécurité, courants forts et faibles.",
    fullDescription: "De l'électrification complète d'immeubles résidentiels ou commerciaux au dépannage d'urgence sur tableau électrique basse tension, nos électriciens qualifiés interviennent dans le respect total des normes de sécurité en vigueur.",
    // Vraie photo ETS Kofroid : tableau électrique Schneider avec régulateur de tension
    image: photoElec,
    iconName: "Zap",
    features: [
      "Câblage électrique résidentiel, tertiaire et industriel",
      "Pose et raccordement de tableaux électriques modernes",
      "Mise aux normes de sécurité électrique (NFC 15-100)",
      "Installation d'inverseurs automatiques pour groupes électrogènes",
      "Éclairage intérieur et extérieur basse consommation (LED)"
    ]
  },
  {
    id: "plomberie",
    title: "Plomberie & Sanitaire",
    shortDescription: "Conception de réseaux d'eau, débouchage, réparation de fuites et branchements d'équipements.",
    fullDescription: "Bénéficiez d'une alimentation en eau fluide et d'évacuations d'eau sécurisées. Nous réalisons l'intégralité des raccordements sanitaires, le dépannage urgent de fuites, ainsi que l'installation de ballons d'eau et surpresseurs.",
    // Vraie photo ETS Kofroid : collecteur de compteurs d'eau sur tuyauterie PVC
    image: photoPlomb,
    iconName: "Droplet",
    features: [
      "Création de réseaux complets en PVC, cuivre et multicouche",
      "Pose de sanitaires (cabines de douche, WC, éviers, lavabos)",
      "Dépannage, recherche de fuite d'eau et débouchage canalisations",
      "Installation et entretien de surpresseurs et pompes",
      "Pose de chauffe-eau électriques et solaires"
    ]
  },
  {
    id: "batiment",
    title: "Travaux de Bâtiment",
    shortDescription: "Chantiers de construction, maçonnerie, carrelage, peinture et rénovation second œuvre.",
    fullDescription: "De la fondation aux finitions les plus fines, nous coordonnons l'ensemble des corps d'état de votre projet immobilier. Profitez d'un seul interlocuteur de confiance pour le gros œuvre et les finitions haut de gamme de vos résidences ou locaux commerciaux.",
    // African/black architect or construction engineer on site
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80",
    iconName: "Building2",
    features: [
      "Travaux de maçonnerie générale et extension",
      "Pose de carrelage grand format et revêtements de sol",
      "Peinture intérieure et extérieure résistante aux intempéries",
      "Aménagements de cloisons en staff, plaques de plâtre et faux-plafonds",
      "Suivi de chantier rigoureux de A à Z"
    ]
  }
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    id: "reactivity",
    title: "Intervention Express",
    description: "Opérationnels à Abidjan et alentours, nous mettons un point d'honneur à dépanner vos urgences rapidement pour minimiser vos désagréments.",
    iconName: "Clock"
  },
  {
    id: "expertise",
    title: "Artisans Diplômés",
    description: "Chaque membre de l'équipe ETS Kofroid est un technicien hautement qualifié, formé aux dernières technologies climatiques et électriques.",
    iconName: "Award"
  },
  {
    id: "transparency",
    title: "Devis Clairs & Gratuits",
    description: "Aucun frais caché. Nous vous fournissons un devis détaillé et compréhensible avant de commencer les travaux. La transparence est notre clé.",
    iconName: "FileText"
  },
  {
    id: "guarantee",
    title: "Travail Garanti & Suivi",
    description: "Toutes nos constructions et installations font l'objet d'un suivi après-vente rigoureux et bénéficient d'une garantie de parfait achèvement.",
    iconName: "ShieldCheck"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "M. Kouadio Jean-Marc",
    role: "Propriétaire de Résidence",
    content: "ETS Kofroid a coordonné l'intégralité de la plomberie et de la climatisation de ma nouvelle villa à Cocody. Un travail méticuleux, propre et des techniciens toujours à l'écoute. Je recommande vivement pour le professionnalisme !",
    stars: 5,
    location: "Cocody, Abidjan"
  },
  {
    id: "t2",
    name: "Mme Barry Fatoumata",
    role: "Gérante de Supermarché",
    content: "Notre chambre froide de stockage est tombée en panne un samedi après-midi. Les techniciens de Kofroid sont intervenus en moins de deux heures à Zoé Bruno. Récupération du gaz, réparation de la fuite, tout a été fait le jour même. Merci !",
    stars: 5,
    location: "Marcory, Abidjan"
  },
  {
    id: "t3",
    name: "Ing. Koffi Amenan",
    role: "Directeur de Chantier",
    content: "Nous sous-traitons régulièrement les travaux d'électricité et de finition de plomberie à la société ETS Kofroid pour nos projets résidentiels. Ils respectent les délais et s'adaptent parfaitement aux exigences architecturales.",
    stars: 5,
    location: "Plateau, Abidjan"
  }
];

