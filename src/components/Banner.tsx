import BannerFooter from "./BannerFooter"
import Container from "./helpers/Container"
import Wrapper from "./helpers/Wrapper"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const Banner = () => {
    return (
        <Container>
            <div className="aspect-[720/1280] w-full bg-home-banner-mobile bg-cover bg-no-repeat text-white md:aspect-[3200/984] md:bg-home-banner">
                <Wrapper className="flex h-full flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2 py-8 uppercase tracking-tighter">
                        <h3 className="text-xl font-bold capitalize leading-none md:text-lg lg:text-xl">
                            Introducing
                        </h3>
                        <h1 className="text-[1.75rem] font-bold leading-none md:text-2xl md:leading-none lg:text-5xl">
                            Motilal Oswal <br />{" "}
                            <span className="text-mo-yellow">
                                Nifty India Defence Index Fund
                            </span>
                        </h1>
                        <h2 className="text-xl font-bold leading-none md:text-lg lg:text-xl">
                            India Is Investing in Defence, Are You?
                        </h2>
                        <Select>
                            <SelectTrigger className="w-[150px] tracking-normal">
                                <SelectValue placeholder="Investment Option" />
                            </SelectTrigger>
                            <SelectContent className="tracking-normal">
                                <SelectItem value="direct">
                                    Direct - Growth
                                </SelectItem>
                                <SelectItem value="regular">
                                    Regular - Growth
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </Wrapper>
                <BannerFooter />
            </div>
        </Container>
    )
}

export default Banner
