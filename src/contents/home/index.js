import React from "react";
import AutomationSmsServiceSection from "./AutomationSmsServiceSection";
import CarouselArticle from "./CarouselArticle";
import Easy3StepSetup from "./Easy3StepSetup";
import Features from "./Features";
import HowUseAutomatedSMS from "./HowUseAutomatedSMS";
import SmsHelpWays from "./SmsHelpWay";
import WaysToUse from "./Waystouse";
import WhyMessageMedia from "./WhyMessageMedia";

function Home() {
  return (
    <>
      <AutomationSmsServiceSection/>
      <Features/>
      <SmsHelpWays/>
      <WaysToUse/>
      <HowUseAutomatedSMS/>
      <WhyMessageMedia/>
      <CarouselArticle/>
      <Easy3StepSetup/>
    </>
    
  )
}

export default Home;