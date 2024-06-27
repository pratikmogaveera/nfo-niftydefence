import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import "./globals.css"

const roboto = Roboto_Condensed({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "NFO:Invest Online In Motilal Oswal Nifty India Defence Index fund",
    description:
        "Explore Motilal Oswal Nifty India Defence Index fund -Invest in a fund that aims to leverage the growing potential of the defence sector. Click here to invest online in NFO today!",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={cn(roboto.className)}>{children}</body>
        </html>
    )
}
