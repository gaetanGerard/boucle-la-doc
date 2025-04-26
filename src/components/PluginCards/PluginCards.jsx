import styles from './PluginCards.module.scss';
import PluginCard from './PluginCard/PluginCard';
import { useState } from 'react';

const PluginCards = ({ plugins }) => {
    const [openCardIndex, setOpenCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.cards}>
            {plugins.map((plugin, index) => {
                const isOpen = openCardIndex === index;
                const isAnotherOpen = openCardIndex !== null && openCardIndex !== index;

                return (
                    <PluginCard
                        key={plugin.name}
                        plugin={plugin}
                        isOpen={isOpen}
                        isAnotherOpen={isAnotherOpen}
                        onClick={() => handleCardClick(index)}
                        isSiblingOpen={isAnotherOpen}
                        cardCount={plugins.length}
                    />
                );
            })}
        </div>
    );
};

export default PluginCards;
