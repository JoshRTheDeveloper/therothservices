// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/nav';
import Hero from './components/Hero/hero';
import Pricing from './components/pricing/services';
import Form from './components/Form/form';
import Subpage from './pages/portfolio/portfolio';
import './App.css'; // Import the CSS for styling

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={
                    <main>
                        <Hero />
                        <Pricing />
                        <Form />
                    </main>
                } />
                <Route path="/portfolio" element={<Subpage />} />
            </Routes>
        </Router>
    );
}

export default App;