// All algorithm + plan data extracted from the original WordPress page (TW.txt).
// Whop plan_ids are kept verbatim.

export const ALGORITHMS = [
  {
    id: "ml-quant",
    number: "01",
    eyebrow: "ML Engine",
    title: {
      tr: "ML Quant & Liquidity Engine",
      en: "ML Quant & Liquidity Engine",
    },
    tagline: {
      tr: "Kurumsal Emir Akışını ve Akıllı Para Ayak İzlerini Deşifre Edin.",
      en: "Decode institutional order flow and Smart Money footprints.",
    },
    description: {
      tr: "nFinans ML Liquidity & Quantum Engine, piyasa hareketlerini izleyen ve her trend aşamasında hem mevcut trendi hem de karşılık gelen alım ve satım baskısını hesaplayıp görselleştiren bir araçtır. Sıradan bir trend takip indikatörü değildir; kurumsal emir akışını (Order Flow) deşifre etmek için tasarlanmış kapsamlı bir piyasa analiz sistemidir. Gaussian Kernel yumuşatma, Hacim Bazlı Destek/Direnç (VBSR) ısı haritaları ve Smart Liquidity Flow (SLF) osilatörü ile kurumsal “akıllı para” ile küçük yatırımcı arasındaki ayrımı görselleştirir.",
      en: "nFinans ML Liquidity & Quantum Engine reads the market in real-time and visualises the live tug-of-war between bids and asks across every trend phase. It is not a generic trend follower — it is a full order-flow analysis system built on Gaussian Kernel smoothing, Volume-Based Support/Resistance (VBSR) heatmaps and a proprietary Smart Liquidity Flow (SLF) oscillator that separates Smart Money from retail.",
    },
    tradingViewUrl: "https://tr.tradingview.com/script/ygG8ysSC/",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    plans: [
      { tier: "3m", price: "34.99", discount: "20", planId: "plan_i9HJZf7FZL3AF" },
      { tier: "6m", price: "49.99", discount: "30", planId: "plan_4SvPgDkhpO8vm" },
      { tier: "12m", price: "74.99", discount: "55", planId: "plan_xkkawMxCW1Wnt", popular: true },
      { tier: "lifetime", price: "149.99", discount: "70", planId: "plan_FDab3yUvY5cBT" },
    ],
  },
  {
    id: "right-side",
    number: "02",
    eyebrow: "Strategy Oscillator",
    title: {
      tr: "Right Side Strategy Osc.",
      en: "Right Side Strategy Osc.",
    },
    tagline: {
      tr: "Akışkanlar Dinamiği ile Çalışan 3 Fazlı Strateji Osilatörü.",
      en: "A 3-phase Fluid Dynamics oscillator for the right side of the trade.",
    },
    description: {
      tr: "nFinans Right Side Strategy piyasayı statik bir yapı olarak değil, 3 aşamalı bir “Akışkanlar Dinamiği” problemi olarak ele alan yeni nesil bir algoritmadır. Türbülans, Momentum ve Soğuma fazlarını tek panelde birleştirir; korkuyu (Sentiment) ve akışı (Momentum) eşzamanlı okur, akıllı destek bölgelerini grafiğe yansıtır. Amaç: “V” dönüşünün güvenli tarafında kalmanız.",
      en: "Right Side Strategy treats the market as a 3-phase fluid dynamics problem — Turbulence, Momentum and Cooling — and merges sentiment with flow inside a single panel. Smart support zones are projected back onto the main chart so you stay on the right side of every V-reversal.",
    },
    tradingViewUrl: "https://tr.tradingview.com/script/LZb1ChYX/",
    image:
      "https://images.unsplash.com/photo-1639754390580-2e7437267698?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    plans: [
      { tier: "3m", price: "34.99", discount: "20", planId: "plan_Tzh1oQY86MJwj" },
      { tier: "6m", price: "49.99", discount: "30", planId: "plan_8gkZr9WfoIwem" },
      { tier: "12m", price: "74.99", discount: "55", planId: "plan_tJmiehsXj7jWR", popular: true },
      { tier: "lifetime", price: "149.99", discount: "70", planId: "plan_0M4X0CNhhMcJW" },
    ],
  },
  {
    id: "liquidity-sr",
    number: "03",
    eyebrow: "Volume Based S/R",
    title: {
      tr: "Liquidity Based SR",
      en: "Liquidity Based S/R",
    },
    tagline: {
      tr: "Göreceli Hacme Göre Kalınlaşan Dinamik Destek/Direnç Bölgeleri.",
      en: "Dynamic S/R zones that thicken with relative volume.",
    },
    description: {
      tr: "Volume Based Support/Resistance (VBSR), klasik destek ve direnç çizgilerini saf birer çizgi olmaktan çıkarıp o seviyede gerçekleşen hacim yoğunluğuna göre görselleştirir. “Nerede destek var?” sorusuna değil, “bu destek ne kadar güçlü ve arkasında ne kadar hacim var?” sorusuna cevap verir. Düşük hacimli bölgeler soluklaşır; yüksek hacimli bölgeler koyulaşır ve belirginleşir.",
      en: "Volume-Based Support/Resistance (VBSR) turns flat S/R lines into living zones whose thickness scales with relative volume. It does not just answer “where is the level?” — it answers “how strong is it and how much liquidity sits behind it?” Quiet zones fade; heavy-volume zones bloom into thick clouds.",
    },
    tradingViewUrl:
      "https://www.tradingview.com/script/KNOpUace-nFinans-PremiumAlgo-LBSR-Order-Flow-Data/",
    image:
      "https://images.unsplash.com/photo-1745509267699-1b1db256601e?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    plans: [
      { tier: "3m", price: "9.99", discount: "20", planId: "plan_BreLCkgheqBd9" },
      { tier: "6m", price: "14.99", discount: "30", planId: "plan_E1d6BdBB4Zz5I" },
      { tier: "12m", price: "24.99", discount: "55", planId: "plan_1KZ84trvEVH0R", popular: true },
      { tier: "lifetime", price: "49.99", discount: "70", planId: "plan_XrwoQxvn3GCk1" },
    ],
  },
  {
    id: "sentiment-momentum",
    number: "04",
    eyebrow: "Quant Oscillator",
    title: {
      tr: "Sentiment & Momentum",
      en: "Sentiment & Momentum",
    },
    tagline: {
      tr: "Mum Psikolojisini ve Fibonacci Ağırlıklı Hacmi Analiz Eden Motor.",
      en: "Candle psychology meets Fibonacci-weighted volume.",
    },
    description: {
      tr: "Fiyat her şeydir, ancak Hacim yakıttır. Sentiment & Momentum, mum formasyonlarının (gövde/fitil oranları) ardındaki psikolojiyi Fibonacci ağırlıklı hacim verisi ile birleştirir. Fibonacci Ağırlıklı Hacim Analizi → Lineer Regresyon ile gürültü temizleme → VWMA tetikleyici sinyalleri. Üç katmanlı kantitatif model size keskin giriş/çıkış sinyalleri verir.",
      en: "Price is king, volume is fuel. Sentiment & Momentum blends candle psychology (body/wick ratios) with Fibonacci-weighted volume, then denoises the signal with Linear Regression and triggers entries via a VWMA crossover — a three-layer quant model engineered for surgical entries and exits.",
    },
    tradingViewUrl: "https://www.tradingview.com/script/ZFPy2bRU/",
    image:
      "https://images.unsplash.com/photo-1689732888407-310424e3a372?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    plans: [
      { tier: "3m", price: "9.99", discount: "20", planId: "plan_Uq9TzuDWCsUNu" },
      { tier: "6m", price: "14.99", discount: "30", planId: "plan_nrKt0e2EgY721" },
      { tier: "12m", price: "24.99", discount: "55", planId: "plan_WQeBJIJWkfJcT", popular: true },
      { tier: "lifetime", price: "49.99", discount: "70", planId: "plan_e8RihGP3PAEFm" },
    ],
  },
  {
    id: "trend-cycles",
    number: "05",
    eyebrow: "Cycle Mapper",
    title: {
      tr: "tRend Cycles for Mag7",
      en: "tRend Cycles for Mag7",
    },
    tagline: {
      tr: "Magnificent Endeksleri ve Likidite Döngüleri Kadran Analizi.",
      en: "Cycle quadrants for the Magnificent indices and your own basket.",
    },
    description: {
      tr: "Fiyat ve hacim ilişkisini dört kadrana ayıran tRend Cycles, döngünün her aşamasında piyasanın yönünü ve gücünü tahmin etmenize yardımcı olur. ZONE 1 — yükseliş devamı, ZONE 2 — Bearish divergence, ZONE 3 — Bullish divergence, ZONE 4 — düşüş devamı. Magnificent endeksleri veya kendi sepetiniz için döngü tabanlı likidite analizi.",
      en: "tRend Cycles slices the price/volume relationship into four quadrants — uptrend continuation, bearish divergence, bullish divergence, downtrend continuation — and surfaces actionable cycle signals across the Magnificent indices or any custom basket you build.",
    },
    tradingViewUrl: "https://tr.tradingview.com/script/8y2oOTGW/",
    image:
      "https://images.unsplash.com/photo-1642790551116-18e150f248e3?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85",
    plans: [
      { tier: "3m", price: "9.99", discount: "20", planId: "plan_cNDNSBIRwVmms" },
      { tier: "6m", price: "14.99", discount: "30", planId: "plan_wzPzBrwtw4XM9" },
      { tier: "12m", price: "24.99", discount: "55", planId: "plan_oXw2d1Ja2DiAo", popular: true },
      { tier: "lifetime", price: "49.99", discount: "70", planId: "plan_o9NDkNeH2OnH1" },
    ],
  },
];

