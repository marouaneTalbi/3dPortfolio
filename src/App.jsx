import Projects from './components/Projects.jsx';
import About from './sections/About.jsx';
import WorkExperience from './sections/Experience.jsx';
import Navbar from './sections/Navbar.jsx';
import Welcom from './sections/Welcom.jsx';

const App = () => {
  return (
    <main className="max-w-full mx-auto relative">
      <Navbar />
      <Welcom />
      <About />
      <Projects />
     <WorkExperience />


    </main>
  );
};

export default App;
