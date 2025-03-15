import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
    return (
        <div className="">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
