import { useState } from "react";

// Icon components
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" fill="#E61C1F"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4.75V12.75" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 4.75V12.75" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38 8.75H10C7.79086 8.75 6 10.5409 6 12.75V40.75C6 42.9591 7.79086 44.75 10 44.75H38C40.2091 44.75 42 42.9591 42 40.75V12.75C42 10.5409 40.2091 8.75 38 8.75Z" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20.75H42" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PeopleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 42.75V38.75C32 36.6283 31.1571 34.5934 29.6569 33.0931C28.1566 31.5929 26.1217 30.75 24 30.75H12C9.87827 30.75 7.84344 31.5929 6.34315 33.0931C4.84285 34.5934 4 36.6283 4 38.75V42.75" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 22.75C22.4183 22.75 26 19.1683 26 14.75C26 10.3317 22.4183 6.75 18 6.75C13.5817 6.75 10 10.3317 10 14.75C10 19.1683 13.5817 22.75 18 22.75Z" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 42.7498V38.7498C43.9987 36.9772 43.4087 35.2553 42.3227 33.8544C41.2368 32.4535 39.7163 31.4529 38 31.0098" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 7.00977C33.7208 7.45037 35.2461 8.45117 36.3353 9.85439C37.4245 11.2576 38.0157 12.9834 38.0157 14.7598C38.0157 16.5361 37.4245 18.2619 36.3353 19.6651C35.2461 21.0684 33.7208 22.0692 32 22.5098" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44.75C35.0457 44.75 44 35.7957 44 24.75C44 13.7043 35.0457 4.75 24 4.75C12.9543 4.75 4 13.7043 4 24.75C4 35.7957 12.9543 44.75 24 44.75Z" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 36.75C30.6274 36.75 36 31.3774 36 24.75C36 18.1226 30.6274 12.75 24 12.75C17.3726 12.75 12 18.1226 12 24.75C12 31.3774 17.3726 36.75 24 36.75Z" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 28.75C26.2091 28.75 28 26.9591 28 24.75C28 22.5409 26.2091 20.75 24 20.75C21.7909 20.75 20 22.5409 20 24.75C20 26.9591 21.7909 28.75 24 28.75Z" stroke="#9333EA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.9535 26.5303L33.9835 43.5823C34.0174 43.7831 33.9893 43.9894 33.9028 44.1738C33.8162 44.3581 33.6755 44.5117 33.4994 44.6139C33.3232 44.7161 33.1201 44.7621 32.9171 44.7457C32.7141 44.7293 32.521 44.6514 32.3635 44.5223L25.2035 39.1483C24.8579 38.89 24.438 38.7505 24.0065 38.7505C23.575 38.7505 23.1552 38.89 22.8095 39.1483L15.6375 44.5203C15.4801 44.6491 15.2872 44.727 15.0845 44.7434C14.8818 44.7597 14.6788 44.7139 14.5028 44.612C14.3268 44.5101 14.1861 44.3569 14.0993 44.1729C14.0126 43.989 13.9841 43.7829 14.0175 43.5823L17.0455 26.5303" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 28.75C30.6274 28.75 36 23.3774 36 16.75C36 10.1226 30.6274 4.75 24 4.75C17.3726 4.75 12 10.1226 12 16.75C12 23.3774 17.3726 28.75 24 28.75Z" stroke="#EA580C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
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
              className="w-[88px] h-[88px]"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Home
            </a>
            <a href="/programs" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Programs
            </a>
            <a href="/resources" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Resources
            </a>
            <a href="/get-involved" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Get Involved
            </a>
            <a href="/about" className="text-[#EB414B] font-Niramit text-base font-medium">
              About
            </a>
            <a href="/contact" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Contact
            </a>
          </nav>

          {/* Donate Button */}
          <a href="/donate" className="flex items-center justify-center w-[161px] h-[48px] bg-white border border-gray-200 rounded-[50px] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <HeartIcon />
              <span className="text-[#343333] font-Merriweather text-base font-bold">Donate now</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-24 bg-gradient-to-r from-[#EB414B] to-[#81272C] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold font-Niramit mb-6">About Vidhatha Society</h1>
        <p className="text-xl font-Niramit text-[#DBEAFE] leading-relaxed max-w-3xl mx-auto">
          For over a decade, we've been dedicated to transforming lives and building stronger communities
          through comprehensive healthcare, education, and social support services.
        </p>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold font-Niramit text-[#1F2937] mb-8">Our Story</h2>
            
            <div className="space-y-6">
              <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                NGO Care was born from a simple yet powerful belief: every person deserves access to
                quality healthcare, education, and opportunities to thrive, regardless of their
                circumstances.
              </p>
              
              <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                Founded in 2010 by a group of passionate community leaders, we started with a small
                clinic serving just a few dozen families. Today, we operate comprehensive programs
                across 25+ communities, having impacted over 50,000 lives.
              </p>
              
              <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                Our journey has been marked by countless stories of transformation - from patients who
                received life-saving treatment to students who discovered new career paths, from
                families who found support in their darkest hours to communities that came together for
                positive change.
              </p>
            </div>
            
            <button className="mt-8 bg-[#EB414B] text-white px-4 py-2.5 rounded-md text-sm font-medium font-Niramit hover:bg-red-600 transition-colors">
              Read Our Full History
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2Ff1eae86adcfc4e0994fca5700ec9632d?format=webp&width=800"
              alt="NGO Care team with community members"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <CalendarIcon />,
      number: "14+",
      label: "Years of Service"
    },
    {
      icon: <PeopleIcon />,
      number: "50,000+",
      label: "Lives Impacted"
    },
    {
      icon: <TargetIcon />,
      number: "15+",
      label: "Active Programs"
    },
    {
      icon: <AwardIcon />,
      number: "25+",
      label: "Communities Served"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold font-Niramit text-[#09090B] mb-2 tracking-tight">
                {stat.number}
              </h3>
              <p className="text-base font-Niramit text-[#4B5563]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JourneySection = () => {
  const milestones = [
    {
      year: "2010",
      description: "NGO Care founded with a mission to serve the community"
    },
    {
      year: "2012",
      description: "Launched first healthcare program serving 1,000 patients"
    },
    {
      year: "2015",
      description: "Expanded to education and skills development programs"
    },
    {
      year: "2018",
      description: "Reached 25,000 lives impacted milestone"
    },
    {
      year: "2020",
      description: "Adapted services during pandemic, provided emergency relief"
    },
    {
      year: "2022",
      description: "Launched environmental protection initiatives"
    },
    {
      year: "2024",
      description: "Celebrating 50,000+ lives impacted across 25+ communities"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-Niramit text-[#1F2937] mb-4">Our Journey</h2>
          <p className="text-xl font-Niramit text-[#4B5563]">
            Key milestones that have shaped our organization and expanded our impact
          </p>
        </div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-[#EB414B] rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold font-Niramit text-sm">{milestone.year}</span>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <p className="text-base font-Niramit text-[#374151] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JoinMissionSection = () => {
  return (
    <section className="py-28 bg-[#343333]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-Niramit text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl font-Niramit text-[#DBEAFE] mb-8 max-w-3xl mx-auto">
          Be part of our story. Whether through volunteering, donating, or partnering with us,
          you can help us continue transforming lives and building stronger communities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/volunteer" className="bg-[#EB414B] text-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-red-600 transition-colors inline-block">
            Volunteer With Us
          </a>
          <button className="bg-white text-[#343333] border border-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-gray-50 transition-colors">
            Make a Donation
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="h-8"></div>
            <p className="text-base font-Niramit text-[#D1D5DB] leading-relaxed">
              Transforming lives through comprehensive healthcare, education, and community support services since 2010.
            </p>
            <div className="flex space-x-4">
              <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
              <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
              <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="m16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <svg className="w-6 h-6 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-Niramit text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">About Us</a></li>
              <li><a href="/programs" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="/volunteer" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Donate</a></li>
              <li><a href="/" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-Niramit text-white">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Education & Skills</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Community Support</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Arts & Culture</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Environmental Protection</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Specialized Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-Niramit text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#9CA3AF] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <div>
                  <p className="text-[#D1D5DB] font-Niramit">123 Community Street</p>
                  <p className="text-[#D1D5DB] font-Niramit">Hope City, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9CA3AF] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p className="text-[#D1D5DB] font-Niramit">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9CA3AF] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p className="text-[#D1D5DB] font-Niramit">info@ngocare.org</p>
              </div>
            </div>
            
            <div className="pt-2">
              <h4 className="text-base font-bold font-Niramit text-white mb-2">Emergency Hotline</h4>
              <p className="text-lg font-bold font-Niramit text-[#F87171]">+1 (555) 911-HELP</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-[#374151] pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-Niramit text-[#9CA3AF]">
              © 2024 NGO Care. All rights reserved. | Tax ID: 12-3456789
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm font-Niramit text-[#9CA3AF] hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm font-Niramit text-[#9CA3AF] hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm font-Niramit text-[#9CA3AF] hover:text-white transition-colors">Financial Transparency</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OurStorySection />
      <StatsSection />
      <JourneySection />
      <JoinMissionSection />
      <Footer />
    </div>
  );
}
