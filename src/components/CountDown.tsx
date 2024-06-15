"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Wrapper from "./helpers/Wrapper"
import { Button } from "./ui/button"

export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [loaded, setLoaded] = useState(false)
    const timeLabels = ['Days', 'Hrs', 'Mins', 'Secs'] as const

    useEffect(() => {
        const launchDate = new Date("2024-06-16T12:00:00").getTime()
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
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setTimeLeft({ days, hours, minutes, seconds })
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded)
        return (<></>)

    return (
        <Wrapper>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-8 full items-center justify-center min-h-[52px] px-4 sm:px-8 py-4'>
                <div className='flex flex-col lg:flex-row lg:items-center text-[18px] leading-[28px] gap-3'>
                    <p className="flex flex-col lg:flex-row items-start gap-3 max-lg:items-center lg:justify-center text-white">
                        <span className=''>
                            <Image src={"/assets/images/micro/loudspeaker.png"} alt="loudspeaker vector" className="flex aspect-square flex-shrink-0 max-w-[34px]" height={34} width={34} />
                        </span>
                        <span className="font-light text-center text-sm sm:text-base">NFO Live <p className="hidden lg:inline-flex">-</p> <br className="block lg:hidden" /><span className="font-bold">{"Motilal Oswal Nifty India Defence Index Fund"}</span>{" "}<br className="block lg:hidden" /><span className="whitespace-nowrap">Closes in</span></span>
                    </p>
                    <div className="grid grid-cols-[repeat(4,36px)] gap-2 text-black self-center">
                        {Object.keys(timeLeft).map((val, i: number) =>
                            <div key={i} className="bg-gradient-to-b from-[#dfdfdf] to-[#d3d3d3] w-[36px] rounded-md px-1 py-1.5 flex flex-col items-center justify-center">
                                <div className="text-[20px] leading-[16px] font-mono font-semibold">{timeLeft[val]}</div>
                                <div className="text-[10px] leading-[12px] font-medium">{timeLabels[i]}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <Button size={"cta"} variant={"destructive"}>Invest Now</Button>
                    <Button size={"cta"} variant={"outline"} className="text-white">Call Back</Button>
                </div>
            </div>
        </Wrapper>
    )
}