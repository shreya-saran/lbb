import Navbar from "../components/Navbar"; 
import Hero from "../components/Home/Hero"; 
import CompanyLogo from "../components/Home/CompanyLogo"; 
import PurposeSection from "../components/Home/PurposeSection"; 
import FeaturesSection from "../components/Home/FeaturesSection"; 
import Footer from "../components/Home/Footer"; 

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background glow */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
