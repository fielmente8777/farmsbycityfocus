export interface FarmhouseCard {
  id: string;
  badge: string;
  name: string;
  location: string;
  tagline: string;
  pills: string[];
  features: string[];
  bestFor: string;
  price: string;
  mainImage: string;
  thumbs: string[];
}

export interface OccasionItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface AmenityItem {
  title: string;
  property: "Both" | "Crystal" | "Sukoon";
}

export interface ComparisonRow {
  feature: string;
  crystal: string;
  sukoon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "crystal" | "sukoon";
  image: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
  property: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const farmsData = {
  hero: {
    tag: "Private farmhouse stays · Gurgaon & Sohna",
    headingMain: "Private farmhouses in Gurugram,",
    headingItalic: "with a pool all to yourselves.",
    description:
      "Two premium stays for 25+ guests, private pool, sprawling lawns, bonfire evenings and a fully equipped kitchen. Just your people, and nobody else.",
    pills: [
      "25+ guests",
      "Private pool",
      "Lawns & bonfire",
      "Full kitchen",
    ],
    collectionCaption:
      "A City Focus collection · Crystal Farmhouse & Sukoon Farmhouse",
    bgImage: "/images/farms/hero-bg.jpg",
  },

  highlights: [
    {
      title: "25+ guests",
      subtitle: "at each farmhouse",
      iconType: "users",
    },
    {
      title: "Private pool",
      subtitle: "at both properties",
      iconType: "pool",
    },
    {
      title: "4 BHK & 3 BHK",
      subtitle: "spacious, upscale stays",
      iconType: "home",
    },
    {
      title: "Entire farmhouse",
      subtitle: "just your group, total privacy",
      iconType: "shield",
    },
  ],

  collection: {
    tag: "THE COLLECTION",
    titleMain: "Two farmhouses.",
    titleItalic: "One standard of luxury.",
    description:
      "Handpicked, upscale private stays around Gurugram, each with its own pool, lawns and space for 25+ guests. More farmhouses are joining the collection soon.",
    farmhouses: [
      {
        id: "crystal",
        badge: "4 BHK · Gurugram",
        name: "Crystal Farmhouse",
        location:
          "Balola, Gurugram · near Heritage International Xperiential School",
        tagline:
          "A glass-fronted retreat with poolside cabanas, barbecue evenings and bonfire nights.",
        pills: ["4 BHK", "25+ guests", "Private pool", "Spacious lawn"],
        features: [
          "Poolside cabana lounge",
          "Bonfire seating",
          "Barbecue-style sitting area",
          "Fully equipped kitchen",
        ],
        bestFor:
          "weekend getaways, private celebrations and group gatherings.",
        price: "₹ xxxx",
        mainImage: "/images/farms/crystal-main.jpg",
        thumbs: [
          "/images/farms/crystal-thumb-1.jpg",
          "/images/farms/crystal-thumb-2.jpg",
          "/images/farms/crystal-thumb-3.jpg",
        ],
      },
      {
        id: "sukoon",
        badge: "3 BHK · Sohna",
        name: "Sukoon Farmhouse",
        location: "Vatika Complex, Karanki Road, Sohna · Gurugram",
        tagline:
          "Wide lawns, a red-brick gazebo, a games lounge and a pool that glows at dusk.",
        pills: ["3 BHK", "25+ guests", "Private pool", "Large lawn"],
        features: [
          "Gazebo with swing seating",
          "Pool table & outdoor games",
          "Large lawn & backyard",
          "Fully equipped kitchen",
        ],
        bestFor:
          "family outings, group getaways and intimate celebrations.",
        price: "₹ xxxx",
        mainImage: "/images/farms/sukoon-main.jpg",
        thumbs: [
          "/images/farms/sukoon-thumb-1.jpg",
          "/images/farms/sukoon-thumb-2.jpg",
          "/images/farms/sukoon-thumb-3.jpg",
        ],
      },
    ] as FarmhouseCard[],
  },

  occasions: {
    tag: "MADE FOR THE MOMENTS THAT MATTER",
    titleMain: "One farmhouse,",
    titleItalic: "endless reasons to gather.",
    items: [
      {
        id: "weekend",
        title: "Weekend getaways",
        description: "Trade the city for slow mornings by your own pool.",
        image: "/images/farms/occasion-weekend.jpg",
      },
      {
        id: "birthdays",
        title: "Birthdays & celebrations",
        description: "String lights, cake & everyone under the stars.",
        image: "/images/farms/occasion-birthday.jpg",
      },
      {
        id: "family",
        title: "Family gatherings",
        description: "Room for every generation around one long table.",
        image: "/images/farms/occasion-family.jpg",
      },
      {
        id: "friends",
        title: "Friends' get-togethers",
        description: "Poolside cabanas, a pool table and stories till late.",
        image: "/images/farms/occasion-friends.jpg",
      },
      {
        id: "corporate",
        title: "Corporate offsites",
        description: "Team bonding, beyond the screens.",
        image: "/images/farms/occasion-corporate.jpg",
      },
      {
        id: "couples",
        title: "Couple escapes",
        description: "Private farmhouse escapes for two.",
        image: "/images/farms/occasion-couples.jpg",
      },
    ] as OccasionItem[],
  },

  amenities: {
    tag: "AMENITIES",
    titleMain: "Everything for a perfect stay,",
    titleItalic: "indoors and out.",
    description:
      "Both farmhouses share the essentials. Each adds its own signature spaces.",
    mainImage: "/images/farms/amenities-main.jpg",
    items: [
      { title: "Private swimming pool", property: "Both" },
      { title: "Spacious lawns", property: "Both" },
      { title: "Fully equipped kitchen", property: "Both" },
      { title: "Stays for 25+ guests", property: "Both" },
      { title: "Bonfire seating", property: "Crystal" },
      { title: "Barbecue sitting area", property: "Crystal" },
      { title: "Gazebo", property: "Sukoon" },
      { title: "Outdoor games area", property: "Sukoon" },
      { title: "Backyard", property: "Sukoon" },
    ] as AmenityItem[],
  },

  comparison: {
    tag: "FIND YOUR FIT",
    titleMain: "Crystal or Sukoon?",
    rows: [
      {
        feature: "Location",
        crystal: "Balola, Gurugram",
        sukoon: "Vatika Complex, Sohna",
      },
      {
        feature: "Configuration",
        crystal: "4 BHK",
        sukoon: "3 BHK",
      },
      {
        feature: "Guest capacity",
        crystal: "25+ guests",
        sukoon: "25+ guests",
      },
      {
        feature: "Private swimming pool",
        crystal: "Yes",
        sukoon: "Yes",
      },
      {
        feature: "Lawn",
        crystal: "Spacious lawn",
        sukoon: "Large lawn + backyard",
      },
      {
        feature: "Fully equipped kitchen",
        crystal: "Yes",
        sukoon: "Yes",
      },
      {
        feature: "Signature spaces",
        crystal: "Barbecue sitting area, bonfire seating, poolside cabanas",
        sukoon: "Gazebo, outdoor games area, backyard",
      },
      {
        feature: "Ideal for",
        crystal: "Celebrations, barbecue & bonfire nights",
        sukoon: "Family outings, games-filled group getaways",
      },
    ] as ComparisonRow[],
  },

  gallery: {
    tag: "GALLERY",
    title: "Take a look around",
    items: [
      /* ====================================================================
       * CRYSTAL
       * ==================================================================== */
      /* 1. Exterior & Entrance */
      {
        id: "c-entrance",
        title: "Crystal · Entrance",
        category: "crystal",
        image: "/crystal/Entrance.webp",
      },

      /* 2. Lobby & Reception */
      // {
      //   id: "c-living",
      //   title: "Crystal · Living Room",
      //   category: "crystal",
      //   image: "/crystal/Living.webp",
      // },
      {
        id: "c-living-2",
        title: "Crystal · Living Area",
        category: "crystal",
        image: "/crystal/living-2.webp",
      },
      {
        id: "c-living-3",
        title: "Crystal · Lounge",
        category: "crystal",
        image: "/crystal/living-3.webp",
      },
      {
        id: "c-dining",
        title: "Crystal · Dining",
        category: "crystal",
        image: "/crystal/dining.webp",
      },
      {
        id: "c-kitchen",
        title: "Crystal · Kitchen",
        category: "crystal",
        image: "/crystal/kitchen.webp",
      },
      {
        id: "c-interior",
        title: "Crystal · Interior",
        category: "crystal",
        image: "/crystal/Interior.webp",
      },
      {
        id: "7",
        title: "Crystal · Cabana",
        category: "crystal",
        image: "/images/farms/gal-crystal-cabana.jpg",
      },
      // {
      //   id: "3",
      //   title: "Crystal · Bonfire",
      //   category: "crystal",
      //   image: "/images/farms/gal-crystal-bonfire.jpg",
      // },

      /* 3. Swimming Pool */
      {
        id: "1",
        title: "Crystal · Pool",
        category: "crystal",
        image: "/images/farms/gal-crystal-pool.jpg",
      },
      {
        id: "c-pool",
        title: "Crystal · Poolside",
        category: "crystal",
        image: "/crystal/pool.webp",
      },

      /* 4. Garden & 5. Lawn */
      {
        id: "c-lawn",
        title: "Crystal · Lawn",
        category: "crystal",
        image: "/crystal/Lawn.webp",
      },

      /* 6. Rooms */
      // {
      //   id: "c-room",
      //   title: "Crystal · Bedroom",
      //   category: "crystal",
      //   image: "/crystal/room.webp",
      // },
      {
        id: "c-room-2",
        title: "Crystal · Master Bedroom",
        category: "crystal",
        image: "/crystal/room-2.webp",
      },
      // {
      //   id: "c-room-3",
      //   title: "Crystal · Bedroom Suite",
      //   category: "crystal",
      //   image: "/crystal/room-3.webp",
      // },
      {
        id: "c-room-4",
        title: "Crystal · Guest Room",
        category: "crystal",
        image: "/crystal/room-4.webp",
      },
      {
        id: "c-room-5",
        title: "Crystal · Deluxe Bedroom",
        category: "crystal",
        image: "/crystal/room-5.webp",
      },
      // {
      //   id: "c-room-6",
      //   title: "Crystal · Premium Bedroom",
      //   category: "crystal",
      //   image: "/crystal/room-6.webp",
      // },
      {
        id: "c-interior-2",
        title: "Crystal · Room TV Lounge",
        category: "crystal",
        image: "/crystal/interior-2.webp",
      },

      /* 7. Balcony / Room View */
      {
        id: "c-room-7",
        title: "Crystal · Bedroom View",
        category: "crystal",
        image: "/crystal/room-7.webp",
      },

      /* 8. Bathroom */
      {
        id: "c-bathroom",
        title: "Crystal · Bathroom",
        category: "crystal",
        image: "/crystal/bathroom.webp",
      },
      {
        id: "c-washroom",
        title: "Crystal · Washroom",
        category: "crystal",
        image: "/crystal/Washroom.webp",
      },

      /* ====================================================================
       * SUKOON
       * ==================================================================== */
      /* 1. Exterior & Entrance */
      {
        id: "s-entrance",
        title: "Sukoon · Entrance",
        category: "sukoon",
        image: "/sukoon/entrance.webp",
      },

      /* 2. Lobby & Reception */
      // {
      //   id: "6",
      //   title: "Sukoon · Living",
      //   category: "sukoon",
      //   image: "/images/farms/gal-sukoon-living.jpg",
      // },
      {
        id: "s-living",
        title: "Sukoon · Living Area",
        category: "sukoon",
        image: "/sukoon/living.webp",
      },
      {
        id: "s-sitting",
        title: "Sukoon · Sitting Area",
        category: "sukoon",
        image: "/sukoon/sitting-area.webp",
      },
      {
        id: "s-corridor",
        title: "Sukoon · Corridor",
        category: "sukoon",
        image: "/sukoon/corridor.webp",
      },
      {
        id: "s-kitchen",
        title: "Sukoon · Kitchen",
        category: "sukoon",
        image: "/sukoon/kitchen.webp",
      },
      {
        id: "4",
        title: "Sukoon · Gazebo",
        category: "sukoon",
        image: "/images/farms/gal-sukoon-gazebo.jpg",
      },

      /* 3. Swimming Pool */
      // {
      //   id: "2",
      //   title: "Sukoon · Pool",
      //   category: "sukoon",
      //   image: "/images/farms/gal-sukoon-pool.jpg",
      // },
      {
        id: "s-pool",
        title: "Sukoon · Poolside",
        category: "sukoon",
        image: "/sukoon/pool.webp",
      },

      /* 4. Garden */
      {
        id: "s-garden-view",
        title: "Sukoon · Garden View",
        category: "sukoon",
        image: "/sukoon/garden-view.webp",
      },
      {
        id: "5",
        title: "Sukoon · Games Area",
        category: "sukoon",
        image: "/images/farms/gal-sukoon-games.jpg",
      },

      /* 5. Lawn */
      {
        id: "s-lawn",
        title: "Sukoon · Lawn",
        category: "sukoon",
        image: "/sukoon/lawn.webp",
      },

      /* 6. Rooms */
      {
        id: "s-room",
        title: "Sukoon · Bedroom",
        category: "sukoon",
        image: "/sukoon/room.webp",
      },
      {
        id: "s-room-2",
        title: "Sukoon · Master Bedroom",
        category: "sukoon",
        image: "/sukoon/room-2.webp",
      },
      {
        id: "s-room-3",
        title: "Sukoon · Bedroom Suite",
        category: "sukoon",
        image: "/sukoon/room-3.webp",
      },
      {
        id: "s-room-4",
        title: "Sukoon · Guest Room",
        category: "sukoon",
        image: "/sukoon/room-4.webp",
      },
      {
        id: "s-room-5",
        title: "Sukoon · Deluxe Bedroom",
        category: "sukoon",
        image: "/sukoon/room-5.webp",
      },

      /* 7. Balcony / Room View */
      {
        id: "s-view",
        title: "Sukoon · Balcony View",
        category: "sukoon",
        image: "/sukoon/view.webp",
      },

      /* 8. Bathroom */
      {
        id: "s-bathroom",
        title: "Sukoon · Bathroom",
        category: "sukoon",
        image: "/sukoon/bathroom.webp",
      },
      {
        id: "s-washroom",
        title: "Sukoon · Washroom",
        category: "sukoon",
        image: "/sukoon/washroom.webp",
      },
    ] as GalleryItem[],
  },

  bookingSteps: {
    tag: "BOOKING MADE SIMPLE",
    titleMain: "From enquiry to poolside",
    titleItalic: "in three steps.",
    steps: [
      {
        number: "01",
        title: "Share your plan",
        description:
          "Tell us your date, group size and occasion, through the form, a call or WhatsApp.",
      },
      {
        number: "02",
        title: "Get availability & price",
        description:
          "Our team confirms your dates and shares a quote for the farmhouse that suits you best.",
      },
      {
        number: "03",
        title: "Arrive & unwind",
        description:
          "Confirm your booking, pack your swimwear and leave the city behind.",
      },
    ] as StepItem[],
  },

  reviews: {
    tag: "GUEST REVIEWS",
    titleMain: "Stays worth",
    titleItalic: "talking about.",
    items: [
      {
        id: "1",
        rating: 5,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem ipsum",
        property: "Crystal Farmhouse",
      },
      {
        id: "2",
        rating: 5,
        quote:
          "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem ipsum",
        property: "Crystal Farmhouse",
      },
      {
        id: "3",
        rating: 5,
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem ipsum",
        property: "Crystal Farmhouse",
      },
    ] as ReviewItem[],
  },

  faqs: {
    tag: "FAQS",
    titleMain: "Questions,",
    titleItalic: "answered.",
    description:
      "Can't find what you're looking for? Our team is happy to help you plan the details.",
    items: [
      {
        question: "How many guests can the farmhouses host?",
        answer:
          "Both farmhouses accommodate 25+ guests. Crystal Farmhouse is a 4 BHK and Sukoon Farmhouse is a 3 BHK, share your group size and we'll suggest the best fit.",
      },
      {
        question: "Is the swimming pool private?",
        answer:
          "Yes, absolutely. The swimming pool is 100% private to your group only. Nobody else will be on the property during your stay.",
      },
      {
        question: "Can we host a birthday or a small celebration?",
        answer:
          "Yes! Both farmhouses are ideal for birthdays, anniversaries, family gatherings and intimate celebrations with ample outdoor space and lawns.",
      },
      {
        question: "Is there a kitchen we can use?",
        answer:
          "Yes, each property features a fully equipped kitchen with appliances, cookware, and dining ware. You can cook yourselves or arrange a chef.",
      },
      {
        question: "Where are the farmhouses located?",
        answer:
          "Crystal Farmhouse is located in Balola, Gurugram (near Heritage International Xperiential School). Sukoon Farmhouse is located in Vatika Complex, Karanki Road, Sohna, Gurugram.",
      },
      {
        question: "What are the check-in and check-out timings?",
        answer:
          "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to availability upon request.",
      },
      {
        question: "How do I confirm a booking?",
        answer:
          "Simply share your dates and details using our booking form, a quick phone call, or on WhatsApp. Our team will verify dates and share booking confirmation.",
      },
      {
        question: "Which farmhouse should we choose?",
        answer:
          "If you want 4 BHK with poolside cabanas, bonfire seating and barbecue evenings, Crystal Farmhouse is great. If you prefer wide lawns, a red-brick gazebo, and a games lounge, Sukoon Farmhouse is wonderful.",
      },
      {
        question: "Will more farmhouses be added?",
        answer:
          "Yes, we are actively expanding our curated collection of luxury private farmhouses across Gurugram, Sohna, and Delhi NCR.",
      },
    ] as FaqItem[],
  },

  finalCta: {
    headingMain: "Your people. Your pool.",
    headingItalic: "Your weekend.",
    subtitle:
      "Planning around winter weekends or New Year's Eve? Enquire early to lock in your date.",
    bgImage: "/images/farms/cta-bg.jpg",
  },
};

export const pageData = farmsData;

