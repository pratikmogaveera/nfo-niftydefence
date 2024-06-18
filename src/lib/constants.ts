export type Link = { title: string; href: string }
export type Domain = { title: string; href: string; links: Link[] }

export const domains = [
    "mutual-fund",
    "index-fund",
    "etf",
    "pms",
    "aif",
    "partner",
    "investor-education",
    "international-business",
] as const

export const navbar: Record<(typeof domains)[number], Domain> = {
    "mutual-fund": {
        title: "Mutual Fund",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "Our Funds",
                href: "/",
            },
            {
                title: "Nav & Tier",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "Tools",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
            {
                title: "Investor Charter",
                href: "/",
            },
        ],
    },
    "index-fund": {
        title: "Index Fund",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "About Us",
                href: "/",
            },
            {
                title: "Our Funds",
                href: "/",
            },
            {
                title: "NAV",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "Tools",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
        ],
    },
    "etf": {
        title: "ETF",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "Nav",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "Tools",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
        ],
    },
    "pms": {
        title: "PMS",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "Our Strategies",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "About Us",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
            {
                title: "Investor Charter",
                href: "/",
            },
        ],
    },
    "aif": {
        title: "AIF",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
        ],
    },
    "partner": {
        title: "Partner",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "About Us",
                href: "/",
            },
            {
                title: "NAV",
                href: "/",
            },
            {
                title: "Tools",
                href: "/",
            },
            {
                title: "Contact Us",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
        ],
    },
    "investor-education": {
        title: "Investor Education",
        href: "/",
        links: [
            {
                title: "",
                href: "/",
            },
        ],
    },
    "international-business": {
        title: "International Business",
        href: "/",
        links: [
            {
                title: "Home",
                href: "/",
            },
            {
                title: "Downloads",
                href: "/",
            },
            {
                title: "News & Insights",
                href: "/",
            },
        ],
    },
}