export const ALL_IN_ONE = {
  features: [
    "ML Quant & Liquidity Engine",
    "tRend Cycle for Magnificents",
    "Volume Based Sup&Res Levels",
    "Right Side Strategy Osc.",
    "Sentiment & Momentum",
  ],
  plans: [
    {
      tier: "3m",
      price: "49.99",
      original: "62.49",
      discount: "20",
      planId: "plan_55Lpwz1tC3HIt",
    },
    {
      tier: "6m",
      price: "79.99",
      original: "99.98",
      discount: "30",
      planId: "plan_xdpdJpOYg5f3Z",
    },
    {
      tier: "12m",
      price: "149.99",
      original: "333.32",
      discount: "55",
      planId: "plan_TwfhPL2saqIpf",
      popular: true,
    },
    {
      tier: "lifetime",
      price: "249.99",
      original: "833.30",
      discount: "70",
      planId: "plan_vj6sv31xW9eD9",
    },
  ],
};

export const COMPANY = {
  legalName:
    "NFİNANS FİNANSAL BİLGİ TEKNOLOJİLERİ DANIŞMANLIK EĞİTİM VE TİCARET LİMİTED ŞİRKETİ",
  taxOffice: "GÖLCÜK",
  vkn: "6312088281",
  mersis: "0631208828100001",
  address:
    "YAZLIK YENİ MAH. TERMAL SK. A BLOK NO: 3 İÇ KAPI NO: 9 GÖLCÜK / KOCAELİ",
  whatsapp: "+905415478141",
  whatsappDisplay: "+90 541 547 81 41",
  email: "info@privyalgo.com",
};
