import { useState } from 'react'

interface Service {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

interface Testimonial {
  quote: string;
  couple: string;
  location: string;
  date: string;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [budget, setBudget] = useState(35000);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    date: '',
    estimatedBudget: 35000,
    message: ''
  });

  const services: Service[] = [
    {
      title: "Full Planning & Design",
      description: "From concept to clean-up, we handle every detail. Venue sourcing, vendor curation, custom design boards, budget management, and unlimited support.",
      price: "Starting at $7,500",
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c-.107-.19-.284-.313-.488-.336a.678.678 0 00-.734.48l-1.07 3.292a.678.678 0 01-.645.468H5.067a.68.68 0 00-.397 1.222l2.81 2.042a.678.678 0 01.246.758l-1.07 3.292a.678.678 0 00.246.758c.188.136.442.148.64.032l2.81-2.042a.678.678 0 01.796 0l2.81 2.042a.678.678 0 00.886-.032c.188-.136.27-.37.218-.598l-1.07-3.292a.678.678 0 01.246-.758l2.81-2.042a.68.68 0 00-.397-1.222h-3.472a.678.678 0 01-.645-.468l-1.07-3.292z" />
        </svg>
      )
    },
    {
      title: "Partial Design & Styling",
      description: "For the couple who has booked their venue but wants professional guidance to bring their aesthetic vision to life. Focuses on florals, decor, lighting, and tablescapes.",
      price: "Starting at $4,800",
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.18-.304a9.77 9.77 0 012.58-3.033c.83-.69 1.72-1.24 2.65-1.67a9.75 9.75 0 004.56-4.868.75.75 0 00-1.18-.837 9.75 9.75 0 00-4.868 4.56c-.43.93-.98 1.82-1.67 2.65a9.77 9.77 0 01-3.033 2.58l-.304.18a10.554 10.554 0 01-5.158 1.628.75.75 0 00-.612.916m6.22-12.69a6.7 6.7 0 00-.734 2.158m1.515-2.201a6.72 6.72 0 012.201 1.515M19.34 7.045a6.71 6.71 0 01-2.158.734M1.75 22.25a.75.75 0 011.06 0L10.06 15l-1.12-1.12-7.19 7.19a.75.75 0 01-1.06-1.06l7.19-7.19L6.75 11.72 14 4.47 19.53 10l-7.25 7.25-1.1-1.1-7.19 7.19a.75.75 0 01-1.06 0z" />
        </svg>
      )
    },
    {
      title: "Month-of Coordination",
      description: "Hand off the reins 6 weeks before your big day. We build your timeline, coordinate with all vendors, run the rehearsal, and manage the complete wedding day execution.",
      price: "Starting at $2,900",
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Working with Elysian Vows was the best decision we made. They turned our vague ideas of a 'cozy, sunset terrace wedding' into an absolute masterpiece. Our guests are still talking about the tablescapes!",
      couple: "Olivia & Julian",
      location: "San Ysidro Ranch, CA",
      date: "September 2025"
    },
    {
      quote: "The day-of coordination was flawless. I didn't answer a single vendor phone call, worry about the timing, or check the weather. Elysian Vows handled everything behind the scenes like magic.",
      couple: "Marcus & Evelyn",
      location: "Biltmore Estate, NC",
      date: "October 2025"
    },
    {
      quote: "Their budget planning tool and design consultations saved us thousands of dollars and months of stress. They truly create bespoke experiences tailored exactly to your personality.",
      couple: "Sarah & David",
      location: "New York Public Library, NY",
      date: "May 2026"
    }
  ];

  // Budget Allocations (Tailwind 4 custom logic)
  const budgetAllocation = {
    venueCatering: Math.round(budget * 0.50),
    photoVideo: Math.round(budget * 0.15),
    decorFlorals: Math.round(budget * 0.12),
    attireStyling: Math.round(budget * 0.08),
    entertainment: Math.round(budget * 0.10),
    contingency: Math.round(budget * 0.05)
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', date: '', estimatedBudget: 35000, message: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-brand-50 font-sans antialiased text-brand-950 selection:bg-brand-200 selection:text-brand-900">
      
      {/* Top Banner Message */}
      <div className="bg-brand-900 text-brand-50 px-4 py-2 text-xs font-medium tracking-widest text-center uppercase">
        Now Booking for 2026 & 2027 Wedding Seasons
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-md border-b border-brand-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col items-start">
              <span className="font-serif text-2xl font-semibold tracking-wide text-brand-900">ELYSIAN VOWS</span>
              <span className="text-[10px] tracking-[0.25em] text-brand-500 uppercase -mt-0.5 font-medium">Bespoke Wedding Planning</span>
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wider uppercase text-brand-800">
              <a href="#about" className="hover:text-brand-500 transition-colors duration-200">About</a>
              <a href="#services" className="hover:text-brand-500 transition-colors duration-200">Services</a>
              <a href="#calculator" className="hover:text-brand-500 transition-colors duration-200">Budget Tool</a>
              <a href="#testimonials" className="hover:text-brand-500 transition-colors duration-200">Love Stories</a>
              <a href="#contact" className="bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow text-xs tracking-widest">
                Book Consultation
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-800 hover:text-brand-600 hover:bg-brand-100 focus:outline-none transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-2 pb-6 space-y-3 bg-brand-50 border-b border-brand-200/50 animate-fadeIn">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-800 hover:bg-brand-100"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-800 hover:bg-brand-100"
            >
              Services
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-800 hover:bg-brand-100"
            >
              Budget Tool
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-800 hover:bg-brand-100"
            >
              Love Stories
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-brand-850 text-brand-50 px-4 py-3 rounded-full text-sm font-semibold tracking-wider"
            >
              Book Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-brand-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-brand-300 bg-brand-100/50 text-xs font-semibold tracking-widest text-brand-700 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
                Crafting Intimate & Elegant Celebrations
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-brand-950 tracking-tight">
                For love stories <br />
                that feel like <span className="font-normal italic text-brand-700">poetry.</span>
              </h1>
              <p className="text-brand-800 text-lg leading-relaxed max-w-xl font-light">
                We believe your wedding day should feel authentic, sophisticated, and entirely effortless. Elysian Vows brings your artistic vision to life through timeless, meticulous planning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="inline-flex items-center justify-center bg-brand-800 text-brand-50 px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase hover:bg-brand-750 transition-all shadow hover:shadow-md duration-200">
                  Plan Your Wedding
                </a>
                <a href="#services" className="inline-flex items-center justify-center border border-brand-350 bg-transparent text-brand-800 hover:bg-brand-200/40 px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-200">
                  Our Packages
                </a>
              </div>

              {/* Quick stats grid */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-brand-200/60 max-w-lg">
                <div>
                  <p className="font-serif text-3xl font-light text-brand-900">120+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-500 mt-1">Weddings Planned</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-light text-brand-900">98%</p>
                  <p className="text-xs uppercase tracking-widest text-brand-500 mt-1">Stress-Free rate</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-light text-brand-900">15+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-500 mt-1">Design Awards</p>
                </div>
              </div>
            </div>

            {/* Right Design Column */}
            <div className="lg:col-span-5 relative">
              {/* Glassmorphic Card Frame acting as main visual showcase */}
              <div className="relative mx-auto max-w-[400px] lg:max-w-full aspect-[4/5] rounded-[2rem] bg-gradient-to-tr from-brand-300/40 to-brand-100/10 p-4 border border-brand-200/60 shadow-xl overflow-hidden group">
                <div className="absolute inset-0 bg-brand-300/10 backdrop-blur-[2px]"></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-12 left-12 w-64 h-64 rounded-full bg-brand-200/30 blur-3xl -z-10 animate-pulse"></div>
                <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-brand-300/30 blur-2xl -z-10"></div>
                
                {/* Elegant placeholder content representing a wedding styling plan */}
                <div className="relative h-full w-full rounded-[1.6rem] bg-brand-50/90 border border-brand-200/40 shadow-inner p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest text-brand-500 uppercase font-medium">DESIGN BOARD CONCEPT</span>
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center border border-brand-200 text-brand-700">✿</div>
                  </div>

                  <div className="my-auto space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-light italic text-brand-900">"Warm Terracotta & Wild Sage"</h3>
                      <p className="text-xs text-brand-500 uppercase tracking-widest">Late Summer Estate Aesthetic</p>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#fdfbf7] border border-brand-200 shadow-sm" title="Elysian White"></div>
                      <div className="w-10 h-10 rounded-full bg-[#dfccb1] shadow-sm" title="Soft Straw"></div>
                      <div className="w-10 h-10 rounded-full bg-[#b58463] shadow-sm" title="Terracotta"></div>
                      <div className="w-10 h-10 rounded-full bg-[#7c5139] shadow-sm" title="Deep Bronze"></div>
                      <div className="w-10 h-10 rounded-full bg-[#829188] shadow-sm" title="Sage Green"></div>
                    </div>

                    <div className="space-y-2 text-sm text-brand-750 font-light border-l-2 border-brand-400 pl-4 py-1 italic">
                      "Textured linen, organic stone vessels, raw trailing silk ribbons, and locally-sourced autumn branches creating height."
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-brand-200/60 pt-6">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-brand-200 border-2 border-brand-50 flex items-center justify-center text-[10px] font-bold">M</div>
                      <div className="w-8 h-8 rounded-full bg-brand-300 border-2 border-brand-50 flex items-center justify-center text-[10px] font-bold">J</div>
                      <div className="w-8 h-8 rounded-full bg-brand-400 border-2 border-brand-50 flex items-center justify-center text-[10px] font-bold">V</div>
                    </div>
                    <span className="text-xs font-semibold text-brand-700 tracking-wider">ESTATE WEDDING 2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-100/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-500 font-semibold">Our Philosophy</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-brand-950 leading-tight">
              We design spaces for memories to blossom naturally.
            </h2>
            <div className="w-16 h-[1px] bg-brand-400 mx-auto my-6"></div>
            <p className="text-brand-800 font-light text-lg leading-relaxed">
              We guide couples through a polished planning journey, balancing practical execution with artistic flair. From a remote cliffside elopement to a grand historical library reception, our layouts are tailored around intimate atmospheres, warm hospitality, and unforgettable aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-500 font-semibold">Tailored Services</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-950">How We Can Work Together</h2>
            <p className="text-brand-750 font-light text-sm">Select the perfect level of guidance matching your planning progress.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-brand-50 rounded-3xl p-8 border border-brand-200 hover:border-brand-400 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center border border-brand-200 group-hover:bg-brand-800 group-hover:text-brand-50 transition-all duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-brand-900">{service.title}</h3>
                  <p className="text-brand-800 text-sm leading-relaxed font-light">{service.description}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-200/60 flex items-center justify-between">
                  <span className="text-brand-900 font-semibold text-sm tracking-wide">{service.price}</span>
                  <a href="#contact" className="text-xs font-semibold text-brand-600 group-hover:text-brand-800 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-all duration-200">
                    Inquire 
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Budget Calculator Widget */}
      <section id="calculator" className="py-24 bg-brand-100/60 border-y border-brand-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-500 font-semibold">Interactive Planner</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-950">Allocate Your Wedding Budget</h2>
              <p className="text-brand-800 font-light text-base leading-relaxed">
                Wondering how to distribute your funds across a typical wedding design system? Use our real-time interactive allocation estimator based on historical design frameworks.
              </p>
              
              <div className="pt-4 space-y-4">
                <label htmlFor="budget-slider" className="block text-sm font-semibold tracking-wider uppercase text-brand-800">
                  Estimated Total Budget: <span className="text-brand-600 font-serif text-lg ml-1">${budget.toLocaleString()}</span>
                </label>
                <input 
                  id="budget-slider"
                  type="range" 
                  min="15000" 
                  max="150000" 
                  step="5000"
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-brand-200 rounded-lg appearance-none cursor-pointer accent-brand-600 focus:outline-none"
                />
                <div className="flex justify-between text-xs text-brand-500">
                  <span>$15,000</span>
                  <span>$80,000</span>
                  <span>$150,000+</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200/80 text-xs text-brand-600 italic">
                *Percentages are based on a balanced layout allocation (Venue & Catering represents 50%, Photo/Video 15%, Styling 12%, Attire 8%, Entertainment 10%, Contingency 5%). Actual distributions will vary.
              </div>
            </div>

            {/* Right slider visualization column */}
            <div className="lg:col-span-7 bg-brand-50 rounded-[2rem] p-8 lg:p-10 border border-brand-200 shadow-md">
              <h3 className="font-serif text-xl font-light text-brand-900 border-b border-brand-200 pb-4 mb-6">Estimated Cost Breakdown</h3>
              
              <div className="space-y-5">
                {/* 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Venue & Catering (50%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.venueCatering.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-600 h-full rounded-full transition-all duration-300" style={{ width: '50%' }}></div>
                  </div>
                </div>

                {/* 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Photography & Video (15%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.photoVideo.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-500 h-full rounded-full transition-all duration-300" style={{ width: '15%' }}></div>
                  </div>
                </div>

                {/* 3 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Florals, Lighting & Decor (12%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.decorFlorals.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-400 h-full rounded-full transition-all duration-300" style={{ width: '12%' }}></div>
                  </div>
                </div>

                {/* 4 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Attire & Professional Styling (8%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.attireStyling.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-300 h-full rounded-full transition-all duration-300" style={{ width: '8%' }}></div>
                  </div>
                </div>

                {/* 5 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Entertainment & Music (10%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.entertainment.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-500/80 h-full rounded-full transition-all duration-300" style={{ width: '10%' }}></div>
                  </div>
                </div>

                {/* 6 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold tracking-wider text-brand-800 uppercase">
                    <span>Admin fees & Contingency (5%)</span>
                    <span className="font-serif font-normal text-sm text-brand-900">${budgetAllocation.contingency.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-100 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-200 h-full rounded-full transition-all duration-300" style={{ width: '5%' }}></div>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-brand-200 flex justify-between items-center">
                <span className="text-xs text-brand-500 font-medium tracking-wide">Ready to design a custom budget?</span>
                <a href="#contact" className="bg-brand-800 text-brand-50 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-brand-700 transition-colors shadow-sm">
                  Let's Talk
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Testimonials / Gallery Showcase */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-500 font-semibold">Love Stories</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-950">Words From Elysian Couples</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-brand-50 rounded-[2.5rem] border border-brand-200/70 p-8 sm:p-12 lg:p-16 shadow-sm relative overflow-hidden">
            
            {/* Elegant Quote marks */}
            <div className="absolute top-10 left-10 text-brand-200/50 text-[12rem] font-serif leading-none select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10 space-y-8">
              <p className="font-serif text-lg sm:text-2xl font-light italic leading-relaxed text-brand-900 text-center">
                {testimonials[activeTestimonial].quote}
              </p>

              <div className="flex flex-col items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mb-3"></div>
                <h4 className="font-serif text-lg font-medium text-brand-950">{testimonials[activeTestimonial].couple}</h4>
                <p className="text-xs text-brand-500 uppercase tracking-widest mt-1">
                  {testimonials[activeTestimonial].location} &bull; {testimonials[activeTestimonial].date}
                </p>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center space-x-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === index ? 'bg-brand-700 w-6' : 'bg-brand-200 hover:bg-brand-350'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-950 text-brand-50 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-800/10 blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-900/20 blur-3xl translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-brand-300 font-semibold">Start Planning</span>
                <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight">Let's craft your milestone.</h2>
              </div>
              <p className="text-brand-200 font-light text-base leading-relaxed">
                Consultations are held weekly at our studio or online. Fill out the inquiry form and we'll reply within 24 business hours to arrange our private introductory meeting.
              </p>
              
              <div className="space-y-4 pt-6 border-t border-brand-800/60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center text-brand-300">✉</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-400 font-semibold">Inquiries</p>
                    <a href="mailto:hello@elysianvows.com" className="text-sm font-medium hover:text-brand-300 transition-colors">hello@elysianvows.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center text-brand-300">⚓</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-400 font-semibold">Studio Location</p>
                    <p className="text-sm font-medium">Santa Barbara, California &bull; Worldwide Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-brand-900/60 backdrop-blur-md rounded-[2rem] border border-brand-850 p-8 sm:p-10 shadow-2xl">
                
                {formSubmitted ? (
                  <div className="py-16 text-center space-y-6 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-500 flex items-center justify-center mx-auto text-brand-300 text-3xl">✓</div>
                    <h3 className="font-serif text-2xl font-light">Inquiry Sent Successfully</h3>
                    <p className="text-brand-200 text-sm max-w-sm mx-auto font-light leading-relaxed">
                      Thank you for sharing your story. A design coordinator from Elysian Vows will reach out via email shortly to set up your consultation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-widest text-brand-300">Name(s)</label>
                        <input 
                          id="name"
                          type="text" 
                          name="name"
                          required
                          value={contactForm.name}
                          onChange={handleFormChange}
                          placeholder="Olivia & Julian"
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-700 text-sm transition-colors"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-brand-300">Email Address</label>
                        <input 
                          id="email"
                          type="email" 
                          name="email"
                          required
                          value={contactForm.email}
                          onChange={handleFormChange}
                          placeholder="hello@example.com"
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-700 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="date" className="text-xs font-semibold uppercase tracking-widest text-brand-300">Estimated Wedding Date</label>
                        <input 
                          id="date"
                          type="text" 
                          name="date"
                          value={contactForm.date}
                          onChange={handleFormChange}
                          placeholder="e.g. Autumn 2026"
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-700 text-sm transition-colors"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label htmlFor="estimatedBudget" className="text-xs font-semibold uppercase tracking-widest text-brand-300">Budget Range</label>
                        <select 
                          id="estimatedBudget"
                          name="estimatedBudget"
                          value={contactForm.estimatedBudget}
                          onChange={(e) => setContactForm(prev => ({ ...prev, estimatedBudget: Number(e.target.value) }))}
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 text-sm transition-colors"
                        >
                          <option value="35000">Under $50,000</option>
                          <option value="75000">$50,000 - $100,000</option>
                          <option value="120000">$100,000 - $150,000</option>
                          <option value="200000">$150,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-brand-300">Tell Us About Your Vision</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={contactForm.message}
                        onChange={handleFormChange}
                        placeholder="Tell us about the venue, design themes, or details you feel excited about..."
                        className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-700 text-sm transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-500 text-brand-950 font-semibold tracking-widest uppercase hover:bg-brand-400 transition-colors py-4 rounded-xl shadow-lg text-xs"
                    >
                      Request Consultation
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-50 border-t border-brand-200/60 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl font-semibold tracking-wider text-brand-900">ELYSIAN VOWS</span>
            <span className="text-[9px] tracking-[0.25em] text-brand-500 uppercase mt-1">Bespoke Wedding Planning & Design</span>
          </div>

          <div className="flex justify-center space-x-8 text-xs font-semibold tracking-wider uppercase text-brand-650">
            <a href="#about" className="hover:text-brand-950 transition-colors">About</a>
            <a href="#services" className="hover:text-brand-950 transition-colors">Services</a>
            <a href="#calculator" className="hover:text-brand-950 transition-colors">Budget Tool</a>
            <a href="#testimonials" className="hover:text-brand-950 transition-colors">Love Stories</a>
            <a href="#contact" className="hover:text-brand-950 transition-colors">Contact</a>
          </div>

          <div className="w-12 h-[1px] bg-brand-300 mx-auto"></div>

          <div className="space-y-2 text-xs text-brand-500 font-light">
            <p>&copy; {new Date().getFullYear()} Elysian Vows LLC. All rights reserved.</p>
            <p>Designed with meticulous attention to detail.</p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
