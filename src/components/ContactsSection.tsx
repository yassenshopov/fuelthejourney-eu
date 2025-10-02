export default function ContactsSection() {
  return (
    <section id="contacts" className="relative">
      {/* Blue background with title */}
      <div className="bg-fuel-blue px-4 py-20 md:px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="fuel-title-pink-bold-italic text-4xl md:text-8xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 -ml-2 md:-ml-4">
            CONTACTS
          </h2>
        </div>
      </div>

      {/* Yellow background with content */}
      <div className="bg-fuel-yellow px-8 py-32 md:px-32 lg:px-48 xl:px-64">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {/* Contact 1 */}
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-left uppercase">
                Mirela Slavova 0878695591
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-right uppercase">
                Designer
              </div>
            </div>

            {/* Contact 2 */}
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-left uppercase">
                Dimana
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-right uppercase">
                Account
              </div>
            </div>

            {/* Contact 3 */}
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-left uppercase">
                Chavdar .... 07237198726
              </div>
              <div className="font-bebas font-bold text-xl md:text-2xl lg:text-3xl text-fuel-black md:text-right uppercase">
                Director Noble Graphics
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
