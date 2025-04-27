import React from 'react';
import styles from './Changelog.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Changelog = ({ entries }) => {
    return (
        <section className={styles.changelog}>
            <div className={styles.entries}>
                {entries.map((entry, index) => (
                    <div key={index} className={styles.entry}>
                        <div className={styles.entryHeader}>
                            <h3 className={styles.version}>Version {entry.version}</h3>
                            <p className={styles.releaseDate}>
                                <strong>Date de sortie :</strong> {entry.release_date}
                            </p>
                        </div>
                        <ul className={styles.changes}>
                            {entry.changes.map((change, idx) => (
                                <li key={idx} className={styles.change}>
                                    <span className={styles.changeType}>{change.type} :</span>
                                    <p className={styles.changeDescription}>{change.description}</p>
                                    {change.isLink && <Link href={change.link} target="_blank"><Image src="/img/icons/github/github-mark.png" width={48} height={48} className={styles.icon} /></Link>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Changelog;
