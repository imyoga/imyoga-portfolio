import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Thankyou from './Thankyou';
import NotFound from './NotFound';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import ToTheTop from './ToTheTop';
import LightMode from './LightMode';
import '../styles/App.css';

function App() {
  const [theme, setTheme] = useState('');

  console.log(theme);

  const pull_data = (data) => {
    setTheme(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={theme ? `container-app ${"light-theme"}` : `container-app`}>
              <Navbar id={'Navbar'} className="child-app" />
              <Hero id={'Hero'} className="child-app" />
              <Skills id={'Skills'} className="child-app" />
              <Projects id={'Projects'} className="child-app" />
              <About id={'About'} className="child-app" />
              <Contact id={'Contact'} className="child-app" />
              <Footer id={'Footer'} className="child-app" />
              <ToTheTop id={'ToTheTop'} className="child-app" />
              <LightMode id={'LightMode'} className="child-app" func={pull_data} />
            </div>
          }
        />
        <Route
          exact
          path="/thankyou"
          element={<Thankyou className={`container-thankyou ${"light-theme"}`} />}
        />
        <Route path="*" element={<NotFound className={``} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
