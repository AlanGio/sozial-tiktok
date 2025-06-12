export const slides = [
  // Slide 1: Title Slide
  <div
    key="1"
    className="text-center w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden"
  >
    {/* Geometric Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-32 w-64 h-64 bg-gradient-to-br from-pink-500/10 to-rose-600/10 transform rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-teal-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-pink-500 transform rotate-45"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute top-1/2 right-10 w-2 h-16 bg-pink-500"></div>
    </div>

    {/* Logo Section */}
    <div className="absolute top-12 left-12 flex items-center z-10">
      <div className="w-32 h-12 flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-10 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-lg font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    {/* Main Content */}
    <div className="z-10 max-w-5xl px-8">
      <div className="mb-8">
        <h1 className="text-9xl font-black text-white mb-4 tracking-tight leading-tight">
          TIKTOK SHOP
        </h1>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
        <h2 className="text-4xl font-light text-gray-200 mb-12 tracking-wide">
          IN ARGENTINA
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-4">
          Your Strategic Partner for a Successful Launch
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Facilitating the Connection Between Creators, Brands, and Consumers in
          the TikTok Ecosystem
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="absolute bottom-12 right-12 z-10">
      <div className="text-right">
        <p className="text-pink-400 font-semibold text-lg">www.sozial.ar</p>
        <p className="text-gray-400 text-sm">Ready to Launch</p>
      </div>
    </div>
  </div>,

  // Slide 2: Introduction - The TikTok Shop Opportunity in Argentina
  <div
    key="2"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-12 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black mb-4 text-white tracking-tight">
          THE TIKTOK SHOP
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-4"></div>
        <h3 className="text-2xl font-light text-gray-300 tracking-wide">
          OPPORTUNITY IN ARGENTINA
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg h-full">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Power of TikTok in Argentina
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              A vibrant ecosystem with millions of active users, driven by
              short-form video content.
            </p>
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-white text-xl">🇦🇷</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Why Argentina?</h3>
            </div>
            <ul className="text-lg text-gray-300 space-y-4 leading-relaxed">
              <li className="flex items-start">
                <span className="font-bold mr-3 text-pink-400">•</span>
                An expanding digital market with high smartphone penetration
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-3 text-pink-400">•</span>
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
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-16 right-24 w-40 h-40 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-20 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-black mb-4 text-white tracking-tight">
          OUR VALUE
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-4"></div>
        <h3 className="text-2xl font-light text-gray-300 tracking-wide">
          PROPOSITION
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Your Success is Our Goal
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            We become your local extension, minimizing risks and accelerating
            TikTok Shop's adoption in Argentina.
          </p>
        </div>
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
          style={{ borderColor: "#2a8cae" }}
        >
          <div className="flex items-center mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mr-4"
              style={{
                background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              }}
            >
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              360° Comprehensive Consulting
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            We cover all critical areas for operating an e-commerce platform in
            a new market.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Deep Local Expertise
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
            We possess knowledge of the market, regulations, and culture in
            Argentina—key factors for successful implementation.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mr-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              Results-Oriented Approach
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-300">
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
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-32 w-48 h-48 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-24 right-20 w-32 h-32 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-16 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            01
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Technical and Infrastructure Consulting
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">🏗️</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Local Architecture Design
            </h3>
          </div>
          <ul className="text-gray-300 space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-pink-400">•</span>
              Consulting on technological infrastructure to scale TikTok Shop in
              Argentina
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-pink-400">•</span>
              Optimizing UX/UI for local connectivity and device specificities
            </li>
          </ul>
        </div>
        <div
          className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ borderColor: "#2a8cae" }}
        >
          <div className="flex items-center mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
              style={{
                background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              }}
            >
              <span className="text-white text-xl">🔗</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Existing System Integration
            </h3>
          </div>
          <ul className="text-gray-300 space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Support for integration with TikTok's internal systems
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Design and implementation of APIs and connectors
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Performance Optimization
            </h3>
          </div>
          <ul className="text-gray-300 space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-purple-400">•</span>Analysis
              for loading speed, stability, and scalability
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-purple-400">•</span>
              Continuous monitoring and proactive technical support
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white text-xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Cybersecurity & Data Protection
            </h3>
          </div>
          <ul className="text-gray-300 space-y-3 leading-relaxed list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-emerald-400">•</span>Best
              practices and local regulations compliance
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-emerald-400">•</span>
              Transaction security and user information privacy protocols
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 5: Pillar 2: Integration with Local Payment Gateways
  <div
    key="5"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-24 right-16 w-56 h-56 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-20 left-24 w-28 h-28 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-18 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-6xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span
            className="text-8xl font-black"
            style={{
              background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            02
          </span>
          <div
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60"
            style={{
              background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
            }}
          ></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Integration with Local Payment Gateways
        </h2>
        <div
          className="w-24 h-1 mx-auto rounded-full"
          style={{
            background: "linear-gradient(135deg, #2a8cae 0%, #1e6b8c 100%)",
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Payment Methods Analysis
          </h3>
          <p className="text-gray-300 mb-4">
            Study of preferred payment methods by Argentine consumers:
          </p>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Credit and debit cards
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Bank transfers
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Digital wallets
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Cash payments (Pago Fácil/Rapipago)
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Direct Implementation
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Technical support for integration and configuration
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Secure, fast, and frictionless payment process
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Conversion Optimization
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Negotiation of commission rates with providers
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Strategies to reduce cart abandonment
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Fraud Management
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Tools and protocols for fraud prevention
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Chargeback and payment dispute handling
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 6: Pillar 3: Legal and Regulatory Assistance
  <div
    key="6"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-16 left-20 w-44 h-44 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-28 right-24 w-36 h-36 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-14 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            03
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Legal and Regulatory Assistance
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            E-commerce Legal Framework
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Comprehensive advice on applicable e-commerce laws and regulations
            in Argentina (Consumer Protection Law, Fair Trade Law, etc.)
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Terms and Conditions of Service
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Drafting and adapting Terms and Conditions of Use for TikTok Shop,
            privacy policies and personal data processing compliance
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Consumer and Seller Rights
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Consulting on rights and obligations in e-commerce context (return
            policies, warranties, right of withdrawal)
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Advertising and Promotional Aspects
          </h3>
          <p className="text-gray-300 leading-relaxed">
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
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-28 w-52 h-52 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-24 left-20 w-32 h-32 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-16 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
            04
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Accounting and Tax Advisory
        </h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Local Tax Structure
          </h3>
          <p className="text-gray-300 mb-4">
            Analysis of Argentine tax system:
          </p>
          <ul className="text-gray-300 space-y-2 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-teal-400">•</span>
              VAT, Gross Income, Income Tax
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-teal-400">•</span>
              Tax optimization strategies
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            AFIP Regulatory Compliance
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Guidance for compliance with Federal Public Revenue Administration
            obligations and reporting regimes
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Invoicing and Electronic Receipts
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Requirements for electronic invoices and receipts, integration with
            local invoicing systems
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Withholdings and Perceptions
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Management of tax withholdings applicable to transactions, avoiding
            tax contingencies
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Pillar 5: Cultural and Linguistic Localization Consulting
  <div
    key="8"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-24 left-16 w-48 h-48 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/2 left-1/4 w-2 h-12 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            05
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Cultural and Linguistic Localization
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Text Adaptation and Tone of Voice
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Review and adaptation of all platform content to sound authentic
                and familiar to Argentines, ensuring approachable, dynamic, and
                engaging yet trustworthy communication
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Local Language and Modism Management
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Integration of Argentine expressions, slang, and modisms to
                create authenticity while avoiding forced translations or
                negative connotations
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Cultural Sensitivity and Social Context
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Advising on local holidays, humor, and references that resonate
                with Argentine culture, ensuring culturally appropriate
                marketing content
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-3 h-3 bg-orange-500 rounded-full mt-3"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Content Optimization for Argentine Audiences
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Recommendations on humor, pop culture references, and
                conversation topics that generate engagement with local
                audiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 9: Pillar 6: Content and Creator Strategy
  <div
    key="9"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-24 w-60 h-60 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-16 left-16 w-36 h-36 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-20 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 bg-gradient-to-r  rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
            06
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Content and Creator Strategy
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Live Shopping Consulting
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-pink-400">•</span>
              Best practices for live selling
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-pink-400">•</span>
              Viral content formats
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-pink-400">•</span>
              Consumer trend identification
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Creator Training Program
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-purple-400">•</span>
              Influencer and SME training
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-purple-400">•</span>
              Store setup coaching
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-purple-400">•</span>
              Analytics tools usage
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Key Talent Network
          </h3>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Direct relationships with top influencers
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Launch and growth activation
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Category-specific creator matching
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 10: Pillar 7: Logistics Optimization and Seller Experience
  <div
    key="10"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-16 left-24 w-50 h-50 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-20 right-16 w-42 h-42 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-2/3 right-1/3 w-5 h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-18 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
            07
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Logistics Optimization and Seller Experience
        </h2>
        <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Integrated Fulfillment Solutions
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Consulting on Argentine logistics infrastructure, including
            partnerships with major courier operators and last-mile services
          </p>
          <p className="text-gray-300 leading-relaxed">
            Route optimization and delivery time recommendations,
            pickup/drop-off point management
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Inventory and Returns Management
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Efficient stock management processes and clear system for handling
            returns, refunds, and exchanges
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Seller Onboarding Support
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Comprehensive resource center with FAQs, tutorials, and interactive
            guides for platform onboarding
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 11: Pillar 8: Market Insights and Data Analytics
  <div
    key="11"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-24 right-20 w-54 h-54 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-24 left-24 w-38 h-38 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/2 right-1/3 w-3 h-14 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
            08
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          Market Insights and Data Analytics
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🔍</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Competitive Analysis
            </h3>
          </div>
          <p className="text-gray-300 text-center leading-relaxed">
            Detailed study of e-commerce landscape, analyzing key competitors
            like Mercado Libre and Tienda Nube
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">👥</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Consumer Studies
            </h3>
          </div>
          <p className="text-gray-300 text-center leading-relaxed">
            Research on Argentine online shopping habits, preferences, and
            purchasing decision factors
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">📊</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              Performance Metrics
            </h3>
          </div>
          <p className="text-gray-300 text-center leading-relaxed">
            Custom data dashboards for monitoring KPIs and identifying
            optimization opportunities
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 12: Pillar 9: User Support and Consumer Trust
  <div
    key="12"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-48 h-48 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-20 right-28 w-40 h-40 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-16 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-5xl mx-auto z-10">
      <div className="text-center mb-16">
        <div className="relative inline-block mb-6">
          <span className="text-8xl font-black bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
            09
          </span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 rounded-full opacity-60"></div>
        </div>
        <h2 className="text-5xl font-bold tracking-tight text-white mb-4">
          User Support and Consumer Trust
        </h2>
        <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Customer Service Protocol
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Developing a customer service model adapted to Argentine culture,
            including:
          </p>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3 text-rose-400">•</span>
              Communication tone alignment with local preferences
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-rose-400">•</span>
              Preferred communication channels
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3 text-rose-400">•</span>
              Efficient resolution of inquiries and complaints
            </li>
          </ul>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Trust and Security Building
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Implementing comprehensive trust-building strategies:
          </p>
          <ul className="text-gray-300 space-y-3 list-none">
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Buyer and seller protection policies
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Robust rating and review systems
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              Proactive fraud prevention measures
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-3" style={{ color: "#2a8cae" }}>
                •
              </span>
              User education on transaction security
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>,

  // Slide 13: Next Steps
  <div
    key="13"
    className="w-full min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 relative overflow-hidden px-8 py-12 flex flex-col justify-center"
  >
    {/* Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-16 right-20 w-64 h-64 bg-pink-500/5 transform rotate-45"></div>
      <div className="absolute bottom-24 left-24 w-44 h-44 bg-pink-500/10 transform rotate-12"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-pink-500 rounded-full"></div>
      <div className="absolute bottom-1/2 right-1/3 w-4 h-20 bg-pink-500"></div>
    </div>

    {/* Logo */}
    <div className="absolute top-8 left-8 flex items-center z-10">
      <div className="w-32 h-10 rounded-lg flex items-center justify-center mr-3">
        <img src="/logowhite.png" alt="Sozial Logo" className="h-8 w-auto" />
      </div>
      <div className="text-left">
        <h3 className="text-md font-bold text-white">Sozial</h3>
        <p className="text-xs text-gray-300">Digital Marketing Agency</p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto z-10 text-center">
      <div className="mb-16">
        <h2 className="text-6xl font-black mb-4 text-white tracking-tight">
          NEXT STEPS
        </h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
      </div>

      <div className="space-y-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Strategic Meeting
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's delve deeper into the details and priorities for the TikTok
            Shop launch in Argentina
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Customized Action Plan
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Let's develop a roadmap tailored to TikTok's specific needs and
            goals
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Building Success Together
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            We are ready to be your key partner in this exciting challenge
          </p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 14: Thank You and Contact
  <div
    key="14"
    className="text-center w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 blur-xl"></div>
      <div className="absolute bottom-32 right-32 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-teal-400 blur-xl"></div>
    </div>

    <div className="mb-16 z-10">
      <h1 className="text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
        Thank You!
      </h1>
      <p className="text-3xl font-light opacity-90 max-w-2xl leading-relaxed">
        Ready to launch TikTok Shop in Argentina together
      </p>
      <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
    </div>

    <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 max-w-2xl shadow-2xl z-10">
      {/* Logo */}
      <div className="flex items-center justify-center mb-8">
        <div className="w-40 h-20 flex items-center justify-center mr-6">
          <img src="/logowhite.png" alt="Sozial Logo" className="h-16 w-auto" />
        </div>
        <div className="text-left">
          <h3 className="text-3xl font-bold text-white">Sozial Argentina</h3>
          <p className="text-lg opacity-80">Digital Marketing Agency</p>
        </div>
      </div>

      <h3 className="text-3xl font-bold mb-8 text-center">
        Contact Information
      </h3>
      <div className="space-y-6 text-xl">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <p>
            <span className="font-bold">Alan Giojelli</span> - CTO
          </p>
          <div className="flex items-center justify-center mt-4 space-x-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">📞</span>
              </div>
              <p className="text-lg" style={{ color: "#2a8cae" }}>
                +54911 3465 5186
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">✉️</span>
              </div>
              <p className="text-lg" style={{ color: "#2a8cae" }}>
                alangio@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/20">
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: "#2a8cae" }}>
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
