import "@/App.css";
import { LangProvider } from "@/contexts/LangContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AlgorithmsIntro from "@/components/AlgorithmsIntro";
import AlgorithmSection from "@/components/AlgorithmSection";
import AllInOnePack from "@/components/AllInOnePack";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ALGORITHMS } from "@/data/algorithms";

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen scroll-smooth bg-[#0a0e14] font-body text-white antialiased selection:bg-[#e2f331] selection:text-black">
        <Header />
        <main>
          <Hero />
          <AlgorithmsIntro />
          {ALGORITHMS.map((algo, i) => (
            <AlgorithmSection key={algo.id} algo={algo} index={i} />
          ))}
          <AllInOnePack />
          <About />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

export default App;
