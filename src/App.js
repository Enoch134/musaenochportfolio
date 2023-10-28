import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="text-gray-400 bg-gray-900 body-font">
       <main>
        <Navbar/>
        <About/>
        <Projects/>
        <Skills/>
        <Testimonials/>
        <Contacts/>
       </main>
    </div>
  );
}

export default App;
