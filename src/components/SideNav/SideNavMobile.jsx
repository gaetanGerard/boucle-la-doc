import { useState } from 'react';
import SideNav from '@/components/SideNav/SideNav';
import styles from './SideNavMobile.module.scss';

const SideNavMobile = ({ nav }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className={`${styles.sideNavWrapper} ${isOpen ? styles.open : ''}`}>
            <button className={styles.toggleButton} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
            </button>

            {isOpen && <SideNav nav={nav} className="full_height" mobile={true} />}
        </div>
    );
};

export default SideNavMobile