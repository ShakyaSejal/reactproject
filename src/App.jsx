import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/addblog" element={<AddBlog />} />
          <Route path="/navbar" element={<Navbar/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
