import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Contact from "./components/contact/Contact";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Section2/>
    </section>
    <section id="About">
      <Section3/>
    </section>
    <section id="Contact">
      <Contact />
    </section>
  </div>;
};

export default App;
