import Banner from "@/components/Banner"
import Header from "@/components/Header"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
    return (
        // <ScrollArea className="h-screen">
        <main className="w-full justify-items-center bg-background text-foreground">
            <Header />
            <Banner />
        </main>
        // </ScrollArea>
    )
}
