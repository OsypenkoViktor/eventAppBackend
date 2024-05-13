const initialEvents = [
  {
    title: "Tech Innovators Conference2",
    description:
      "Explore the latest advancements in technology and network with industry leaders.",
    eventdate: "2024-08-29",
    organizer: "TechGenius Inc.",
  },
  {
    title: "Fitness Challenge",
    description:
      "Get ready to sweat it out in our annual fitness challenge. Test your limits and win exciting prizes!",
    eventdate: "2024-06-30",
    organizer: "FitZone Gym",
  },
  {
    title: "Summer Music Festival",
    description:
      "Join us for a weekend of live music from various genres performed by talented artists!",
    eventdate: "2024-07-15",
    organizer: "Music Productions LLC",
  },
  {
    title: "Tech Innovators Conference",
    description:
      "Explore the latest advancements in technology and network with industry leaders.",
    eventdate: "2024-08-22",
    organizer: "TechGenius Inc.",
  },
  {
    title: "Fitness Challenge",
    description:
      "Get ready to sweat it out in our annual fitness challenge. Test your limits and win exciting prizes!",
    eventdate: "2024-06-30",
    organizer: "FitZone Gym",
  },
  {
    title: "Artisan Food Expo",
    description:
      "Experience a culinary journey with a wide variety of gourmet foods and beverages from local artisans.",
    eventdate: "2024-09-10",
    organizer: "Artisan Food Alliance",
  },
  {
    title: "Entrepreneurship Bootcamp",
    description:
      "Learn from successful entrepreneurs and sharpen your business skills in this intensive bootcamp.",
    eventdate: "2024-07-08",
    organizer: "Startup Academy",
  },
  {
    title: "Wildlife Photography Expedition",
    description:
      "Embark on an unforgettable journey to capture the beauty of nature and wildlife.",
    eventdate: "2024-08-05",
    organizer: "Nature Explorers Society",
  },
  {
    title: "Fashion Show Extravaganza",
    description:
      "Witness the latest trends on the runway and celebrate the art of fashion.",
    eventdate: "2024-06-25",
    organizer: "Fashion Forward Productions",
  },
  {
    title: "Film Screening Under the Stars",
    description:
      "Enjoy classic movies and contemporary favorites in a unique outdoor cinema experience.",
    eventdate: "2024-07-20",
    organizer: "Cinephile Society",
  },
  {
    title: "Green Living Expo",
    description:
      "Discover sustainable living practices and eco-friendly products to make a positive impact on the planet.",
    eventdate: "2024-09-02",
    organizer: "Green Earth Initiative",
  },
  {
    title: "Science Fiction Convention",
    description:
      "Immerse yourself in the world of sci-fi with panel discussions, cosplay contests, and more!",
    eventdate: "2024-08-12",
    organizer: "Galactic Explorers Association",
  },
  {
    title: "Art Workshop Series",
    description:
      "Unleash your creativity and learn new techniques in painting, sculpture, and more!",
    eventdate: "2024-06-18",
    organizer: "Creative Arts Center",
  },
  {
    title: "International Culinary Tour",
    description:
      "Savor the flavors of the world with our culinary tour featuring dishes from diverse cultures.",
    eventdate: "2024-07-29",
    organizer: "Global Gastronomy Tours",
  },
  {
    title: "Musician Showcase",
    description:
      "Discover emerging talent and enjoy live performances in an intimate setting.",
    eventdate: "2024-08-17",
    organizer: "Local Artists Collective",
  },
  {
    title: "Coding Bootcamp",
    description:
      "Master programming languages and launch your career in tech with our intensive coding bootcamp.",
    eventdate: "2024-09-08",
    organizer: "CodeCraft Academy",
  },
  {
    title: "Health & Wellness Expo",
    description:
      "Explore holistic approaches to health and wellness through workshops, demos, and seminars.",
    eventdate: "2024-07-03",
    organizer: "Wellness Solutions Group",
  },
  {
    title: "Travel Photography Workshop",
    description:
      "Capture breathtaking moments and learn professional photography techniques in exotic locations.",
    eventdate: "2024-08-28",
    organizer: "Wanderlust Photography Workshops",
  },
  {
    title: "Virtual Reality Experience",
    description:
      "Immerse yourself in virtual worlds and interactive simulations with cutting-edge VR technology.",
    eventdate: "2024-06-23",
    organizer: "VR Innovations",
  },
  {
    title: "Business Networking Mixer",
    description:
      "Connect with professionals from various industries and expand your business network.",
    eventdate: "2024-07-12",
    organizer: "Networking Solutions Inc.",
  },
  {
    title: "Outdoor Adventure Retreat",
    description:
      "Embark on a thrilling outdoor adventure filled with hiking, camping, and nature exploration.",
    eventdate: "2024-08-03",
    organizer: "Adventure Seekers Club",
  },
  {
    title: "Yoga & Meditation Retreat",
    description:
      "Rejuvenate your mind, body, and soul with daily yoga sessions and guided meditation.",
    eventdate: "2024-09-14",
    organizer: "Inner Peace Retreats",
  },
  {
    title: "Artificial Intelligence Summit",
    description:
      "Explore the future of AI with expert speakers, workshops, and demonstrations.",
    eventdate: "2024-07-26",
    organizer: "AI Innovations Forum",
  },
  {
    title: "Food Truck Festival",
    description:
      "Indulge in a wide array of delicious street food from gourmet food trucks.",
    eventdate: "2024-06-29",
    organizer: "Foodie Ventures Inc.",
  },
  {
    title: "Startup Pitch Competition",
    description:
      "Showcase your innovative business ideas and compete for funding and mentorship.",
    eventdate: "2024-08-10",
    organizer: "Startup Launchpad",
  },
  {
    title: "Gaming Expo",
    description:
      "Experience the latest video games, esports tournaments, and gaming technology.",
    eventdate: "2024-09-05",
    organizer: "GameMaster Events",
  },
  {
    title: "Educational Webinar Series",
    description:
      "Expand your knowledge and skills with our free educational webinars on a variety of topics.",
    eventdate: "2024-07-19",
    organizer: "Learning Hub Online",
  },
  {
    title: "Sustainability Symposium",
    description:
      "Join thought leaders and changemakers to discuss solutions for a sustainable future.",
    eventdate: "2024-08-14",
    organizer: "Sustainable Solutions Network",
  },
  {
    title: "Fashion Design Workshop",
    description:
      "Learn the art of fashion design from industry experts and create your own unique designs.",
    eventdate: "2024-09-07",
    organizer: "Fashion Design Institute",
  },
  {
    title: "Cultural Heritage Festival",
    description:
      "Celebrate diversity and cultural heritage with music, dance, food, and art from around the world.",
    eventdate: "2024-06-26",
    organizer: "Global Cultural Exchange",
  },
];
const initialParticipants = [
  {
    fullname: "John Smith",
    email: "john.smith@example.com",
    birth: "1990-05-15",
    source: "Social media",
    eventId: 1,
  },
  {
    fullname: "Emma Johnson",
    email: "emma.johnson@example.com",
    birth: "1985-09-21",
    source: "Social media",
    eventId: 2,
  },
  {
    fullname: "Michael Brown",
    email: "michael.brown@example.com",
    birth: "1978-03-10",
    source: "Social media",
    eventId: 3,
  },
  {
    fullname: "Sarah Davis",
    email: "sarah.davis@example.com",
    birth: "1995-11-07",
    source: "Social media",
    eventId: 4,
  },
  {
    fullname: "David Wilson",
    email: "david.wilson@example.com",
    birth: "1982-06-25",
    source: "Social media",
    eventId: 5,
  },
  {
    fullname: "Emily Taylor",
    email: "emily.taylor@example.com",
    birth: "1993-02-14",
    source: "Social media",
    eventId: 6,
  },
  {
    fullname: "Daniel Martinez",
    email: "daniel.martinez@example.com",
    birth: "1976-08-03",
    source: "Social media",
    eventId: 7,
  },
  {
    fullname: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    birth: "1989-04-18",
    source: "Social media",
    eventId: 8,
  },
  {
    fullname: "William Rodriguez",
    email: "william.rodriguez@example.com",
    birth: "1987-10-30",
    source: "Friends",
    eventId: 9,
  },
  {
    fullname: "Sophia Lopez",
    email: "sophia.lopez@example.com",
    birth: "1984-12-02",
    source: "Friends",
    eventId: 10,
  },
  {
    fullname: "James Hernandez",
    email: "james.hernandez@example.com",
    birth: "1991-07-09",
    source: "Friends",
    eventId: 11,
  },
  {
    fullname: "Ava Martinez",
    email: "ava.martinez@example.com",
    birth: "1979-05-26",
    source: "Friends",
    eventId: 12,
  },
  {
    fullname: "Alexander Wright",
    email: "alexander.wright@example.com",
    birth: "1986-09-13",
    source: "Friends",
    eventId: 13,
  },
  {
    fullname: "Mia Adams",
    email: "mia.adams@example.com",
    birth: "1983-01-07",
    source: "Friends",
    eventId: 14,
  },
  {
    fullname: "Benjamin Thompson",
    email: "benjamin.thompson@example.com",
    birth: "1977-08-22",
    source: "Friends",
    eventId: 15,
  },
  {
    fullname: "Charlotte Lee",
    email: "charlotte.lee@example.com",
    birth: "1994-04-16",
    source: "Friends",
    eventId: 16,
  },
  {
    fullname: "Ethan Scott",
    email: "ethan.scott@example.com",
    birth: "1981-11-11",
    source: "Friends",
    eventId: 17,
  },
  {
    fullname: "Amelia Hall",
    email: "amelia.hall@example.com",
    birth: "1988-03-08",
    source: "Friends",
    eventId: 18,
  },
  {
    fullname: "Jacob Green",
    email: "jacob.green@example.com",
    birth: "1975-06-19",
    source: "Friends",
    eventId: 19,
  },
  {
    fullname: "Isabella Baker",
    email: "isabella.baker@example.com",
    birth: "1992-09-25",
    source: "Friends",
    eventId: 20,
  },
];

module.exports = {
  initialEvents,
  initialParticipants,
};
