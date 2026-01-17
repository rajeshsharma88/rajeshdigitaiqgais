import { Course, Testimonial, Stat, Lead } from './types';

export const APP_NAME = "Rajesh Digital IQ";

export const PG_DIPLOMA_COURSE: Course = {
  id: "pg-digital-marketing",
  title: "Post Graduate Diploma in Digital Marketing",
  shortDescription: "A one-year intensive program designed to equip graduates with comprehensive theoretical knowledge and hands-on practical skills in digital strategy.",
  fullDescription: "The Post Graduate Diploma in Digital Marketing is a one-year intensive program designed to equip graduates with comprehensive theoretical knowledge and hands-on practical skills in digital marketing. The curriculum aligns with current industry requirements and prepares learners for professional roles in marketing, advertising, analytics, and digital strategy.",
  duration: "1 Year",
  level: "Post Graduate",
  eligibility: "Graduation in any discipline",
  credits: 48,
  price: 120000,
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  objectives: [
    "To provide a strong foundation in marketing and digital concepts",
    "To develop competence in planning and executing digital campaigns",
    "To build analytical and data-driven decision-making skills",
    "To prepare students for employment, freelancing, or entrepreneurship"
  ],
  outcomes: [
    "Independently plan and launch lead generation campaigns",
    "Master SEO, SEM, and Social Media algorithms",
    "Analyze data to optimize marketing ROI",
    "Build a professional portfolio for career advancement"
  ],
  completionStatement: "On successful completion of all courses and the capstone project, the student shall be awarded the Post Graduate Diploma in Digital Marketing.",
  assessment: {
    internal: 40,
    endSemester: 40,
    project: 20
  },
  semesters: [
    {
      id: 1,
      title: "Semester I: Digital Marketing Foundations",
      description: "Building the bedrock of marketing principles and digital ecosystems.",
      modules: [
        {
          code: "PGDDM-101",
          title: "Marketing Principles & Consumer Behavior",
          topics: [
            "Introduction to marketing concepts and scope",
            "Evolution of marketing and digital transformation",
            "Consumer psychology and buying behavior",
            "Segmentation, targeting, and positioning strategies",
            "Marketing funnels and branding fundamentals"
          ]
        },
        {
          code: "PGDDM-102",
          title: "Digital Marketing Ecosystem",
          topics: [
            "Overview of digital channels and platforms",
            "Owned, paid, and earned media",
            "Customer journey mapping",
            "Integrated digital marketing strategies"
          ]
        },
        {
          code: "PGDDM-103",
          title: "Website & Landing Page Management",
          topics: [
            "Website architecture and CMS basics",
            "User experience and responsive design",
            "Landing page structure and conversion elements",
            "Website optimization fundamentals"
          ]
        },
        {
          code: "PGDDM-104",
          title: "Search Engine Optimization",
          topics: [
            "Search engine functioning and algorithms",
            "Keyword research and on-page optimization",
            "Technical SEO and link building",
            "Local SEO and SEO tools"
          ]
        },
        {
          code: "PGDDM-105",
          title: "Content & Social Media Marketing",
          topics: [
            "Content strategy and planning",
            "Copywriting and blog writing",
            "Organic social media platforms",
            "Content calendars and engagement metrics"
          ]
        },
        {
          code: "PGDDM-106",
          title: "Introduction to Paid Media",
          topics: [
            "Paid advertising models and objectives",
            "Creative strategy and ad copy basics",
            "Budgeting and testing frameworks",
            "Performance measurement"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Semester II: Advanced Digital Marketing",
      description: "Mastering complex strategies, analytics, and career development.",
      modules: [
        {
          code: "PGDDM-201",
          title: "Search Engine Marketing",
          topics: [
            "Search advertising principles",
            "Campaign setup and keyword strategy",
            "Bid management and optimization",
            "Conversion tracking and reporting"
          ]
        },
        {
          code: "PGDDM-202",
          title: "Social Media Advertising",
          topics: [
            "Advertising on social platforms",
            "Audience targeting and segmentation",
            "Creative testing and scaling",
            "Campaign analysis"
          ]
        },
        {
          code: "PGDDM-203",
          title: "Lead Generation & Funnel Design",
          topics: [
            "Lead generation models",
            "Funnel architecture",
            "Follow-up and automation systems",
            "Lead quality optimization"
          ]
        },
        {
          code: "PGDDM-204",
          title: "Email Marketing & Automation",
          topics: [
            "Email marketing fundamentals",
            "Automation workflows",
            "Campaign measurement and optimization"
          ]
        },
        {
          code: "PGDDM-205",
          title: "Digital Analytics",
          topics: [
            "Web analytics principles",
            "Event and conversion tracking",
            "Data interpretation and insights"
          ]
        },
        {
          code: "PGDDM-206",
          title: "Career Development & Freelancing",
          topics: [
            "Career paths in digital marketing",
            "Freelancing and consulting models",
            "Portfolio and proposal development"
          ]
        }
      ]
    }
  ]
};

export const LEAD_GEN_COURSE: Course = {
  id: "lead-gen-mastery",
  title: "Digital Marketing for Lead Generation",
  shortDescription: "A practical, outcome-driven program to master lead generation. Learn to plan, launch, and optimize campaigns with clarity.",
  fullDescription: "This 30-hour intensive program is designed to take you from beginner to intermediate mastery in lead generation. You will learn how to build complete lead generation funnels, set up paid advertising on major platforms, implement conversion systems, and scale your results using analytics. The course is entirely online, practical, and hands-on.",
  duration: "30 Hours",
  level: "Beginner to Intermediate",
  eligibility: "Basic Computer Knowledge",
  credits: 15,
  price: 50000,
  image: "https://picsum.photos/id/20/800/600",
  objectives: [
    "To understand the foundations of market research and audience targeting",
    "To master paid advertising setups and budgeting",
    "To build effective landing pages and automation sequences",
    "To learn data-driven optimization and scaling strategies"
  ],
  outcomes: [
    "A complete lead generation funnel",
    "Follow-up and tracking system",
    "Independently plan and launch campaigns",
    "Optimize lead generation with control"
  ],
  completionStatement: "Graduates will be able to independently plan, launch, and optimize lead generation campaigns with clarity and control.",
  assessment: {
    internal: 50,
    endSemester: 0,
    project: 50
  },
  semesters: [
    {
      id: 1,
      title: "Program Curriculum",
      description: "A comprehensive journey from foundations to scaling.",
      modules: [
        {
          code: "LGM-101",
          title: "Lead Generation Foundations",
          topics: [
            "Market Research",
            "Audience Targeting",
            "Channel Strategy"
          ]
        },
        {
          code: "LGM-102",
          title: "Paid Advertising for Lead Generation",
          topics: [
            "Platform Setup",
            "Ad Copy & Creative",
            "Budgeting & Bidding"
          ]
        },
        {
          code: "LGM-103",
          title: "Lead Conversion Systems",
          topics: [
            "Landing Pages",
            "CRM & Automation",
            "Email Sequences"
          ]
        },
        {
          code: "LGM-104",
          title: "Optimization & Scaling",
          topics: [
            "Analytics Reporting",
            "A/B Testing",
            "Scaling Strategies"
          ]
        }
      ]
    }
  ]
};

export const COURSES = [PG_DIPLOMA_COURSE, LEAD_GEN_COURSE];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Manager",
    company: "TechFlow Inc.",
    content: "The practical approach at Rajesh Digital IQ transformed how I view digital strategy. The Semester 2 module on Analytics was a game changer for my career.",
    image: "https://picsum.photos/100/100"
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Freelance Consultant",
    company: "Self-Employed",
    content: "I started my freelancing journey immediately after the Career Development module. The portfolio I built during the Capstone project landed me my first 3 clients.",
    image: "https://picsum.photos/101/101"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Digital Strategist",
    company: "Creative Hub",
    content: "Comprehensive, rigorous, and incredibly relevant. The depth of the SEO and Paid Media curriculum is unmatched by other short courses.",
    image: "https://picsum.photos/102/102"
  }
];

export const STATS: Stat[] = [
  { label: "Graduates Placed", value: "850+" },
  { label: "Hiring Partners", value: "40+" },
  { label: "Avg. Salary Hike", value: "55%" },
  { label: "Completion Rate", value: "94%" }
];

export const MOCK_LEADS: Lead[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+1234567890", courseInterest: "PG Diploma", status: "New", date: "2023-10-25" },
  { id: "2", name: "Jane Smith", email: "jane@test.com", phone: "+1987654321", courseInterest: "SEO Module", status: "Contacted", date: "2023-10-24" },
  { id: "3", name: "Robert Brown", email: "bob@brown.com", phone: "+1122334455", courseInterest: "PG Diploma", status: "Enrolled", date: "2023-10-20" },
];