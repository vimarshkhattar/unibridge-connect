export type Student = {
  id: string;
  name: string;
  initials: string;
  major: string;
  university: string;
  year: string;
  country: string;
  flag: string;
  languages: string[];
  interests: string[];
  match: number;
  bio: string;
  accent: "primary" | "violet" | "mint" | "amber";
};

export const students: Student[] = [
  {
    id: "1",
    name: "Aisha Rahman",
    initials: "AR",
    major: "Computer Science",
    university: "University of Toronto",
    year: "2nd year",
    country: "Bangladesh",
    flag: "🇧🇩",
    languages: ["English", "Bengali", "Hindi"],
    interests: ["Machine Learning", "Hackathons", "Badminton"],
    match: 96,
    bio: "Building side projects and looking for a hackathon team this term.",
    accent: "primary",
  },
  {
    id: "2",
    name: "Diego Martínez",
    initials: "DM",
    major: "Mechanical Engineering",
    university: "University of Toronto",
    year: "3rd year",
    country: "Mexico",
    flag: "🇲🇽",
    languages: ["Spanish", "English"],
    interests: ["Robotics", "Football", "Photography"],
    match: 91,
    bio: "Formula racing team member. Happy to show new students around campus.",
    accent: "violet",
  },
  {
    id: "3",
    name: "Mei Lin Chen",
    initials: "MC",
    major: "Business Analytics",
    university: "York University",
    year: "1st year",
    country: "Taiwan",
    flag: "🇹🇼",
    languages: ["Mandarin", "English"],
    interests: ["Finance", "Coffee", "Case competitions"],
    match: 88,
    bio: "First semester abroad — looking for study partners and a case comp team.",
    accent: "mint",
  },
  {
    id: "4",
    name: "Tobi Adeyemi",
    initials: "TA",
    major: "Public Health",
    university: "University of Toronto",
    year: "4th year",
    country: "Nigeria",
    flag: "🇳🇬",
    languages: ["English", "Yoruba"],
    interests: ["Volunteering", "Research", "Afrobeats"],
    match: 84,
    bio: "Peer mentor for international students. Ask me about housing and health plans.",
    accent: "amber",
  },
  {
    id: "5",
    name: "Sofia Rossi",
    initials: "SR",
    major: "Architecture",
    university: "Ryerson",
    year: "2nd year",
    country: "Italy",
    flag: "🇮🇹",
    languages: ["Italian", "English", "French"],
    interests: ["Design", "Museums", "Cycling"],
    match: 81,
    bio: "Sketching my way through the city. Always up for a gallery walk.",
    accent: "violet",
  },
  {
    id: "6",
    name: "Arjun Mehta",
    initials: "AM",
    major: "Data Science",
    university: "University of Toronto",
    year: "3rd year",
    country: "India",
    flag: "🇮🇳",
    languages: ["English", "Hindi", "Marathi"],
    interests: ["Startups", "Cricket", "Chess"],
    match: 79,
    bio: "Interning this summer — happy to share resume and interview tips.",
    accent: "primary",
  },
  {
    id: "7",
    name: "Yuki Tanaka",
    initials: "YT",
    major: "Cognitive Science",
    university: "York University",
    year: "1st year",
    country: "Japan",
    flag: "🇯🇵",
    languages: ["Japanese", "English"],
    interests: ["Psychology", "Anime", "Running"],
    match: 76,
    bio: "New to campus and trying to find a language exchange partner.",
    accent: "mint",
  },
  {
    id: "8",
    name: "Amina Haddad",
    initials: "AH",
    major: "Political Science",
    university: "University of Toronto",
    year: "2nd year",
    country: "Morocco",
    flag: "🇲🇦",
    languages: ["Arabic", "French", "English"],
    interests: ["Debate", "Model UN", "Writing"],
    match: 73,
    bio: "Debate club exec. Looking for people to join our next MUN delegation.",
    accent: "amber",
  },
];

export type CampusEvent = {
  id: string;
  title: string;
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  category: string;
  description: string;
  attendees: number;
  accent: "primary" | "violet" | "mint" | "amber";
};

export const events: CampusEvent[] = [
  {
    id: "e1",
    title: "International Student Welcome Night",
    date: "Thu, Sep 4",
    day: "04",
    month: "SEP",
    time: "6:00 PM – 9:00 PM",
    location: "Hart House, Great Hall",
    category: "Social",
    description:
      "Meet students from 60+ countries over food, music and campus games. Peer mentors will be on site to answer questions.",
    attendees: 214,
    accent: "primary",
  },
  {
    id: "e2",
    title: "Resume Clinic with Career Centre",
    date: "Mon, Sep 8",
    day: "08",
    month: "SEP",
    time: "1:00 PM – 4:00 PM",
    location: "Career Centre, Room 210",
    category: "Career",
    description:
      "Drop-in 20 minute reviews with career advisors. Bring a printed copy or your laptop.",
    attendees: 87,
    accent: "violet",
  },
  {
    id: "e3",
    title: "Study Abroad Coffee Chat",
    date: "Wed, Sep 10",
    day: "10",
    month: "SEP",
    time: "10:30 AM – 12:00 PM",
    location: "Sidney Smith Commons",
    category: "Academic",
    description:
      "Casual conversation with students who studied in Europe and Asia. Free coffee, no signup needed.",
    attendees: 46,
    accent: "mint",
  },
  {
    id: "e4",
    title: "Intramural Football Tryouts",
    date: "Sat, Sep 13",
    day: "13",
    month: "SEP",
    time: "9:00 AM – 12:00 PM",
    location: "Varsity Field",
    category: "Sports",
    description: "Open tryouts for the fall intramural league. All skill levels welcome.",
    attendees: 132,
    accent: "amber",
  },
  {
    id: "e5",
    title: "Campus Hackathon Kickoff",
    date: "Fri, Sep 19",
    day: "19",
    month: "SEP",
    time: "5:00 PM – 8:00 PM",
    location: "Myhal Centre, Atrium",
    category: "Tech",
    description: "Team formation, sponsor demos and workshop sign-ups for the 36-hour build weekend.",
    attendees: 301,
    accent: "primary",
  },
  {
    id: "e6",
    title: "Wellness Walk & Mindfulness",
    date: "Sun, Sep 21",
    day: "21",
    month: "SEP",
    time: "8:00 AM – 9:30 AM",
    location: "Philosopher's Walk",
    category: "Wellness",
    description: "Guided walk with the student wellness team, followed by a short mindfulness session.",
    attendees: 58,
    accent: "mint",
  },
];

