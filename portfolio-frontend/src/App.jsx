import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import UserDataProvider from './context/UserContext';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/UserLogin';
import Home from './pages/home';
import Navigation from './components/Navigation';
import LowerHero from  './components/lowerhero';
import About from './about/about';
import WorkExperiences from './components/experiences/WorkExperiences';
import Contact from './components/contact/contact';
import Projects from './components/project/projects'
import Education from "./education/education";
import CustomCursor from './components/CustomCursor';

const App = () => {
    return (
        <UserDataProvider>
            <BrowserRouter>
                {/* CustomCursor should be outside Routes but inside BrowserRouter */}
                <CustomCursor />
                <Navigation />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} /> 
                    <Route path="/signup" element={<UserSignup />} />
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experiences" element={<WorkExperiences />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path="*" element={<Navigate to="/home" />} /> 
                </Routes>
            </BrowserRouter>
        </UserDataProvider>
    );
};

export default App;