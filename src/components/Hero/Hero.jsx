import styles from './Hero.module.scss'
import Link from 'next/link'
import Title from '@/components/ui/Title/Title'

const Hero = ({ backgroundImage, title, subtitle, buttonText, link }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <Title level={1} className="hero_title">{title}</Title>
          <Title level={2} className="hero_subtitle">{subtitle}</Title>
          <Link href={link} className={styles.button}>{buttonText}</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero