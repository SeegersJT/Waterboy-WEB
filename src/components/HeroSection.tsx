
import { Button } from './ui/button';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-gradient-to-r from-waterboy-900/95 to-waterboy-800/95 -z-10"></div>
      
      {/* Inline CSS for a temporary blue water background pattern */}
      <div className="absolute inset-0 bg-[url('/waterboy-background.jpg')] bg-cover bg-center opacity-70 -z-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Clean Water Delivered To Your Doorstep
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up">
            WaterBoy delivers pure, fresh water straight to your home or office on a weekly schedule. 
            No more heavy containers to carry!
          </p>
          <div className="flex flex-col md:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            078 906 9543
          </h1>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowDownCircle className="animate-float" size={36} />
      </a>
    </section>
  );
}

export default HeroSection;
