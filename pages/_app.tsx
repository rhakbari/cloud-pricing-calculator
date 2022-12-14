import React from "react";
import {AppProps} from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <React.Fragment>
      <Head>
        <title>QCloud Price Calculator</title>
        <link rel="icon" href="/favicon.png" type="image" />
      </Head>
  

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
