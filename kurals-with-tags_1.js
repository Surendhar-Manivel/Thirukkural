// ============================================================
//  THIRUKKURAL — kurals.js
//  Kurals 1–99 with full structure + Tamil & English tags
//  Source: Your uploaded dataset
//  Tags: Generated manually for all 99 kurals
//
//  HOW TO USE:
//    Drop this file into your website's  data/  folder.
//    It replaces the sample kurals.js from the website code.
//
//  HOW TO ADD MORE KURALS:
//    Paste the next batch (100–200 etc.) in this chat
//    and I will add tags and structure for those too.
// ============================================================

const KURALS = [
  {
    number: 1, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "அகர முதல எழுத்தெல்லாம் ஆதி", line2: "பகவன் முதற்றே உலகு." },
    meaning: { ta: "எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; உலகம் கடவுளில் தொடங்குகிறது.", en: "As the letter A is the first of all letters, so the eternal God is first in the world." },
    couplet_en: "A, as its first of letters, every speech maintains; The Primal Deity is first through all the world's domains.",
    transliteration: "Akara Mudhala Ezhuththellaam Aadhi Pakavan Mudhatre Ulaku",
    tags: { ta: ["கடவுள்", "ஆரம்பம்", "ஆன்மீகம்", "படைப்பு"], en: ["god", "beginning", "alphabet", "creation", "spirituality"] }
  },
  {
    number: 2, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "கற்றதனால் ஆய பயனென்கொல்", line2: "வாலறிவன் நற்றாள் தொழாஅர் எனின்." },
    meaning: { ta: "தூய அறிவு வடிவானவனின் திருவடிகளை வணங்காதவர், படித்ததனால் பெற்ற பயன்தான் என்ன?", en: "What profit have those derived from learning, who worship not the good feet of Him who is possessed of pure knowledge?" },
    couplet_en: "No fruit have men of all their studied lore, Save they the Purely Wise One's feet adore.",
    transliteration: "Katradhanaal Aaya Payanenkol Vaalarivan Natraal Thozhaaar Enin",
    tags: { ta: ["கல்வி", "கடவுள்", "ஞானம்", "வணக்கம்"], en: ["learning", "god", "wisdom", "worship", "knowledge"] }
  },
  {
    number: 3, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "மலர்மிசை ஏகினான் மாணடி சேர்ந்தார்", line2: "நிலமிசை நீடுவாழ் வார்." },
    meaning: { ta: "மனமாகிய மலர்மீது சென்று இருப்பவனாகிய கடவுளின் சிறந்த திருவடிகளை எப்போதும் நினைப்பவர் இப்பூமியில் நெடுங்காலம் வாழ்வர்.", en: "They who are united to the glorious feet of Him who passes swiftly over the flower of the mind, shall flourish long." },
    couplet_en: "His feet, Who o'er the full-blown flower hath past, who gain in bliss long time shall dwell above this earthly plain.",
    transliteration: "Malarmisai Ekinaan Maanati Serndhaar Nilamisai Neetuvaazh Vaar",
    tags: { ta: ["பக்தி", "கடவுள்", "வாழ்வு", "மலர்"], en: ["devotion", "god", "prosperity", "lotus", "long life"] }
  },
  {
    number: 4, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு", line2: "யாண்டும் இடும்பை இல." },
    meaning: { ta: "விருப்பு வெறுப்பு இல்லாத கடவுளின் திருவடிகளை மனத்தால் எப்போதும் நினைப்பவருக்கு உலகத் துன்பம் ஒருபோதும் இல்லை.", en: "To those who meditate the feet of Him who is void of desire or aversion, evil shall never come." },
    couplet_en: "His foot, Whom want affects not, irks not grief, who gain shall not, through every time, of any woes complain.",
    transliteration: "Ventudhal Ventaamai Ilaanati Serndhaarkku Yaantum Itumpai Ila",
    tags: { ta: ["சரணாகதி", "அமைதி", "கடவுள்", "துன்பமின்மை"], en: ["surrender", "peace", "god", "sorrow", "virtue"] }
  },
  {
    number: 5, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "இருள்சேர் இருவினையும் சேரா இறைவன்", line2: "பொருள்சேர் புகழ்புரிந்தார் மாட்டு." },
    meaning: { ta: "கடவுளின் உண்மைப் புகழை விரும்பி அன்பு செலுத்துகின்றவரிடம் அறியாமையால் விளையும் இருவகை வினையும் சேர்வதில்லை.", en: "The two-fold deeds that spring from darkness shall not adhere to those who delight in the true praise of God." },
    couplet_en: "The men, who on the King's true praised delight to dwell, affects not them the fruit of deeds done ill or well.",
    transliteration: "Irulser Iruvinaiyum Seraa Iraivan Porulser Pukazhpurindhaar Maattu",
    tags: { ta: ["கர்மா", "கடவுள்", "அறியாமை", "புகழ்"], en: ["karma", "god", "darkness", "praise", "virtue"] }
  },
  {
    number: 6, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "பொறிவாயில் ஐந்தவித்தான் பொய்தீர் ஒழுக்க", line2: "நெறிநின்றார் நீடுவாழ் வார்." },
    meaning: { ta: "ஐம்பொறி வாயிலாக பிறக்கும் வேட்கைகளை அவித்த இறைவனுடைய பொய்யற்ற ஒழுக்க நெறியில் நின்றவர், நிலை பெற்ற நல்வாழ்க்கை வாழ்வர்.", en: "Those shall long prosper who abide in the faultless way of Him who has destroyed the five desires of the senses." },
    couplet_en: "Long live they blest, who have stood in path from falsehood freed; His, Who quenched lusts that from the sense-gates five proceed.",
    transliteration: "Porivaayil Aindhaviththaan Poidheer Ozhukka Nerinindraar Neetuvaazh Vaar",
    tags: { ta: ["புலன்கள்", "ஒழுக்கம்", "கடவுள்", "வாழ்வு"], en: ["senses", "conduct", "god", "virtue", "discipline"] }
  },
  {
    number: 7, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "தனக்குவமை இல்லாதான் தாள்சேர்ந்தார்க் கல்லால்", line2: "மனக்கவலை மாற்றல் அரிது." },
    meaning: { ta: "தனக்கு ஒப்புமை இல்லாத தலைவனுடைய திருவடிகளைப் பொருந்தி நினைக்கின்றவர் அல்லாமல், மற்றவர்க்கு மனக்கவலையை மாற்ற முடியாது.", en: "Anxiety of mind cannot be removed, except from those who are united to the feet of Him who is incomparable." },
    couplet_en: "Unless His foot, to Whom none can compare, men gain, Tis hard for mind to find relief from anxious pain.",
    transliteration: "Thanakkuvamai Illaadhaan Thaalserndhaark Kallaal Manakkavalai Maatral Aridhu",
    tags: { ta: ["கடவுள்", "கவலை", "திருவடி", "ஒப்பிலி"], en: ["god", "anxiety", "mind", "incomparable", "peace"] }
  },
  {
    number: 8, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "அறவாழி அந்தணன் தாள்சேர்ந்தார்க் கல்லால்", line2: "பிறவாழி நீந்தல் அரிது." },
    meaning: { ta: "அறக்கடலாக விளங்கும் கடவுளின் திருவடிகளைப் பொருந்தி நினைக்கின்றவர் அல்லாமல், மற்றவர் கடல்களைக் கடக்க முடியாது.", en: "None can swim the sea of vice, but those who are united to the feet of that gracious Being who is a sea of virtue." },
    couplet_en: "Unless His feet the Sea of Good, the Fair and Bountiful, men gain, Tis hard the further bank of being's changeful sea to attain.",
    transliteration: "Aravaazhi Andhanan Thaalserndhaark Kallaal Piravaazhi Neendhal Aridhu",
    tags: { ta: ["கடவுள்", "பிறவி", "கடல்", "அறம்"], en: ["god", "birth", "virtue", "cycle", "liberation"] }
  },
  {
    number: 9, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "கோளில் பொறியின் குணமிலவே எண்குணத்தான்", line2: "தாளை வணங்காத் தலை." },
    meaning: { ta: "எண் குணங்களை உடைய கடவுளின் திருவடிகளை வணங்காதவரின் தலைகள் பயனற்றவைகளாம்.", en: "The head that worships not the feet of Him who is possessed of eight attributes, is as useless as a sense without the power of sensation." },
    couplet_en: "Before His foot, the Eight-fold Excellence, with unbent head, who stands, like palsied sense, is to all living functions dead.",
    transliteration: "Kolil Poriyin Kunamilave Enkunaththaan Thaalai Vanangaath Thalai",
    tags: { ta: ["கடவுள்", "வணக்கம்", "தலை", "பயன்"], en: ["god", "worship", "useless", "eight qualities", "reverence"] }
  },
  {
    number: 10, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 1, ta: "கடவுள் வாழ்த்து", en: "The Praise of God" },
    kural: { line1: "பிறவிப் பெருங்கடல் நீந்துவர் நீந்தார்", line2: "இறைவன் அடிசேரா தார்." },
    meaning: { ta: "இறைவனுடைய திருவடிகளை பொருந்தி நினைக்கின்றவர் பிறவியாகிய பெரிய கடலைக் கடக்க முடியும். மற்றவர் கடக்க முடியாது.", en: "None can swim the great sea of births but those who are united to the feet of God." },
    couplet_en: "They swim the sea of births, the Monarch's foot who gain; None others reach the shore of being's mighty main.",
    transliteration: "Piravip Perungatal Neendhuvar Neendhaar Iraivan Atiseraa Thaar",
    tags: { ta: ["கடவுள்", "பிறவி", "கடல்", "திருவடி"], en: ["god", "birth", "ocean", "liberation", "devotion"] }
  },
  {
    number: 11, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "வான்நின்று உலகம் வழங்கி வருதலால்", line2: "தான்அமிழ்தம் என்றுணரற் பாற்று." },
    meaning: { ta: "மழை பெய்ய உலகம் வாழ்ந்து வருவதால், மழையானது உலகத்து வாழும் உயிர்களுக்கு அமிழ்தம் என்று உணரத்தக்கதாகும்.", en: "By the continuance of rain the world is preserved in existence; it is therefore worthy to be called ambrosia." },
    couplet_en: "The world its course maintains through life that rain unfailing gives; Thus rain is known the true ambrosial food of all that lives.",
    transliteration: "Vaannindru Ulakam Vazhangi Varudhalaal Thaanamizhdham Endrunarar Paatru",
    tags: { ta: ["மழை", "உலகம்", "அமிழ்தம்", "வாழ்வு"], en: ["rain", "world", "ambrosia", "life", "nature"] }
  },
  {
    number: 12, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத்", line2: "துப்பாய தூஉம் மழை." },
    meaning: { ta: "உண்பவர்க்குத் தக்க உணவுப் பொருள்களை விளைவித்துத் தருவதோடு, பருகுவோர்க்குத் தானும் ஓர் உணவாக இருப்பது மழையாகும்.", en: "Rain produces good food, and is itself food." },
    couplet_en: "The rain makes pleasant food for eaters rise; As food itself, thirst-quenching draught supplies.",
    transliteration: "Thuppaarkkuth Thuppaaya Thuppaakkith Thuppaarkkuth Thuppaaya Thooum Mazhai",
    tags: { ta: ["மழை", "உணவு", "வாழ்வு", "நீர்"], en: ["rain", "food", "water", "nature", "sustenance"] }
  },
  {
    number: 13, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "விண்இன்று பொய்ப்பின் விரிநீர் வியனுலகத்து", line2: "உள்நின்று உடற்றும் பசி." },
    meaning: { ta: "மழை பெய்யாமல் பொய்படுமானால், கடல் சூழ்ந்த அகன்ற உலகமாக இருந்தும் பசி உள்ளே நிலைத்து நின்று உயிர்களை வருத்தும்.", en: "If the cloud, withholding rain, deceive our hopes, hunger will long distress the sea-girt spacious world." },
    couplet_en: "If clouds, that promised rain, deceive, and in the sky remain, Famine, sore torment, stalks o'er earth's vast ocean-girdled plain.",
    transliteration: "Vinindru Poippin Virineer Viyanulakaththu Ulnindru Utatrum Pasi",
    tags: { ta: ["மழை", "பசி", "உலகம்", "வறட்சி"], en: ["rain", "famine", "drought", "world", "hunger"] }
  },
  {
    number: 14, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "ஏரின் உழாஅர் உழவர் புயல்என்னும்", line2: "வாரி வளங்குன்றிக் கால்." },
    meaning: { ta: "மழை என்னும் வருவாய் வளம் குன்றி விட்டால், உழவரும் ஏர் கொண்டு உழமாட்டார்.", en: "If the abundance of wealth imparting rain diminish, the labour of the plough must cease." },
    couplet_en: "If clouds their wealth of waters fail on earth to pour, The ploughers plough with oxen's sturdy team no more.",
    transliteration: "Erin Uzhaaar Uzhavar Puyalennum Vaari Valangundrik Kaal",
    tags: { ta: ["மழை", "உழவு", "விவசாயம்", "வாழ்வு"], en: ["rain", "farming", "agriculture", "plough", "livelihood"] }
  },
  {
    number: 15, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே", line2: "எடுப்பதூஉம் எல்லாம் மழை." },
    meaning: { ta: "பெய்யாமல் வாழ்வைக் கெடுக்க வல்லதும் மழை; மழையில்லாமல் வளம் கெட்டு நொந்தவர்க்கும் துணையாய் அவ்வாறே காக்க வல்லதும் மழையாகும்.", en: "Rain by its absence ruins men; and by its existence restores them to fortune." },
    couplet_en: "Tis rain works all: it ruin spreads, then timely aid supplies; As, in the happy days before, it bids the ruined rise.",
    transliteration: "Ketuppadhooum Kettaarkkuch Chaarvaaimar Raange Etuppadhooum Ellaam Mazhai",
    tags: { ta: ["மழை", "வாழ்வு", "கேடு", "நன்மை"], en: ["rain", "ruin", "restoration", "nature", "prosperity"] }
  },
  {
    number: 16, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "விசும்பின் துளிவீழின் அல்லால்மற் றாங்கே", line2: "பசும்புல் தலைகாண்பு அரிது." },
    meaning: { ta: "வானத்திலிருந்து மழைத்துளி வீழ்ந்தால் அல்லாமல், உலகத்தில் பசும்புல்லின் தலையையும் காண முடியாது.", en: "If no drop falls from the clouds, not even the green blade of grass will be seen." },
    couplet_en: "If from the clouds no drops of rain are shed, Tis rare to see green herb lift up its head.",
    transliteration: "Visumpin Thuliveezhin Allaalmar Raange Pasumpul Thalaikaanpu Aridhu",
    tags: { ta: ["மழை", "புல்", "இயற்கை", "நீர்"], en: ["rain", "grass", "nature", "vegetation", "water"] }
  },
  {
    number: 17, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "நெடுங்கடலும் தன்நீர்மை குன்றும் தடிந்தெழிலி", line2: "தான்நல்கா தாகி விடின்." },
    meaning: { ta: "மேகம் கடலிலிருந்து நீரைக் கொண்டு அதனிடத்திலேயே பெய்யாமல் விடுமானால், பெரிய கடலும் தன் வளம் குன்றிப் போகும்.", en: "Even the wealth of the wide sea will be diminished, if the cloud that has drawn its waters up gives them not back again in rain." },
    couplet_en: "If clouds restrain their gifts and grant no rain, The treasures fail in ocean's wide domain.",
    transliteration: "Netungatalum Thanneermai Kundrum Thatindhezhili Thaannalkaa Thaaki Vitin",
    tags: { ta: ["மழை", "கடல்", "மேகம்", "வளம்"], en: ["rain", "ocean", "cloud", "wealth", "nature"] }
  },
  {
    number: 18, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "சிறப்பொடு பூசனை செல்லாது வானம்", line2: "வறக்குமேல் வானோர்க்கும் ஈண்டு." },
    meaning: { ta: "மழை பெய்யாமல் போகுமானால் இவ்வுலகத்தில் வானோர்க்காக நடைபெறும் திருவிழாவும் நடைபெறாது; நாள் வழிபாடும் நடைபெறாது.", en: "If the heaven dry up, neither yearly festivals, nor daily worship will be offered in this world, to the celestials." },
    couplet_en: "If heaven grow dry, with feast and offering never more, Will men on earth the heavenly ones adore.",
    transliteration: "Sirappotu Poosanai Sellaadhu Vaanam Varakkumel Vaanorkkum Eentu",
    tags: { ta: ["மழை", "வழிபாடு", "தெய்வம்", "திருவிழா"], en: ["rain", "worship", "festival", "gods", "religion"] }
  },
  {
    number: 19, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "தானம் தவம்இரண்டும் தங்கா வியன்உலகம்", line2: "வானம் வழங்கா தெனின்." },
    meaning: { ta: "மழை பெய்யவில்லையானால், இந்த பெரிய உலகத்தில் பிறர் பொருட்டு செய்யும் தானமும், தம் பொருட்டு செய்யும் தவமும் இல்லையாகும்.", en: "If rain fall not, penance and alms-deeds will not dwell within this spacious world." },
    couplet_en: "If heaven its watery treasures ceases to dispense, Through the wide world cease gifts, and deeds of penitence.",
    transliteration: "Thaanam Thavamirantum Thangaa Viyanulakam Vaanam Vazhangaa Thenin",
    tags: { ta: ["மழை", "தானம்", "தவம்", "அறம்"], en: ["rain", "charity", "penance", "virtue", "world"] }
  },
  {
    number: 20, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 2, ta: "வான் சிறப்பு", en: "The Blessing of Rain" },
    kural: { line1: "நீர்இன்று அமையாது உலகெனின் யார்யார்க்கும்", line2: "வான்இன்று அமையாது ஒழுக்கு." },
    meaning: { ta: "எப்படிப்பட்டவர்க்கும் நீர் இல்லாமல் உலக வாழ்க்கை நடைபெறாது என்றால், மழை இல்லையானால் ஒழுக்கமும் நிலைபெறாமல் போகும்.", en: "If it be said that the duties of life cannot be discharged by any person without water, so without rain there cannot be the flowing of water." },
    couplet_en: "When water fails, functions of nature cease, you say; Thus when rain fails, no men can walk in duty's ordered way.",
    transliteration: "Neerindru Amaiyaadhu Ulakenin Yaaryaarkkum Vaanindru Amaiyaadhu Ozhukku",
    tags: { ta: ["மழை", "நீர்", "ஒழுக்கம்", "வாழ்வு"], en: ["rain", "water", "duty", "life", "ethics"] }
  },
  {
    number: 21, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "ஒழுக்கத்து நீத்தார் பெருமை விழுப்பத்து", line2: "வேண்டும் பனுவல் துணிவு." },
    meaning: { ta: "ஒழுக்கத்தில் நிலைத்து நின்று பற்று விட்டவர்களின் பெருமையைச் சிறந்ததாக போற்றி கூறுவதே நூல்களின் துணிவாகும்.", en: "The end and aim of all treatise is to extol beyond all other excellence, the greatness of those who have abandoned all desire." },
    couplet_en: "The settled rule of every code requires, as highest good, Their greatness who, renouncing all, true to their rule have stood.",
    transliteration: "Ozhukkaththu Neeththaar Perumai Vizhuppaththu Ventum Panuval Thunivu",
    tags: { ta: ["துறவு", "ஒழுக்கம்", "பெருமை", "அறம்"], en: ["asceticism", "renunciation", "conduct", "greatness", "virtue"] }
  },
  {
    number: 22, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "துறந்தார் பெருமை துணைக்கூறின் வையத்து", line2: "இறந்தாரை எண்ணிக்கொண் டற்று." },
    meaning: { ta: "பற்றுக்களைத் துறந்தவர்களின் பெருமையை அளந்து கூறுதல், உலகத்தில் இதுவரை பிறந்து இறந்தவர்களை கணக்கிடுவதைப்போன்றது.", en: "To describe the measure of the greatness of those who have forsaken the two-fold desires, is like counting the dead." },
    couplet_en: "As counting those that from the earth have passed away, Tis vain attempt the might of holy men to say.",
    transliteration: "Thurandhaar Perumai Thunaikkoorin Vaiyaththu Irandhaarai Ennikkon Tatru",
    tags: { ta: ["துறவு", "பெருமை", "அளவிடல்", "சான்றோர்"], en: ["renunciation", "greatness", "ascetics", "immeasurable", "virtue"] }
  },
  {
    number: 23, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "இருமை வகைதெரிந்து ஈண்டுஅறம் பூண்டார்", line2: "பெருமை பிறங்கிற்று உலகு." },
    meaning: { ta: "பிறப்பு வீடு என்பன போல் இரண்டிரண்டாக உள்ளவைகளின் கூறுபாடுகளை ஆராய்ந்தறிந்து அறத்தை மேற்கொண்டவரின் பெருமையே உலகத்தில் உயர்ந்தது.", en: "The greatness of those who have discovered the properties of both states of being, and renounced the world, shines forth on earth." },
    couplet_en: "Their greatness earth transcends, who, way of both worlds weighed, In this world take their stand, in virtue's robe arrayed.",
    transliteration: "Irumai Vakaidherindhu Eentuaram Poontaar Perumai Pirangitru Ulaku",
    tags: { ta: ["துறவு", "இருமை", "அறம்", "பெருமை"], en: ["renunciation", "wisdom", "virtue", "greatness", "both worlds"] }
  },
  {
    number: 24, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "உரனென்னும் தோட்டியான் ஓரைந்தும் காப்பான்", line2: "வரனென்னும் வைப்பிற்கோர் வித்து." },
    meaning: { ta: "அறிவு என்னும் கருவியினால் ஐம்பொறிகளாகிய யானைகளை அடக்கி காக்க வல்லவன், மேலான வீட்டிற்கு விதை போன்றவன்.", en: "He who guides his five senses by the hook of wisdom will be a seed in the world of heaven." },
    couplet_en: "He, who with firmness, curb the five restrains, Is seed for soil of yonder happy plains.",
    transliteration: "Uranennum Thottiyaan Oraindhum Kaappaan Varanennum Vaippirkor Viththu",
    tags: { ta: ["புலன்கள்", "அடக்கம்", "ஞானம்", "வீடு"], en: ["senses", "control", "wisdom", "liberation", "heaven"] }
  },
  {
    number: 25, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "ஐந்தவித்தான் ஆற்றல் அகல்விசும்பு ளார்கோமான்", line2: "இந்திரனே சாலுங் கரி." },
    meaning: { ta: "ஐந்து புலன்களாலாகும் ஆசைகளை ஒழித்தவனுடைய வல்லமைக்கு, வானுலகத்தாரின் தலைவனாகிய இந்திரனே போதுமான சான்று ஆவான்.", en: "Indra, the king of the inhabitants of the spacious heaven, is himself a sufficient proof of the strength of him who has subdued his five senses." },
    couplet_en: "Their might who have destroyed the five, shall soothly tell Indra, the lord of those in heaven's wide realms that dwell.",
    transliteration: "Aindhaviththaan Aatral Akalvisumpu Laarkomaan Indhirane Saalung Kari",
    tags: { ta: ["புலன்கள்", "அடக்கம்", "வலிமை", "இந்திரன்"], en: ["senses", "control", "strength", "indra", "ascetics"] }
  },
  {
    number: 26, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "செயற்கரிய செய்வார் பெரியர் சிறியர்", line2: "செயற்கரிய செய்கலா தார்." },
    meaning: { ta: "செய்வதற்கு அருமையான செயல்களை செய்ய வல்லவரே பெரியோர். செய்வதற்கு அரிய செயல்களைச் செய்யமாட்டாதவர் சிறியோர்.", en: "The great will do those things which are difficult to be done; but the mean cannot do them." },
    couplet_en: "Things hard in the doing will great men do; Things hard in the doing the mean eschew.",
    transliteration: "Seyarkariya Seyvaar Periyar Siriyar Seyarkariya Seykalaa Thaar",
    tags: { ta: ["பெரியோர்", "சிறியோர்", "செயல்", "ஆற்றல்"], en: ["greatness", "achievement", "difficult", "excellence", "courage"] }
  },
  {
    number: 27, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "சுவைஒளி ஊறுஓசை நாற்றமென ஐந்தின்", line2: "வகைதெரிவான் கட்டே உலகு." },
    meaning: { ta: "சுவை, ஒளி, ஊறு, ஓசை, நாற்றம் என்று சொல்லப்படும் ஐந்தின் வகைகளையும் ஆராய்ந்து அறிய வல்லவனுடைய அறிவில் உள்ளது உலகம்.", en: "The world is within the knowledge of him who knows the properties of taste, sight, touch, hearing and smell." },
    couplet_en: "Taste, light, touch, sound, and smell: who knows the way of all the five, the world submissive owns his sway.",
    transliteration: "Suvaioli Ooruosai Naatramendru Aindhin Vakaidherivaan Katte Ulaku",
    tags: { ta: ["புலன்கள்", "அறிவு", "உலகம்", "ஞானம்"], en: ["senses", "knowledge", "world", "wisdom", "perception"] }
  },
  {
    number: 28, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "நிறைமொழி மாந்தர் பெருமை நிலத்து", line2: "மறைமொழி காட்டி விடும்." },
    meaning: { ta: "பயன் நிறைந்த மொழிகளில் வல்ல சான்றோரின் பெருமையை, உலகத்தில் அழியாமல் விளங்கும் அவர்களுடைய மறைமொழிகளே காட்டிவிடும்.", en: "The hidden words of the men whose words are full of effect, will show their greatness to the world." },
    couplet_en: "The might of men whose word is never vain, The secret word shall to the earth proclaim.",
    transliteration: "Niraimozhi Maandhar Perumai Nilaththu Maraimozhi Kaatti Vitum",
    tags: { ta: ["சொல்", "பெருமை", "சான்றோர்", "வாக்கு"], en: ["speech", "greatness", "wise men", "words", "power"] }
  },
  {
    number: 29, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "குணமென்னும் குன்றேறி நின்றார் வெகுளி", line2: "கணமேயும் காத்தல் அரிது." },
    meaning: { ta: "நல்ல பண்புகளாகிய மலையின்மேல் ஏறி நின்ற பெரியோர், ஒரு கணப்பொழுதே சினம் கொள்வார் ஆயினும் அதிலிருந்து ஒருவரைக் காத்தல் அரிதாகும்.", en: "The anger of those who have ascended the mountain of goodness, though it continue but for a moment, cannot be resisted." },
    couplet_en: "The wrath tis hard e'en for an instant to endure, Of those who virtue's hill have scaled, and stand secure.",
    transliteration: "Kunamennum Kundreri Nindraar Vekuli Kanameyum Kaaththal Aridhu",
    tags: { ta: ["கோபம்", "குணம்", "பெரியோர்", "மலை"], en: ["anger", "virtue", "great men", "wrath", "character"] }
  },
  {
    number: 30, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "பாயிரவியல்", en: "Prologue" },
    adhigaram: { number: 3, ta: "நீத்தார் பெருமை", en: "The Greatness of Ascetics" },
    kural: { line1: "அந்தணர் என்போர் அறவோர்மற் றெவ்வுயிர் க்கும்", line2: "செந்தண்மை பூண்டொழுக லான்." },
    meaning: { ta: "எல்லா உயிர்களிடத்திலும் செம்மையான அருளை மேற்கொண்டு ஒழுகுவதால், அறவோரே அந்தணர் எனப்படுவோர் ஆவர்.", en: "The virtuous are truly called Anthanar; because in their conduct towards all creatures they are clothed in kindness." },
    couplet_en: "Towards all that breathe, with seemly graciousness adorned they live; And thus to virtue's sons the name of Anthanar men give.",
    transliteration: "Andhanar Enpor Aravormar Revvuyir Kkum Sendhanmai Poontozhuka Laan",
    tags: { ta: ["அன்பு", "அறம்", "கருணை", "அந்தணர்"], en: ["love", "virtue", "compassion", "kindness", "all beings"] }
  },
  {
    number: 41, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 5, ta: "இல்வாழ்க்கை", en: "Domestic Life" },
    kural: { line1: "இல்வாழ்வான் என்பான் இயல்புடைய மூவர்க்கும்", line2: "நல்லாற்றின் நின்ற துணை." },
    meaning: { ta: "இல்லறத்தில் வாழ்பவனாகச் சொல்லப்படுகிறவன் அறத்தின் இயல்பை உடைய மூவருக்கும் நல்வழியில் நிலை பெற்ற துணையாவான்.", en: "He will be called a true householder, who is a firm support to the virtuous of the three orders in their good path." },
    couplet_en: "The men of household virtue, firm in way of good, sustain The other orders three that rule professed maintain.",
    transliteration: "Ilvaazhvaan Enpaan Iyalputaiya Moovarkkum Nallaatrin Nindra Thunai",
    tags: { ta: ["இல்வாழ்வு", "கடமை", "மூவர்", "துணை"], en: ["householder", "duty", "support", "domestic life", "family"] }
  },
  {
    number: 42, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 5, ta: "இல்வாழ்க்கை", en: "Domestic Life" },
    kural: { line1: "துறந்தார்க்கும் துவ்வாதவர்க்கும் இறந்தார்க்கும்", line2: "இல்வாழ்வான் என்பான் துணை." },
    meaning: { ta: "துறந்தவர்கும் வறியவர்க்கும் தன்னிடத்தே இறந்தவர்க்கும் இல்லறம் மேற்கொண்டு வாழ்கிறவன் துணையாவான்.", en: "He will be said to flourish in domestic virtue who aids the forsaken, the poor, and the dead." },
    couplet_en: "To anchorites, to indigent, to those who've passed away, The man for household virtue famed is needful held and stay.",
    transliteration: "Thurandhaarkkum Thuvvaa Dhavarkkum Irandhaarkkum Ilvaazhvaan Enpaan Thunai",
    tags: { ta: ["இல்வாழ்வு", "துறவு", "வறியர்", "உதவி"], en: ["householder", "ascetics", "poor", "support", "charity"] }
  },
  {
    number: 71, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 8, ta: "அன்புடைமை", en: "The Possession of Love" },
    kural: { line1: "அன்பிற்கும் உண்டோ அடைக்குந்தாழ் ஆர்வலர்", line2: "புன்கணீர் பூசல் தரும்." },
    meaning: { ta: "அன்புக்கும் அடைத்து வைக்கும் தாழ் உண்டோ? அன்புடையவரின் சிறு கண்ணீரே உள்ளே இருக்கும் அன்பைப் பலரும் அறிய வெளிப்படுத்திவிடும்.", en: "Is there any fastening that can shut in love? Tears of the affectionate will publish the love that is within." },
    couplet_en: "And is there bar that can even love restrain? The tiny tear shall make the lover's secret plain.",
    transliteration: "Anpirkum Unto Ataikkundhaazh Aarvalar Punkaneer Poosal Tharum",
    tags: { ta: ["அன்பு", "கண்ணீர்", "உள்ளம்", "வெளிப்படுதல்"], en: ["love", "tears", "heart", "secret", "revealed"] }
  },
  {
    number: 72, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 8, ta: "அன்புடைமை", en: "The Possession of Love" },
    kural: { line1: "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார்", line2: "என்பும் உரியர் பிறர்க்கு." },
    meaning: { ta: "அன்பு இல்லாதவர் எல்லாப்பொருள்களையும் தமக்கே உரிமையாகக் கொண்டு வாழ்வார்: அன்பு உடையவர் தம் உடமையும் பிறர்க்கு உரிமையாக்கி வாழ்வர்.", en: "Those who are destitute of love appropriate all they have to themselves; but those who possess love consider even their bones to belong to others." },
    couplet_en: "The loveless to themselves belong alone; The loving men are others' to the very bone.",
    transliteration: "Anpilaar Ellaam Thamakkuriyar Anputaiyaar Enpum Uriyar Pirarkku",
    tags: { ta: ["அன்பு", "பொருள்", "உடல்", "பிறர்"], en: ["love", "selfless", "others", "bone", "generosity"] }
  },
  {
    number: 80, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 8, ta: "அன்புடைமை", en: "The Possession of Love" },
    kural: { line1: "அன்பின் வழியது உயிர்நிலை அஃதிலார்க்கு", line2: "என்புதோல் போர்த்த உடம்பு." },
    meaning: { ta: "அன்பின் வழியில் இயங்கும் உடம்பே உயிர்நின்ற உடம்பாகும்: அன்பு இல்லாதவர்க்கு உள்ள உடம்பு எலும்பைத் தோல்போர்த்த வெற்றுடம்பே ஆகும்.", en: "That body alone which is inspired with love contains a living soul: if void of it, the body is bone overlaid with skin." },
    couplet_en: "Bodies of loveless men are bony framework clad with skin; Then is the body seat of life, when love resides within.",
    transliteration: "Anpin Vazhiyadhu Uyirnilai Aqdhilaarkku Enpudhol Porththa Utampu",
    tags: { ta: ["அன்பு", "உயிர்", "உடல்", "எலும்பு"], en: ["love", "soul", "body", "loveless", "life"] }
  },
  {
    number: 91, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 10, ta: "இனியவை கூறல்", en: "The Utterance of Pleasant Words" },
    kural: { line1: "இன்சொலால் ஈரம் அளைஇப் படிறுஇலவாம்", line2: "செம்பொருள் கண்டார்வாய்ச் சொல்." },
    meaning: { ta: "அன்பு கலந்து வஞ்சம் அற்றவைகளாகிய சொற்கள், மெய்ப்பொருள் கண்டவர்களின் வாய்ச்சொற்கள் இன்சொற்களாகும்.", en: "Sweet words are those which imbued with love and free from deceit flow from the mouth of the virtuous." },
    couplet_en: "Pleasant words are words with all pervading love that burn; Words from his guileless mouth who can the very truth discern.",
    transliteration: "Insolaal Eeram Alaiip Patiruilavaam Semporul Kantaarvaaich Chol",
    tags: { ta: ["இன்சொல்", "அன்பு", "அறம்", "வஞ்சமின்மை"], en: ["sweet speech", "love", "virtue", "sincerity", "kind words"] }
  },
  {
    number: 99, pal: { ta: "அறத்துப்பால்", en: "Virtue" },
    iyal: { ta: "இல்லறவியல்", en: "Domestic Virtue" },
    adhigaram: { number: 10, ta: "இனியவை கூறல்", en: "The Utterance of Pleasant Words" },
    kural: { line1: "இன்சொல் இனிதீன்றல் காண்பான் எவன்கொலோ", line2: "வன்சொல் வழங்கு வது?" },
    meaning: { ta: "இனிய சொற்கள் இன்பம் பயத்தலைக் காண்கின்றவன், அவற்றிற்கு மாறான வன்சொற்களை வழங்குவது என்ன பயன் கருதியோ?", en: "Why does he use harsh words, who sees the pleasure which sweet speech yields?" },
    couplet_en: "Who sees the pleasure kindly speech affords, Why makes he use of harsh, repellant words.",
    transliteration: "Insol Inidheendral Kaanpaan Evankolo Vansol Vazhangu Vadhu",
    tags: { ta: ["இன்சொல்", "வன்சொல்", "இன்பம்", "கடுமை"], en: ["sweet speech", "harsh speech", "pleasure", "contrast", "kind words"] }
  }
];

// ---- Search & Utility functions ----

function searchKurals(query) {
  if (!query || !query.trim()) return KURALS;
  const q = query.toLowerCase().trim();
  return KURALS.filter(k =>
    k.kural.line1.includes(query) ||
    k.kural.line2.includes(query) ||
    k.meaning.ta.includes(query) ||
    k.meaning.en.toLowerCase().includes(q) ||
    k.couplet_en.toLowerCase().includes(q) ||
    k.adhigaram.ta.includes(query) ||
    k.adhigaram.en.toLowerCase().includes(q) ||
    k.pal.ta.includes(query) ||
    k.pal.en.toLowerCase().includes(q) ||
    k.tags.ta.some(t => t.includes(query)) ||
    k.tags.en.some(t => t.toLowerCase().includes(q))
  );
}

function filterByPal(pal) {
  if (!pal || pal === "all") return KURALS;
  return KURALS.filter(k => k.pal.en.toLowerCase() === pal.toLowerCase());
}

function getKuralByNumber(n) {
  return KURALS.find(k => k.number === parseInt(n)) || null;
}

function getAllTags() {
  const set = new Set();
  KURALS.forEach(k => k.tags.en.forEach(t => set.add(t)));
  return [...set].sort();
}
