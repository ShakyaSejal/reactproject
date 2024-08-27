import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Navbar from "./components/navbar/Navbar";
import EditBlog from "./pages/blog/EditBlog";
import SingleBlog from "./pages/blog/SingleBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/blog/add" element={<AddBlog />} />
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/blog/edit" element={<EditBlog/>}></Route>
          <Route path="/blog/id" element={<SingleBlog/>}></Route>

x
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
