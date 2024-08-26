import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";

const Home = () => {
  return (
    <>
      <Layout>
        <h1>this is 1 children</h1>
        <div className="flex justify-evenly flex-wrap space-x-4 mt-3 mb-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Layout>
    </>
  );
};

export default Home;
