import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@voilajsx/uikit/button';
import { Rocket, Star, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const text1 = "Innovate Boldly.";
  const text2 = "Build Brilliantly.";

  const heroImages = [
    'https://i.ibb.co/ccVp2T9S/office-building-construction-services-500x500.webp',
    'https://i.ibb.co/JwfrQtj1/green-retreats-showroom-cafe-and-breakout-area-7832.webp',
    'https://i.ibb.co/Hpz5tFpH/worldmap-blue-dark-earth-wallpaper-preview.jpg'
  ];

  useEffect(() => {
    let i = 0;
    const timer1 = setInterval(() => {
      if (i < text1.length) {
        setDisplayedText1(text1.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer1);
        setShowCursor1(false);
        setShowCursor2(true);

        // Start second line after a brief pause
        setTimeout(() => {
          let j = 0;
          const timer2 = setInterval(() => {
            if (j < text2.length) {
              setDisplayedText2(text2.substring(0, j + 1));
              j++;
            } else {
              clearInterval(timer2);
              setShowCursor2(false);
            }
          }, 100);
        }, 500);
      }
    }, 150);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 3000);

    return () => clearInterval(imageTimer);
  }, [heroImages.length]);

  return (
    <section className="relative overflow-hidden h-screen flex items-center">
      {/* Hero Background Images with Auto-Scroll */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 8, 25, 0.5)' }}></div>

      <div className="relative z-10 text-center py-20 px-6 w-full">
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold voila-heading min-h-[280px] md:min-h-[320px] lg:min-h-[360px]">
              <span className="text-white font-extrabold " style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(139, 92, 246, 0.6)'
              }}>
                {displayedText1}
                {showCursor1 && <span className="animate-pulse">|</span>}
              </span>
              <br />
              <span className="text-white font-extrabold" style={{
                textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(139, 92, 246, 0.6)'
              }}>
                {displayedText2}
                {showCursor2 && <span className="animate-pulse">|</span>}
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed voila-subheading" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(139, 92, 246, 0.5)'
            }}>
              Transforming Ideas into Digital Reality
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <Button
              size="lg"
              className="group px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-2xl transition-all duration-300 border-0 text-white"
              style={{
                background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(147, 51, 234))',
                boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.4)'
              }}
              asChild
            >
              <Link to="/contact">
                <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Talk to us
                <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-12 py-6 text-xl font-semibold border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-purple-900 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link to="/portfolio">
                <Star className="mr-3 h-6 w-6" />
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Vivid Purple floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'rgba(139, 92, 246, 0.15)' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-2xl animate-pulse delay-700" style={{ backgroundColor: 'rgba(147, 51, 234, 0.15)' }}></div>
      <div className="absolute top-1/2 right-20 w-20 h-20 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(139, 92, 246, 0.12)' }}></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;