import { RenderNavigation as Navigation } from "@/components/Navigation/RenderNavigation"
import Logo from "@/components/ui/Logo/Logo"

import styles from './Header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <Logo width={100} height={100} />
            <Navigation />
        </header>
    )
}

export default Header