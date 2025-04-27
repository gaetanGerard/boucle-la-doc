import { useState } from "react";
import styles from "./FileTree.module.scss";

const FileTree = ({ data }) => {
    const renderTree = (nodes) => (
        <ul className={styles.tree}>
            {nodes.map((node, index) => {
                const isFolder = node.children && node.children.length > 0;
                return (
                    <li key={index} className={styles.node}>
                        <div className={isFolder ? styles.folder : styles.file}>
                            {node.name}
                        </div>
                        {isFolder && renderTree(node.children)}
                    </li>
                );
            })}
        </ul>
    );

    return <div className={styles.container}>{renderTree(data)}</div>;
};

export default FileTree;
