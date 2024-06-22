import Banner from "@/components/Banner"
import Header from "@/components/Header"

export default function Home() {
    return (
        <main className="min-h-screen w-full justify-items-center bg-background text-foreground">
            <Header />
            <Banner />
        </main>
    )
}
