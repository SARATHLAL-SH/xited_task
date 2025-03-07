// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Recipes from './pages/Recipes';
// import Blog from './pages/Blog';
// import Contact from './pages/Contact';


// function App() {
//   return (
//     <Router>
//     <Navbar />
//     <div className="pt-[166px]">
//     <Routes>
//       <Route path="/" element={<About />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/recipes" element={<Recipes />} />
//       <Route path="/blog" element={<Blog />} />
//       <Route path="/contact" element={<Contact />} />

//     </Routes>
//     </div>
//   </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Products from "./pages/Products";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.getElementById(location.hash.substring(1));
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="pt-[166px] ">
        <section id="about"><About /></section>
        <section id="products"><Products /></section>
        <section id="recipes"><Recipes /></section>
        <section id="blog"><Blog /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
