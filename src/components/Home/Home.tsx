import React from "react";
import Header from "../Header";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "../Footer";
import WhyUs from "./WhyUs";
import GetStarted from "./GetStarted";

function Home() {
  return (
    <>
      <div className="mx-auto bg-white max-w-[840px] p-5">
        <Header />
        <p className="text-[#666666] my-4 leading-[1.6]">
          Unlock the Power of Precision Trading with the Telegram Signal
          Generator (TSG). Our cutting-edge, managed service is designed to
          elevate your trading game, providing you with real-time, accurate
          signals directly within your Telegram.
        </p>
        <Features />
        <Pricing />
        <WhyUs />
        <GetStarted />
      </div>
      <Footer />
    </>
  );
}

export default Home;
