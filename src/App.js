import React from 'react';
import {Article, Brand, Feature, Navbar, CTA } from './components';
import {Blog,Features,Footer,Header,Possibility, WHATGPT3}  from './containers';

import './App.css';

const App = () => {

    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WHATGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
    </div>
    )
}

export default App
