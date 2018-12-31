export interface IResources {
    collection: {
        label: string,
        url: string,
        description: string
    }[],
    paginas: {
        label: string,
        url: string,
        iconName?: string
    }[]
}

export const resources: IResources = {
    collection: [
        {
            label: "T-shirt rood",
            url: "https://github.com/SamClercky/forme-src/blob/master/tshirtRood.png?raw=true",
            description: "Dit is een rood t-shirt gemaakt met verfijnde stof en een exclusieve witte mier op de borst."
        },
        {
            label: "T-shirt wit mier zwart (groot)",
            url: "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_donker.png?raw=true",
            description: "Wit t-shirt met een exclusieve zwarte mier en onze bedrijfsnaam in het Arabisch."
        },
        {
            label: "T-shirt wit mier rood (groot)",
            url: "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish.png?raw=true",
            description: "Rood t-shirt met een exclusieve rode mier en onze bedrijfsnaam in het Arabisch."
        },
        {
            label: "T-shirt wit mier rood (klein)",
            url: "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_klein.png?raw=true",
            description: "Sober wit t-shirt voor sportevenmenten."
        },
        {
            label: "T-shirt wit lopende mieren",
            url: "https://github.com/SamClercky/forme-src/blob/master/tshirtWit_finish_v6.png?raw=true",
            description: "Deluxe wit t-shirt met lopende mieren op borst en rug."
        },
    ],
    paginas: [
        {
            label: "Home",
            url: "/",
            iconName: undefined
        }
    ]
}