import ChatBots from "@/components/home/chatbots";
import Footer from "@/components/home/footer";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import OpenSource from "@/components/home/open-source";
import Pricing from "@/components/home/pricing";
import Testimonials from "@/components/home/testimonials";
import UsageSteps from "@/components/home/usage-steps";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <UsageSteps />
      <ChatBots />
      <Testimonials />
      <Pricing />
      <OpenSource />
      <Footer />
    </>
  );
};
export default HomePage;
