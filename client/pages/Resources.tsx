import { useState } from "react";

// Icon components
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.9995 14.0005L11.1328 11.1338" stroke="#9CA3AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FilterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6654 2H1.33203L6.66536 8.30667V12.6667L9.33203 14V8.30667L14.6654 2Z" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CameraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29 8H19L14 14H8C6.93913 14 5.92172 14.4214 5.17157 15.1716C4.42143 15.9217 4 16.9391 4 18V36C4 37.0609 4.42143 38.0783 5.17157 38.8284C5.92172 39.5786 6.93913 40 8 40H40C41.0609 40 42.0783 39.5786 42.8284 38.8284C43.5786 38.0783 44 37.0609 44 36V18C44 16.9391 43.5786 15.9217 42.8284 15.1716C42.0783 14.4214 41.0609 14 40 14H34L29 8Z" stroke="#EB414B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 32C27.3137 32 30 29.3137 30 26C30 22.6863 27.3137 20 24 20C20.6863 20 18 22.6863 18 26C18 29.3137 20.6863 32 24 32Z" stroke="#EB414B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 28C40.98 25.08 44 21.58 44 17C44 14.0826 42.8411 11.2847 40.7782 9.22183C38.7153 7.15893 35.9174 6 33 6C29.48 6 27 7 24 10C21 7 18.52 6 15 6C12.0826 6 9.28473 7.15893 7.22183 9.22183C5.15893 11.2847 4 14.0826 4 17C4 21.6 7 25.1 10 28L24 42L38 28Z" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V40C8 41.0609 8.42143 42.0783 9.17157 42.8284C9.92172 43.5786 10.9391 44 12 44H36C37.0609 44 38.0783 43.5786 38.8284 42.8284C39.5786 42.0783 40 41.0609 40 40V14L30 4Z" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 4V12C28 13.0609 28.4214 14.0783 29.1716 14.8284C29.9217 15.5786 30.9391 16 32 16H40" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 18H16" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 26H16" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 34H16" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BulbIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 28C30.4 26 31.4 24.6 33 23C35 21.2 36 18.6 36 16C36 12.8174 34.7357 9.76516 32.4853 7.51472C30.2348 5.26428 27.1826 4 24 4C20.8174 4 17.7652 5.26428 15.5147 7.51472C13.2643 9.76516 12 12.8174 12 16C12 18 12.4 20.4 15 23C16.4 24.4 17.6 26 18 28" stroke="#CA8A04" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 36H30" stroke="#CA8A04" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 44H28" stroke="#CA8A04" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 1V3" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 1V3" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 2H2.5C1.94772 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V3C10.5 2.44772 10.0523 2 9.5 2Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.5 5H10.5" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#F9FAFB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.66797 6.66699L8.0013 10.0003L11.3346 6.66699" stroke="#F9FAFB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10V2" stroke="#F9FAFB" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33203 7.99967C1.33203 7.99967 3.33203 3.33301 7.9987 3.33301C12.6654 3.33301 14.6654 7.99967 14.6654 7.99967C14.6654 7.99967 12.6654 12.6663 7.9987 12.6663C3.33203 12.6663 1.33203 7.99967 1.33203 7.99967Z" stroke="#09090B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#09090B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIconSmall = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.9987 2.66699H7.9987C7.29145 2.66699 6.61318 2.94794 6.11308 3.44804C5.61298 3.94814 5.33203 4.62641 5.33203 5.33366V26.667C5.33203 27.3742 5.61298 28.0525 6.11308 28.5526C6.61318 29.0527 7.29145 29.3337 7.9987 29.3337H23.9987C24.7059 29.3337 25.3842 29.0527 25.8843 28.5526C26.3844 28.0525 26.6654 27.3742 26.6654 26.667V9.33366L19.9987 2.66699Z" stroke="#9CA3AF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.668 2.66699V8.00033C18.668 8.70757 18.9489 9.38585 19.449 9.88594C19.9491 10.386 20.6274 10.667 21.3346 10.667H26.668" stroke="#9CA3AF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.3346 12H10.668" stroke="#9CA3AF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.3346 17.333H10.668" stroke="#9CA3AF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.3346 22.667H10.668" stroke="#9CA3AF" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/92332e7f2ac6463bb386ac57dc63f0b1cdde3eb0?width=176" 
              alt="NGO Logo" 
              className="h-22 w-22"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Home</a>
            <a href="/programs" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Programs</a>
            <a href="/resources" className="text-ngo-primary font-niramit text-base font-medium">Resources</a>
            <a href="/get-involved" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Get Involved</a>
            <a href="/about" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">About</a>
            <a href="/contact" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Contact</a>
          </nav>

          {/* Donate Button */}
          <a href="/donate" className="flex items-center gap-3 bg-white rounded-full px-3 py-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" fill="#E61C1F"/>
              </svg>
              <span className="text-ngo-secondary font-merriweather text-base font-bold">Donate now</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-r from-ngo-primary to-red-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-white font-niramit text-5xl font-bold mb-6">
          Resources & Impact
        </h1>
        <p className="text-blue-200 font-niramit text-xl leading-relaxed max-w-2xl mx-auto">
          Explore our journey, achievements, and materials that showcase the positive impact we're making in our community
        </p>
      </div>
    </section>
  );
};

