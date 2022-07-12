import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "../node_modules/next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>My top</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
