import React from "react"
import { Home, Contacts, Face, ShoppingCart } from "@material-ui/icons";

/**
 * Describes the way users can communicate with us
 */
export enum CommunicationType {
  tel = "tel:",
  email = "mailto:",
  url = ""
}

/**
 * Describes data for one contactperson
 */
export interface IContactInfo {
  name: string;
  function: string;
  description: string;
  imageUrl?: string;
  isImportant: boolean;
  communication: {
    label: string;
    type: CommunicationType;
    /**
     * visual adres eg. @facebook
     */
    adres: string;
    /**
     * actual adres eg. https://www.facebook.com/
     */
    url: string;
  }[];
}

/**
 * Describes data for one stock item
 */
export interface ICollectionItem {
  label: string;
  url: string;
  description: string;
  stared: boolean;
  stars: number;
  highlighted: boolean;
  price: number;
}

/**
 * Describes data for one webpage
 */
export interface IWebpage {
  label: string;
  url: string;
  iconName: React.ReactElement<any>;
  showMinimized: boolean;
}

export interface IVendorMoment {
  label: string;
  date: Date[];
  description: string;
  image?: string;
}

/**
 * Describes the general data format
 */
export interface IAppState {
  collection: ICollectionItem[];
  paginas: IWebpage[];
  contact: IContactInfo[];
  vendorMoments: IVendorMoment[];
}

export const initialState: IAppState = {
  collection: [
    {
      label: "T-shirt rood",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtRood.png?raw=true",
      description:
        "Dit is een rood t-shirt gemaakt met verfijnde stof en een exclusieve witte mier op de borst.",
      stars: 0,
      stared: false,
      highlighted: false,
      price: 20,
    },
    {
      label: "T-shirt wit mier zwart (groot)",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_donker.png?raw=true",
      description:
        "Wit t-shirt met een exclusieve zwarte mier en onze bedrijfsnaam in het Arabisch.",
      stars: 0,
      stared: false,
      highlighted: false,
      price: 0,
    },
    {
      label: "T-shirt wit mier rood (groot)",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish.png?raw=true",
      description:
        "Rood t-shirt met een exclusieve rode mier en onze bedrijfsnaam in het Arabisch.",
      stars: 0,
      stared: false,
      highlighted: false,
      price: 0,
    },
    {
      label: "T-shirt wit mier rood (klein)",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_klein.png?raw=true",
      description: "Sober wit t-shirt voor sportevenmenten.",
      stars: 0,
      stared: false,
      highlighted: true,
      price: 0,
    },
    {
      label: "T-shirt wit lopende mieren",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_v6.png?raw=true",
      description: "Deluxe wit t-shirt met lopende mieren op borst en rug.",
      stars: 0,
      stared: false,
      highlighted: true,
      price: 0,
    }
  ],
  paginas: [
    {
      label: "Home",
      url: "/",
      iconName: <Home />,
      showMinimized: true,
    },
    {
      label: "Onze producten",
      url: "/store",
      iconName: <ShoppingCart />,
      showMinimized: true,
    },
    {
      label: "Over ons",
      url: "/over-ons",
      iconName: <Face />,
      showMinimized: false,
    },
    {
      label: "Contact",
      url: "/contact",
      iconName: <Contacts />,
      showMinimized: false,
    },
  ],
  contact: [
    {
      name: "Ruslan Vernelen",
      function: "CEO",
      description: "Ik zorg ervoor dat iedereen het naar zijn zin heeft in dit bedrijf en dat alles goed verloopt.",
      communication: [],
      isImportant: true,
    },
    {
      name: "Ayshin Kyoseibish",
      function: "Commercieel directeur",
      description: "Mijn taak is dat alle het commerciële in orde is.",
      isImportant: false,
      communication: [],
    },
    {
      name: "Aliou Diallo",
      function: "Financieel directeur",
      description: "Ik los alle problemen op in verband met geld.",
      isImportant: false,
      communication: [],
    },
    {
      name: "Andreas Declerck",
      function: "Technisch directeur",
      description: "Ik ben de webmaster. Als er problemen zijn met de website, los ik die op.",
      isImportant: false,
      communication: [],
    }
  ],
  vendorMoments: [
    {
      label: "Docks Bruxsel",
      description: "",
      date: [new Date(2019, 0, 26)] // jaar, maand-1, dag
    },
    {
      label: "Camping Flamingo",
      description: "Nog niet bevestigd",
      date: [
        new Date(2019, 1, 10),
        new Date(2019, 4, 12),
      ] // jaar, maand-1, dag
    }
  ]
};
