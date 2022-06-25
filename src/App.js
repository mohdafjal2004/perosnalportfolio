import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import bg from "./components/bg3.jpg";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute top-0  w-[100vw] h-[180rem] bg-fixed "
      >
        <Nav className="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/fb"
            component={() => {
              window.location.href =
                "https://www.facebook.com/mohammadafzal.khan.5492";
              return null;
            }}
          />
        </Routes>
      </div>
      <Skills />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
