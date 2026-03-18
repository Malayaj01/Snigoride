export const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services', hasMegaMenu: true },
  { label: 'Advertise', href: '#advertise' },
  { label: 'Partner With Us', href: '#partner' },
  { label: 'Environment', href: '#environment' },
  { label: 'Contact Us', href: '#contact' },
]

export const SERVICES = [
  {
    id: 1,
    icon: 'Truck',
    title: 'EV4Delivery',
    description: 'Dedicated EV riders for last-mile deliveries',
  },
  {
    id: 2,
    icon: 'Key',
    title: 'Rent-to-Own',
    description: 'Rent today and own your EV tomorrow',
  },
  {
    id: 3,
    icon: 'Megaphone',
    title: 'Snigo Ads',
    description: 'Advertise your brand on EV fleets',
  },
  {
    id: 4,
    icon: 'Bike',
    title: '2V Rental',
    description: 'Electric scooters for affordable mobility',
  },
  {
    id: 5,
    icon: 'Package',
    title: '3V Rental',
    description: 'Electric three-wheeler cargo vehicles',
  },
  {
    id: 6,
    icon: 'Car',
    title: '4V Rental',
    description: 'Electric four-wheeler cargo vehicles',
  },
] as const

export const FEATURES = [
  {
    icon: 'Leaf',
    title: 'Sustainable Electric Mobility',
    description: 'Zero-emission deliveries reducing urban carbon footprint',
  },
  {
    icon: 'TrendingDown',
    title: 'Lower Delivery Costs',
    description: 'Save up to 60% on fuel and maintenance vs petrol vehicles',
  },
  {
    icon: 'Cpu',
    title: 'Smart ride Technology',
    description: 'AI-powered route optimisation and real-time tracking',
  },
  {
    icon: 'Users',
    title: 'Reliable Rider Network',
    description: 'Trained, verified EV riders across all operating cities',
  },
] as const

export const STATS = [
  { emoji: '🚚', value: 15000, suffix: '+', label: 'Deliveries Completed' },
  { emoji: '🏙️', value: 5, suffix: '+', label: 'Cities Covered' },
  { emoji: '🤝', value: 20, suffix: '+', label: 'Business Partners' },
  { emoji: '🌳', value: 5000, suffix: '+', label: 'Tonnes CO₂ Saved' },
] as const

export const TESTIMONIALS = [
  {
    name: 'Ravi Kumar',
    role: 'Delivery Partner, Hyderabad',
    rating: 5,
    comment:
      'SNIGORIDE changed my life. I now own my EV through their Rent-to-Own scheme and earn ₹35,000/month.',
  },
  {
    name: 'Priya Mehta',
    role: 'Business Owner, Bengaluru',
    rating: 5,
    comment:
      'EV4Delivery cut our last-mile costs by almost half. Reliable, fast, and eco-friendly.',
  },
  {
    name: 'Arjun Das',
    role: 'Franchise Partner, Pune',
    rating: 4,
    comment:
      'The franchise model is well-structured. Support team is always available.',
  },
  {
    name: 'Sunita Rao',
    role: 'Rider, Chennai',
    rating: 5,
    comment:
      'The 2V rental is affordable and perfect for my daily gig work. Highly recommend.',
  },
  {
    name: 'Mohammed Farhan',
    role: 'Marketing Head, Startup',
    rating: 5,
    comment:
      'Snigo Ads gave us incredible visibility. Our brand was seen across 500+ EVs in the city.',
  },
  {
    name: 'Kavitha Nair',
    role: 'ride Manager, Kochi',
    rating: 4,
    comment:
      'Switching to EV fleet through SNIGORIDE saved us significant costs month over month.',
  },
]

export const FAQS = [
  {
    q: 'What vehicles are available for rental?',
    a: 'We offer 2-wheelers (electric scooters), 3-wheelers (cargo autos), and 4-wheelers (electric cargo vans) depending on your delivery or mobility needs.',
  },
  {
    q: 'How does Rent-to-Own work?',
    a: "You start by renting an EV at affordable daily/monthly rates. A portion of each payment goes toward ownership. After a set period, the vehicle is fully yours — no large upfront cost.",
  },
  {
    q: 'How can businesses advertise on EV vehicles?',
    a: 'Through Snigo Ads, businesses can wrap EV fleets with branded decals. We offer geo-targeted campaigns across specific city zones and delivery corridors.',
  },
  {
    q: 'Which cities do you currently operate in?',
    a: 'We currently operate in Hyderabad, Bengaluru, Chennai, Pune, and Kochi — with rapid expansion planned across Tier-2 cities.',
  },
  {
    q: 'Is there a franchise opportunity available?',
    a: 'Yes. We offer city-level franchise partnerships with full operational support, branding, and technology access. Contact us to learn more.',
  },
  {
    q: 'What support do riders receive?',
    a: 'Riders get onboarding training, vehicle insurance, maintenance support, and access to our rider app for order management and earnings tracking.',
  },
]

export const CALC = {
  petrolCostPerKm: 4.5,
  evCostPerKm: 1.2,
  petrolMaintenance: 3500,
  evMaintenance: 800,
  co2PerKmPetrol: 0.12,
  workingDays: 26,
} as const

export const FOOTER_SERVICES = [
  'EV4Delivery',
  'Rent-to-Own',
  '2V Rental',
  '3V Rental',
  '4V Rental',
  'Snigo Ads',
]

export const FOOTER_PARTNER = [
  'Partner With Us',
  'Advertise',
  'Franchise Enquiry',
]
