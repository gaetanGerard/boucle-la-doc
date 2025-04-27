import styles from './InstallationStep.module.scss'

import Link from 'next/link'
import Image from 'next/image'
import Description from '@/components/ui/Description/Description'
import Title from '@/components/ui/Title/Title'
import Tip from '@/components/ui/Tip/Tip'
import UnorderedList from '@/components/ui/UnorderedList/UnorderedList'

const InstallationStep = ({ step }) => {
    const { title, description, link, tips, image, list } = step

    console.log(tips)

    return (
        <div className={styles.card} id={title.anchor}>
            <div className={styles.content}>
                <Link href={`#${title.anchor}`}><Title level={title.level} className="subheading_link">{title.name}</Title></Link>
                {image && <Image src={image.src} width={image.width} height={image.height} alt={title.name} className={styles[image.className]} />}
                <Description desc={description} />
                {tips && tips.map((tip, index) => <Tip tip={tip} key={index} className={tip.className} />)}
                {list && <UnorderedList list={list} />}
                {link && <Link href={link} className={styles.link} target="_blank" rel="noopener noreferrer">Etapes d'Installation</Link>}
            </div>
        </div>
    )
}

export default InstallationStep