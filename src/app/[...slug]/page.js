/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import { useParams } from "next/navigation";

import Home from "@/layout/Home/Home";
import Faq from "@/layout/Faq/Faq";
import Documentation from "@/layout/Documentation/Documentation";
import PageNotFound from "@/layout/PageNotFound/PageNotFound";

const page = () => {
  const params = useParams();
  const slug = params.slug || [];

  if (slug.length === 0) {
    return <Home />;
  }

  if (slug.length === 1 && slug[0] === "faq") {
    return <Faq />;
  }

  if (slug.length >= 1 && slug[0] === "documentation") {
    return <Documentation slug={slug} />;
  }

  return <PageNotFound />;
};

export default page;
