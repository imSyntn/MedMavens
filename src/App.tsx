import SmoothScroll from "./Utills/SmoothScrool";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Prediction from "./components/Prediction";
import VideoCall from "./components/VideoCall";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Prediction />
        <VideoCall />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </SmoothScroll>
  );
}

export default App;
