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
        <section className={cn("w-full max-w-[1366px]", className)}>
            {children}
        </section>
    )
}

export default Wrapper
