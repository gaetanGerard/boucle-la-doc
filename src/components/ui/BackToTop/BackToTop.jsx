'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import styles from './BackToTop.module.scss';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
                    <ChevronUp size={24} />
                </button>
            )}
        </>
    );
};

export default BackToTop;
