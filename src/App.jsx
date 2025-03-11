import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
