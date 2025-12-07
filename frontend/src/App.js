import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoShowcase from "./components/VideoShowcase";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Scheduler from "./components/Scheduler";
import Questionnaire from "./components/Questionnaire";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <VideoShowcase />
      <Services />
      <WhyChooseUs />
      <Scheduler />
      <Questionnaire />
      <Testimonials />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
