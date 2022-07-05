import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/nav";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GameDive</title>
      </Head>
      <Nav />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
