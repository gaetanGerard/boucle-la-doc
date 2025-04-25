import styles from './Chip.module.scss';
import Link from 'next/link';

const Chip = ({ data }) => {
    return (
        <li className={styles.techItem}><Link href={data.url} target='__blank'>{data.label}</Link></li>
    )
}

export default Chip