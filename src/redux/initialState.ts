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
}

/**
 * Describes data for one webpage
 */
export interface IWebpage {
  label: string;
  url: string;
  iconName?: string;
}

export interface IVendorMoment {
  label: string;
  date: Date[];
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
    },
    {
      label: "T-shirt wit mier rood (klein)",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_klein.png?raw=true",
      description: "Sober wit t-shirt voor sportevenmenten.",
      stars: 0,
      stared: false,
      highlighted: true,
    },
    {
      label: "T-shirt wit lopende mieren",
      url:
        "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_v6.png?raw=true",
      description: "Deluxe wit t-shirt met lopende mieren op borst en rug.",
      stars: 0,
      stared: false,
      highlighted: true,
    }
  ],
  paginas: [
    {
      label: "Home",
      url: "/",
      iconName: undefined
    },
    {
      label: "Over ons",
      url: "/over-ons",
      iconName: undefined
    },
    {
      label: "Contact",
      url: "/contact",
      iconName: undefined
    }
  ],
  contact: [
    {
      name: "John Wick",
      function: "Body guard",
      description: "Ik zorg ervoor dat niemand gewond of vermoord wordt ;-)",
      communication: [
        {
          label: "email",
          adres: "safety@forme.be",
          type: CommunicationType.email,
          url: "safety@forme.be"
        }
      ]
    }
  ],
  vendorMoments: [
    {
      label: "Docks Bruxsel",
      date: [new Date(2019, 0, 26)] // jaar, maand-1, dag
    },
    {
      label: "Camping Flamingo",
      date: [
        new Date(2019, 1, 10),
        new Date(2019, 4, 12),
        new Date(2019, 4, 12),
        new Date(2019, 4, 12),
        new Date(2019, 4, 12)
      ] // jaar, maand-1, dag
    }
  ]
};