export type Guide = {
  id: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  emoji: string;
  accent: "primary" | "violet" | "mint" | "amber";
};

export const guides: Guide[] = [
  {
    id: "g1",
    title: "How Office Hours Actually Work",
    category: "Academic Success",
    summary: "What to expect, what to ask, and how to walk in without feeling awkward.",
    readTime: "4 min read",
    emoji: "🗓️",
    accent: "primary",
  },
  {
    id: "g2",
    title: "How to Email a Professor",
    category: "Academic Success",
    summary: "A simple structure, tone tips and three templates you can copy today.",
    readTime: "3 min read",
    emoji: "✉️",
    accent: "violet",
  },
  {
    id: "g3",
    title: "Understanding a Syllabus",
    category: "Academic Success",
    summary: "Decode grading weights, deadlines and the policies that matter most.",
    readTime: "5 min read",
    emoji: "📄",
    accent: "mint",
  },
  {
    id: "g4",
    title: "Your First Month on Campus",
    category: "Campus Life",
    summary: "Clubs, food halls, printing, gym access and the shortcuts nobody tells you.",
    readTime: "6 min read",
    emoji: "🏫",
    accent: "amber",
  },
  {
    id: "g5",
    title: "Banking & Phone Plans for Newcomers",
    category: "International Student Tips",
    summary: "Open an account, avoid fees and pick a plan without a credit history.",
    readTime: "7 min read",
    emoji: "🏦",
    accent: "primary",
  },
  {
    id: "g6",
    title: "Study Permit & Work Hours Basics",
    category: "International Student Tips",
    summary: "The rules on on-campus work, co-op letters and keeping your status valid.",
    readTime: "8 min read",
    emoji: "🛂",
    accent: "violet",
  },
  {
    id: "g7",
    title: "Building a Study Group That Lasts",
    category: "Campus Life",
    summary: "How to find people, set a rhythm and keep sessions actually useful.",
    readTime: "4 min read",
    emoji: "👥",
    accent: "mint",
  },
  {
    id: "g8",
    title: "Managing Homesickness",
    category: "Wellbeing",
    summary: "Practical routines and campus supports for the harder weeks.",
    readTime: "5 min read",
    emoji: "💚",
    accent: "amber",
  },
  {
    id: "g9",
    title: "Landing Your First Internship",
    category: "Career",
    summary: "Resume structure, outreach messages and interview prep timeline.",
    readTime: "9 min read",
    emoji: "💼",
    accent: "primary",
  },
];

export const guideCategories = [
  "All",
  "Academic Success",
  "Campus Life",
  "International Student Tips",
  "Wellbeing",
  "Career",
];

export const currentUser = {
  name: "Vimarsh Khattar",
  initials: "VK",
  major: "Computer Science",
  university: "University of Toronto",
  year: "3rd year · Class of 2027",
  country: "India",
  flag: "🇮🇳",
  languages: ["English", "Hindi", "Punjabi"],
  interests: ["Full-stack development", "AI", "Basketball", "Photography"],
  bio: "International student building products at the intersection of AI and student life. Currently looking for summer internships and people to build side projects with.",
  lookingFor: ["Study partners", "Hackathon teammates", "Internship referrals", "Friends from home"],
  profileCompletion: 82,
};

export const connections = {
  current: students.slice(0, 4).map((s) => ({
    ...s,
    lastActive: ["Active now", "2h ago", "Yesterday", "3 days ago"][Number(s.id) - 1],
  })),
  pending: students.slice(4, 6).map((s) => ({ ...s, note: "Wants to connect with you" })),
  suggested: students.slice(6),
};

export const activity = [
  { id: "a1", text: "Mei Lin Chen accepted your connection request", time: "20 minutes ago", type: "connection" },
  { id: "a2", text: "You marked Campus Hackathon Kickoff as attending", time: "3 hours ago", type: "event" },
  { id: "a3", text: "New guide published: Landing Your First Internship", time: "Yesterday", type: "guide" },
  { id: "a4", text: "Tobi Adeyemi sent you a connection request", time: "2 days ago", type: "connection" },
];

export const suggestedPrompts = [
  "How do I email a professor about a missed deadline?",
  "What clubs fit someone into AI and basketball?",
  "Help me plan my first week on campus",
  "Explain how course drop deadlines work",
  "Find events for international students this month",
  "Draft a message to introduce myself to a study group",
];
