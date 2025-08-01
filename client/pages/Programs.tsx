import { useState } from "react";

// Icon components
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" fill="#E61C1F"/>
  </svg>
);

const HealthcareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.8 2.30039C4.80356 2.36322 4.8268 2.42334 4.86641 2.47224C4.90603 2.52115 4.96002 2.55635 5.02075 2.57287C5.08148 2.5894 5.14586 2.5864 5.2048 2.56432C5.26373 2.54223 5.31422 2.50217 5.34913 2.44981C5.38404 2.39744 5.4016 2.33543 5.39932 2.27253C5.39704 2.20964 5.37504 2.14905 5.33643 2.09935C5.29782 2.04965 5.24456 2.01335 5.18418 1.99559C5.12381 1.97783 5.05937 1.97951 5 2.00039H4C3.46957 2.00039 2.96086 2.2111 2.58579 2.58617C2.21071 2.96125 2 3.46995 2 4.00039V9.00039C2 10.5917 2.63214 12.1178 3.75736 13.243C4.88258 14.3682 6.4087 15.0004 8 15.0004C9.5913 15.0004 11.1174 14.3682 12.2426 13.243C13.3679 12.1178 14 10.5917 14 9.00039V4.00039C14 3.46995 13.7893 2.96125 13.4142 2.58617C13.0391 2.2111 12.5304 2.00039 12 2.00039H11C10.9803 2.02008 10.9647 2.04347 10.954 2.06921C10.9434 2.09494 10.9379 2.12253 10.9379 2.15039C10.9379 2.17824 10.9434 2.20583 10.954 2.23157C10.9647 2.2573 10.9803 2.28069 11 2.30039C11.0197 2.32008 11.0431 2.33571 11.0688 2.34637C11.0946 2.35703 11.1221 2.36252 11.15 2.36252C11.1779 2.36252 11.2054 2.35703 11.2312 2.34637C11.2569 2.33571 11.2803 2.32008 11.3 2.30039" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 15V16C8 17.5913 8.63214 19.1174 9.75736 20.2426C10.8826 21.3679 12.4087 22 14 22C15.5913 22 17.1174 21.3679 18.2426 20.2426C19.3679 19.1174 20 17.5913 20 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12C21.1046 12 22 11.1046 22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10C18 11.1046 18.8954 12 20 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EducationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.079 10.9224C22.258 10.8434 22.4099 10.7136 22.5159 10.5492C22.6219 10.3847 22.6773 10.1927 22.6753 9.99709C22.6733 9.80144 22.6139 9.61068 22.5045 9.44844C22.3952 9.2862 22.2406 9.15961 22.06 9.08436L13.489 5.18036C13.2284 5.06151 12.9454 5 12.659 5C12.3726 5 12.0895 5.06151 11.829 5.18036L3.25898 9.08036C3.08095 9.15833 2.92949 9.28649 2.82314 9.44917C2.71679 9.61185 2.66016 9.802 2.66016 9.99636C2.66016 10.1907 2.71679 10.3809 2.82314 10.5435C2.92949 10.7062 3.08095 10.8344 3.25898 10.9124L11.829 14.8204C12.0895 14.9392 12.3726 15.0007 12.659 15.0007C12.9454 15.0007 13.2284 14.9392 13.489 14.8204L22.079 10.9224Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.6602 10V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66016 12.5V16C6.66016 16.7956 7.2923 17.5587 8.41752 18.1213C9.54273 18.6839 11.0689 19 12.6602 19C14.2515 19 15.7776 18.6839 16.9028 18.1213C18.028 17.5587 18.6602 16.7956 18.6602 16V12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CommunityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArtsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 7C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6C13.2239 6 13 6.22386 13 6.5C13 6.77614 13.2239 7 13.5 7Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5 11C17.7761 11 18 10.7761 18 10.5C18 10.2239 17.7761 10 17.5 10C17.2239 10 17 10.2239 17 10.5C17 10.7761 17.2239 11 17.5 11Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.5 8C8.77614 8 9 7.77614 9 7.5C9 7.22386 8.77614 7 8.5 7C8.22386 7 8 7.22386 8 7.5C8 7.77614 8.22386 8 8.5 8Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.5 13C6.77614 13 7 12.7761 7 12.5C7 12.2239 6.77614 12 6.5 12C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C12.926 22 13.648 21.254 13.648 20.312C13.648 19.875 13.468 19.477 13.211 19.187C12.921 18.898 12.773 18.535 12.773 18.062C12.7692 17.8419 12.8098 17.6233 12.8922 17.4192C12.9747 17.2151 13.0975 17.0298 13.2531 16.8741C13.4088 16.7185 13.5941 16.5957 13.7982 16.5132C14.0023 16.4308 14.2209 16.3902 14.441 16.394H16.437C19.488 16.394 21.992 13.891 21.992 10.84C21.965 6.012 17.461 2 12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EnvironmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.6618 20C9.9059 20.0053 8.2121 19.3505 6.91636 18.1654C5.62063 16.9803 4.81761 15.3515 4.66658 13.6021C4.51555 11.8527 5.02753 10.1104 6.10099 8.72074C7.17445 7.33112 8.73097 6.3957 10.4618 6.1C16.1618 5 17.6618 4.48 19.6618 2C20.6618 4 21.6618 6.18 21.6618 10C21.6618 15.5 16.8818 20 11.6618 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66016 21C2.66016 18 4.51016 15.64 7.74016 15C10.1602 14.52 12.6602 13 13.6602 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SpecializedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.3281 14C20.8181 12.54 22.3281 10.79 22.3281 8.5C22.3281 7.04131 21.7487 5.64236 20.7172 4.61091C19.6858 3.57946 18.2868 3 16.8281 3C15.0681 3 13.8281 3.5 12.3281 5C10.8281 3.5 9.58812 3 7.82812 3C6.36943 3 4.97049 3.57946 3.93904 4.61091C2.90759 5.64236 2.32813 7.04131 2.32812 8.5C2.32812 10.8 3.82812 12.55 5.32812 14L12.3281 21L19.3281 14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            <a href="/resources" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Resources
            </a>
            <a href="/programs" className="text-[#EB414B] font-Niramit text-base font-medium">
              Programs
            </a>
            <a href="/get-involved" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
              Get Involved
            </a>
            <a href="/about" className="text-[#343333] font-Niramit text-base font-normal hover:text-[#EB414B] transition-colors">
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
        <h1 className="text-5xl font-bold font-Niramit mb-6">Our Programs</h1>
        <p className="text-xl font-Niramit text-[#DBEAFE] leading-relaxed max-w-3xl mx-auto">
          Comprehensive programs designed to address the diverse needs of our communities, from
          healthcare and education to environmental protection and cultural preservation.
        </p>
      </div>
    </section>
  );
};

