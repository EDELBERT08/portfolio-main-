import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Navbar from "./components/NavBar";

const App = () => (
  <main className="max-w-7xl mx-auto overflow-x-hidden">
    <Navbar />
    <Hero />
    <Projects />
    <Certificates />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </main>
);

export default App;
