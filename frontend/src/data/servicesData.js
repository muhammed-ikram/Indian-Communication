import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
import img7 from '../assets/img7.jpeg';
import img8 from '../assets/img8.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import img11 from '../assets/img11.jpeg';
import img12 from '../assets/img12.jpeg';
import img13 from '../assets/img13.jpeg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpeg';
import img16 from '../assets/img16.jpeg';
import img17 from '../assets/img17.jpeg';
import img18 from '../assets/img18.jpeg';
import img19 from '../assets/img19.jpeg';
import img20 from '../assets/img20.jpeg';

export const servicesData = [
  {
    id: 1,
    image: img1,
    category: "citizen",
    badge: {
      en: "PAN Card Services",
      te: "పాన్ కార్డు సేవలు"
    },
    title: {
      en: "PAN Card Application & Services",
      te: "పాన్ కార్డు దరఖాస్తు & సేవలు"
    },
    shortDesc: {
      en: "New PAN card applications, corrections, reprints, address updates, and PAN-related services with quick and reliable assistance.",
      te: "కొత్త పాన్ కార్డు దరఖాస్తులు, వివరాల సవరణలు, రీప్రింట్, చిరునామా నవీకరణ మరియు ఇతర పాన్ సంబంధిత సేవలను వేగంగా మరియు నమ్మకమైన సహాయంతో అందిస్తున్నాము."
    },
    features: {
      en: [
        "New PAN card application",
        "PAN card details correction",
        "PAN card reprint / duplicate application",
        "PAN-Aadhaar linking assistance"
      ],
      te: [
        "కొత్త పాన్ కార్డు దరఖాస్తు",
        "పాన్ కార్డు వివరాల సవరణ",
        "పాన్ కార్డు రీప్రింట్ / డూప్లికేట్ దరఖాస్తు",
        "పాన్-ఆధార్ లింకింగ్ సహాయం"
      ]
    },
    documents: {
      en: [
        "Aadhaar Card / Proof of Identity",
        "Proof of Address",
        "Proof of Date of Birth"
      ],
      te: [
        "ఆధార్ కార్డు / గుర్తింపు ధ్రువీకరణ పత్రం",
        "చిరునామా ధ్రువీకరణ పత్రం",
        "పుట్టిన తేదీ ధ్రువీకరణ పత్రం"
      ]
    },
    processingTime: {
      en: "Application Submission: Same Day | Processing Time as per Government Portal",
      te: "దరఖాస్తు సమర్పణ: అదే రోజు | ప్రభుత్వ పోర్టల్ ప్రకారం ప్రాసెసింగ్ సమయం"
    }
  },
  {
    id: 2,
    image: img2,
    category: "travel",
    badge: {
      en: "Passport & Travel",
      te: "పాస్‌పోర్ట్ & ట్రావెల్"
    },
    title: {
      en: "Indian Passport & Travel Support",
      te: "భారతీయ పాస్‌పోర్ట్ & ప్రయాణ సేవలు"
    },
    shortDesc: {
      en: "Assistance with Fresh Passport, Renewal, Tatkal appointments, PCC (Police Clearance Certificate) and flight ticket coordination.",
      te: "కొత్త పాస్‌పోర్ట్ దరఖాస్తు, రెన్యూవల్, తత్కాల్ స్లాట్ బుకింగ్, పోలీస్ క్లియరెన్స్ (పీసీసీ) మరియు ఫ్లైట్ టికెట్ సమన్వయం."
    },
    features: {
      en: [
        "Normal & Tatkal passport appointment booking",
        "Passport renewal & minor passport applications",
        "Police Clearance Certificate (PCC) assistance",
        "Document advisory to prevent rejection"
      ],
      te: [
        "నార్మల్ మరియు తత్కాల్ పాస్‌పోర్ట్ స్లాట్ బుకింగ్",
        "పాస్‌పోర్ట్ రెన్యూవల్ మరియు మైనర్ పాస్‌పోర్ట్ దరఖాస్తులు",
        "పోలీస్ క్లియరెన్స్ సర్టిఫికెట్ (PCC) సహకారం",
        "రిజెక్షన్ లేకుండా ఖచ్చితమైన డాక్యుమెంట్ పరిశీలన"
      ]
    },
    documents: {
      en: ["Aadhaar Card with matching DOB", "PAN Card & 10th Marks Memo", "Active Bank Passbook with Photo"],
      te: ["సరైన పుట్టిన తేదీ గల ఆధార్ కార్డు", "పాన్ కార్డు & 10వ తరగతి మార్క్స్ మెమో", "ఫోటో గల యాక్టివ్ బ్యాంక్ పాస్‌బుక్"]
    },
    processingTime: {
      en: "Slot booked within 10 minutes | Standard dispatch by RPO",
      te: "10 నిమిషాల్లో స్లాట్ బుకింగ్ | ఆర్పీఓ ద్వారా డెలివరీ"
    }
  },
  {
    id: 3,
    image: img3,
    category: "money_transfer",
    badge: {
      en: "Money Transfer",
      te: "మనీ ట్రాన్స్‌ఫర్"
    },
    title: {
      en: "Money Transfer",
      te: "మనీ ట్రాన్స్‌ఫర్"
    },
    shortDesc: {
      en: "Transfer money securely to bank accounts across India, with transfer amounts ranging from ₹5,000 to ₹5,00,000 and convenient transaction support.",
      te: "భారతదేశంలోని బ్యాంక్ ఖాతాలకు ₹5,000 నుండి ₹5,00,000 వరకు సురక్షితంగా నగదు బదిలీ చేసుకోవచ్చు. సులభమైన మరియు నమ్మకమైన లావాదేవీ సౌకర్యం."
    },
    features: {
      en: [
        "Money transfers from ₹5,000 to ₹5,00,000",
        "Transfer to bank accounts across India",
        "Secure and reliable transactions",
        "Transaction confirmation and receipt support"
      ],
      te: [
        "₹5,000 నుండి ₹5,00,000 వరకు మనీ ట్రాన్స్‌ఫర్",
        "భారతదేశంలోని బ్యాంక్ ఖాతాలకు బదిలీ",
        "సురక్షితమైన మరియు నమ్మకమైన లావాదేవీలు",
        "లావాదేవీ నిర్ధారణ మరియు రసీదు సౌకర్యం"
      ]
    },
    documents: {
      en: [
        "Sender Mobile Number",
        "Receiver Bank Account Number & IFSC Code",
        "Valid ID Proof"
      ],
      te: [
        "పంపేవారి మొబైల్ నంబర్",
        "స్వీకర్త బ్యాంక్ ఖాతా నంబర్ మరియు ఐఎఫ్‌ఎస్‌సీ కోడ్",
        "చెల్లుబాటు అయ్యే గుర్తింపు పత్రం"
      ]
    },
    processingTime: {
      en: "Transfer Amount: ₹5,000 - ₹5,00,000 | Processing Time as per Banking Network",
      te: "బదిలీ మొత్తం: ₹5,000 - ₹5,00,000 | బ్యాంకింగ్ నెట్‌వర్క్ ప్రకారం ప్రాసెసింగ్ సమయం"
    }
  },
  {
    id: 4,
    image: img4,
    category: "banking",
    badge: {
      en: "Cards & ATM",
      te: "కార్డులు & ఏటీఎం"
    },
    title: {
      en: "RuPay & VISA Debit/Credit Card Services",
      te: "రూపే & వీసా ఏటీఎం/డెబిట్ కార్డు సేవలు"
    },
    shortDesc: {
      en: "Assistance with RuPay & VISA chip card applications, instant Green PIN generation, card blocking/unblocking, and contactless activations.",
      te: "రూపే & వీసా చిప్ కార్డుల దరఖాస్తు, తక్షణ గ్రీన్ పిన్ జనరేషన్, కార్డు బ్లాకింగ్/అన్‌బ్లాకింగ్ మరియు కాంటాక్ట్‌లెస్ చెల్లింపుల యాక్టివేషన్."
    },
    features: {
      en: [
        "Instant Debit Card requisition assistance",
        "Green PIN setting & reset support",
        "International & e-commerce transaction activation",
        "Damaged/expired card replacement requests"
      ],
      te: [
        "తక్షణ డెబిట్ కార్డు దరఖాస్తు సహాయం",
        "గ్రీన్ పిన్ క్రియేషన్ మరియు రీసెట్ సపోర్ట్",
        "ఈ-కామర్స్ మరియు ఆన్‌లైన్ పేమెంట్స్ యాక్టివేషన్",
        "పాడైన లేదా గడువు ముగిసిన కార్డు రీప్లేస్‌మెంట్"
      ]
    },
    documents: {
      en: ["Bank Account Number", "Registered Mobile Number for OTP", "Aadhaar or Identity Proof"],
      te: ["బ్యాంక్ ఖాతా సంఖ్య", "ఓటీపీ కొరకు లింక్ చేయబడిన మొబైల్ నంబర్", "ఆధార్ లేదా గుర్తింపు కార్డు"]
    },
    processingTime: {
      en: "Instant PIN Setup | 5-7 days home delivery by bank",
      te: "తక్షణ పిన్ సెటప్ | బ్యాంక్ ద్వారా 5-7 రోజుల్లో డెలివరీ"
    }
  },
  {
    id: 5,
    image: img19,
    category: "banking",
    badge: {
      en: "Loan Assistance",
      te: "రుణ సహాయం"
    },
    title: {
      en: "Comprehensive Loan Assistance & Credit Guidance",
      te: "అన్ని రకాల లోన్ సహాయక సేవలు (గృహ, వ్యక్తిగత, వ్యాపార)"
    },
    shortDesc: {
      en: "Doorstep guidance for Home Loans, Business Expansion Loans, Personal Loans, Vehicle Finance, Education Loans, and PM Mudra/KCC loans.",
      te: "ఇంటి నిర్మాణం, వ్యక్తిగత అవసరాలు, వ్యాపార విస్తరణ, విద్య, వాహనాలు మరియు ముద్ర లోన్ల కొరకు సరైన బ్యాంకులతో సమగ్ర రుణ సహాయం."
    },
    features: {
      en: [
        "Tie-ups with top national banks & NBFC lenders",
        "Free CIBIL score check and credit profile analysis",
        "Minimal documentation and lowest interest rates",
        "Guidance on government subsidies and schemes"
      ],
      te: [
        "ప్రముఖ జాతీయ బ్యాంకులు & ఫైనాన్స్ సంస్థలతో అనుసంధానం",
        "ఉచిత సిబిల్ (CIBIL) స్కోర్ తనిఖీ & ప్రొఫైల్ పరిశీలన",
        "తక్కువ వడ్డీ రేట్లతో సులభమైన డాక్యుమెంటేషన్",
        "ప్రభుత్వ సబ్సిడీ మరియు ముద్ర పథకాల మార్గదర్శకత్వం"
      ]
    },
    documents: {
      en: ["PAN & Aadhaar Card", "Last 6 Months Bank Statement", "Income Proof (ITR / Pay Slip / Business Sales Record)"],
      te: ["పాన్ & ఆధార్ కార్డు", "గత 6 నెలల బ్యాంక్ స్టేట్‌మెంట్", "ఆదాయ ధ్రువీకరణ (ఐటీఆర్ / పే స్లిప్స్ / వ్యాపార రికార్డులు)"]
    },
    processingTime: {
      en: "Eligibility Check in 15 Minutes | Approval in 3-5 Working Days",
      te: "15 నిమిషాల్లో అర్హత పరిశీలన | 3-5 రోజుల్లో లోన్ మంజూరు"
    }
  },
  {
    id: 6,
    image: img20,
    category: "insurance",
    badge: {
      en: "Insurance Solutions",
      te: "సమగ్ర బీమా"
    },
    title: {
      en: "Comprehensive Insurance (Life, Health, Motor, General)",
      te: "సమగ్ర బీమా సేవలు (ఆరోగ్యం, జీవితం, బైక్ & కార్)"
    },
    shortDesc: {
      en: "Partnered with HDFC ERGO, SBI General, ICICI Lombard, TATA AIG, Bajaj Allianz & Niva Bupa. Instant policy issuance and claim assistance.",
      te: "హెచ్‌డీఎఫ్‌సీ ఎర్గో, ఎస్‌బీఐ జనరల్, ఐసీఐసీఐ లాంబార్డ్, టాటా ఏఐజీ, బజాజ్ అలయన్జ్ సంస్థలతో ఆరోగ్య, జీవిత మరియు వాహన బీమా పాలసీలు."
    },
    features: {
      en: [
        "Cashless hospitalization network across 10,000+ hospitals",
        "Instant Bike & Car third-party & comprehensive insurance",
        "Family Floater health plans covering pre-existing conditions",
        "Dedicated local assistance during claim settlements"
      ],
      te: [
        "10,000+ ఆసుపత్రులలో నగదు రహిత (క్యాష్‌లెస్) చికిత్స",
        "బైక్ మరియు కార్ల కొరకు తక్షణ ఇన్సూరెన్స్ కాపీ అందజేత",
        "పూర్తి కుటుంబానికి రక్షణనిచ్చే హెల్త్ ఇన్సూరెన్స్ ప్లాన్లు",
        "క్లెయిమ్ సమయంలో స్థానిక నిపుణుల ప్రత్యక్ష సహాయం"
      ]
    },
    documents: {
      en: ["Aadhaar & PAN of Proposer", "Vehicle RC Copy (for motor insurance)", "Existing policy details (if renewing)"],
      te: ["ప్రతిపాదకుడి ఆధార్ & పాన్ కార్డు", "వాహనం ఆర్సీ కాపీ (వాహన బీమా కొరకు)", "గత ఇన్సూరెన్స్ పాలసీ వివరాలు (రెన్యూవల్ అయితే)"]
    },
    processingTime: {
      en: "Instant Digital Policy Print & WhatsApp Delivery in 10 Minutes",
      te: "10 నిమిషాల్లో పాలసీ పత్రం ప్రింట్ & వాట్సాప్ డెలివరీ"
    }
  },
  {
    id: 7,
    image: img7,
    category: "utility",
    badge: {
      en: "Tech Accessories",
      te: "మొబైల్ ఉపకరణాలు"
    },
    title: {
      en: "Mobile Accessories & Digital Tech Store",
      te: "మొబైల్ ఉపకరణాలు & డిజిటల్ గాడ్జెట్లు"
    },
    shortDesc: {
      en: "Genuine mobile accessories: Type-C fast chargers, power banks, premium TWS earbuds, portable Bluetooth speakers, and tempered glasses.",
      te: "అసలైన మొబైల్ ఉపకరణాలు: టైప్-సి ఫాస్ట్ ఛార్జర్లు, పవర్ బ్యాంకులు, బ్లూటూత్ ఇయర్‌బడ్స్, పోర్టబుల్ స్పీకర్లు మరియు టెంపర్డ్ గ్లాసెస్."
    },
    features: {
      en: [
        "BIS-certified durable chargers and cables",
        "High-capacity 10,000mAh & 20,000mAh power banks",
        "Noise-cancellation earbuds & wireless audio",
        "Manufacturer warranty on all tech goods"
      ],
      te: [
        "బీఐఎస్ సర్టిఫైడ్ నాణ్యమైన ఛార్జర్లు & కేబుల్స్",
        "అధిక సామర్థ్యం గల పవర్ బ్యాంకులు",
        "స్పష్టమైన సౌండ్ గల వైర్‌లెస్ ఇయర్‌బడ్స్ & హెడ్‌ఫోన్లు",
        "వారంటీతో కూడిన ఎలక్ట్రానిక్స్ ఉత్పత్తులు"
      ]
    },
    documents: {
      en: ["Device specifications or model number for accurate matching"],
      te: ["మీ మొబైల్ లేదా పరికరం మోడల్ వివరాలు"]
    },
    processingTime: {
      en: "Immediate Over-the-Counter Availability",
      te: "కేంద్రంలో నేరుగా తక్షణమే అందుబాటులో"
    }
  },
  {
    id: 8,
    image: img8,
    category: "travel",
    badge: {
      en: "Pilgrimage Packages",
      te: "యాత్రా ప్యాకేజీలు"
    },
    title: {
      en: "Hajj & Umrah Pilgrimage Tour Support",
      te: "హజ్ & ఉమ్రా యాత్రా ప్యాకేజీలు & వీసా సేవలు"
    },
    shortDesc: {
      en: "Specialized assistance for Umrah & Hajj pilgrim visa processing, direct flights to Jeddah/Madinah, hotel stays near Haram, and local ground assistance.",
      te: "ఉమ్రా మరియు హజ్ యాత్రికుల కొరకు వీసా ప్రాసెసింగ్, జెడ్డా/మదీనా విమాన టికెట్లు, హరమ్ సమీపంలో హోటల్ వసతి మరియు సమగ్ర యాత్రా సహకారం."
    },
    features: {
      en: [
        "Official Saudi Umrah e-Visa processing",
        "Affordable economy and star accommodation packages",
        "Direct and convenient transit flight booking",
        "Complete Ziyarat and local guidance"
      ],
      te: [
        "అధికారిక సౌదీ ఉమ్రా ఈ-వీసా ప్రాసెసింగ్",
        "అన్ని వర్గాల వారికి అనుకూలమైన బస మరియు భోజన ప్యాకేజీలు",
        "సౌకర్యవంతమైన విమాన ప్రయాణ టికెట్లు",
        "జియారత్ మరియు స్థానిక ప్రయాణ మార్గదర్శకత్వం"
      ]
    },
    documents: {
      en: ["Passport with at least 6 months validity", "White-background passport photos", "Vaccination / Meningitis Certificate"],
      te: ["కనీసం 6 నెలల గడువు గల ఒరిజినల్ పాస్‌పోర్ట్", "తెల్లటి బ్యాక్‌గ్రౌండ్ కలర్ ఫోటోలు", "టీకా మరియు ఆరోగ్య ధ్రువీకరణ పత్రాలు"]
    },
    processingTime: {
      en: "E-Visa within 24 to 72 Hours | Complete Package Guidance",
      te: "24 నుండి 72 గంటల్లో ఈ-వీసా జారీ"
    }
  },
  {
    id: 9,
    image: img9,
    category: "travel",
    badge: {
      en: "Visa Assistance",
      te: "వీసా సేవలు"
    },
    title: {
      en: "Global Visa Consultation & Processing",
      te: "గ్లోబల్ వీసా కన్సల్టేషన్ & ప్రాసెసింగ్"
    },
    shortDesc: {
      en: "End-to-end guidance for Student Visas, Tourist/Visitor Visas, and Work Permits for USA, UK, Canada, Australia, Schengen, and Gulf countries.",
      te: "అమెరికా, యూకే, కెనడా, ఆస్ట్రేలియా, యూరప్ మరియు గల్ఫ్ దేశాలకు విద్యార్థి (స్టూడెంట్), టూరిస్ట్ మరియు వర్క్ వీసాల సమగ్ర ప్రాసెసింగ్."
    },
    features: {
      en: [
        "Document checklist & SOP / Cover letter review",
        "Embassy appointment booking & DS-160 filling",
        "Visa interview preparation & mock questions",
        "Travel insurance & flight itinerary assistance"
      ],
      te: [
        "ఖచ్చితమైన డాక్యుమెంట్ వెరిఫికేషన్ & కవర్ లెటర్ డ్రాఫ్టింగ్",
        "ఎంబసీ అపాయింట్‌మెంట్ స్లాట్ బుకింగ్",
        "వీసా ఇంటర్వ్యూ ప్రిపరేషన్ మరియు సలహాలు",
        "ట్రావెల్ ఇన్సూరెన్స్ మరియు ప్రయాణ షెడ్యూల్ తయారీ"
      ]
    },
    documents: {
      en: ["Valid Passport", "Financial & Bank Statements (6 Months)", "Academic Transcripts / Employment Proof", "Sponsor Documents if applicable"],
      te: ["చెల్లుబాటు అయ్యే పాస్‌పోర్ట్", "గత 6 నెలల బ్యాంక్ స్టేట్‌మెంట్", "విద్యా లేదా ఉద్యోగ సంబంధిత ధ్రువపత్రాలు", "స్పాన్సర్‌షిప్ లెటర్లు (అవసరమైతే)"]
    },
    processingTime: {
      en: "Application filing in 24 Hours | Embassy timeline varies",
      te: "24 గంటల్లో ఫైలింగ్ పూర్తి | ఎంబసీ నిబంధనల ప్రకారం జారీ"
    }
  },
  {
    id: 10,
    image: img10,
    category: "citizen",
    badge: {
      en: "RTO & Driving",
      te: "ఆర్టీఓ & డ్రైవింగ్"
    },
    title: {
      en: "Driving License & RTO Vehicle Services",
      te: "డ్రైవింగ్ లైసెన్స్ & ఆర్టీఓ వాహన సేవలు"
    },
    shortDesc: {
      en: "Online application for Learner's License (LLR), Permanent Driving License, DL renewal, vehicle RC transfer, and NOC issuance.",
      te: "లెర్నర్స్ లైసెన్స్ (LLR), శాశ్వత డ్రైవింగ్ లైసెన్స్, లైసెన్స్ రెన్యూవల్, వాహన యాజమాన్య బదిలీ (RC Transfer) మరియు ఎన్‌ఓసీ సేవలు."
    },
    features: {
      en: [
        "LLR slot booking and mock test guidance",
        "Permanent DL test booking and slot change",
        "Address & name change in Driving License",
        "RC duplicate, hypothecation termination & road tax"
      ],
      te: [
        "ఎల్ఎల్ఆర్ (LLR) స్లాట్ బుకింగ్ & ఆన్‌లైన్ టెస్ట్ సహకారం",
        "శాశ్వత డ్రైవింగ్ లైసెన్స్ స్లాట్ కేటాయింపు",
        "డ్రైవింగ్ లైసెన్స్‌లో పేరు లేదా చిరునామా మార్పు",
        "ఆర్సీ డూప్లికేట్, లోన్ క్యాన్సిలేషన్ మరియు రోడ్ టాక్స్ చెల్లింపు"
      ]
    },
    documents: {
      en: ["Aadhaar Card", "Age Proof (10th memo or Birth Certificate)", "Medical Certificate Form 1-A (for transport/senior)"],
      te: ["ఆధార్ కార్డు", "వయస్సు ధ్రువీకరణ పత్రం (10వ తరగతి సర్టిఫికెట్)", "మెడికల్ సర్టిఫికెట్ ఫారం (అవసరమైన వారికి)"]
    },
    processingTime: {
      en: "Instant Online Application & RTO Slot Booking",
      te: "తక్షణ ఆన్‌లైన్ దరఖాస్తు & స్లాట్ బుకింగ్"
    }
  },
  {
    id: 11,
    image: img11,
    category: "banking",
    badge: {
      en: "Bank Accounts",
      te: "బ్యాంక్ ఖాతాలు"
    },
    title: {
      en: "All Bank Account Opening (SBI, HDFC, Axis, ICICI)",
      te: "అన్ని ప్రముఖ బ్యాంక్ ఖాతాల ఓపెనింగ్ సేవలు"
    },
    shortDesc: {
      en: "Instant zero-balance savings and salary account opening across leading public and private banks with instant account number and debit card.",
      te: "ఎస్‌బీఐ, హెచ్‌డీఎఫ్‌సీ, ఐసీఐసీఐ, యాక్సిస్ వంటి ప్రముఖ బ్యాంకులలో జీరో బ్యాలెన్స్ సేవింగ్స్ మరియు శాలరీ ఖాతాలు తక్షణమే ప్రారంభించండి."
    },
    features: {
      en: [
        "Paperless biometric account opening in minutes",
        "Instant Account Number & IFSC code generation",
        "Official passbook and ATM kit provided",
        "Direct link to PMJJBY, PMSBY and APY social schemes"
      ],
      te: [
        "బయోమెట్రిక్ ద్వారా పేపర్‌లెస్ తక్షణ ఖాతా ప్రారంభం",
        "నిమిషాల్లో బ్యాంక్ ఖాతా సంఖ్య మరియు ఐఎఫ్‌ఎస్‌సీ కోడ్",
        "పాస్‌బుక్ మరియు ఏటీఎం డెబిట్ కార్డు సౌకర్యం",
        "పీఎంజేజేబీవై, పీఎంఎస్‌బీవై, అటల్ పెన్షన్ యోజన లింకింగ్"
      ]
    },
    documents: {
      en: ["Aadhaar Card (Linked to Mobile)", "PAN Card", "Passport Size Photos (2)"],
      te: ["మొబైల్‌తో లింక్ అయిన ఆధార్ కార్డు", "పాన్ కార్డు", "2 పాస్‌పోర్ట్ సైజ్ ఫోటోలు"]
    },
    processingTime: {
      en: "Account opened within 15 Minutes",
      te: "15 నిమిషాల్లోపు ఖాతా ప్రారంభం"
    }
  },
  {
    id: 12,
    image: img12,
    category: "citizen",
    badge: {
      en: "Printing & PVC",
      te: "ప్రింటింగ్ & పీవీసీ"
    },
    title: {
      en: "Smart PVC Card Printing & Document Center",
      te: "స్మార్ట్ పీవీసీ కార్డు ప్రింటింగ్ & డాక్యుమెంట్ సెంటర్"
    },
    shortDesc: {
      en: "Pocket-sized, durable PVC smart cards for Aadhaar, Voter ID, PAN, Driving License, Ayushman Bharat, plus colour Xerox and document lamination.",
      te: "ఆధార్, ఓటర్ ఐడీ, పాన్, డ్రైవింగ్ లైసెన్స్, ఆయుష్మాన్ భారత్ పత్రాలను వాటర్‌ప్రూఫ్ పీవీసీ స్మార్ట్ కార్డులుగా ప్రింట్ చేయించుకోండి. కలర్ జిరాక్స్ మరియు లెమినేషన్."
    },
    features: {
      en: [
        "Waterproof, scratch-proof premium PVC plastic cards",
        "High-resolution color laser print with QR code scanning",
        "Commercial document scanning, printing & binding",
        "Govt certificate downloads & hardcopy delivery"
      ],
      te: [
        "వాటర్‌ప్రూఫ్ మరియు గీతలు పడని నాణ్యమైన పీవీసీ కార్డులు",
        "క్యూఆర్ కోడ్ స్కాన్ అయ్యే హై-రిజల్యూషన్ లేజర్ ప్రింటింగ్",
        "డాక్యుమెంట్ స్కానింగ్, కలర్ జిరాక్స్ మరియు లెమినేషన్",
        "అన్ని రకాల ప్రభుత్వ సర్టిఫికెట్ల డౌన్‌లోడ్ & ప్రింట్"
      ]
    },
    documents: {
      en: ["Digital PDF copy or Document Number with OTP"],
      te: ["డిజిటల్ పీడీఎఫ్ ఫైల్ లేదా ఓటీపీతో కూడిన ఐడీ నంబర్"]
    },
    processingTime: {
      en: "5 Minutes Instant Handover",
      te: "కేవలం 5 నిమిషాల్లో కార్డు మీ చేతికి"
    }
  },
  {
    id: 13,
    image: img13,
    category: "citizen",
    badge: {
      en: "Govt Schemes",
      te: "ప్రభుత్వ పథకాలు"
    },
    title: {
      en: "Government Welfare Schemes & Citizen Services",
      te: "ప్రభుత్వ సంక్షేమ పథకాలు & సిటిజెన్ సేవలు"
    },
    shortDesc: {
      en: "Official assistance for PM-Kisan Samman Nidhi, PM Awas Yojana, E-Shram registrations, Rythu Bharosa, pensions, and scholarship applications.",
      te: "పీఎం కిసాన్, పీఎం ఆవాస్ యోజన, ఈ-శ్రమ్ కార్డులు, రైతు భరోసా, సామాజిక పింఛన్లు మరియు విద్యా స్కాలర్‌షిప్ దరఖాస్తులకు పూర్తి సహకారం."
    },
    features: {
      en: [
        "PM Kisan e-KYC and land seeding status check",
        "E-Shram unorganized worker registrations",
        "PM Awas Yojana housing scheme verification",
        "Social security pension tracking and dispute resolution"
      ],
      te: [
        "పీఎం కిసాన్ ఈ-కేవైసీ మరియు ల్యాండ్ సీడింగ్ తనిఖీ",
        "ఈ-శ్రమ్ అసంఘటిత కార్మికుల కార్డు నమోదు",
        "పీఎం ఆవాస్ యోజన ఇళ్ల పథకం దరఖాస్తు",
        "సామాజిక భద్రతా పింఛన్ల స్టేటస్ మరియు నమోదు"
      ]
    },
    documents: {
      en: ["Aadhaar Card", "Ration / Rice Card", "Bank Passbook with active IFSC", "Pattadar Passbook / Land Record (for farmers)"],
      te: ["ఆధార్ కార్డు", "రేషన్ / బియ్యం కార్డు", "బ్యాంక్ పాస్‌బుక్", "పట్టాదారు పాస్‌బుక్ / అడంగల్ (రైతుల కోసం)"]
    },
    processingTime: {
      en: "Same-Day Portal Filing with Acknowledgement Slip",
      te: "వెంటనే పోర్టల్ దరఖాస్తు & రసీదు అందజేత"
    }
  },
  {
    id: 14,
    image: img14,
    category: "citizen",
    badge: {
      en: "Legal & Property",
      te: "ఆస్తి & లీగల్"
    },
    title: {
      en: "Property Documentation & Stamp Duty Registration",
      te: "ఆస్తి డాక్యుమెంటేషన్ & స్టాంప్ డ్యూటీ రిజిస్ట్రేషన్"
    },
    shortDesc: {
      en: "Assistance with Encumbrance Certificate (EC), Certified Copies (CC), Market Value search, Stamp Duty e-challans, and legal deed typing.",
      te: "ఈసీ (ఎన్‌కంబరెన్స్ సర్టిఫికెట్), సర్టిఫైడ్ కాపీలు (CC), మార్కెట్ వ్యాల్యూ సెర్చ్, స్టాంప్ డ్యూటీ చలాన్లు మరియు అగ్రిమెంట్ల తయారీ."
    },
    features: {
      en: [
        "Instant Online EC (Encumbrance Certificate) from 1983 to date",
        "Certified Copies of registered sale deeds & gift deeds",
        "Govt Market Value assessment for stamp calculation",
        "Rental agreements, affidavits, and notary drafting"
      ],
      te: [
        "1983 నుండి నేటి వరకు ఆస్తి ఈసీ (EC) తక్షణ డౌన్‌లోడ్",
        "రిజిస్టర్డ్ సేల్ డీడ్ సర్టిఫైడ్ కాపీల (CC) దరఖాస్తు",
        "రిజిస్ట్రేషన్ కోసం ప్రభుత్వ మార్కెట్ వ్యాల్యూ లెక్కింపు",
        "రెంటల్ అగ్రిమెంట్లు, అఫిడవిట్ మరియు నోటరీ డాక్యుమెంట్లు"
      ]
    },
    documents: {
      en: ["Document Number / Year & SRO Name", "Property Survey Number / Assessment Number", "Owner Aadhaar / Identity Proof"],
      te: ["డాక్యుమెంట్ నంబర్ / సంవత్సరం & ఎస్‌ఆర్‌ఓ పేరు", "సర్వే నంబర్ / డోర్ నంబర్ వివరాలు", "యజమాని ఆధార్ కార్డు"]
    },
    processingTime: {
      en: "Instant EC Download | 24 - 48 Hours for CC Approval",
      te: "తక్షణ ఈసీ ప్రింట్ | 24 గంటల్లో సర్టిఫైడ్ కాపీ"
    }
  },
  {
    id: 15,
    image: img15,
    category: "banking",
    badge: {
      en: "Micro ATM & AEPS",
      te: "మైక్రో ఏటీఎం & ఆధార్ ఏటీఎం"
    },
    title: {
      en: "Micro ATM & AEPS Cash Withdrawal Services",
      te: "మైక్రో ఏటీఎం & ఆధార్ (AEPS) నగదు ఉపసంహరణ"
    },
    shortDesc: {
      en: "Withdraw cash using just your fingerprint (Aadhaar Enabled Payment System) or any bank ATM/Debit card. Instant balance inquiry & mini-statements.",
      te: "మీ వేలిముద్రతో (ఆధార్ ఏటీఎం) లేదా ఏ బ్యాంక్ ఏటీఎం కార్డుతోనైనా నగదు సులభంగా డ్రా చేసుకోండి. బ్యాలెన్స్ ఎంక్వైరీ మరియు మినీ స్టేట్‌మెంట్."
    },
    features: {
      en: [
        "Aadhaar Biometric Cash Withdrawal (No ATM card needed)",
        "Micro ATM swipe for all RuPay, VISA & Mastercard",
        "Instant cash disbursement with printed receipt",
        "Free Bank Balance check and mini statement"
      ],
      te: [
        "ఏటీఎం కార్డు లేకపోయినా వేలిముద్రతో ఆధార్ నగదు విత్‌డ్రాయల్",
        "అన్ని రకాల రూపే, వీసా డెబిట్ కార్డుల స్వైపింగ్ సదుపాయం",
        "తక్షణ నగదు అందజేత మరియు ప్రింటెడ్ రసీదు",
        "ఉచిత బ్యాంక్ బ్యాలెన్స్ ఎంక్వైరీ & మినీ స్టేట్‌మెంట్"
      ]
    },
    documents: {
      en: ["Aadhaar Number & Registered Bank Name (for AEPS)", "Or Any Valid Bank Debit/ATM Card"],
      te: ["ఆధార్ నంబర్ & మీ బ్యాంక్ పేరు (AEPS కొరకు)", "లేదా ఏదైనా బ్యాంక్ ఏటీఎం / డెబిట్ కార్డు"]
    },
    processingTime: {
      en: "Instant Cash Delivery Under 2 Minutes",
      te: "కేవలం 2 నిమిషాల్లో చేతికి నగదు"
    }
  },
  {
    id: 16,
    image: img16,
    category: "utility",
    badge: {
      en: "Recharge & SIM",
      te: "రీఛార్జ్ & సిమ్"
    },
    title: {
      en: "Mobile Recharges, SIM Cards & DTH Activation",
      te: "మొబైల్ రీఛార్జ్, కొత్త సిమ్ కార్డులు & డీటీహెచ్"
    },
    shortDesc: {
      en: "All-network prepaid & postpaid recharges (Airtel, Jio, VI, BSNL), new 5G SIM connections, MNP porting, and Airtel/Tata Play DTH recharges.",
      te: "ఎయిర్‌టెల్, జియో, విఐ, బిఎస్ఎన్ఎల్ రీఛార్జ్‌లు, కొత్త 5G సిమ్ కార్డులు, ఎంఎన్‌పీ పోర్టింగ్ మరియు టాటా ప్లే, సన్‌డైరెక్ట్ డీటీహెచ్ రీఛార్జ్‌లు."
    },
    features: {
      en: [
        "Best plan recommendations with cashback offers",
        "Same-number MNP (Mobile Number Portability)",
        "Instant new 5G SIM activation with Aadhaar KYC",
        "DTH pack refresh and channel booster recharges"
      ],
      te: [
        "అత్యుత్తమ డేటా మరియు అపరిమిత కాలింగ్ ప్లాన్స్",
        "నంబర్ మారకుండా వేరే నెట్‌వర్క్‌కు ఎంఎన్‌పీ (MNP) పోర్టింగ్",
        "ఆధార్ బయోమెట్రిక్‌తో తక్షణ 5G సిమ్ యాక్టివేషన్",
        "డీటీహెచ్ నెలవారీ రీఛార్జ్ & ప్యాక్ అప్‌డేట్స్"
      ]
    },
    documents: {
      en: ["Customer Mobile Number or DTH Customer ID", "Aadhaar Card for New SIM Activation"],
      te: ["మొబైల్ నంబర్ లేదా డీటీహెచ్ కస్టమర్ ఐడీ", "కొత్త సిమ్ కొరకు ఆధార్ కార్డు & ఫోటో"]
    },
    processingTime: {
      en: "Instant Recharge | SIM activates in 2 hours",
      te: "తక్షణ రీఛార్జ్ | 2 గంటల్లో సిమ్ యాక్టివేషన్"
    }
  },
  {
    id: 17,
    image: img17,
    category: "utility",
    badge: {
      en: "BBPS Bill Payments",
      te: "యూటిలిటీ బిల్లులు"
    },
    title: {
      en: "Bharat Bill Payment System (BBPS) Utility Bills",
      te: "భారత్ బిల్ పేమెంట్ (కరెంట్, నీరు, గ్యాస్ బిల్లులు)"
    },
    shortDesc: {
      en: "Pay electricity bills (APCPDCL / APSPDCL), water tax, Indane/HP/Bharat LPG gas cylinder bookings, FASTag, and broadband invoices instantly.",
      te: "కరెంట్ బిల్లులు, మున్సిపల్ పన్నులు, భారత్/హెచ్‌పీ గ్యాస్ సిలిండర్ బుకింగ్, ఫాస్టాగ్ మరియు బ్రాడ్‌బ్యాండ్ ఇంటర్నెట్ బిల్లులు సులభంగా చెల్లించండి."
    },
    features: {
      en: [
        "Official BBPS digital confirmation receipt",
        "Late fee protection with instant bill settlement",
        "Auto-fetching of latest overdue amount",
        "Multiple payment options: Cash, UPI, Debit Card"
      ],
      te: [
        "అధికారిక ప్రభుత్వ గుర్తింపు గల కంప్యూటర్ రసీదు",
        "ఆలస్య రుసుము లేకుండా తక్షణమే బిల్ చెల్లింపు",
        "మీ కన్స్యూమర్ నంబర్‌తో బిల్ మొత్తం తక్షణ పరిశీలన",
        "నగదు లేదా యూపీఐ ద్వారా చెల్లించే సౌకర్యం"
      ]
    },
    documents: {
      en: ["Service Connection Number / Consumer ID", "Bill copy or Registered Mobile Number"],
      te: ["సర్వీస్ కనెక్షన్ నంబర్ / కన్స్యూమర్ నంబర్", "మునుపటి బిల్లు కాపీ లేదా మొబైల్ నంబర్"]
    },
    processingTime: {
      en: "Instant Payment Verification & Receipt",
      te: "తక్షణ చెల్లింపు ధ్రువీకరణ & ప్రింటెడ్ రసీదు"
    }
  },
  {
    id: 18,
    image: img18,
    category: "banking",
    badge: {
      en: "Current Accounts",
      te: "కరెంట్ ఖాతాలు"
    },
    title: {
      en: "Instant Current & Business Account Opening",
      te: "వ్యాపారుల కోసం తక్షణ కరెంట్ ఖాతాలు"
    },
    shortDesc: {
      en: "Tailored business accounts for retail merchants, traders, startups, and self-employed professionals with zero balance options and UPI QR soundbox setup.",
      te: "వ్యాపారులు, దుకాణదారులు మరియు సంస్థల కోసం నిమిషాల్లో కరెంట్ ఖాతాలు. క్యూఆర్ కోడ్, సౌండ్‌బాక్స్ మరియు పీవోఎస్ మెషిన్ సదుపాయం."
    },
    features: {
      en: [
        "Fast paperless KYC with just 3 basic documents",
        "High daily digital transaction limits",
        "Free Soundbox & Merchant QR standee facilitation",
        "Integrated net banking and multi-user access"
      ],
      te: [
        "కేవలం 3 పత్రాలతో పేపర్‌లెస్ డిజిటల్ కేవైసీ",
        "వ్యాపార లావాదేవీలకు అధిక పరిమితులు (నో లిమిట్)",
        "వ్యాపారుల కోసం ఉచిత సౌండ్‌బాక్స్ & క్యూఆర్ స్టాండ్",
        "నెట్ బ్యాంకింగ్ మరియు మొబైల్ బ్యాంకింగ్ సౌకర్యం"
      ]
    },
    documents: {
      en: ["Aadhaar Card", "PAN Card", "Business Proof (GST, Udyam, Trade License, or Shop Act)"],
      te: ["ఆధార్ కార్డు", "పాన్ కార్డు", "వ్యాపార ధ్రువీకరణ (జీఎస్టీ / ఉద్యమ్ / ట్రేడ్ లైసెన్స్)"]
    },
    processingTime: {
      en: "Digital Account Ready in 20 Minutes",
      te: "20 నిమిషాల్లో కరెంట్ ఖాతా సిద్ధం"
    }
  },
  {
    id: 19,
    image: img5,
    category: "travel",
    badge: {
      en: "Flight Booking",
      te: "విమాన టికెట్లు"
    },
    title: {
      en: "Air Ticket Booking (Domestic & International)",
      te: "విమాన టికెట్ బుకింగ్ (దేశీయ & అంతర్జాతీయ)",
    },
    shortDesc: {
      en: "Best fare deals on IndiGo, Air India, Emirates, Qatar Airways and all global carriers with seat selection and baggage add-ons.",
      te: "ఇండిగో, ఎయిర్ ఇండియా, ఎమిరేట్స్ వంటి ప్రముఖ ఎయిర్‌లైన్స్‌లో అత్యంత తక్కువ ధరలకే దేశీయ మరియు అంతర్జాతీయ విమాన టికెట్ల బుకింగ్."
    },
    features: {
      en: [
        "Special corporate & student discount fares",
        "Extra baggage allowance booking",
        "Web check-in and boarding pass printout",
        "Easy cancellation & instant refund processing"
      ],
      te: [
        "ప్రత్యేక తగ్గింపు ఛార్జీలు & ఆఫర్లు",
        "అదనపు లగేజ్ బుకింగ్ సదుపాయం",
        "వెబ్ చెక్-ఇన్ మరియు బోర్డింగ్ పాస్ ప్రింట్",
        "సులభమైన రద్దు & వేగవంతమైన రీఫండ్"
      ]
    },
    documents: {
      en: ["Government Photo ID (Aadhaar/PAN for Domestic)", "Valid Passport & Visa (for International)", "Travel Dates & Passenger Details"],
      te: ["ప్రభుత్వ గుర్తింపు కార్డు (దేశీయ ప్రయాణానికి)", "చెల్లుబాటు అయ్యే పాస్‌పోర్ట్ & వీసా (అంతర్జాతీయ ప్రయాణానికి)", "ప్రయాణ తేదీలు మరియు వివరాలు"]
    },
    processingTime: {
      en: "Instant E-Ticket Generation & WhatsApp Delivery",
      te: "తక్షణ ఈ-టికెట్ జారీ & వాట్సాప్ డెలివరీ"
    }
  },
  {
    id: 20,
    image: img6,
    category: "money_transfer",
    badge: {
      en: "Forex & Remittance",
      te: "ఫారెక్స్ & విదేశీ నగదు"
    },
    title: {
      en: "Foreign Currency Exchange & Global Remittance",
      te: "ఫారిన్ కరెన్సీ ఎక్స్ఛేంజ్ & విదేశీ నగదు బదిలీ"
    },
    shortDesc: {
      en: "Collect money sent from Gulf countries, USA, UK, Europe via Western Union, MoneyGram, and exchange foreign currencies at competitive rates.",
      te: "గల్ఫ్ దేశాలు, అమెరికా, యూరప్ నుండి పంపిన నగదును సురక్షితంగా అందుకోండి. అత్యుత్తమ ఎక్స్ఛేంజ్ రేట్లతో విదేశీ కరెన్సీ మార్పిడి."
    },
    features: {
      en: [
        "Instant payout for Western Union, MoneyGram & Transfast",
        "Competitive INR conversion rates",
        "Forex travel card guidance for students & travellers",
        "Transparent commission with zero hidden fee"
      ],
      te: [
        "వెస్ట్రన్ యూనియన్, మనీగ్రామ్ ద్వారా వచ్చిన నగదు తక్షణ చెల్లింపు",
        "రూపాయి మార్పిడికి అత్యుత్తమ మార్కెట్ విలువ",
        "విదేశాలకు వెళ్లే విద్యార్థుల కోసం ఫారెక్స్ కార్డు సహాయం",
        "పూర్తి పారదర్శకమైన లావాదేవీలు"
      ]
    },
    documents: {
      en: ["MTCN (Money Transfer Control Number)", "Original Government ID (Passport/Aadhaar/Voter ID)", "Sender Name & Country of Origin"],
      te: ["ఎంటీసీఎన్ (MTCN) నంబర్", "అసలైన గుర్తింపు కార్డు (పాస్‌పోర్ట్/ఆధార్)", "నగదు పంపినవారి పేరు మరియు దేశం వివరాలు"]
    },
    processingTime: {
      en: "Cash in hand within 10 - 15 Minutes",
      te: "10 - 15 నిమిషాల్లో నగదు చెల్లింపు"
    }
  }
];
