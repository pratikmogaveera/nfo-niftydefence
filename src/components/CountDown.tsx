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
    const timeLabels = ['Days', 'Hrs', 'Mins', 'Secs'] as const

    useEffect(() => {
        const launchDate = new Date("2024-07-01T12:00:00").getTime()
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
    return (
        <Wrapper>
            <div className='flex gap-3 full items-center justify-center h-[52px]'>
                <div className='flex items-center text-[18px] leading-[28px] gap-3'>
                    <span className=''><Image src={"/assets/images/micro/loudspeaker.png"} alt="loudspeaker vector" height={34} width={34} /></span>
                    <p className="font-semibold">NFO Live - Motilal Oswal Nifty India Defence Index Fund</p>
                    <div className="grid grid-cols-4 gap-2 text-black">
                        {Object.keys(timeLeft).map((val, i: number) =>
                            <div key={i} className="bg-gradient-to-b from-[#dfdfdf] to-[#d3d3d3] w-[36px] rounded-md px-1 py-1.5 flex flex-col items-center justify-center">
                                <div className="text-[20px] leading-[16px] font-mono font-semibold">{timeLeft[val]}</div>
                                <div className="text-[10px] leading-[12px] font-medium">{timeLabels[i]}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant={"destructive"}>Invest Now</Button>
                    <Button variant={"outline"}>Call Back</Button>
                </div>
            </div>
        </Wrapper>
    )
}