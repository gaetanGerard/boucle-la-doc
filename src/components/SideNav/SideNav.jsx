import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

import styles from './SideNav.module.scss';

const SideNav = ({ nav, mobile }) => {
    const pathname = usePathname();

    const getOpenSectionsFromPath = (items, path) => {
        const open = {};

        const traverse = (nodes) => {
            nodes.forEach((node) => {
                if (path.includes(node.href)) {
                    open[node.href] = true;
                }
                if (node.children && node.children.length > 0) {
                    traverse(node.children);
                }
            });
        };

        traverse(items);
        return open;
    };

    const [openSections, setOpenSections] = useState({});

    useEffect(() => {
        const newOpenSections = getOpenSectionsFromPath(nav, pathname);
        setOpenSections(newOpenSections);
    }, [pathname, nav]);

    const handleToggle = (href) => {
        setOpenSections((prev) => ({
            ...prev,
            [href]: !prev[href],
        }));
    };


    const renderNavItems = (items, level = 1) => {
        return items.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openSections[item.href];

            return (
                <li key={index} className={styles.navItem}>
                    <div className={styles.navRow}>
                        {level === 1 ? (
                            <button
                                type="button"
                                className={`${styles.toggleButton} ${isOpen ? styles.open : ''}`}
                                onClick={() => handleToggle(item.href)}
                            >
                                {item.label}
                                {hasChildren && (
                                    <ChevronDown
                                        className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
                                        size={16}
                                    />
                                )}
                            </button>
                        ) : (
                            <>
                                <Link href={item.href} className={clsx(styles.navLink, { [styles.active]: pathname === item.href })}>
                                    {item.label}
                                </Link>
                                {hasChildren && (
                                    <button
                                        type="button"
                                        className={`${styles.subToggleButton} ${isOpen ? styles.open : ''}`}
                                        onClick={() => handleToggle(item.href)}
                                        aria-label="Toggle submenu"
                                    >
                                        <ChevronDown
                                            className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`}
                                            size={14}
                                        />
                                    </button>
                                )}
                            </>
                        )}
                    </div>

                    {hasChildren && isOpen && (
                        <ul className={styles.subNavList}>
                            {renderNavItems(item.children, level + 1)}
                        </ul>
                    )}
                </li>
            );
        });
    };

    return (
        <nav className={`${mobile === true ? styles.sideNavMobile : styles.sideNav}`}>
            <ul className={`${styles.navList} `}>{renderNavItems(nav)}</ul>
        </nav>
    );
};


export default SideNav