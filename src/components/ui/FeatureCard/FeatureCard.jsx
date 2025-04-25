import styles from './FeatureCard.module.scss'

const FeatureCard = ({ featureCard }) => {
    return (
        <li className={styles.featureCard}>
            <span className={styles.icon}>✨</span>
            <p>{featureCard}</p>
        </li>
    )
}

export default FeatureCard