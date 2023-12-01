import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import OurProducts from "./components/OurProducts/OurProducts";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
    const [page, setPage] = useState<string>("Home");

    return (
        <div className="container App" style={{width: "1300px"}}>
            <Header setPage={setPage}/>
            {page === "Home" && <Home setPage={setPage}/>}
            {page === "AboutUs" && <AboutUs/>}
            {page === "OurProducts" && <OurProducts/>}
            {page === "ContactUs" && <ContactUs/>}
            <Footer setPage={setPage}/>
        </div>
    );
}

export default App;
