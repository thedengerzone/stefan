import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {ProductPage} from "./pages/ProductPage";

function App() {
    return (
        <Routes>
            <Route path={"/product/:id"} element={<ProductPage/>}/>
            <Route index element={<Home/>}/>
        </Routes>
    )
}

export default App;
