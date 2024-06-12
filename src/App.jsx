import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<h1>Hello</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
