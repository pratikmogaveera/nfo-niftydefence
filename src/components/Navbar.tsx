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

    const changeDomain = (domain: (typeof domains)[number]) => {
        setSelectedDomain(domain)
        setSelectedLink("Home")
    }

    return (
        <Container className="h-20 justify-start bg-mo-yellow md:h-24">
            <nav className="flex h-full w-full items-center gap-4 pl-4 md:pl-8">
                <Link
                    href={"/"}
                    className="relative aspect-[309/120] h-full max-w-[35%]"
                >
                    <Image
                        src={"/assets/images/moamc-logo.webp"}
                        alt="MOAMC Logo"
                        layout="fill"
                        objectFit="contain"
                        priority
                        className="p-1 md:p-2"
                    />
                </Link>
                <div className="flex h-full flex-1 flex-col justify-start text-white">
                    <div className="hidden w-full bg-stone-800 lg:flex">
                        {domains.map((item) => (
                            <Link
                                href={navbar[item].href}
                                key={navbar[item].title}
                                className={`border-b-2 px-4 py-2 text-xs font-medium uppercase ${selectedDomain === item ? "border-b-mo-grey bg-mo-yellow hover:bg-mo-yellow-secondary" : "border-b-transparent hover:bg-stone-600"}`}
                                onMouseDown={() => changeDomain(item)}
                            >
                                {navbar[item].title}
                            </Link>
                        ))}
                    </div>
                    <div className="flex h-full items-center justify-end lg:justify-between">
                        <div className="hidden h-full items-center gap-2 font-semibold text-stone-800 lg:flex">
                            {navbar[selectedDomain].links.map((item, i) => (
                                <Link
                                    href={item.href}
                                    key={i}
                                    className={`gap-2 px-4 py-2 text-xs leading-3 transition-all ${selectedLink === item.title ? "bg-mo-yellow-secondary text-white" : ""} hover:bg-mo-yellow-secondary hover:text-white`}
                                    onMouseDown={() =>
                                        setSelectedLink(item.title)
                                    }
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                        <div className="flex items-center gap-2 pr-4 md:pr-8">
                            <Button
                                size={"cta_big"}
                                variant={"secondary"}
                                className="flex flex-shrink-0 items-center gap-2 bg-stone-800 text-white hover:bg-stone-600 max-md:p-3"
                            >
                                <Image
                                    src={
                                        "/assets/images/micro/quick-invest-icon.svg"
                                    }
                                    alt="Quick Invest Icon"
                                    height={25}
                                    width={25}
                                    objectFit="contain"
                                />
                                <span className="hidden md:block">
                                    Quick Invest
                                </span>
                            </Button>
                            <Button
                                size={"cta_big"}
                                variant={"destructive"}
                                className="flex flex-shrink-0 items-center gap-2 max-md:p-3"
                            >
                                <Image
                                    src={"/assets/images/micro/login-icon.svg"}
                                    alt="Quick Invest Icon"
                                    height={25}
                                    width={25}
                                />
                                <span className="hidden md:block">Login</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </Container>
    )
}

export default Navbar
