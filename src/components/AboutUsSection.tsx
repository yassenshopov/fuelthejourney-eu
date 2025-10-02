export default function AboutUsSection() {
  return (
    <section id="about" className="relative">
      {/* Blue background with title */}
      <div className="bg-fuel-blue px-4 py-20 md:px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="fuel-title-pink-bold-italic text-4xl md:text-8xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 -ml-2 md:-ml-4">
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
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR 
                INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD 
                EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
              </p>
            </div>
            
            {/* Right side - Pink square placeholder */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-48 aspect-[3/4] md:w-86 md:h-128 bg-fuel-pink border-6 border-fuel-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
            </div>
          </div>
          
          {/* Second mini section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Pink square placeholder */}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-start">
              <div className="w-48 aspect-[3/4] md:w-86 md:h-128 bg-fuel-pink border-6 border-fuel-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"></div>
            </div>
            
            {/* Right side - Text */}
            <div className="order-2 lg:order-2">
              <p className="text-base md:text-2xl lg:text-3xl leading-relaxed text-left text-fuel-black font-bebas font-bold uppercase">
                EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA 
                DESERUNT MOLLIT ANIM ID EST LABORUM. SED UT PERSPICIATIS UNDE OMNI ISTE NATUS 
                ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
