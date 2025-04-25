'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavigationMobile.module.scss';
import Logo from "@/components/ui/Logo/Logo"

const NavigationMobile = ({ navigation }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.show : ''}`}
                onClick={closeMenu}
            ></div>

            <button onClick={toggleMenu} className={styles.mobileBtn}>
                ☰
            </button>

            <div className={`${styles.navigationMobile} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileNavHeader}>
                    <Logo width={100} height={100} />
                    <button onClick={toggleMenu} className={styles.mobileBtn}>
                        ✕
                    </button>
                </div>
                <ul>
                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={pathname === item.href ? styles.active : ''}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NavigationMobile;
