import { useState, useEffect } from 'react'

interface Service {
  title: string;
  description: string;
  price: string;
  pdfPath: string;
  features: string[];
  icon: React.ReactNode;
}

interface TimelineEvent {
  time: string;
  title: string;
  notes: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'packages' | 'timeline'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    date: '',
    serviceType: 'bride_10',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const services: Service[] = [
    {
      title: "وصيفة عروسة",
      description: "نرافقكِ خطوة بخطوة لنكون يدكِ اليمنى وسندكِ في أسعد لياليكِ. نهتم بكل تفاصيل إاطمئنانكِ وإطلالتكِ وراحتكِ النفسية والجسدية.",
      price: " ابتداء من ...",
      pdfPath: "/bride_assistant.pdf",
      features: [
        "الاهتمام الكامل بكافة تفاصيل العروسة وإطلالتها",
        "مساعدة العروسة في اللبس والتبخير والتطييب الفاخر",
        "تنسيق حجوزات العروسة وتجهيز الأغراض قبل المصورة",
        "تدريب العروسة على الزفة لتقليل التوتر والقلق",
        "تذكير العروسة الدائم بالأكل والشرب وقراءة التحصين",
        "تصوير أجمل اللحظات المميزة والعفوية بجوال العروسة",
        "المحافظة على أغراض العروسة وترتيبها قبل وبعد الحفل"
      ],
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.3 16.2L18 21m-2.7-4.8L12 21m0-11a5 5 0 110-10 5 5 0 010 10zm-6.3 6.2L3 21m2.7-4.8L12 21m0-11V6" />
        </svg>
      )
    },
    {
      title: "وصيفة أهل عريس",
      description: "ننوب عن أهل العريس في إدارة القاعة والضيافة لنمنحكم الفرصة الكاملة للترحيب بضيوفكم دون قلق أو انشغال بالتحضيرات.",
      price: " ابتداء من ...",
      pdfPath: "/family_assistant.pdf",
      features: [
        "الوصول المبكر للقاعة قبل أهل العريس والاشراف على الترتيبات",
        "استلام الموردين والتنسيقات والتواصل مع المناديب والطلبات",
        "التنسيق الكامل مع مشرفة القاعة بشأن الزفة والعشاء والوفيه",
        "الاشراف على توزيع كروت الطاولات وضيافتها (الشاي والقهوة والمياه)",
        "التنسيق مع المطربة والتحقق من مواعيد حضورها وانتهائها وضيافتها",
        "استلام التوزيعات وضيافة الاستقبال وحفظ أمتعة وحقائب أهل العريس",
        "جمع المتبقي من الموالح والحلا وتسليم الصواني كاملة بغرفة الأهل"
      ],
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      )
    },
    {
      title: "مصورة جوال (تغطية الحفل)",
      description: "تغطية مميزة وحية ليوم زفافكِ بعدسة الجوال لالتقاط التفاصيل واللحظات الخاصة بدقة عالية ونقل الأجواء بكل عفوية.",
      price: "ابتداء من ...",
      pdfPath: "/mobile_photography.pdf",
      features: [
        "مصورة جوال محترفة مخصصة لمتابعة تفاصيل الحفل بدقة",
        "تغطية كواليس التجهيز ولقطات عفوية للعروس وأهلها",
        "تسليم فوري للمقاطع والصور عالية الجودة لشبكات التواصل",
        "باقات مرنة (٦ ساعات / فل داي)"
      ],
      icon: (
        <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
      )
    }
  ];

  const timelineEvents: TimelineEvent[] = [
    {
      time: "06:00 مساءً",
      title: "التحضير والإشراف العام",
      notes: [
        "توزيع بطاقات دعوة كروت الطاولات بدقة",
        "التأكد من اكتمال وتوزيع الضيافة والترامس الحارة على جميع الطاولات",
        "التنسيق الأولي مع مشرفة القاعة بخصوص موعد الزفة وبدء البوفيه",
        "التحقق من عدد التوزيعات الإجمالي وتجهيز منصة الزفة الخاصة بالتوزيعات"
      ]
    },
    {
      time: "09:00 مساءً",
      title: "استقبال المطربة وتنظيمها",
      notes: [
        "تأكيد موعد وصول المطربة ومرافقتها لغرفتها الخاصة",
        "الاشراف على تجهيز الضيافة والترحيب الخاص بالمطربة وفريقها"
      ]
    },
    {
      time: "10:00 مساءً",
      title: "مشروب الاستقبال والترحيب",
      notes: [
        "تجهيز وتقديم 200 كوب من المشروب الترحيبي المنعش",
        "تنسيق عمل 6 مباشرات مخصصات للاستقبال والتقديم",
        "قائمة المشروبات: موهيتو توت، موهيتو ليمون نعناع، وموهيتو بلوبيري"
      ]
    },
    {
      time: "11:30 مساءً",
      title: "ضيافة الموالح والحلا",
      notes: [
        "الاشراف على خدمة التقديم بواسطة 12 مباشرة في القاعة",
        "تجهيز وترتيب 6 ستاندات تقديم حلا فاخر + 6 ستاندات تقديم موالح",
        "توزيع العصائر الطازجة والمنعشة على ضيوف الحفل"
      ]
    },
    {
      time: "12:30 بعد منتصف الليل",
      title: "زفة توزيعات الضيوف",
      notes: [
        "التحقق النهائي من عدد توزيعات الهدايا للضيوف",
        "تنظيم مسار الزفة الخاصة بالتوزيعات وضمان تسليمها لكافة الحضور بالكامل دون استثناء"
      ]
    },
    {
      time: "01:00 صباحاً",
      title: "انطلاق الزفة الكبرى",
      notes: [
        "تسليم ملفات هندسة الصوت والزفة لمشرفة الدي جي (إذا كانت من طرف أهل العريس)",
        "تبخير وتعطير ممر العروس والقاعة بأجود أنواع البخور الفاخر",
        "التأكد التام من نظافة وترتيب ممر الزفة وخلوه من المعوقات"
      ]
    },
    {
      time: "01:40 صباحاً",
      title: "خدمة العشاء والوفيه",
      notes: [
        "الاشراف والمتابعة الشاملة لخدمة بوفيه العشاء من البداية وحتى النهاية",
        "متابعة دورية ومستمرة لنظافة وتوفر الصابون والمناديل في دورات المياه الخاصة بالقاعة"
      ]
    },
    {
      time: "بعد العشاء",
      title: "الجمع والتأمين الختامي",
      notes: [
        "جمع صواني الحلا والموالح المتبقية من الطاولات والمدخل وتغليفها في علب وبوكسات نظيفة",
        "تسليم صواني الضيافة كاملة ونظيفة لأهل العريس",
        "جمع كافة الأمتعة والحقائب والأغراض الخاصة بالعائلة وتأمينها داخل الغرفة الخاصة وتسليم المفتاح لأصحاب الشأن"
      ]
    }
  ];

  const emergencyKitItems = [
    { name: "ولاعة وفحم", desc: "لتبخير سريع ومتواصل بكسر العود الفاخر" },
    { name: "كاوية بخار", desc: "لتعديل أي كسرات طارئة في فساتين العروس أو الأهل" },
    { name: "غراء رموش وأظافر", desc: "لتثبيت فوري لأي تفاصيل جمالية طارئة" },
    { name: "مثبت شعر سبري", desc: "للحفاظ على ثبات التسريحة طوال ساعات الحفل" },
    { name: "مناديل مبللة", desc: "لتنظيف البقع المفاجئة وحماية الأقمشة الفاخرة" },
    { name: "إبرة وخيط مجهز", desc: "لإصلاح أي تمزق مفاجئ في فساتين السهرة فورياً" },
    { name: "قصاصة أظافر ومبرد", desc: "لحل أي مشكلة طارئة في أظافر العروس أو ضيوفها" }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Map service key to reader-friendly Arabic name
    const serviceNames: Record<string, string> = {
      bride_6: "وصيفة عروسة - باقة ٦ ساعات",
      bride_10: "وصيفة عروسة - باقة ١٠ ساعات",
      family_10: "وصيفة أهل عريس - باقة ١٠ ساعات",
      photography: "باقة مصورة جوال"
    };
    
    const chosenService = serviceNames[contactForm.serviceType] || contactForm.serviceType;
    
    // Construct the pre-filled message
    const messageText = `السلام عليكم SL Team، أرغب في حجز مبدئي للتفاصيل التالية:
- الاسم الكريم: ${contactForm.name}
- جوال التواصل: ${contactForm.phone}
- تاريخ المناسبة: ${contactForm.date}
- الخدمة/الباقة: ${chosenService}
${contactForm.message ? `- تفاصيل إضافية: ${contactForm.message}` : ""}`;

    // Encode text and generate WhatsApp link
    const whatsappUrl = `https://wa.me/966566795839?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show visual confirmation on the page
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', phone: '', date: '', serviceType: 'bride_10', message: '' });
    }, 6000);
  };

  const customGradientStyle = {
    background: 'linear-gradient(90deg, #4e2e21 0%, #d8bf9a 100%)'
  };

  return (
    <div dir="rtl" className="min-h-screen bg-brand-50 font-sans antialiased text-brand-950 selection:bg-brand-200 selection:text-brand-900 flex flex-col justify-between">
      
      <div>
        {/* Top Welcome Ribbon */}
        <div className="bg-brand-900 text-brand-100 px-4 py-2.5 text-xs sm:text-md font-semibold tracking-wider text-center uppercase">
          فريق SL Team لتنظيم الحفلات والمناسبات الفاخرة • نحمل عنكم العبء لتستمتعوا بليلتكم
        </div>

        {/* Sticky Premium Navigation */}
        <nav className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-md border-b border-brand-200/50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center justify-between h-20">
              
              {/* Brand Logo and Subtext */}
              <div className="flex-shrink-0 flex items-center gap-3">
                <img src="/logo.jpg" alt="SL Team Logo" className="h-16 w-auto rounded-xl object-contain mix-blend-multiply border border-brand-200/40 shadow-sm" />
                <div className="flex flex-col items-start text-right">
                  <span className="font-serif text-xl font-bold tracking-wide text-brand-900 leading-none">SL Team</span>
                  <span className="text-[9px] tracking-wider text-brand-500 uppercase font-semibold mt-1.5">لتنظيم الحفلات</span>
                </div>
              </div>

              {/* Desktop Navigation Pages state switches */}
              <div className="hidden md:flex items-center space-x-reverse space-x-10 text-md font-bold">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`pb-1 transition-all duration-250 cursor-pointer ${
                    currentPage === 'home' 
                      ? 'text-brand-600 border-b-2 border-brand-500 font-extrabold' 
                      : 'text-brand-800 hover:text-brand-500'
                  }`}
                >
                  الرئيسية
                </button>
                <button 
                  onClick={() => setCurrentPage('packages')}
                  className={`pb-1 transition-all duration-250 cursor-pointer ${
                    currentPage === 'packages' 
                      ? 'text-brand-600 border-b-2 border-brand-500 font-extrabold' 
                      : 'text-brand-800 hover:text-brand-500'
                  }`}
                >
                  خدماتنا
                </button>
                <button 
                  onClick={() => setCurrentPage('timeline')}
                  className={`pb-1 transition-all duration-250 cursor-pointer mr-10 ${
                    currentPage === 'timeline' 
                      ? 'text-brand-600 border-b-2 border-brand-500 font-extrabold' 
                      : 'text-brand-800 hover:text-brand-500'
                  }`}
                >
                  جدول المناسبة
                </button>
              </div>

              {/* Navigation Hamburger Button for Mobile screens */}
              <div className="md:hidden flex items-center">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-brand-800 hover:text-brand-600 hover:bg-brand-100 focus:outline-none transition-colors duration-200"
                  aria-expanded="false"
                >
                  <span className="sr-only">فتح القائمة الرئيسية</span>
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

          {/* Mobile Dropdown Menu Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden px-6 pt-2 pb-6 space-y-3 bg-brand-50 border-b border-brand-200/50 animate-fadeIn text-right">
              <button 
                onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                className={`block w-full text-right px-3 py-2.5 rounded-md text-base font-semibold ${currentPage === 'home' ? 'bg-brand-100 text-brand-700 font-bold' : 'text-brand-800 hover:bg-brand-100'}`}
              >
                الرئيسية
              </button>
              <button 
                onClick={() => { setCurrentPage('packages'); setMobileMenuOpen(false); }}
                className={`block w-full text-right px-3 py-2.5 rounded-md text-base font-semibold ${currentPage === 'packages' ? 'bg-brand-100 text-brand-700 font-bold' : 'text-brand-800 hover:bg-brand-100'}`}
              >
                خدماتنا
              </button>
              <button 
                onClick={() => { setCurrentPage('timeline'); setMobileMenuOpen(false); }}
                className={`block w-full text-right px-3 py-2.5 rounded-md text-base font-semibold ${currentPage === 'timeline' ? 'bg-brand-100 text-brand-700 font-bold' : 'text-brand-800 hover:bg-brand-100'}`}
              >
                جدول المناسبة
              </button>
            </div>
          )}
        </nav>

        {/* Page Switcher Content */}
        <main className="animate-fadeIn">
          
          {currentPage === 'home' && (
            /* Page 1 - Home & Contact Splash Page (Exactly like the uploaded mockup image) */
            <div>
              <div className="flex flex-col items-center bg-brand-50 min-h-[calc(100vh-140px)]">
              
              {/* Header Image Banner representing hands/rings */}
              <div 
                className="w-full h-[280px] sm:h-[380px] bg-cover bg-center relative"
                style={{ backgroundImage: "url('/hands_bg.png')" }}
              >
                {/* Visual shadow overlay for depth */}
                <div className="absolute inset-0 bg-brand-950/20"></div>
              </div>

              {/* Overlapping SL Team Logo Badge */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-brand-100 bg-white overflow-hidden shadow-2xl -mt-18 sm:-mt-22 relative z-10 flex items-center justify-center">
                <img 
                  src="/logo.jpg" 
                  alt="SL Team Logo" 
                  className="w-[90%] h-[90%] object-contain mix-blend-multiply" 
                />
              </div>

              {/* Content Grid Container */}
              <div className="max-w-6xl w-full px-6 sm:px-8 lg:px-12 mt-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div className="md:col-span-6 order-1 md:order-2 flex justify-center">
                    <div className="relative group max-w-[380px] md:max-w-full rounded-3xl overflow-hidden shadow-2xl border border-brand-200/60 p-2 bg-white transition-all duration-300 hover:shadow-brand-200">
                      <div className="rounded-2xl overflow-hidden aspect-[3/5] relative">
                        <img 
                          src="/wedding.jpeg" 
                          alt="SL Team Wedding" 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Info & Links Column */}
                  <div className="md:col-span-6 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-right space-y-6">
                    
                    <div className="space-y-3">
                      {/* Wedding Planner Title */}
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.2em] text-brand-950 uppercase leading-none">
                        WEDDING PLANNER
                      </h1>
                      <div className="h-[2px] w-24 bg-brand-400 mx-auto md:mr-0 md:ml-auto mt-2"></div>
                    </div>

                    <p className="text-brand-800 text-md sm:text-base leading-relaxed font-light max-w-md">
                      مرحباً بكِ في عالم الفخامة مع SL Team. نهتم بأدق تفاصيل حفل زفافكِ لنجعل منه ذكرى لا تُنسى. من التخطيط الأولي إلى التنظيم الميداني المتكامل في ليلة العمر، نسير معكِ خطوة بخطوة بكل حب وإتقان.
                    </p>

                    <div className="w-full space-y-4">
                      {/* Booking & Connection Header */}
                      <h2 className="font-serif text-lg sm:text-xl text-brand-900 font-bold">
                        للحجز و التواصل
                      </h2>

                      {/* Premium Gradient Pill Buttons Column */}
                      <div className="flex flex-col space-y-4 w-full max-w-[340px] mx-auto md:mr-0 md:ml-auto">
                        
                        {/* WhatsApp Button */}
                        <a 
                          href="https://wa.me/966566795839" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={customGradientStyle}
                          className="w-full h-13 rounded-full flex items-center justify-center text-white font-bold tracking-widest text-xs sm:text-md hover:scale-102 transition-transform shadow-md border border-brand-800/20 cursor-pointer"
                        >
                          WHATS APP
                        </a>

                        {/* Instagram Button */}
                        <a 
                          href="https://www.instagram.com/iu33___?igsh=a29ham5jM2R1YTVm&utm_source=ig_contact_invite" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={customGradientStyle}
                          className="w-full h-13 rounded-full flex items-center justify-center text-white font-bold tracking-widest text-xs sm:text-md hover:scale-102 transition-transform shadow-md border border-brand-800/20 cursor-pointer"
                        >
                          INSTAGRAM
                        </a>

                        {/* Snapchat Button */}
                        <a 
                          href="https://www.snapchat.com/add/iuu33_3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={customGradientStyle}
                          className="w-full h-13 rounded-full flex items-center justify-center text-white font-bold tracking-widest text-xs sm:text-md hover:scale-102 transition-transform shadow-md border border-brand-800/20 cursor-pointer"
                        >
                          SNAPCHAT
                        </a>

                        {/* TikTok Button */}
                        <a 
                          href="https://www.tiktok.com/@iu33__?_r=1&_t=ZS-97i2Doy3VnJ" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={customGradientStyle}
                          className="w-full h-13 rounded-full flex items-center justify-center text-white font-bold tracking-widest text-xs sm:text-md hover:scale-102 transition-transform shadow-md border border-brand-800/20 cursor-pointer"
                        >
                          TIKTOK
                        </a>

                      </div>
                    </div>

                    {/* Bottom Slogan Text */}
                    <p className="font-serif text-base sm:text-lg text-brand-800 font-bold italic pt-4">
                      عيشي ليلتك و خلي الباقي علينا
                    </p>

                  </div>

                </div>
              </div>

              {/* Explore Packages CTA */}
              <div className="w-full max-w-[340px] mx-auto mb-16 px-6">
                <button 
                  onClick={() => setCurrentPage('packages')}
                  className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-8 py-3.5 text-md font-bold tracking-wide transition-all hover:scale-102 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg w-full"
                >
                  <span>استكشف خدماتنا</span>
                  <span className="text-xs">←</span>
                </button>
              </div>

            </div>

            {/* Details & Gallery Section */}
            <section className="py-24 bg-brand-100/30 border-t border-b border-brand-200/40">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-xs sm:text-md uppercase tracking-[0.25em] text-brand-500 font-bold">
                    تفاصيل تُصنع بحب
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">
                    أناقة كواليسنا في ليلة العمر
                  </h2>
                  <p className="text-brand-750 font-light text-md">
                    نهتم بأدق تفاصيل تحضيراتك وإطلالتك لتبدئي رحلة العمر بأبهى حُلّة وأسعد اللحظات.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                  {/* Card 1: img1.jpeg (Veil & Shoes) */}
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-brand-200/50 flex flex-col justify-between">
                    <div className="overflow-hidden aspect-[4/5] relative">
                      <img 
                        src="/img1.jpeg" 
                        alt="Wedding Veil and Heels" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6 text-right space-y-2">
                      <h3 className="font-serif text-xl font-bold text-brand-900">حكاية الليلة الأولى</h3>
                      <p className="text-md text-brand-700 font-light leading-relaxed">
                        تفاصيل التحضيرات الفاخرة، فستانك الأبيض وحذاء زفافكِ المختار بعناية، نجهزه لكِ بكل حب وجاذبية لتكوني أميرة ليلتك.
                      </p>
                    </div>
                  </div>

                  {/* Card 2: img2.jpeg (Bride holding Jimmy Choo shoes) */}
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-brand-200/50 flex flex-col justify-between">
                    <div className="overflow-hidden aspect-[4/5] relative">
                      <img 
                        src="/img2.jpeg" 
                        alt="Bride holding heels" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/20 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6 text-right space-y-2">
                      <h3 className="font-serif text-xl font-bold text-brand-900">اللمسات الراقية</h3>
                      <p className="text-md text-brand-700 font-light leading-relaxed">
                        مرافقة خاصة وخدمة مساعدة العروسة والاهتمام بكل تفاصيل طلتك، لنمنحكِ الطمأنينة وراحة البال في أسعد لياليكِ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Consultation / Booking Form */}
            <section id="contact" className="py-24 bg-brand-950 text-brand-50 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-800/10 blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-900/15 blur-3xl translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left text */}
                    <div className="lg:col-span-5 text-right space-y-8">
                      <div className="space-y-4">
                        <span className="text-md uppercase tracking-widest text-brand-300 font-bold">ابدأ التنسيق الآن</span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">احجزي ليلة العمر لتبدو مذهلة.</h2>
                      </div>
                      <p className="text-brand-200 font-light text-base leading-relaxed">
                        املئي استمارة الحجز المبدئي وسنقوم بالتواصل معكِ خلال ٢٤ ساعة عمل عبر الواتساب لتأكيد موعد اللقاء التنسيقي المبدئي والإجابة على أي استفسارات تخص مناسبتكِ الغالية.
                      </p>
                      
                      <div className="space-y-5 pt-6 border-t border-brand-900">
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/wplogo.jpg" alt="WhatsApp" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">للتواصل الهاتفي والواتساب</p>
                            <a href="tel:+966566795839" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">+966 56 679 5839</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/instagramlogo.jpg" alt="Instagram" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب الإنستغرام</p>
                            <a href="https://www.instagram.com/iu33___?igsh=a29ham5jM2R1YTVm&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33___</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/splogo.jpg" alt="Snapchat" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب السناب شات والتغطية</p>
                            <a href="https://www.snapchat.com/add/iuu33_3" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iuu33_3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/tiktoklogo.jpg" alt="TikTok" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب التيك توك</p>
                            <a href="https://www.tiktok.com/@iu33__?_r=1&_t=ZS-97i2Doy3VnJ" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33__</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right form */}
                    <div className="lg:col-span-7">
                      <div className="bg-brand-900/40 backdrop-blur-md rounded-[2.5rem] border border-brand-900 p-8 sm:p-10 shadow-2xl">
                        {formSubmitted ? (
                          <div className="py-16 text-center space-y-6 animate-fadeIn">
                            <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-400 flex items-center justify-center mx-auto text-brand-300 text-3xl">✓</div>
                            <h3 className="font-serif text-2xl font-bold">تم إرسال طلب الحجز بنجاح</h3>
                            <p className="text-brand-200 text-md max-w-sm mx-auto font-light leading-relaxed">
                              شكراً لثقتكم بفريق SL Team. سيقوم منسق الحجز الخاص بنا بالتواصل معكم عبر الهاتف أو الواتساب لتأكيد التفاصيل وترتيب لقاء التنسيق الأولي.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-300">الاسم الكريم (صاحب المناسبة)</label>
                                <input 
                                  id="name"
                                  type="text" 
                                  name="name"
                                  required
                                  value={contactForm.name}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سارة محمد"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-300">رقم جوال الواتساب</label>
                                <input 
                                  id="phone"
                                  type="tel" 
                                  name="phone"
                                  required
                                  value={contactForm.phone}
                                  onChange={handleFormChange}
                                  placeholder="مثال: 0566795839"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors text-right"
                                />
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="date" className="text-xs font-bold uppercase tracking-widest text-brand-300">التاريخ المتوقع للمناسبة</label>
                                <input 
                                  id="date"
                                  type="text" 
                                  name="date"
                                  required
                                  value={contactForm.date}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سبتمبر 2026"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-brand-300">الباقة / الخدمة المطلوبة</label>
                                <select 
                                  id="serviceType"
                                  name="serviceType"
                                  value={contactForm.serviceType}
                                  onChange={handleFormChange}
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 text-md transition-colors"
                                >
                                  <option value="bride_6">وصيفة عروسة - باقة ٦ ساعات</option>
                                  <option value="bride_10">وصيفة عروسة - باقة ١٠ ساعات</option>
                                  <option value="family_10">وصيفة أهل عريس - باقة ١٠ ساعات</option>
                                  <option value="photography">باقة مصورة جوال</option>
                                </select>
                              </div>
                            </div>

                            <div className="space-y-2 text-right">
                              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-300">تفاصيل إضافية حول القاعة والزفة ورؤيتكم</label>
                              <textarea 
                                id="message"
                                name="message"
                                rows={4}
                                value={contactForm.message}
                                onChange={handleFormChange}
                                placeholder="أخبرونا عن القاعة، عدد الحضور المتوقع، والاحتياجات الخاصة بكم لنسهل عليكم ليلتكم..."
                                className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors resize-none"
                              ></textarea>
                            </div>

                            <button 
                              type="submit" 
                              className="w-full bg-brand-200 text-brand-950 font-bold tracking-wider uppercase hover:bg-brand-100 transition-colors py-4 rounded-xl shadow-lg text-md cursor-pointer"
                            >
                              إرسال طلب الحجز المبدئي
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentPage === 'packages' && (
            /* Page 2 - Packages and Services PDF trigger anchors */
            <div>
              <section className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <span className="text-xs sm:text-md uppercase tracking-[0.25em] text-brand-500 font-bold">باقاتنا وخدماتنا المكتوبة</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">باقات SL Team لتنظيم المناسبات</h2>
                <p className="text-brand-700 font-light text-md">اضغط على أي باقة لفتح ملف الـ PDF الأصلي والاطلاع على التفاصيل الرسمية.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="bg-brand-50 rounded-3xl p-8 border border-brand-200 hover:border-brand-400 transition-all duration-300 hover:shadow-lg flex flex-col justify-between text-right space-y-6"
                  >
                    <div className="space-y-4">
                      {/* Service Icon */}
                      <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center border border-brand-200 text-brand-600">
                        {service.icon}
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-brand-900">{service.title}</h3>
                      <p className="text-brand-800 text-md leading-relaxed font-light">{service.description}</p>
                      
                      <div className="w-full h-[1px] bg-brand-200 my-4"></div>
                      
                      <ul className="space-y-2 text-md  text-brand-800 font-light">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="text-brand-500 font-bold">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex justify-between items-center text-md font-bold">
                        <span className="text-brand-500">التكلفة المتوقعة:</span>
                        <span className="text-brand-950 font-serif font-bold text-md">{service.price}</span>
                      </div>
          
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Timeline CTA */}
              <div className="mt-12 bg-brand-900 text-brand-50 rounded-[2rem] p-8 flex flex-col sm:flex-row items-center justify-between text-right gap-6 border border-brand-850 shadow-md">
                <div className="space-y-2">
                  <h4 className="font-serif text-lg sm:text-xl font-bold">مخطط وجدول المناسبة الميداني</h4>
                  <p className="text-md text-brand-200 font-light">
                    اكتشفي كيف ننظم وننسق تفاصيل يومكِ خطوة بخطوة من العصر وحتى نهاية حفل الزفاف.
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentPage('timeline')}
                  className="bg-brand-200 hover:bg-brand-100 text-brand-950 px-8 py-3.5 rounded-xl text-md font-bold transition-all hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-md"
                >
                  <span>عرض جدول المناسبة</span>
                  <span className="text-xs">←</span>
                </button>
              </div>

 
            </section>
                            {/* Consultation / Booking Form */}
              <section id="contact" className="py-24 bg-brand-950 text-brand-50 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-800/10 blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-900/15 blur-3xl translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left text */}
                    <div className="lg:col-span-5 text-right space-y-8">
                      <div className="space-y-4">
                        <span className="text-md uppercase tracking-widest text-brand-300 font-bold">ابدأ التنسيق الآن</span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">احجزي ليلة العمر لتبدو مذهلة.</h2>
                      </div>
                      <p className="text-brand-200 font-light text-base leading-relaxed">
                        املئي استمارة الحجز المبدئي وسنقوم بالتواصل معكِ خلال ٢٤ ساعة عمل عبر الواتساب لتأكيد موعد اللقاء التنسيقي المبدئي والإجابة على أي استفسارات تخص مناسبتكِ الغالية.
                      </p>
                      
                      <div className="space-y-5 pt-6 border-t border-brand-900">
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/wplogo.jpg" alt="WhatsApp" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">للتواصل الهاتفي والواتساب</p>
                            <a href="tel:+966566795839" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">+966 56 679 5839</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/instagramlogo.jpg" alt="Instagram" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب الإنستغرام</p>
                            <a href="https://www.instagram.com/iu33___?igsh=a29ham5jM2R1YTVm&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33___</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/splogo.jpg" alt="Snapchat" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب السناب شات والتغطية</p>
                            <a href="https://www.snapchat.com/add/iuu33_3" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iuu33_3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/tiktoklogo.jpg" alt="TikTok" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب التيك توك</p>
                            <a href="https://www.tiktok.com/@iu33__?_r=1&_t=ZS-97i2Doy3VnJ" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33__</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right form */}
                    <div className="lg:col-span-7">
                      <div className="bg-brand-900/40 backdrop-blur-md rounded-[2.5rem] border border-brand-900 p-8 sm:p-10 shadow-2xl">
                        {formSubmitted ? (
                          <div className="py-16 text-center space-y-6 animate-fadeIn">
                            <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-400 flex items-center justify-center mx-auto text-brand-300 text-3xl">✓</div>
                            <h3 className="font-serif text-2xl font-bold">تم إرسال طلب الحجز بنجاح</h3>
                            <p className="text-brand-200 text-md max-w-sm mx-auto font-light leading-relaxed">
                              شكراً لثقتكم بفريق SL Team. سيقوم منسق الحجز الخاص بنا بالتواصل معكم عبر الهاتف أو الواتساب لتأكيد التفاصيل وترتيب لقاء التنسيق الأولي.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-300">الاسم الكريم (صاحب المناسبة)</label>
                                <input 
                                  id="name"
                                  type="text" 
                                  name="name"
                                  required
                                  value={contactForm.name}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سارة محمد"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-300">رقم جوال الواتساب</label>
                                <input 
                                  id="phone"
                                  type="tel" 
                                  name="phone"
                                  required
                                  value={contactForm.phone}
                                  onChange={handleFormChange}
                                  placeholder="مثال: 0566795839"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors text-right"
                                />
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="date" className="text-xs font-bold uppercase tracking-widest text-brand-300">التاريخ المتوقع للمناسبة</label>
                                <input 
                                  id="date"
                                  type="text" 
                                  name="date"
                                  required
                                  value={contactForm.date}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سبتمبر 2026"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-brand-300">الباقة / الخدمة المطلوبة</label>
                                <select 
                                  id="serviceType"
                                  name="serviceType"
                                  value={contactForm.serviceType}
                                  onChange={handleFormChange}
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 text-md transition-colors"
                                >
                                  <option value="bride_6">وصيفة عروسة - باقة ٦ ساعات</option>
                                  <option value="bride_10">وصيفة عروسة - باقة ١٠ ساعات</option>
                                  <option value="family_10">وصيفة أهل عريس - باقة ١٠ ساعات</option>
                                  <option value="photography">باقة مصورة جوال</option>
                                </select>
                              </div>
                            </div>

                            <div className="space-y-2 text-right">
                              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-300">تفاصيل إضافية حول القاعة والزفة ورؤيتكم</label>
                              <textarea 
                                id="message"
                                name="message"
                                rows={4}
                                value={contactForm.message}
                                onChange={handleFormChange}
                                placeholder="أخبرونا عن القاعة، عدد الحضور المتوقع، والاحتياجات الخاصة بكم لنسهل عليكم ليلتكم..."
                                className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors resize-none"
                              ></textarea>
                            </div>

                              <button 
                              type="submit" 
                              className="w-full bg-brand-200 text-brand-950 font-bold tracking-wider uppercase hover:bg-brand-100 transition-colors py-4 rounded-xl shadow-lg text-md cursor-pointer"
                            >
                              إرسال طلب الحجز المبدئي
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {currentPage === 'timeline' && (
            /* Page 3 - Interactive timeline, emergency kit and Booking consultation form */
            <div>
              {/* Event Timeline Selector */}
              <section id="timeline" className="py-16 sm:py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-brand-200/40">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                  <span className="text-xs sm:text-md uppercase tracking-[0.25em] text-brand-500 font-bold">برنامج العمل الميداني</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950 mr-5">جدول المساعدة في تحضيرات المناسبة</h2>
                  <p className="text-brand-700 font-light text-md">خطوة بخطوة كيف نقوم بإدارة وتنسيق ليلتكم من العصر وحتى تأمين آخر غرض بعد العشاء.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left timeline selectors */}
                  <div className="lg:col-span-5 flex flex-col space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {timelineEvents.map((evt, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTimelineIndex(idx)}
                        className={`w-full text-right p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          selectedTimelineIndex === idx 
                            ? 'bg-brand-700 text-brand-50 border-brand-700 shadow-md translate-x-1.5' 
                            : 'bg-brand-50 text-brand-800 border-brand-200 hover:bg-brand-100/60'
                        }`}
                      >
                        <span className="font-bold text-md">{evt.title}</span>
                        <span className={`font-serif text-xs px-2.5 py-1 rounded-full font-medium ${
                          selectedTimelineIndex === idx ? 'bg-brand-600 text-brand-50' : 'bg-brand-200/60 text-brand-700'
                        }`}>
                          {evt.time}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Right event details card */}
                  <div className="lg:col-span-7 bg-brand-50 rounded-[2.5rem] p-8 lg:p-12 border border-brand-200 shadow-md flex flex-col justify-between text-right">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-brand-200 pb-5">
                        <h3 className="font-serif text-2xl font-bold text-brand-900">
                          {timelineEvents[selectedTimelineIndex].title}
                        </h3>
                        <span className="text-brand-500 font-serif text-md font-bold bg-brand-100 px-3.5 py-1.5 rounded-full border border-brand-200">
                          {timelineEvents[selectedTimelineIndex].time}
                        </span>
                      </div>

                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest text-brand-400 font-bold">مهام وصيفتكِ في هذه الفترة الزمنية:</p>
                        <ul className="space-y-3.5">
                          {timelineEvents[selectedTimelineIndex].notes.map((note, nIdx) => (
                            <li key={nIdx} className="text-brand-800 text-md flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-brand-600 text-xs font-bold">✓</span>
                              <span className="leading-relaxed font-light">{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Emergency Kit Grid */}
              <section id="emergency" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 border-b border-brand-200/40">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Grid */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {emergencyKitItems.map((item, idx) => (
                        <div key={idx} className="bg-brand-50 rounded-2xl p-5 border border-brand-200 hover:border-brand-400 transition-all hover:shadow-sm text-right space-y-2">
                          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-md">✚</div>
                          <h4 className="font-bold text-brand-900 text-md sm:text-base">{item.name}</h4>
                          <p className="text-md text-brand-600 leading-normal font-light">{item.desc}</p>
                        </div>
                      ))}
                      <div className="bg-brand-800 text-brand-50 rounded-2xl p-5 flex flex-col justify-between text-right space-y-4 shadow border border-brand-700">
                        <span className="text-xl">🛠️</span>
                        <div className="space-y-1">
                          <h4 className="font-bold text-md">حقيبة طوارئ كاملة</h4>
                          <p className="text-[10px] text-brand-200 font-light">مرافقة للوصيفة طوال ساعات الحفل دون أي رسوم إضافية.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* text details column */}
                  <div className="lg:col-span-5 text-right space-y-6 order-1 lg:order-2">
                    <span className="text-xs sm:text-md uppercase tracking-[0.25em] text-brand-500 font-bold">جاهزون لأي طارئ</span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">عدّة وحقيبة الطوارئ المتكاملة</h2>
                    <p className="text-brand-850 font-light text-base leading-relaxed">
                      تأتي كل وصيفة من فريقنا مجهزة بالكامل بحقيبة إسعافات طارئة لتفادي وتصليح أي مشكلة في المظهر أو التنسيقات قبل الحفل أو أثنائه، مما يضمن سير المناسبة بأعلى معايير الانسيابية ودون ثانية قلق واحدة.
                    </p>
                    <div className="p-5 rounded-2xl bg-brand-100/60 border border-brand-200 text-md text-brand-800 leading-relaxed font-light">
                      <strong className="font-bold text-brand-900">الولاعة والفحم الفوري</strong> لإشعال البخور باستمرار، <strong className="font-bold text-brand-900">غراء الرموش والأظافر</strong> لمعالجة سريعة لفساتين العرائس وصديقاتهن، و<strong className="font-bold text-brand-900">كاوية البخار</strong> لضمان ثياب مفرودة دائماً.
                    </div>
                  </div>
                </div>
              </section>

              {/* Consultation / Booking Form */}
              <section id="contact" className="py-24 bg-brand-950 text-brand-50 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-800/10 blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-900/15 blur-3xl translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left text */}
                    <div className="lg:col-span-5 text-right space-y-8">
                      <div className="space-y-4">
                        <span className="text-md uppercase tracking-widest text-brand-300 font-bold">ابدأ التنسيق الآن</span>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">احجزي ليلة العمر لتبدو مذهلة.</h2>
                      </div>
                      <p className="text-brand-200 font-light text-base leading-relaxed">
                        املئي استمارة الحجز المبدئي وسنقوم بالتواصل معكِ خلال ٢٤ ساعة عمل عبر الواتساب لتأكيد موعد اللقاء التنسيقي المبدئي والإجابة على أي استفسارات تخص مناسبتكِ الغالية.
                      </p>
                      
                      <div className="space-y-5 pt-6 border-t border-brand-900">
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/wplogo.jpg" alt="WhatsApp" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">للتواصل الهاتفي والواتساب</p>
                            <a href="tel:+966566795839" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">+966 56 679 5839</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/instagramlogo.jpg" alt="Instagram" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب الإنستغرام</p>
                            <a href="https://www.instagram.com/iu33___?igsh=a29ham5jM2R1YTVm&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33___</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/splogo.jpg" alt="Snapchat" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب السناب شات والتغطية</p>
                            <a href="https://www.snapchat.com/add/iuu33_3" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iuu33_3</a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 justify-start">
                          <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center border border-brand-800 overflow-hidden">
                            <img src="/tiktoklogo.jpg" alt="TikTok" className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب التيك توك</p>
                            <a href="https://www.tiktok.com/@iu33__?_r=1&_t=ZS-97i2Doy3VnJ" target="_blank" rel="noopener noreferrer" className="text-md sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iu33__</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right form */}
                    <div className="lg:col-span-7">
                      <div className="bg-brand-900/40 backdrop-blur-md rounded-[2.5rem] border border-brand-900 p-8 sm:p-10 shadow-2xl">
                        {formSubmitted ? (
                          <div className="py-16 text-center space-y-6 animate-fadeIn">
                            <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-400 flex items-center justify-center mx-auto text-brand-300 text-3xl">✓</div>
                            <h3 className="font-serif text-2xl font-bold">تم إرسال طلب الحجز بنجاح</h3>
                            <p className="text-brand-200 text-md max-w-sm mx-auto font-light leading-relaxed">
                              شكراً لثقتكم بفريق SL Team. سيقوم منسق الحجز الخاص بنا بالتواصل معكم عبر الهاتف أو الواتساب لتأكيد التفاصيل وترتيب لقاء التنسيق الأولي.
                            </p>
                          </div>
                        ) : (
                          <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-brand-300">الاسم الكريم (صاحب المناسبة)</label>
                                <input 
                                  id="name"
                                  type="text" 
                                  name="name"
                                  required
                                  value={contactForm.name}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سارة محمد"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-brand-300">رقم جوال الواتساب</label>
                                <input 
                                  id="phone"
                                  type="tel" 
                                  name="phone"
                                  required
                                  value={contactForm.phone}
                                  onChange={handleFormChange}
                                  placeholder="مثال: 0566795839"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors text-right"
                                />
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2 text-right">
                                <label htmlFor="date" className="text-xs font-bold uppercase tracking-widest text-brand-300">التاريخ المتوقع للمناسبة</label>
                                <input 
                                  id="date"
                                  type="text" 
                                  name="date"
                                  required
                                  value={contactForm.date}
                                  onChange={handleFormChange}
                                  placeholder="مثال: سبتمبر 2026"
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors"
                                />
                              </div>
                              <div className="space-y-2 text-right">
                                <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-brand-300">الباقة / الخدمة المطلوبة</label>
                                <select 
                                  id="serviceType"
                                  name="serviceType"
                                  value={contactForm.serviceType}
                                  onChange={handleFormChange}
                                  className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 text-md transition-colors"
                                >
                                  <option value="bride_6">وصيفة عروسة - باقة ٦ ساعات</option>
                                  <option value="bride_10">وصيفة عروسة - باقة ١٠ ساعات</option>
                                  <option value="family_10">وصيفة أهل عريس - باقة ١٠ ساعات</option>
                                  <option value="photography">باقة مصورة جوال</option>
                                </select>
                              </div>
                            </div>

                            <div className="space-y-2 text-right">
                              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-300">تفاصيل إضافية حول القاعة والزفة ورؤيتكم</label>
                              <textarea 
                                id="message"
                                name="message"
                                rows={4}
                                value={contactForm.message}
                                onChange={handleFormChange}
                                placeholder="أخبرونا عن القاعة، عدد الحضور المتوقع، والاحتياجات الخاصة بكم لنسهل عليكم ليلتكم..."
                                className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-md transition-colors resize-none"
                              ></textarea>
                            </div>

                          <button 
                              type="submit" 
                              className="w-full bg-brand-200 text-brand-950 font-bold tracking-wider uppercase hover:bg-brand-100 transition-colors py-4 rounded-xl shadow-lg text-md cursor-pointer"
                            >
                              إرسال طلب الحجز المبدئي
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

        </main>
      </div>

      {/* Branded Footer */}
      <footer className="bg-brand-50 border-t border-brand-200/60 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          
          <div className="flex flex-col items-center gap-2">
            <img src="/logo.jpg" alt="SL Team Logo" className="h-24 w-auto rounded-2xl object-contain mix-blend-multiply border border-brand-200/40 shadow-md" />          </div>

    

          <div className="w-12 h-[1px] bg-brand-300 mx-auto"></div>

          <div className="space-y-2 text-xs text-brand-500 font-light">
            <p>&copy; {new Date().getFullYear()} SL Team لتنظيم الحفلات. جميع الحقوق محفوظة.</p>
            <p>بثقتكم نتميز ونرتقي دائماً.</p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
