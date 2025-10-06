import { DONATION_URL } from '@/config/constants';

export default function DonateSection() {
  return (
    <section id="donate" className="relative">
      {/* Blue background with title */}
      <div className="bg-fuel-blue px-4 py-20 md:px-8 md:py-24 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="fuel-title-pink-bold-italic text-3xl md:text-6xl absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 -ml-2 md:-ml-4 whitespace-nowrap">
            DONATE
          </h2>
        </div>
      </div>

      {/* Yellow background with content */}
      <div className="bg-fuel-yellow px-8 py-16 md:px-32 lg:px-48 xl:px-64">
        <div className="max-w-5xl mx-auto">
          {/* Content with text on left and button on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Text */}
            <div className="order-1">
              <div className="space-y-6">
                <p className="font-bebas font-bold text-lg md:text-xl lg:text-2xl leading-relaxed text-left text-fuel-black uppercase">
                  Подкрепете нашето пътуване до Барселона, за да стигнем до
                  сцената на ADCE Awards 2025.
                </p>

                <p className="font-bebas font-bold text-lg md:text-xl lg:text-2xl leading-relaxed text-left text-fuel-black uppercase">
                  Всеки ваш принос ни движи с още един километър напред!
                </p>
              </div>
            </div>

            {/* Right side - Donate Button */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
              <a
                href={DONATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button
                  className="bg-fuel-pink hover:bg-white border-4 border-fuel-black rounded-2xl px-12 py-6 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out relative"
                  style={{ boxShadow: '4px 4px 0px 0px #000000' }}
                >
                  <span className="font-bebas font-bold text-3xl md:text-4xl lg:text-5xl text-fuel-black uppercase">
                    DONATE!
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
