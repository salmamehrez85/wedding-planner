import { useState } from 'react'

interface Service {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
}

interface TimelineEvent {
  time: string;
  title: string;
  notes: string[];
}

function App() {
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

  const services: Service[] = [
    {
      title: "وصيفة عروسة",
      description: "نرافقكِ خطوة بخطوة لنكون يدكِ اليمنى وسندكِ في أسعد لياليكِ. نهتم بكل تفاصيل إطلالتكِ وراحتكِ النفسية والجسدية.",
      price: "تبدأ من 350 ريال",
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
      price: "550 ريال / 10 ساعات",
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
      title: "خدمات تغطية الحفل",
      description: "تغطية مميزة وحية ليوم زفافكِ بعدسة الجوال لالتقاط التفاصيل واللحظات الخاصة بدقة عالية ونقل الأجواء بكل عفوية.",
      price: "خدمة إضافية مميزة",
      features: [
        "مصورة جوال محترفة مخصصة لمتابعة تفاصيل الحفل بدقة",
        "تغطية كواليس التجهيز ولقطات عفوية للعروس وأهلها",
        "تسليم فوري للمقاطع والصور عالية الجودة لشبكات التواصل",
        "باقات مرنة تناسب ساعات التغطية المطلوبة للحفل"
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
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', phone: '', date: '', serviceType: 'bride_10', message: '' });
    }, 6000);
  };

  return (
    <div dir="rtl" className="min-h-screen bg-brand-50 font-sans antialiased text-brand-950 selection:bg-brand-200 selection:text-brand-900">
      
      {/* Top Welcome Ribbon */}
      <div className="bg-brand-900 text-brand-100 px-4 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-center uppercase">
        فريق S Team لتنظيم الحفلات والمناسبات الفاخرة • نحمل عنكم العبء لتستمتعوا بليلتكم
      </div>

      {/* Sticky Premium Navigation */}
      <nav className="sticky top-0 z-50 bg-brand-50/95 backdrop-blur-md border-b border-brand-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo and Subtext */}
            <div className="flex-shrink-0 flex flex-col items-start text-right">
              <span className="font-serif text-2xl font-bold tracking-wide text-brand-900">S Team</span>
              <span className="text-[10px] tracking-widest text-brand-500 uppercase -mt-1 font-semibold">لتنظيم الحفلات والمناسبات</span>
            </div>

            {/* Desktop Navigation Link Blocks */}
            <div className="hidden md:flex items-center space-x-reverse space-x-10 text-sm font-bold text-brand-800">
              <a href="#about" className="hover:text-brand-500 transition-colors duration-200">من نحن</a>
              <a href="#services" className="hover:text-brand-500 transition-colors duration-200">خدماتنا</a>
              <a href="#timeline" className="hover:text-brand-500 transition-colors duration-200">جدول المناسبة</a>
              <a href="#emergency" className="hover:text-brand-500 transition-colors duration-200">حقيبة الطوارئ</a>
              <a href="#packages" className="hover:text-brand-500 transition-colors duration-200">باقاتنا</a>
              <a href="#contact" className="bg-brand-700 text-brand-50 mx-8 px-6 py-3 rounded-full hover:bg-brand-600 transition-all duration-200 shadow hover:shadow-md text-xs tracking-wider font-bold">
                احجز موعدك الآن
              </a>
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
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-800 hover:bg-brand-100"
            >
              من نحن
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-800 hover:bg-brand-100"
            >
              خدماتنا
            </a>
            <a 
              href="#timeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-800 hover:bg-brand-100"
            >
              جدول المناسبة
            </a>
            <a 
              href="#emergency" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-800 hover:bg-brand-100"
            >
              حقيبة الطوارئ
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-brand-800 hover:bg-brand-100"
            >
              باقاتنا
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-brand-700 text-brand-50 px-4 py-3.5 rounded-full text-sm font-bold tracking-wider"
            >
              احجز موعدك الآن
            </a>
          </div>
        )}
      </nav>

      {/* Hero Presentation Header Area */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-brand-200/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero details column */}
            <div className="lg:col-span-7 space-y-8 text-right">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-300 bg-brand-100/60 text-xs sm:text-sm font-bold text-brand-700">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                مرحباً بكِ في عالم الضيافة المتكاملة
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] text-brand-950 tracking-tight">
                ليلتكِ أسهل وأجمل <br />
                مع فريق <span className="font-normal italic text-brand-500">S Team</span>
              </h1>
              
              <p className="text-brand-800 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                بكل حب نكون رفيقتكِ، يدكِ اليمنى، والسند الحقيقي في ليلتكِ المميزة. عيشي ليلتكِ معنا بكل دلال وتألق، واستمتعي بأدق التفاصيل ودعي إدارة القاعة والضيافة والتجهيز الكامل لفريقنا الخبير.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-start">
                <a href="#contact" className="inline-flex items-center justify-center bg-brand-800 text-brand-50 px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-brand-700 transition-all shadow hover:shadow-md duration-200">
                  احجزي وصيفتكِ الآن
                </a>
                <a href="#services" className="inline-flex items-center justify-center border border-brand-300 bg-transparent text-brand-800 hover:bg-brand-200/30 px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-200">
                  تصفح خدماتنا الفاخرة
                </a>
              </div>

              {/* Saudi/KSA local numbers highlights */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-brand-200/60 max-w-lg">
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-900">١٠٠٪</p>
                  <p className="text-xs font-semibold text-brand-500 mt-1">تفرغ تام للعروس والأهل</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-900">٢٤ ساعة</p>
                  <p className="text-xs font-semibold text-brand-500 mt-1">خدمة وتنسيق مستمر</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-900">٣ باقات</p>
                  <p className="text-xs font-semibold text-brand-500 mt-1">خيارات تناسب مناسبتكم</p>
                </div>
              </div>
            </div>

            {/* Hero stylized visual showcase card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[400px] lg:max-w-full aspect-[4/5] rounded-[2.5rem] bg-gradient-to-tr from-brand-300/40 to-brand-100/10 p-4 border border-brand-200 shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-brand-300/15 backdrop-blur-[2px]"></div>
                
                {/* Floating ambient decorations */}
                <div className="absolute top-10 right-10 w-60 h-60 rounded-full bg-brand-200/40 blur-3xl -z-10 animate-pulse"></div>
                
                {/* Beautiful Arabic layout frame summarizing S Team Values */}
                <div className="relative h-full w-full rounded-[2rem] bg-brand-50/95 border border-brand-200/40 shadow-inner p-8 flex flex-col justify-between text-right">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] tracking-widest text-brand-500 font-bold uppercase">بطاقة الضيافة والتنظيم</span>
                    <div className="w-9 h-9 rounded-full bg-brand-100 flex items-center justify-center border border-brand-200 text-brand-600 font-bold text-sm">✿</div>
                  </div>

                  <div className="my-auto space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold italic text-brand-900">"راحة تامة.. ودلال كامل"</h3>
                      <p className="text-xs text-brand-500 font-semibold tracking-wider">سواءً كنتِ العروسة أو والدة العريس</p>
                    </div>

                    <div className="space-y-3 text-sm text-brand-800 font-light border-r-2 border-brand-400 pr-4 py-1 italic leading-relaxed">
                      "وجود وصيفتكِ يضمن لكِ راحة البال، التأكد من الحجوزات ونظافة الكوشة، وتفاصيل البخور والضيافة والمطربة، والتعامل السريع مع أي ظرف طارئ بفضل حقيبة الطوارئ المتكاملة."
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-brand-200/60 pt-6">
                    <div className="flex space-x-2 space-x-reverse">
                      <span className="px-2.5 py-1 bg-brand-100 text-brand-700 rounded-lg text-xs font-bold">باقة ٦س</span>
                      <span className="px-2.5 py-1 bg-brand-100 text-brand-700 rounded-lg text-xs font-bold">باقة ١٠س</span>
                    </div>
                    <span className="text-xs font-bold text-brand-700">بثقتكم نتميز ونرتقي</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section (من نحن) */}
      <section id="about" className="py-24 bg-brand-100/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-500 font-bold">من نحن</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-950 leading-tight">
              نحن السند الحقيقي وراء نجاح مناسبتكِ
            </h2>
            <div className="w-16 h-[1.5px] bg-brand-400 mx-auto my-6"></div>
            <p className="text-brand-800 font-light text-base sm:text-lg leading-relaxed">
              فريق <strong className="font-bold text-brand-900">S Team</strong> هو فريق متخصص في تقديم خدمات الوصيفة وتنسيق الحفلات والمناسبات في المملكة العربية السعودية. بفضل خبرتنا الطويلة، نحمل عن كاهل العروس وأهل العريس كافة تفاصيل المتابعة والتجهيز والاشراف لنوفر لهم ليلة خالية تماماً من القلق والتوتر، وممتلئة بالسعادة والراحة.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section (خدماتنا) */}
      <section id="services" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-500 font-bold">خدماتنا المتميزة</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">كيف نساعدكم في ليلتكم الكبرى؟</h2>
            <p className="text-brand-700 font-light text-sm">تفاصيل شاملة لخدمات الوصيفة الشخصية وإدارة المناسبات.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-brand-50 rounded-3xl p-8 border border-brand-200 hover:border-brand-400 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group text-right"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-100 flex items-center justify-center border border-brand-200 group-hover:bg-brand-700 group-hover:text-brand-50 transition-all duration-300">
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-900">{service.title}</h3>
                  <p className="text-brand-800 text-sm leading-relaxed font-light">{service.description}</p>
                  
                  {/* Bullet list of details */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.slice(0, 4).map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-brand-700 flex items-start gap-2">
                        <span className="text-brand-500 font-bold select-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-200/60 flex items-center justify-between">
                  <span className="text-brand-900 font-bold text-sm tracking-wide">{service.price}</span>
                  <a href="#contact" className="text-xs font-bold text-brand-600 group-hover:text-brand-800 uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200">
                    احجز الآن
                    <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Timeline Section (جدول تنظيم المناسبة) */}
      <section id="timeline" className="py-24 bg-brand-100/50 border-y border-brand-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-500 font-bold">برنامج العمل الميداني</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">جدول المساعدة في تحضيرات المناسبة</h2>
            <p className="text-brand-700 font-light text-sm">خطوة بخطوة كيف نقوم بإدارة وتنسيق ليلتكم من العصر وحتى تأمين آخر غرض بعد العشاء.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left timeline tabs selectors */}
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
                  <span className="font-bold text-sm">{evt.title}</span>
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
                  <span className="text-brand-500 font-serif text-sm font-bold bg-brand-100 px-3.5 py-1.5 rounded-full border border-brand-200">
                    {timelineEvents[selectedTimelineIndex].time}
                  </span>
                </div>

                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-brand-400 font-bold">مهام وصيفتكِ في هذه الفترة الزمنية:</p>
                  <ul className="space-y-3.5">
                    {timelineEvents[selectedTimelineIndex].notes.map((note, nIdx) => (
                      <li key={nIdx} className="text-brand-800 text-sm flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-brand-100 flex-shrink-0 flex items-center justify-center text-brand-600 text-xs font-bold">✓</span>
                        <span className="leading-relaxed font-light">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-brand-200 flex justify-between items-center text-xs">
                <span className="text-brand-500">من جدول مهام وصيفة أهل العريس الموثق</span>
                <a href="#contact" className="bg-brand-800 text-brand-50 px-5 py-2.5 rounded-full font-bold hover:bg-brand-700 transition-colors shadow-sm">
                  استفسار عن الجدول
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Emergency Kit Section (حقيبة الطوارئ) */}
      <section id="emergency" className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Grid representing emergency kit items */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {emergencyKitItems.map((item, idx) => (
                  <div key={idx} className="bg-brand-50 rounded-2xl p-5 border border-brand-200 hover:border-brand-400 transition-all hover:shadow-sm text-right space-y-2">
                    <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm">✚</div>
                    <h4 className="font-bold text-brand-900 text-sm sm:text-base">{item.name}</h4>
                    <p className="text-[11px] text-brand-600 leading-normal font-light">{item.desc}</p>
                  </div>
                ))}
                {/* Special accent card for the full kit */}
                <div className="bg-brand-800 text-brand-50 rounded-2xl p-5 flex flex-col justify-between text-right space-y-4 shadow border border-brand-700">
                  <span className="text-xl">🛠️</span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">حقيبة طوارئ كاملة</h4>
                    <p className="text-[10px] text-brand-200 font-light">مرافقة للوصيفة طوال ساعات الحفل دون أي رسوم إضافية.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* text details column */}
            <div className="lg:col-span-5 text-right space-y-6 order-1 lg:order-2">
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-500 font-bold">جاهزون لأي طارئ</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">عدّة وحقيبة الطوارئ المتكاملة</h2>
              <p className="text-brand-800 font-light text-base leading-relaxed">
                تأتي كل وصيفة من فريقنا مجهزة بالكامل بحقيبة إسعافات طارئة لتفادي وتصليح أي مشكلة في المظهر أو التنسيقات قبل الحفل أو أثنائه، مما يضمن سير المناسبة بأعلى معايير الانسيابية ودون ثانية قلق واحدة.
              </p>
              
              <div className="p-5 rounded-2xl bg-brand-100/60 border border-brand-200 text-sm text-brand-800 leading-relaxed font-light">
                <strong className="font-bold text-brand-900">الولاعة والفحم الفوري</strong> لإشعال البخور باستمرار، <strong className="font-bold text-brand-900">غراء الرموش والأظافر</strong> لمعالجة سريعة لفساتين العرائس وصديقاتهن، و<strong className="font-bold text-brand-900">كاوية البخار</strong> لضمان ثياب مفرودة دائماً.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Cards Section (باقاتنا) */}
      <section id="packages" className="py-24 bg-brand-100/40 border-t border-brand-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-500 font-bold">باقاتنا وعروضنا</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-950">باقات شفافة ومحددة التكلفة</h2>
            <p className="text-brand-700 font-light text-sm">نحن نؤمن بالوضوح التام في التسعير. لا رسوم خفية أو تكاليف غير معلنة.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1 */}
            <div className="bg-brand-50 rounded-3xl p-8 border border-brand-200 flex flex-col justify-between text-right space-y-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-100 px-2.5 py-1 rounded-md">وصيفة عروسة (٦ ساعات)</span>
                <div className="pt-2">
                  <span className="text-4xl font-serif font-bold text-brand-950">350</span>
                  <span className="text-sm font-semibold text-brand-600 mr-1.5">ريال سعودي</span>
                </div>
                <p className="text-xs text-brand-500 leading-relaxed font-light">باقة مكثفة لمساعدة وتجهيز العروسة وتلبيسها وتجهيز العطور وتنسيق ممر الزفة وتصوير لقطات الجوال العفوية.</p>
                <div className="w-full h-[1px] bg-brand-200"></div>
                
                <ul className="space-y-3 pt-2 text-xs text-brand-800">
                  <li className="flex items-center gap-2">✔ التواجد المبكر لتجهيز الفستان والتبخير</li>
                  <li className="flex items-center gap-2">✔ مساعدة العروس في اللبس ووضع تفاصيل الصور</li>
                  <li className="flex items-center gap-2">✔ تصوير اللحظات المميزة بجوال العروسة</li>
                  <li className="flex items-center gap-2">✔ مرافقة العروسة حتى وقت الزفة</li>
                </ul>
              </div>
              <a href="#contact" className="block text-center bg-brand-800 hover:bg-brand-700 text-brand-50 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow-sm">
                احجز هذه الباقة
              </a>
            </div>

            {/* Card 2 - Recommended */}
            <div className="bg-brand-50 rounded-3xl p-8 border-2 border-brand-500 flex flex-col justify-between text-right space-y-8 shadow-xl relative transform scale-102">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-brand-950 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase">
                الأكثر طلباً للعرائس
              </div>
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-600 uppercase tracking-widest bg-brand-200/50 px-2.5 py-1 rounded-md">وصيفة عروسة (١٠ ساعات)</span>
                <div className="pt-2">
                  <span className="text-4xl font-serif font-bold text-brand-950">500</span>
                  <span className="text-sm font-semibold text-brand-600 mr-1.5">ريال سعودي</span>
                </div>
                <p className="text-xs text-brand-500 leading-relaxed font-light">تغطية ومرافقة كاملة ليوم الحفل بالكامل. من صالون التجميل أو الجناح الفندقي، وحتى انتهاء الحفل وحفظ أغراض العروس تماماً.</p>
                <div className="w-full h-[1px] bg-brand-200"></div>
                
                <ul className="space-y-3 pt-2 text-xs text-brand-800">
                  <li className="flex items-center gap-2 font-semibold">✔ مرافقة كاملة لمدة ١٠ ساعات متواصلة</li>
                  <li className="flex items-center gap-2">✔ التأكيد على الحجوزات والتعامل مع الموردين</li>
                  <li className="flex items-center gap-2">✔ التنسيق مع مشرفة القاعة والدي جي للزفة</li>
                  <li className="flex items-center gap-2">✔ تدريب عملي للعروس على مسار الزفة وتقليل التوتر</li>
                  <li className="flex items-center gap-2">✔ التذكير الدائم بالوجبات وشرب المياه والتحصين</li>
                  <li className="flex items-center gap-2">✔ حراسة وتأمين وتجميع كل أغراض العروسة ونقلها</li>
                </ul>
              </div>
              <a href="#contact" className="block text-center bg-brand-500 hover:bg-brand-400 text-brand-950 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow">
                احجز الباقة المتكاملة
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-50 rounded-3xl p-8 border border-brand-200 flex flex-col justify-between text-right space-y-8 hover:shadow-lg transition-shadow duration-300">
              <div className="space-y-4">
                <span className="text-xs font-bold text-brand-500 uppercase tracking-widest bg-brand-100 px-2.5 py-1 rounded-md">وصيفة أهل عريس (١٠ ساعات)</span>
                <div className="pt-2">
                  <span className="text-4xl font-serif font-bold text-brand-950">550</span>
                  <span className="text-sm font-semibold text-brand-600 mr-1.5">ريال سعودي</span>
                </div>
                <p className="text-xs text-brand-500 leading-relaxed font-light">باقة إدارة القاعة والضيافة الشاملة لأم العريس وأهله. نتحمل عنكم تنظيم المشروبات، المباشرات، المطربة، والوفيه وحفظ الأمتعة وتأمين الغرفة.</p>
                <div className="w-full h-[1px] bg-brand-200"></div>
                
                <ul className="space-y-3 pt-2 text-xs text-brand-800">
                  <li className="flex items-center gap-2">✔ التنسيق الكامل مع الموردين ومندوبي التوصيل</li>
                  <li className="flex items-center gap-2">✔ الاشراف على طاقم المباشرات وتقديم الضيافة والموالح</li>
                  <li className="flex items-center gap-2">✔ متابعة حضور المطربة والترتيب مع مشرفة القاعة</li>
                  <li className="flex items-center gap-2">✔ تنظيم استقبال الضيوف ومتابعة البوفيه والحمامات</li>
                  <li className="flex items-center gap-2">✔ جمع متبقي الصواني وتغليفها وتأمين الغرفة وتسليم المفتاح</li>
                </ul>
              </div>
              <a href="#contact" className="block text-center bg-brand-800 hover:bg-brand-700 text-brand-50 font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-colors shadow-sm">
                احجز باقة أهل العريس
              </a>
            </div>

          </div>

          {/* Add-ons Information block */}
          <div className="mt-12 bg-brand-50 rounded-2xl border border-brand-200 p-6 flex flex-col sm:flex-row items-center justify-between text-right gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-brand-900 text-base">هل تحتاج خدمات إضافية؟</h4>
              <p className="text-xs text-brand-600 font-light">نحن نوفر خدمات باقات مشتركة (وصيفة عروسة + وصيفة أهل عريس) وخدمات تغطية الحفل وتصوير الجوال بالكامل. تواصل معنا للحصول على سعر خاص للمجموعة.</p>
            </div>
            <a href="https://wa.me/966566795839" target="_blank" className="bg-brand-900 hover:bg-brand-800 text-brand-50 px-6 py-3 rounded-full text-xs font-bold tracking-wide flex items-center gap-2 flex-shrink-0 transition-colors shadow-sm">
              <span>تواصل واتساب مباشرة</span>
              <span>💬</span>
            </a>
          </div>

        </div>
      </section>

      {/* Reservation & Booking Form Section (احجز الآن) */}
      <section id="contact" className="py-24 bg-brand-950 text-brand-50 relative overflow-hidden">
        {/* Decorative lighting glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-brand-800/10 blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-900/15 blur-3xl translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left connection info */}
            <div className="lg:col-span-5 text-right space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-brand-300 font-bold">ابدأ التنسيق الآن</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">احجزي ليلة العمر لتبدو مذهلة.</h2>
              </div>
              <p className="text-brand-200 font-light text-base leading-relaxed">
                املئي استمارة الحجز المبدئي وسنقوم بالتواصل معكِ خلال ٢٤ ساعة عمل عبر الواتساب لتأكيد موعد اللقاء التنسيقي المبدئي والإجابة على أي استفسارات تخص مناسبتكِ الغالية.
              </p>
              
              <div className="space-y-5 pt-6 border-t border-brand-900">
                
                {/* Phone connect block */}
                <div className="flex items-center gap-4 justify-start">
                  <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center text-brand-300 text-lg border border-brand-800">☎</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">للتواصل الهاتفي والواتساب</p>
                    <a href="tel:+966566795839" className="text-sm sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">+966 56 679 5839</a>
                  </div>
                </div>

                {/* Snapchat Connect card styled yellow/ghost style for snapcode visual */}
                <div className="flex items-center gap-4 justify-start">
                  <div className="w-11 h-11 rounded-full bg-brand-900 flex items-center justify-center text-brand-300 text-lg border border-brand-800">👻</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-400 font-bold">حساب السناب شات والتغطية</p>
                    <a href="https://www.snapchat.com/add/iuu33_3" target="_blank" className="text-sm sm:text-base font-bold hover:text-brand-300 transition-colors" dir="ltr">iuu33_3</a>
                  </div>
                </div>

              </div>

              {/* Snapchat stylized mini brand block */}
              <div className="bg-[#FFFC00]/95 text-brand-950 p-6 rounded-2xl border border-yellow-400 flex items-center justify-between gap-4 shadow-xl">
                <div className="space-y-1 text-right">
                  <h4 className="font-serif text-sm font-bold">تابعوا تغطياتنا المباشرة</h4>
                  <p className="text-[10px] text-brand-900 leading-normal font-semibold">تابعوا عمل وصيفاتنا ولقطات حية من القاعات على حساب السناب شات.</p>
                </div>
                <a href="https://www.snapchat.com/add/iuu33_3" target="_blank" className="bg-brand-950 text-white hover:bg-brand-900 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider flex-shrink-0 transition-colors">
                  أضفنا الآن
                </a>
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-brand-900/40 backdrop-blur-md rounded-[2.5rem] border border-brand-900 p-8 sm:p-10 shadow-2xl">
                
                {formSubmitted ? (
                  <div className="py-16 text-center space-y-6 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-brand-500/20 border border-brand-400 flex items-center justify-center mx-auto text-brand-300 text-3xl">✓</div>
                    <h3 className="font-serif text-2xl font-bold">تم إرسال طلب الحجز بنجاح</h3>
                    <p className="text-brand-200 text-sm max-w-sm mx-auto font-light leading-relaxed">
                      شكراً لثقتكم بفريق S Team. سيقوم منسق الحجز الخاص بنا بالتواصل معكم عبر الهاتف أو الواتساب لتأكيد التفاصيل وترتيب لقاء التنسيق الأولي.
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
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-sm transition-colors"
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
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-sm transition-colors text-right"
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
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-sm transition-colors"
                        />
                      </div>
                      <div className="space-y-2 text-right">
                        <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-widest text-brand-300">الباقة / الخدمة المطلوبة</label>
                        <select 
                          id="serviceType"
                          name="serviceType"
                          value={contactForm.serviceType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 text-sm transition-colors"
                        >
                          <option value="bride_6">وصيفة عروسة - باقة ٦ ساعات (٣٥٠ ريال)</option>
                          <option value="bride_10">وصيفة عروسة - باقة ١٠ ساعات (٥٠٠ ريال)</option>
                          <option value="family_10">وصيفة أهل عريس - باقة ١٠ ساعات (٥٥٠ ريال)</option>
                          <option value="combo">الباقة المشتركة (عروسة + أهل عريس)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-brand-300">تفاصيل إضافية حول القاعة والزفة ورؤيتكم</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        value={contactForm.message}
                        onChange={handleFormChange}
                        placeholder="أخبرونا عن القاعة، عدد الحضور المتوقع، والاحتياجات الخاصة بكم لنسهل عليكم ليلتكم..."
                        className="w-full px-4 py-3 bg-brand-950 border border-brand-800 rounded-xl focus:border-brand-400 focus:outline-none text-brand-50 placeholder-brand-800 text-sm transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-400 text-brand-950 font-bold tracking-wider uppercase hover:bg-brand-300 transition-colors py-4 rounded-xl shadow-lg text-xs cursor-pointer"
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

      {/* Branded Footer */}
      <footer className="bg-brand-50 border-t border-brand-200/60 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-8">
          
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold tracking-wider text-brand-900">S Team</span>
            <span className="text-[10px] tracking-[0.25em] text-brand-500 uppercase mt-1 font-semibold">لتنظيم وإدارة الحفلات والمناسبات</span>
          </div>

          <div className="flex justify-center space-x-10 space-x-reverse text-xs font-bold uppercase text-brand-700">
            <a href="#about" className="hover:text-brand-950 transition-colors">من نحن</a>
            <a href="#services" className="hover:text-brand-950 transition-colors">خدماتنا</a>
            <a href="#timeline" className="hover:text-brand-950 transition-colors">جدول المناسبة</a>
            <a href="#emergency" className="hover:text-brand-950 transition-colors">حقيبة الطوارئ</a>
            <a href="#packages" className="hover:text-brand-950 transition-colors">باقاتنا</a>
            <a href="#contact" className="hover:text-brand-950 transition-colors mx-5">اتصل بنا</a>
          </div>

          <div className="w-12 h-[1px] bg-brand-300 mx-auto"></div>

          <div className="space-y-2 text-xs text-brand-500 font-light">
            <p>&copy; {new Date().getFullYear()} S Team لتنظيم الحفلات. جميع الحقوق محفوظة.</p>
            <p>بثقتكم نتميز ونرتقي دائماً.</p>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App
