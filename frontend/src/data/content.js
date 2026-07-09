// Central content: courses, locations, and blog posts

export const courses = [
  {
    id: 'math',
    name: 'Mathematics',
    color: 'violet',
    tagline: 'Build strong number sense and problem-solving confidence.',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    intro:
      'Our online Mathematics tutoring takes students from early number sense all the way to advanced calculus. Every lesson is a private 1-on-1 session, tailored to your child\'s pace, curriculum and goals — whether that\'s catching up, keeping up, or getting ahead.',
    highlights: [
      'Common Core aligned curriculum for US students',
      'Step-by-step problem solving that builds true understanding',
      'Exam & test prep (school tests, SAT, competitive math)',
      'Weekly progress updates for parents',
    ],
    levels: [
      { grade: 'K-2', topics: 'Number sense, Basic addition & subtraction, Shapes & patterns, Counting' },
      { grade: '3-5', topics: 'Multiplication & division, Fractions, Decimals, Geometry basics, Word problems' },
      { grade: '6-8', topics: 'Pre-algebra, Ratios & proportions, Integer operations, Basic geometry, Statistics' },
      { grade: '9-12', topics: 'Algebra I & II, Geometry, Trigonometry, Pre-calculus, Calculus' },
    ],
  },
  {
    id: 'science',
    name: 'Science',
    color: 'emerald',
    tagline: 'Hands-on, curiosity-driven learning across all branches.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    intro:
      'Science comes alive in our 1-on-1 online lessons. From simple experiments for young learners to Biology, Chemistry and Physics for high schoolers, we make complex concepts simple, visual and memorable.',
    highlights: [
      'Concept-first teaching, not rote memorisation',
      'Diagrams, simulations and real-world examples',
      'Board & standardized exam preparation',
      'Covers Biology, Chemistry, Physics & Earth Science',
    ],
    levels: [
      { grade: 'K-2', topics: 'Life science basics, Weather & seasons, Five senses, Simple experiments' },
      { grade: '3-5', topics: 'Earth science, Matter & energy, Life cycles, Scientific method' },
      { grade: '6-8', topics: 'Physical science, Cell biology, Ecosystems, Basic chemistry & physics' },
      { grade: '9-12', topics: 'Biology, Chemistry, Physics, Environmental science, Advanced labs' },
    ],
  },
  {
    id: 'english',
    name: 'English',
    color: 'sky',
    tagline: 'Read, write, and communicate with clarity and confidence.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    intro:
      'Strong English skills open every door. Our online English tutoring builds reading comprehension, grammar, writing and confident communication — from first words to college-ready essays and exam prep.',
    highlights: [
      'Reading comprehension & vocabulary building',
      'Grammar, creative and academic writing',
      'Public speaking and confidence building',
      'Exam prep (school English, SAT, TOEFL, IELTS)',
    ],
    levels: [
      { grade: 'K-2', topics: 'Alphabet, Early reading, Sight words, Sentence building, Storytelling' },
      { grade: '3-5', topics: 'Reading comprehension, Grammar, Paragraph writing, Vocabulary building' },
      { grade: '6-8', topics: 'Essay writing, Advanced grammar, Literature analysis, Public speaking' },
      { grade: '9-12', topics: 'Creative & academic writing, Literature, Critical reading, Exam prep (SAT/TOEFL)' },
    ],
  },
  {
    id: 'hindi',
    name: 'Hindi',
    color: 'amber',
    tagline: 'Master reading, writing and grammar with a native tutor.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    intro:
      'Learn Hindi with a native-speaking online tutor — perfect for heritage learners, expat families and students following Indian curricula. We cover the Devanagari script, grammar (vyakaran), reading, writing and composition.',
    highlights: [
      'Devanagari script (varnamala) & matras from scratch',
      'Grammar (vyakaran), composition & comprehension',
      'Great for NRI / expat families worldwide',
      'CBSE / ICSE board exam preparation',
    ],
    levels: [
      { grade: 'K-2', topics: 'Varnamala (अ-ज्ञ), Matras, Simple words, Basic reading' },
      { grade: '3-5', topics: 'Reading & writing, Sentence formation, Vocabulary, Short stories' },
      { grade: '6-8', topics: 'Vyakaran (Grammar), Composition, Comprehension, Idioms & proverbs' },
      { grade: '9-12', topics: 'Advanced grammar, Essay & letter writing, Literature, Board exam prep' },
    ],
  },
  {
    id: 'phonics',
    name: 'Phonics',
    color: 'rose',
    tagline: 'The foundation of confident, fluent reading for young learners.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200',
    intro:
      'Phonics is the bridge between letters and reading. Our structured, playful phonics program helps young learners recognise sounds, blend them into words and become confident, fluent readers — one joyful step at a time.',
    highlights: [
      'Structured, systematic synthetic phonics',
      'Sounds → blending → sight words → fluency',
      'Playful, engaging lessons for young learners',
      'Perfect head-start for reading and spelling',
    ],
    levels: [
      { grade: 'Level 1', topics: 'Letter sounds, Single-letter phonics, Recognition' },
      { grade: 'Level 2', topics: 'Blending sounds, CVC words, Digraphs (sh, ch, th)' },
      { grade: 'Level 3', topics: 'Sight words, Word families, Reading short sentences' },
      { grade: 'Level 4', topics: 'Reading fluency, Comprehension, Confident independent reading' },
    ],
  },
];

