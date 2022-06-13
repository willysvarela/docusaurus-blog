import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Button from "../components/Button";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl text-slate-700 dark:text-slate-500 animate-fade-in">
            mente.cheia
          </h1>
          <h2 className="text-5xl animate-fade-in">
            Devocionais e estudos bíblicos
          </h2>
          <div className="h-20" />
          <Button href="/blog">Ver Devocionais</Button>
        </div>
      </main>
    </Layout>
  );
}
