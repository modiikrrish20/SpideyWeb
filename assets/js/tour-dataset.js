/**
 * ============================================================================
 * SpidyWeb Tours & Travels - Master Destination Stacks Dataset (tour-dataset.js)
 * ----------------------------------------------------------------------------
 * 12 Comprehensive, Self-Contained Tour Management Stacks:
 * 1. Kerala (Munnar, Thekkady & Alleppey)
 * 2. Ladakh (Leh, Nubra Valley & Pangong Tso)
 * 3. Goa (Calangute, Fontainhas & Palolem)
 * 4. Kashmir (Srinagar, Gulmarg & Pahalgam)
 * 5. Rajasthan (Jaipur, Jodhpur, Udaipur & Thar Desert)
 * 6. Varanasi & Sarnath (Spiritual Heart of India)
 * 7. Himachal Pradesh (Manali, Solang Valley & Shimla)
 * 8. Andaman Islands (Port Blair, Havelock & Radhanagar Beach)
 * 9. Uttarakhand (Rishikesh, Haridwar & Mussoorie)
 * 10. Darjeeling & Sikkim (Gangtok & Kanchenjunga Vistas)
 * 11. Agra & Golden Triangle (Taj Mahal & Mughal Heritage)
 * 12. Swiss Alps (Interlaken, Zermatt & Matterhorn Glacier)
 *
 * Each stack is 100% unique: distinct photos, hotels, attractions, itineraries,
 * activities, regional cuisine, packing guides, and INR (₹) price tiers.
 * ============================================================================
 */

