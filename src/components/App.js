import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Publications from './Publications';
import Sidebar from './Sidebar';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="container sections-wrapper py-5">
                <div className="row">
                    <div className="primary col-lg-8 col-12">
                        <AboutMe />
                        <Publications />
                    </div>
                    <div className="secondary col-lg-4 col-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;