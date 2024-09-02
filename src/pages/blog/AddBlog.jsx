import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/form/Form";
import { api } from "../../assets/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No authentication token found. Please log in.");
        return;
      }
    
      const response = await axios.post(`${api}/api/user/blog`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization":  "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.status===201) {
        navigate("/");
      }
        else{
          alert("something went wrong")
        }
    }

    catch(error) {
      const message = error.response?.data?.message;
      console.error("API error:", error);
      alert(message || "An unknown error occurred.");
    }
   
  };
  return (
    <>
      <Layout>
        <Form type="Create" onSubmit={handleCreateBlog} />
      </Layout>
    </>
  );
};

export default AddBlog;