const TOUR_DESTINATIONS_DATA = {
  1: {
    id: 1,
    slug: "kerala-backwaters-munnar-tea-hills",
    title: "Kerala Backwaters Luxury Houseboat & Munnar Tea Hills",
    subtitle: "God's Own Country - Private Houseboats, Spice Plantations & Rolling Green Hills",
    placeName: "Munnar, Thekkady & Alleppey",
    state: "Kerala",
    country: "India",
    region: "South India",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Best Seller India",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "12 Travelers",
    rating: 4.96,
    reviewCount: 68,
    seasons: ['monsoon', 'autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 10.0889,
      lng: 77.0595,
      altitude: "1,600 m (Munnar) / Sea Level (Alleppey)",
      idealDuration: "5 to 7 Days",
      bestTimeToVisit: "September to March",
      climate: "Misty & Pleasant (15°C - 26°C)",
      language: "Malayalam, English, Hindi",
      airport: "Cochin International Airport (COK) - 110 km",
      railway: "Ernakulam Junction (ERS) - 130 km"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 24999,
      originalPrice: 29999,
      discountPercent: 17,
      standardPrice: 19999,
      deluxePrice: 24999,
      luxuryPrice: 34999,
      emiStartsAt: "₹2,083/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
          caption: "Tranquil Alleppey Backwaters with Private Traditional Houseboat",
          tag: "Backwaters"
        },
        {
          url: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
          caption: "Emerald Munnar Tea Plantations in Morning Mist",
          tag: "Munnar Hills"
        },
        {
          url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80",
          caption: "Sunset over Vembanad Lake Waterways",
          tag: "Nature"
        },
        {
          url: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=1000&q=80",
          caption: "Historic Fort Kochi Chinese Fishing Nets",
          tag: "Heritage"
        },
        {
          url: "https://images.unsplash.com/photo-1616484178591-68c38298716b?auto=format&fit=crop&w=1000&q=80",
          caption: "Aromatic Spice Garden Trails in Thekkady",
          tag: "Spice Hills"
        }
      ]
    },

    overview: "Discover God's Own Country in complete luxury. This 6-day immersive escape takes you across the rolling green tea plantations of Munnar, aromatic cardamom spice hills of Thekkady, and a private luxury air-conditioned houseboat cruise through the tranquil backwaters of Alleppey. Savor authentic South Indian meals cooked fresh on board by your personal chef while gliding past coconut groves and village canals.",

    highlights: [
      "Overnight stay on a Private AC Deluxe Houseboat with on-board private chef in Alleppey.",
      "Munnar Tata Tea Museum visit with fresh single-origin tea leaf tasting.",
      "Wildlife boat safari on Periyar Lake in Thekkady to spot wild elephants and exotic birds.",
      "Live evening Kathakali classical dance and Kalaripayattu martial arts demonstration.",
      "Chauffeured private AC luxury sedan throughout the journey with airport transfers."
    ],

    attractions: [
      {
        name: "Eravikulam National Park",
        type: "Wildlife Sanctuary & Nilgiri Tahr Habitat",
        timings: "7:30 AM - 4:00 PM",
        entryFee: "₹200 per adult (Indian Nationals)",
        distance: "15 km from Munnar Town",
        duration: "3 - 4 Hours",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
        description: "Home to the endangered Nilgiri Tahr and the highest peak in South India, Anamudi (2,695m). Panoramic views of undulating green hills.",
        tip: "Book forest safari buses early morning to avoid peak afternoon queues."
      },
      {
        name: "Alleppey Backwaters & Punnamada Lake",
        type: "Interconnected Canals & Houseboat Hub",
        timings: "Open 24 Hours (Houseboat check-in: 12:00 PM)",
        entryFee: "Included in Tour Package",
        distance: "Central Alleppey Jetty",
        duration: "Full Day & Overnight",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
        description: "A labyrinth of canals, lagoons, and lakes where traditional Kettuvallams glide amidst lush paddy fields and swaying palms.",
        tip: "Enjoy sunset from the upper sundeck while sipping fresh tender coconut water."
      },
      {
        name: "Periyar National Park & Lake",
        type: "Tiger Reserve & Elephant Sanctuary",
        timings: "6:00 AM - 6:00 PM",
        entryFee: "₹150 Boat Safari Ticket",
        distance: "Thekkady, Idukki District",
        duration: "2 - 3 Hours",
        image: "https://images.unsplash.com/photo-1616484178591-68c38298716b?auto=format&fit=crop&w=600&q=80",
        description: "A tranquil lake boat safari in the heart of dense Western Ghats forests where wild elephants, bisons, and sambar deer gather at the water's edge.",
        tip: "Carry binoculars for close-up wildlife and kingfisher sightings."
      },
      {
        name: "Mattupetty Dam & Echo Point",
        type: "Mountain Reservoir & Water Sports",
        timings: "9:30 AM - 5:00 PM",
        entryFee: "₹50 per person / ₹500 Speedboat",
        distance: "13 km from Munnar",
        duration: "2 Hours",
        image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=600&q=80",
        description: "A masonry dam surrounded by tea estates and Shola forests, famous for speedboat rides and natural acoustic echoes.",
        tip: "Try the freshly roasted spiced sweet corn sold by local vendors near the lake."
      }
    ],

    hotels: [
      {
        name: "Tea Valley Luxury Mountain Resort",
        tier: "Deluxe 4-Star",
        starRating: 4.8,
        location: "Pothamedu Viewpoint, Munnar",
        pricePerNight: "₹6,500 / night (Included in Package)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Private Tea Garden Balcony", "Infinity Pool", "Ayurvedic Wellness Spa", "Multi-Cuisine Restaurant", "Free High-Speed Wi-Fi", "Bonfire Nights"],
        roomTypes: ["Valley View Deluxe", "Tea Garden Suite"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Private cottage balconies overlooking 200 acres of tea hills."
      },
      {
        name: "Spice Village Eco-Luxury Resort",
        tier: "Luxury 5-Star",
        starRating: 4.9,
        location: "Kumily Road, Thekkady",
        pricePerNight: "₹9,200 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Spice Plantation Cottages", "Organic Farm-to-Table Dining", "Yoga & Meditation Pavilion", "Doctor-Guided Ayurveda", "Swimming Pool"],
        roomTypes: ["Spice Garden Villa", "Heritage Plantation Cottage"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Eco-thatched roofs, native spice trees, and zero single-use plastic."
      },
      {
        name: "Grand Alleppey Premium AC Houseboat",
        tier: "Private Floating Villa",
        starRating: 4.95,
        location: "Punnamada Jetty, Alleppey",
        pricePerNight: "₹14,000 / night (Included for Night 4)",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
        amenities: ["Private AC Master Bedroom", "Upper Sun Deck Lounge", "Dedicated Private Chef & Captain", "Full-Board Kerala Cuisine", "Ensuite Glass Bathrooms"],
        roomTypes: ["1-BHK Luxury Royal Houseboat", "2-BHK Family Houseboat"],
        checkIn: "12:30 PM",
        checkOut: "9:30 AM",
        highlight: "Exclusive cruise through narrow rural canals with personalized evening fish fry."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival at Kochi Airport & Drive to Munnar Tea Country",
        timeSlots: {
          morning: "Private airport pickup at Cochin International Airport (COK). Scenic mountain drive via Cheeyappara and Valara waterfalls.",
          afternoon: "Check-in at Tea Valley Luxury Resort. Settle in and enjoy welcome cardamom tea with plantation views.",
          evening: "Sunset walk through Pothamedu viewpoint followed by traditional Kerala dinner at the resort."
        },
        desc: "Meet our representative at Cochin Airport. Ascend the misty Western Ghats with stops at gushing roadside waterfalls.",
        meals: "Welcome Dinner Included",
        stay: "Tea Valley Luxury 4-Star Resort, Munnar",
        transport: "Private AC Sedan / SUV",
        dayHighlights: ["Cheeyappara & Valara Waterfalls", "Munnar Mountain Drive", "Resort Welcome Dinner"]
      },
      {
        day: 2,
        title: "Eravikulam National Park Safari & Tata Tea Museum",
        timeSlots: {
          morning: "Early breakfast and guided safari at Eravikulam National Park to spot Nilgiri Tahr mountain goats.",
          afternoon: "Tour the historic Tata Tea Museum with tea processing machinery and fresh CTC & orthodox tasting.",
          evening: "Speedboating at Mattupetty Dam and shouting your name at Echo Point."
        },
        desc: "Explore the highest peaks of South India, witness tea leaves being plucked, and enjoy mountain reservoir breeze.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Tea Valley Luxury 4-Star Resort, Munnar",
        transport: "Private AC Sedan / SUV",
        dayHighlights: ["Nilgiri Tahr Safari", "Tea Processing Demo", "Mattupetty Reservoir Speedboat"]
      },
      {
        day: 3,
        title: "Scenic Drive to Thekkady Spice Hills & Periyar Lake",
        timeSlots: {
          morning: "Post-breakfast drive through cardamom, pepper, and cinnamon plantations towards Thekkady (110 km).",
          afternoon: "Check-in to Thekkady Wild Corridor. Guided spice plantation walking tour with an ethnobotanist.",
          evening: "VIP reserved seats for live Kathakali dance and Kalaripayattu ancient martial arts show."
        },
        desc: "Transition from cool tea mountains to aromatic spice valleys and experience Kerala's world-famous cultural arts.",
        meals: "Buffet Breakfast",
        stay: "Thekkady Wild Corridor Eco Lodge",
        transport: "Private AC Sedan / SUV",
        dayHighlights: ["Spice Farm Tour", "Periyar Boat Safari", "Live Kathakali Cultural Show"]
      },
      {
        day: 4,
        title: "Alleppey Backwaters - Private AC Houseboat Boarding",
        timeSlots: {
          morning: "Drive down to Alleppey jetty (135 km) past emerald rubber estates and tropical lagoons.",
          afternoon: "Board your private luxury houseboat with fresh coconut welcome drinks. Cruise begins as chef serves authentic Kerala Sadya on banana leaf.",
          evening: "Anchor near a serene village canal. Watch sunset over the backwaters and enjoy fresh Karimeen Pollichathu fish fry."
        },
        desc: "The pinnacle of Kerala travel: a private floating sanctuary drifting through tranquil palm-fringed waterways.",
        meals: "Breakfast, Traditional Lunch, Evening Snacks & Dinner",
        stay: "Grand Alleppey Luxury AC Houseboat",
        transport: "Private Houseboat + AC Cab",
        dayHighlights: ["Banana Leaf Sadya Lunch", "Sunset Canal Cruise", "Onboard Chef Dinner"]
      },
      {
        day: 5,
        title: "Marari Beach Relaxation & Fort Kochi Heritage Walk",
        timeSlots: {
          morning: "Sunrise breakfast on the houseboat deck. Disembark at 9:30 AM and drive to Fort Kochi heritage precinct.",
          afternoon: "Stroll past colonial Portuguese bungalows, St. Francis Church, Santa Cruz Basilica, and Jew Town antique markets.",
          evening: "Watch fishermen operate the giant wooden Chinese Fishing Nets against the Arabian Sea sunset."
        },
        desc: "Experience 500 years of spice trade history, Jewish heritage, and vibrant colonial seaside culture.",
        meals: "Buffet Breakfast",
        stay: "Fort Kochi Heritage Boutique Hotel",
        transport: "Private AC Sedan / SUV",
        dayHighlights: ["Chinese Fishing Nets", "Jew Town & Synagogue", "Seaside Sunset Walk"]
      },
      {
        day: 6,
        title: "Souvenir Shopping & Kochi Airport Departure",
        timeSlots: {
          morning: "Leisurely breakfast, purchase authentic Kerala spices, banana chips, and handloom sarees in Kochi.",
          afternoon: "Private chauffeured transfer to Cochin International Airport (COK) for your flight home.",
          evening: "Arrival back home with unforgettable memories of God's Own Country."
        },
        desc: "Conclude your holiday with seamless door-to-door airport transfer assistance.",
        meals: "Buffet Breakfast",
        stay: "Tour Concludes",
        transport: "Private Airport Drop-off",
        dayHighlights: ["Spice & Handloom Shopping", "Airport Assistance"]
      }
    ],

    activities: [
      {
        name: "Private Alleppey Houseboat Cruise",
        type: "Waterways & Luxury Stay",
        difficulty: "Relaxing / Easy",
        duration: "21 Hours (Overnight)",
        included: true,
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80",
        description: "Sail through tranquil backwaters with a private captain, navigator, and chef catering solely to your group."
      },
      {
        name: "Munnar Tea Trail & Tasting",
        type: "Cultural & Plantation Walk",
        difficulty: "Easy Walk",
        duration: "2.5 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
        description: "Walk alongside expert tea pickers and taste single-origin orthodox and white teas at the Tata Tea Museum."
      },
      {
        name: "Periyar Wildlife Lake Safari",
        type: "Nature & Wildlife",
        difficulty: "Easy",
        duration: "2 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1616484178591-68c38298716b?auto=format&fit=crop&w=600&q=80",
        description: "Boat ride across the submerged tree trunks of Periyar lake to spot wild Asiatic elephants and hornbills."
      },
      {
        name: "Ayurvedic Abhyanga Herbal Massage",
        type: "Wellness & Spa",
        difficulty: "Rejuvenating",
        duration: "60 Minutes",
        included: false,
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80",
        description: "Traditional full-body warm herbal oil massage by certified Kerala Vaidyas to detoxify body and mind."
      }
    ],

    cuisine: [
      {
        name: "Authentic Kerala Sadya on Banana Leaf",
        type: "Vegetarian Feast (24+ items)",
        description: "Red Matta rice served with Sambar, Avial, Thoran, Olan, Pachadi, Crispy Pappadam, and Payasam dessert.",
        topSpots: "Served on-board private houseboat & local Kochi heritage restaurants."
      },
      {
        name: "Karimeen Pollichathu (Pearl Spot Fish)",
        type: "Backwater Seafood Specialty",
        description: "Fresh pearl spot fish marinated in shallots, ginger, green chilies, and coconut oil, slow-roasted wrapped in banana leaf.",
        topSpots: "Alleppey Houseboat Kitchen & Fort Kochi Waterfront."
      },
      {
        name: "Appam with Vegetable / Chicken Stew",
        type: "Traditional Breakfast",
        description: "Soft, fluffy fermented rice pancakes with crispy lacy borders, served with rich coconut milk stew infused with cinnamon and cloves.",
        topSpots: "Munnar Resort Buffet & Fort Kochi Cafes."
      },
      {
        name: "Malabar Parotta with Beef / Paneer Roast",
        type: "Evening Street & Bistro Classic",
        description: "Multi-layered flaky spiral flatbread served with spicy slow-cooked masala gravy.",
        topSpots: "Kochi Marine Drive Eateries."
      }
    ],

    inclusions: [
      "5 Nights Luxury Accommodation (4-Star Resorts + 1 Night Private AC Deluxe Houseboat)",
      "Daily Gourmet Buffet Breakfasts at all resorts",
      "All meals (Lunch, Evening Tea & Snacks, Dinner, Breakfast) cooked fresh on the Houseboat",
      "Private AC Chauffeur-driven Sedan/SUV for all airport transfers, inter-city drives & sightseeing",
      "Periyar Lake boat safari tickets & Eravikulam National Park passes",
      "Tata Tea Museum entry ticket with tea tasting session",
      "Reserved front-row passes for live Kathakali & Kalaripayattu martial art shows",
      "All interstate permits, toll taxes, parking fees, and driver allowances included",
      "24/7 dedicated SpidyWeb local trip coordinator on WhatsApp and phone"
    ],

    exclusions: [
      "Domestic or International airfares to/from Kochi (COK)",
      "Optional Ayurvedic body massages and spa treatments",
      "Monument camera and video recording fees",
      "Personal expenses such as laundry, alcoholic beverages, and tips"
    ],

    transportation: {
      vehicleType: "Private AC Toyota Etios / Dzire (2-3 Guests) or Toyota Innova Crysta (4-6 Guests)",
      airportTransfers: "Included (Kochi International Airport pick-up and drop-off)",
      chaufferAssistance: "English & Hindi speaking verified professional chauffeur",
      luggageAllowance: "2 Large Suitcases + 2 Hand Bags per vehicle",
      fuelAndTolls: "100% Inclusive of all toll plazas, parking and interstate permits"
    },

    travelEssentials: {
      packingList: [
        "Light cotton clothes for Alleppey and Kochi (28°C - 32°C)",
        "Light woolens / cardigans or fleece jacket for Munnar evenings (14°C - 18°C)",
        "Comfortable walking shoes with good grip for tea plantation trails",
        "Sun hat, UV sunglasses, and reef-safe sunscreen (SPF 40+)",
        "Mosquito repellent lotion for backwater evening walks"
      ],
      healthAndSafety: [
        "Pack personal routine prescription medications for 7 days",
        "Carry anti-nausea tablets for winding Munnar mountain hairpin roads (40+ bends)",
        "Drink bottled mineral water provided daily in your tour vehicle"
      ],
      permitsAndDocuments: [
        "Valid Government Photo ID (Aadhar Card / Voter ID / Passport) for hotel & houseboat check-in",
        "No special permits required for Indian or foreign nationals visiting Kerala"
      ],
      connectivityAndAtm: [
        "Excellent 4G/5G mobile network connectivity (Airtel & Jio) across all destinations",
        "ATMs widely available in Kochi, Munnar town, Thekkady, and Alleppey"
      ]
    },

    reviews: [
      {
        author: "Krrish Modi",
        location: "Ahmedabad, Gujarat",
        date: "August 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "The Alleppey private houseboat was the highlight of our family holiday! Fresh Karimeen fish fry made on board, waking up to peaceful canals, and Munnar's endless tea gardens. Everything handled with 100% precision by SpidyWeb."
      },
      {
        author: "Hiten Patel",
        location: "Surat, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        comment: "Excellent vehicle condition, extremely polite driver, and top-class 4-star mountain view rooms in Munnar. No hidden costs whatsoever. Highly recommended for couples and families!"
      }
    ],

    tourEscort: {
      name: "Suresh Menon",
      role: "Senior Tour Director (Kerala Region)",
      experience: "14 Years Experience",
      languages: "Malayalam, English, Hindi, Tamil",
      badge: "Kerala Tourism Certified Master Guide"
    }
  },

  2: {
    id: 2,
    slug: "ladakh-himalayan-passes-pangong-lake",
    title: "Ladakh Himalayan Passes, Pangong Lake & Nubra Dunes",
    subtitle: "Land of High Passes - Khardung La (17,982 ft), Double-Humped Camels & Turquoise Pangong Tso",
    placeName: "Leh, Nubra Valley & Pangong Lake",
    state: "Ladakh",
    country: "India",
    region: "North India (Trans-Himalayas)",
    category: "Himalayan & Trekking",
    categorySlug: "himalayan-trekking",
    badge: "Top Adventure India",
    durationDays: 7,
    durationNights: 6,
    durationText: "7 Days / 6 Nights",
    maxGuests: "10 Travelers",
    rating: 4.98,
    reviewCount: 74,
    seasons: ['spring-summer', 'monsoon'],

    geo: {
      lat: 34.1526,
      lng: 77.5771,
      altitude: "3,500 m (Leh) to 5,359 m (Khardung La)",
      idealDuration: "7 to 9 Days",
      bestTimeToVisit: "May to October",
      climate: "Crisp, Sunny & Cool (-2°C to 20°C)",
      language: "Ladakhi, Hindi, English",
      airport: "Kushok Bakula Rimpochee Airport (IXL), Leh",
      railway: "Jammu Tawi (700 km) / Road via Manali"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 38500,
      originalPrice: 44000,
      discountPercent: 12,
      standardPrice: 31999,
      deluxePrice: 38500,
      luxuryPrice: 52000,
      emiStartsAt: "₹3,208/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80",
          caption: "Turquoise Pangong Tso Lake bordered by barren Himalayan peaks",
          tag: "Pangong Lake"
        },
        {
          url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80",
          caption: "Ancient Thiksey Buddhist Monastery perched on a rocky hill",
          tag: "Monasteries"
        },
        {
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1000&q=80",
          caption: "Double-humped Bactrian Camels in Hunder Sand Dunes, Nubra",
          tag: "Nubra Valley"
        },
        {
          url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80",
          caption: "Khardung La Pass high altitude prayer flags at 17,982 ft",
          tag: "Mountain Passes"
        }
      ]
    },

    overview: "Embark on the ultimate high-altitude Himalayan odyssey to the roof of the world. Cross Khardung La — one of the world's highest motorable passes at 17,982 ft — descend into the cold desert sand dunes of Nubra Valley, and spend a starlit night in luxury Swiss tents beside the mesmerizing, color-changing waters of Pangong Tso. Complete with oxygen cylinder support and altitude acclimatization.",

    highlights: [
      "Drive across Khardung La Pass (17,982 ft) and Chang La Pass (17,688 ft).",
      "Overnight luxury glamping right on the shores of Pangong Tso with Milky Way stargazing.",
      "Double-humped Bactrian camel safari amidst cold desert sand dunes in Hunder.",
      "Visit iconic 600-year-old Thiksey Monastery, Hemis, and the mysterious Magnetic Hill.",
      "Dedicated 4x4 SUV with onboard medical oxygen cylinder and acclimatized mountain driver."
    ],

    attractions: [
      {
        name: "Pangong Tso (High Altitude Lake)",
        type: "Endorheic Trans-Himalayan Salt Lake (14,270 ft)",
        timings: "Open 24 Hours (Sunrise is spectacular)",
        entryFee: "Inner Line Permit Included",
        distance: "160 km from Leh via Chang La",
        duration: "Overnight Stay",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
        description: "A 134-km long lake spanning India and Tibet that shifts color from deep turquoise to cobalt blue throughout the day.",
        tip: "Layer up warmly before step out at night to witness the unpolluted Milky Way galaxy."
      },
      {
        name: "Hunder Sand Dunes & Diskit Monastery",
        type: "Cold Desert Dunes & Giant Maitreya Buddha",
        timings: "6:00 AM - 6:30 PM",
        entryFee: "₹30 Monastery Pass / Camel ride ₹350",
        distance: "125 km from Leh via Khardung La",
        duration: "Full Day & Overnight",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
        description: "A surreal high-altitude desert nestled between snow peaks, famous for the 106-ft seated Maitreya Buddha and Bactrian camels.",
        tip: "Ride the camel at golden sunset hour for breathtaking desert-mountain photos."
      },
      {
        name: "Thiksey Monastery (Mini Potala Palace)",
        type: "12-Storey Gelug Buddhist Complex",
        timings: "6:00 AM - 6:00 PM (Morning prayers at 6:30 AM)",
        entryFee: "₹50 per person",
        distance: "19 km east of Leh",
        duration: "2 - 3 Hours",
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80",
        description: "Resembles Lhasa's Potala Palace with 10 temples, housing a magnificent 49-ft tall statue of Future Buddha (Maitreya).",
        tip: "Arrive at 6:30 AM to hear monks chanting with traditional Tibetan horns and cymbals."
      },
      {
        name: "Magnetic Hill & Indus-Zanskar Sangam",
        type: "Optical Gravity Phenomenon & River Confluence",
        timings: "Open 24 Hours",
        entryFee: "Free Entry",
        distance: "30 km west of Leh",
        duration: "2 Hours",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
        description: "Witness vehicles appearing to roll uphill in neutral gear, followed by the dramatic confluence of emerald Indus and muddy Zanskar rivers.",
        tip: "Stand at the viewpoint to clearly see the two contrasting river colors merging."
      }
    ],

    hotels: [
      {
        name: "The Grand Dragon Ladakh",
        tier: "Luxury 5-Star Heritage Hotel",
        starRating: 4.95,
        location: "Old Road, Sheynam, Leh",
        pricePerNight: "₹14,500 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Centrally Heated Rooms", "Oxygen-Enriched Suites", "Mountain-Facing Balconies", "Fine-Dining Tibetan Restaurant", "High-Speed Wi-Fi", "Doctor on Call"],
        roomTypes: ["Royal Heritage Suite", "Stok Kangri Mountain View Deluxe"],
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        highlight: "Ladakh's premier 5-star solar-powered luxury hotel with central heating."
      },
      {
        name: "Nubra Organic Retreat Swiss Camps",
        tier: "Luxury Desert Glamping",
        starRating: 4.8,
        location: "Hunder Village, Nubra Valley",
        pricePerNight: "₹7,200 / night (Included for Nights 3 & 4)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Ensuite Heated Washrooms", "Organic Apple & Apricot Orchards", "Campfire Nights", "Multi-Cuisine Buffet Dining", "24/7 Hot Running Water"],
        roomTypes: ["Deluxe Swiss Glamping Tent", "Royal Orchard Cottage"],
        checkIn: "2:00 PM",
        checkOut: "10:00 AM",
        highlight: "Wake up surrounded by apricot blossoms with stunning views of Karakoram range."
      },
      {
        name: "Pangong Star Glamping Luxury Camps",
        tier: "High-Altitude Lake View Camp",
        starRating: 4.85,
        location: "Spangmik Village, Pangong Lake",
        pricePerNight: "₹8,500 / night (Included for Night 5)",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
        amenities: ["Direct Lakefront View", "Heavy Insulated Thermal Tents", "Ensuite Private Bathrooms", "Dining Hall with Hot Buffet", "Emergency Oxygen"],
        roomTypes: ["Super Deluxe Lakefront Swiss Tent"],
        checkIn: "2:00 PM",
        checkOut: "9:00 AM",
        highlight: "Step outside your tent right onto the shoreline of Pangong Lake."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Fly into Leh (11,500 ft) & Mandatory Acclimatization",
        timeSlots: {
          morning: "Spectacular flight over snowcapped Himalayas into Kushok Bakula Rimpochee Airport (IXL). Private transfer to Leh hotel.",
          afternoon: "Mandatory rest for 4-5 hours to acclimatize to high altitude. Sip warm garlic water or butter tea.",
          evening: "Gentle evening stroll in Leh Main Bazaar and visit Leh Palace illuminated at dusk."
        },
        desc: "Essential first day dedicated to acclimatization with medical pulse oximeter checkups by our tour leader.",
        meals: "Welcome Dinner Included",
        stay: "Leh Himalayan Heritage Hotel (4-Star)",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Himalayan Aerial Flight", "Acclimatization Rest", "Leh Main Bazaar"]
      },
      {
        day: 2,
        title: "Sham Valley Tour: Magnetic Hill, Sangam & Hall of Fame",
        timeSlots: {
          morning: "Drive to Hall of Fame war memorial museum run by Indian Army. Continue to Magnetic Hill phenomenon.",
          afternoon: "Witness the confluence of Indus and Zanskar rivers. Visit Gurudwara Pathar Sahib for hot langar tea.",
          evening: "Sunset prayer flags view at Shanti Stupa overlooking the entire Leh valley and Stok Kangri peak."
        },
        desc: "A gentle touring day exploring the iconic sights along the Indus River highway.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Leh Himalayan Heritage Hotel (4-Star)",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Magnetic Hill Test", "Indus-Zanskar Sangam", "Shanti Stupa Sunset"]
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La Pass (17,982 ft)",
        timeSlots: {
          morning: "Ascend the legendary Khardung La Pass. Stop for photos at the highest motorable road signboard with prayer flags.",
          afternoon: "Descend into Nubra Valley. Check-in at Swiss glamping camp in Hunder amidst apricot trees.",
          evening: "Bactrian double-humped camel ride on the white sand dunes of Hunder with sunset mountain vistas."
        },
        desc: "One of the world's most thrilling mountain pass journeys crossing from the Indus to the Shyok Valley.",
        meals: "Buffet Breakfast & Hot Dinner",
        stay: "Nubra Organic Retreat Swiss Camps, Hunder",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Khardung La Summit (17,982 ft)", "Hunder White Sand Dunes", "Bactrian Camel Ride"]
      },
      {
        day: 4,
        title: "Diskit Monastery Giant Buddha & Turtuk Border Village",
        timeSlots: {
          morning: "Visit the 106-ft Maitreya Buddha statue and Diskit Monastery. Scenic drive along the Shyok river towards Turtuk.",
          afternoon: "Explore Turtuk — India's northernmost Balti village near the Line of Control, famous for organic apricots.",
          evening: "Return to Hunder for campfire and local Ladakhi folk dance performance."
        },
        desc: "Experience unique Baltistan culture, ancient wooden homes, and pristine border valley landscapes.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Nubra Organic Retreat Swiss Camps, Hunder",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Diskit Maitreya Buddha", "Turtuk Balti Village", "Campfire Folk Night"]
      },
      {
        day: 5,
        title: "Nubra to Pangong Tso Lake via Direct Shyok River Route",
        timeSlots: {
          morning: "Drive along the untamed Shyok river bed route directly towards Pangong Tso (6 hours).",
          afternoon: "First jaw-dropping glimpse of the turquoise Pangong Lake at 14,270 ft. Check in to lakeside luxury Swiss tents.",
          evening: "Sunset walk along the shore. Stargazing session under the crystal-clear Himalayan night sky."
        },
        desc: "Witness the color transitions of the world's highest saltwater lake as sunlight dances on the surface.",
        meals: "Buffet Breakfast & Lakeside Dinner",
        stay: "Pangong Star Glamping Luxury Camps, Spangmik",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Shyok River Route", "Pangong Tso Shoreline", "Milky Way Galaxy Stargazing"]
      },
      {
        day: 6,
        title: "Sunrise at Pangong Tso, Chang La Pass & Return to Leh",
        timeSlots: {
          morning: "Mesmerizing sunrise photography at Pangong. Savor hot breakfast and drive back towards Leh.",
          afternoon: "Cross mighty Chang La Pass (17,688 ft). Visit Thiksey Monastery and Shey Palace on the way down.",
          evening: "Farewell dinner in Leh with traditional Ladakhi Thukpa and steamed Momos."
        },
        desc: "Complete your trans-Himalayan circuit with panoramic monastery views and celebration dinner.",
        meals: "Buffet Breakfast & Farewell Dinner",
        stay: "Leh Himalayan Heritage Hotel (4-Star)",
        transport: "Private 4x4 AC SUV",
        dayHighlights: ["Pangong Sunrise", "Chang La Pass Crossing", "Thiksey Monastery Visit"]
      },
      {
        day: 7,
        title: "Leh Airport Departure",
        timeSlots: {
          morning: "Early breakfast and private transfer to Leh Airport (IXL). Board flight with aerial Himalayan views.",
          afternoon: "Arrive at your onward destination with cherished memories of the high passes."
        },
        desc: "Assisted airport check-in and farewell to the magical kingdom of Ladakh.",
        meals: "Buffet Breakfast",
        stay: "Tour Concludes",
        transport: "Private Airport Drop-off",
        dayHighlights: ["Leh Airport Assistance", "Himalayan Aerial Return"]
      }
    ],

    activities: [
      {
        name: "Double-Humped Camel Safari at Hunder",
        type: "Desert Adventure",
        difficulty: "Easy",
        duration: "1 Hour",
        included: true,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
        description: "Ride rare Silk Route Bactrian camels amidst towering cold desert dunes with snowy Karakoram backdrops."
      },
      {
        name: "Pangong Lake Night Sky Stargazing",
        type: "Astrophotography & Astronomy",
        difficulty: "Easy / Dress Warm",
        duration: "2 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80",
        description: "Zero light pollution allows you to see the Milky Way core, shooting stars, and distant constellations with naked eyes."
      },
      {
        name: "Zanskar River White Water Rafting (Chilling)",
        type: "Adventure Sports",
        difficulty: "Thrilling (Grade III+)",
        duration: "3 Hours",
        included: false,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        description: "Navigate icy glacial rapids cutting through the deep granite gorge of the Zanskar River."
      },
      {
        name: "Monastery Morning Chanting & Meditation",
        type: "Spiritual Experience",
        difficulty: "Peaceful",
        duration: "1.5 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=600&q=80",
        description: "Sit inside the prayer hall of Thiksey Monastery during sunrise chanting with butter lamp offerings."
      }
    ],

    cuisine: [
      {
        name: "Ladakhi Thukpa with Fresh Noodles",
        type: "Hearty Mountain Soup",
        description: "Steaming hot broth made with hand-pulled wheat noodles, mountain vegetables, cilantro, and roasted garlic.",
        topSpots: "Leh Main Bazaar Cafes & Gesmo Restaurant."
      },
      {
        name: "Steamed Tingmo with Spicy Vegetable Curry",
        type: "Traditional Steamed Bread",
        description: "Flower-shaped soft fluffy steamed bread served with rich ginger-infused vegetable or yak cheese gravy.",
        topSpots: "Tibetan Kitchen, Fort Road, Leh."
      },
      {
        name: "Authentic Ladakhi Butter Tea (Gur Gur Cha)",
        type: "Altitude Acclimatization Beverage",
        description: "Brewed black tea churned with yak butter, milk, and Himalayan rock salt in traditional wooden cylinders.",
        topSpots: "Monastery Kitchens & Homestays."
      },
      {
        name: "Organic Apricot Jam & Fresh Kernels",
        type: "Nubra Valley Sweet Harvest",
        description: "Sun-dried wild apricots made into sweet organic tarts, natural jams, and crisp kernel seeds.",
        topSpots: "Hunder Organic Orchards & Turtuk Farms."
      }
    ],

    inclusions: [
      "6 Nights High-Quality Accommodation (4-Star Leh Hotels + Luxury Swiss Camps at Nubra & Pangong)",
      "Daily Gourmet Buffet Breakfasts and Dinners at all hotels and camps",
      "Private 4x4 Mahindra Scorpio / Toyota Innova with experienced mountain chauffeur",
      "Dedicated Medical Oxygen Cylinder and Oximeter kit inside the vehicle 24/7",
      "Inner Line Protected Area Permits (ILP) for Pangong, Nubra, Khardung La & Turtuk",
      "Camel safari pass on Hunder Sand Dunes",
      "Monastery entry tickets & Wildlife department environmental fees",
      "All driver allowances, fuel, toll taxes, and Ladakh tourist entry fees included"
    ],

    exclusions: [
      "Airfare to/from Leh (IXL)",
      "Personal warm clothing rentals and sleeping bag upgrades",
      "River rafting fees and quad biking at Nubra",
      "Personal expenses such as laundry, alcoholic beverages, and tips"
    ],

    transportation: {
      vehicleType: "Private 4x4 AC Mahindra Scorpio / Toyota Innova Crysta (Maximum 4-5 Guests per vehicle for comfort)",
      airportTransfers: "Included (Leh IXL Airport pick-up and drop-off)",
      chaufferAssistance: "Native Ladakhi expert mountain chauffeur with high-altitude first aid training",
      luggageAllowance: "1 Large Rucksack / Suitcase + 1 Daypack per traveler",
      fuelAndTolls: "100% Inclusive of all Inner Line checkpoints and bridge taxes"
    },

    travelEssentials: {
      packingList: [
        "Heavy fleece jacket / down jacket (-5°C rating) for Pangong and Nubra nights",
        "Thermal inners (upper and lower body) - minimum 2 pairs",
        "UV Protection Sunglasses (Category 3/4) to prevent snow glare",
        "SPF 50+ Sunscreen and moisturising lip balm (High UV index at 11,000+ ft)",
        "Sturdy waterproof hiking shoes with thermal wool socks"
      ],
      healthAndSafety: [
        "Consult your physician for Diamox (Acetazolamide) dosage for altitude acclimatization",
        "Drink minimum 3-4 liters of water daily; strictly avoid alcohol on Days 1 & 2",
        "In case of headache or breathlessness, notify the tour escort immediately for oxygen support"
      ],
      permitsAndDocuments: [
        "Carry 6 physical passport-size photos and 4 photocopies of Govt ID for Inner Line Checkposts",
        "Foreign nationals must carry valid passport and Indian visa (e-Visa / Tourist Visa)"
      ],
      connectivityAndAtm: [
        "Only Postpaid SIM cards work in Ladakh (Airtel & Jio have best coverage in Leh & Nubra)",
        "Withdraw sufficient cash in Leh as ATMs are unavailable at Pangong and Nubra"
      ]
    },

    reviews: [
      {
        author: "Hiten Patel",
        location: "Surat, Gujarat",
        date: "August 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        comment: "The Ladakh trip with SpidyWeb was flawless. The onboard oxygen cylinder gave us immense peace of mind, our driver Stanzin was an absolute pro on Khardung La, and Pangong glamping was like being on another planet!"
      },
      {
        author: "Yakshraj Jadeja",
        location: "Rajkot, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        comment: "Top class management. Real luxury tents with hot water at 14,000 feet, delicious hot meals, and perfect acclimatization schedule. 10/10 recommendation!"
      }
    ],

    tourEscort: {
      name: "Tsering Dorjey",
      role: "Lead Himalayan Expedition Leader",
      experience: "16 Years High Altitude Experience",
      languages: "Ladakhi, Hindi, English, Tibetan",
      badge: "Himalayan Mountaineering Institute Certified"
    }
  },

  3: {
    id: 3,
    slug: "goa-sun-sand-water-sports-escape",
    title: "Goa Sun, Sand, Heritage Latin Quarter & Water Sports",
    subtitle: "Tropical Coastal Escape - Golden Beaches, Portuguese Architecture, Scuba Diving & Sunset Mandovi Cruises",
    placeName: "North & South Goa (Calangute, Fontainhas & Palolem)",
    state: "Goa",
    country: "India",
    region: "West Coast",
    category: "Tropical & Beach",
    categorySlug: "tropical-beach",
    badge: "Best Beach Escape",
    durationDays: 5,
    durationNights: 4,
    durationText: "5 Days / 4 Nights",
    maxGuests: "15 Travelers",
    rating: 4.89,
    reviewCount: 52,
    seasons: ['autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 15.2993,
      lng: 74.1240,
      altitude: "Sea Level",
      idealDuration: "4 to 6 Days",
      bestTimeToVisit: "October to April",
      climate: "Warm & Tropical (24°C - 32°C)",
      language: "Konkani, English, Hindi, Portuguese",
      airport: "Manohar International Airport (GOX) / Dabolim (GOI)",
      railway: "Madgaon Junction (MAO) / Thivim (THVM)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 18999,
      originalPrice: 22500,
      discountPercent: 16,
      standardPrice: 14999,
      deluxePrice: 18999,
      luxuryPrice: 27999,
      emiStartsAt: "₹1,583/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
          caption: "Palolem Beach with leaning coconut palms and golden sands",
          tag: "South Goa"
        },
        {
          url: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1000&q=80",
          caption: "Parasailing adventure over the turquoise Arabian Sea",
          tag: "Water Sports"
        },
        {
          url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
          caption: "Historic Basilica of Bom Jesus Portuguese architecture in Old Goa",
          tag: "Heritage"
        },
        {
          url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1000&q=80",
          caption: "Vibrant yellow and blue Portuguese houses in Fontainhas Latin Quarter",
          tag: "Fontainhas"
        }
      ]
    },

    overview: "Experience India's premier beach paradise in ultimate style. From sunbathing on secluded palm-fringed bays of South Goa to thrilling water sports (jet ski, parasailing, bumper rides) in North Goa, exploring Portuguese mansions in Fontainhas Latin Quarter, and cruising on the Mandovi River with live Goan folk music.",

    highlights: [
      "Full 5-in-1 Water Sports package (Parasailing, Jet Ski, Banana Ride, Bumper Boat & Speedboat).",
      "Heritage walking tour of Fontainhas Latin Quarter & UNESCO Basilica of Bom Jesus.",
      "Luxury 1-hour sunset cruise along the Mandovi River with DJ and cultural dance.",
      "Beach hopping from lively Baga/Calangute to serene Palolem and Morjim turtle beach.",
      "Stay in 4-star beachfront resort with private swimming pool and daily breakfast."
    ],

    attractions: [
      {
        name: "Palolem & Butterfly Beach",
        type: "Crescent Beach & Dolphin Spotting Bay",
        timings: "Open 24 Hours (Boat trips: 8:00 AM - 5:00 PM)",
        entryFee: "Free Entry / Dolphin Boat ₹400",
        distance: "South Goa (Canacona)",
        duration: "Full Day",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
        description: "A scenic natural cove surrounded by lofty headlands with calm turquoise waters perfect for swimming and kayaking.",
        tip: "Hire a kayak at 4:30 PM to paddle out into the tranquil bay for a magical sunset."
      },
      {
        name: "Fontainhas Latin Quarter",
        type: "UNESCO Heritage Portuguese Precinct",
        timings: "Open 24 Hours (Best in daylight: 9:00 AM - 6:00 PM)",
        entryFee: "Free Walking Tour",
        distance: "Panaji City Center",
        duration: "2 - 3 Hours",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80",
        description: "Narrow cobbled lanes flanked by 18th-century Portuguese mansions painted in terracotta red, pale yellow, and cobalt blue.",
        tip: "Stop at traditional 31st January Bakery for warm Goan Bebinca and pastéis de nata."
      },
      {
        name: "Basilica of Bom Jesus & Se Cathedral",
        type: "16th-Century Baroque Church & UNESCO Site",
        timings: "9:00 AM - 6:30 PM",
        entryFee: "Free Entry",
        distance: "Old Goa (10 km from Panaji)",
        duration: "2 Hours",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "Houses the sacred mortal remains of St. Francis Xavier, featuring ornate gold leaf altars and Portuguese granite architecture.",
        tip: "Modest attire covering shoulders and knees is strictly required for entry."
      },
      {
        name: "Aguada Fort & Lighthouse",
        type: "17th-Century Portuguese Ocean Bastion",
        timings: "9:30 AM - 6:00 PM",
        entryFee: "₹50 per adult",
        distance: "Sinquerim, North Goa",
        duration: "1.5 Hours",
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80",
        description: "A colossal fortress overlooking the Arabian Sea built to defend against Dutch forces and replenish fresh water to ships.",
        tip: "Climb to the upper ramparts for sweeping views of the Mandovi River mouth."
      }
    ],

    hotels: [
      {
        name: "Caravela Beach Resort Goa",
        tier: "Luxury 5-Star Beachfront Resort",
        starRating: 4.9,
        location: "Varca Beach, South Goa",
        pricePerNight: "₹12,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Direct White Sand Beach Access", "Golf Course", "Ayurvedic Spa & Jacuzzi", "9-Hole Golf Putting Green", "Swim-Up Pool Bar", "Free Wi-Fi"],
        roomTypes: ["Ocean View Deluxe", "Private Garden Villa"],
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        highlight: "Sprawling across 24 acres of landscaped gardens right on Varca's white sand beach."
      },
      {
        name: "Acron Waterfront Resort",
        tier: "Deluxe 4-Star Boutique",
        starRating: 4.85,
        location: "Baga River, Baga, North Goa",
        pricePerNight: "₹6,800 / night (Included in Package)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Infinity Pool overlooking Baga River", "Riverfront Seafood Dining", "Spa by L'Occitane", "Jacuzzi", "Speedy Beach Shuttles"],
        roomTypes: ["River View Deluxe", "Courtyard Garden Suite"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Peaceful river setting just 3 minutes walk from the vibrant Baga nightlife and beach."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Beachfront Check-In",
        timeSlots: {
          morning: "Private pickup from MOPA (GOX) or Dabolim (GOI) Airport. Scenic coastal drive to the resort.",
          afternoon: "Check-in at Acron Waterfront Resort. Settle in, unpack, and enjoy a welcome mocktail by the pool.",
          evening: "Sunset stroll on Calangute Beach followed by dinner at a beachfront shack with live acoustic music."
        },
        desc: "Begin your tropical holiday with ocean breeze and effortless private vehicle transfers.",
        meals: "Welcome Drink & Dinner",
        stay: "Acron Waterfront 4-Star Resort, Baga",
        transport: "Private AC Cab",
        dayHighlights: ["Airport Meet & Greet", "Beachfront Resort Check-In", "Calangute Sunset"]
      },
      {
        day: 2,
        title: "North Goa 5-in-1 Water Sports & Fort Aguada",
        timeSlots: {
          morning: "Hearty buffet breakfast. Transfer to Calangute watersports hub for parasailing, jet skiing, and bumper boat rides.",
          afternoon: "Explore the 17th-century Portuguese Aguada Fort and ancient ocean lighthouse.",
          evening: "Relax at Anjuna's cliffside cafes watching waves crash against the volcanic rocks."
        },
        desc: "An adrenaline-pumping day packed with watersports and panoramic ocean ramparts.",
        meals: "Buffet Breakfast",
        stay: "Acron Waterfront 4-Star Resort, Baga",
        transport: "Private AC Cab",
        dayHighlights: ["Parasailing & Jet Ski", "Aguada Fort Ramparts", "Anjuna Cliffside Sunset"]
      },
      {
        day: 3,
        title: "Old Goa Heritage Churches & Fontainhas Latin Walk",
        timeSlots: {
          morning: "Visit the UNESCO World Heritage Basilica of Bom Jesus and Se Cathedral in Old Goa.",
          afternoon: "Guided heritage walk through colourful lanes of Fontainhas Latin Quarter in Panaji.",
          evening: "Board a luxury 1-hour sunset cruise on the Mandovi River with live Goan folk dance and DJ music."
        },
        desc: "Immerse in Portuguese colonial history, vibrant architecture, and vibrant river entertainment.",
        meals: "Buffet Breakfast",
        stay: "Acron Waterfront 4-Star Resort, Baga",
        transport: "Private AC Cab",
        dayHighlights: ["Basilica of Bom Jesus", "Fontainhas Latin Mansions", "Mandovi River Sunset Cruise"]
      },
      {
        day: 4,
        title: "South Goa Coastal Tour: Palolem & Colva Beaches",
        timeSlots: {
          morning: "Drive south to pristine Palolem Beach. Enjoy shallow waters, kayak, or spot playful dolphins.",
          afternoon: "Authentic Goan fish thali lunch at a seaside shack in Canacona. Visit historic Cabo de Rama Fort.",
          evening: "Return via Colva beach sunset with shopping for cashews and feni souvenirs."
        },
        desc: "Discover the tranquil, unspoiled side of South Goa with white sands and quiet palm groves.",
        meals: "Buffet Breakfast",
        stay: "Acron Waterfront 4-Star Resort, Baga",
        transport: "Private AC Cab",
        dayHighlights: ["Palolem Crescent Beach", "Cabo de Rama Viewpoint", "South Goa Fish Thali"]
      },
      {
        day: 5,
        title: "Souvenir Shopping & Airport Departure",
        timeSlots: {
          morning: "Leisurely breakfast, swimming pool session, and checkout by 11:00 AM.",
          afternoon: "Last-minute souvenir shopping in Panaji for handcrafted azulejos tiles, Goan spices, and cashews.",
          evening: "Private drop-off at Goa Airport for your return flight."
        },
        desc: "Wrap up an invigorating coastal vacation with hassle-free airport transit.",
        meals: "Buffet Breakfast",
        stay: "Tour Concludes",
        transport: "Private Airport Drop-off",
        dayHighlights: ["Azulejos Souvenir Shopping", "Airport Drop-off"]
      }
    ],

    activities: [
      {
        name: "5-in-1 Coastal Water Sports Combo",
        type: "Thrill & Water Adventure",
        difficulty: "Moderate",
        duration: "3 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=600&q=80",
        description: "Fly high with parachute parasailing, rip through waves on a Yamaha jet ski, and ride bumper boats."
      },
      {
        name: "Mandovi River Luxury Sunset Cruise",
        type: "Entertainment & Sightseeing",
        difficulty: "Easy",
        duration: "1 Hour",
        included: true,
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80",
        description: "Cruise along the Panaji riverfront featuring traditional Fugdi folk dance and live DJ music."
      },
      {
        name: "Grand Island Scuba Diving with Video",
        type: "Underwater Marine Exploration",
        difficulty: "Moderate (No swimming required)",
        duration: "5 Hours",
        included: false,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "PADI certified instructor-guided scuba dive near coral reefs with underwater HD video & photo pack."
      },
      {
        name: "Fontainhas Photography & History Walk",
        type: "Culture & Architecture",
        difficulty: "Easy Walk",
        duration: "2 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80",
        description: "Discover the hidden courtyards, wishing wells, and vintage galleries of Asia's oldest Latin Quarter."
      }
    ],

    cuisine: [
      {
        name: "Goan Fish Curry with Steamed Rice",
        type: "Iconic Coastal Classic",
        description: "Kingfish or pomfret simmered in fresh grated coconut, dried Kashmiri chillies, coriander, and sour kokum.",
        topSpots: "Ritz Classic, Panaji & Fisherman's Wharf."
      },
      {
        name: "Prawn Balchão & Poi (Goan Bread)",
        type: "Tangy Pickled Seafood",
        description: "Juicy prawns cooked in a fiery, tangy vinegar and tomato masala paste served with warm crusty local Poi bread.",
        topSpots: "Viva Panjim, Fontainhas."
      },
      {
        name: "Goan Bebinca Dessert",
        type: "Traditional 7-Layer Cake",
        description: "Slow-baked multi-layered pudding prepared with coconut milk, egg yolks, jaggery, and nutmeg.",
        topSpots: "Confeitaria 31 De Janeiro, Panaji."
      },
      {
        name: "Chicken Xacuti",
        type: "Aromatic Spiced Gravy",
        description: "Tender chicken cooked with roasted coconut, white poppy seeds, star anise, and peri-peri masala.",
        topSpots: "Mum's Kitchen, Miramar."
      }
    ],

    inclusions: [
      "4 Nights in 4-Star Beachfront Resort with Swimming Pool",
      "Daily Buffet Breakfasts with Continental & Indian spreads",
      "Private AC Cab for all airport transfers and scheduled sightseeing tours",
      "5-in-1 Water Sports Combo (Parasailing, Jet Ski, Banana Ride, Bumper Boat & Speedboat)",
      "Mandovi Sunset Cruise tickets with live entertainment",
      "Guided Fontainhas Latin Quarter walking tour",
      "All toll taxes, parking fees, and driver allowances included"
    ],

    exclusions: [
      "Flight tickets to/from Goa",
      "Grand Island Scuba Diving package (available as optional add-on ₹2,500/person)",
      "Personal nightclub cover charges and alcoholic drinks"
    ],

    transportation: {
      vehicleType: "Private AC Sedan (Toyota Etios / Dzire) or Ertiga / Innova for groups",
      airportTransfers: "Included (Pick-up and drop-off from GOX or GOI)",
      chaufferAssistance: "English/Hindi speaking friendly local driver",
      luggageAllowance: "2 Large Suitcases per vehicle",
      fuelAndTolls: "100% Covered"
    },

    travelEssentials: {
      packingList: [
        "Lightweight linen shirts, sundresses, and beach swimwear",
        "UV protective sunglasses, sun visor / wide-brim hat, and flip flops",
        "Waterproof phone pouch for watersports and boat rides",
        "SPF 50+ Sunscreen and Aloe Vera soothing lotion"
      ],
      healthAndSafety: [
        "Follow lifeguard safety flags on all public beaches (Red Flag = Do not enter sea)",
        "Wear life jackets at all times during boat rides and watersports"
      ],
      permitsAndDocuments: [
        "Valid Govt Photo ID (Aadhar Card / Driving License / Passport) for hotel check-in and watersports"
      ],
      connectivityAndAtm: [
        "High-speed 5G mobile networks across all Goa beaches and towns",
        "Card and UPI payments accepted at almost all shacks and shops"
      ]
    },

    reviews: [
      {
        author: "Shubham Sharma",
        location: "Delhi NCR",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "The water sports coordination in North Goa was super smooth with zero waiting time. Our resort in Baga had a gorgeous infinity pool overlooking the river. SpidyWeb made our vacation totally stress-free!"
      }
    ],

    tourEscort: {
      name: "Savio D'Souza",
      role: "Goa Destination Specialist",
      experience: "11 Years Experience",
      languages: "English, Konkani, Hindi, Portuguese",
      badge: "Goa Tourism Approved Guide"
    }
  },

  4: {
    id: 4,
    slug: "kashmir-heaven-gulmarg-dal-lake",
    title: "Kashmir Heaven on Earth, Gulmarg Gondola & Dal Lake",
    subtitle: "Paradise on Earth - Dal Lake Shikaras, Cedar Houseboats, Gulmarg Gondola Cable Car & Pahalgam Pine Valleys",
    placeName: "Srinagar, Gulmarg & Pahalgam",
    state: "Jammu & Kashmir",
    country: "India",
    region: "North India",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Romantic & Family Choice",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "12 Travelers",
    rating: 4.94,
    reviewCount: 61,
    seasons: ['winter', 'spring-summer', 'monsoon', 'autumn'],

    geo: {
      lat: 34.0837,
      lng: 74.7973,
      altitude: "1,585 m (Srinagar) to 3,950 m (Apharwat Peak)",
      idealDuration: "6 to 8 Days",
      bestTimeToVisit: "All Year (Snow: Dec-Feb, Spring: Mar-May, Green: Jun-Oct)",
      climate: "Crisp Alpine (0°C - 22°C)",
      language: "Kashmiri, Urdu, Hindi, English",
      airport: "Sheikh ul-Alam International Airport (SXR), Srinagar",
      railway: "Udhampur (230 km) / Jammu Tawi (290 km)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 29500,
      originalPrice: 34000,
      discountPercent: 13,
      standardPrice: 23999,
      deluxePrice: 29500,
      luxuryPrice: 42000,
      emiStartsAt: "₹2,458/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
          caption: "Traditional wooden Shikara boat on Dal Lake against Pir Panjal mountains",
          tag: "Dal Lake"
        },
        {
          url: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80",
          caption: "Gulmarg Gondola ascending snow-clad Apharwat peak",
          tag: "Gulmarg"
        },
        {
          url: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80",
          caption: "Lidder River winding through lush pine forests of Pahalgam",
          tag: "Pahalgam"
        }
      ]
    },

    overview: "Step into paradise on earth. Glide on wooden Shikaras across serene Dal Lake, stay in intricately hand-carved cedarwood houseboats, ride Asia's highest cable car (Gulmarg Gondola) to 13,780 ft snow slopes, stroll through saffron fields in Pampore, and picnic alongside the gushing Lidder River in Pahalgam.",

    highlights: [
      "Private 1-hour sunset Shikara ride on Dal Lake with hot Kashmiri Kahwa.",
      "1 Night stay in luxury cedarwood Houseboat with walnut wood furnishings.",
      "Gulmarg Gondola Phase-1 cable car tickets included for Apharwat views.",
      "Day excursion to Pahalgam's Betaab Valley, Aru Valley & saffron gardens.",
      "Visit Mughal Gardens: Nishat Bagh, Shalimar Bagh, and Chashme Shahi."
    ],

    attractions: [
      {
        name: "Dal Lake & Floating Vegetable Market",
        type: "Iconic Himalayan Lake & Houseboats",
        timings: "Open 24 Hours (Floating market: 5:30 AM - 7:30 AM)",
        entryFee: "Shikara Ride Included",
        distance: "Srinagar City Center",
        duration: "Half Day & Overnight",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80",
        description: "Jewel in the crown of Kashmir, dotted with houseboats, floating lotus gardens, and traditional market boatmen.",
        tip: "Wake up at 5:30 AM for a sunrise Shikara ride to witness the 150-year-old floating vegetable market."
      },
      {
        name: "Gulmarg Gondola & Apharwat Peak",
        type: "Asia's Highest Cable Car (13,780 ft)",
        timings: "9:00 AM - 4:00 PM (Weather dependent)",
        entryFee: "Phase-1 Ticket Included (₹810)",
        distance: "50 km from Srinagar",
        duration: "Full Day",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80",
        description: "Takes you through pine canopies up to snow-clad Apharwat peak for panoramic views of Nanga Parbat.",
        tip: "Pre-book tickets online to avoid long ticket counter queues."
      },
      {
        name: "Pahalgam Valley & Lidder River",
        type: "Alpine Valley of Shepherds & Betaab Valley",
        timings: "8:00 AM - 6:00 PM",
        entryFee: "Betaab Valley Pass ₹100",
        distance: "95 km from Srinagar",
        duration: "Full Day",
        image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80",
        description: "Surrounded by dense fir forests, snow peaks, and crystal-clear river waters renowned for trout fishing.",
        tip: "Enjoy hot Maggie and tea at the Lidder riverside viewpoint."
      }
    ],

    hotels: [
      {
        name: "Khyber Himalayan Resort & Spa",
        tier: "Luxury 5-Star Alpine Resort",
        starRating: 4.97,
        location: "Gulmarg Forest Range",
        pricePerNight: "₹28,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Heated Indoor Swimming Pool with Glass Roof", "L'Occitane Spa", "Panoramic Snow Mountain Balconies", "Fine Dining Kashmiri Wazwan", "Ski-in / Ski-out Concierge"],
        roomTypes: ["Premier Snow View Room", "Luxury Pine Cottage"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "World-class luxury resort perched among pine forests steps away from the Gondola."
      },
      {
        name: "Royal Heritage Cedar Palace Houseboat",
        tier: "Luxury Dal Lake Houseboat",
        starRating: 4.9,
        location: "Dal Lake Boulevard, Srinagar",
        pricePerNight: "₹8,000 / night (Included for Night 1)",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80",
        amenities: ["Carved Walnut Wood Rooms", "Front Verandah overlooking Dal Lake", "Traditional Bukhari Wood Heating", "Ensuite Modern Tiled Bathrooms", "24/7 Hot Water"],
        roomTypes: ["Royal Deluxe Houseboat Suite"],
        checkIn: "12:00 PM",
        checkOut: "10:00 AM",
        highlight: "Authentic cedarwood aroma, handwoven silk carpets, and personalized butler service."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar & Dal Lake Houseboat Check-In",
        timeSlots: {
          morning: "Meet our representative at Srinagar Airport (SXR). Private transfer to Dal Lake jetty.",
          afternoon: "Cross Dal Lake by Shikara to check in to your luxury carved Houseboat. Savor welcoming Kashmiri Kahwa with crushed almonds.",
          evening: "1-Hour sunset Shikara ride visiting Char Chinar and floating gardens followed by royal Wazwan dinner."
        },
        desc: "Begin your Kashmiri fairytale staying on a hand-carved palace on water.",
        meals: "Welcome Kahwa & Dinner Included",
        stay: "Royal Heritage Cedar Palace Houseboat, Dal Lake",
        transport: "Private AC Cab + Shikara",
        dayHighlights: ["Dal Lake Crossing", "Sunset Shikara Cruise", "Houseboat Wazwan Dinner"]
      },
      {
        day: 2,
        title: "Mughal Gardens Heritage Tour & Shankaracharya Temple",
        timeSlots: {
          morning: "Visit terraced Mughal gardens: Nishat Bagh (Garden of Bliss) and Shalimar Bagh (Abode of Love).",
          afternoon: "Ascend to ancient Shankaracharya Temple atop Takht-e-Suleiman hill for panoramic Srinagar views.",
          evening: "Check in to luxury resort in Srinagar city. Stroll along Boulevard Road."
        },
        desc: "Explore 400-year-old Mughal fountains, cascading water channels, and chinar trees.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Srinagar 4-Star Mountain View Resort",
        transport: "Private AC Cab",
        dayHighlights: ["Nishat & Shalimar Gardens", "Shankaracharya Hilltop", "Boulevard Walk"]
      },
      {
        day: 3,
        title: "Gulmarg Day Trip: Gondola Cable Car to Apharwat",
        timeSlots: {
          morning: "Scenic drive to Gulmarg (50 km) through apple orchards and pine slopes.",
          afternoon: "Board the Gulmarg Gondola Phase-1 to Kongdoori station (10,500 ft). Optional Phase-2 to 13,780 ft snow crest.",
          evening: "Stroll through Gulmarg Golf Course and visit historic St. Mary's church before returning to Srinagar."
        },
        desc: "Ascend into snow wonderland on one of the world's most scenic cable car rides.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Srinagar 4-Star Mountain View Resort",
        transport: "Private AC Cab",
        dayHighlights: ["Gulmarg Gondola Ride", "Snow Activity at Apharwat", "Historic St. Mary's Church"]
      },
      {
        day: 4,
        title: "Pahalgam Valley of Shepherds & Betaab Valley",
        timeSlots: {
          morning: "Drive to Pahalgam (95 km) via saffron town Pampore and historic Awantipora temple ruins.",
          afternoon: "Visit picturesque Betaab Valley (named after Bollywood film) and Chandanwari pine river trails.",
          evening: "Check in to riverside resort in Pahalgam. Sit beside the roaring Lidder river with bonfire."
        },
        desc: "A paradise of gushing glacial rivers, snow peaks, and deep pine valleys.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Pahalgam Riverside 4-Star Resort",
        transport: "Private AC Cab",
        dayHighlights: ["Saffron Fields of Pampore", "Betaab Valley", "Lidder Riverfront Bonfire"]
      },
      {
        day: 5,
        title: "Aru Valley Nature Walk & Return to Srinagar",
        timeSlots: {
          morning: "Explore peaceful Aru Valley with lush meadows and pine walking trails.",
          afternoon: "Scenic return drive to Srinagar. Visit local Pashmina shawl weaving and walnut wood carving artisans.",
          evening: "Farewell dinner in Srinagar with traditional Kashmiri music."
        },
        desc: "Interact with local artisans and acquire genuine certified GI-tagged Pashmina shawls.",
        meals: "Buffet Breakfast & Farewell Dinner",
        stay: "Srinagar 4-Star Mountain View Resort",
        transport: "Private AC Cab",
        dayHighlights: ["Aru Valley Meadows", "Pashmina Artisan Workshop", "Farewell Dinner"]
      },
      {
        day: 6,
        title: "Srinagar Airport Departure",
        timeSlots: {
          morning: "Breakfast and private transfer to Srinagar Airport for your return flight.",
          afternoon: "Fly home carrying memories of the heavenly valleys."
        },
        desc: "Assisted airport drop-off with SpidyWeb coordinator support.",
        meals: "Buffet Breakfast",
        stay: "Tour Concludes",
        transport: "Private Airport Drop-off",
        dayHighlights: ["Airport Transfer", "Trip Concludes"]
      }
    ],

    activities: [
      {
        name: "Private Dal Lake Shikara Ride",
        type: "Lakeside Cruise",
        difficulty: "Relaxing",
        duration: "1.5 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80",
        description: "Gently row past lotus patches, Char Chinar islands, and floating craft markets while drinking hot Kahwa."
      },
      {
        name: "Gulmarg Gondola Cable Car Ride",
        type: "Snow Mountain Ascent",
        difficulty: "Easy",
        duration: "3 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80",
        description: "Glide over dense pine forests to Kongdoori station with sweeping Himalayan panoramas."
      }
    ],

    cuisine: [
      {
        name: "Kashmiri Wazwan Multi-Course Feast",
        type: "Royal Culinary Tradition",
        description: "Served on large copper Trammi: Rogan Josh, Gushtaba (meatballs in yogurt), Rista, and Tabak Maaz.",
        topSpots: "Ahdoos & Mughal Darbar, Residency Road, Srinagar."
      },
      {
        name: "Kashmiri Kahwa Tea",
        type: "Saffron Spiced Herbal Tea",
        description: "Green tea brewed with saffron strands, crushed green cardamom, cinnamon bark, and slivered almonds.",
        topSpots: "Dal Lake Shikaras & Chai Jaai Cafe."
      },
      {
        name: "Dum Aloo Kashmiri with Rice",
        type: "Vegetarian Delicacy",
        description: "Baby potatoes slow-simmered in rich red gravy infused with fennel seed powder (saunf) and dry ginger (sonth).",
        topSpots: "Lhasa Restaurant, Srinagar."
      },
      {
        name: "Kandur Local Baker Breads (Sheermal & Tsot)",
        type: "Traditional Bakery Items",
        description: "Crispy sesame-topped breads baked in wood-fired clay tandoors, eaten fresh with noon chai.",
        topSpots: "Old Downtown Srinagar Bakeries."
      }
    ],

    inclusions: [
      "5 Nights Luxury Accommodation (Resorts + 1 Night Deluxe Cedarwood Houseboat)",
      "Daily Gourmet Buffet Breakfasts & Dinners",
      "Private AC Cab for all sightseeing tours and inter-city transfers",
      "1-Hour Sunset Shikara Ride on Dal Lake with complimentary Kahwa",
      "Gulmarg Gondola Phase-1 Cable Car tickets included",
      "Betaab Valley entry permits & all parking and toll charges"
    ],

    exclusions: [
      "Airfare to/from Srinagar (SXR)",
      "Pony rides in Pahalgam and Gulmarg (negotiated directly by travelers)",
      "Gulmarg Gondola Phase-2 ticket and ski instructor fees"
    ],

    transportation: {
      vehicleType: "Private AC Sedan / Innova Crysta",
      airportTransfers: "Included (Srinagar SXR Airport)",
      chaufferAssistance: "Kashmiri native experienced chauffeur",
      luggageAllowance: "2 Large Suitcases + 2 Hand Bags",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Warm jackets, woolen sweaters, and thermal inners (evenings get chilly: 5°C - 12°C)",
        "Sturdy walking shoes for garden trails and cable car stations",
        "Moisturizing skin cream and lip balm for mountain air"
      ],
      healthAndSafety: [
        "Carry routine medicines; keep warm during evening lake cruises"
      ],
      permitsAndDocuments: [
        "Valid Govt Photo ID (Aadhar / Passport) for airport security and hotel check-in"
      ],
      connectivityAndAtm: [
        "Postpaid SIM cards (Airtel / Jio) required in J&K; prepaid SIMs from outside J&K do not work"
      ]
    },

    reviews: [
      {
        author: "Yug Shah",
        location: "Vadodara, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        comment: "Staying on the Dal Lake houseboat was an unforgettable experience. The morning kahwa, sunset Shikara ride, and seamless Gondola passes made this the best family trip ever."
      }
    ],

    tourEscort: {
      name: "Farooq Ahmed",
      role: "Kashmir Valley Tour Director",
      experience: "15 Years Experience",
      languages: "Kashmiri, Urdu, Hindi, English",
      badge: "J&K Tourism Master Guide"
    }
  },

  5: {
    id: 5,
    slug: "majestic-rajasthan-palaces-forts",
    title: "Majestic Rajasthan Palaces, Forts & Thar Desert Safari",
    subtitle: "Land of Maharajas - Amber Fort, Jodhpur Blue City, Lake Pichola & Sam Sand Dunes Camel Glamping",
    placeName: "Jaipur, Jodhpur, Udaipur & Jaisalmer",
    state: "Rajasthan",
    country: "India",
    region: "North-West India",
    category: "Cultural & Heritage",
    categorySlug: "cultural-heritage",
    badge: "Royal Heritage Choice",
    durationDays: 8,
    durationNights: 7,
    durationText: "8 Days / 7 Nights",
    maxGuests: "15 Travelers",
    rating: 4.88,
    reviewCount: 41,
    seasons: ['autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 26.9124,
      lng: 75.7873,
      altitude: "431 m (Jaipur) / 225 m (Jaisalmer)",
      idealDuration: "7 to 10 Days",
      bestTimeToVisit: "October to March",
      climate: "Sunny & Pleasant (12°C - 28°C)",
      language: "Hindi, Rajasthani, Marwari, English",
      airport: "Jaipur International Airport (JAI) / Udaipur (UDR)",
      railway: "Jaipur Junction (JP) / Jodhpur (JU)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 48000,
      originalPrice: 56000,
      discountPercent: 14,
      standardPrice: 39999,
      deluxePrice: 48000,
      luxuryPrice: 68000,
      emiStartsAt: "₹4,000/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
          caption: "Hawa Mahal (Palace of Winds) with 953 pink sandstone jharokhas in Jaipur",
          tag: "Jaipur"
        },
        {
          url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
          caption: "Amber Fort palace courtyard and reflective Maota Lake",
          tag: "Amber Fort"
        },
        {
          url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80",
          caption: "Sunset boat cruise on Lake Pichola with City Palace Udaipur",
          tag: "Udaipur"
        }
      ]
    },

    overview: "Live like royalty across the grandest forts and palaces of India. Marvel at Amber Fort in Pink City Jaipur, gaze upon the Blue City from Mehrangarh Fort in Jodhpur, ride camels across golden dunes in the Thar Desert, and take a sunset boat cruise along the marble palaces of Lake Pichola in romantic Udaipur.",

    highlights: [
      "Private boat cruise on Lake Pichola with views of Jag Mandir and City Palace Udaipur.",
      "Amber Fort guided tour with elephant/jeep ascent and Sheesh Mahal mirror palace.",
      "Overnight luxury Swiss desert camp in Jaisalmer Sam Sand Dunes with royal dinner and Kalbeliya dance.",
      "Explore Mehrangarh Fort, Umaid Bhawan Palace, and Jodhpur Blue City alleys.",
      "Stay in 4-star authentic Heritage Havelis with traditional Rajput hospitality."
    ],

    attractions: [
      {
        name: "Amber Fort & Palace",
        type: "UNESCO Hill Fort & Royal Rajput Residence",
        timings: "8:00 AM - 5:30 PM (Light & Sound: 7:00 PM)",
        entryFee: "₹100 Indian / ₹500 Foreign",
        distance: "11 km from Jaipur",
        duration: "3 - 4 Hours",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80",
        description: "Opulent fort crafted from yellow and pink sandstone with the sparkling Sheesh Mahal (Mirror Palace).",
        tip: "Visit early morning for cooler weather and stunning photography light."
      },
      {
        name: "City Palace & Lake Pichola (Udaipur)",
        type: "Palatial Waterfront Complex & Lake Boat Cruise",
        timings: "9:00 AM - 9:00 PM",
        entryFee: "₹300 Palace / ₹450 Boat Cruise",
        distance: "Udaipur City Center",
        duration: "Half Day",
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
        description: "Rajasthan's largest palace complex blending Rajasthani and Mughal architecture alongside shimmering waters.",
        tip: "Book the 5:00 PM boat cruise to see the white marble palace turn golden at sunset."
      }
    ],

    hotels: [
      {
        name: "Shahpura Haveli Heritage Luxury",
        tier: "Royal Heritage 4-Star Haveli",
        starRating: 4.9,
        location: "Jaipur, Rajasthan",
        pricePerNight: "₹8,500 / night (Included in Package)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Traditional Fresco Architecture", "Courtyard Swimming Pool", "Rooftop Royal Dining", "Folk Music Evenings", "High-Speed Wi-Fi"],
        roomTypes: ["Royal Heritage Suite", "Maharaja Deluxe Room"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "300-year-old restored royal residence with handcrafted Rajput decor."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur (Pink City) & Heritage Check-In",
        timeSlots: {
          morning: "Private pickup from Jaipur International Airport (JAI) or railway station.",
          afternoon: "Check in to Shahpura Heritage Haveli. Settle in with welcome garland and spiced chai.",
          evening: "Visit Birla Temple and stroll through lively Johari Bazaar for colorful handicrafts."
        },
        desc: "Begin your royal odyssey in the walled pink city of Jaipur.",
        meals: "Welcome Dinner Included",
        stay: "Shahpura Haveli Heritage Hotel, Jaipur",
        transport: "Private AC Chauffeur Cab",
        dayHighlights: ["Royal Welcome", "Johari Bazaar Shopping", "Haveli Dinner"]
      },
      {
        day: 2,
        title: "Amber Fort, Hawa Mahal & City Palace Jaipur",
        timeSlots: {
          morning: "Ascend Amber Fort. Tour the Sheesh Mahal, Diwan-e-Aam, and panoramic battlements.",
          afternoon: "Photo stop at Jal Mahal (Water Palace). Tour the City Palace Museum and Jantar Mantar observatory.",
          evening: "Sunset photo at Hawa Mahal facade and traditional Rajasthani Thali dinner."
        },
        desc: "Experience royal Jaipur architecture and centuries of royal artifacts.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Shahpura Haveli Heritage Hotel, Jaipur",
        transport: "Private AC Cab",
        dayHighlights: ["Amber Fort Sheesh Mahal", "Hawa Mahal", "Jantar Mantar"]
      }
    ],

    activities: [
      {
        name: "Lake Pichola Sunset Royal Boat Cruise",
        type: "Heritage Waterway",
        difficulty: "Easy",
        duration: "1 Hour",
        included: true,
        image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80",
        description: "Cruise past Jag Niwas (Lake Palace) and Jag Mandir island palace as evening lights shimmer on water."
      }
    ],

    cuisine: [
      {
        name: "Authentic Dal Baati Churma",
        type: "Royal Rajput Classic",
        description: "Hard wheat dough balls baked in tandoor, dipped in pure desi ghee, served with spicy mixed lentil dal and sweet powdered churma.",
        topSpots: "Chokhi Dhani & Laxmi Mishthan Bhandar (LMB), Jaipur."
      },
      {
        name: "Laal Maas (Fiery Mutton Gravy)",
        type: "Royal Rajput Hunting Specialty",
        description: "Slow-cooked tender meat prepared with Mathania red chillies, garlic, and yogurt.",
        topSpots: "Handi Restaurant & Spice Court, Jaipur."
      }
    ],

    inclusions: [
      "7 Nights in Heritage Palaces and 4-Star Boutique Havelis",
      "Daily Buffet Breakfasts & Traditional Rajput Dinners",
      "Private Chauffeur AC Sedan / SUV for entire inter-city circuit",
      "Lake Pichola boat cruise tickets in Udaipur",
      "Desert camel safari with folk performance in Thar Desert",
      "All monument entry fees, toll taxes, and parking included"
    ],

    exclusions: [
      "Flight tickets to Jaipur / from Udaipur",
      "Monument camera permits and personal shopping"
    ],

    transportation: {
      vehicleType: "Private AC Toyota Innova Crysta / Luxury Sedan",
      airportTransfers: "Included (Jaipur pickup & Udaipur drop-off)",
      chaufferAssistance: "Experienced royal circuit chauffeur in uniform",
      luggageAllowance: "2 Large Suitcases per traveler",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Light cotton clothes for daytime (22°C - 28°C)",
        "Warm jacket or shawl for desert nights (8°C - 14°C)",
        "Sunscreen, sunglasses, and comfortable walking footwear for fort stone ramps"
      ],
      healthAndSafety: ["Stay hydrated in dry desert climate; drink mineral water"],
      permitsAndDocuments: ["Valid Govt Photo ID (Aadhar / Passport)"],
      connectivityAndAtm: ["5G mobile connectivity and ATMs abundant in all major cities"]
    },

    reviews: [
      {
        author: "Yakshraj Jadeja",
        location: "Rajkot, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        comment: "Staying in authentic Havelis made us feel like kings. The Lake Pichola boat ride in Udaipur and desert camp in Jaisalmer were out of this world."
      }
    ],

    tourEscort: {
      name: "Rana Mahendra Singh",
      role: "Rajasthan Heritage Tour Director",
      experience: "18 Years Experience",
      languages: "Hindi, Rajasthani, Marwari, English",
      badge: "Govt of India Certified National Heritage Escort"
    }
  },

  6: {
    id: 6,
    slug: "varanasi-spiritual-ganges-sarnath",
    title: "Varanasi Spiritual Ganges Ganga Aarti & Sarnath Heritage",
    subtitle: "Spiritual Heart of India - Sunrise Ganges Boat Ride, Dashashwamedh Maha Aarti & Sarnath Buddhist Stupa",
    placeName: "Varanasi & Sarnath",
    state: "Uttar Pradesh",
    country: "India",
    region: "North-Central India",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Spiritual & Cultural Soul",
    durationDays: 4,
    durationNights: 3,
    durationText: "4 Days / 3 Nights",
    maxGuests: "14 Travelers",
    rating: 4.91,
    reviewCount: 38,
    seasons: ['autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 25.3176,
      lng: 82.9739,
      altitude: "81 m (Ganges Plains)",
      idealDuration: "3 to 5 Days",
      bestTimeToVisit: "October to March",
      climate: "Mild & Sunny (14°C - 26°C)",
      language: "Hindi, Bhojpuri, English",
      airport: "Lal Bahadur Shastri International Airport (VNS)",
      railway: "Varanasi Junction (BSB) / Banaras (BSBS)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 15500,
      originalPrice: 18500,
      discountPercent: 16,
      standardPrice: 11999,
      deluxePrice: 15500,
      luxuryPrice: 24500,
      emiStartsAt: "₹1,291/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
          caption: "Evening Dashashwamedh Maha Ganga Aarti with sacred brass lamps",
          tag: "Ganga Aarti"
        },
        {
          url: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80",
          caption: "Sunrise wooden boat gliding past ancient stone ghats",
          tag: "Sunrise Boat"
        },
        {
          url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
          caption: "Dhamek Stupa at Sarnath where Lord Buddha gave first sermon",
          tag: "Sarnath"
        }
      ]
    },

    overview: "Step into the world's oldest living spiritual city. Watch the morning sun illuminate 84 historic stone ghats on a private wooden boat cruise, witness the hypnotic brass lamps and chanting of the evening Maha Ganga Aarti at Dashashwamedh Ghat, explore the new Kashi Vishwanath temple corridor, and visit peaceful Sarnath where Lord Buddha preached his first sermon.",

    highlights: [
      "Private sunrise boat ride on the holy Ganges with floating diya flower offerings.",
      "Reserved front-row boat seating for evening Dashashwamedh Maha Ganga Aarti.",
      "VIP darshan assistance at Kashi Vishwanath Golden Temple Corridor.",
      "Excursion to Sarnath Buddhist Stupa and Archaeological Museum (Lion Capital of Ashoka).",
      "Authentic Banarasi silk saree weaving workshop tour with master weavers."
    ],

    attractions: [
      {
        name: "Dashashwamedh Ghat & Maha Ganga Aarti",
        type: "Ancient Sacred Riverfront & Evening Fire Ritual",
        timings: "Open 24 Hours (Aarti: 6:30 PM - 7:30 PM)",
        entryFee: "Reserved Boat Seating Included",
        distance: "Central Varanasi Riverfront",
        duration: "2 Hours",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80",
        description: "The main and oldest ghat where seven priests perform synchronized Vedic rituals with multi-tiered brass oil lamps.",
        tip: "View from a river boat for the most unobstructed and spiritual angle."
      },
      {
        name: "Sarnath Deer Park & Dhamek Stupa",
        type: "Sacred Buddhist Pilgrimage & Ashoka Pillar",
        timings: "9:00 AM - 5:00 PM (Museum closed Fridays)",
        entryFee: "₹25 Indian / ₹300 Foreign",
        distance: "10 km north-east of Varanasi",
        duration: "3 Hours",
        image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=600&q=80",
        description: "Where Gautama Buddha taught the Four Noble Truths and the Eightfold Path after attaining enlightenment.",
        tip: "Visit the Sarnath Museum to see India's official national emblem: the 3rd-century BC Lion Capital."
      }
    ],

    hotels: [
      {
        name: "BrijRama Palace Heritage on the Ganges",
        tier: "Luxury 5-Star Heritage Palace",
        starRating: 4.95,
        location: "Darbhanga Ghat, Varanasi",
        pricePerNight: "₹22,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Direct Ghat River Access", "Traditional Classical Sitar Recitals", "Ayurvedic Spa", "Gourmet Pure Vegetarian Dining", "Private Boat Jetty"],
        roomTypes: ["Ganga View Heritage Suite", "Palace Maharaja Room"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "210-year-old palace with direct elevator and balconies over the holy Ganges."
      },
      {
        name: "Taj Ganges Varanasi",
        tier: "Deluxe 5-Star Resort",
        starRating: 4.9,
        location: "Nadesar Palace Grounds, Varanasi",
        pricePerNight: "₹11,500 / night (Included in Package)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["12 Acres Landscaped Gardens", "Outdoor Pool", "Jiva Spa", "Varuna Restaurant", "High-Speed Wi-Fi"],
        roomTypes: ["Superior Garden View", "Deluxe Palace Suite"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Tranquil oasis with peacocks, lush mango groves, and world-class Taj hospitality."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi & Evening Dashashwamedh Ganga Aarti",
        timeSlots: {
          morning: "Private pickup from Varanasi Airport (VNS) or railway station.",
          afternoon: "Check in to Taj Ganges. Settle in and enjoy royal welcome tea.",
          evening: "Private boat ride to Dashashwamedh Ghat for front-row view of the sacred Maha Ganga Aarti."
        },
        desc: "Arrive in the spiritual capital and witness centuries-old evening river worship.",
        meals: "Dinner Included",
        stay: "Taj Ganges 5-Star Luxury Resort, Varanasi",
        transport: "Private AC Cab + Private River Boat",
        dayHighlights: ["Airport Pickup", "Maha Ganga Aarti from Boat", "Ghat Evening Lighting"]
      },
      {
        day: 2,
        title: "Sunrise Ganges Boat Ride, Kashi Vishwanath & Sarnath",
        timeSlots: {
          morning: "5:30 AM sunrise wooden boat ride along all 84 ghats. Visit Kashi Vishwanath Golden Temple Corridor.",
          afternoon: "Excursion to Sarnath to tour Dhamek Stupa, Mulagandha Kuti Vihara, and Sarnath Museum.",
          evening: "Heritage walk through ancient alleyways (galis) tasting famous Banarasi Chaat and Paan."
        },
        desc: "Experience spiritual rituals at dawn, sacred temples, and Buddhist history.",
        meals: "Buffet Breakfast & Dinner",
        stay: "Taj Ganges 5-Star Luxury Resort, Varanasi",
        transport: "Private AC Cab",
        dayHighlights: ["Sunrise Ganges Boat", "Kashi Vishwanath Corridor", "Sarnath Dhamek Stupa"]
      }
    ],

    activities: [
      {
        name: "Private Sunrise Boat Ride on Ganges",
        type: "Spiritual Boat Tour",
        difficulty: "Peaceful",
        duration: "2 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=600&q=80",
        description: "Row past Manikarnika, Harishchandra, and Assi ghats as morning bells chime and devotees bathe in golden dawn light."
      }
    ],

    cuisine: [
      {
        name: "Banarasi Tamatar Chaat & Palak Patta Chaat",
        type: "Gourmet Street Food",
        description: "Mashed spiced tomatoes cooked with ginger, cumin, and cashews, topped with crispy namkeen and hing water.",
        topSpots: "Kashi Chaat Bhandar, Godowlia."
      },
      {
        name: "Malaiyo (Winter Saffron Milk Foam)",
        type: "Delicate Sweet Delicacy",
        description: "Frothy saffron-infused milk foam collected under winter night dew, garnished with pistachios and almonds.",
        topSpots: "Chaukhamba & Thatheri Bazaar."
      },
      {
        name: "Banarasi Meetha Paan",
        type: "Heritage Betel Leaf Digestif",
        description: "Fresh betel leaf filled with sweet gulkand, menthol, fennel, and aromatic silver leaf (vark).",
        topSpots: "Keshav Tambool Bhandar, Assi Ghat."
      }
    ],

    inclusions: [
      "3 Nights in 5-Star Luxury / Heritage Hotel",
      "Daily Buffet Breakfasts & Dinners",
      "Private AC Cab for all city tours and Sarnath excursion",
      "Private Sunrise Boat Cruise & Reserved Ganga Aarti Boat",
      "Sarnath archaeological entry tickets and temple escort",
      "All driver allowances and parking included"
    ],

    exclusions: [
      "Flight / Train tickets to/from Varanasi",
      "Personal temple donation offerings (dakshina) and silk saree purchases"
    ],

    transportation: {
      vehicleType: "Private AC Toyota Etios / Innova Crysta",
      airportTransfers: "Included (Varanasi VNS Airport)",
      chaufferAssistance: "Native Varanasi certified driver",
      luggageAllowance: "2 Large Suitcases per vehicle",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Modest cotton / linen clothing covering shoulders and knees for temple visits",
        "Easy slip-on walking shoes (shoes must be removed before entering temples and ghat steps)",
        "Hand sanitizer and light shawl for evening boat breeze"
      ],
      healthAndSafety: ["Drink bottled mineral water provided in vehicle"],
      permitsAndDocuments: ["Valid Govt Photo ID (Aadhar / Passport)"],
      connectivityAndAtm: ["5G mobile network and ATMs available throughout the city"]
    },

    reviews: [
      {
        author: "Krrish Modi",
        location: "Ahmedabad, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "Watching the evening Maha Ganga Aarti from our private boat was spiritual goosebumps! The sunrise ride along the ghats and Sarnath tour were managed flawlessly."
      }
    ],

    tourEscort: {
      name: "Pandit Rajesh Tripathi",
      role: "Varanasi Spiritual & Cultural Historian",
      experience: "20 Years Experience",
      languages: "Hindi, Sanskrit, English, Bengali",
      badge: "UP Tourism Certified Senior Guide"
    }
  },

  7: {
    id: 7,
    slug: "himachal-manali-solang-shimla",
    title: "Himachal Snow Valley, Manali Solang & Shimla Pines",
    subtitle: "Mountain Wonderland - Rohtang Pass, Solang Valley Snow Sports, Mall Road Shimla & Kullu River Rafting",
    placeName: "Shimla, Kullu & Manali",
    state: "Himachal Pradesh",
    country: "India",
    region: "North India (Western Himalayas)",
    category: "Himalayan & Trekking",
    categorySlug: "himalayan-trekking",
    badge: "Himalayan Snow Choice",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "15 Travelers",
    rating: 4.93,
    reviewCount: 56,
    seasons: ['winter', 'spring-summer', 'autumn'],

    geo: {
      lat: 32.2432,
      lng: 77.1892,
      altitude: "2,050 m (Manali) to 3,978 m (Rohtang Pass)",
      idealDuration: "6 to 8 Days",
      bestTimeToVisit: "All Year (Snow: Dec-Feb, Pleasant: Mar-Jun)",
      climate: "Alpine & Cool (2°C - 20°C)",
      language: "Hindi, Pahari, Punjabi, English",
      airport: "Bhuntar Airport (KUU) - 50 km / Chandigarh (IXC) - 300 km",
      railway: "Kalka Railway Station (for Toy Train) / Chandigarh"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 22500,
      originalPrice: 26000,
      discountPercent: 13,
      standardPrice: 17999,
      deluxePrice: 22500,
      luxuryPrice: 32000,
      emiStartsAt: "₹1,875/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
          caption: "Snow-covered pine trees and Himalayan peaks of Solang Valley",
          tag: "Solang Valley"
        },
        {
          url: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80",
          caption: "Wooden Hadimba Devi Temple nestled in dense cedar forest",
          tag: "Manali Culture"
        }
      ]
    },

    overview: "The quintessential mountain escape in North India. Walk among towering cedar deodar forests, ride paragliders and snow scooters in Solang Valley, cross the engineering marvel Atal Tunnel, stroll colonial heritage on Mall Road in Shimla, and experience white water river rafting in the Beas River at Kullu.",

    highlights: [
      "Solang Valley excursion with paragliding, zorbing, and cable car ropeway.",
      "Drive through the world's longest highway tunnel above 10,000 ft: Atal Tunnel (9.02 km).",
      "Heritage walking tour of Shimla Mall Road, Christ Church, and Viceregal Lodge.",
      "Visit ancient 16th-century Hadimba Temple and natural sulphur hot springs at Vashisht.",
      "Stay in 4-star mountain view resorts with private balconies overlooking snow peaks."
    ],

    attractions: [
      {
        name: "Solang Valley & Atal Tunnel",
        type: "Snow Sports Arena & Himalayan Tunnel",
        timings: "9:00 AM - 6:00 PM",
        entryFee: "Entry Free / Cable Car ₹500",
        distance: "14 km from Manali",
        duration: "Full Day",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
        description: "A high mountain valley offering skiing in winter, paragliding in summer, and passage to Lahaul through Atal Tunnel.",
        tip: "Rent thermal snow boots and suit at certified Govt counters on the highway."
      }
    ],

    hotels: [
      {
        name: "The Himalayan Resort & Spa Manali",
        tier: "Luxury 5-Star Castle Resort",
        starRating: 4.92,
        location: "Hadimba Road, Manali",
        pricePerNight: "₹12,500 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Victorian Gothic Architecture", "Heated Swimming Pool", "Apple Orchard Grounds", "Fine Dining Dungeon Bar", "Fireplace Suites"],
        roomTypes: ["Grand Castle Room", "Luxury Orchard Cottage"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Magnificent castle-style stone resort nestled amidst century-old apple orchards."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Chandigarh/Delhi Pickup & Mountain Drive to Shimla",
        timeSlots: {
          morning: "Private pickup from Chandigarh Airport / Railway Station.",
          afternoon: "Scenic mountain climb through Shivalik hills via Solan and Dharampur.",
          evening: "Check in to Shimla resort. Evening stroll along Mall Road and Ridge."
        },
        desc: "Begin your Himalayan ascent to the Queen of the Hills.",
        meals: "Dinner Included",
        stay: "Shimla 4-Star Mountain View Resort",
        transport: "Private AC Cab",
        dayHighlights: ["Mountain Highway Drive", "Shimla Ridge Sunset", "Mall Road Walk"]
      }
    ],

    activities: [
      {
        name: "Solang Valley Tandem Paragliding",
        type: "High-Altitude Flight",
        difficulty: "Moderate",
        duration: "1 Hour",
        included: false,
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
        description: "Soar like an eagle above the valley with a licensed pilot and 360-degree snow peak views."
      }
    ],

    cuisine: [
      {
        name: "Himachali Siddu with Desi Ghee",
        type: "Traditional Mountain Bread",
        description: "Steamed fermented wheat bun stuffed with crushed walnuts, poppy seeds, and spices, served drenched in hot ghee.",
        topSpots: "Old Manali Cafes & Heritage Dhabas."
      },
      {
        name: "Himachali Dham Feast",
        type: "Traditional Festival Meal",
        description: "Rice served with Madra (chickpeas in spiced yogurt), Mah ki Dal, and sweet rice Meetha.",
        topSpots: "Traditional Shimla Kitchens."
      }
    ],

    inclusions: [
      "5 Nights in 4-Star Mountain View Resorts (Shimla + Manali)",
      "Daily Buffet Breakfasts & Dinners",
      "Private AC Cab for all transfers and mountain sightseeing",
      "Solang Valley and Atal Tunnel excursion permits",
      "All toll taxes, green permits, and parking charges included"
    ],

    exclusions: [
      "Train / Air tickets to Chandigarh",
      "Paragliding, skiing, and river rafting fees"
    ],

    transportation: {
      vehicleType: "Private AC Sedan / Innova Crysta",
      airportTransfers: "Included (Chandigarh pick-up & drop-off)",
      chaufferAssistance: "Experienced Himalayan hill driver",
      luggageAllowance: "2 Large Suitcases per vehicle",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Warm woolens, thermal inners, gloves, and woolen beanies (0°C - 15°C)",
        "Grip shoes for slippery snow tracks"
      ],
      healthAndSafety: ["Carry motion sickness pills for winding mountain routes"],
      permitsAndDocuments: ["Valid Govt Photo ID"],
      connectivityAndAtm: ["4G/5G mobile connectivity across Shimla and Manali"]
    },

    reviews: [
      {
        author: "Dhyani Joshi",
        location: "Ahmedabad, Gujarat",
        date: "June 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        comment: "Manali and Solang valley were spectacular. The driver was super safe on mountain curves, the hotel view was straight out of a postcard, and Atal tunnel was mind-blowing!"
      }
    ],

    tourEscort: {
      name: "Vikram Thakur",
      role: "Himachal Mountain Specialist",
      experience: "13 Years Experience",
      languages: "Hindi, Pahari, Punjabi, English",
      badge: "Himachal Tourism Approved Escort"
    }
  },

  8: {
    id: 8,
    slug: "andaman-coral-islands-scuba",
    title: "Andaman Coral Islands, Radhanagar Beach & Scuba Safari",
    subtitle: "Emerald Island Paradise - Asia's Best Radhanagar Beach, Scuba Diving with Sea Turtles & Cellular Jail Light Show",
    placeName: "Port Blair & Havelock Island",
    state: "Andaman & Nicobar",
    country: "India",
    region: "Bay of Bengal Islands",
    category: "Tropical & Beach",
    categorySlug: "tropical-beach",
    badge: "Pristine Island Paradise",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "12 Travelers",
    rating: 4.97,
    reviewCount: 49,
    seasons: ['autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 11.9761,
      lng: 92.9876,
      altitude: "Sea Level",
      idealDuration: "5 to 7 Days",
      bestTimeToVisit: "October to May",
      climate: "Tropical & Breezy (24°C - 31°C)",
      language: "Hindi, Bengali, English, Tamil",
      airport: "Veer Savarkar International Airport (IXZ), Port Blair",
      railway: "Sea connectivity via Catamaran Ferry"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 36000,
      originalPrice: 42000,
      discountPercent: 14,
      standardPrice: 29999,
      deluxePrice: 36000,
      luxuryPrice: 51000,
      emiStartsAt: "₹3,000/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
          caption: "Powder-white sand and turquoise waters of Radhanagar Beach, Havelock",
          tag: "Radhanagar Beach"
        },
        {
          url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
          caption: "Scuba diving among vibrant live coral reefs and tropical marine life",
          tag: "Scuba Diving"
        }
      ]
    },

    overview: "Explore India's most pristine tropical archipelago. Bask on Asia's famous Radhanagar Beach (Beach No. 7), cruise across the turquoise Andaman Sea on high-speed Makruzz catamarans, snorkel over live coral reefs at Elephant Beach, and pay homage to India's freedom fighters at the historic Cellular Jail.",

    highlights: [
      "Premium Makruzz / Nautika high-speed AC Catamaran ferry tickets between Port Blair & Havelock.",
      "Sunset at Radhanagar Beach — ranked among Asia's top 5 most beautiful beaches by TIME.",
      "Complimentary guided snorkeling session over live corals at Elephant Beach.",
      "Cellular Jail national memorial tour with evening Sound & Light laser show.",
      "Stay in luxury private beachside wooden cottages surrounded by coconut groves."
    ],

    attractions: [
      {
        name: "Radhanagar Beach (Beach No. 7)",
        type: "World-Class White Sand Beach",
        timings: "6:00 AM - 6:00 PM (Sunset around 5:15 PM)",
        entryFee: "Free Entry",
        distance: "11 km from Havelock Jetty",
        duration: "Half Day",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
        description: "A 2-km stretch of powdery white sand, turquoise shallow waves, and rainforest backdrop.",
        tip: "Walk 500 meters to the left from the entrance for total peaceful seclusion."
      }
    ],

    hotels: [
      {
        name: "Barefoot at Havelock Luxury Eco-Resort",
        tier: "Luxury 5-Star Beach Resort",
        starRating: 4.95,
        location: "Radhanagar Beach, Havelock Island",
        pricePerNight: "₹18,500 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Private Rainforest Path to Radhanagar Beach", "Indigenously Built Teak Wood Villas", "Ayurvedic Spa", "Organic Seafood Dining", "Dive Center"],
        roomTypes: ["Nicobari Villa", "Andaman Teak Villa"],
        checkIn: "2:00 PM",
        checkOut: "10:00 AM",
        highlight: "Hidden in tropical rainforest just a 2-minute barefoot walk to Radhanagar Beach."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair & Cellular Jail Light & Sound Show",
        timeSlots: {
          morning: "Private pickup from Veer Savarkar Airport (IXZ). Transfer to Port Blair hotel.",
          afternoon: "Check in, relax, and visit historic Cellular Jail (Kāla Pānī).",
          evening: "Attend the moving Cellular Jail Light & Sound show narrating the Indian freedom struggle."
        },
        desc: "Arrive in Port Blair and discover India's profound freedom history.",
        meals: "Dinner Included",
        stay: "Port Blair 4-Star Seafront Hotel",
        transport: "Private AC Cab",
        dayHighlights: ["Airport Pickup", "Cellular Jail National Memorial", "Sound & Light Show"]
      }
    ],

    activities: [
      {
        name: "Havelock Island Scuba Diving with Certified Master",
        type: "Underwater Exploration",
        difficulty: "Moderate (No swimming required)",
        duration: "2.5 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "Dive 12 meters into crystalline water to explore brain corals, clownfish, and sea turtles with HD video."
      }
    ],

    cuisine: [
      {
        name: "Grilled Andaman Red Snapper with Lemon Butter",
        type: "Fresh Catch Seafood",
        description: "Freshly caught local red snapper marinated with garlic, sea salt, and herbs, grilled on coconut husk charcoal.",
        topSpots: "Something Different Cafe & Barefoot Restaurant, Havelock."
      }
    ],

    inclusions: [
      "5 Nights in Beachside Luxury Cottages (Port Blair + Havelock)",
      "Daily Buffet Breakfasts & Dinners",
      "Premium AC Makruzz / Nautika Catamaran tickets between islands",
      "Cellular Jail Light & Sound Show entry passes",
      "Complimentary Snorkeling session at Elephant Beach",
      "All port transfers and private cabs on both islands"
    ],

    exclusions: [
      "Airfare to/from Port Blair (IXZ)",
      "Scuba Diving video certification packages"
    ],

    transportation: {
      vehicleType: "Private AC Cab on both Port Blair and Havelock islands + Luxury Catamaran Ferry",
      airportTransfers: "Included (Veer Savarkar Airport IXZ)",
      chaufferAssistance: "Friendly local island guide",
      luggageAllowance: "25 kg per person on Catamarans",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Light beachwear, cotton t-shirts, shorts, and swimwear",
        "Waterproof dry bag for boat transfers and island hopping",
        "Reef-safe sunscreen and polarized sunglasses"
      ],
      healthAndSafety: ["Carry seasickness tablets for catamaran boat crossing"],
      permitsAndDocuments: ["Valid Govt Photo ID (Aadhar Card / Passport)"],
      connectivityAndAtm: ["Airtel and BSNL have good connectivity on Havelock; withdraw cash in Port Blair"]
    },

    reviews: [
      {
        author: "Dhyani Joshi",
        location: "Ahmedabad, Gujarat",
        date: "June 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        comment: "Radhanagar beach is heaven on earth! Pure turquoise water, soft white sand, and the private cottage booked by SpidyWeb was magical. Catamaran ferry transfers were on time."
      }
    ],

    tourEscort: {
      name: "Anil Biswas",
      role: "Andaman Archipelago Coordinator",
      experience: "12 Years Experience",
      languages: "Hindi, Bengali, English, Tamil",
      badge: "Andaman Tourism Certified Guide"
    }
  },

  9: {
    id: 9,
    slug: "uttarakhand-rishikesh-mussoorie",
    title: "Uttarakhand Rishikesh Ganga Rafting & Mussoorie Hills",
    subtitle: "Yoga Capital & Queen of Hills - 16 km White Water Rafting, Riverside Glamping, Triveni Aarti & Kempty Falls",
    placeName: "Rishikesh, Haridwar & Mussoorie",
    state: "Uttarakhand",
    country: "India",
    region: "North India (Garhwal Himalayas)",
    category: "Himalayan & Trekking",
    categorySlug: "himalayan-trekking",
    badge: "Adventure & Spiritual Blend",
    durationDays: 5,
    durationNights: 4,
    durationText: "5 Days / 4 Nights",
    maxGuests: "16 Travelers",
    rating: 4.90,
    reviewCount: 44,
    seasons: ['spring-summer', 'autumn', 'winter'],

    geo: {
      lat: 30.0869,
      lng: 78.2676,
      altitude: "372 m (Rishikesh) / 2,005 m (Mussoorie)",
      idealDuration: "4 to 6 Days",
      bestTimeToVisit: "September to June",
      climate: "Crisp & Mountain Fresh (10°C - 26°C)",
      language: "Hindi, Garhwali, English",
      airport: "Jolly Grant Airport (DED), Dehradun - 25 km",
      railway: "Haridwar Junction (HW) / Rishikesh (YNRK)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 24500,
      originalPrice: 29000,
      discountPercent: 15,
      standardPrice: 19500,
      deluxePrice: 24500,
      luxuryPrice: 35000,
      emiStartsAt: "₹2,041/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
          caption: "Thrilling Grade-III white water river rafting on the holy Ganges in Rishikesh",
          tag: "River Rafting"
        },
        {
          url: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80",
          caption: "Lakshman Jhula suspension bridge over the Ganges river",
          tag: "Rishikesh Bridges"
        }
      ]
    },

    overview: "Experience the ultimate union of high-adrenaline adventure and sublime Himalayan serenity. Brave the 16 km Grade-III white water rapids from Shivpuri to Rishikesh, stay in luxury Swiss riverside camps with bonfires, witness the sacred evening Ganga Aarti at Har Ki Pauri and Triveni Ghat, and ascend to Mussoorie's misty Gun Hill and Kempty Falls.",

    highlights: [
      "16 KM Grade-III White Water River Rafting expedition with safety cliff jumping.",
      "Overnight luxury riverside glamping on the banks of the Ganges with evening bonfire.",
      "Witness sacred evening Ganga Aarti ceremony at Haridwar Har Ki Pauri & Triveni Ghat.",
      "Full-day excursion to Queen of the Hills Mussoorie (Mall Road, Kempty Falls, Gun Hill).",
      "Visit the Beatles Ashram (Chaurasi Kutia) and Lakshman Jhula suspension bridge."
    ],

    attractions: [
      {
        name: "Ganges River Rafting (Shivpuri to Rishikesh)",
        type: "Grade III White Water Rapids & Cliff Jump",
        timings: "8:00 AM - 4:00 PM",
        entryFee: "Included in Package",
        distance: "Shivpuri, Rishikesh",
        duration: "3 - 4 Hours",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        description: "Navigate famous rapids including Roller Coaster, Golf Course, and Club House followed by cliff jumping.",
        tip: "Wear quick-dry shorts and securely strap your sunglasses."
      }
    ],

    hotels: [
      {
        name: "Ananda in the Himalayas Luxury Spa Resort",
        tier: "Ultra-Luxury 5-Star Wellness Palace",
        starRating: 4.98,
        location: "Palace Estate, Narendra Nagar, Tehri Garhwal",
        pricePerNight: "₹38,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["100-Acre Maharaja Palace Estate", "World-Renowned Ayurvedic Spa", "Yoga & Vedanta Pavilions", "Hydrotherapy Pools", "Gourmet Organic Dining"],
        roomTypes: ["Palace Heritage Suite", "Valley View Deluxe Room"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Globally acclaimed wellness resort overlooking the Ganges valley and Rishikesh."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi / Dehradun Arrival & Riverside Camp Check-In",
        timeSlots: {
          morning: "Private pickup from Dehradun Airport (DED) or Delhi.",
          afternoon: "Check in to luxury riverside glamping camp at Shivpuri, Rishikesh.",
          evening: "Evening riverside walk, volleyball, campfire, and live barbecue dinner."
        },
        desc: "Check in beside the tranquil Ganges river in the foothills of the Himalayas.",
        meals: "Dinner Included",
        stay: "Luxury Riverside Swiss Camp, Shivpuri, Rishikesh",
        transport: "Private AC Cab",
        dayHighlights: ["Riverside Check-In", "Campfire & Barbecue"]
      }
    ],

    activities: [
      {
        name: "16 KM White Water Rafting & Cliff Jump",
        type: "Extreme Water Sport",
        difficulty: "Moderate",
        duration: "3.5 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        description: "Conquer thrilling rapids on the Ganges with international-standard rafts, helmets, and life jackets."
      }
    ],

    cuisine: [
      {
        name: "Garhwali Kafuli & Jhangore ki Kheer",
        type: "Traditional Mountain Food",
        description: "Nutritious green spinach and fenugreek curry slow-cooked with curd, served with barnyard millet sweet pudding.",
        topSpots: "Chotiwala Restaurant & Rishikesh Heritage Bistros."
      }
    ],

    inclusions: [
      "4 Nights Accommodation (Riverside Luxury Camp + Mussoorie 4-Star Resort)",
      "Daily Buffet Breakfasts and Dinners at all stays",
      "16 KM White Water River Rafting expedition with safety gear",
      "Haridwar Ganga Aarti tour & Mussoorie day sightseeing",
      "All private transportation, driver allowances, and tolls included"
    ],

    exclusions: [
      "Train / Air tickets to Dehradun",
      "Bungee jumping fees at Jumpin Heights (optional add-on ₹3,700)"
    ],

    transportation: {
      vehicleType: "Private AC Sedan / Innova Crysta",
      airportTransfers: "Included (Dehradun DED Airport)",
      chaufferAssistance: "Experienced Garhwal mountain chauffeur",
      luggageAllowance: "2 Large Suitcases per vehicle",
      fuelAndTolls: "100% Covered"
    },

    travelEssentials: {
      packingList: [
        "Quick-dry nylon clothing and water shoes for river rafting",
        "Light woolens for Mussoorie evenings (12°C - 18°C)",
        "Waterproof camera pouch and sunscreen"
      ],
      healthAndSafety: ["Follow river guide commands strictly; life jackets mandatory"],
      permitsAndDocuments: ["Valid Govt Photo ID"],
      connectivityAndAtm: ["5G mobile network available across Rishikesh, Haridwar, and Mussoorie"]
    },

    reviews: [
      {
        author: "Shubham Sharma",
        location: "Delhi NCR",
        date: "May 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "Rafting through the Ganges rapids was the most thrilling thing I've done! The riverside camp was super clean with hot water, and Mussoorie weather was blissful."
      }
    ],

    tourEscort: {
      name: "Deepak Rawat",
      role: "Garhwal Adventure & River Guide",
      experience: "11 Years Experience",
      languages: "Hindi, Garhwali, English",
      badge: "Uttarakhand Tourism Certified White Water Leader"
    }
  },

  10: {
    id: 10,
    slug: "darjeeling-gangtok-sikkim",
    title: "Darjeeling Queen of Hills & Gangtok Sikkim Monasteries",
    subtitle: "Eastern Himalayan Shangri-La - Sunrise over Mt. Kanchenjunga, Darjeeling Toy Train, Tsomgo Lake & Rumtek Monastery",
    placeName: "Darjeeling & Gangtok",
    state: "West Bengal & Sikkim",
    country: "India",
    region: "North-East India (Eastern Himalayas)",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Scenic Himalayan Panorama",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "12 Travelers",
    rating: 4.92,
    reviewCount: 39,
    seasons: ['spring-summer', 'autumn'],

    geo: {
      lat: 27.0410,
      lng: 88.2663,
      altitude: "2,042 m (Darjeeling) / 1,650 m (Gangtok) / 3,753 m (Tsomgo Lake)",
      idealDuration: "6 to 8 Days",
      bestTimeToVisit: "March to June / October to December",
      climate: "Misty & Alpine (6°C - 19°C)",
      language: "Nepali, Bengali, Hindi, English",
      airport: "Bagdogra Airport (IXB), Siliguri - 70 km",
      railway: "New Jalpaiguri Junction (NJP) - 75 km"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 28000,
      originalPrice: 32000,
      discountPercent: 12,
      standardPrice: 22999,
      deluxePrice: 28000,
      luxuryPrice: 41000,
      emiStartsAt: "₹2,333/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
          caption: "Morning golden sunrise over Mt. Kanchenjunga (8,586m) from Tiger Hill",
          tag: "Tiger Hill Sunrise"
        },
        {
          url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
          caption: "Glacial alpine waters of Tsomgo Lake at 12,400 ft in Sikkim",
          tag: "Tsomgo Lake"
        }
      ]
    },

    overview: "Witness the morning sun illuminate the world's third highest peak — Mt. Kanchenjunga (8,586m) — turning golden pink from Tiger Hill. Ride the UNESCO World Heritage Darjeeling Himalayan Railway Toy Train, visit century-old tea gardens, and travel into Sikkim to visit the sacred high-altitude Tsomgo Lake (12,400 ft) and grand Rumtek Monastery.",

    highlights: [
      "Tiger Hill 4:30 AM sunrise pass to view Mt. Kanchenjunga and Mt. Everest horizons.",
      "Ride the UNESCO World Heritage Darjeeling Steam Toy Train through Batasia Loop.",
      "Excursion to glacial Tsomgo (Changu) Lake and Baba Harbhajan Mandir at 12,400 ft.",
      "Visit Rumtek & Enchey Buddhist Monasteries with authentic prayer butter lamps.",
      "Stay in 4-star boutique Himalayan heritage hotels with panoramic mountain views."
    ],

    attractions: [
      {
        name: "Tiger Hill & Batasia Loop",
        type: "Panoramic Kanchenjunga Viewpoint & Railway Spiral",
        timings: "4:00 AM - 6:30 AM",
        entryFee: "Pass Included",
        distance: "11 km from Darjeeling",
        duration: "2.5 Hours",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "The premier vantage point in the Eastern Himalayas where first sunlight strikes the twin peaks of Kanchenjunga.",
        tip: "Reach the top deck by 4:30 AM with a warm cup of Darjeeling tea."
      }
    ],

    hotels: [
      {
        name: "The Mayfair Resort & Spa Darjeeling",
        tier: "Luxury 5-Star Heritage Hill Resort",
        starRating: 4.94,
        location: "Opposite Governor House, Darjeeling",
        pricePerNight: "₹14,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Colonial Heritage Decor", "Spa & Wellness Center", "Billiard Room & Library", "Magnolia Fine Dining", "Private Fireplace"],
        roomTypes: ["Kanchenjunga View Suite", "Heritage Deluxe Cottage"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Former summer residence of the Maharaja of Nazargunj with direct valley views."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Bagdogra / NJP Pickup & Scenic Drive to Darjeeling",
        timeSlots: {
          morning: "Private pickup from Bagdogra Airport (IXB) or New Jalpaiguri Station (NJP).",
          afternoon: "Ascend past lush tea gardens and Kurseong misty hills to Darjeeling (2,042m).",
          evening: "Check in to boutique hotel. Stroll through Chowrasta Mall and Glenary's bakery."
        },
        desc: "Travel into the misty tea mountains of the Queen of Hills.",
        meals: "Dinner Included",
        stay: "Darjeeling 4-Star Boutique Mountain Hotel",
        transport: "Private AC Cab",
        dayHighlights: ["Tea Mountain Climb", "Chowrasta Mall Evening", "Glenary's Cafe"]
      }
    ],

    activities: [
      {
        name: "Darjeeling Himalayan Toy Train Joyride",
        type: "UNESCO Heritage Railway",
        difficulty: "Easy",
        duration: "2 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        description: "Steam engine ride from Darjeeling to Ghoom (highest station at 7,407 ft) looping around Batasia war memorial."
      }
    ],

    cuisine: [
      {
        name: "Authentic Steamed Momos with Thukpa",
        type: "Himalayan Comfort Food",
        description: "Thin-crust steamed dumplings filled with spiced vegetables or chicken, served with fiery red cherry pepper (Dalle Khursani) chutney.",
        topSpots: "Kunga Restaurant & Glenary's, Darjeeling."
      }
    ],

    inclusions: [
      "5 Nights Accommodation in 4-Star Boutique Himalayan Hotels (Darjeeling + Gangtok)",
      "Daily Gourmet Buffet Breakfasts & Dinners",
      "Private AC Cab for all transfers and inter-state tours",
      "Tiger Hill sunrise pass and Tsomgo Lake permits",
      "All toll taxes, parking, and Sikkim entry permits included"
    ],

    exclusions: [
      "Flight tickets to/from Bagdogra (IXB)",
      "Nathula Pass Indo-China border special permit (Subject to Army permission ₹1,000/person)"
    ],

    transportation: {
      vehicleType: "Private Luxury SUV (Toyota Innova Crysta / Xylo)",
      airportTransfers: "Included (Bagdogra IXB Airport)",
      chaufferAssistance: "Experienced Eastern Himalayan mountain driver",
      luggageAllowance: "2 Large Suitcases per vehicle",
      fuelAndTolls: "100% Inclusive"
    },

    travelEssentials: {
      packingList: [
        "Warm jackets, fleece pullover, and woolen socks (6°C - 16°C)",
        "Gloves and windcheater for Tiger Hill sunrise (4:00 AM chill)"
      ],
      healthAndSafety: ["Carry routine medications and motion sickness tablets"],
      permitsAndDocuments: ["Carry 4 passport-size photos + Aadhar Card for Sikkim & Tsomgo permits"],
      connectivityAndAtm: ["Good 4G/5G mobile connectivity in towns; limited at Tsomgo Lake"]
    },

    reviews: [
      {
        author: "Yakshraj Jadeja",
        location: "Rajkot, Gujarat",
        date: "May 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        comment: "Tiger Hill sunrise over Kanchenjunga took our breath away. The tea estate walk and Tsomgo lake trip were perfectly organized with zero paperwork hassle."
      }
    ],

    tourEscort: {
      name: "Pemba Sherpa",
      role: "Eastern Himalayas Expedition Lead",
      experience: "14 Years Experience",
      languages: "Nepali, Hindi, Bengali, English",
      badge: "Sikkim Tourism Master Guide"
    }
  },

  11: {
    id: 11,
    slug: "agra-golden-triangle-taj-mahal",
    title: "Agra & Golden Triangle - Taj Mahal Sunrise & Mughal Forts",
    subtitle: "Wonder of the World - Taj Mahal Dawn, Agra Red Fort, Fatehpur Sikri & Royal Mughal Artisans",
    placeName: "Agra, Fatehpur Sikri & Delhi",
    state: "Uttar Pradesh & Delhi",
    country: "India",
    region: "North India",
    category: "Cultural & Heritage",
    categorySlug: "cultural-heritage",
    badge: "World Wonder",
    durationDays: 4,
    durationNights: 3,
    durationText: "4 Days / 3 Nights",
    maxGuests: "15 Travelers",
    rating: 4.95,
    reviewCount: 58,
    seasons: ['autumn', 'winter', 'spring-summer'],

    geo: {
      lat: 27.1751,
      lng: 78.0421,
      altitude: "171 m",
      idealDuration: "3 to 4 Days",
      bestTimeToVisit: "October to March",
      climate: "Pleasant & Sunny (12°C - 26°C)",
      language: "Hindi, Urdu, English",
      airport: "Indira Gandhi International Airport (DEL), Delhi - 200 km (Yamuna Expressway)",
      railway: "Agra Cantt (AGC) / Hazrat Nizamuddin"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 17500,
      originalPrice: 21000,
      discountPercent: 16,
      standardPrice: 13999,
      deluxePrice: 17500,
      luxuryPrice: 28000,
      emiStartsAt: "₹1,458/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
          caption: "Pristine white marble Taj Mahal reflecting in Charbagh water canals at sunrise",
          tag: "Taj Mahal"
        },
        {
          url: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1000&q=80",
          caption: "Massive red sandstone ramparts of Agra Fort overlooking the Yamuna River",
          tag: "Agra Fort"
        }
      ]
    },

    overview: "Gaze upon the world's most breathtaking monument to love — the Taj Mahal. Experience the ivory-white marble mausoleum bathed in golden sunrise light, explore the massive red sandstone walls of Agra Fort, visit the deserted ghost city of Fatehpur Sikri with the towering Buland Darwaza, and watch master marble inlay (Pietra Dura) artisans at work.",

    highlights: [
      "Sunrise VIP entry pass to Taj Mahal with official Govt certified historian escort.",
      "Guided architectural tour of Agra Fort (Jahangir Palace, Khas Mahal, Diwan-i-Khas).",
      "Half-day excursion to UNESCO World Heritage Fatehpur Sikri & Salim Chishti Dargah.",
      "Sunset view of the Taj Mahal from Mehtab Bagh gardens across the Yamuna River.",
      "Stay in premier 5-star hotel near the Taj Mahal with rooftop monument views."
    ],

    attractions: [
      {
        name: "Taj Mahal (UNESCO World Heritage)",
        type: "17th-Century White Marble Monument & Mausoleum",
        timings: "Sunrise to Sunset (Closed on Fridays)",
        entryFee: "₹50 Indian / ₹1,100 Foreign (Included in VIP Tour)",
        distance: "Central Agra",
        duration: "3 Hours",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
        description: "Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, adorned with semi-precious stone inlays.",
        tip: "Enter through the East Gate at 5:45 AM for uncrowded sunrise photos."
      }
    ],

    hotels: [
      {
        name: "The Oberoi Amarvilas Agra",
        tier: "Ultra-Luxury 5-Star Hotel",
        starRating: 4.98,
        location: "Taj East Gate Road, Agra",
        pricePerNight: "₹36,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Uninterrupted Taj Mahal Views from Every Room", "Private Golf Buggy to Taj Gate", "Tiered Reflection Pools", "Mughal Architecture", "Oberoi Spa"],
        roomTypes: ["Premier Taj View Room", "Luxury Balcony Suite"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Located just 600 meters from the Taj Mahal with private buggies and monument-facing bathtubs."
      },
      {
        name: "ITC Mughal, A Luxury Collection Hotel",
        tier: "5-Star Deluxe Resort",
        starRating: 4.9,
        location: "Fatehabad Road, Agra",
        pricePerNight: "₹9,500 / night (Included in Package)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["35 Acres Landscaped Gardens", "Kaya Kalp Royal Spa", "Peshawri Fine Dining", "Swimming Pools", "Free Wi-Fi"],
        roomTypes: ["Mughal Chamber", "Royal Mughal Suite"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Aga Khan Award-winning architecture capturing the essence of the Mughal era."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Delhi to Agra via Yamuna Expressway & Mehtab Bagh Sunset",
        timeSlots: {
          morning: "Private pickup from Delhi Airport / Hotel. Smooth drive via 6-lane Yamuna Expressway (3 hours).",
          afternoon: "Check in to ITC Mughal 5-Star Resort. Settle in and enjoy welcome Mughal sherbet.",
          evening: "Sunset visit to Mehtab Bagh for panoramic sunset view of the Taj Mahal reflected across the Yamuna."
        },
        desc: "Arrive in the Mughal capital with executive highway transfers.",
        meals: "Dinner Included",
        stay: "ITC Mughal 5-Star Luxury Resort, Agra",
        transport: "Private AC Cab",
        dayHighlights: ["Yamuna Expressway Drive", "ITC Mughal Check-In", "Mehtab Bagh Sunset"]
      }
    ],

    activities: [
      {
        name: "Taj Mahal Sunrise Guided Heritage Walk",
        type: "Monument Tour",
        difficulty: "Easy Walk",
        duration: "3 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80",
        description: "Walk through the Great Gate into Charbagh gardens with a master historian explaining the symmetrical secrets of Shah Jahan."
      }
    ],

    cuisine: [
      {
        name: "Authentic Agra Petha (Kesar & Angoori)",
        type: "Historic Mughal Sweet",
        description: "Translucent soft candied ash gourd infused with saffron syrup, rose water, and kewra essence.",
        topSpots: "Panchi Petha, Hari Parbat, Agra."
      },
      {
        name: "Mughlai Dal Makhani & Tandoori Raan",
        type: "Slow-Cooked Royal Feast",
        description: "Slow-simmered black lentils cooked overnight with cream and butter, paired with tender marinated leg of lamb.",
        topSpots: "Peshawri at ITC Mughal & Pinch of Spice."
      }
    ],

    inclusions: [
      "3 Nights in 5-Star Luxury Resort in Agra",
      "Daily Gourmet Buffet Breakfasts & Dinners",
      "Private Chauffeur AC Sedan for entire Delhi-Agra-Fatehpur Sikri tour",
      "VIP Sunrise entry tickets to Taj Mahal, Agra Fort, and Fatehpur Sikri",
      "Official Govt of India Certified Monument Escort Guide",
      "All expressway toll taxes, parking, and monument entry charges"
    ],

    exclusions: [
      "Airfare / Train tickets to Delhi",
      "Personal monument camera permits and marble souvenir shopping"
    ],

    transportation: {
      vehicleType: "Private AC Toyota Innova Crysta / Luxury Sedan",
      airportTransfers: "Included (Delhi DEL Airport pick-up & drop-off)",
      chaufferAssistance: "Uniformed executive highway chauffeur",
      luggageAllowance: "2 Large Suitcases + 2 Hand Bags",
      fuelAndTolls: "100% Inclusive of Yamuna Expressway tolls"
    },

    travelEssentials: {
      packingList: [
        "Light comfortable cotton clothes for sightseeing",
        "Slip-on shoes or socks (shoe covers are provided for Taj marble plinth)",
        "Sunglasses and sunhat for open courtyards"
      ],
      healthAndSafety: ["Bottled mineral water provided continuously in vehicle"],
      permitsAndDocuments: ["Valid Govt Photo ID (Aadhar / Passport) mandatory for monument entry"],
      connectivityAndAtm: ["5G mobile network available throughout Agra and expressways"]
    },

    reviews: [
      {
        author: "Krrish Modi",
        location: "Ahmedabad, Gujarat",
        date: "May 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "Seeing the Taj Mahal at sunrise without crowds was a dream come true. The guide provided by SpidyWeb was a fountain of history and knew all the best photography angles!"
      }
    ],

    tourEscort: {
      name: "Mohammad Irfan",
      role: "Mughal History & Architecture Guide",
      experience: "17 Years Experience",
      languages: "Hindi, Urdu, English, French",
      badge: "Archaeological Survey of India (ASI) Approved Guide"
    }
  },

  12: {
    id: 12,
    slug: "swiss-alps-glacier-interlaken",
    title: "Swiss Alps Majestic Glacier & Interlaken Adventure",
    subtitle: "Crown of Europe - Jungfraujoch (Top of Europe), Zermatt Matterhorn, Glacier Grottos & Lake Brienz Cruise",
    placeName: "Interlaken, Zermatt & Zurich",
    state: "Bernese Oberland & Valais",
    country: "Switzerland",
    region: "Central Europe",
    category: "Himalayan & Trekking",
    categorySlug: "himalayan-trekking",
    badge: "International Flagship",
    durationDays: 8,
    durationNights: 7,
    durationText: "8 Days / 7 Nights",
    maxGuests: "10 Travelers",
    rating: 4.92,
    reviewCount: 34,
    seasons: ['winter', 'spring-summer', 'autumn'],

    geo: {
      lat: 46.6863,
      lng: 7.8632,
      altitude: "566 m (Interlaken) to 3,454 m (Jungfraujoch)",
      idealDuration: "7 to 10 Days",
      bestTimeToVisit: "All Year (Snow/Ski: Dec-Mar, Alpine Meadows: May-Sep)",
      climate: "Alpine & Crisp (-4°C to 20°C)",
      language: "German, Swiss-German, French, English",
      airport: "Zurich Airport (ZRH) / Geneva (GVA)",
      railway: "Interlaken Ost & West / Zermatt Station"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 175000,
      originalPrice: 195000,
      discountPercent: 10,
      standardPrice: 145000,
      deluxePrice: 175000,
      luxuryPrice: 240000,
      emiStartsAt: "₹14,583/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
          caption: "Iconic pyramid-shaped Matterhorn peak reflecting in alpine Riffelsee lake",
          tag: "Matterhorn Zermatt"
        },
        {
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80",
          caption: "Eiger Express tricable gondola ascending to Jungfraujoch Top of Europe",
          tag: "Jungfraujoch"
        }
      ]
    },

    overview: "Experience the grandeur of the Swiss Alps in complete luxury. Ascend to Jungfraujoch (3,454m) — the Top of Europe — step into the eternal Ice Palace, cruise turquoise Lake Brienz, travel via panoramic Swiss scenic trains to car-free Zermatt with iconic Matterhorn vistas, and indulge in Swiss chocolates and cheeses.",

    highlights: [
      "Jungfraujoch - Top of Europe excursion with Eiger Express tricable gondola pass.",
      "8-Day 1st Class Swiss Travel Pass providing unlimited train, boat, and bus travel.",
      "Gornergrat open-air cogwheel railway excursion to Matterhorn glacier panorama (10,134 ft).",
      "Scenic turquoise cruise on Lake Brienz and Grindelwald First Cliff Walk.",
      "Stay in 4-star traditional alpine Swiss chalets and premier Zurich city hotels."
    ],

    attractions: [
      {
        name: "Jungfraujoch - Top of Europe (3,454m)",
        type: "Highest Railway Station in Europe & Aletsch Glacier",
        timings: "8:00 AM - 4:30 PM",
        entryFee: "Excursion Pass Included (Value CHF 220)",
        distance: "Interlaken Terminal",
        duration: "Full Day",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
        description: "Perched between Mönch and Jungfrau peaks with Sphinx Observatory views of the Great Aletsch Glacier.",
        tip: "Walk through the Ice Palace with hand-sculpted eagle and bear ice sculptures."
      }
    ],

    hotels: [
      {
        name: "Victoria-Jungfrau Grand Hotel & Spa",
        tier: "Ultra-Luxury 5-Star Swiss Palace",
        starRating: 4.96,
        location: "Höheweg 41, Interlaken",
        pricePerNight: "₹42,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Direct View of Jungfrau Massif", "5,500 sqm Nescens Spa", "Indoor & Outdoor Heated Pools", "Gourmet Swiss French Dining", "Private Tennis Courts"],
        roomTypes: ["Jungfrau View Deluxe Suite", "Alpine Executive Room"],
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        highlight: "150-year-old historic grand palace hotel overlooking the iconic Jungfrau peaks."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Zurich Arrival & Scenic Train to Interlaken",
        timeSlots: {
          morning: "Arrival at Zurich Airport (ZRH). Board 1st Class panoramic train along Lake Thun to Interlaken.",
          afternoon: "Check in to traditional Swiss alpine chalet hotel. Stroll along Höheweg boulevard.",
          evening: "Welcome Swiss fondue dinner overlooking illuminated alpine peaks."
        },
        desc: "Arrive in Switzerland and travel seamlessly with your 1st Class Swiss Travel Pass.",
        meals: "Swiss Fondue Dinner Included",
        stay: "Interlaken 4-Star Alpine Chalet Resort",
        transport: "1st Class Swiss Rail",
        dayHighlights: ["Zurich Arrival", "Panoramic Swiss Train", "Swiss Cheese Fondue"]
      }
    ],

    activities: [
      {
        name: "Jungfraujoch Ice Palace & Sphinx Observatory",
        type: "Glacier Experience",
        difficulty: "Easy / Dress Warm",
        duration: "4 Hours",
        included: true,
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80",
        description: "Step onto Europe's largest glacier and explore blue ice tunnels carved deep inside the mountain."
      }
    ],

    cuisine: [
      {
        name: "Authentic Swiss Cheese Fondue & Rösti",
        type: "National Dish",
        description: "Melted Gruyère and Emmental cheese infused with white wine and garlic, eaten with crusty bread and crisp golden potato Rösti.",
        topSpots: "Restaurant Taverne, Interlaken & Swiss Chalet Zermatt."
      },
      {
        name: "Swiss Alpine Chocolate & Maison Cailler Tasting",
        type: "Gourmet Confectionery",
        description: "Velvety smooth Swiss milk chocolates and pralines crafted with fresh Alpine milk.",
        topSpots: "Funky Chocolate Club, Interlaken & Sprüngli, Zurich."
      }
    ],

    inclusions: [
      "7 Nights Accommodation in 4-Star Swiss Chalets and City Hotels (Interlaken, Zermatt, Zurich)",
      "Daily Swiss Gourmet Buffet Breakfasts and 4 Dinners",
      "8-Day 1st Class Swiss Travel Pass (Unlimited trains, boats, buses, and 500+ museums)",
      "Jungfraujoch - Top of Europe full excursion pass with Eiger Express gondola",
      "Gornergrat Matterhorn cogwheel train ticket in Zermatt",
      "Lake Brienz cruise pass & Grindelwald First Cliff Walk"
    ],

    exclusions: [
      "International flights to/from Zurich (ZRH)",
      "Swiss Schengen Visa processing fee (Assistance provided by SpidyWeb)",
      "Personal ski equipment rentals and paragliding in Interlaken"
    ],

    transportation: {
      vehicleType: "1st Class Swiss Federal Railways (SBB) + Panoramic Mountain Trains & Gondolas",
      airportTransfers: "Included via 1st Class Rail directly from Zurich Airport terminal",
      chaufferAssistance: "SpidyWeb European concierge on call 24/7",
      luggageAllowance: "2 Large Suitcases per traveler on Swiss trains",
      fuelAndTolls: "All rail and cable passes 100% included"
    },

    travelEssentials: {
      packingList: [
        "Warm layered clothing: thermal base layer, fleece, and waterproof windcheater",
        "Sturdy walking / hiking shoes with good traction for glacier platforms",
        "High-protection sunglasses (UV reflection is intense on glacier snow)"
      ],
      healthAndSafety: ["Jungfraujoch is at 3,454m; walk at a relaxed pace"],
      permitsAndDocuments: ["Valid Passport with minimum 6 months validity + Swiss Schengen Visa"],
      connectivityAndAtm: ["Free Wi-Fi at all Swiss hotels and train stations; international roaming or Swiss eSIM"]
    },

    reviews: [
      {
        author: "Krrish Modi",
        location: "Ahmedabad, Gujarat",
        date: "July 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        comment: "Jungfraujoch and Zermatt were an absolute dream! The 1st Class Swiss Travel Pass made train travel effortless. Swiss hospitality and scenic views beyond words."
      }
    ],

    tourEscort: {
      name: "Hansruedi Keller",
      role: "Swiss Alps & Europe Tour Director",
      experience: "21 Years Experience",
      languages: "English, German, French, Italian, Hindi basic",
      badge: "Switzerland Tourism Gold Partner Guide"
    }
  }  ,
  13: {
    id: 13,
    slug: "bali-nusa-penida-tropical-luxury-escape",
    title: "Bali & Nusa Penida Tropical Luxury Villas & Cliff Temples",
    subtitle: "Island of the Gods - Ubud Rainforest Infinity Pools, Kelingking Cliff & Beach Clubs",
    placeName: "Ubud, Seminyak & Nusa Penida",
    state: "Bali",
    country: "Indonesia",
    region: "Southeast Asia",
    category: "World Wonders",
    categorySlug: "world-wonders",
    badge: "Top Global Island",
    durationDays: 7,
    durationNights: 6,
    durationText: "7 Days / 6 Nights",
    maxGuests: "10 Travelers",
    rating: 4.98,
    reviewCount: 94,
    seasons: ["spring-summer", "monsoon", "autumn", "winter"],

    geo: {
      lat: -8.5195,
      lng: 115.2631,
      altitude: "Sea Level to 600m (Ubud)",
      idealDuration: "6 to 8 Days",
      bestTimeToVisit: "All Year (Peak Dry Sun: April to October)",
      climate: "Tropical Balmy (24°C - 31°C)",
      language: "Balinese, Indonesian, English widely spoken",
      airport: "Ngurah Rai International Airport (DPS) - 35 km",
      railway: "Fast Speed Catamaran (Sanur Harbour to Nusa Penida)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 48999,
      originalPrice: 58999,
      discountPercent: 17,
      standardPrice: 39999,
      deluxePrice: 48999,
      luxuryPrice: 68999,
      emiStartsAt: "₹4,083/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
          caption: "Handara Gate & Ancient Balinese Cloud Shrines",
          tag: "Culture"
        },
        {
          url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
          caption: "Ubud Tropical Jungle Private Pool Villa",
          tag: "Resorts"
        },
        {
          url: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
          caption: "Nusa Penida Kelingking T-Rex Dinosaur Cliff Beach",
          tag: "Beaches"
        },
        {
          url: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80",
          caption: "Tegallalang Stepped Emerald Rice Terraces",
          tag: "Landscapes"
        },
        {
          url: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1000&q=80",
          caption: "Uluwatu Ocean Cliff Temple with Kecak Fire Dance",
          tag: "Heritage"
        }
      ]
    },

    summary: "Immerse yourself in tropical Bali luxury: private rainforest pool villas in Ubud, iconic Nusa Penida Kelingking cliff, sacred water temples, and sunset beach clubs in Seminyak.",

    description: "Experience the quintessential island paradise of Bali with 100% curated luxury. From greeting the morning sun amidst emerald Tegallalang rice paddies to sipping coconuts at your private Ubud jungle pool villa, exploring dramatic Nusa Penida coastal arches, and witnessing the mystical sunset Kecak fire dance at Uluwatu Cliff Temple. Includes private AC transport, island speedboats, and dedicated 24/7 English/Hindi speaking tour concierges.",

    highlights: [
      "2 Nights in Ubud Luxury Rainforest Private Pool Villa + 3 Nights in 5-Star Seminyak Beachfront Resort",
      "Full Day Nusa Penida Island Speedboat Tour (Kelingking Beach, Broken Beach & Angel's Billabong)",
      "Floating Tropical Breakfast in Ubud Private Infinity Pool & Bali Coffee Tasting",
      "Uluwatu Sunset Ocean Cliff Temple with Traditional Kecak Fire Dance",
      "Tegallalang Giant Jungle Valley Swing & Tegenungan Cascading Waterfalls",
      "Sunset Seafood Candlelight Dinner on the sands of Jimbaran Bay"
    ],

    attractions: [
      {
        name: "Kelingking T-Rex Cliff Beach",
        type: "Natural Wonder / Ocean Cliff",
        duration: "3 - 4 Hours",
        timing: "Best at Morning (9:00 AM - 1:00 PM)",
        entryFee: "Included in Island Pass",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
        desc: "World-famous dinosaur-shaped coastal promontory plunging into turquoise Indian Ocean waters.",
        tip: "Wear comfortable walking shoes with good grip for cliff-edge photo viewpoints."
      },
      {
        name: "Tegallalang Rice Terraces & Jungle Swing",
        type: "Cultural Landscape & Adventure",
        duration: "2.5 Hours",
        timing: "8:00 AM - 6:00 PM",
        entryFee: "Included in Tour Stack",
        image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80",
        desc: "Ancient 8th-century Subak cooperative irrigation system cascading along verdant jungle ravines.",
        tip: "Early mornings feature magical light rays filtering through misty coconut palms."
      },
      {
        name: "Uluwatu Ocean Cliff Temple",
        type: "Ancient Hindu Cliff Shrine",
        duration: "2 Hours",
        timing: "4:30 PM - 7:30 PM",
        entryFee: "Included with VIP Fire Dance Pass",
        image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80",
        desc: "Perched 70 meters atop steep sheer sea cliffs overlooking dramatic crashing Indian Ocean surf.",
        tip: "Arrive by 5:15 PM to claim top amphitheater seats for the sunset fire performance."
      }
    ],

    hotels: [
      {
        name: "Kamandalu Ubud Rainforest Resort & Spa",
        tier: "5-Star Luxury Pool Villa",
        starRating: 4.95,
        location: "Jl. Raya Andong, Banjar Nagi, Ubud, Bali",
        pricePerNight: "₹18,500 / night (Included in Deluxe Package)",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
        amenities: ["Private Infinity Valley Pool", "Floating Gourmet Breakfast", "Chaya Ayurvedic Spa", "Forest Swing", "Bicycle Village Tours"],
        roomTypes: ["Ubud Valley View Villa", "Garden Pool Villa"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Private thatched-roof wooden villas suspended above emerald river valleys."
      },
      {
        name: "Ayana Resort & Spa Beachfront Jimbaran",
        tier: "5-Star Luxury Ocean Resort",
        starRating: 4.9,
        location: "Karang Mas Estate, Jimbaran, South Bali",
        pricePerNight: "₹24,000 / night (Included for Nights 3-6)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Rock Bar Ocean View", "12 Freshwater Swimming Pools", "Private White Sand Beach", "Thalassotherapy Spa", "Sunset Lounges"],
        roomTypes: ["Ocean View Deluxe", "Terrace Suite"],
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        highlight: "Home to the world-renowned Rock Bar built on natural rocks 14 meters above the crashing surf."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive in Bali & Scenic Transfer to Ubud Rainforest Villa",
        timeSlots: {
          morning: "Warm greeting at Ngurah Rai International Airport (DPS) with fragrant frangipani flower garlands and bottled chilled coconut water.",
          afternoon: "Scenic 1.5-hour transfer to Ubud. Check-in to your private pool villa at Kamandalu Resort. Settle in and unwind with a welcome herbal massage.",
          evening: "Sunset walk through central Ubud Art Market and royal Puri Saren Palace followed by an authentic Balinese feast."
        },
        desc: "Begin your tropical Bali retreat with personalized VIP airport pickup and luxury transfer into the misty heart of Ubud."
      },
      {
        day: 2,
        title: "Floating Breakfast, Tegallalang Rice Terraces & Giant Jungle Swing",
        timeSlots: {
          morning: "Iconic Balinese Floating Breakfast served in your private villa pool with fresh dragonfruit, croissants, and tropical juices.",
          afternoon: "Visit the cascading emerald Tegallalang Rice Terraces. Glide over the jungle canopy on the famous Bali Jungle Swing.",
          evening: "Relaxing afternoon tea overlooking the Ayung River valley followed by organic farm-to-table dinner in Ubud."
        },
        desc: "A bucket-list day celebrating Bali's lush interior, verdant stepped paddies, and thrilling jungle valley swings."
      },
      {
        day: 3,
        title: "Nusa Penida Island Expedition: Kelingking & Broken Beach",
        timeSlots: {
          morning: "Early transfer to Sanur Harbour for a 45-minute premium high-speed catamaran crossing to Nusa Penida island.",
          afternoon: "Stand in awe at Kelingking T-Rex Beach, peer through the natural sea arch at Broken Beach, and swim in the emerald tidal waters of Angel's Billabong.",
          evening: "High-speed return to main island. Transfer to beachfront luxury stay at Ayana Resort Jimbaran."
        },
        desc: "Marvel at the dramatic limestone cliffs, manta ray waters, and world-famous coastal viewpoints of Nusa Penida."
      },
      {
        day: 4,
        title: "Water Temples, Sacred Monkey Forest & Seminyak Beach Sunset",
        timeSlots: {
          morning: "Wander the shaded nutmeg groves of the Sacred Ubud Monkey Forest with playful Macaques and carved ancient moss shrines.",
          afternoon: "Tirta Empul holy spring water cleansing ritual experience accompanied by a licensed cultural guide.",
          evening: "Catch golden hour cocktails at Seminyak's stylish beachfront clubs with live acoustic music."
        },
        desc: "Explore Bali's spiritual soul through ancient forest temples and lively sunset shores."
      },
      {
        day: 5,
        title: "Uluwatu Cliff Temple, Sunset Kecak Fire Dance & Jimbaran Seafood",
        timeSlots: {
          morning: "Lazy morning by the pool or optional Balinese cooking masterclass with an executive chef.",
          afternoon: "Scenic coastal drive to the southern Bukit Peninsula. Visit Uluwatu Temple perched 70 meters above crashing Indian Ocean waves.",
          evening: "Witness the spellbinding sunset Kecak Fire Dance followed by a candlelit beach seafood dinner with fresh grilled lobster on Jimbaran Bay."
        },
        desc: "Spectacular ocean vistas, fire-dancing legends, and beachside culinary indulgence."
      },
      {
        day: 6,
        title: "Spa Rejuvenation & Souvenir Shopping in Kuta & Seminyak",
        timeSlots: {
          morning: "2-hour Balinese Royal Boreh body scrub and aromatherapy massage at Ayana Spa.",
          afternoon: "Boutique shopping in Seminyak for handmade silver jewelry, woven rattan bags, and Indonesian batik.",
          evening: "Farewell sunset dinner cruise along the southern coastline."
        },
        desc: "Unwind in blissful relaxation and collect cherished handcrafted treasures."
      },
      {
        day: 7,
        title: "Farewell Island of the Gods - Airport Departure",
        timeSlots: {
          morning: "Gourmet buffet breakfast overlooking the ocean. Morning swim in the multi-tier cliffside pool.",
          afternoon: "Private luxury AC transfer to Denpasar Airport (DPS) for your homeward flight with cherished memories."
        },
        desc: "Depart with golden tropical memories, bronzed skin, and refreshed soul."
      }
    ],

    activities: [
      { name: "Private Pool Floating Breakfast", duration: "1.5 Hours", category: "Culinary Luxury", desc: "Enjoy your morning meal served on floating wooden trays in your private pool." },
      { name: "Nusa Penida High-Speed Catamaran Cruise", duration: "Full Day", category: "Island Cruise", desc: "Crossing turquoise waters to explore world-famous limestone sea cliffs." },
      { name: "Tegallalang Jungle Giant Swing", duration: "45 Minutes", category: "Adventure", desc: "Soar over palm tree canopies with breathtaking panoramic valley vistas." },
      { name: "Jimbaran Beach Candlelight Seafood Dinner", duration: "2 Hours", category: "Dining Experience", desc: "Fresh caught red snapper, king prawns, and lobster grilled over coconut husks." }
    ],

    inclusions: [
      "2 Nights in Ubud 5-Star Rainforest Private Pool Villa (Kamandalu Resort)",
      "4 Nights in 5-Star Luxury Ocean Resort (Ayana Resort Jimbaran)",
      "Daily gourmet buffet breakfasts including 1 signature Floating Pool Breakfast",
      "Full Day Nusa Penida Island Tour with fast catamaran tickets, private island cab & lunch",
      "Private AC luxury transport for all airport transfers and sightseeing excursions",
      "Uluwatu Sunset Temple entry & VIP Kecak Fire Dance amphitheater tickets",
      "Jimbaran Bay 3-Course Beachfront Sunset Seafood Candlelight Dinner",
      "24/7 Dedicated English & Hindi speaking tour concierge"
    ],

    exclusions: [
      "International flights to/from Denpasar Bali (DPS)",
      "Indonesia Visa on Arrival (~₹2,900 paid directly at airport counter)",
      "Personal water sports, scuba diving gear, and alcohol beverages"
    ],

    transportation: {
      vehicleType: "Private AC Luxury Toyota Innova Crysta / Alphard",
      airportTransfers: "Included from Denpasar (DPS) Terminal with meet & greet",
      chaufferAssistance: "English/Hindi speaking private driver-cum-guide",
      luggageAllowance: "2 Large Suitcases per traveler",
      fuelAndTolls: "100% all fuel, parking fees, and road tolls included"
    },

    travelEssentials: {
      packingList: ["Light breathable cottons, resort wear, swimwear, reef-safe sunscreen, sunglasses, comfortable walking sneakers"],
      healthAndSafety: ["Drink bottled water, apply tropical mosquito repellent in Ubud evening walks"],
      permitsAndDocuments: ["Indian Passport valid for at least 6 months from arrival date; Indonesia Tourist Visa on arrival"],
      connectivityAndAtm: ["Local 4G/5G Tourist eSIM or physical SIM provided at arrival; ATMs widely available in all tourist zones"]
    },

    reviews: [
      {
        author: "Pooja & Rohan Sharma",
        location: "Mumbai, India",
        date: "August 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
        comment: "Bali was paradise! The private pool villa in Ubud with floating breakfast was straight out of a dream. SpidyWeb organized our Nusa Penida boat and Uluwatu tickets seamlessly with zero waiting. Highly recommended!"
      }
    ],

    tourEscort: {
      name: "Wayan Sudarta",
      role: "Senior Bali & Nusa Penida Island Guide",
      experience: "14 Years Experience",
      languages: "English, Indonesian, Hindi basic, Balinese",
      badge: "Bali Tourism Board Certified Master Escort"
    }
  },

  14: {
    id: 14,
    slug: "dubai-abu-dhabi-futuristic-desert-oasis",
    title: "Dubai & Abu Dhabi Sky Towers, Desert Safari & Palm Jumeirah",
    subtitle: "City of Gold - Burj Khalifa 124th Floor, Red Dune Safari & Atlantis Aquaventure",
    placeName: "Dubai & Abu Dhabi",
    state: "Emirate of Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    category: "World Wonders",
    categorySlug: "world-wonders",
    badge: "Luxury Global Choice",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "14 Travelers",
    rating: 4.95,
    reviewCount: 112,
    seasons: ["autumn", "winter", "spring-summer"],

    geo: {
      lat: 25.1304,
      lng: 55.1171,
      altitude: "Sea Level",
      idealDuration: "5 to 7 Days",
      bestTimeToVisit: "October to April (Mild & Sunny 20°C - 28°C)",
      climate: "Pleasant Desert Sunshine (20°C - 30°C)",
      language: "Arabic, English (Official business), Hindi widely understood",
      airport: "Dubai International Airport (DXB) - 15 km",
      railway: "Dubai Metro Red Line & Palm Jumeirah Monorail"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 52999,
      originalPrice: 62999,
      discountPercent: 16,
      standardPrice: 42999,
      deluxePrice: 52999,
      luxuryPrice: 79999,
      emiStartsAt: "₹4,416/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
          caption: "Burj Khalifa Tower Soaring above Downtown Dubai Fountains",
          tag: "Iconic"
        },
        {
          url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
          caption: "Thrilling 4x4 Desert Safari over Golden Lahbab Dunes",
          tag: "Adventure"
        },
        {
          url: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
          caption: "Sheikh Zayed Grand Mosque Pure White Marble Domes, Abu Dhabi",
          tag: "Heritage"
        },
        {
          url: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80",
          caption: "Palm Jumeirah Island Crescent & Atlantis The Palm",
          tag: "Resorts"
        },
        {
          url: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1000&q=80",
          caption: "Dubai Marina Skyline Illuminated by Night",
          tag: "Nightlife"
        }
      ]
    },

    summary: "Discover the glamour of the UAE: stand atop the world at Burj Khalifa, conquer golden desert dunes in 4x4 Land Cruisers, stay at iconic Palm Jumeirah, and visit the breathtaking Sheikh Zayed Grand Mosque in Abu Dhabi.",

    description: "The ultimate luxury Middle Eastern vacation. Marvel at architectural wonders, indulge in a Bedouin desert camp with belly dancing and BBQ dinner under starlit desert skies, experience thrilling water coasters at Atlantis Aquaventure, sail on a luxury glass-enclosed Dubai Marina yacht, and explore Abu Dhabi's majestic cultural jewels.",

    highlights: [
      "Burj Khalifa 124th & 125th Floor Observation Deck Fast-Track Entry Tickets",
      "Red Dune Desert Safari with 4x4 Dune Bashing, Sandboarding, Camel Ride & Royal BBQ Dinner",
      "Full Day Abu Dhabi Excursion: Sheikh Zayed Grand Mosque, BAPS Hindu Mandir & Corniche",
      "Palm Jumeirah Monorail Ride & Atlantis Aquaventure Waterpark Full-Day Pass",
      "Luxury 2-Hour Dubai Marina Mega-Yacht Dinner Cruise with Live Tanoura Show",
      "Historic Old Dubai Abra Boat Ride & Gold Souk Spice Walking Tour"
    ],

    attractions: [
      {
        name: "Burj Khalifa & Dubai Mall Fountains",
        type: "World's Tallest Skyscraper",
        duration: "3 Hours",
        timing: "5:00 PM - 8:00 PM (Prime Sunset Slot)",
        entryFee: "Fast-Track Pass Included",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
        desc: "Standing 828 meters tall with 360-degree panoramic glass observatories across the Arabian Gulf.",
        tip: "Time your visit with the musical Dubai Fountain performances happening every 30 minutes."
      },
      {
        name: "Sheikh Zayed Grand Mosque, Abu Dhabi",
        type: "Architectural & Spiritual Masterpiece",
        duration: "3 Hours",
        timing: "9:00 AM - 10:00 PM",
        entryFee: "VIP Entry Included",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=600&q=80",
        desc: "82 gleaming white marble domes, 24-carat gold chandeliers, and the world's largest hand-knotted carpet.",
        tip: "Conservative clothing required; abayas and head coverings available on site."
      },
      {
        name: "Red Dune Desert Safari Camp",
        type: "Desert Adventure & Bedouin Dinner",
        duration: "6 Hours",
        timing: "3:00 PM - 9:30 PM",
        entryFee: "All-Inclusive Pass",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80",
        desc: "Heart-pounding 4x4 dune bashing across golden Lahbab sands followed by live fire shows and open buffet.",
        tip: "Wear sandals or slip-on shoes for walking effortlessly on soft desert sand."
      }
    ],

    hotels: [
      {
        name: "Atlantis The Palm Luxury Beach Resort",
        tier: "5-Star Ultra Luxury",
        starRating: 4.96,
        location: "Crescent Road, Palm Jumeirah, Dubai",
        pricePerNight: "₹28,000 / night (Upgrade / Stay Option)",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=600&q=80",
        amenities: ["Free Aquaventure Waterpark Access", "Lost Chambers Giant Aquarium", "Private Golden Sand Beach", "Celebrity Chef Dining", "ShuiQi Luxury Spa"],
        roomTypes: ["Ocean King Room", "Palm View Suite"],
        checkIn: "3:00 PM",
        checkOut: "12:00 PM",
        highlight: "World-renowned crown jewel of Palm Jumeirah with unlimited complimentary waterpark privileges."
      },
      {
        name: "Radisson Blu Waterfront Dubai Marina",
        tier: "5-Star Waterfront Hotel",
        starRating: 4.85,
        location: "Marasi Drive, Business Bay & Marina, Dubai",
        pricePerNight: "₹12,500 / night (Included in Deluxe Stack)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Burj Khalifa View Infinity Pool", "State-of-the-art Health Club", "Award-winning Steakhouse", "Complimentary Marina Shuttle"],
        roomTypes: ["Burj View Deluxe Room", "Executive Marina Suite"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Prime waterfront location with private balconies overlooking Dubai's illuminated skyscrapers."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrive in Dubai & Luxury Marina Dhow Cruise Dinner",
        timeSlots: {
          morning: "Private meet and greet at Dubai International Airport (DXB) with luxury AC sedan pickup.",
          afternoon: "Check-in at your 5-star waterfront hotel. Relax and enjoy the skyline view swimming pool.",
          evening: "Board a luxury glass-enclosed Mega-Yacht at Dubai Marina. 2-hour international buffet dinner with live saxophone and Tanoura dance."
        },
        desc: "Arrive in style and cruise between illuminated futuristic supertall skyscrapers."
      },
      {
        day: 2,
        title: "Burj Khalifa 124th Floor, Dubai Mall & Fountain Show",
        timeSlots: {
          morning: "Guided drive through Jumeirah Beach, past the 7-star sail-shaped Burj Al Arab, and Dubai Frame.",
          afternoon: "Ascend the world's fastest double-decker elevator to the 124th & 125th floor observatory of Burj Khalifa. Gaze across the Arabian Gulf.",
          evening: "Stroll the world's largest shopping destination, Dubai Mall, and watch the dancing fountain show set to classical melodies."
        },
        desc: "Touch the sky from the pinnacle of human architecture."
      },
      {
        day: 3,
        title: "Thrill in the Dunes: Premium 4x4 Desert Safari with Bedouin BBQ",
        timeSlots: {
          morning: "Free morning to relax at JBR The Beach or ride the Ain Dubai observation wheel.",
          afternoon: "3:00 PM pickup in 4x4 Toyota Land Cruisers for thrilling red dune bashing in Lahbab. Try sandboarding down 100-foot dunes.",
          evening: "Traditional desert fortress camp welcome with Arabic coffee, henna painting, camel ride, shisha, fire dancing, and gourmet BBQ dinner."
        },
        desc: "An Arabian Nights adventure under a canopy of desert stars."
      },
      {
        day: 4,
        title: "Full Day Abu Dhabi Grand Mosque & Cultural Highlights",
        timeSlots: {
          morning: "Scenic 1.5-hour highway drive past Yas Island to the UAE capital, Abu Dhabi.",
          afternoon: "Marvel at the architectural wonder of the Sheikh Zayed Grand Mosque with pure white Macedonian marble. Visit the newly inaugurated BAPS Hindu Mandir.",
          evening: "Drive along the pristine Abu Dhabi Corniche, view Emirates Palace, and return to Dubai."
        },
        desc: "Discover the breathtaking cultural and artistic capital of the Emirates."
      },
      {
        day: 5,
        title: "Palm Jumeirah Monorail & Atlantis Aquaventure Waterpark",
        timeSlots: {
          morning: "Scenic ride on the Palm Jumeirah Monorail overlooking ultra-luxury private villas on the fronds.",
          afternoon: "Full day access to Atlantis Aquaventure, the world's largest waterpark with 105 record-breaking slides, and Lost Chambers Aquarium.",
          evening: "Cocktails and dinner at The Pointe facing the world's largest fountain."
        },
        desc: "Adrenaline and luxury on the man-made marvel of Palm Jumeirah."
      },
      {
        day: 6,
        title: "Old Dubai Souks & Homeward Flight Departure",
        timeSlots: {
          morning: "Ride a traditional wooden Abra boat across Dubai Creek for 1 Dirham. Wander the vibrant Gold Souk and aromatic Spice Souk.",
          afternoon: "Private AC luxury transfer to Dubai International Airport (DXB) for your flight home."
        },
        desc: "Contrast ultra-modern skyscrapers with the fragrant historical roots of Old Arabia."
      }
    ],

    activities: [
      { name: "4x4 Desert Dune Bashing & Sandboarding", duration: "4 Hours", category: "Adventure", desc: "Drifting over deep red desert sand dunes with certified rally drivers." },
      { name: "Burj Khalifa Top of the World Observatory", duration: "2 Hours", category: "Sightseeing", desc: "Panoramic 360-degree vista from the 124th floor." },
      { name: "Dubai Marina Luxury Yacht Cruise", duration: "2 Hours", category: "Cruise & Dining", desc: "Dinner sailing through glittering skyscraper canyons." },
      { name: "Aquaventure Record-Breaking Water Coasters", duration: "Full Day", category: "Theme Park", desc: "World's largest waterpark with heart-pounding vertical leap slides." }
    ],

    inclusions: [
      "5 Nights 5-Star Waterfront Hotel Accommodation in Dubai",
      "Daily international gourmet buffet breakfasts",
      "Burj Khalifa 124th & 125th Floor Fast-Track Admission Tickets",
      "Premium Red Dune 4x4 Desert Safari with Dune Bashing, Sandboarding & BBQ Dinner",
      "Full Day Abu Dhabi Grand Mosque & City Excursion with private luxury coach",
      "Dubai Marina Luxury Dinner Cruise with Tanoura show and open buffet",
      "Private AC vehicle for all airport pickups, drops, and guided sightseeing tours",
      "UAE Tourist Visa Assistance & 24/7 dedicated travel concierge"
    ],

    exclusions: [
      "International flights to/from Dubai (DXB)",
      "UAE Tourist Visa fee (~₹6,500 per person)",
      "Tourism Dirham hotel tax (~15 to 20 AED/night paid directly at hotel checkout)"
    ],

    transportation: {
      vehicleType: "Private AC Luxury Toyota Previa / Mercedes Sprinter / Lexus",
      airportTransfers: "Included from DXB Terminal 1/2/3 directly to hotel",
      chaufferAssistance: "Licensed English & Hindi speaking tourist chauffeurs",
      luggageAllowance: "2 Large Suitcases per traveler",
      fuelAndTolls: "Salik toll gates and all fuel costs 100% covered"
    },

    travelEssentials: {
      packingList: ["Summer clothing, comfortable walking shoes, light jacket for desert evening breeze, modest clothing for mosque"],
      healthAndSafety: ["Tap water is safe for washing, bottled water provided throughout tours"],
      permitsAndDocuments: ["Valid Indian Passport (minimum 6 months) + UAE E-Visa printout"],
      connectivityAndAtm: ["Free tourist SIM given at Dubai Airport immigration; credit cards accepted everywhere"]
    },

    reviews: [
      {
        author: "Vikram & Sneha Singhal",
        location: "Delhi NCR, India",
        date: "January 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        comment: "Dubai with SpidyWeb was phenomenal! The desert safari had the best dune bashing ever and Burj Khalifa sunset view was magical. Everything was on time with zero hassle."
      }
    ],

    tourEscort: {
      name: "Tariq Mansoor",
      role: "UAE & Middle East Destination Manager",
      experience: "16 Years Experience",
      languages: "English, Arabic, Hindi, Urdu",
      badge: "Dubai Economy & Tourism (DET) Certified Senior Guide"
    }
  },

  15: {
    id: 15,
    slug: "meghalaya-cherrapunji-living-root-bridges-dawki",
    title: "Meghalaya Abode of Clouds, Living Root Bridges & Dawki Waters",
    subtitle: "Northeast Paradise - Double Decker Root Bridges, Nohkalikai Falls & Cleanest Village",
    placeName: "Shillong, Cherrapunji & Dawki",
    state: "Meghalaya",
    country: "India",
    region: "Northeast India",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Unexplored Gem India",
    durationDays: 6,
    durationNights: 5,
    durationText: "6 Days / 5 Nights",
    maxGuests: "10 Travelers",
    rating: 4.97,
    reviewCount: 58,
    seasons: ["monsoon", "autumn", "spring-summer", "winter"],

    geo: {
      lat: 25.2702,
      lng: 91.7323,
      altitude: "1,496m (Shillong) / 1,484m (Cherrapunji)",
      idealDuration: "5 to 7 Days",
      bestTimeToVisit: "All Year (Lush Waterfalls: Jun-Sep, Clear Lakes & Trekking: Oct-May)",
      climate: "Cool Subtropical Highland (12°C - 24°C)",
      language: "Khasi, Garo, English, Hindi",
      airport: "Guwahati Lokpriya Gopinath Bordoloi Airport (GAU) - 120 km",
      railway: "Guwahati Railway Station (GHY) - 100 km"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 26999,
      originalPrice: 32000,
      discountPercent: 16,
      standardPrice: 21999,
      deluxePrice: 26999,
      luxuryPrice: 37999,
      emiStartsAt: "₹2,250/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
          caption: "Nohkalikai Falls Plunging into Turquoise Plunge Pool",
          tag: "Waterfalls"
        },
        {
          url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
          caption: "Crystal Clear Umngot River at Dawki Border",
          tag: "Rivers"
        },
        {
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
          caption: "Double Decker Bio-Engineered Living Root Bridge in Nongriat",
          tag: "Bio-Architecture"
        },
        {
          url: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
          caption: "Misty Rolling Hills of Shillong, Scotland of the East",
          tag: "Highlands"
        },
        {
          url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
          caption: "Mawlynnong Flower-Lined Village Pathways",
          tag: "Eco-Culture"
        }
      ]
    },

    summary: "Wander through the mystical Abode of Clouds: trek to ancient living root bridges hand-woven from rubber tree roots, boat on glass-clear waters in Dawki where boats appear floating in mid-air, and witness India's tallest plunge waterfall.",

    description: "Meghalaya is nature's grand amphitheater. Experience dramatic limestone caves with subterranean stalactites, rolling hills dubbed the 'Scotland of the East', organic pineapple groves, and the warm matrilineal hospitality of Khasi and Jaintia tribes. Stay in luxury eco-resorts overlooking deep mist-filled canyons.",

    highlights: [
      "Guided Trek to the World-Famous Double Decker Living Root Bridge in Nongriat",
      "Glass-Clear Boat Ride on Umngot River at Dawki (Boats look suspended in air)",
      "Visit Nohkalikai Falls (India's tallest plunge waterfall at 340 meters)",
      "Explore Mawlynnong, officially recognized as Asia's Cleanest Village",
      "Limestone Spelunking inside Mawsmai and Arwah prehistoric fossil caves",
      "Sunset over serene Umiam Lake (Barapani) with mountain breeze"
    ],

    attractions: [
      {
        name: "Double Decker Living Root Bridge",
        type: "UNESCO Tentative Bio-Heritage Wonder",
        duration: "5 - 6 Hours",
        timing: "Best early morning (6:30 AM start)",
        entryFee: "Guide & Community Pass Included",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
        desc: "200-year-old living bridges woven by indigenous Khasi villagers across roaring jungle streams.",
        tip: "Descend the 3,500 stone stairs with walking sticks; take a refreshing dip in natural blue river pools."
      },
      {
        name: "Umngot Crystal Clear River, Dawki",
        type: "Natural River Wonder",
        duration: "2.5 Hours",
        timing: "8:00 AM - 4:00 PM",
        entryFee: "Boat Ride Pass Included",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        desc: "Water so transparent you can count pebbles on the riverbed 15 feet beneath your boat.",
        tip: "Peak crystal visibility occurs between November and April."
      },
      {
        name: "Nohkalikai Cascading Falls",
        type: "Tallest Plunge Waterfall in India",
        duration: "2 Hours",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Viewpoint Pass Included",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
        desc: "Spectacular 1,115-foot sheer water drop into an emerald green pool surrounded by sheer cliffs.",
        tip: "Afternoon sun creates vibrant rainbows right across the waterfall spray."
      }
    ],

    hotels: [
      {
        name: "Polo Orchid Luxury Waterfall Resort, Cherrapunji",
        tier: "4-Star Luxury Mountain Resort",
        starRating: 4.9,
        location: "Mawkdok Dympep Valley, Sohra, Meghalaya",
        pricePerNight: "₹8,500 / night (Included in Stack)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["Valley View Private Balconies", "Infinity Swimming Pool", "Open Sky Restaurant", "Bonfire Nights", "Free High-Speed Wi-Fi"],
        roomTypes: ["Misty Valley Log Cabin", "Executive Orchid Suite"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Private wooden cabins cantilevered over valleys with direct panoramic waterfall views."
      },
      {
        name: "Ri Kynjai - Serenity by the Lake, Shillong",
        tier: "5-Star Heritage Eco-Resort",
        starRating: 4.95,
        location: "UCC Road, Umiam Lake, Ri Bhoi District, Meghalaya",
        pricePerNight: "₹14,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Traditional Khasi Architecture", "Umiam Lake View Thatched Cottages", "Khasi Herbal Spa Treatment", "Organic Pine Dining"],
        roomTypes: ["Superior Lake View Thatched Cottage", "Lake Vista Suite"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Inspired by Khasi thatched boats overlooking pine-fringed Umiam Lake."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Guwahati Airport Pickup & Scenic Drive to Shillong via Umiam Lake",
        timeSlots: {
          morning: "Meet your private chauffeur at Guwahati Airport (GAU) or Railway Station. Scenic highway drive into Meghalaya.",
          afternoon: "Stop at magnificent Umiam Lake (Barapani) for photos and mountain tea. Check-in at your Shillong hotel.",
          evening: "Stroll Police Bazar for handwoven tribal shawls, bamboo crafts, and warm momos."
        },
        desc: "Ascend from the Brahmaputra plains into the pine-covered hills of the Scotland of the East."
      },
      {
        day: 2,
        title: "Shillong to Cherrapunji: Mawkdok Dympep Valley & Nohkalikai",
        timeSlots: {
          morning: "Scenic drive to Cherrapunji (Sohra). Walk across the Mawkdok Dympep suspension bridge with dramatic canyon views.",
          afternoon: "Gaze at the roaring Nohkalikai Falls and explore prehistoric stalactite chambers in Mawsmai Cave.",
          evening: "Check-in at Polo Orchid Resort. Watch the evening mist envelop the valley from your private balcony with a warm bonfire."
        },
        desc: "Enter the wettest realm on earth with thunderous falls and deep emerald gorges."
      },
      {
        day: 3,
        title: "Trek to Double Decker Living Root Bridge in Nongriat",
        timeSlots: {
          morning: "Early descent from Tyrna village down 3,500 stone stairs into the rainforest with our expert Khasi trek leader.",
          afternoon: "Cross swaying suspension bridges and arrive at the magnificent Double Decker Living Root Bridge. Swim in natural turquoise rock pools.",
          evening: "Ascend back with unforgettable memories. Evening hot-spring bath and Khasi dinner at the resort."
        },
        desc: "A true bucket-list trek to one of planet earth's most astonishing bio-architectural marvels."
      },
      {
        day: 4,
        title: "Mawlynnong Asia's Cleanest Village & Crystal Clear Dawki",
        timeSlots: {
          morning: "Scenic mountain drive towards the Indo-Bangladesh border. Tour Mawlynnong, where every home tends vibrant flower gardens.",
          afternoon: "Arrive at Dawki on the Umngot River. Board traditional country wooden boats on water so clear it resembles liquid glass.",
          evening: "Return to Shillong for a cozy evening with live indie music at popular cafes."
        },
        desc: "Experience pristine nature, transparent rivers, and heartwarming tribal village cleanliness."
      },
      {
        day: 5,
        title: "Laitlum Canyons & Krang Shuri Turquoise Waterfall",
        timeSlots: {
          morning: "Visit Laitlum Grand Canyons with endless panoramic drops into verdant river valleys.",
          afternoon: "Excursion to Krang Shuri Falls in Jaintia Hills. Swim in the natural sapphire blue pool behind the water curtain.",
          evening: "Farewell dinner in Shillong tasting authentic Khasi cuisine (Jadoh, bamboo shoot delicacies)."
        },
        desc: "Majestic rim-walking on mountain ridges and swimming under hidden waterfalls."
      },
      {
        day: 6,
        title: "Kamakhya Temple Excursion & Departure from Guwahati",
        timeSlots: {
          morning: "Morning scenic descent to Guwahati. Visit the revered ancient Shaktipeeth Kamakhya Temple atop Nilachal Hill.",
          afternoon: "Drop at Guwahati Airport (GAU) for your departure flight with soul-enriching memories."
        },
        desc: "Conclude your Northeast journey blessed by ancient hill shrines."
      }
    ],

    activities: [
      { name: "Nongriat Double Decker Root Bridge Trek", duration: "6 Hours", category: "Eco-Trek", desc: "Trekking through lush Khasi jungles to explore living root bridges." },
      { name: "Dawki Glass Water Boating", duration: "1.5 Hours", category: "Boating", desc: "Gliding across transparent emerald river waters." },
      { name: "Mawsmai Prehistoric Cave Spelunking", duration: "1 Hour", category: "Adventure", desc: "Navigating illuminated limestone stalactites and million-year-old fossils." },
      { name: "Krang Shuri Natural Pool Swimming", duration: "2 Hours", category: "Nature Recreation", desc: "Swimming in sapphire-tinted natural waterfall pools with life jackets provided." }
    ],

    inclusions: [
      "5 Nights Luxury Mountain Resort & Boutique Hotel Accommodation",
      "Daily gourmet buffet breakfasts and 3 dinners",
      "Private AC luxury SUV (Innova Crysta / Scorpio) for all transfers and tours",
      "Guided trek to Double Decker Living Root Bridge with certified local escort",
      "Country boat ride pass on crystal-clear Umngot River at Dawki",
      "All national park, cave entry, and Meghalaya state permit passes",
      "24/7 dedicated local travel coordinator"
    ],

    exclusions: [
      "Airfare/train tickets to/from Guwahati (GAU)",
      "Personal zip-lining fees at Mawkdok valley",
      "Meals not explicitly listed in inclusions"
    ],

    transportation: {
      vehicleType: "Private AC Luxury Toyota Innova Crysta 4x2",
      airportTransfers: "Included from Guwahati (GAU) to Shillong and return",
      chaufferAssistance: "Experienced hill-certified local driver",
      luggageAllowance: "2 Large Suitcases per traveler",
      fuelAndTolls: "All hill road permits and fuel fully covered"
    },

    travelEssentials: {
      packingList: ["Light woolens for Shillong evenings, sturdy trekking shoes with non-slip soles, waterproof rain jacket, quick-dry clothes for waterfalls"],
      healthAndSafety: ["Carry personal water bottle, walking poles recommended for Nongriat trek"],
      permitsAndDocuments: ["Government photo ID (Aadhaar / Voter ID / Passport) required for checkpoints"],
      connectivityAndAtm: ["Jio & Airtel have good 4G/5G in Shillong and Cherrapunji; carry cash for small village stalls"]
    },

    reviews: [
      {
        author: "Ananya & Dev Sen",
        location: "Kolkata, West Bengal",
        date: "October 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        comment: "Meghalaya was beyond words! Boating in Dawki felt like floating on air, and our guide at the living root bridge was so patient and knowledgeable. Polo Orchid resort had the best valley views!"
      }
    ],

    tourEscort: {
      name: "Bantei Lyngdoh",
      role: "Meghalaya & Northeast Senior Tour Leader",
      experience: "12 Years Experience",
      languages: "English, Hindi, Khasi, Assamese",
      badge: "Meghalaya Tourism Eco-Ambassador"
    }
  },

  16: {
    id: 16,
    slug: "ooty-coonoor-nilgiri-blue-mountains",
    title: "Ooty & Nilgiri Blue Mountains Heritage Tea Estates & Toy Train",
    subtitle: "Queen of Hill Stations - UNESCO Mountain Rail, Emerald Lake & Pykara Waterfalls",
    placeName: "Ooty, Coonoor & Kotagiri",
    state: "Tamil Nadu",
    country: "India",
    region: "South India",
    category: "Incredible India",
    categorySlug: "incredible-india",
    badge: "Heritage Hill Station",
    durationDays: 5,
    durationNights: 4,
    durationText: "5 Days / 4 Nights",
    maxGuests: "12 Travelers",
    rating: 4.93,
    reviewCount: 76,
    seasons: ["spring-summer", "autumn", "winter"],

    geo: {
      lat: 11.4102,
      lng: 76.6950,
      altitude: "2,240 m (Ooty Mall) / 2,637 m (Doddabetta Peak)",
      idealDuration: "4 to 6 Days",
      bestTimeToVisit: "October to June (Misty & Crisp 10°C - 20°C)",
      climate: "Crisp Alpine Spring (10°C - 22°C)",
      language: "Tamil, Badaga, English, Hindi",
      airport: "Coimbatore International Airport (CJB) - 88 km",
      railway: "Udhagamandalam Railway Station (UAM) / Mettupalayam (MTP)"
    },

    pricing: {
      currency: "INR",
      symbol: "₹",
      basePrice: 21999,
      originalPrice: 26500,
      discountPercent: 17,
      standardPrice: 16999,
      deluxePrice: 21999,
      luxuryPrice: 31999,
      emiStartsAt: "₹1,833/month"
    },

    images: {
      banner: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1400&q=85",
      main: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      thumb1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      thumb2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
          caption: "Rolling Tea Estates in the Nilgiri Blue Mountains",
          tag: "Tea Gardens"
        },
        {
          url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
          caption: "UNESCO Heritage Nilgiri Mountain Toy Train in Steam",
          tag: "Heritage Rail"
        },
        {
          url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
          caption: "Emerald Lake Surrounded by Alpine Pine Woods",
          tag: "Lakes"
        },
        {
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
          caption: "Pykara Cascading Waterfalls & Speedboat Basin",
          tag: "Waterfalls"
        },
        {
          url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80",
          caption: "Colonial British Heritage Tea Bungalow Stay",
          tag: "Resorts"
        }
      ]
    },

    summary: "Breathe the fragrant eucalyptus and pine air in the Queen of Hill Stations: ride the century-old UNESCO steam toy train across arched viaducts, visit sprawling tea estates in Coonoor, boat on Pykara Lake, and stay in colonial heritage resorts.",

    description: "Nestled high in the Western Ghats where Tamil Nadu meets Kerala and Karnataka, the Nilgiris (Blue Mountains) offer cool mountain bliss. Stroll through 175-year-old Government Botanical Gardens, sample freshly made handmade artisan chocolates, view Doddabetta peak at 2,637m, and sip single-estate orange pekoe tea.",

    highlights: [
      "Confirmed Tickets on UNESCO Nilgiri Mountain Railway Toy Train (Ooty to Coonoor)",
      "4 Nights in 4-Star Mountain View Colonial Resort / Heritage Tea Estate",
      "Private High Tea & Tea Tasting Session at Highfield Tea Factory Coonoor",
      "Scenic Excursion to Pykara Lake & Speedboat Ride",
      "Doddabetta Peak Telescope Viewpoint (Highest point in South India)",
      "Visit Sim's Park, Lamb's Rock & Dolphin's Nose Viewpoints in Coonoor"
    ],

    attractions: [
      {
        name: "UNESCO Nilgiri Mountain Railway",
        type: "Historic Rack & Pinion Steam Rail",
        duration: "1.5 Hours",
        timing: "Morning Scenic Departures",
        entryFee: "Confirmed 1st Class Tickets Included",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        desc: "Built by the British in 1908, chugging through 16 tunnels and 250 bridges across misty valleys.",
        tip: "Sit on the valley-facing side for spectacular panoramic views of tea plantations."
      },
      {
        name: "Emerald & Avalanche Lakes",
        type: "Pristine High-Altitude Alpine Lake",
        duration: "3 Hours",
        timing: "9:00 AM - 5:00 PM",
        entryFee: "Eco-Pass Included",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        desc: "Serene silent lake fringed by rhododendrons, pine forests, and rolling tea estates.",
        tip: "Ideal spot for serene morning nature photography without tourist crowds."
      },
      {
        name: "Highfield Tea Factory & Plantation",
        type: "50-Acre Working Tea Estate",
        duration: "2 Hours",
        timing: "9:00 AM - 6:00 PM",
        entryFee: "Tasting Pass Included",
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
        desc: "Watch the full journey of two leaves and a bud transforming into fragrant Nilgiri tea with complimentary tasting.",
        tip: "Buy fresh eucalyptus oil, green tea, and handmade dark chocolate directly from factory outlet."
      }
    ],

    hotels: [
      {
        name: "Savoy - IHCL SeleQtions Heritage Resort, Ooty",
        tier: "5-Star Heritage Resort",
        starRating: 4.95,
        location: "77 Sylks Road, Ooty, Tamil Nadu",
        pricePerNight: "₹15,000 / night (Upgrade Option)",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        amenities: ["180-Year British Colonial Architecture", "Fireplaces in Rooms", "English Afternoon Tea Lawn", "Fine Dining Dining Hall"],
        roomTypes: ["Colonial Heritage Room", "Rosewood Garden Suite"],
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        highlight: "Historic 1841 hotel where Queen Elizabeth's retinue once stayed, with wood-burning fireplaces."
      },
      {
        name: "Sterling Ooty Fern Hill Mountain Resort",
        tier: "4-Star Mountain View Resort",
        starRating: 4.8,
        location: "Fern Hill, Ooty, Tamil Nadu",
        pricePerNight: "₹7,200 / night (Included in Deluxe Stack)",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
        amenities: ["Valley View Private Balconies", "Bonfire Nights", "Multi-Cuisine Buffet", "Indoor Games & Spa"],
        roomTypes: ["Classic Valley View", "Premier Suite"],
        checkIn: "2:00 PM",
        checkOut: "11:00 AM",
        highlight: "Overlooking stepped vegetable terraces and pine forest ridges."
      }
    ],

    itinerary: [
      {
        day: 1,
        title: "Coimbatore Pickup & Scenic Hairpin Drive to Ooty",
        timeSlots: {
          morning: "Pickup from Coimbatore Airport (CJB) or Railway Station. Scenic drive via Mettupalayam and Kallar.",
          afternoon: "Ascend through 36 exciting hairpin bends. Check-in at your mountain resort in Ooty. Unpack and enjoy hot tea.",
          evening: "Stroll along Ooty Lake. Enjoy an evening paddle boat ride followed by shopping for homemade chocolates."
        },
        desc: "Leave the sultry plains behind as the scent of pine and eucalyptus signals your arrival in the hills."
      },
      {
        day: 2,
        title: "UNESCO Heritage Toy Train to Coonoor & Tea Estates",
        timeSlots: {
          morning: "Board the historic steam-powered Nilgiri Mountain Toy Train at Ooty station for a magical 1.5-hour chug to Coonoor.",
          afternoon: "Visit Sim's Park, Dolphin's Nose viewpoint, and tour Highfield Tea Factory for artisanal tea tasting.",
          evening: "Drive back to Ooty via scenic tea valley roads. Evening bonfire and dinner at the resort."
        },
        desc: "Relive a bygone British era aboard India's most beloved mountain railway."
      },
      {
        day: 3,
        title: "Doddabetta Peak, Botanical Gardens & Rose Garden",
        timeSlots: {
          morning: "Ascend to Doddabetta Peak (2,637m), the highest vantage point in the Nilgiri hills. Enjoy panoramic telescope vistas.",
          afternoon: "Walk through the 175-year-old Government Botanical Garden with 1,000+ exotic species and fossil tree trunk.",
          evening: "Wander the sprawling Government Rose Garden featuring 20,000 varieties of blooming roses."
        },
        desc: "Immerse yourself in lush floral beauty and sweeping mountain horizons."
      },
      {
        day: 4,
        title: "Pykara Lake Speedboating & Pine Forest Excursion",
        timeSlots: {
          morning: "Scenic drive through Toda tribal hamlets to Pykara Lake. Thrilling speedboat ride across clean blue waters.",
          afternoon: "Visit Pykara Falls cascading over tiered boulders and stroll through the towering Shooting Point Pine Forests.",
          evening: "Relaxation time in Ooty town. Farewell dinner tasting traditional South Indian Nilgiri recipes."
        },
        desc: "Pine forest walks and sparkling high-altitude lake waters."
      },
      {
        day: 5,
        title: "Scenic Descent & Coimbatore Airport Drop",
        timeSlots: {
          morning: "Buffet breakfast with mountain views. Check-out and scenic descent through Nilgiri foothills.",
          afternoon: "Drop at Coimbatore Airport (CJB) or Railway Station for your return journey home."
        },
        desc: "Depart revitalized by fresh mountain breezes and soothing green landscapes."
      }
    ],

    activities: [
      { name: "UNESCO Toy Train Steam Ride", duration: "1.5 Hours", category: "Heritage Rail", desc: "Chugging through mountain tunnels and tea plantations." },
      { name: "Pykara Lake High-Speed Boating", duration: "1 Hour", category: "Water Sports", desc: "Speedboating on pristine mountain lake waters." },
      { name: "Tea Factory Guided Leaf-to-Cup Tour", duration: "1.5 Hours", category: "Cultural Experience", desc: "Learning tea processing and tasting aromatic single-estate teas." },
      { name: "Doddabetta Telescope Ridge View", duration: "1 Hour", category: "Viewpoint", desc: "Viewing the intersection of Western and Eastern Ghats." }
    ],

    inclusions: [
      "4 Nights Luxury Mountain View Resort Accommodation in Ooty",
      "Daily gourmet buffet breakfasts",
      "Confirmed 1st Class tickets for UNESCO Nilgiri Toy Train (Ooty to Coonoor)",
      "Private AC vehicle for all transfers, hill sightseeing, and Coonoor tour",
      "Pykara Lake boating passes and botanical garden entry tickets",
      "Tea factory tour with complimentary tea tasting session",
      "24/7 on-call travel coordinator"
    ],

    exclusions: [
      "Flight/train tickets to Coimbatore (CJB)",
      "Personal camera fees at national parks and botanical gardens",
      "Meals not specified in inclusions"
    ],

    transportation: {
      vehicleType: "Private AC Luxury Sedan / Innova",
      airportTransfers: "Included from Coimbatore (CJB) to Ooty and back",
      chaufferAssistance: "Hill-experienced professional chauffeur",
      luggageAllowance: "2 Large Suitcases per traveler",
      fuelAndTolls: "All hill road entry and parking fees included"
    },

    travelEssentials: {
      packingList: ["Warm sweaters/jackets for chilly evenings (drops to 10°C), comfortable walking shoes, umbrella/windbreaker"],
      healthAndSafety: ["Motion sickness medication recommended for 36 hairpin bend ascent"],
      permitsAndDocuments: ["Valid Government Photo ID"],
      connectivityAndAtm: ["All major mobile networks have excellent 4G/5G coverage in Ooty and Coonoor"]
    },

    reviews: [
      {
        author: "Karthik & Deepa Nair",
        location: "Bengaluru, Karnataka",
        date: "May 2026",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        comment: "The toy train journey was magical! Our resort in Ooty was cozy with a private fireplace, and the Pykara lake speedboat was an absolute blast. Everything was organized to perfection."
      }
    ],

    tourEscort: {
      name: "Murugan Selvam",
      role: "Nilgiris & South India Senior Tour Escort",
      experience: "15 Years Experience",
      languages: "English, Tamil, Hindi, Malayalam",
      badge: "Tamil Nadu Tourism Certified Master Guide"
    }
  }

};

// Export to window object for browser access
if (typeof window !== 'undefined') {
  window.TOUR_DESTINATIONS_DATA = TOUR_DESTINATIONS_DATA;
}

// Export for module systems (Node / CommonJS)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TOUR_DESTINATIONS_DATA };
}
