// Mock data for Jelcos Home Nursing Website

export const services = [
  {
    id: 1,
    title: "Home Nursing",
    description: "We provide high end quality care at home",
    icon: "home",
    features: ["24/7 Care Available", "Trained Professionals", "Personalized Care Plans"]
  },
  {
    id: 2,
    title: "Hospital Bystander Service",
    description: "We are happy to assist you in hospital rooms.",
    icon: "hospital",
    features: ["Full-time Support", "Part-time Options", "Experienced Staff"]
  },
  {
    id: 3,
    title: "Child Care",
    description: "We provide highly experienced nurses who will take care all of your child's need with care.",
    icon: "baby",
    features: ["Gentle Care", "Child Specialists", "Safe Environment"]
  },
  {
    id: 4,
    title: "Post Delivery Care",
    description: "We provide all post-partum support tailored to your needs.",
    icon: "heart",
    features: ["Mother & Baby Care", "Lactation Support", "24/7 Assistance"]
  },
  {
    id: 5,
    title: "Elderly Care",
    description: "Premium elderly and geriatric care at home. Bedridden care meets personalized attention with love and compassion.",
    icon: "users",
    features: ["Compassionate Care", "Daily Assistance", "Medical Support"]
  },
  {
    id: 6,
    title: "House Help & Support",
    description: "Reliable and vetted house help services to manage your daily chores alongside caregiving.",
    icon: "home",
    features: ["Vetted Professionals", "Daily Chores Support", "Flexible Timings"]
  },
  {
    id: 7,
    title: "Medical Tourism Care",
    description: "Dedicated post-operative care and bystander support for international patients and NRIs visiting Kollam and Kerala.",
    icon: "hospital",
    features: ["Post-Op Recovery", "NRI Support", "Hospital Coordination"]
  }
];

export const whyChooseUs = [
  {
    id: 5,
    title: "Comprehensive Home Healthcare",
    description: "From house help to specialized medical tourism recovery, we are the leading home healthcare provider in Kollam and Kerala.",
    icon: "shield-check"
  },
  {
    id: 1,
    title: "Affordable Pricing",
    description: "Flexible pricing packages well flexible on your budget. Supports Digital payments for your convenience",
    icon: "wallet"
  },
  {
    id: 2,
    title: "Competent Team",
    description: "Well trained and experienced Workforce, tailored for your distinct requirements",
    icon: "shield-check"
  },
  {
    id: 3,
    title: "Active Support",
    description: "We are always awake to hear your concerns embrace your valuable feedback.",
    icon: "headphones"
  },
  {
    id: 4,
    title: "Home Care",
    description: "Part time and full time nursing service at your home post delivery care, old age and bedridden.",
    icon: "home-heart"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Gopan Venugopal",
    rating: 5,
    date: "January 14, 2026",
    title: "Stellar and Credible Service",
    content: "After too many searches and having had bitter experiences; I am glad and happy that I found Jelcos Home Nursing Services. Very reliable and authentic. Ms. Bindhu who is the Live in care Giver is very Phenomenal, never have to have anything re-done and nothing is ever forgotten. It should be worth mentioned Mr Prakash makes very swift responses to any queries. It is a big relief to know that my loved one's are taken care of when sitting miles away from them."
  },
  {
    id: 2,
    name: "Anjali Nair (NRI, Dubai)",
    rating: 5,
    date: "March 02, 2026",
    title: "A True Blessing for NRIs",
    content: "Living in Dubai, finding reliable care for my bedridden mother in Kerala was my biggest worry. Jelcos has been a true blessing. Their nurses are highly professional, punctual, and treat my mother like their own family. The peace of mind they provide to NRIs like us is priceless."
  },
  {
    id: 3,
    name: "Thomas Abraham",
    rating: 5,
    date: "February 18, 2026",
    title: "Outstanding Staff Behavior and Quality",
    content: "I am thoroughly impressed with the service quality of Jelcos Home Nursing. The staff's behavior is extremely polite, compassionate, and highly trained. They handled all medical routines perfectly, giving us huge relief during my father's post-surgery recovery."
  },
  {
    id: 4,
    name: "Sarah Varghese (NRI, UK)",
    rating: 5,
    date: "December 28, 2025",
    title: "Highly Reliable and Trustworthy",
    content: "As an NRI based in the UK, I was completely stressed about my parents' wellbeing back home. I reached out to Mr. Prakash, and the way Jelcos organized 24/7 care was incredibly reliable. The nurses are so caring and diligent. I highly recommend their services to all expats looking for peace of mind."
  },
  {
    id: 5,
    name: "Priya Menon",
    rating: 5,
    date: "November 05, 2025",
    title: "Excellent Post-Delivery Care",
    content: "The post-delivery care service was exceptional. The nurse was very caring, knowledgeable, and helped me tremendously through the most challenging time. Highly recommend their services to new mothers."
  },
  {
    id: 6,
    name: "Rajesh Kumar",
    rating: 5,
    date: "September 12, 2025",
    title: "Professional and Compassionate",
    content: "We needed elderly care for my father and Jelcos provided an amazing caregiver. Professional, compassionate, and always punctual. Thank you for taking such good care of our loved one with such high service quality."
  }
];

export const contactInfo = {
  phone: "+91 9446978999",
  branchPhone: "+91 81398 01294",
  address: "Jelcos Home Nursing, Ayathil, Kollam - 691021, Near Meditrina Hospital",
  addressBranch2: "Jelcos Home Nursing, Nadakkal Road, Kalluvathukkal",
  branch2Link: "https://share.google/H98fiJFnIFFwfC1i2",
  branch2Areas: "Serving: Parippally, Chathanoor, Paravoor, Varkala, Kallambalam, Attingal, Kazhakoottam, and Trivandrum",
  hours: "Monday - Sunday 10:00 - 18:00",
  email: "info@jelcos.com"
};

export const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export const questionnaireQuestions = [
  {
    id: 1,
    question: "What type of care service do you need?",
    type: "select",
    options: ["Home Nursing", "House Help", "Elderly Care", "Medical Tourism Care", "Hospital Bystander", "Child Care", "Post Delivery Care"]
  },
  {
    id: 2,
    question: "What is your phone number?",
    type: "tel",
    placeholder: "Enter 10-digit phone number",
    pattern: "[0-9]{10}",
    title: "Please enter a valid 10-digit phone number"
  },
  {
    id: 3,
    question: "Patient's age",
    type: "number",
    placeholder: "Enter age",
    min: 0,
    max: 120
  },
  {
    id: 4,
    question: "Current medical condition",
    type: "textarea",
    placeholder: "Describe the patient's current medical condition...",
    optional: true
  },
  {
    id: 5,
    question: "Mobility status",
    type: "select",
    options: ["Fully Mobile", "Partially Mobile", "Bedridden", "Wheelchair"]
  },
  {
    id: 6,
    question: "Care duration required",
    type: "select",
    options: ["Part-time (4-8 hours)", "Full-time (12 hours)", "24/7 Live-in Care"]
  },
  {
    id: 7,
    question: "Special requirements or medications",
    type: "textarea",
    placeholder: "Any special requirements, medications, or allergies...",
    optional: true
  }
];
