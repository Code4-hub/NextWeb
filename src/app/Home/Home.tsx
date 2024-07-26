import { Hero } from "./components/Hero";
import { TextReveals } from "./components/TextReveal";
import { Services } from "./components/Services";
import { Navbar } from "../pageComponents/Navbar";
import { Footer } from "../pageComponents/Footer";
import { Concept } from "./components/Concept";
import { RecentWork } from "./components/RecentWork";
import { StartNow } from "./components/StartNow";

const Home = () => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <TextReveals />
      </div>
      <Services />
      <Concept />
      <RecentWork />
      <div className="container mx-auto px-4">
        <StartNow />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
