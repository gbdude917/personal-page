import type { NextPage } from "next";
import Head from "next/head";

import classes from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Experience from "../components/experience/Experience";

const Home: NextPage = () => {
  return (
    <div className={classes.heroImage}>
      <Head>
        <title>Gabriel Leong</title>
        <meta
          name="description"
          content="Gabriel Leong's personal page. Learn more about him here."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Experience />
    </div>
  );
};

export default Home;
