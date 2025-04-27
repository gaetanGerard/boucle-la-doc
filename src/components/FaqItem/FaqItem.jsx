import React, { useState } from 'react';
import styles from './FaqItem.module.scss';

const FaqItem = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, subtitle, answer, link } = data;

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.faqItem}>
            <div className={styles.faqHeader} onClick={toggleAnswer}>
                <h3 className={styles.faqTitle}>{title.name}</h3>
                <span className={styles.faqArrow}>{isOpen ? '▼' : '►'}</span>
            </div>
            {isOpen && (
                <div className={styles.faqBody}>
                    <h4 className={styles.faqSubtitle}>{subtitle.name}</h4>
                    <p className={styles.faqAnswer}>{answer}</p>
                    {link && (
                        <a href={link} className={styles.faqLink} target="_blank" rel="noopener noreferrer">
                            En savoir plus
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default FaqItem;
