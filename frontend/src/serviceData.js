// Service catalogue — drives cards AND dedicated detail pages (/services/:slug).

export const services = [
  {
    id: 1,
    slug: 'home-nursing',
    title: 'Home Nursing',
    tagline: 'Hospital-quality nursing, at home',
    description: 'Trained nurses for medication, wound care, injections, IV support and post-hospital recovery — with a documented care plan.',
    icon: 'home',
    features: ['Medication & injections', 'Wound & post-op care', 'Personalised care plans'],
    detail: {
      intro:
        'Our home nursing service brings trained, background-verified nurses to your doorstep across Kollam and Kerala. Every case starts with an assessment visit, a written care plan, and a named nurse you can reach directly.',
      includes: [
        'Medication administration, injections & IV assistance',
        'Wound dressing, catheter & Ryle’s-tube care',
        'Post-hospital recovery monitoring & vitals tracking',
        'Coordination with your treating doctor',
      ],
      whoFor: [
        'Patients discharged after surgery or hospitalisation',
        'Seniors needing regular medical attention at home',
        'NRI families who need a reliable medical contact on the ground',
      ],
      faqs: [
        {
          q: 'Are your nurses qualified?',
          a: 'Yes — all nurses are trained professionals with verified credentials and supervised care plans.',
        },
        {
          q: 'Can I get part-time or 24/7 nursing?',
          a: 'Both. Choose part-time visits, 12-hour shifts, or 24/7 live-in care based on the assessment.',
        },
        {
          q: 'Which areas do you cover?',
          a: 'Kollam, Trivandrum and across Kerala, including Parippally, Chathanoor, Varkala, Attingal and Kazhakoottam.',
        },
      ],
    },
  },
  {
    id: 2,
    slug: 'hospital-bystander',
    title: 'Hospital Bystander Service',
    tagline: 'A trusted attendant by the bedside',
    description: 'Reliable bystanders for hospital stays — full-time or part-time, day or night, in Kollam and Trivandrum hospitals.',
    icon: 'hospital',
    features: ['Full-time support', 'Part-time options', 'Experienced staff'],
    detail: {
      intro:
        'When a loved one is admitted, you can’t always be there round the clock. Our hospital bystanders stay by the bedside — helping with food, medication timing, mobility, and keeping your family updated.',
      includes: [
        'Full-time (12 / 24 hr) or part-time bystander shifts',
        'Medication reminders & food assistance',
        'Mobility, hygiene & comfort support',
        'Regular updates to family on phone/WhatsApp',
      ],
      whoFor: [
        'Families who can’t stay overnight at the hospital',
        'Post-surgery patients needing constant attention',
        'NRI families with no one locally available',
      ],
      faqs: [
        {
          q: 'How fast can you arrange a bystander?',
          a: 'Usually within a few hours in Kollam — call +91 94469 78999 and we confirm availability immediately.',
        },
        {
          q: 'Do bystanders stay overnight?',
          a: 'Yes, we offer day, night and 24-hour rotations.',
        },
        {
          q: 'Which hospitals do you cover?',
          a: 'All major hospitals in Kollam and Trivandrum, including Meditrina and nearby multispeciality hospitals.',
        },
      ],
    },
  },
  {
    id: 3,
    slug: 'child-care',
    title: 'Child Care',
    tagline: 'Gentle, safe care for little ones',
    description: 'Experienced caregivers for infants and children — feeding, hygiene, routines and a safe, happy environment.',
    icon: 'baby',
    features: ['Gentle care', 'Child specialists', 'Safe environment'],
    detail: {
      intro:
        'Our child-care caregivers support working parents and new families with dependable, affectionate care — following your child’s routine, diet and sleep schedule exactly.',
      includes: [
        'Feeding, bathing & diaper-care routines',
        'Play, learning activities & nap schedules',
        'School pick-up / drop assistance where needed',
        'Hygiene-first, background-verified caregivers',
      ],
      whoFor: [
        'Working parents needing daytime support',
        'New parents who want an extra pair of trained hands',
        'Families with twins or special routines',
      ],
      faqs: [
        {
          q: 'Are caregivers experienced with infants?',
          a: 'Yes — we match caregivers with infant/child experience to your child’s age group.',
        },
        {
          q: 'Can timings be flexible?',
          a: 'Yes, part-time, full-day and live-in options are available.',
        },
        {
          q: 'Is the caregiver background-verified?',
          a: 'Every caregiver is ID-verified and reference-checked before placement.',
        },
      ],
    },
  },
  {
    id: 4,
    slug: 'post-delivery-care',
    title: 'Post Delivery Care',
    tagline: 'Recovery support for mother & baby',
    description: 'Post-partum care for the mother plus newborn support — rest, nutrition, lactation guidance and baby care.',
    icon: 'heart',
    features: ['Mother & baby care', 'Lactation support', 'Rest & recovery'],
    detail: {
      intro:
        'The first weeks after delivery matter the most. Our post-delivery caregivers look after both mother and newborn — so the mother can rest, recover and bond while everything else is handled.',
      includes: [
        'Mother’s rest, diet & recovery support',
        'Newborn bathing, feeding & sleep routines',
        'Lactation guidance & post-partum hygiene',
        'Light household help around mother & baby',
      ],
      whoFor: [
        'New mothers without family support nearby',
        'C-section recoveries needing extra rest',
        'First-time parents who want trained guidance',
      ],
      faqs: [
        {
          q: 'Do you support C-section recovery?',
          a: 'Yes — our caregivers are experienced with post-caesarean rest protocols and mobility limits.',
        },
        {
          q: 'Is baby care included?',
          a: 'Yes, mother + newborn care comes as one package.',
        },
        {
          q: 'Can my mother-in-law’s instructions be followed?',
          a: 'Absolutely — we follow your family’s traditional practices alongside safe modern care.',
        },
      ],
    },
  },
  {
    id: 5,
    slug: 'elderly-care',
    title: 'Elderly Care',
    tagline: 'Dignified care for ageing parents',
    description: 'Companionship plus daily assistance for seniors — including specialised bedridden and dementia-aware care.',
    icon: 'users',
    features: ['Companionship & care', 'Daily assistance', 'Bedridden support'],
    detail: {
      intro:
        'Ageing parents deserve patience, routine and respect. Our elderly-care team provides daily companionship, medication supervision, mobility help and — where needed — full bedridden care with dignity.',
      includes: [
        'Daily routine: meals, medication, walks, hygiene',
        'Companionship & conversation, not just tasks',
        'Bedridden care: turning, pressure care, feeding',
        'Fall-prevention & home-safety guidance',
      ],
      whoFor: [
        'Seniors living alone or with working children',
        'Bedridden or limited-mobility elders',
        'NRI children needing eyes and ears at home',
      ],
      faqs: [
        {
          q: 'Do you handle bedridden patients?',
          a: 'Yes — specialised bedridden care including pressure-sore prevention and feeding support.',
        },
        {
          q: 'Can the caregiver stay overnight?',
          a: 'Yes, live-in and night-shift options are available.',
        },
        {
          q: 'How do NRIs stay updated?',
          a: 'Daily WhatsApp/photo updates and a direct coordinator line for family abroad.',
        },
      ],
    },
  },
  {
    id: 6,
    slug: 'house-help',
    title: 'House Help & Support',
    tagline: 'A dependable extra pair of hands',
    description: 'Vetted house help for cooking, cleaning and daily chores — so caregiving never means household chaos.',
    icon: 'home',
    features: ['Vetted professionals', 'Cooking & cleaning', 'Flexible timings'],
    detail: {
      intro:
        'Care needs don’t pause household work. Our vetted house-help staff handle cooking, cleaning, laundry and errands — working alongside nurses or independently.',
      includes: [
        'Cooking (Kerala & North-Indian home styles)',
        'Cleaning, laundry & dish routines',
        'Grocery & pharmacy errands',
        'Support during functions & guest stays',
      ],
      whoFor: [
        'Households with a patient needing parallel support',
        'Working couples & nuclear families',
        'NRI-maintained homes needing regular upkeep',
      ],
      faqs: [
        {
          q: 'Are house helps verified?',
          a: 'Yes — ID-verified, reference-checked and trial-supervised before regular placement.',
        },
        {
          q: 'Can I get help for a few hours daily?',
          a: 'Yes — 4-hour, 8-hour and full-day plans are available.',
        },
        {
          q: 'Do they cook Kerala meals?',
          a: 'Yes, most of our staff cook standard Kerala vegetarian and non-vegetarian meals.',
        },
      ],
    },
  },
  {
    id: 7,
    slug: 'medical-tourism',
    title: 'Medical Tourism Care',
    tagline: 'Recovery care for visiting patients',
    description: 'End-to-end support for NRI and international patients — hospital coordination, stay, nursing and recovery.',
    icon: 'hospital',
    features: ['Post-op recovery', 'NRI support', 'Hospital coordination'],
    detail: {
      intro:
        'Visiting Kerala for treatment? We coordinate everything around your procedure — hospital liaison, bystander support, recovery nursing and comfortable post-op stays.',
      includes: [
        'Pre-arrival planning & hospital coordination',
        'In-hospital bystander & translator support',
        'Post-op nursing at your stay location',
        'Transport, pharmacy & follow-up scheduling',
      ],
      whoFor: [
        'NRI families planning surgery in Kollam/Kerala',
        'International patients seeking affordable quality care',
        'Anyone needing a single coordinator for the whole journey',
      ],
      faqs: [
        {
          q: 'Do you coordinate with hospitals?',
          a: 'Yes — we liaise with your hospital on admission, surgery schedules and discharge plans.',
        },
        {
          q: 'Where will I recover?',
          a: 'At your family home, a serviced stay, or our partner recovery rooms — with nursing visits.',
        },
        {
          q: 'How do we start from abroad?',
          a: 'Share reports on WhatsApp (+91 94469 78999); we plan everything before you fly in.',
        },
      ],
    },
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
