import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Thankyou from './Thankyou';
import NotFound from './NotFound';
import Contact from './Contact';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import './App.css';

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
              <About id={'About'} />
              <Skills id={'Skills'} />
              <Projects id={'Projects'} />
              <Contact id={'Contact'} />
              <Footer id={'Footer'} />
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