export const regions = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    blurb: 'Trusted online tutors across the USA for K-12 Math, Science & English.',
    intro:
      'LearnWithVijayshree provides private 1-on-1 online tutoring to students across all 50 US states. With flexible evening and weekend slots across every US time zone, hiring a top online teacher for your child has never been easier — no commute, no hassle, just results.',
    areas: [
      'California (Los Angeles, San Francisco, San Diego)',
      'New York (NYC, Brooklyn, Buffalo)',
      'Florida (Miami, Orlando, Tampa)',
      'Washington (Seattle, Spokane)',
      'Alaska (Anchorage, Fairbanks)',
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    blurb: 'Private 1-on-1 online tutoring for Canadian students, coast to coast.',
    intro:
      'From Ontario to British Columbia, Canadian families choose LearnWithVijayshree for personalised online tutoring in Math, Science and English. Lessons are scheduled around school timetables and available across all Canadian provinces.',
    areas: [
      'Toronto, Ontario',
      'Vancouver, British Columbia',
      'Montreal, Quebec',
      'Calgary, Alberta',
      'Ottawa, Ontario',
    ],
  },
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    blurb: 'Flexible online lessons across European time zones.',
    intro:
      'Students across Europe learn with us from the comfort of home. Whether you follow the British, IB or a national curriculum, our online teacher adapts every 1-on-1 session to your needs, with convenient CET/GMT scheduling.',
    areas: [
      'London, United Kingdom',
      'Paris, France',
      'Berlin, Germany',
      'Amsterdam, Netherlands',
      'Dublin, Ireland',
    ],
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    blurb: 'Expert online teachers for Australian curriculum and beyond.',
    intro:
      'Australian families trust LearnWithVijayshree for reliable, engaging online tutoring. We support the Australian Curriculum and NAPLAN preparation, with lesson times that fit neatly around the school day across every state.',
    areas: [
      'Sydney, New South Wales',
      'Melbourne, Victoria',
      'Brisbane, Queensland',
      'Perth, Western Australia',
      'Adelaide, South Australia',
    ],
  },
  {
    id: 'dubai',
    name: 'Dubai (UAE)',
    flag: '🇦🇪',
    blurb: 'Hire a private online tutor for students across the Emirates.',
    intro:
      'In Dubai and across the UAE, parents hire our online teacher for private 1-on-1 support in Math, Science, English and Hindi. We work with British, American, IB and CBSE curricula common in the region, with flexible Gulf-time scheduling.',
    areas: [
      'Dubai Marina',
      'Downtown Dubai',
      'Jumeirah',
      'Deira',
      'Business Bay',
    ],
  },
];

