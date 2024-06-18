"use client"
import React, { useState } from "react"
import Container from "./helpers/Container"
import { domains, navbar } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"

const Navbar = () => {
    const [selectedDomain, setSelectedDomain] =
        useState<(typeof domains)[number]>("mutual-fund")
    const [selectedLink, setSelectedLink] = useState<string>("Home")
    console.log(selectedDomain)

    const changeDomain = (domain: (typeof domains)[number]) => {
        setSelectedDomain(domain)
        setSelectedLink("Home")
    }

    return (
        <Container className="h-24 justify-start bg-mo-yellow">
            <div className="w-max pl-8">
                <nav className="flex h-24 w-full gap-4">
                    <Link href={"/"} className="h-fit w-full">
                        <span className="relative flex aspect-[309/120] min-h-full w-full justify-center">
                            <Image
                                src={"/assets/images/moamc-logo.webp"}
                                alt="MOAMC Logo"
                                fill
                                className="object-contain p-4"
                            />
                        </span>
                    </Link>
                    <div className="flex h-full flex-col justify-start text-white">
                        <div className="flex w-full justify-between bg-stone-800">
                            {domains.map((item) => (
                                <Link
                                    href={navbar[item].href}
                                    key={navbar[item].title}
                                    className={`px-4 py-2 text-xs uppercase ${selectedDomain === item ? "bg-mo-yellow hover:bg-mo-yellow-secondary" : "hover:bg-stone-600"}`}
                                    onMouseDown={() => changeDomain(item)}
                                >
                                    {navbar[item].title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex h-full w-full items-center gap-2 font-semibold text-stone-800">
                            {navbar[selectedDomain].links.map((item, i) => (
                                <Link
                                    href={item.href}
                                    key={i}
                                    className={`px-4 py-2 text-sm transition-all ${selectedLink === item.title ? "bg-mo-yellow-secondary text-white" : ""} hover:bg-mo-yellow-secondary hover:text-white`}
                                    onMouseDown={() =>
                                        setSelectedLink(item.title)
                                    }
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button size={"cta_big"} variant={"secondary"}>
                            Quick Invest
                        </Button>
                        <Button size={"cta_big"} variant={"destructive"}>
                            Login
                        </Button>
                    </div>
                </nav>
            </div>
        </Container>
    )
}

export default Navbar