const ProgramCard = ({ 
  title, 
  statistic, 
  description, 
  services, 
  icon, 
  imageUrl 
}: { 
  title: string;
  statistic: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  imageUrl: string;
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-Niramit text-[#09090B] mb-2">{title}</h3>
        <p className="text-sm font-medium font-Niramit text-[#EB414B] mb-6">{statistic}</p>
        
        <p className="text-base font-Niramit text-[#4B5563] mb-6 leading-relaxed">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-base font-bold font-Niramit text-[#1F2937] mb-2">Key Services:</h4>
          <ul className="space-y-1">
            {services.map((service, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 bg-[#EB414B] rounded-full mr-2"></div>
                <span className="text-sm font-Niramit text-[#4B5563]">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-[#18181B] text-white py-2.5 px-4 rounded-md text-sm font-medium font-Niramit hover:bg-gray-800 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProgramsGrid = () => {
  const programs = [
    {
      title: "Healthcare Services",
      statistic: "25,000+ patients served annually",
      description: "Comprehensive medical care including free consultations, medicine distribution, and health awareness campaigns across multiple specialties.",
      services: ["General Medicine", "Gynecology", "Pediatrics", "Orthopedics", "Ophthalmology"],
      icon: <HealthcareIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    },
    {
      title: "Education & Skills",
      statistic: "5,000+ students supported",
      description: "Empowering individuals through skill development, educational support, and literacy programs for all age groups.",
      services: ["Vocational Training", "Career Guidance", "Educational Support", "Literacy Programs"],
      icon: <EducationIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    },
    {
      title: "Community Support",
      statistic: "15,000+ families assisted",
      description: "Essential support services including food security, emergency relief, and funeral services for families in need.",
      services: ["Food Distribution", "Emergency Relief", "Funeral Services", "Family Counseling"],
      icon: <CommunityIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    },
    {
      title: "Arts & Culture",
      statistic: "2,000+ participants",
      description: "Preserving and promoting cultural heritage through classes, events, and community festivals.",
      services: ["Dance & Music", "Traditional Arts", "Cultural Events", "Competitions"],
      icon: <ArtsIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    },
    {
      title: "Environmental Protection",
      statistic: "50,000+ trees planted",
      description: "Creating a sustainable future through green initiatives, tree plantation, and environmental education.",
      services: ["Tree Plantation", "Community Cleanups", "Environmental Education", "Green Initiatives"],
      icon: <EnvironmentIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    },
    {
      title: "Specialized Care",
      statistic: "3,000+ individuals supported",
      description: "Targeted support for vulnerable populations including seniors, differently-abled individuals, and women & children.",
      services: ["Disability Support", "Senior Care", "Women & Children Programs", "Counseling Services"],
      icon: <SpecializedIcon />,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2F858a0427e4e5423e9f4c08b37cfd165d?format=webp&width=400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgramImpact = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-Niramit text-[#1F2937] mb-6">Program Impact</h2>
          <p className="text-xl font-Niramit text-[#4B5563] max-w-3xl mx-auto">
            Our integrated approach ensures comprehensive support for individuals and communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#FFE9EA] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">Holistic Healthcare</h3>
            <p className="text-base font-Niramit text-[#4B5563]">
              From preventive care to specialized treatments, we provide comprehensive healthcare services
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#FFE9EA] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">Lifelong Learning</h3>
            <p className="text-base font-Niramit text-[#4B5563]">
              Educational programs that span from basic literacy to advanced vocational training
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-[#FFE9EA] rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">Community Building</h3>
            <p className="text-base font-Niramit text-[#4B5563]">
              Strengthening social bonds through cultural programs and community support initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const GetInvolved = () => {
  return (
    <section className="py-20 bg-[#343333]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-Niramit text-white mb-6">
          Get Involved in Our Programs
        </h2>
        <p className="text-xl font-Niramit text-[#DBEAFE] mb-8 max-w-3xl mx-auto">
          Whether you want to volunteer your time, donate resources, or partner with us,
          there are many ways to support our programs and make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/volunteer" className="bg-[#EB414B] text-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-red-600 transition-colors inline-block">
            Volunteer Now
          </a>
          <button className="bg-white text-[#EB414B] border border-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-gray-50 transition-colors">
            Support Our Programs
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
          <div className="space-y-6">
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
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-Niramit text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="/volunteer" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Donate</a></li>
              <li><a href="/" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-[#D1D5DB] font-Niramit hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div className="space-y-6">
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
          <div className="space-y-6">
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

export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProgramsGrid />
      <ProgramImpact />
      <GetInvolved />
      <Footer />
    </div>
  );
}
