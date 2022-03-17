import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Header from "./component/Header/Header";
import Nav from "./component/Nav/Nav";
import Services from "./component/Services/Services";
import Testimonials from "./component/Testimonials/Testimonials";
import Portfolio from './component/Portfolio/Portfolio'
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services />
      <Portfolio />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
