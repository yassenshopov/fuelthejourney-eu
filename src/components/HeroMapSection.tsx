"use client";

import Image from "next/image";

export default function HeroMapSection() {
  return (
    <section className="bg-white relative">
      {/* Container for the map image with max width */}
      <div className="max-w-[1025px] mx-auto bg-fuel-light-gray">
        <Image
          src="/images/map.jpg"
          alt="Europe Map showing Spain to Bulgaria journey"
          width={1920}
          height={600}
          className="w-full h-auto"
          priority
        />

        {/* Donate Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-8 w-fit h-fit">
          <Image
            src="/images/donate_button.png"
            alt="Donate Button"
            width={800}
            height={320}
            className="drop-shadow-lg rotate-3 animate-pulse cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{
              animation: 'gentle-bounce 3s ease-in-out infinite',
              width: 'auto',
              height: 'auto',
              maxWidth: '450px'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-bounce {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
