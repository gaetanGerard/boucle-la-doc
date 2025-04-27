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
      const docDataFromSlug = findDataBySlug(slug, docData);
      setData(docDataFromSlug);
    }
  }, [slug]);

  if (data) {
    return (
      <main className={styles.container}>
        <RenderSideNav nav={sideNav} />
        <DocContent data={data} />
        <BackToTop />
      </main>
    );
  } else {
    return (
      <main className={styles.container}><Loading /></main>
    )
  }

};

export default Documentation;
