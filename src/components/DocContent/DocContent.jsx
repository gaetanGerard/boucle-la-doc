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
import Installation from "@/components/Installation/Installation";
import InstallationSteps from "@/components/InstallationSteps/InstallationSteps";

const DocContent = ({ data }) => {
    // console.log(data);

    return (
        <div className={clsx(styles.container, { [styles[data.layout]]: data.layout })}>
            {/* This part handle the General section */}
            {data.title && <Link href={`#${data.title.anchor}`}><Title level={data.title.level} className="link">{data.title.name}</Title></Link>}
            {data.description && <Description desc={data.description} />}
            {data.image && <Image src={data.image.src} width={data.image.width} height={data.image.height} alt={data.image.alt ? data.image.alt : data.title.name} className={styles[data.image.className]} />}


            {/* This part handle the different section specificities */}
            {data.list && <UnorderedList list={data.list} />}
            {data.plugins && <Plugins plugins={data.plugins} />}
            {data.installation && <Installation inst={data.installation} />}
            {data.steps && <InstallationSteps steps={data.steps} />}
        </div >
    );
};

export default DocContent;
