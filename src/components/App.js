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
import './App.css';
import ToTheTop from './ToTheTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container-app">
              <Navbar id={'Navbar'} className="child-app" />
              <Hero id={'Hero'} className="child-app" />
              <Skills id={'Skills'} className="child-app" />
              <Projects id={'Projects'} className="child-app" />
              <About id={'About'} className="child-app" />
              <Contact id={'Contact'} className="child-app" />
              <Footer id={'Footer'} className="child-app" />
              <ToTheTop id={'ToTheTop'} className="child-app" />
            </div>
          }
        />
        <Route
          exact
          path="/thankyou"
          element={<Thankyou className="container-thankyou" />}
        />
        <Route path="*" element={<NotFound className="container-404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
