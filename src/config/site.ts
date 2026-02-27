// =============================================================================
// SITE CONFIGURATION — Single source of truth for all business data.
// Update this file to change contact details, services, areas, or FAQs.
// =============================================================================

export const SITE = {
  name: 'Stoke Van Locks',
  tagline: 'Mobile Van Lock Fitting in Stoke-on-Trent & Staffordshire',
  description:
    'Expert mobile van lock fitting across Stoke-on-Trent, Newcastle-under-Lyme and a 20-mile radius. Deadlocks, slam locks, and hook locks supplied and fitted at your home or workplace by a specialist auto locksmith. Call or WhatsApp for a free quote today.',
  url: 'https://www.stokevanlocks.co.uk',
  phone: {
    display: '07843 353 100',
    href: 'tel:+447843353100',
  },
  whatsapp: {
    // Pre-filled message — URL-encoded
    href: 'https://wa.me/447843353100?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20van%20locks.%20My%20postcode%20is%20...',
    label: 'WhatsApp Me',
  },
  email: 'Dan@stokevanlocks.co.uk',
  address: {
    locality: 'Stoke-on-Trent',
    region: 'Staffordshire',
    country: 'GB',
  },
  serviceArea: 'Stoke-on-Trent and a 20-mile radius',
  // Optional tagline — remove if not wanted
  // TODO: Confirm with client whether to use this tagline
  optionalTagline: "If your van needs locking, call Dan Topping.",
} as const;

// =============================================================================
// SERVICES
// =============================================================================

export const SERVICES = [
  {
    id: 'deadlocks',
    title: 'Deadlocks',
    icon: 'deadlock',
    description:
      'A high-security secondary lock that works alongside your factory lock. Cannot be picked, drilled, or leveraged open.',
    details: [
      'Anti-pick, anti-drill cylinders as standard',
      'Works alongside your existing factory lock',
      'Suitable for almost every van make and model',
      'A popular choice for tradespeople and fleets',
    ],
    whoFor: 'Tradespeople, sole traders, fleet operators',
  },
  {
    id: 'slam-locks',
    title: 'Slam Locks',
    icon: 'slam',
    description:
      'Locks automatically the moment the door closes — ideal for couriers and delivery drivers who need hands-free, effortless security.',
    details: [
      'Locks on door closure — no fumbling with keys',
      'Master key override available',
      'Fast, reliable, and popular with delivery drivers',
      'Fits rear and side doors',
    ],
    whoFor: 'Couriers, delivery drivers, anyone needing speed and convenience',
  },
  {
    id: 'hook-locks',
    title: 'Hook Locks',
    icon: 'hook',
    description:
      'The highest level of van door security available. A hooked bolt engages the door frame, making crowbar and lever attacks virtually impossible.',
    details: [
      'Maximum resistance to lever and crowbar attacks',
      'Fits rear barn doors and side doors',
      'Insurance-approved options available',
      'Often recommended alongside a deadlock for full protection',
    ],
    whoFor: 'Anyone carrying high-value tools or equipment',
  },
  {
    id: 'repairs',
    title: 'Repairs & Replacements',
    icon: 'repair',
    description:
      'Damaged, seized, or worn van locks repaired or replaced — I carry stock of common parts and can often fix the issue the same day.',
    details: [
      'Factory lock repairs and replacements',
      'Aftermarket security lock repairs',
      'Lost or damaged key cylinder replacements',
      'Quick turnaround — often same or next day',
    ],
    whoFor: 'Anyone with a faulty or damaged van lock',
  },
  {
    id: 'upgrades',
    title: 'Security Upgrades & Advice',
    icon: 'upgrade',
    description:
      'Not sure what you need? I assess your van, your cargo, and your risk — then recommend the right combination of locks for your situation.',
    details: [
      'Free, no-obligation security assessment',
      'Combined lock packages for maximum protection',
      'Bespoke solutions for fleet vehicles',
      'Post-install advice included as standard',
    ],
    whoFor: 'Fleet managers, business owners, anyone unsure where to start',
  },
] as const;

// =============================================================================
// SERVICE AREAS
// =============================================================================

export const AREAS = [
  'Stoke-on-Trent',
  'Newcastle-under-Lyme',
  'Crewe',
  'Congleton',
  'Leek',
  'Stafford',
  'Stone',
  'Kidsgrove',
  'Biddulph',
  'Cheadle',
  'Uttoxeter',
  'Macclesfield',
  'Holmes Chapel',
  'Nantwich',
  'Market Drayton',
  'Eccleshall',
] as const;

// =============================================================================
// FAQS
// =============================================================================

export const FAQS = [
  {
    question: 'What types of van lock do you recommend?',
    answer:
      "It depends on how you use your van. Deadlocks are a solid all-round choice and work alongside your existing factory lock. Slam locks are brilliant for couriers or delivery drivers who open and close doors dozens of times a day — they lock automatically on closure. Hook locks offer the highest resistance to lever attacks and are ideal if you're carrying high-value tools. I'm happy to chat through your situation and advise the best option — just get in touch.",
  },
  {
    question: 'How long does fitting take?',
    answer:
      'Most single-lock installations take between 60 and 90 minutes. If you\'re having multiple locks fitted or a more complex job, allow two to three hours. I\'ll always give you a realistic time estimate before I arrive.',
  },
  {
    question: 'Can you fit locks at my home or workplace?',
    answer:
      "Yes — I'm fully mobile. I come to you at your home, workplace, or any convenient location within my service area. Just let me know your postcode when you get in touch and I'll confirm I can reach you.",
  },
  {
    question: 'Do I need to provide shelter or cover for the fitting?',
    answer:
      "Ideally, fitting is carried out under cover or in dry conditions — both for the quality of the installation and the comfort of my engineer. If you have a garage, driveway under a car port, or similar, that's ideal. In good weather, a driveway works fine. I'll always make a sensible call on the day.",
  },
  {
    question: 'Do you offer emergency lockout services?',
    answer:
      "I don't offer a general emergency lockout service. However, if you're locked out of your van due to a lock I fitted, please call me and I'll do my best to help as quickly as possible.",
  },
  {
    question: 'How does the quote process work?',
    answer:
      "Get in touch by phone, WhatsApp, or the form on this page. I'll ask a few quick questions — your van make, model, and year; which doors you want securing; and what lock type you're looking for. I'll then provide a clear, no-obligation quote. Quotes are valid for 30 days.",
  },
  {
    question: 'How quickly can you fit?',
    answer:
      'I typically aim to fit within one week of your quote being accepted. If you need something sooner, just ask — I can often accommodate within a few days, subject to availability.',
  },
  {
    question: 'What vans do you cover?',
    answer:
      "I carry lock kits for virtually every major van make and model — Ford Transit, Vauxhall Vivaro, Mercedes Sprinter, VW Transporter, Renault Trafic, Peugeot Expert, Citroën Dispatch, and many more. There are a small number of exceptions; just ask me if you're unsure about your specific van.",
  },
  {
    question: 'What are your payment methods?',
    answer:
      'I accept cash or bank transfer. Payment is due on completion of the work. I do not require a deposit, and I do not accept online card payments.',
  },
] as const;
