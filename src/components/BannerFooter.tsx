import React from "react"
import { Button } from "./ui/button"
import { Share2 } from "lucide-react"

const BannerFooter = () => {
    return (
        <div className="bg-mo-yellow-muted flex w-full items-center justify-between gap-2 px-4 py-2 text-mo-grey max-md:flex-col md:max-lg:px-4 md:max-lg:py-1.5 md:max-lg:text-sm">
            <div className="flex items-center gap-2">
                <p className="flex items-center gap-2">
                    <span className="block h-2 w-2 rounded-full bg-destructive" />
                    <span className="font-semibold leading-4">Live NFO,</span>
                </p>
                <p>
                    End Date: 27<sup>th</sup> June 2024
                </p>
            </div>
            <div className="flex items-center gap-4">
                <Button
                    variant={"outline"}
                    size={"cta"}
                    className="border-destructive px-8 text-destructive hover:text-red-600"
                >
                    Call Back
                </Button>
                <Button
                    variant={"outline"}
                    size={"icon"}
                    className="h-8 w-8 border-mo-grey"
                >
                    <Share2 size={20} />
                </Button>
            </div>
        </div>
    )
}

export default BannerFooter
