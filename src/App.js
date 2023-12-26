import React from "react";
import './App.css';
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
