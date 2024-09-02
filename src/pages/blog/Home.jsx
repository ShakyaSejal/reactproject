import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";

const Home = () => {
//   const [blogs,setBlogs]=useState([])
//   const fetchBlogs = async()=>{
//     const response = await axios.get(`${api}/api/user/blog`)
//     if (response.status===200){
//       setBlogs(response.data.data)
//     }
//     useEffect(()=>{
// fetchBlogs()
//     },[])
    return(
      <>
      <Layout>
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
