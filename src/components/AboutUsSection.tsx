import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about" className="relative">
      {/* Blue background with title */}
      <div className="bg-fuel-blue px-4 py-20 md:px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="fuel-title-pink-bold-italic text-3xl md:text-6xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 -ml-2 md:-ml-4 whitespace-nowrap">
            ABOUT US
          </h2>
        </div>
      </div>

      {/* Yellow background with content */}
      <div className="bg-fuel-yellow px-8 py-16 md:px-32 lg:px-48 xl:px-64">
        <div className="max-w-5xl mx-auto">
          {/* First mini section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left side - Text */}
            <div className="order-2 lg:order-1">
              <p className="text-base md:text-2xl lg:text-3xl leading-relaxed text-left text-fuel-black font-bebas font-bold uppercase">
                Аз съм студент по графичен дизайн, но винаги гледам отвъд
                визуалното. В The Green Team на Noble Graphics експериментирам с
                идеи и естетика, превръщайки ги в реклама, която въздейства и
                остава в съзнанието.
              </p>
            </div>

            {/* Right side - Image with name */}
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end">
              <div className="w-48 aspect-[3/4] md:w-86 md:h-128 border-6 border-fuel-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image
                  src="/images/mirela.JPG"
                  alt="Мирела Славова"
                  width={344}
                  height={512}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-fuel-black font-bebas font-bold uppercase">
                Мирела Славова
              </p>
            </div>
          </div>

          {/* Second mini section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Image with name */}
            <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start">
              <div className="w-48 aspect-[3/4] md:w-86 md:h-128 border-6 border-fuel-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                <Image
                  src="/images/dimana.jpg"
                  alt="Димана Шопова"
                  width={344}
                  height={512}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <p className="mt-4 text-lg md:text-xl lg:text-2xl text-fuel-black font-bebas font-bold uppercase">
                Димана Шопова
              </p>
            </div>

            {/* Right side - Text */}
            <div className="order-2 lg:order-2">
              <p className="text-base md:text-2xl lg:text-3xl leading-relaxed text-left text-fuel-black font-bebas font-bold uppercase">
                Аз съм студент по реклама с интерес към стратегическата страна
                на индустрията. В Noble Graphics уча как идеите и брандовете
                намират своята &ldquo;златна среда&rdquo; - пътя от концепция до
                реалност.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
