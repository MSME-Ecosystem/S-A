import React from "react";
import Head from "next/head";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Navheader from "./Navheader";
import Chatbox from "./Chatbox";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Smart Agric - Dashboard</title>

        <meta
          name="keywords"
          content="Smart Agric, MSMEs Ecosystem, MSME Center, Agriculture, Smart Farming"
        />            
       <link rel="icon" href="/favicon.ico" />
       {/* <link rel="stylesheet" href="/dashboard/style.css" /> */}
      </Head>

      <div id="preloader">
        <div className="sk-three-bounce">
          <div className="sk-child sk-bounce1" />
          <div className="sk-child sk-bounce2" />
          <div className="sk-child sk-bounce3" />
        </div>
      </div>
      <div id="main-wrapper">
        <Navheader />
        <Chatbox />
        <Navbar />
        <Sidebar />

        <main>{children}</main>
      </div>
    </>
  );
}
