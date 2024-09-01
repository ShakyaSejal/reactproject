import React from "react";
import Form from "./component/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../assets/api";


const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${api}/api/user/register`, data);

      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Form type={"Register"} onSubmit={handleRegister} />
    </>
  );
};

export default Register;
