import Hero from '../components/Hero';
import About from '../components/About';
import ThemeReveal from '../components/ThemeReveal';
import Speakers from '../components/Speakers';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <About />
      <ThemeReveal />
      <Speakers />
      <Contact />
    </div>
  );
};

export default Home;