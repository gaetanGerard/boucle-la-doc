import styles from './Hero.module.scss'
import Link from 'next/link'

const Hero = ({ backgroundImage, title, subtitle, buttonText, link }) => {
    return (
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <Link href={link} className={styles.button}>{buttonText}</Link>
          </div>
        </div>
      </section>
    )
  }

  export default Hero