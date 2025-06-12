export const slides = [
  // Slide 1: Title Slide
  <div
    key="1"
    className="text-center w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 py-8"
  >
    {/* Geometric Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 right-8 sm:top-20 sm:right-32 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-pink-500/10 to-rose-600/10 transform rotate-45"></div>
      <div className="absolute bottom-20 left-4 sm:bottom-40 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-teal-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-pink-500 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 sm:w-6 sm:h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute top-1/2 right-4 sm:right-10 w-1 h-8 sm:w-2 sm:h-16 bg-pink-500"></div>
    </div>

    {/* Main Content */}
    <div className="z-10 max-w-5xl px-4 sm:px-8">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tight leading-tight">
          TIKTOK SHOP
        </h1>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto mb-6 sm:mb-8"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 mb-8 sm:mb-12 tracking-wide">
          IN ARGENTINA
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
          Your Strategic Partner for a Successful Launch
        </h3>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Facilitating the Connection Between Creators, Brands, and Consumers in
          the TikTok Ecosystem
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="absolute bottom-4 right-4 sm:bottom-12 sm:right-12 z-10">
      <div className="text-right">
        <p className="text-pink-400 font-semibold text-sm sm:text-lg">
          www.sozial.ar
        </p>
        <p className="text-gray-400 text-xs sm:text-sm">Ready to Launch</p>
      </div>
    </div>
  </div>,

  // Slide 2: Introduction - The TikTok Shop Opportunity in Argentina
  <div
    key="2"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-3 h-3 sm:w-6 sm:h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-6 sm:w-2 sm:h-12 bg-pink-500"></div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
          THE TIKTOK SHOP
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto mb-4"></div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 tracking-wide">
          OPPORTUNITY IN ARGENTINA
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
        <div className="space-y-6 sm:space-y-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-white text-sm sm:text-xl">🚀</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                The Power of TikTok in Argentina
              </h3>
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              A vibrant ecosystem with millions of active users, driven by
              short-form video content.
            </p>
          </div>
        </div>
        <div className="space-y-6 sm:space-y-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                <span className="text-white text-sm sm:text-xl">🇦🇷</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                Why Argentina?
              </h3>
            </div>
            <ul className="text-base sm:text-lg text-gray-300 space-y-3 sm:space-y-4 leading-relaxed list-none">
              <li className="flex items-start">
                <span className="font-bold mr-3 text-pink-400 text-xs sm:text-base">
                  •
                </span>
                An expanding digital market with high smartphone penetration
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3 text-pink-400 text-xs sm:text-base">
                  •
                </span>
                An active consumer culture eager for new shopping experiences
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 3: Our Value Proposition
  <div
    key="3"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-8 right-12 sm:top-16 sm:right-24 w-20 h-20 sm:w-40 sm:h-40 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-16 left-8 sm:bottom-32 sm:left-16 w-12 h-12 sm:w-24 sm:h-24 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/5 w-3 h-3 sm:w-6 sm:h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-10 sm:w-3 sm:h-20 bg-pink-500"></div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
          OUR VALUE
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto mb-4"></div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 tracking-wide">
          PROPOSITION
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-pink-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-lg sm:text-2xl">🎯</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Your Success is Our Goal
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            We become your local extension, minimizing risks and accelerating
            TikTok Shop's adoption in Argentina.
          </p>
        </div>
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          style={{ borderColor: "#2a8cae" }}
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mr-3 sm:mr-4"
              style={{
                background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              }}
            >
              <span className="text-lg sm:text-2xl">🌐</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              360° Comprehensive Consulting
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            We cover all critical areas for operating an e-commerce platform in
            a new market.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-lg sm:text-2xl">🧠</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Deep Local Expertise
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            We possess knowledge of the market, regulations, and culture in
            Argentina—key factors for successful implementation.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-lg sm:text-2xl">📈</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Results-Oriented Approach
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300">
            Our service aims to optimize processes, reduce costs, and maximize
            TikTok Shop's traction and sales.
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 4: Pillar 1: Technical and Infrastructure Consulting
  <div
    key="4"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-16 sm:top-20 sm:left-32 w-24 h-24 sm:w-48 sm:h-48 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-12 right-10 sm:bottom-24 sm:right-20 w-16 h-16 sm:w-32 sm:h-32 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-8 sm:w-2 sm:h-16 bg-pink-500"></div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <div className="relative inline-block mb-4 sm:mb-6">
          <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            01
          </span>
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-6 sm:h-6 bg-pink-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Technical and Infrastructure Consulting
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-white text-sm sm:text-xl">🏗️</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Local Architecture Design
            </h3>
          </div>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Consulting on technological infrastructure to scale TikTok Shop
                in Argentina
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Optimizing UX/UI for local connectivity and device specificities
              </span>
            </li>
          </ul>
        </div>
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ borderColor: "#2a8cae" }}
        >
          <div className="flex items-center mb-4">
            <div
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mr-3 sm:mr-4"
              style={{
                background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              }}
            >
              <span className="text-white text-sm sm:text-xl">🔗</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Existing System Integration
            </h3>
          </div>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Support for integration with TikTok's internal systems
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Design and implementation of APIs and connectors
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-white text-sm sm:text-xl">⚡</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Performance Optimization
            </h3>
          </div>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Analysis for loading speed, stability, and scalability
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Continuous monitoring and proactive technical support
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-white text-sm sm:text-xl">🔒</span>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Cybersecurity & Data Protection
            </h3>
          </div>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Best practices and local regulations compliance
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Transaction security and user information privacy protocols
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 5: Pillar 2: Integration with Local Payment Gateways
  <div
    key="5"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-12 right-8 sm:top-24 sm:right-16 w-28 h-28 sm:w-56 sm:h-56 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-10 left-12 sm:bottom-20 sm:left-24 w-14 h-14 sm:w-28 sm:h-28 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 sm:w-5 sm:h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-9 sm:w-3 sm:h-18 bg-pink-500"></div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <div className="relative inline-block mb-4 sm:mb-6">
          <span
            className="text-4xl sm:text-6xl md:text-8xl font-black"
            style={{
              background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            02
          </span>
          <div
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-6 sm:h-6 rounded-full opacity-60"
            style={{
              background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
            }}
          ></div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Integration with Local Payment Gateways
        </h2>
        <div
          className="w-16 sm:w-24 h-1 mx-auto rounded-full"
          style={{
            background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Payment Methods Analysis
          </h3>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Study of preferred payment methods by Argentine consumers:
          </p>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Credit and debit cards
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">Bank transfers</span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">Digital wallets</span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Cash payments (Pago Fácil/Rapipago)
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Direct Implementation
          </h3>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 list-none">
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Technical support for integration and configuration
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Secure, fast, and frictionless payment process
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Conversion Optimization
          </h3>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 list-none">
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Negotiation of commission rates with providers
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Strategies to reduce cart abandonment
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Security Compliance
          </h3>
          <ul className="text-gray-300 space-y-2 sm:space-y-3 list-none">
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                PCI DSS certification assistance
              </span>
            </li>
            <li className="flex items-start">
              <span
                className="font-bold mr-2 sm:mr-3 text-xs sm:text-base"
                style={{ color: "#2a8cae" }}
              >
                •
              </span>
              <span className="text-sm sm:text-base">
                Local banking regulations compliance
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 6: Pillar 3: Legal and Regulatory Assistance
  <div
    key="6"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-8 left-10 sm:top-16 sm:left-20 w-22 h-22 sm:w-44 sm:h-44 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-14 right-12 sm:bottom-28 sm:right-24 w-18 h-18 sm:w-36 sm:h-36 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-2/3 right-1/4 w-2 h-2 sm:w-4 sm:h-4 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-7 sm:w-2 sm:h-14 bg-pink-500"></div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <div className="relative inline-block mb-4 sm:mb-6">
          <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            03
          </span>
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-6 sm:h-6 bg-purple-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Legal and Regulatory Assistance
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            E-commerce Legal Framework
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Comprehensive advice on applicable e-commerce laws and regulations
            in Argentina (Consumer Protection Law, Fair Trade Law, etc.)
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Terms and Conditions of Service
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Drafting and adapting Terms and Conditions of Use for TikTok Shop,
            privacy policies and personal data processing compliance
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Consumer and Seller Rights
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Consulting on rights and obligations in e-commerce context (return
            policies, warranties, right of withdrawal)
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Advertising and Promotional Aspects
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Review of marketing campaigns and promotional content to ensure
            compliance with advertising regulations
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 7: Pillar 4: Accounting and Tax Advisory
  <div
    key="7"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 right-14 sm:top-20 sm:right-28 w-26 h-26 sm:w-52 sm:h-52 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-12 left-10 sm:bottom-24 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-3 h-3 sm:w-5 sm:h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-8 sm:w-3 sm:h-16 bg-pink-500"></div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <div className="relative inline-block mb-4 sm:mb-6">
          <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            04
          </span>
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-6 sm:h-6 bg-teal-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Accounting and Tax Advisory
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Local Tax Structure
          </h3>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">
            Analysis of Argentine tax system:
          </p>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-teal-400 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                VAT, Gross Income, Income Tax
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2 sm:mr-3 text-teal-400 text-xs sm:text-base">
                •
              </span>
              <span className="text-sm sm:text-base">
                Tax optimization strategies
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            AFIP Regulatory Compliance
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Guidance for compliance with Federal Public Revenue Administration
            obligations and reporting regimes
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Invoicing and Electronic Receipts
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Requirements for electronic invoices and receipts, integration with
            local invoicing systems
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Withholdings and Perceptions
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Management of tax withholdings applicable to transactions, avoiding
            tax contingencies
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Cultural Localization
  <div
    key="8"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-8 sm:mb-16">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
          05
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 mt-4">
          Cultural Localization
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Text Adaptation and Tone of Voice
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Review and adaptation of all platform content to sound authentic and
            familiar to Argentines
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Local Language Management
          </h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Integration of Argentine expressions, slang, and modisms to create
            authenticity
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: Content Strategy
  <div
    key="9"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-5xl mx-auto z-10 text-center">
      <div className="mb-8 sm:mb-16">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
          06
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
          Content Strategy
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Live Shopping
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Best practices for live selling
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Creator Training
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Influencer and SME training
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Talent Network
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Direct relationships with top influencers
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 10: Logistics
  <div
    key="10"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-5xl mx-auto z-10 text-center">
      <div className="mb-8 sm:mb-16">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
          07
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
          Logistics Optimization
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Fulfillment Solutions
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Consulting on Argentine logistics infrastructure
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
            Returns Management
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Efficient stock management processes
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 11: Market Analytics
  <div
    key="11"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-5xl mx-auto z-10 text-center">
      <div className="mb-8 sm:mb-16">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
          08
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
          Market Analytics
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
            Competitive Analysis
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Detailed study of e-commerce landscape
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
            Consumer Studies
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Research on Argentine shopping habits
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4">
            Performance Metrics
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Custom data dashboards for KPIs
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 12: User Support
  <div
    key="12"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-5xl mx-auto z-10 text-center">
      <div className="mb-8 sm:mb-16">
        <span className="text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
          09
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 mt-4">
          User Support
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
            Customer Service
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Customer service model adapted to Argentine culture
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white">
            Trust Building
          </h3>
          <p className="text-sm sm:text-base text-gray-300">
            Comprehensive trust-building strategies
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 13: Next Steps
  <div
    key="13"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center"
  >
    <div className="max-w-4xl mx-auto z-10 text-center">
      <div className="mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
          NEXT STEPS
        </h2>
        <div className="w-16 sm:w-24 h-1 bg-pink-500 mx-auto"></div>
      </div>
      <div className="space-y-6 sm:space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
            Strategic Meeting
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Let's delve deeper into the TikTok Shop launch details
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
            Customized Action Plan
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Develop a roadmap tailored to TikTok's needs
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 14: Thank You and Contact
  <div
    key="14"
    className="text-center w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden px-4 py-8"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-xl"></div>
      <div className="absolute bottom-16 right-16 sm:bottom-32 sm:right-32 w-16 h-16 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-400 to-teal-400 blur-xl"></div>
    </div>

    <div className="mb-8 sm:mb-16 z-10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-6 sm:mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        Thank You!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 max-w-2xl leading-relaxed px-4">
        Ready to launch TikTok Shop in Argentina together
      </p>
      <div className="w-16 sm:w-32 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mt-4 sm:mt-6 rounded-full"></div>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-white/20 max-w-2xl shadow-2xl z-10 w-full mx-4">
      <div className="space-y-4 sm:space-y-6 text-base sm:text-xl">
        <div className="bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
          <p className="text-center mb-4">
            <span className="font-bold">Alan Giojelli</span> - CTO
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/60 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-lg sm:text-xl">📞</span>
              </div>
              <p className="text-sm sm:text-lg" style={{ color: "#2a8cae" }}>
                +54911 3465 5186
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/60 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-lg sm:text-xl">✉️</span>
              </div>
              <p className="text-sm sm:text-lg" style={{ color: "#2a8cae" }}>
                alangio@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 sm:pt-6 border-t border-white/20">
          <div className="text-center">
            <p
              className="text-lg sm:text-xl md:text-2xl font-bold"
              style={{ color: "#2a8cae" }}
            >
              <a
                href="https://www.sozial.ar"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.sozial.ar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>,
];
