import './App.scss';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/NavBar/Navbar';
import Showcase from './components/Showcase/Showcase';
import Section from './components/Section/Section';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Section className="one-step" sectionType="one-step" />
      <Section className="strong-portfolio" sectionType="strong-portfolio" />
      <Section className="find-job" sectionType="find-job" />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
