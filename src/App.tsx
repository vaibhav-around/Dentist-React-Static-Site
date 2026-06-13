import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/Not-Found"));
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      </Suspense>
      <Footer/>
    </Router>
  )
}

export default App