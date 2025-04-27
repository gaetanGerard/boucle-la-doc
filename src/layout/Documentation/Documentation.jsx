"use client";

import React, { useEffect, useState } from "react";
import styles from "./Documentation.module.scss";
import doc from "@/lib/data/doc.json";
import { buildNavTree } from "@/lib/utils/buildNavTree";
import RenderSideNav from "@/components/SideNav/RenderSideNav";
import BackToTop from "@/components/ui/BackToTop/BackToTop";
import docData from "@/lib/data/doc.json";
import { usePathname } from "next/navigation";

const Documentation = ({ slug }) => {
  const [sideNav, setSideNav] = useState([]);
  const pathname = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    const navLinks = buildNavTree(doc);
    setSideNav(navLinks);

    if (slug && docData[slug]) {
      setData(docData[slug]);
    }
  }, [slug]);

  return (
    <main className={styles.container}>
      <RenderSideNav nav={sideNav} />
      <BackToTop />
    </main>
  );
};

export default Documentation;
