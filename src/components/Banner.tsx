import BannerFooter from "./BannerFooter"
import Container from "./helpers/Container"
import Wrapper from "./helpers/Wrapper"

const Banner = () => {
    return (
        <Container>
            <div className="banner-home aspect-[720/1280] w-full bg-home-banner-mobile bg-contain text-white md:aspect-[3200/984] md:bg-home-banner">
                <Wrapper className="flex h-full flex-col justify-between gap-4">
                    <div></div>
                    <BannerFooter />
                </Wrapper>
            </div>
        </Container>
    )
}

export default Banner
