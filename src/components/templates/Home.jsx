import React, { useEffect, useState } from "react"
import Footer from "../molecules/Footer";
import Header from "../molecules/Header";
import Map from "../organisms/Map";

const Home = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        let $body = document.querySelector('body');
        $body.className = theme;
    });

    return (
        <div>
            <Header theme={theme} setTheme={setTheme} />
            <Map theme={theme} />
            <Footer />
        </div>
    );
}

export default Home

