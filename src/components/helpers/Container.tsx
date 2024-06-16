import { cn } from "@/lib/utils"
import React from "react"

const Container = ({
    children,
    className,
}: {
    children: React.ReactNode
    className: string
}) => {
    return (
        <div className={cn("grid justify-center", className)}>{children}</div>
    )
}

export default Container
