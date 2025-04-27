import clsx from 'clsx';

import styles from "./Tip.module.scss";

import Link from 'next/link'
import Title from '@/components/ui/Title/Title'

const Tip = ({ tip, tipLinkText, className }) => {
    const { link, title, description } = tip
    return (
        <div className={clsx(styles.tip, styles[className])}>
            <Link href={`#${title.anchor}`}><Title level={title.level} className="subheading_link">{title.name}</Title></Link>
            <div className={styles.content}>
                {description && <p>{description}</p>}
                {link && <Link href={link.link} className={styles.link} target="_blank" rel="noopener noreferrer">{link.label}</Link>}
            </div>
        </div>
    )
}

export default Tip