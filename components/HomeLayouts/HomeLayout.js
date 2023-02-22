import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function HomeLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Smart Agriculture</title>
         <link rel="icon" href="/favicon.ico" />
     <meta
          property="og:site_name"
          content="MSMEs Ecosystem SmartAgriculture"
        />
        <meta property="og:site" content="smartagric.msmes.io" />
        <meta property="og:title" content="Smart Agriculture" />
        <meta
          property="og:description"
          content="Smart Agriculture for better farming"
        />
        <meta property="og:image" content="" />
        <meta
          property="og:url"
          content="https://smartagric.msmes.io/register"
        />
        <meta property="og:type" content="article" />
       
      </Head>
      <Navbar />
      <main>{children}</main>
      {router.pathname == "/login" ? (
        ""
      ) : router.pathname == "/register" ? (
        ""
      ) : (
        <Footer />
      )}
    </>
  );
}
