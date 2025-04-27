import styles from './Chip.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

const Chip = ({ data, className = "", isLink = true }) => {
    if (isLink) {
        return (
            <li className={clsx(styles.techItem, styles[className])}><Link href={data.url} target='__blank'>{data.label}</Link></li>
        )
    } else {
        return (
            <div className={clsx(styles.techItem, styles[className])}>{data}</div>
        )
    }

}

export default Chip