import Image from 'next/image';
import Link from 'next/link';

import styles from './Logo.module.scss';

const Logo = ({ width = 200, height = 100, className = '' }) => {
    return (
        <Link href="/"><Image src='/img/logo.png' width={width} height={height} alt="Logo of the brand" className={`${styles.logo} ${className}`} /></Link>
    )
}

export default Logo