"use client";

import React, { useEffect, useState } from "react";
import styles from "./Documentation.module.scss";
import doc from "@/lib/data/doc.json";
import { buildNavTree } from "@/lib/utils/buildNavTree";
import RenderSideNav from "@/components/SideNav/RenderSideNav";
import BackToTop from "@/components/ui/BackToTop/BackToTop";

const Documentation = ({ slug }) => {
  const [sideNav, setSideNav] = useState([]);

  useEffect(() => {
    const navLinks = buildNavTree(doc);
    setSideNav(navLinks);
  }, []);

  return (
    <main className={styles.container}>
      <RenderSideNav nav={sideNav} />
      <BackToTop />
    </main>
  );
};

export default Documentation;
