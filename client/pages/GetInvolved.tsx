import React, { useState } from "react";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Ways to Make a Difference */}
      <WaysToMakeDifferenceSection />
      
      {/* Volunteer Opportunities */}
      <VolunteerOpportunitiesSection />
      
      {/* Volunteer Impact */}
      <VolunteerImpactSection />
      
      {/* Volunteer Stories */}
      <VolunteerStoriesSection />
      
      {/* Call to Action */}
      <CallToActionSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <div className="relative w-full h-[88px] bg-white shadow-[0_1px_75px_rgba(0,0,0,0.25)]">
      <div className="absolute left-[86px] top-0 w-[88px] h-[88px]">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/92332e7f2ac6463bb386ac57dc63f0b1cdde3eb0?width=176" 
          alt="NGO Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Navigation */}
      <nav className="absolute left-[546px] top-[33px] flex items-center gap-8">
        <a href="/" className="text-[#343333] font-niramit text-base font-medium">Home</a>
        <a href="/resources" className="text-[#343333] font-niramit text-base font-medium">Resources</a>
        <a href="/programs" className="text-[#343333] font-niramit text-base font-medium">Programs</a>
        <a href="/about" className="text-[#343333] font-niramit text-base font-medium">About</a>
        <a href="/get-involved" className="text-[#343333] font-niramit text-base font-medium">Get Involved</a>
        <a href="/contact" className="text-[#343333] font-niramit text-base font-medium">Contact</a>
      </nav>
      
      {/* Donate Button */}
      <a href="/donate" className="absolute right-[40px] top-[20px] w-[161px] h-[48px] bg-white rounded-[50px] flex items-center justify-center hover:shadow-md transition-shadow">
        <div className="flex items-center gap-[10px]">
          <div className="w-6 h-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" fill="#E61C1F"/>
            </svg>
          </div>
          <span className="text-[#343333] font-merriweather text-base font-bold">Donate now</span>
        </div>
      </a>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#EB414B] to-[#81272C] flex flex-col items-center">
      <div className="w-full max-w-[896px] flex flex-col items-start gap-6">
        <div className="w-full flex flex-col items-center">
          <h1 className="w-full text-white text-center font-niramit text-5xl font-bold leading-[48px]">
            Get Involved
          </h1>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="w-full text-[#DBEAFE] text-center font-niramit text-xl font-normal leading-[32.5px]">
            Join our mission to transform lives and build stronger communities. There are many ways to make a difference - find the one that's right for you.
          </p>
        </div>
      </div>
    </section>
  );
};

const WaysToMakeDifferenceSection = () => {
  return (
    <section className="w-full py-20 flex flex-col items-center">
      <div className="w-full max-w-[1400px] px-4 flex flex-col gap-16">
        <div className="w-full flex flex-col items-center gap-6">
          <h2 className="w-full text-[#1F2937] text-center font-niramit text-4xl font-bold leading-10">
            Ways to Make a Difference
          </h2>
          <div className="w-full max-w-[768px] flex flex-col items-center">
            <p className="text-[#4B5563] text-center font-niramit text-xl font-normal leading-7">
              Choose how you'd like to contribute to our mission and become part of our community of changemakers
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[1136px]">
          <VolunteerCard />
          <DonateCard />
          <PartnerCard />
          <CertificationCard />
        </div>
      </div>
    </section>
  );
};

