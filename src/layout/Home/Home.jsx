import Hero from '@/components/Hero/Hero'
import Presentation from '@/components/Presentation/Presentation'
import ThemeFeatures from '@/components/ThemeFeatures/ThemeFeatures'
import BackToTop from '@/components/ui/BackToTop/BackToTop'

import data from '@/lib/data/homeData.json'

const Home = () => {
    return (
        <main>
            <Hero
                backgroundImage="/img/hero.jpg"
                title="Boucle-la"
                subtitle="Bienvenu sur le site de documentation du thème Wordpress Boucle-la"
                buttonText="Voir la documentation"
                link="/documentation"
            />
            <Presentation presentationData={data.themePresentation} />
            <ThemeFeatures themeFeaturesData={data.themeFeatures} />
            <BackToTop />
        </main>
    )
}

export default Home