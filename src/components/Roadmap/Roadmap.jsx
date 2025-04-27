import React from 'react';
import styles from './Roadmap.module.scss';

const Roadmap = ({ roadmapItems }) => {
  return (
    <section className={styles.roadmap}>
      <div className={styles.items}>
        {roadmapItems.map((item, index) => (
          <div key={index} className={styles.roadmapItem}>
            <a href={`#${item.title.anchor}`} className={styles.anchor}>
              <h3 className={styles.itemTitle}>{item.title.name}</h3>
            </a>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.expectedRelease}>
              <strong>Sortie prévue :</strong> {item.expected_release}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
