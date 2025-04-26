import Image from "next/image";
import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Button/Button";
import styles from "./CallToAction.module.scss";
import SectionWrapper from "@/components/SectionWrapper/SectionWrapper";

import React from 'react'

const CallToAction = ({ data }) => {
  return (
    <SectionWrapper>
      <div className={styles.content}>
        <div className={styles.text}>
          <Title level={2} className={styles.title}>
            {data.title}
          </Title>
          <p className={styles.description}>{data.description}</p>
          <Button asChild className={styles.cta}>
            <a href={data.button.url} className="primary">
              {data.button.label}
            </a>
          </Button>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={data.image}
            alt={data.title}
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CallToAction