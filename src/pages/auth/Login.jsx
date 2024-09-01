import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../assets/api";
const Login = () => {
  // const baseUrl = sujal;

  // const baseUrl ="https://react30.onrender.com";
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${api}/api/user/login`, data);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type={"Login"} onSubmit={handleLogin} />
    </>
  );
};

export default Login;
