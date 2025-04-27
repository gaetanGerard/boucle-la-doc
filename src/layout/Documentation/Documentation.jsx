"use client";

import React, { useEffect, useState } from "react";
import styles from "./Documentation.module.scss";
import doc from "@/lib/data/doc.json";
import { buildNavTree } from "@/lib/utils/buildNavTree";
import { findDataBySlug } from "@/lib/utils/findDataBySlug";
import RenderSideNav from "@/components/SideNav/RenderSideNav";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import DocContent from "@/components/DocContent/DocContent";
import Loading from "@/components/Loading/Loading";
import docData from "@/lib/data/doc.json";

const Documentation = ({ slug }) => {
  const [sideNav, setSideNav] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const navLinks = buildNavTree(doc);
    setSideNav(navLinks);

    if (slug && docData) {
      if (slug.length > 1) {
        const docDataFromSlug = findDataBySlug(slug, docData);
        setData(docDataFromSlug);
      } else if (slug.length === 1 && slug[0] === "documentation") {
        const dataInit = {
          layout: "initLayout",
          title: {
            name: "Documentation",
            level: 1,
            anchor: "documentation",
          },
          description: "Vous trouverez ici la documentation sur le projet.",
          image: {
            src: "/img/documentation.png",
            width: 600,
            height: 600,
            className: "image_center"
          }
        }
        setData(dataInit);
      }

    }
  }, [slug]);

  return (
    <>
      <main className={styles.container}>
        <RenderSideNav nav={sideNav} />
        {data ? (<div className={styles.doc_wrapper}><DocContent data={data} /></div>) : <Loading />}
      </main>
      <BackToTop />
    </>

  );

};

export default Documentation;
