import styles from './BlockAndCompoDetails.module.scss';

const BlockAndCompoDetails = ({ details }) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Détails du bloc</h2>
            <div className={styles.details}>
                <h3>Où utiliser ce bloc ?</h3>
                <p>{details.where_to_use}</p>

                <h3>Pourquoi l'utiliser ?</h3>
                <p>{details.why_use}</p>

                <h3>Les avantages</h3>
                <ul className={styles.benefitsList}>
                    {details.benefits.map((benefit, index) => (
                        <li key={index} className={styles.benefitItem}>{benefit}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BlockAndCompoDetails;