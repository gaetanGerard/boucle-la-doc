import styles from './PluginCard.module.scss';

import Button from '@/components/ui/Button/Button';

const PluginCard = ({ plugin, isOpen, isAnotherOpen, onClick, isSiblingOpen, cardCount }) => {
    return (
        <div
            className={`${styles.card} ${isOpen ? styles.open : ''} ${isAnotherOpen ? styles.shrink : ''} ${isSiblingOpen ? styles.as_sibling_open : ''}`}
            onClick={onClick}
            style={{
                '--card-count': cardCount, // Passer le nombre de cartes pour le calcul de la largeur
            }}
        >
            <img src={plugin.logo} alt={plugin.name} className={styles.logo} />
            <h3 className={styles.name}>{plugin.name}</h3>
            {isOpen && (
                <div className={styles.details}>

                    <p className={styles.description}>
                        {plugin.description}
                    </p>
                    <Button asChild className={styles.cta}>
                        <a href={plugin.link} className="primary" target="_blank" rel="noopener noreferrer">
                            Voire le plugin
                        </a>
                    </Button>
                </div>
            )}
        </div>
    );
};
export default PluginCard;