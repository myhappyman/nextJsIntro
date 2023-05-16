import Layout from "../components/Layout";
import type { AppProps } from 'next/app';
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
        {/* <SEO title="Home" /> */}
        <Component {...pageProps} />
    </Layout>
  );
}