import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
// Improt of styles
import styles from "./DocContent.module.scss";
// Import of custom Components
import Title from "@/components/ui/Title/Title";
import Description from "@/components/ui/Description/Description";
import UnorderedList from "@/components/ui/UnorderedList/UnorderedList";
import Plugins from "@/components/Plugins/Plugins";

const DocContent = ({ data }) => {
    // console.log(data);

    return (
        <div className={clsx(styles.container, { [styles[data.layout]]: data.layout })}>
            <Link href={`#${data.title.anchor}`}><Title level={data.title.level} className="link">{data.title.name}</Title></Link>

            {data.description && <Description desc={data.description} />}

            {data.image && <Image src={data.image.src} width={data.image.width} height={data.image.height} alt={data.image.alt ? data.image.alt : data.title.name} className={styles[data.image.className]} />}

            {data.list && <UnorderedList list={data.list} />}

            {data.plugins && <Plugins plugins={data.plugins} />}
        </div >
    );
};

export default DocContent;
