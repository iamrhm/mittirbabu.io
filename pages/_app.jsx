import React from "react";
import Head from "next/head";

import Header from "../src/screen/header";
import MenuModal from "../src/components/menu";

import "./style.css";

export default function MyApp({ Component, pageProps }) {
  const [showMenu, toggleMenu] = React.useState(false);

  return (
    <>
      <style jsx>
        {`
          .app-container {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <Head>
        <title>mittirbabu</title>
      </Head>
      <div className="app-container">
        <Header showTitle={true} toggleMenu={toggleMenu} showMenu={showMenu} />
        <Component {...pageProps} />
        <MenuModal showMenu={showMenu} toggleMenu={toggleMenu} />
      </div>
    </>
  );
}
