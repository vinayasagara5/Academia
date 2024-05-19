import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero.jsx";
import Programs from "./components/programs/Programs.jsx";
import Title from "./components/title/Title.jsx";
import About from "./components/about/About.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";

import Contact from "./components/contact/Contact.jsx";
import Campus from "./components/campus/Campus.jsx";
import VideoPlayer from "./components/videoplayer/VideoPlayer.jsx";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="OUR PROGRAM" subTitle="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />|
        <Title subTitle="Campus Photos" title="Gallery" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