const VolunteerCard = () => {
  return (
    <div className="flex flex-col bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-[#EB414B] to-[#DC2626] flex items-center justify-center">
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Volunteer Opportunities
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            Flexible hours
          </span>
        </div>
        
        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6">
          Join our team of dedicated volunteers and make a direct impact in your community.
        </p>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6">Benefits:</h4>
          <div className="flex flex-col gap-1">
            {['Skill development', 'Community impact', 'Networking', 'Recognition'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <a href="/volunteer" className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-geist text-sm font-medium leading-5 rounded-md inline-block hover:bg-gray-800 transition-colors">
          Apply Now
        </a>
      </div>
    </div>
  );
};

const DonateCard = () => {
  return (
    <div className="flex flex-col bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-[#EB414B] to-[#DC2626] flex items-center justify-center">
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Donate
          </h3>
          <span className="text-[#EB414B] font-geist text-sm font-medium leading-5">
            One-time or recurring
          </span>
        </div>
        
        <p className="text-[#4B5563] font-geist text-base font-normal leading-6">
          Support our programs through financial contributions that directly fund our initiatives.
        </p>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6">Benefits:</h4>
          <div className="flex flex-col gap-1">
            {['Tax deduction', 'Impact reports', 'Donor recognition', 'Transparency'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-geist text-sm font-medium leading-5 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

const PartnerCard = () => {
  return (
    <div className="flex flex-col bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-[#EB414B] to-[#DC2626] flex items-center justify-center">
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0002 13.9995L16.5002 16.4995C16.8981 16.8974 17.4376 17.1208 18.0002 17.1208C18.5628 17.1208 19.1024 16.8974 19.5002 16.4995C19.8981 16.1017 20.1215 15.5621 20.1215 14.9995C20.1215 14.4369 19.8981 13.8974 19.5002 13.4995L15.6202 9.61953C15.0577 9.05773 14.2952 8.74217 13.5002 8.74217C12.7052 8.74217 11.9427 9.05773 11.3802 9.61953L10.5002 10.4995C10.1024 10.8974 9.56284 11.1208 9.00023 11.1208C8.43762 11.1208 7.89805 10.8974 7.50023 10.4995C7.1024 10.1017 6.87891 9.56214 6.87891 8.99953C6.87891 8.43692 7.1024 7.89735 7.50023 7.49953L10.3102 4.68953C11.2225 3.77967 12.4121 3.20008 13.6909 3.0425C14.9696 2.88492 16.2644 3.15836 17.3702 3.81953L17.8402 4.09953C18.266 4.35651 18.7723 4.44564 19.2602 4.34953L21.0002 3.99953" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 3L22 14H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 3L2 14L8.5 20.5C8.89782 20.8978 9.43739 21.1213 10 21.1213C10.5626 21.1213 11.1022 20.8978 11.5 20.5C11.8978 20.1022 12.1213 19.5626 12.1213 19C12.1213 18.4374 11.8978 17.8978 11.5 17.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 4H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-[#09090B] font-geist text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Partner with Us
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            Long-term collaboration
          </span>
        </div>
        
        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6">
          Corporate partnerships and collaborations that amplify our collective impact.
        </p>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6">Benefits:</h4>
          <div className="flex flex-col gap-1">
            {['CSR fulfillment', 'Brand visibility', 'Employee engagement', 'Social impact'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-geist text-sm font-medium leading-5 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

const CertificationCard = () => {
  return (
    <div className="flex flex-col bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden">
      <div className="relative h-48 bg-gradient-to-br from-[#EB414B] to-[#DC2626] flex items-center justify-center">
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4787 12.8896L16.9937 21.4156C17.0107 21.516 16.9966 21.6192 16.9533 21.7114C16.9101 21.8036 16.8397 21.8803 16.7516 21.9314C16.6636 21.9825 16.562 22.0055 16.4605 21.9974C16.359 21.9892 16.2624 21.9502 16.1837 21.8856L12.6037 19.1986C12.4309 19.0695 12.2209 18.9998 12.0052 18.9998C11.7895 18.9998 11.5795 19.0695 11.4067 19.1986L7.8207 21.8846C7.74202 21.9491 7.64557 21.988 7.5442 21.9962C7.44283 22.0044 7.34138 21.9815 7.25337 21.9305C7.16536 21.8796 7.09498 21.803 7.05162 21.711C7.00827 21.619 6.99399 21.516 7.0107 21.4156L8.5247 12.8896" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      
      <div className="p-6 flex flex-col gap-6">
        <div>
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Certification Programs
          </h3>
          <span className="text-[#EB414B] font-geist text-sm font-medium leading-5">
            3-6 months
          </span>
        </div>
        
        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6">
          Professional development opportunities while contributing to meaningful causes.
        </p>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6">Benefits:</h4>
          <div className="flex flex-col gap-1">
            {['Professional certification', 'Practical experience', 'Career advancement', 'Portfolio building'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

const VolunteerOpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Healthcare Assistant",
      hours: "4-6 hours/week",
      description: "Basic medical knowledge helpful"
    },
    {
      title: "Education Mentor", 
      hours: "3-5 hours/week",
      description: "Teaching or tutoring experience"
    },
    {
      title: "Community Outreach",
      hours: "5-8 hours/week", 
      description: "Communication and interpersonal skills"
    },
    {
      title: "Event Coordinator",
      hours: "6-10 hours/week",
      description: "Event planning and organization"
    },
    {
      title: "Digital Marketing",
      hours: "2-4 hours/week",
      description: "Social media and content creation"
    },
    {
      title: "Administrative Support",
      hours: "3-6 hours/week",
      description: "Office management and data entry"
    }
  ];

  return (
    <section className="w-full py-20 bg-[#F9FAFB]">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="text-[#1F2937] text-center font-niramit text-4xl font-bold leading-10">
            Volunteer Opportunities
          </h2>
          <p className="text-[#4B5563] text-center font-niramit text-xl font-normal leading-7">
            Explore various volunteer roles that match your skills, interests, and availability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col items-center gap-6">
              <h3 className="text-[#09090B] text-center font-niramit text-lg font-bold leading-7 -tracking-[0.45px]">
                {opportunity.title}
              </h3>
              
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z" stroke="#4B5563" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#4B5563] text-center font-geist text-sm font-normal leading-5">
                    {opportunity.hours}
                  </span>
                </div>
                
                <p className="text-[#4B5563] text-center font-niramit text-sm font-normal leading-5">
                  {opportunity.description}
                </p>
                
                <button className="w-full h-9 px-3 border border-[#E4E4E7] bg-white text-[#09090B] text-center font-niramit text-sm font-medium leading-5 rounded-md">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <button className="py-3 px-8 bg-[#EB414B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md">
            View All Volunteer Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

const VolunteerImpactSection = () => {
  const stats = [
    { number: "500+", label: "Active Volunteers", color: "#EB414B" },
    { number: "25,000+", label: "Volunteer Hours", color: "#16A34A" },
    { number: "15+", label: "Program Areas", color: "#9333EA" },
    { number: "98%", label: "Satisfaction Rate", color: "#EA580C" }
  ];

  return (
    <section className="w-full py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1F2937] text-center font-geist text-4xl font-bold leading-10">
            Volunteer Impact
          </h2>
          <p className="text-[#4B5563] text-center font-niramit text-xl font-normal leading-7">
            See how our volunteers are making a real difference in our communities
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2 w-full md:w-[318px]">
              <span 
                className="text-center font-geist text-4xl font-bold leading-10"
                style={{ color: stat.color }}
              >
                {stat.number}
              </span>
              <span className="text-[#4B5563] text-center font-niramit text-base font-normal leading-6">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VolunteerStoriesSection = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      role: "Healthcare Volunteer",
      quote: "Volunteering at NGO Care has been incredibly rewarding. I've been able to use my nursing background to help people who really need it, and I've learned so much about community health."
    },
    {
      name: "Michael Chen", 
      role: "Education Mentor",
      quote: "Teaching kids in the literacy program has been amazing. Seeing their progress and enthusiasm for learning reminds me why education is so important. It's changed my perspective on giving back."
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator", 
      quote: "Organizing community events has allowed me to develop my project management skills while bringing people together. Every event we host strengthens our community bonds."
    }
  ];

  return (
    <section className="w-full py-20 bg-[#EFF6FF]">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1F2937] text-center font-geist text-4xl font-bold leading-10">
            Volunteer Stories
          </h2>
          <p className="text-[#4B5563] text-center font-geist text-xl font-normal leading-7">
            Hear from our volunteers about their experiences and the impact they've made
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-6 flex-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" fill="#EAEAEA"/>
                    <circle cx="24" cy="20" r="8" fill="#F9FAFB" stroke="#C9C9C9" strokeWidth="0.1"/>
                    <path d="M8 40c0-8.84 7.16-16 16-16s16 7.16 16 16" fill="#F9FAFB" stroke="#C9C9C9" strokeWidth="0.1"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#09090B] font-niramit text-base font-bold leading-6">
                    {story.name}
                  </h4>
                  <p className="text-[#4B5563] font-niramit text-sm font-normal leading-5">
                    {story.role}
                  </p>
                </div>
              </div>
              
              <blockquote className="text-[#374151] font-niramit text-base font-normal leading-6">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToActionSection = () => {
  return (
    <section className="w-full py-20 bg-[#343333]">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-6">
        <h2 className="text-white text-center font-niramit text-4xl font-bold leading-10">
          Ready to Make a Difference?
        </h2>
        
        <div className="w-full max-w-[768px]">
          <p className="text-[#DBEAFE] text-center font-niramit text-xl font-normal leading-7">
            Join thousands of volunteers, donors, and partners who are already making a positive impact. Your contribution, no matter how big or small, can change lives.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-2">
          <button className="h-11 px-8 bg-[#DC2626] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md">
            Start Volunteering
          </button>
          <button className="h-11 px-8 border border-white bg-white text-[#EB414B] text-center font-niramit text-sm font-medium leading-5 rounded-md">
            Make a Donation
          </button>
          <button className="h-11 px-8 border border-white bg-white text-[#EB414B] text-center font-niramit text-sm font-medium leading-5 rounded-md">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#1F2937] py-16">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-6">
            <div className="h-8"></div>
            <p className="text-[#D1D5DB] font-niramit text-base font-normal leading-[26px]">
              Transforming lives through comprehensive healthcare, education, and community support services since 2010.
            </p>
            <div className="flex gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-niramit text-lg font-bold leading-7">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {['About Us', 'Our Programs', 'Volunteer', 'Donate', 'Home', 'Contact'].map((link, index) => (
                <a key={index} href="#" className="text-[#D1D5DB] font-geist text-base font-normal leading-6">
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-geist text-lg font-bold leading-7">Our Programs</h3>
            <div className="flex flex-col gap-2">
              {['Healthcare Services', 'Education & Skills', 'Community Support', 'Arts & Culture', 'Environmental Protection', 'Specialized Care'].map((program, index) => (
                <a key={index} href="#" className="text-[#D1D5DB] font-niramit text-base font-normal leading-6">
                  {program}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-niramit text-lg font-bold leading-7">Contact Info</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6654 8.33366C16.6654 13.3337 9.9987 18.3337 9.9987 18.3337C9.9987 18.3337 3.33203 13.3337 3.33203 8.33366C3.33203 6.56555 4.03441 4.86986 5.28465 3.61961C6.5349 2.36937 8.23059 1.66699 9.9987 1.66699C11.7668 1.66699 13.4625 2.36937 14.7127 3.61961C15.963 4.86986 16.6654 6.56555 16.6654 8.33366Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 10.833C11.3807 10.833 12.5 9.71372 12.5 8.33301C12.5 6.9523 11.3807 5.83301 10 5.83301C8.61929 5.83301 7.5 6.9523 7.5 8.33301C7.5 9.71372 8.61929 10.833 10 10.833Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <p className="text-[#D1D5DB] font-geist text-base font-normal leading-6">123 Community Street</p>
                  <p className="text-[#D1D5DB] font-geist text-base font-normal leading-6">Hope City, HC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3351 14.1004V16.6004C18.3361 16.8325 18.2886 17.0622 18.1956 17.2749C18.1026 17.4875 17.9662 17.6784 17.7952 17.8353C17.6242 17.9922 17.4223 18.1116 17.2024 18.186C16.9826 18.2603 16.7496 18.288 16.5185 18.2671C13.9542 17.9884 11.491 17.1122 9.32682 15.7087C7.31334 14.4293 5.60626 12.7222 4.32682 10.7087C2.91846 8.53474 2.04202 6.05957 1.76848 3.48374C1.74766 3.2533 1.77505 3.02104 1.8489 2.80176C1.92275 2.58248 2.04146 2.38098 2.19745 2.21009C2.35345 2.0392 2.54332 1.90266 2.75498 1.80917C2.96663 1.71569 3.19543 1.66729 3.42682 1.66707H5.92682C6.33124 1.66309 6.72331 1.80631 7.02995 2.07002C7.33659 2.33373 7.53688 2.69995 7.59348 3.10041C7.699 3.90046 7.89469 4.68601 8.17682 5.44207C8.28894 5.74034 8.3132 6.0645 8.24674 6.37614C8.18028 6.68778 8.02587 6.97383 7.80182 7.20041L6.74348 8.25874C7.92978 10.345 9.65719 12.0724 11.7435 13.2587L12.8018 12.2004C13.0284 11.9764 13.3144 11.8219 13.6261 11.7555C13.9377 11.689 14.2619 11.7133 14.5601 11.8254C15.3162 12.1075 16.1018 12.3032 16.9018 12.4087C17.3066 12.4658 17.6763 12.6697 17.9406 12.9817C18.2049 13.2936 18.3453 13.6917 18.3351 14.1004Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#D1D5DB] font-niramit text-base font-normal leading-6">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.668 3.33301H3.33464C2.41416 3.33301 1.66797 4.0792 1.66797 4.99967V14.9997C1.66797 15.9201 2.41416 16.6663 3.33464 16.6663H16.668C17.5884 16.6663 18.3346 15.9201 18.3346 14.9997V4.99967C18.3346 4.0792 17.5884 3.33301 16.668 3.33301Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3346 5.83301L10.8596 10.583C10.6024 10.7442 10.3049 10.8297 10.0013 10.8297C9.6977 10.8297 9.40024 10.7442 9.14297 10.583L1.66797 5.83301" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[#D1D5DB] font-niramit text-base font-normal leading-6">info@ngocare.org</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 pt-2">
              <h4 className="text-white font-niramit text-base font-bold leading-6">Emergency Hotline</h4>
              <p className="text-[#F87171] font-niramit text-lg font-bold leading-7">+1 (555) 911-HELP</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#374151] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] font-niramit text-sm font-normal leading-5">
            © 2024 NGO Care. All rights reserved. | Tax ID: 12-3456789
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#9CA3AF] font-niramit text-sm font-normal leading-5">Privacy Policy</a>
            <a href="#" className="text-[#9CA3AF] font-niramit text-sm font-normal leading-5">Terms of Service</a>
            <a href="#" className="text-[#9CA3AF] font-niramit text-sm font-normal leading-5">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GetInvolved;