export const blogPosts = [
  {
    slug: '5-ways-to-make-math-fun',
    title: '5 Ways to Make Math Fun for Kids',
    excerpt:
      'Discover creative strategies to help your child develop a love for mathematics through engaging activities and real-world applications.',
    date: 'June 2, 2026',
    readTime: '5 min read',
    category: 'Mathematics',
    image:
      'https://images.unsplash.com/photo-1574660430686-b2a255cfce68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBzdHVkeWluZyUyMG1hdGh8ZW58MHx8fHwxNzY5ODg3NzMyfDA&ixlib=rb-4.1.0&q=85',
    content: [
      "Many children believe math is boring or too hard, but the truth is that mathematics can be one of the most exciting subjects when taught the right way. As an online math tutor working with students across the USA, Canada, Europe, Australia and Dubai, I have seen how the right approach transforms a struggling learner into a confident problem solver.",
      "1. Connect math to real life. Cooking, shopping, and sports are full of numbers. Ask your child to double a recipe, calculate change at a store, or track their favourite team's statistics. When math has a purpose, it stops feeling abstract.",
      "2. Use games and puzzles. Board games, card games, and logic puzzles secretly build arithmetic and reasoning skills. A quick game of cards can teach probability and addition without a single worksheet.",
      "3. Celebrate mistakes. Every wrong answer is a chance to understand a concept more deeply. Praise effort and persistence rather than only correct answers, and watch your child's willingness to try grow.",
      "4. Visualise problems. Drawing pictures, using blocks, or acting out word problems helps young learners see the math. Visual thinking is especially powerful for fractions, geometry and early algebra.",
      "5. Keep sessions short and positive. Ten focused minutes a day beats an hour of frustration once a week. In our 1-on-1 online sessions, we keep the pace comfortable and always end on a win.",
      "Ready to help your child fall in love with numbers? Book a free demo class and let's build math confidence together.",
    ],
  },
  {
    slug: 'benefits-of-1-on-1-online-tutoring',
    title: 'The Benefits of 1-on-1 Online Tutoring',
    excerpt:
      'Learn why personalized online tutoring is more effective than traditional classroom learning for many students.',
    date: 'May 24, 2026',
    readTime: '6 min read',
    category: 'Learning Tips',
    image:
      'https://images.unsplash.com/photo-1613271752699-ede48a285196?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGtpZHMlMjBmdW58ZW58MHx8fHwxNzY5ODg3NzM3fDA&ixlib=rb-4.1.0&q=85',
    content: [
      "Private 1-on-1 online tutoring has become the preferred choice for families around the world, and for good reason. Unlike a crowded classroom where a teacher divides attention among thirty students, personalized tutoring focuses entirely on your child.",
      "Personalised pace. Every student learns differently. In a 1-on-1 setting, we can slow down on tricky topics and speed through concepts your child already understands, making every minute count.",
      "A safe space to ask questions. Many students stay quiet in class for fear of judgement. Online, one-on-one, they feel comfortable asking anything, which leads to genuine understanding rather than memorisation.",
      "Flexible scheduling across time zones. Whether you are in New York, London, Sydney or Dubai, sessions can be booked at a time that suits your family, with no commute required.",
      "Immediate, targeted feedback. Mistakes are corrected in the moment, and lessons adapt in real time to what your child needs that day.",
      "Stronger parent visibility. Parents receive regular updates on progress and clear next steps, staying involved without having to become the teacher themselves.",
      "If you have been considering extra support for your child, a personalised online tutor may be the most efficient investment you can make. Book a free demo to experience the difference.",
    ],
  },
  {
    slug: 'how-to-prepare-for-science-exams',
    title: 'How to Prepare for Science Exams',
    excerpt:
      'Effective study techniques and test-taking strategies to help your child ace their science exams with confidence.',
    date: 'May 15, 2026',
    readTime: '5 min read',
    category: 'Science',
    image:
      'https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0dXRvciUyMHRlYWNoaW5nJTIwbGFwdG9wfGVufDB8fHx8MTc2OTg4Nzc0Mnww&ixlib=rb-4.1.0&q=85',
    content: [
      "Science exams reward understanding, not cramming. With the right preparation strategy, your child can walk into any test feeling calm and ready. Here is the approach we use with our students.",
      "Start with the syllabus. Break the topics into small chunks and create a simple study calendar. Spacing revision over several days is far more effective than one long night before the exam.",
      "Understand, then memorise. Focus first on why something happens, then learn the definitions and diagrams. Concepts that are understood are remembered far longer.",
      "Practice with past papers. Nothing builds confidence like answering real exam-style questions. Time each practice session to get comfortable with the pace of the exam.",
      "Master diagrams and labels. In biology and physics especially, clean labelled diagrams can earn easy marks. Practice drawing them from memory.",
      "Explain it out loud. If your child can teach a concept to you in simple words, they truly understand it. This 'teach-back' method is one of the fastest ways to lock in knowledge.",
      "Rest and review. A good night's sleep before the exam beats last-minute cramming. Do a light review of key formulas in the morning and trust the preparation.",
      "Want a structured revision plan tailored to your child's exam? Book a free demo class and we will map it out together.",
    ],
  },
  {
    slug: 'building-reading-confidence-with-phonics',
    title: 'Building Reading Confidence with Phonics',
    excerpt:
      'Why phonics is the foundation of fluent reading and how structured lessons help young learners thrive.',
    date: 'May 6, 2026',
    readTime: '4 min read',
    category: 'Phonics & English',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=srgb&fm=jpg&q=85',
    content: [
      "Phonics is the bridge between letters and reading. When young learners understand the sounds that letters make, reading stops being guesswork and becomes a skill they can build with confidence.",
      "Sounds before spelling. We begin with individual letter sounds, then move to blending them together into simple words. This step-by-step method ensures no gaps are left behind.",
      "Little and often. Short, playful daily practice works far better than long sessions. Songs, flashcards and games keep young learners engaged and eager.",
      "Sight words matter too. Some common words don't follow phonics rules, so we practice these separately until they become instantly recognisable.",
      "Reading aloud together. Once children can blend sounds, reading simple sentences aloud builds fluency and pride. Celebrate every book finished, no matter how small.",
      "Strong phonics skills in the early years set children up for a lifetime of confident reading and writing. Book a free demo to see how our structured phonics program can help your child.",
    ],
  },
];
