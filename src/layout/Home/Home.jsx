import Hero from '@/components/Hero/Hero'
import Presentation from '@/components/Presentation/Presentation'

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
            <section>
                <h2>Services</h2>
                <p>Explore our range of services tailored for you.</p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>Get in touch with us for any inquiries.</p>
            </section>
        </main>
    )
}

export default Home