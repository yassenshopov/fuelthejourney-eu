export default function ContactsSection() {
  return (
    <section id="contacts" className="relative">
      {/* Blue background with title */}
      <div className="bg-fuel-blue px-4 py-20 md:px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="fuel-title-pink-bold-italic text-6xl md:text-8xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            CONTACTS
          </h2>
        </div>
      </div>
      
      {/* Yellow background with content */}
      <div className="bg-fuel-yellow px-16 py-32 md:px-32 lg:px-48 xl:px-64">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Contact information */}
            <div className="space-y-4 text-center md:text-left">
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                MIRELA SLAVOVA 0878695591
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                DIMANA
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                CHAVDAR .... 07237198726
              </div>
            </div>
            
            {/* Right side - Roles */}
            <div className="flex flex-col justify-center space-y-2 text-center md:text-right">
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                DESIGNER
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                ACCOUNT
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black">
                DIRECTOR NOBLE GRAPHICS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
