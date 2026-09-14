let currentLang = 'EN';
const translations = {
EN: {
navHome: "Home",
navPerfumes: "Perfumes",
navMatch: "Perfect Match",
navBlog: "Blog",
navAbout: "About Us",
navContact: "Contact Us",
heroTitle1: "Indulge Your<br>Senses",
heroTitle2: "in<br>Every Scoop<br>of Scent.",
heroSubtitle: "Discover the perfume that's too sweet to resist. Playful. Unique. Unforgettable.",
heroBtn: "EXPLORE THE TUBBEES COLLECTION",
slideHint: "Slide to discover →",
sec2Title: "Which Scoop Speaks to You?",
sec2Subtitle: "Find your sweet match among our signature scents",
sec3Title: "Find Your Perfect Scent",
sec3Subtitle: "Take our quick scent quiz to discover the custom perfume mix crafted for your personality.",
startQuizBtn: "Take the Quiz",
searchTitle: "Search Collection",
searchPh: "Type a perfume name or scent note...",
noResults: 'No perfumes found for "{q}"',
quizModalTitle: "Pick Your Scent Notes",
quizModalInstruction: "Select 3 scents that describe your mood best",
getMatchBtn: "Get Your Match",
matchBadge: "99% Match!",
retakeBtn: "Retake Quiz",
factsBtn: "Fragrance Facts",
sfTitle: "FRAGRANCE FACTS",
sfServingSizeLabel: "Serving size",
sfConcentrationLabel: "Concentration",
sfTopNotes: "TOP NOTES",
sfHeartNotes: "HEART NOTES",
sfBaseNotes: "BASE NOTES",
sfSweetness: "Sweetness",
sfWarmth: "Warmth",
sfCozy: "Cozy",
addToCart: "Add to Cart",
recTitle: "You might also like...",
cartTitle: "Your Cart",
cartEmpty: "Your cart is currently empty.",
cartTotalLabel: "Total:",
checkoutBtn: "Proceed to Checkout",
blogBadge: "Fragrance Journal",
blogSectionTitle: "Perfume Chronicles & Tips",
blogSectionSubtitle: "Master the art of wearing, selecting, and preserving your favorite scents.",
readFull: "Read Full Article →",
aboutTitle: "About Us",
aboutIntro: "Tubbees is the fragrance brand that turns the art of scent into a celebration of flavor. Founded with a simple goal—to capture the essence of your favorite indulgent flavors and bring them to life in a bottle. We’ve mastered the art of creating scents that transport you straight to a world of sweet treats, rich desserts, and comforting flavors. It’s like your favorite dessert—without the calories!",
role1: "Managing Director / CEO",
desc1: "The primary public face and lead director running the entire corporate ecosystem. Every major decision regarding brand vision, new locations, and company strategy goes through her.",
role2: "Director / COO",
desc2: "Co-director of the parent company, managing the operational blueprint, legal oversight, and corporate asset management alongside Shamly.",
role3: "Director",
desc3: "Core member of the family board of directors holding key legal and operational leadership across the retail and dessert business empire.",
footerDesc: "Crafting unique fragrance and flavor experiences.",
emailLabel: "Email:",
phoneLabel: "Phone:",
touchTitle: "Get in Touch",
touchSubtitle: "Have questions or feedback? Send us a message.",
phName: "Your Name",
phEmail: "Your Email",
phMessage: "Your Message",
sendBtn: "Send Message",
copyright: "© 2026 Tubbees. All rights reserved.",
sizeLabel: "Size",
priceLabel: "Price",
sprayVal: "1 spray",
notesBtn: "View Notes",
msgSent: "Thank you for your message! We will get back to you soon.",
cookieMsg: "This website uses cookies to improve the user experience and save your preferences.",
acceptCookies: "Accept All",
rejectCookies: "Reject All",
},
MK: {
navHome: "Почетна",
navPerfumes: "Парфеми",
navMatch: "Совршен Спој",
navBlog: "Блог",
navAbout: "За Нас",
navContact: "Контакт",
heroTitle1: "Препуштете им се<br>на сетилата",
heroTitle2: "во<br>секоја капка<br>мирис.",
heroSubtitle: "Откријте го парфемот на кој не можете да му одолеете. Забавен. Уникатен. Незаборавен.",
heroBtn: "ИСТРАЖЕТЕ ЈА КОЛЕКЦИЈАТА НА TUBBEES",
slideHint: "Повлечете за да откриете →",
sec2Title: "Кој мирис ви одговара вам?",
sec2Subtitle: "Пронајдете го вашиот сладок фаворит меѓу нашите препознатливи мириси",
sec3Title: "Пронајдете го вашиот совршен мирис",
sec3Subtitle: "Решете го нашиот брз квиз и откријте го парфемот изработен според вашата личност.",
    startQuizBtn: "Започни го квизот",
    searchTitle: "Пребарај колекција",
    searchPh: "Внесете име на парфем или нота...",
    noResults: 'Не се пронајдени парфеми за "{q}"',
    quizModalTitle: "Изберете ги вашите мирисни ноти",
    quizModalInstruction: "Изберете 3 мириси кои најдобро го опишуваат вашето расположение",
    getMatchBtn: "Добијте го вашиот парфем",
    matchBadge: "99% Совпаѓање!",
    retakeBtn: "Повтори го квизот",
    factsBtn: "Детали за мирисот",
    sfTitle: "ДЕТАЛИ ЗА МИРИСОТ",
    sfServingSizeLabel: "Количина",
    sfConcentrationLabel: "Концентрација",
    sfTopNotes: "Горни ноти",
    sfHeartNotes: "Средни ноти",
    sfBaseNotes: "Базни ноти",
    sfSweetness: "Сладост",
    sfWarmth: "Топлина",
    sfCozy: "Удобност",
    addToCart: "Додај во кошничка",
    recTitle: "Исто така може да ви се допадне...",
    cartTitle: "Вашата кошничка",
    cartEmpty: "Вашата кошничка е моментално празна.",
    cartTotalLabel: "Вкупно:",
    checkoutBtn: "Наплати",
    blogBadge: "Мирисен журнал",
    blogSectionTitle: "Хроники за парфеми и совети",
    blogSectionSubtitle: "Совладајте ја уметноста на носење, избирање и чување на вашите омилени мириси.",
    readFull: "Прочитајте го целиот артикл →",
    aboutTitle: "За Нас",
    aboutIntro: "Tubbees е бренд за парфеми кој ја претвора уметноста на мирисот во прослава на вкусот. Основан со едноставна цел—да ја улови есенцијата на вашите омилени вкусови и да ги оживее во шише. Ја совладавме уметноста на создавање мириси кои ве пренесуваат директно во свет на слатки задоволства и десерти. Тоа е како вашиот омилен десерт—без калории!",
    role1: "Генерален директор / CEO",
    desc1: "Главното јавно лице и водечки директор кој го управува целиот корпоративен екосистем. Сите главни одлуки за визијата на брендот и стратегијата одат преку неа.",
    role2: "Директор за операции / COO",
    desc2: "Ко-директор на матичната компанија, кој управува со оперативниот план, правниот надзор и управувањето со средствата заедно со Шамли.",
    role3: "Директор",
    desc3: "Клучен член на одборот на директори кој држи клучни правни и оперативни лидерски позиции низ малопродажната империја.",
    footerDesc: "Создавање уникатни искуства со мириси и вкусови.",
    emailLabel: "Е-пошта:",
    phoneLabel: "Телефон:",
    touchTitle: "Контактирајте нè",
    touchSubtitle: "Имате прашања или повратни информации? Испратете ни порака.",
    phName: "Вашето име",
    phEmail: "Вашата е-пошта",
    phMessage: "Вашата порака",
    sendBtn: "Испрати порака",
    copyright: "© 2026 Tubbees. Сите права се задржани.",
    sizeLabel: "Големина",
    priceLabel: "Цена",
    sprayVal: "1 прскање",
    notesBtn: "Види ноти",
    msgSent: "Ви благодариме за пораката! Ќе ве контактираме наскоро.",
    cookieMsg: "Оваа веб-локација користи колачиња за подобрување на корисничкото искуство и зачувување на вашите преференции.",
    acceptCookies: "Прифати ги сите",
    rejectCookies: "Одбиј ги сите"
}
};
    const noteTranslations = {
    'citrus': { EN: 'citrus', MK: 'цитрус' },
    'coffee': { EN: 'coffee', MK: 'кафе' },
    'chocolate': { EN: 'chocolate', MK: 'чоколадо' },
    'blueberry': { EN: 'blueberry', MK: 'боровинка' },
    'strawberry': { EN: 'strawberry', MK: 'јагода' },
    'candy': { EN: 'candy', MK: 'бонбона' },
    'raspberry': { EN: 'raspberry', MK: 'малина' },
    'berry': { EN: 'berry', MK: 'шумско овошје' },
    'mango': { EN: 'mango', MK: 'манго' },
    'green tea': { EN: 'green tea', MK: 'зелен чај' },
    'passion fruit': { EN: 'passion fruit', MK: 'маракуја' },
    'vanilla': { EN: 'vanilla', MK: 'ванила' },
    'cream': { EN: 'cream', MK: 'крем' },
    'caramel': { EN: 'caramel', MK: 'карамела' },
    'hazelnut': { EN: 'hazelnut', MK: 'лешник' }
};
    const perfumeData = [
    {
        id: 'matcha-heaven',
        name:{ EN: 'Matcha Made in Heaven', MK: 'Matcha Made in Heaven' },
        tagline: { EN: 'Earthy, creamy, quietly addictive.', MK: 'Земјест, кремаст, суптилно привлачен.' },
        img: 'images/tub-matcha.png',
        desc: {
        EN: 'Ceremonial matcha and green tea leaf over a creamy latte heart with rice milk, drying down to white musk. Calm, green and deeply chic.',
        MK: 'Церемонијална мача и листови зелен чај врз срце од кремасто лате со оризово млеко, завршувајќи со бел мошус. Мирен, свеж и шик.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Matcha tea', MK: 'Мача чај' }, mg: '14 mg' },
    { name: { EN: 'Green tea leaf', MK: 'Лист од зелен чај' }, mg: '8 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Creamy latte', MK: 'Кремасто лате' }, mg: '12 mg' },
    { name: { EN: 'Rice milk', MK: 'Оризово млеко' }, mg: '8 mg' }
        ],
        baseNotes: [
    { name: { EN: 'White musk', MK: 'Бел мошус' }, mg: '8 mg' },
    { name: { EN: 'Gentle woods', MK: 'Нежни дрвенести ноти' }, mg: '5 mg' }
        ],
        metrics: {
        sweetness: { percent: '26%', fill: 26 },
        warmth: { percent: '30%', fill: 30 },
        cozy: { percent: '40%', fill: 40 }
    }
    },
    {
        id: 'berry-explosion',
        name: { EN: 'Berry Explosion', MK: 'Berry Explosion' },
        tagline: { EN: 'Juicy, vibrant, irresistibly sweet.', MK: 'Сочен, жив, неодоливо сладок.' },
        img: 'images/tub-berry.png',
        desc: {
        EN: 'A lush avalanche of wild strawberries and crushed red currants blended with sweet whipped vanilla cream.',
        MK: 'Раскошна лавина од диви јагоди и издробена црвена рибизла измешана со слатка изматена ванила.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Wild strawberries', MK: 'Диви јагоди' }, mg: '16 mg' },
    { name: { EN: 'Fresh raspberry', MK: 'Свежа малина' }, mg: '10 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Red currant nectar', MK: 'Нектар од црвена рибизла' }, mg: '11 mg' },
    { name: { EN: 'Soft rose petals', MK: 'Меки ливчиња од роза' }, mg: '6 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Whipped sugar', MK: 'Изматен шеќер' }, mg: '9 mg' },
    { name: { EN: 'Vanilla musk', MK: 'Ванила мошус' }, mg: '7 mg' }
        ],
        metrics: {
        sweetness: { percent: '85%', fill: 85 },
        warmth: { percent: '30%', fill: 30 },
        cozy: { percent: '65%', fill: 65 }
    }
    },
    {
        id: 'blueberry-sorbet',
        name: 'Blueberry Sorbet',
        name: { EN: 'Blueberry Sorbet', MK: 'Blueberry Sorbet' },
        tagline: { EN: 'Chilled, tart, beautifully smooth.', MK: 'Освежителен, киселкаст, совршено мазен.' },
        img: 'images/tub-blueberry.png',
        desc: {
        EN: 'Cool frosted blueberries drizzled with citrus zest and resting over soft orchid and sweet vanilla.',
        MK: 'Ладни замрзнати боровинки прелиени со цитрусна кора врз мека орхидеја и слатка ванила.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Ripe blueberries', MK: 'Зрели боровинки' }, mg: '15 mg' },
    { name: { EN: 'Iced lemon zest', MK: 'Замрзната кора од лимон' }, mg: '7 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Blueberry sorbet', MK: 'Сорбе од боровинка' }, mg: '14 mg' },
    { name: { EN: 'Frosted orchid', MK: 'Замрзната орхидеја' }, mg: '5 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Creamy vanilla', MK: 'Кремаста ванила' }, mg: '10 mg' },
    { name: { EN: 'Sweet musk', MK: 'Сладок мошус' }, mg: '6 mg' }
        ],
        metrics: {
        sweetness: { percent: '60%', fill: 60 },
        warmth: { percent: '20%', fill: 20 },
        cozy: { percent: '50%', fill: 50 }
    }
    },
    {
        id: 'candy-apple',
        name: { EN: 'Candy Apple', MK: 'Candy Apple' },
        tagline: { EN: 'Crisp, caramelized, playful fun.', MK: 'Крцкав, карамелизиран, забавен.' },
        img: 'images/tub-candy-apple.png',
        desc: {
        EN: 'Crisp green apple dipped into molten brown sugar caramel with a dusting of cinnamon spice.',
        MK: 'Крцкаво зелено јаболко потопено во стопен карамел од кафеав шеќер со цимет.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Granny Smith apple', MK: 'Грени Смит јаболко' }, mg: '18 mg' },
    { name: { EN: 'Candied glaze', MK: 'Слатка глазура' }, mg: '9 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Spiced cinnamon', MK: 'Зачинет цимет' }, mg: '7 mg' },
    { name: { EN: 'Melted sugar', MK: 'Растопен шеќер' }, mg: '12 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Caramelized vanilla', MK: 'Карамелизирана ванила' }, mg: '10 mg' },
    { name: { EN: 'Oakwood', MK: 'Дабово дрво' }, mg: '4 mg' }
        ],
        metrics: {
        sweetness: { percent: '78%', fill: 78 },
        warmth: { percent: '55%', fill: 55 },
        cozy: { percent: '60%', fill: 60 }
    }
    },
    {
        id: 'golden-praline-bliss',
        name: { EN: 'Golden Praline Bliss', MK: 'Golden Praline Bliss' },
        tagline: { EN: 'Decadent, nutty, rich warmth.', MK: 'Декадентен, оревчест, топол.' },
        img: 'images/tub-golden-praline.png',
        desc: {
        EN: 'Warm roasted hazelnuts smothered in butterscotch caramel and rich amber woodiness.',
        MK: 'Топли печени лешници прелиени со карамел и богата амбер дрвенеста нота.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Toasted hazelnut', MK: 'Печен лешник' }, mg: '17 mg' },
    { name: { EN: 'Brown sugar', MK: 'Кафеав шеќер' }, mg: '11 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Golden caramel', MK: 'Златен карамел' }, mg: '15 mg' },
    { name: { EN: 'Butterscotch', MK: 'Сладок карамел крема' }, mg: '8 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Warm amber', MK: 'Топол ќилибар' }, mg: '9 mg' },
    { name: { EN: 'Sandalwood', MK: 'Сандалово дрво' }, mg: '6 mg' }
        ],
        metrics: {
        sweetness: { percent: '90%', fill: 90 },
        warmth: { percent: '88%', fill: 88 },
        cozy: { percent: '92%', fill: 92 }
    }
    },
    {
        id: 'lemon-alicous',
        name: { EN: 'Lemon-A-licious', MK: 'Lemon-A-licious' },
        tagline: { EN: 'Bright, citrusy, sweet bakery comfort.', MK: 'Светол, цитрусен, сладок пекарски ужиток.' },
        img: 'images/tub-lemon.png',
        desc: {
        EN: 'Zesty lemon tart filling baked inside a vanilla wafer crust topped with powdered sugar.',
        MK: 'Освежително полнење од лимон печено во ванила кора и посипано со шеќер во прав.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Candied lemon peel', MK: 'Кандирана кора од лимон' }, mg: '16 mg' },
    { name: { EN: 'Meyer lemon', MK: 'Мајер лимон' }, mg: '9 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Lemon curd', MK: 'Крем од лимон' }, mg: '12 mg' },
    { name: { EN: 'Vanilla sponge', MK: 'Ванила бисквит' }, mg: '7 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Powdered sugar', MK: 'Шеќер во прав' }, mg: '8 mg' },
    { name: { EN: 'White musk', MK: 'Бел мошус' }, mg: '5 mg' }
        ],
        metrics: {
        sweetness: { percent: '50%', fill: 50 },
        warmth: { percent: '35%', fill: 35 },
        cozy: { percent: '45%', fill: 45 }
    }
    },
    {
        id: 'sweet-mango',
        name: { EN: 'Sweet Mango Melody', MK: 'Sweet Mango Melody' },
        tagline: { EN: 'Tropical, lush, pure sunshine.', MK: 'Тропски, буен, чисто сонце.' },
        img: 'images/tub-mango.png',
        desc: {
        EN: 'Sun-ripened tropical mango slices dripping in passionfruit nectar and peach blossom.',
        MK: 'Зрели тропски парчиња манго потопени во нектар од маракуја и праска.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'King mango', MK: 'Кралско манго' }, mg: '19 mg' },
    { name: { EN: 'Passionfruit', MK: 'Маракуја' }, mg: '9 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Peach nectar', MK: 'Нектар од праска' }, mg: '10 mg' },
    { name: { EN: 'Coconut water', MK: 'Кокосова вода' }, mg: '6 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Sugared amber', MK: 'Шеќерен ќилибар' }, mg: '7 mg' },
    { name: { EN: 'Solar musk', MK: 'Сончев мошус' }, mg: '5 mg' }
        ],
        metrics: {
        sweetness: { percent: '82%', fill: 82 },
        warmth: { percent: '60%', fill: 60 },
        cozy: { percent: '50%', fill: 50 }
    }
    },
    {
        id: 'passion-mojito',
        name: { EN: 'Passion Fruit Mojito', MK: 'Passion Fruit Mojito' },
        tagline: { EN: 'Sparkling, tangy, icy freshness.', MK: 'Пенест, киселкаст, ледена свежина.' },
        img: 'images/tub-passion-fruit.png',
        desc: {
        EN: 'Exotic passionfruit stirred with crushed mint leaves, lime soda, and pure sugar cane.',
        MK: 'Егзотична маракуја измешана со издробена нане, сода од лимета и шеќерна трска.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Tangy passionfruit', MK: 'Киселкаста маракуја' }, mg: '15 mg' },
    { name: { EN: 'Crushed mint', MK: 'Издробено нане' }, mg: '8 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Sparkling lime soda', MK: 'Сода од лимета' }, mg: '11 mg' },
    { name: { EN: 'Guava juice', MK: 'Сок од гуава' }, mg: '7 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Cane sugar', MK: 'Шеќерна трска' }, mg: '9 mg' },
    { name: { EN: 'Clear musk', MK: 'Чист мошус' }, mg: '5 mg' }
        ],
        metrics: {
        sweetness: { percent: '65%', fill: 65 },
        warmth: { percent: '25%', fill: 25 },
        cozy: { percent: '35%', fill: 35 }
    }
    },
    {
        id: 'tira-miss-you',
        name: { EN: 'Tira-Miss-You', MK: 'Tira-Miss-You' },
        tagline: { EN: 'Deep, roasted, dark cocoa indulgence.', MK: 'Длабок, печен, темно какао задоволство.' },
        img: 'images/tub-tira-miss-you.png',
        desc: {
        EN: 'Rich dark espresso soaked ladyfingers with whipped mascarpone cream and cocoa powder.',
        MK: 'Бисквити потопени во темно еспресо со маскарпоне крем и какао во прав.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Dark roasted espresso', MK: 'Темно печено еспресо' }, mg: '18 mg' },
    { name: { EN: 'Dark rum', MK: 'Темен рум' }, mg: '6 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Mascarpone cream', MK: 'Маскарпоне крем' }, mg: '13 mg' },
    { name: { EN: 'Cocoa powder', MK: 'Какао во прав' }, mg: '10 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Vanilla pod', MK: 'Ванила' }, mg: '8 mg' },
    { name: { EN: 'Coffee bean', MK: 'Зрно кафе' }, mg: '6 mg' }
        ],
        metrics: {
        sweetness: { percent: '70%', fill: 70 },
        warmth: { percent: '80%', fill: 80 },
        cozy: { percent: '85%', fill: 85 }
    }
    },
    {
        id: 'tres-leches',
        name: { EN: 'Tres Leches', MK: 'Tres Leches' },
        tagline: { EN: 'Velvety, milky, golden bakery.', MK: 'Кадифест, млечен, златен слаткиш.' },
        img: 'images/tub-tres-lechos.png',
        desc: {
        EN: 'Fluffy sponge cake drenched in sweet condensed milk, evaporated cream, and warm vanilla syrup.',
        MK: 'Мек пандишпан потопен во слатко кондензирано млеко, крем и ванила сируп.'
    },
        servingSize: '1 spray',
        concentration: 'EAU DE PARFUM 15%',
        price: '€13',
        rawPrice: 13,
        size: '50 ml / 1.7 fl.oz',
        topNotes: [
    { name: { EN: 'Condensed milk', MK: 'Кондензирано млеко' }, mg: '17 mg' },
    { name: { EN: 'Butter cake', MK: 'Путтер колач' }, mg: '10 mg' }
        ],
        heartNotes: [
    { name: { EN: 'Evaporated milk', MK: 'Концентрирано млеко' }, mg: '14 mg' },
    { name: { EN: 'Cinnamon dust', MK: 'Цимет во прав' }, mg: '4 mg' }
        ],
        baseNotes: [
    { name: { EN: 'Warm vanilla syrup', MK: 'Топол ванила сируп' }, mg: '12 mg' },
    { name: { EN: 'Sugar cane', MK: 'Шеќерна трска' }, mg: '6 mg' }
        ],
        metrics: {
        sweetness: { percent: '95%', fill: 95 },
        warmth: { percent: '75%', fill: 75 },
        cozy: { percent: '90%', fill: 90 }
    }
    }
    ];
    const blogData = [
    {
        img: "images/blogThumbnail1.png",
        tag: { EN: "Guide & Technique", MK: "Водич и техники" },
        title: { EN: "How to Layer Different Scents Like a Master Perfumer", MK: "Како да комбинирате мириси како мајстор парфимер" },
        excerpt: {
        EN: "Combine gourmand, floral, and citrus notes without overpowering your senses. Learn the golden rules of fragrance layering for a truly bespoke aura.",
        MK: "Комбинирајте слатки, цветни и цитрусни ноти без да ги преоптоварите сетилата. Научете ги златните правила за комбинирање парфеми."
    },
        fullContent: {
        EN: `<p>Fragrance layering is the art of combining multiple perfumes or scented body products to create a signature scent that is entirely unique to you.</p>
                     <p><strong>Rule 1: Start with Heavy Base Notes</strong><br>Always apply your heaviest, deepest fragrance first—think vanilla, amber, sandalwood, or oud. These act as the foundation for lighter notes to sit upon.</p>
                     <p><strong>Rule 2: Add Lighter Notes on Top</strong><br>Layer fresh citrus, bright florals, or crisp greens over your base notes. The lighter molecules will diffuse quickly, while the rich base provides longevity.</p>`,
        MK: `<p>Комбинирањето мириси е уметност на спојување повеќе парфеми за да креирате уникатен личен мирис.</p>
                     <p><strong>Правило 1: Започнете со тешки базни ноти</strong><br>Секогаш нанесете го најдлабокиот мирис прво—како ванила, ќилибар или сандалово дрво. Тие служат како основа.</p>
                     <p><strong>Правило 2: Додадете полесни ноти одозгора</strong><br>Нанесете цитрус или цветни ноти врз базата. Полесните ноти брзо ќе се рашират, додека базата обезбедува долготрајност.</p>`
    }
    },
    {
        img: "images/blogThumbnail2.png",
        tag: { EN: "Perfume 101", MK: "Основи за парфеми" },
        title: { EN: "Eau de Parfum vs. Eau de Toilette: What's the Real Difference?", MK: "Eau de Parfum наспроти Eau de Toilette: Која е вистинската разлика?" },
        excerpt: {
        EN: "Demystifying fragrance concentrations, oil percentages, and projection so you can choose the right intensity for every single occasion.",
        MK: "Разјаснување на концентрациите на мириси, процентите на масло за да го изберете вистинскиот интензитет за секоја пригода."
    },
        fullContent: {
        EN: `<p>The core difference between Eau de Parfum (EDP) and Eau de Toilette (EDT) comes down to fragrance oil concentration, which directly impacts how long the scent lasts on your skin.</p>
                     <p><strong>Eau de Parfum (15% – 20% Oil):</strong> Higher concentration means longer wear time (typically 6–8 hours). Great for evening events or cold weather when scents fade faster.</p>
                     <p><strong>Eau de Toilette (5% – 15% Oil):</strong> Lighter, brighter, and typically lasts 3–5 hours. Ideal for daily office wear or warm summer days.</p>`,
        MK: `<p>Главната разлика меѓу Eau de Parfum (EDP) и Eau de Toilette (EDT) е во концентрацијата на мирисното масло, што директно влијае на долготрајноста на кожата.</p>
                     <p><strong>Eau de Parfum (15% – 20% масло):</strong> Повисока концентрација значи подолга трајност (обично 6–8 часа). Одлично за вечерни настани.</p>
                     <p><strong>Eau de Toilette (5% – 15% масло):</strong> Полесен мирис кој трае 3–5 часа. Идеален за секојдневна употреба.</p>`
    }
    },
    {
        img: "images/blogThumbnail3.png",
        tag: { EN: "Pro Tips", MK: "Корисни совети" },
        title: { EN: "5 Essential Hacks to Make Your Perfume Last All Day", MK: "5 трикови за вашиот парфем да трае цел ден" },
        excerpt: {
        EN: "From pulse point prep to moisturization secrets, discover simple habit shifts that dramatically extend your perfume's longevity.",
        MK: "Откријте едноставни трикови со кои драстично ќе ја зголемите долготрајноста на вашиот парфем."
    },
        fullContent: {
        EN: `<p>If your favorite perfume seems to disappear after just an hour or two, try implementing these proven longevity techniques:</p>
                     <p>1. <strong>Moisturize First:</strong> Fragrance binds far better to hydrated skin. Apply an unscented lotion or vaseline on pulse points before spraying.</p>
                     <p>2. <strong>Don't Rub Your Wrists:</strong> Friction breaks down top notes faster, altering the intended evolution of the fragrance balance.</p>
                     <p>3. <strong>Target Pulse Points:</strong> Spray on warm areas like the neck, inner elbows, and behind the knees for maximum scent diffusion.</p>`,
        MK: `<p>Ако вашиот омилен парфем исчезнува брзо, пробајте ги овие техники:</p>
                     <p>1. <strong>Хидрирајте ја кожата:</strong> Парфемот подобро се врзува за влажна кожа. Нанесете лосион пред да испрскате.</p>
                     <p>2. <strong>Не ги тријте зглобовите:</strong> Триењето ги уништува горните ноти побрзо.</p>
                     <p>3. <strong>Прскајте на пулсните точки:</strong> Нанесете на вратот и зглобовите за максимална дифузија.</p>`
    }
    },
    {
        img: "images/blogThumbnail4.png",
        tag: { EN: "Fragrance Science", MK: "Мирисна наука" },
        title: { EN: "Understanding the Fragrance Pyramid: Top, Heart, and Base Notes", MK: "Разбирање на мирисната пирамида: Горни, средни и базни ноти" },
        excerpt: {
        EN: "Uncover why your perfume changes hours after application and how top, heart, and base notes unfold dynamically on your skin.",
        MK: "Откријте зошто парфемот се менува со текот на времето и како нотите се развиваат на кожата."
    },
        fullContent: {
        EN: `<p>Perfume isn't static; it evolves in three stages, known as the fragrance pyramid:</p>
                     <p><strong>Top Notes:</strong> The initial burst lasting 5 to 15 minutes. Usually light citrus or berries.</p>
                     <p><strong>Heart Notes:</strong> The core of the fragrance, revealing itself after top notes fade and lasting 2 to 4 hours (florals, spices, gourmand elements).</p>
                     <p><strong>Base Notes:</strong> The rich grounding elements like wood, musk, and vanilla that anchor the scent for up to 12 hours.</p>`,
        MK: `<p>Парфемот се развива во три фази, познати како мирисна пирамида:</p>
                     <p><strong>Горни ноти:</strong> Првичниот бран кој трае 5 до 15 минути (цитрус или овошје).</p>
                     <p><strong>Средни ноти:</strong> Срцето на мирисот кое трае 2 до 4 часа (цвеќиња, зачини).</p>
                     <p><strong>Базни ноти:</strong> Длабоките ноти како дрво, мошус и ванила кои траат до 12 часа.</p>`
    }
    },
    {
        img: "images/blogThumbnail5.png",
        tag: { EN: "Care & Storage", MK: "Нега и чување" },
        title: { EN: "Are You Storing Your Perfumes Wrong? How to Preserve Scents", MK: "Дали погрешно ги чувате парфемите? Како да го зачувате нивниот квалитет" },
        excerpt: {
        EN: "Heat, light, and humidity can spoil precious fragrance oils. Learn where to store your bottles to keep them fresh for years.",
        MK: "Топлината и светлината можат да ги уништат парфемските масла. Научете каде да ги чувате вашите шишиња."
    },
        fullContent: {
        EN: `<p>Improper storage ruins fine perfumes faster than age itself. Here is how to keep your collection pristine:</p>
                     <p><strong>Avoid the Bathroom:</strong> Steam and temperature fluctuations break down chemical bonds in fragrance oils rapidly.</p>
                     <p><strong>Keep Away from Sunlight:</strong> UV rays break down aromatic compounds and cause discoloration.</p>
                     <p><strong>Optimal Storage:</strong> Keep bottles inside a cool, dark wardrobe or drawer away from direct light sources and heat vents.</p>`,
        MK: `<p>Погрешното чување ги уништува парфемите. Еве како да го спречите тоа:</p>
                     <p><strong>Избегнувајте го бањата:</strong> Влагата и промената на температурата ги уништуваат мирисните масла.</p>
                     <p><strong>Чувајте подалеку од сончева светлина:</strong> УВ зраците ги разградуваат мирисните соединенија.</p>
                     <p><strong>Оптимално чување:</strong> Чувајте ги шишињата на ладно и темно место, како плакар или фиока.</p>`
    }
    }
    ];
    const noteToPerfumeMap = {
    'citrus': 'lemon-alicous',
    'coffee': 'tira-miss-you',
    'chocolate': 'golden-praline-bliss',
    'blueberry': 'blueberry-sorbet',
    'strawberry': 'berry-explosion',
    'candy': 'candy-apple',
    'raspberry': 'berry-explosion',
    'berry': 'berry-explosion',
    'mango': 'sweet-mango',
    'green tea': 'matcha-heaven',
    'passion fruit': 'passion-mojito',
    'vanilla': 'tres-leches',
    'cream': 'tres-leches',
    'caramel': 'golden-praline-bliss',
    'hazelnut': 'golden-praline-bliss'
};

    let selectedQuizScents = [];
    let cart = [];
    let currentActivePerfume = null;
    let matchedPerfume = null;

    function applyTranslations() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
    el.innerHTML = t[key];
}
});

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) {
    el.placeholder = t[key];
}
});

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
    searchInput.placeholder = t.searchPh;
}

    renderPerfumes();
    renderBlogCards();
    renderQuizScents();
    renderCart();

    if (currentActivePerfume) {
    openModal(currentActivePerfume);
}
    if (matchedPerfume) {
    updateMatchModalUI();
}
}
    document.querySelectorAll('#langToggle span[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelectorAll('#langToggle span[data-lang]')
            .forEach(s => s.classList.remove('active'));

        btn.classList.add('active');

        currentLang = btn.getAttribute('data-lang');

        if (hasConsent()) {
            setCookie('app_lang', currentLang, 365);
        }

        applyTranslations();
    });
});

    function renderPerfumes() {
    const perfumeGrid = document.getElementById('perfumeGrid');
    if (!perfumeGrid) return;
    perfumeGrid.innerHTML = '';
    const t = translations[currentLang];

    perfumeData.forEach(perfume => {
    const card = document.createElement('div');
    card.className = 'perfume-card';
    card.onclick = () => openModal(perfume);

    card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${perfume.img}" alt="${perfume.name[currentLang]}">
                </div>
                <h3 class="perfume-name">${perfume.name[currentLang]}</h3>
                <p class="perfume-desc">${perfume.desc[currentLang]}</p>
                <div class="card-action-row">
                    <div class="card-price-row">
                        <span class="card-price">${perfume.price}</span>
                    </div>
                    <div class="card-btn-group">
                        <button class="notes-btn" onclick="event.stopPropagation(); openModalByData('${perfume.id}')">${t.notesBtn}</button>
                        <button class="card-cart-btn" onclick="event.stopPropagation(); addToCartById('${perfume.id}')">${t.addToCart}</button>
                    </div>
                </div>
            `;
    perfumeGrid.appendChild(card);
});
}

    function renderBlogCards() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;
    blogGrid.innerHTML = '';
    const t = translations[currentLang];

    blogData.forEach((blog, index) => {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.onclick = function() { openBlogModalByIndex(index); };
    article.innerHTML = `
                <div class="blog-img-wrapper">
                    <img src="${blog.img}" alt="${blog.title[currentLang]}">
                </div>
                <div class="blog-content">
                    <span class="blog-tag">${blog.tag[currentLang]}</span>
                    <h3 class="blog-title">${blog.title[currentLang]}</h3>
                    <div class="blog-excerpt-fade">${blog.excerpt[currentLang]}</div>
                    <span class="blog-read-more">${t.readFull}</span>
                </div>
            `;
    blogGrid.appendChild(article);
});
}

    function addToCartById(id) {
    const item = perfumeData.find(p => p.id === id);
    if (item) addToCart(item);
}

    const perfumeModal = document.getElementById('perfumeModal');
    const modalClose = document.getElementById('modalClose');

    function openModalByData(id) {
    const item = perfumeData.find(p => p.id === id);
    if (item) openModal(item);
}

    function createNoteListHTML(notesArray) {
    return notesArray.map(n => `
            <div class="sf-note-row">
                <span>${n.name[currentLang]}</span>
                <span>${n.mg}</span>
            </div>
        `).join('');
}

    function openModal(item) {
    currentActivePerfume = item;
    const t = translations[currentLang];

    const modalContainer = document.querySelector('#perfumeModal .modal-card');
    if (modalContainer) {
    modalContainer.scrollTop = 0;
}

    document.getElementById('sfPerfumeName').textContent = item.name[currentLang];
    document.getElementById('sfServingSize').textContent = t.sprayVal;
    document.getElementById('sfConcentration').textContent = item.concentration;

    document.getElementById('sfTopNotesList').innerHTML = createNoteListHTML(item.topNotes);
    document.getElementById('sfHeartNotesList').innerHTML = createNoteListHTML(item.heartNotes);
    document.getElementById('sfBaseNotesList').innerHTML = createNoteListHTML(item.baseNotes);

    document.getElementById('sfSweetnessVal').textContent = item.metrics.sweetness.percent;
    document.getElementById('sfSweetnessBar').style.width = item.metrics.sweetness.fill + '%';

    document.getElementById('sfWarmthVal').textContent = item.metrics.warmth.percent;
    document.getElementById('sfWarmthBar').style.width = item.metrics.warmth.fill + '%';

    document.getElementById('sfCozyVal').textContent = item.metrics.cozy.percent;
    document.getElementById('sfCozyBar').style.width = item.metrics.cozy.fill + '%';

    document.getElementById('modalTitle').textContent = item.name[currentLang];
    document.getElementById('modalTagline').textContent = item.tagline[currentLang];
    document.getElementById('modalDesc').textContent = item.desc[currentLang];
    document.getElementById('modalImg').src = item.img;
    document.getElementById('badgeConc').textContent = item.concentration.replace('EAU DE PARFUM', 'EAU DE PARFUM •');
    document.getElementById('badgeSize').textContent = `${t.sizeLabel}: ${item.size}`;
    document.getElementById('badgePrice').textContent = `${t.priceLabel}: ${item.price}`;

    const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
    if (modalAddToCartBtn) {
    modalAddToCartBtn.onclick = () => addToCart(item);
}

    renderRecommendations(item.id);
    perfumeModal.classList.add('open');
}

    function closeModal() {
    perfumeModal.classList.remove('open');
}

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (perfumeModal) {
    perfumeModal.addEventListener('click', (e) => {
        if (e.target === perfumeModal) closeModal();
    });
}

    function renderRecommendations(currentId) {
    const grid = document.getElementById('recommendationsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const recs = perfumeData.filter(p => p.id !== currentId).slice(0, 3);
    recs.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'rec-card';
    card.onclick = () => openModal(rec);
    card.innerHTML = `
                <img src="${rec.img}" alt="${rec.name[currentLang]}">
                <h5 class="rec-card-title">${rec.name[currentLang]}</h5>
            `;
    grid.appendChild(card);
});
}

    const searchModal = document.getElementById('searchModal');
    const searchModalClose = document.getElementById('searchModalClose');
    const navSearchBtn = document.getElementById('navSearchBtn');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    function openSearchModal() {
    searchModal.classList.add('open');
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 100);
}

    function closeSearchModal() {
    searchModal.classList.remove('open');
}

    function renderSearchResults(query) {
    searchResults.innerHTML = '';
    const q = query.toLowerCase().trim();
    const t = translations[currentLang];

    const filtered = perfumeData.filter(item => {
    if (!q) return true;
    const matchName = item.name[currentLang].toLowerCase().includes(q);
    const matchDesc = item.desc[currentLang].toLowerCase().includes(q);
    const matchTagline = item.tagline[currentLang].toLowerCase().includes(q);
    const matchTop = item.topNotes.some(n => n.name[currentLang].toLowerCase().includes(q));
    const matchHeart = item.heartNotes.some(n => n.name[currentLang].toLowerCase().includes(q));
    const matchBase = item.baseNotes.some(n => n.name[currentLang].toLowerCase().includes(q));
    return matchName || matchDesc || matchTagline || matchTop || matchHeart || matchBase;
});

    if (filtered.length === 0) {
    searchResults.innerHTML = `<div class="search-no-results">${t.noResults.replace('{q}', query)}</div>`;
    return;
}

    filtered.forEach(item => {
    const row = document.createElement('div');
    row.className = 'search-result-item';
    row.onclick = () => {
    closeSearchModal();
    openModal(item);
};
    row.innerHTML = `
                <img src="${item.img}" alt="${item.name[currentLang]}" class="search-result-img">
                <div class="search-result-info">
                    <h4 class="search-result-title">${item.name[currentLang]}</h4>
                    <p class="search-result-desc">${item.desc[currentLang]}</p>
                </div>
            `;
    searchResults.appendChild(row);
});
}

    if (navSearchBtn) navSearchBtn.addEventListener('click', openSearchModal);
    if (searchModalClose) searchModalClose.addEventListener('click', closeSearchModal);
    if (searchModal) {
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearchModal();
    });
}

    if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
    });
}

    const quizModal = document.getElementById('quizModal');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizModalClose = document.getElementById('quizModalClose');
    const scentsGrid = document.getElementById('scentsGrid');
    const quizProgressBar = document.getElementById('quizProgressBar');
    const getMatchBtn = document.getElementById('getMatchBtn');
    const matchResultModal = document.getElementById('matchResultModal');
    const matchResultClose = document.getElementById('matchResultClose');
    const retakeQuizBtn = document.getElementById('retakeQuizBtn');
    const fragranceFactsBtn = document.getElementById('fragranceFactsBtn');

    function renderQuizScents() {
    if (!scentsGrid) return;
    scentsGrid.innerHTML = '';
    Object.keys(noteToPerfumeMap).forEach((scent) => {
    const chip = document.createElement('div');
    chip.className = 'scent-chip';
    if (selectedQuizScents.includes(scent)) {
    chip.classList.add('selected');
}
    chip.innerHTML = `
                <span class="chip-label">${noteTranslations[scent][currentLang]}</span>
            `;
    chip.onclick = () => toggleScentSelection(scent);
    scentsGrid.appendChild(chip);
});
}

    function toggleScentSelection(name) {
    if (selectedQuizScents.includes(name)) {
    selectedQuizScents = selectedQuizScents.filter(s => s !== name);
} else {
    if (selectedQuizScents.length < 3) {
    selectedQuizScents.push(name);
}
}

    const pct = Math.round((selectedQuizScents.length / 3) * 100);
    if (quizProgressBar) quizProgressBar.style.width = pct + '%';

    if (selectedQuizScents.length === 3) {
    getMatchBtn.classList.add('active');
} else {
    getMatchBtn.classList.remove('active');
}

    renderQuizScents();
}

    if (startQuizBtn) {
    startQuizBtn.onclick = () => {
        selectedQuizScents = [];
        if (quizProgressBar) quizProgressBar.style.width = '0%';
        if (getMatchBtn) getMatchBtn.classList.remove('active');
        renderQuizScents();
        quizModal.classList.add('open');
    };
}

    if (quizModalClose) quizModalClose.onclick = () => quizModal.classList.remove('open');

    if (getMatchBtn) {
    getMatchBtn.onclick = () => {
        if (selectedQuizScents.length === 3) {
            quizModal.classList.remove('open');

            let matchedPerfumeId = null;
            for (const note in noteToPerfumeMap) {
                if (selectedQuizScents.includes(note)) {
                    matchedPerfumeId = noteToPerfumeMap[note];
                    break;
                }
            }

            if (!matchedPerfumeId) matchedPerfumeId = 'tres-leches';

            matchedPerfume = perfumeData.find(p => p.id === matchedPerfumeId);
            updateMatchModalUI();

            matchResultModal.classList.add('open');
        }
    };
}

    function updateMatchModalUI() {
    if (!matchedPerfume) return;
    const t = translations[currentLang];
    document.getElementById('matchResultName').textContent = matchedPerfume.name[currentLang];
    document.getElementById('matchResultTagline').textContent = matchedPerfume.tagline[currentLang];
    document.getElementById('matchResultDesc').textContent = matchedPerfume.desc[currentLang];
    document.getElementById('matchResultTitle').textContent = matchedPerfume.name[currentLang];
    document.getElementById('matchResultSubTagline').textContent = matchedPerfume.tagline[currentLang];
    document.getElementById('matchResultImg').src = matchedPerfume.img;
    document.getElementById('matchBadgeConc').textContent = matchedPerfume.concentration.replace('EAU DE PARFUM', 'EAU DE PARFUM •');
    document.getElementById('matchBadgeSize').textContent = `${t.sizeLabel}: ${matchedPerfume.size}`;
    document.getElementById('matchBadgePrice').textContent = `${t.priceLabel}: ${matchedPerfume.price}`;
}

    if (matchResultClose) matchResultClose.onclick = () => matchResultModal.classList.remove('open');

    if (retakeQuizBtn) {
    retakeQuizBtn.onclick = () => {
        matchResultModal.classList.remove('open');
        startQuizBtn.click();
    };
}

    if (fragranceFactsBtn) {
    fragranceFactsBtn.onclick = () => {
        matchResultModal.classList.remove('open');
        if (matchedPerfume) {
            openModal(matchedPerfume);
        }
    };
}

    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    const navCartBtn = document.getElementById('navCartBtn');
    const cartCloseBtn = document.getElementById('cartCloseBtn');

    function openCart() {
    cartOverlay.classList.add('open');
    cartDrawer.classList.add('open');
}

    function closeCart() {
    cartOverlay.classList.remove('open');
    cartDrawer.classList.remove('open');
}

    if (navCartBtn) navCartBtn.onclick = openCart;
    if (cartCloseBtn) cartCloseBtn.onclick = closeCart;
    if (cartOverlay) cartOverlay.onclick = closeCart;

    function saveCart() {

    if (!hasConsent()) {
    return;
}

    const cartToSave = cart.map(item => ({
    id: item.id,
    qty: item.qty
}));

    setCookie(
    'cart',
    JSON.stringify(cartToSave),
    30
    );
}
    function loadCart() {

    if (!hasConsent()) {
    cart = [];
    return;
}

    const savedCart = getCookie('cart');

    if (!savedCart) {
    cart = [];
    return;
}

    try {

    const savedItems = JSON.parse(savedCart);

    cart = savedItems
    .map(savedItem => {

    const perfume = perfumeData.find(
    p => p.id === savedItem.id
    );

    if (!perfume) {
    return null;
}

    return {
    ...perfume,
    qty: savedItem.qty
};
})
    .filter(item => item !== null);

} catch (error) {

    console.error('Could not load cart:', error);

    cart = [];
}
}


    function addToCart(item) {

    const existing = cart.find(c => c.id === item.id);

    if (existing) {
    existing.qty += 1;
} else {
    cart.push({
    ...item,
    qty: 1
});
}
    saveCart();
    renderCart();
    openCart();
}


    function changeQty(id, delta) {
    const index = cart.findIndex(c => c.id === id);
    if (index !== -1) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
    cart.splice(index, 1);
}
}
    saveCart();
    renderCart();
}

    function renderCart() {
    const cartBody = document.getElementById('cartBody');
    const cartBadge = document.getElementById('cartBadge');
    const cartTotalVal = document.getElementById('cartTotalVal');
    const t = translations[currentLang];

    if (!cartBody) return;
    cartBody.innerHTML = '';

    let totalCount = 0;
    let totalPrice = 0;

    if (cart.length === 0) {
    cartBody.innerHTML = `<div class="cart-empty-msg">${t.cartEmpty}</div>`;
} else {
    cart.forEach(item => {
    totalCount += item.qty;
    totalPrice += item.rawPrice * item.qty;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
                    <img src="${item.img}" alt="${item.name[currentLang]}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name[currentLang]}</div>
                        <div class="cart-item-price">${item.price}</div>
                        <div class="cart-item-qty">
                            <button class="qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                `;
    cartBody.appendChild(cartItem);
});
}

    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartTotalVal) cartTotalVal.textContent = `€${totalPrice}`;
}
    const sliderImages = document.querySelectorAll('.slider-img');
    const flavorBadge = document.getElementById('flavorBadge');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function initHeroSlider() {
    if (!dotsContainer || sliderImages.length === 0) return;
    dotsContainer.innerHTML = '';
    sliderImages.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(idx);
    dotsContainer.appendChild(dot);
});
    updateHeroSlider();
}

    function updateHeroSlider() {
    if (sliderImages.length === 0) return;
    const total = sliderImages.length;
    sliderImages.forEach((img, i) => {
    img.classList.remove('active', 'prev', 'next');
    if (i === currentIndex) {
    img.classList.add('active');
} else if (i === (currentIndex - 1 + total) % total) {
    img.classList.add('prev');
} else if (i === (currentIndex + 1) % total) {
    img.classList.add('next');
}
});

    const activeImg = sliderImages[currentIndex];
    const key = activeImg.getAttribute('data-title-key');
    const perfume = perfumeData.find(p => p.id.includes(key));
    if (perfume && flavorBadge) {
    flavorBadge.textContent = perfume.name[currentLang];
}

    const dots = document.querySelectorAll('.dots-container .dot');
    dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
});
}

    function goToSlide(index) {
    currentIndex = index;
    updateHeroSlider();
}

    if (prevBtn) {
    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        updateHeroSlider();
    };
}

    if (nextBtn) {
    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        updateHeroSlider();
    };
}
    const blogGrid = document.getElementById('blogGrid');
    const blogPrevBtn = document.getElementById('blogPrevBtn');
    const blogNextBtn = document.getElementById('blogNextBtn');
    const blogModal = document.getElementById('blogModal');

    if (blogPrevBtn && blogGrid) {
    blogPrevBtn.onclick = () => {
        blogGrid.scrollBy({ left: -350, behavior: 'smooth' });
    };
}

    if (blogNextBtn && blogGrid) {
    blogNextBtn.onclick = () => {
        blogGrid.scrollBy({ left: 350, behavior: 'smooth' });
    };
}

    function openBlogModalByIndex(index) {
    const blog = blogData[index];
    if (!blog) return;
    document.getElementById('modalImgBlog').src = blog.img;
    document.getElementById('modalTag').textContent = blog.tag[currentLang];
    document.getElementById('modalTitleBlog').textContent = blog.title[currentLang];
    document.getElementById('modalBody').innerHTML = blog.fullContent[currentLang];
    blogModal.classList.add('active');
}

    function closeBlogModal() {
    if (blogModal) blogModal.classList.remove('active');
}

    function closeBlogModalOnBg(event) {
    if (event.target === blogModal) {
    closeBlogModal();
}
}

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
    contactForm.onsubmit = (e) => {
        e.preventDefault();
        alert(translations[currentLang].msgSent);
        contactForm.reset();
    };
}
    function setCookie(name, value, days = 30) {
    if (name !== 'cookie_consent' && !hasConsent()) return;

    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

    function setCookie(name, value, days = 30) {

    if (name !== 'cookie_consent' && !hasConsent()) {
    return;
}

    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));

    document.cookie =
    `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}


    function getCookie(name) {

    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {

    let cookie = cookies[i].trim();

    if (cookie.indexOf(nameEQ) === 0) {
    return decodeURIComponent(
    cookie.substring(nameEQ.length, cookie.length)
    );
}
}

    return null;
}


    function deleteCookie(name) {

    document.cookie =
        `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax`;
}


    function hasConsent() {
    return getCookie('cookie_consent') === 'true';
}


    function acceptCookies() {

    setCookie('cookie_consent', 'true', 365);

    const banner = document.getElementById('cookie-banner');

    if (banner) {
    banner.classList.add('hidden');
}

    setCookie('app_lang', currentLang, 365);

    saveCart();
}


    function rejectCookies() {

    setCookie('cookie_consent', 'false', 365);

    deleteCookie('app_lang');
    deleteCookie('cart');

    const banner = document.getElementById('cookie-banner');

    if (banner) {
    banner.classList.add('hidden');
}
}

    document.addEventListener('DOMContentLoaded', () => {

    const banner = document.getElementById('cookie-banner');


    if (!hasConsent()) {

    if (banner) {
    banner.classList.remove('hidden');
}

} else {

    if (banner) {
    banner.classList.add('hidden');
}
}

    const savedLang = getCookie('app_lang');

    if (savedLang === 'EN' || savedLang === 'MK') {
    currentLang = savedLang;
}

    document
    .querySelectorAll('#langToggle span[data-lang]')
    .forEach(btn => {

    btn.classList.toggle(
    'active',
    btn.getAttribute('data-lang') === currentLang
    );
});
    loadCart();
    applyTranslations();
    initHeroSlider();
    if (typeof renderProducts === 'function') {
    renderProducts();
}

});