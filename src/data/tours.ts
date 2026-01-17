export interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  distance: string;
  price: string;
  description: string;
  image: string;
  imagePosition?: string;
  gallery?: string[];
  longDescription?: string;
  highlights?: string[];
  includes?: string[];
  nearby?: {
    title: string;
    image: string;
  }[];
}

export const tours: Tour[] = [
  {
    id: 1,
    title: 'Airport Transfer (BIA to Galle)',
    location: 'BIA - Galle',
    duration: '2-3 hours',
    distance: '~150 km',
    price: '28,000',
    description: 'Direct, comfortable transfer from Bandaranaike International Airport to Galle/Unawatuna via Highway.',
    image: '/assets/contact-hero.png',
    longDescription: 'Start your vacation right with our express airport transfer service from Bandaranaike International Airport (CMB) directly to Galle, Fort, or Unawatuna via the Southern Expressway. Our drivers will meet you at the arrivals hall.',
    highlights: ['Meet & Greet Service', 'Air-conditioned Vehicle', 'Professional Driver', 'Highway Charges Included'],
    includes: ['Private Car/Van', 'Fuel & Driver', 'Highway Tolls', 'Parking Charges'],
    gallery: ['/assets/contact-hero.png', '/assets/kia.png', '/assets/prius.png']
  },
  {
    id: 13,
    title: 'Yala National Park',
    location: 'Deep South',
    duration: 'Full Day',
    distance: '~290 km',
    price: '38,000',
    description: 'The best place to spot leopards, elephants, and bears in their natural habitat.',
    image: '/assets/Yala.jpg',
    imagePosition: 'center 25%',
    longDescription: 'Embark on a thrilling safari adventure in Yala National Park, possessing the highest leopard density in the world. Witness majesty in the wild as you traverse through thorny scrub forests, grasslands, and lagoons.',
    highlights: ['Leopard Safari', 'Elephant Sightings', 'Bird Watching', 'Scenic Coastline'],
    includes: ['Safari Jeep', 'Park Entrance Fees', 'Binoculars', 'Experienced Tracker'],
    gallery: ['/assets/Yala.jpg', '/assets/yala-1.jpg', '/assets/yala-2.jpg', '/assets/yala-3.jpg'],
    nearby: [
      { title: 'Kataragama Temple', image: '/assets/kataragama.JPG' },
      { title: 'Bundala National Park', image: '/assets/bundala.png' }
    ]
  },
  {
    id: 6,
    title: 'Ella Transport',
    location: 'Hill Country',
    duration: 'Full Day',
    distance: '~400 km',
    price: '48,000',
    description: 'Experience the stunning Nine Arch Bridge, tea plantations, and breathtaking mountain scenery.',
    image: '/assets/ella.jpg',
    longDescription: 'Discover the charm of Ella, a small village in the highlands of Sri Lanka filled with tea estates, mountains, and waterfalls. Walk along the rails on the Nine Arch Bridge and hike up Little Adams Peak for sunset.',
    highlights: ['Nine Arch Bridge', 'Little Adams Peak', 'Ravana Falls', 'Tea Factory Visit'],
    includes: ['Private Transport', 'Driver/Guide', 'Tea Factory Tour', 'Water Bottles'],
    gallery: ['/assets/ella.jpg', '/assets/ella-1.jpg', '/assets/Ella-2.jpg', '/assets/ella-3.jpg'],
    nearby: [
      { title: 'Nuwara Eliya', image: '/assets/nuwara-eliya.jpeg' },
      { title: 'Horton Plains', image: '/assets/Horton-Plains.jpg' }
    ]
  },
  {
    id: 2,
    title: 'Colombo City Transport',
    location: 'Colombo',
    duration: 'Half Day',
    distance: '~50 km',
    price: '6,000',
    description: 'Explore the vibrant capital city - temples, markets, colonial architecture, and modern attractions.',
    image: '/assets/lotus-tower.jpg',
    longDescription: 'Immerse yourself in the bustling energy of Colombo. From the historic Fort area to the stylish Independence Square, experience the blend of colonial charm and modern development.',
    highlights: ['Lotus Tower', 'Gangaramaya Temple', 'Independence Square', 'Pettah Market', 'Red Mosque'],
    includes: ['City Transport', 'English Speaking Guide', 'Entrance Fees to Gangaramaya', 'Refreshments'],
    gallery: ['/assets/lotus-tower.jpg', '/assets/colombo-1.jpg', '/assets/colombo-2.jpg', '/assets/colombo-3.jpg'],
    nearby: [
      { title: 'Mount Lavinia Beach', image: '/assets/mount lavinia.jpg' },
      { title: 'Kelaniya Temple', image: '/assets/kelaniya.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Kandy Transport',
    location: 'Kandy',
    duration: 'Full Day',
    distance: '~230 km',
    price: '27,600',
    description: 'Visit the sacred Temple of the Tooth, Royal Botanical Gardens, and enjoy scenic mountain views.',
    image: '/assets/kandy.jpg',
    longDescription: 'Journey to the hill capital of Kandy, the last kingdom of Sri Lanka. Visit the sacred Temple of the Tooth Relic, stroll through the Royal Botanical Gardens in Peradeniya, and witness a traditional cultural dance performance.',
    highlights: ['Temple of the Tooth', 'Botanical Gardens', 'Kandy Lake', 'Cultural Show'],
    includes: ['Private Vehicle', 'Temple Entrance', 'Garden Entrance', 'Lunch Stop'],
    gallery: ['/assets/kandy.jpg', '/assets/kandy-1.jpg', '/assets/kandy-2.jpg', '/assets/kandy-3.jpg'],
    nearby: [
      { title: 'Pinnawala Elephant Orphanage', image: '/assets/pinnawala.JPG' },
      { title: 'Sigiriya', image: '/assets/sigiriya-1.jpg' }
    ]
  },
  {
    id: 4,
    title: 'Galle Transport',
    location: 'Galle',
    duration: 'Full Day',
    distance: '~260 km',
    price: '31,200',
    description: 'Discover the UNESCO World Heritage Galle Fort, lighthouse, and beautiful southern beaches.',
    image: '/assets/galle.jpeg',
    longDescription: 'Walk through history in the Dutch Fort of Galle, a UNESCO World Heritage site. Explore cobbled streets lined with colonial buildings, visit the iconic lighthouse, and relax on the southern coast beaches.',
    highlights: ['Galle Fort', 'Dutch Church', 'Galle Lighthouse', 'Maritime Museum'],
    includes: ['Transport', 'Guide', 'Fort Walk', 'Sunset View'],
    gallery: ['/assets/galle.jpeg', '/assets/galle-1.jpg', '/assets/galle-2.jpg', '/assets/galle-3.jpeg'],
    nearby: [
      { title: 'Unawatuna', image: '/assets/Unawatuna.jpeg' },
      { title: 'Hikkaduwa', image: '/assets/hikkaduwa.jpeg' }
    ]
  },
  {
    id: 14,
    title: 'Sigiriya Transport',
    location: 'Cultural Triangle',
    duration: 'Full Day',
    distance: '~175 km',
    price: '28,000',
    description: 'Climb the 8th Wonder of the World, the Lion Rock Fortress, and explore ancient water gardens.',
    image: '/assets/sigiriya-2.jpg',
    longDescription: 'Experience the majesty of Sigiriya, the ancient rock fortress built by King Kashyapa. Climb to the summit for panoramic views, see the world-famous frescoes, and wander through the beautifully landscaped water gardens.',
    highlights: ['Sigiriya Lion Rock', 'Frescoes', 'Mirror Wall', 'Water Gardens', 'Pidurangala Rock'],
    includes: ['Transport', 'Entrance Ticket Assistance', 'Guide for climbing', 'Water'],
    gallery: ['/assets/sigiriya-2.jpg', '/assets/sigiriya-1.jpg', '/assets/sigiriya-3.png', '/assets/Anuradhapura.jpg'],
    nearby: [
      { title: 'Dambulla Cave Temple', image: '/assets/dambulla-1.jpg' },
      { title: 'Polonnaruwa', image: '/assets/polonnaruwa.jpg' }
    ]
  },
  {
    id: 15,
    title: 'Dambulla Transport',
    location: 'Cultural Triangle',
    duration: 'Half Day',
    distance: '~160 km',
    price: '25,000',
    description: 'Explore the largest and best-preserved cave temple complex in Sri Lanka, a UNESCO World Heritage site.',
    image: '/assets/dambulla.jpg',
    longDescription: 'Visit the Golden Temple of Dambulla, a sacred pilgrimage site for 22 centuries. This cave monastery, with its five sanctuaries, is the largest, best-preserved cave-temple complex in Sri Lanka, containing Buddhist mural paintings and 157 statues.',
    highlights: ['Dambulla Cave Temple', 'Golden Buddha Statue', 'Ancient Murals', 'Panoramic Views'],
    includes: ['Transport', 'Temple Entrance Support', 'Cultural Guide'],
    gallery: ['/assets/dambulla.jpg', '/assets/dambulla-1.jpg', '/assets/dambulla-2.jpg', '/assets/dambulla-3.jpg'],
    nearby: [
      { title: 'Sigiriya Lion Rock', image: '/assets/sigiriya-1.jpg' },
      { title: 'Kandy', image: '/assets/kandy.jpg' }
    ]
  },
  {
    id: 7,
    title: 'Hikkaduwa Transport',
    location: 'South Coast',
    duration: 'Full Day',
    distance: '~120 km',
    price: '18,500',
    description: 'Famous for coral reefs, snorkeling with sea turtles, and vibrant beach nightlife.',
    image: '/assets/hikkaduwa.jpeg',
    longDescription: 'Dive into the clear waters of Hikkaduwa. Famous for its coral sanctuary and sea turtles that swim right up to the shore. It is also a hotspot for surfing and beach parties.',
    highlights: ['Coral Sanctuary', 'Snorkeling', 'Turtle Hatchery', 'Beach Bars'],
    includes: ['Transport', 'Snorkeling Gear rental assistance', 'Guide'],
    gallery: ['/assets/hikkaduwa.jpeg', '/assets/hikkaduwa-1.jpg', '/assets/hikkaduwa-2.jpg', '/assets/hikkaduwa-3.jpg'],
    nearby: [
      { title: 'Galle Fort', image: '/assets/galle.jpeg' },
      { title: 'Bentota', image: '/assets/bentota.jpeg' }
    ]
  },
  {
    id: 8,
    title: 'Unawatuna Transport',
    location: 'South Coast',
    duration: 'Full Day',
    distance: '~145 km',
    price: '22,000',
    description: 'Relax on the horseshoe-shaped beach and visit the Japanese Peace Pagoda.',
    image: '/assets/Unawatuna.jpeg',
    longDescription: 'Unawatuna is known for its beautiful semicircular beach and calm waters safe for swimming. Visit the Japanese Peace Pagoda on the hillside for a stunning ocean view.',
    highlights: ['Unawatuna Beach', 'Jungle Beach', 'Peace Pagoda', 'Roomassala Sanctuary'],
    includes: ['Transport', 'Beach Time', 'Pagoda Visit'],
    gallery: ['/assets/Unawatuna.jpeg', '/assets/unawatuna-1.jpg', '/assets/unawatuna-2.jpg', '/assets/unawatuna-3.jpg'],
    nearby: [
      { title: 'Galle', image: '/assets/galle.jpeg' },
      { title: 'Koggala', image: '/assets/ahangama.jpg' }
    ]
  },
  {
    id: 9,
    title: 'Ahangama Transport',
    location: 'South Coast',
    duration: 'Full Day',
    distance: '~160 km',
    price: '24,000',
    description: 'Witness the iconic stilt fishermen and enjoy some of the best surf breaks in the island.',
    image: '/assets/ahangama.jpg',
    longDescription: 'Ahangama is a laid-back coastal town famous for its stilt fishermen, a unique traditional fishing method. It is also emerging as a top surfing destination with consistent waves.',
    highlights: ['Stilt Fishermen', 'Midigama Surf', 'Coconut Plantations', 'Quiet Beaches'],
    includes: ['Transport', 'Photo Ops with Fishermen', 'Surf Board Rental Assistance'],
    gallery: ['/assets/ahangama.jpg', '/assets/ahangama-1.jpg', '/assets/ahangama-2.jpg', '/assets/ahangama-3.jpg'],
    nearby: [
      { title: 'Mirissa', image: '/assets/Mirissa.jpg' },
      { title: 'Weligama', image: '/assets/weligama.jpg' }
    ]
  },
  {
    id: 10,
    title: 'Mirissa Transport',
    location: 'South Coast',
    duration: 'Full Day',
    distance: '~170 km',
    price: '26,500',
    description: 'The best spot for whale watching, Secret Beach, and the famous Coconut Tree Hill.',
    image: '/assets/Mirissa.jpg',
    longDescription: 'Mirissa is a tropical paradise known for its whale watching tours where you can spot Blue Whales. Visit the Instagram-famous Coconut Tree Hill and relax at the secluded Secret Beach.',
    highlights: ['Whale Watching', 'Coconut Tree Hill', 'Parrot Rock', 'Secret Beach'],
    includes: ['Transport', 'Whale Watching Booking Assistance', 'Sunset View'],
    gallery: ['/assets/Mirissa.jpg', '/assets/mirissa-1.jpg', '/assets/Unawatuna.jpeg', '/assets/ahangama.jpg'],
    nearby: [
      { title: 'Matara', image: '/assets/sri-lanka-icon.png' },
      { title: 'Weligama', image: '/assets/weligama.jpg' }
    ]
  },
  {
    id: 11,
    title: 'Arugam Bay Transport',
    location: 'East Coast',
    duration: 'Extended Day',
    distance: '~350 km',
    price: '45,000',
    description: 'A world-class surfing destination with chilled vibes and nearby wildlife lagoons.',
    image: '/assets/Arugam-bay.jpg',
    longDescription: 'Ride the waves at Arugam Bay, one of the top surf spots in the world. Enjoy the relaxed surfer vibe, beach cafes, and explore nearby lagoons filled with exotic birdlife and elephants.',
    highlights: ['Main Point Surf', 'Elephant Rock', 'Pottuvil Lagoon', 'Muhudu Maha Viharaya'],
    includes: ['Transport', 'Lagoon Safari Arrangements', 'Beach Drop'],
    gallery: ['/assets/Arugam-bay.jpg', '/assets/arugambay-1.jpg', '/assets/arugambay-2.jpg', '/assets/arugambay-3.jpg'],
    nearby: [
      { title: 'Kumana National Park', image: '/assets/yala-1.jpg' },
      { title: 'Pasikudah', image: '/assets/sri-lanka-icon.png' }
    ]
  },
  {
    id: 12,
    title: 'Nuwara Eliya Transport',
    location: 'Hill Country',
    duration: 'Full Day',
    distance: '~180 km',
    price: '28,000',
    description: 'Experience "Little England" with its cool climate, colonial bungalows, and lush tea estates.',
    image: '/assets/nuwara-eliya.jpeg',
    longDescription: 'Escape the heat in Nuwara Eliya, often called Little England. Visit a tea factory to see how Ceylon tea is made, stroll around Gregory Lake, and enjoy the cool, misty mountain air.',
    highlights: ['Tea Factory & Plantation', 'Gregory Lake', 'Victoria Park', 'Post Office'],
    includes: ['Transport', 'Tea Factory Guided Tour', 'Park Entrance Fees'],
    gallery: ['/assets/nuwara-eliya.jpeg', '/assets/Nuwara-Eliya-1.jpg', '/assets/ella.jpg', '/assets/kandy.jpg'],
    nearby: [
      { title: 'Ella', image: '/assets/ella.jpg' },
      { title: 'Horton Plains', image: '/assets/Horton-Plains.jpg' }
    ]
  },
];
