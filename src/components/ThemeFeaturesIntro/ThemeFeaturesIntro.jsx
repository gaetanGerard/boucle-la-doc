import styles from './ThemeFeaturesIntro.module.scss'

import Button from '@/components/ui/Button/Button'
import Title from '@/components/ui/Title/Title'
import Image from 'next/image'

const ThemeFeaturesIntro = ({ intro, title }) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <Title level={2} className="section_title">{title}</Title>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <Title level={3} className="subheading">{intro.title}</Title>
                        <p className={styles.description}>{intro.description}</p>
                        <Button asChild className={styles.cta}>
                            <a href={intro.button.url} className="primary" target="_blank" rel="noopener noreferrer">
                                {intro.button.label}
                            </a>
                        </Button>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={intro.image}
                            alt={intro.title}
                            width={600}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThemeFeaturesIntro