import './index.css'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import {Toaster} from "react-hot-toast"
const App = () => {
  
  return (
    <div className="relative z-0 bg-primary">
      <Toaster />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <div className="relative z-0">
      <Tech />
      <StarsCanvas />
      </div>
      <Works />
      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