const SearchFilters = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-8">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md font-niramit text-sm focus:outline-none focus:ring-2 focus:ring-ngo-primary"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 px-3 py-3 border border-gray-200 rounded-md">
              <FilterIcon />
              <span className="font-niramit text-sm">Filter by type</span>
              <ChevronDownIcon />
            </div>
            <div className="flex items-center gap-4 px-3 py-3 border border-gray-200 rounded-md">
              <span className="font-niramit text-sm">Filter by program</span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "2,500+", label: "Photos & Videos" },
    { number: "150+", label: "Success Stories" },
    { number: "25+", label: "Annual Reports" },
    { number: "100+", label: "Awareness Materials" }
  ];

  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-ngo-primary font-niramit text-3xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-niramit text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PhotoGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All Photos");
  
  const filters = [
    "All Photos",
    "Healthcare Services", 
    "Education Programs",
    "Community Events",
    "Environmental Initiatives",
    "Cultural Activities"
  ];

  const photos = [
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Free Medical Camp - Rural Area",
      description: "Providing essential healthcare services to underserved communities",
      date: "March 15, 2024",
      category: "Healthcare",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CameraIcon />
          </div>
          <h2 className="text-black font-niramit text-3xl font-bold mb-6">Photo Gallery</h2>
          <p className="text-gray-600 font-niramit text-base max-w-2xl mx-auto">
            Witness the impact of our programs through powerful images that tell the story of transformation and hope
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md border text-sm font-niramit font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-ngo-primary text-white border-ngo-primary"
                  : "bg-white text-black border-gray-200 hover:bg-gray-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-ngo-primary text-white px-3 py-1 rounded-full text-xs font-niramit font-bold">
                    {photo.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-black font-niramit text-base font-bold mb-2">{photo.title}</h3>
                <p className="text-gray-600 font-niramit text-sm mb-4">{photo.description}</p>
                <div className="flex items-center text-gray-500">
                  <CalendarIcon />
                  <span className="ml-1 font-niramit text-xs">{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors">
            View Complete Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "From Illness to Health: Maria's Journey",
      description: "How our free medical consultations helped Maria overcome her chronic condition and return to a healthy life.",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Healthcare",
      image: "/placeholder.svg"
    },
    {
      title: "Education Opens Doors: Raj's Success",
      description: "A young student's transformation through our educational support program, leading to college admission.",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Education",
      image: "/placeholder.svg"
    },
    {
      title: "Community Garden: Growing Together",
      description: "How our tree plantation drive transformed a barren area into a thriving community garden.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Environment",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <HeartIcon />
          </div>
          <h2 className="text-black font-niramit text-3xl font-bold mb-6">Success Stories</h2>
          <p className="text-gray-600 font-niramit text-base max-w-2xl mx-auto">
            Real stories of transformation, hope, and positive change from the lives we've touched
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-niramit font-bold">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-black font-niramit text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600 font-niramit text-base mb-4">{story.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <CalendarIcon />
                    <span className="ml-1 font-niramit text-sm">{story.date}</span>
                  </div>
                  <span className="text-gray-500 font-niramit text-sm">{story.readTime}</span>
                </div>
                <button className="w-full border border-gray-200 text-black py-3 rounded-md font-niramit text-sm font-medium hover:bg-gray-50 transition-colors">
                  Read Full Story
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors">
            View All Stories
          </button>
        </div>
      </div>
    </section>
  );
};

const ReportsSection = () => {
  const reports = [
    {
      title: "Annual Report 2023",
      description: "Comprehensive overview of our programs, achievements, and financial transparency for 2023.",
      pages: "48 pages",
      size: "2.5 MB",
      downloads: "1,234 downloads",
      type: "Annual Report"
    },
    {
      title: "Healthcare Impact Assessment",
      description: "Detailed analysis of our healthcare programs' effectiveness and community impact.",
      pages: "32 pages",
      size: "1.8 MB",
      downloads: "856 downloads",
      type: "Impact Report"
    },
    {
      title: "Education Program Evaluation",
      description: "Academic study on the effectiveness of our educational support initiatives.",
      pages: "24 pages",
      size: "1.2 MB",
      downloads: "642 downloads",
      type: "Research Paper"
    },
    {
      title: "Financial Transparency Report",
      description: "Detailed breakdown of fund utilization and financial accountability measures.",
      pages: "16 pages",
      size: "900 KB",
      downloads: "1,089 downloads",
      type: "Financial Report"
    },
    {
      title: "Environmental Initiative Outcomes",
      description: "Results and environmental impact of our tree plantation and cleanup drives.",
      pages: "20 pages",
      size: "1.5 MB",
      downloads: "723 downloads",
      type: "Impact Report"
    },
    {
      title: "Community Engagement Study",
      description: "Analysis of community participation and engagement in our programs.",
      pages: "28 pages",
      size: "1.7 MB",
      downloads: "567 downloads",
      type: "Research Paper"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <DocumentIcon />
          </div>
          <h2 className="text-black font-geist text-3xl font-bold mb-6">Reports & Publications</h2>
          <p className="text-gray-600 font-niramit text-base max-w-2xl mx-auto">
            Access our annual reports, impact assessments, and research publications showcasing our work and achievements
          </p>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reports.map((report, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-black text-xs font-niramit font-bold rounded-full mb-2">
                      {report.type}
                    </span>
                    <h3 className="text-black font-niramit text-lg font-bold mb-2">{report.title}</h3>
                  </div>
                  <DocumentIconSmall />
                </div>
                <p className="text-gray-600 font-niramit text-sm mb-6">{report.description}</p>
                
                <div className="flex justify-between items-center text-gray-600 text-sm mb-6">
                  <span>{report.pages}</span>
                  <span>{report.size}</span>
                  <span>{report.downloads}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                    <DownloadIcon />
                    Download
                  </button>
                  <button className="border border-gray-200 text-black px-3 py-2 rounded-md font-niramit text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    <EyeIcon />
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors">
            View All Reports
          </button>
        </div>
      </div>
    </section>
  );
};

const AwarenessMaterials = () => {
  const materials = [
    {
      title: "Cancer Awareness Brochure",
      format: "PDF",
      languages: "3",
      downloads: "2,345",
      category: "Healthcare"
    },
    {
      title: "AIDS Prevention Guide",
      format: "PDF",
      languages: "2",
      downloads: "1,876",
      category: "Healthcare"
    },
    {
      title: "Asthma Management Tips",
      format: "Infographic",
      languages: "2",
      downloads: "1,234",
      category: "Healthcare"
    },
    {
      title: "Environmental Protection Poster",
      format: "PDF",
      languages: "2",
      downloads: "987",
      category: "Environment"
    },
    {
      title: "Nutrition Guidelines",
      format: "Booklet",
      languages: "3",
      downloads: "1,567",
      category: "Health"
    },
    {
      title: "Child Safety Handbook",
      format: "PDF",
      languages: "2",
      downloads: "1,345",
      category: "Safety"
    },
    {
      title: "Mental Health Awareness",
      format: "Infographic",
      languages: "2",
      downloads: "1,123",
      category: "Healthcare"
    },
    {
      title: "Women's Health Guide",
      format: "Booklet",
      languages: "3",
      downloads: "1,789",
      category: "Healthcare"
    }
  ];

  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <BulbIcon />
          </div>
          <h2 className="text-black font-niramit text-3xl font-bold mb-6">Awareness Materials</h2>
          <p className="text-gray-600 font-niramit text-base max-w-2xl mx-auto">
            Educational resources, brochures, and materials to spread awareness about important health and social issues
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {materials.map((material, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DocumentIconSmall />
                  </div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-black text-xs font-niramit font-bold rounded-full">
                    {material.category}
                  </span>
                </div>
                
                <h3 className="text-black font-niramit text-base font-bold text-center mb-4">{material.title}</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Format:</span>
                    <span>{material.format}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Languages:</span>
                    <span>{material.languages}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Downloads:</span>
                    <span>{material.downloads}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gray-800 text-white px-3 py-2 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                  <DownloadIcon />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md font-niramit text-sm font-medium hover:bg-gray-900 transition-colors">
            View All Materials
          </button>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-white font-niramit text-3xl font-bold mb-6">Stay Updated</h2>
        <p className="text-blue-200 font-geist text-base mb-8">
          Subscribe to our newsletter to receive the latest updates, success stories, and new resources
        </p>
        <div className="flex items-center gap-6 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-3 py-3 border border-gray-200 rounded-md font-niramit text-sm focus:outline-none focus:ring-2 focus:ring-ngo-primary"
          />
          <button className="bg-red-600 text-white px-4 py-3 rounded-md font-niramit text-sm font-medium hover:bg-red-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Logo placeholder */}
              <div className="h-8 w-32 bg-gray-600 rounded"></div>
            </div>
            <p className="text-gray-300 font-niramit text-base leading-relaxed mb-6">
              Transforming lives through comprehensive healthcare, education, and community support services since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-niramit text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 font-geist text-base hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="text-gray-300 font-geist text-base hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Our Programs */}
          <div>
            <h3 className="text-white font-geist text-lg font-bold mb-6">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Education & Skills</a></li>
              <li><a href="#" className="text-gray-300 font-geist text-base hover:text-white transition-colors">Community Support</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Arts & Culture</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Environmental Protection</a></li>
              <li><a href="#" className="text-gray-300 font-niramit text-base hover:text-white transition-colors">Specialized Care</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-niramit text-lg font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M16.6673 8.33366C16.6673 13.3337 10.0007 18.3337 10.0007 18.3337C10.0007 18.3337 3.33398 13.3337 3.33398 8.33366C3.33398 6.56555 4.03636 4.86986 5.28661 3.61961C6.53685 2.36937 8.23254 1.66699 10.0007 1.66699C11.7688 1.66699 13.4645 2.36937 14.7147 3.61961C15.9649 4.86986 16.6673 6.56555 16.6673 8.33366Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10.833C11.3807 10.833 12.5 9.71372 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61929 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.71372 8.61929 10.833 10 10.833Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="text-gray-300 font-geist text-base">123 Community Street</div>
                  <div className="text-gray-300 font-geist text-base">Hope City, HC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-gray-300 font-niramit text-base">+1 (555) 123-4567</div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M16.666 3.33301H3.33268C2.41221 3.33301 1.66602 4.0792 1.66602 4.99967V14.9997C1.66602 15.9201 2.41221 16.6663 3.33268 16.6663H16.666C17.5865 16.6663 18.3327 15.9201 18.3327 14.9997V4.99967C18.3327 4.0792 17.5865 3.33301 16.666 3.33301Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3327 5.83301L10.8577 10.583C10.6004 10.7442 10.3029 10.8297 9.99935 10.8297C9.69575 10.8297 9.39829 10.7442 9.14102 10.583L1.66602 5.83301" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-gray-300 font-niramit text-base">info@ngocare.org</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-niramit text-base font-bold mb-2">Emergency Hotline</h4>
              <div className="text-red-400 font-niramit text-lg font-bold">+1 (555) 911-HELP</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 font-niramit text-sm">
            © 2024 NGO Care. All rights reserved. | Tax ID: 12-3456789
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white transition-colors">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SearchFilters />
      <StatsSection />
      <PhotoGallery />
      <SuccessStoriesSection />
      <ReportsSection />
      <AwarenessMaterials />
      <Newsletter />
      <Footer />
    </div>
  );
}
