import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import Service from "../Service/Service";
import Testimonials from "../Testimonials/Testimonials";

function Main() {

    return (
        <Router>
            <div className="Main">
                <Routes>
                    <Route path="/Hero" element={<Hero />} exact />
                    <Route path="/Features" element={<Features />} exact />
                    <Route path="/Service" element={<Service />} exact />
                    <Route path="/Testimonials" element={<Testimonials />} exact />
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
