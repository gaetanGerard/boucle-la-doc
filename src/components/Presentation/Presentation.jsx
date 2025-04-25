import styles from './Presentation.module.scss'

import Image from 'next/image';
import FeatureCard from '@/components/ui/FeatureCard/FeatureCard'
import Chip from '@/components/ui/Chip/Chip'
import Title from '@/components/ui/Title/Title'


const Presentation = ({ presentationData }) => {
    const {
        title,
        image,
        technologiesImage,
        meta,
        description,
        mainFeatures,
        technologies,
        goal
    } = presentationData

    return (
        <section className={styles.presentation}>
            <Title level={2} className={"heading"}>{title}</Title>

            <div className={styles.block}>
                <div className={styles.textContent}>
                    <div className={styles.meta}>
                        <p><strong>Nom :</strong> {meta.name}</p>
                        <p><strong>Auteur :</strong> {meta.author}</p>
                        <p><strong>Type :</strong> {meta.type}</p>
                        <p><strong>Cible :</strong> {meta.targetAudience}</p>
                    </div>

                    <div className={styles.description}>
                        <Title level={3} className={"subheading"}>{description.title}</Title>
                        <p>{description.text}</p>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image src={image} width={800} height={800} alt="Illustration du thème" className={styles.image} />
                </div>
            </div>

            <div className={styles.features}>
                <Title level={3} className={"subheading"}>{mainFeatures.title}</Title>
                <ul className={styles.featureList}>
                    {mainFeatures.items.map((item, idx) => (
                        <FeatureCard key={idx} featureCard={item} />
                    ))}
                </ul>
            </div>

            <div className={`${styles.block}`}>
                <div className={styles.imageWrapper}>
                    <Image width={800} height={800} src={technologiesImage} alt="Technologies utilisées" className={styles.image} />
                </div>

                <div className={styles.textContent}>
                    <div className={styles.technologies}>
                        <Title level={3} className={"subheading"}>{technologies.title}</Title>
                        <ul className={styles.techList}>
                            {technologies.list.map((tech, idx) => (
                                <Chip key={idx} data={tech} />
                            ))}
                        </ul>
                    </div>

                    <div className={styles.goal}>
                        <h3 className={styles.subheading}>{goal.title}</h3>
                        <p>{goal.text}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation