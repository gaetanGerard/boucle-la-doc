import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/components/ui/Title/Title';
import Description from '@/components/ui/Description/Description';

import styles from './InstCard.module.scss';

const InstCard = ({ data }) => {
    const { title, link, description, logo } = data;
    return (
        <div className={styles.container} id={title.anchor}>
            {logo && <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={styles[logo.className]} />}
            <div className={styles.content}>
                <Link href={`#${title.anchor}`}><Title level={title.level} className="subheading_link">{title.name}</Title></Link>
                <Description desc={description} />
                <Link href={link} className={styles.link} target="_blank" rel="noopener noreferrer">Etapes d'Installation</Link>
            </div>
        </div>
    )
}

export default InstCard