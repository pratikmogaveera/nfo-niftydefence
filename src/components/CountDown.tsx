"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Wrapper from "./helpers/Wrapper"
import { Button } from "./ui/button"
import Container from "./helpers/Container"

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [loaded, setLoaded] = useState(false)
    const timeLabels = ["Days", "Hrs", "Mins", "Secs"] as const

    useEffect(() => {
        const launchDate = new Date("2024-06-28T00:00:00").getTime()
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = launchDate - now
            if (distance < 0) {
                clearInterval(interval)
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                })
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                )
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60),
                )
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setTimeLeft({ days, hours, minutes, seconds })
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) return <></>

    return (
        <Container className="bg-mo-blue">
            <Wrapper>
                <div className="flex min-h-[52px] w-full flex-col items-center justify-center gap-3 px-4 py-4 sm:flex-row sm:px-8">
                    <div className="flex flex-col gap-3 text-[18px] leading-[28px] lg:flex-row lg:items-center">
                        <div className="flex flex-col items-center gap-x-2 text-white max-lg:items-center lg:flex-row lg:justify-center">
                            <span className="flex items-center gap-1 whitespace-nowrap sm:gap-2">
                                <Image
                                    src={"/assets/images/micro/loudspeaker.png"}
                                    alt="loudspeaker vector"
                                    className="flex aspect-square max-w-[34px] flex-shrink-0"
                                    height={26}
                                    width={26}
                                />
                                <span className="text-sm font-light sm:text-base">
                                    NFO Live
                                </span>
                                <p className="hidden text-sm font-light sm:text-base lg:inline-flex">
                                    -
                                </p>
                            </span>
                            <span className="text-center text-sm font-light sm:text-base">
                                {/* NFO Live{" "} */}{" "}
                                <br className="block lg:hidden" />
                                <span className="font-bold max-md:whitespace-nowrap">
                                    {
                                        "Motilal Oswal Nifty India Defence Index Fund"
                                    }
                                </span>{" "}
                                <br className="block lg:hidden" />
                                <span className="whitespace-nowrap">
                                    Closes in
                                </span>
                            </span>
                        </div>
                        <div className="grid grid-cols-[repeat(4,36px)] gap-2 self-center text-black">
                            {Object.keys(timeLeft).map((val, i: number) => (
                                <div
                                    key={i}
                                    className="flex w-[36px] flex-col items-center justify-center rounded-md bg-gradient-to-b from-[#dfdfdf] to-[#d3d3d3] px-1 py-1.5"
                                >
                                    <div className="font-mono text-[20px] font-semibold leading-[16px]">
                                        {timeLeft[val]}
                                    </div>
                                    <div className="text-[10px] font-medium leading-[12px]">
                                        {timeLabels[i]}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <Button size={"cta"} variant={"destructive"}>
                            Invest Now
                        </Button>
                        <Button
                            size={"cta"}
                            variant={"outline"}
                            className="text-white hover:text-white"
                        >
                            Call Back
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}
