import React from "react"

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <section className="w-full max-w-[1366px]">{children}</section>
}

export default Wrapper
