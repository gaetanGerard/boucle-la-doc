import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import styles from "./Plugin.module.scss";

import Title from "@/components/ui/Title/Title";
import Description from "@/components/ui/Description/Description";
import UnorderedList from "@/components/ui/UnorderedList/UnorderedList";
import Chip from "@/components/ui/Chip/Chip";

const Plugin = ({ plugin }) => {
    const { list, logo, alternative, description, link, title, version, compatibility } = plugin;
    return (
        <div className={styles.container} id={title.anchor}>
            <div className={styles.plugin_header}>
                <Link href={`#${title.anchor}`}><Title level={title.level} className="subheading_link">{title.name}</Title></Link>
            </div>
            <div className={styles.plugin_content}>
                <div className={styles.plugin_logo}>
                    {logo && <Image src={logo.src} width={logo.width} height={logo.height} alt={logo.alt ? logo.alt : title.name} />}
                </div>
                <div className={styles.plugin_description}>
                    {description && <Description desc={description} />}
                    <div className={styles.chip_container}>
                        {version && <Chip data={`Version : ${version.label}`} isLink={version.isLink} className={version.className} />}
                        {compatibility && <Chip data={compatibility.label} isLink={compatibility.isLink} className={compatibility.className} />}
                    </div>
                    {link && <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>Documentation</Link>}
                </div>
            </div>
            {list && <UnorderedList list={list} />}
            {alternative &&
                <div className={styles.alternative}>
                    <div className={styles.alternative_header}>
                        <Title level={3} className="subheading">Alternative</Title>
                        <Chip data={alternative.tested.label} isLink={alternative.tested.isLink} className={alternative.tested.className} />
                    </div>
                    <div className={styles.alternative_content}>
                        <Title level={4} className="subheading">{alternative.title}</Title>
                        <Description desc={alternative.reason} />
                    </div>
                </div>}






        </div>
    )
}

export default Plugin