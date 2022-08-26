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
              <Navbar id={'Navbar'} />
              <Hero id={'Hero'} />
              <Skills id={'Skills'} />
              <Projects id={'Projects'} />
              <About id={'About'} />
              <Contact id={'Contact'} />
              <Footer id={'Footer'} />
              <ToTheTop id={'ToTheTop'} />
            </div>
          }
        />
        <Route exact path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
