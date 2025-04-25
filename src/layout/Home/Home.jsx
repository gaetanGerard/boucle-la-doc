import Hero from '@/components/Hero/Hero'
import Presentation from '@/components/Presentation/Presentation'
import ThemeFeature from '@/components/ThemeFeature/ThemeFeature'

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
            <ThemeFeature themeFeatureData={data.themeFeature} />
        </main>
    )
}

export default Home