import Logo from '@/components/ui/Logo/Logo'
import { getCurrentYear } from '@/lib/utils/date'
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footer__container}>
                    <Logo className={styles.footer_logo} />
                    <div className={styles.footer__content}>
                        <p>&copy; {getCurrentYear()} Boucle-la. Tout droit réserver.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer