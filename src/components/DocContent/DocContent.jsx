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
import FileTree from "@/components/FileTree/FileTree";
import Codes from "@/components/Codes/Codes";
import BlockAndCompoDetails from "@/components/BlockAndCompoDetails/BlockAndCompoDetails";
import Roadmap from "@/components/Roadmap/Roadmap";
import Changelog from "@/components/Changelog/Changelog";

const DocContent = ({ data }) => {
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
            {data.fileTree && <FileTree data={data.fileTree} />}
            {data.codes && <Codes codes={data.codes} />}
            {data.details && <BlockAndCompoDetails details={data.details} />}
            {data.roadmap && <Roadmap roadmapItems={data.roadmap} />}
            {data.changelog && <Changelog entries={data.changelog} />}

            {/* This part handle the Footer section */}
        </div >
    );
};

export default DocContent;
