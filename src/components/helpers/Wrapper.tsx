import { cn } from "@/lib/utils"
import React from "react"

const Wrapper = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <section
            className={cn(
                "mx-auto w-full max-w-[90vw] 2xl:max-w-[1366px]",
                className,
            )}
        >
            {children}
        </section>
    )
}

export default Wrapper
