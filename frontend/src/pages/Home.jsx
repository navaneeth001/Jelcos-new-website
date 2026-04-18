import React from 'react';
import Hero from '../components/Hero';
import VideoShowcase from '../components/VideoShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <VideoShowcase />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
};

export default Home;
