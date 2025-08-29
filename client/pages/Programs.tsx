import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

// Modal component for detailed program information
const ProgramModal = ({ 
  program, 
  isOpen, 
  onClose 
}: { 
  program: any; 
  isOpen: boolean; 
  onClose: () => void; 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Header with image and icon */}
          <div className="relative h-64 bg-gray-200">
            <img
              src={program.imageUrl}
              alt={program.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute top-4 left-4 w-16 h-16 bg-[#EB414B] rounded-lg flex items-center justify-center">
              {program.icon}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h2 className="text-3xl font-bold font-Niramit text-white mb-2">{program.title}</h2>
              <p className="text-lg font-medium font-Niramit text-[#DBEAFE]">{program.statistic}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">About This Program</h3>
              <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                {program.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">Key Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {program.services.map((service: string, index: number) => (
                  <div key={index} className="flex items-center p-3 bg-[#F9FAFB] rounded-lg">
                    <div className="w-3 h-3 bg-[#EB414B] rounded-full mr-3"></div>
                    <span className="text-base font-Niramit text-[#4B5563]">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">How We Help</h3>
              <div className="bg-[#FFE9EA] p-6 rounded-lg">
                <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                  Our {program.title.toLowerCase()} program operates through a comprehensive approach that combines 
                  direct service delivery with community engagement. We work closely with local partners and 
                  volunteers to ensure that our services reach those who need them most, creating sustainable 
                  impact in the communities we serve.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold font-Niramit text-[#1F2937] mb-4">Get Involved</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/volunteer" 
                  className="bg-[#EB414B] text-white px-6 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-red-600 transition-colors text-center"
                >
                  Volunteer for This Program
                </Link>
                <Link 
                  to="/donate" 
                  className="bg-white text-[#EB414B] border border-[#EB414B] px-6 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-red-50 transition-colors text-center"
                >
                  Support This Program
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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


const HeroSection = () => {
  return (
    <section className="pt-2 bg-gradient-to-r from-[#EB414B] to-[#81272C] text-white">
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
  imageUrl,
  onLearnMore
}: { 
  title: string;
  statistic: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  imageUrl: string;
  onLearnMore: () => void;
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

        <button 
          onClick={onLearnMore}
          className="w-full bg-[#18181B] text-white py-2.5 px-4 rounded-md text-sm font-medium font-Niramit hover:bg-gray-800 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProgramsGrid = () => {
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      title: "Healthcare Services",
      statistic: "25,000+ patients served annually",
      description: "Comprehensive medical care including free consultations, medicine distribution, and health awareness campaigns.",
      services: ["General Medicine", "Gynecology", "Pediatrics", "Orthopedics","Ophthalmology"],
      icon: <HealthcareIcon />,
      imageUrl: "/healthservices.png"
    },
    {
      title: "Education & Skills",
      statistic: "5,000+ students supported",
      description: "Empowering individuals through skill development, educational support, and literacy programs for all age groups.",
      services: ["Vocational Training", "Career Guidance", "Educational Support", "Literacy Programs"],
      icon: <EducationIcon />,
      imageUrl: "/skill.png"
    },
    {
      title: "Community Support",
      statistic: "15,000+ families assisted",
      description: "Essential support services including food security, emergency relief, and funeral services for families in need.",
      services: ["Food Distribution", "Emergency Relief", "Funeral Services", "Family Counseling"],
      icon: <CommunityIcon />,
      imageUrl: "/support.png"
    },
    {
      title: "Arts & Culture",
      statistic: "2,000+ participants",
      description: "Preserving and promoting cultural heritage through classes, events, and community festivals.",
      services: ["Dance & Music", "Traditional Arts", "Cultural Events", "Competitions"],
      icon: <ArtsIcon />,
      imageUrl: "/art.png"
    },
    {
      title: "Environmental Protection",
      statistic: "50,000+ trees planted",
      description: "Creating a sustainable future through green initiatives, tree plantation, and environmental education.",
      services: ["Tree Plantation", "Community Cleanups", "Environmental Education", "Green Initiatives"],
      icon: <EnvironmentIcon />,
      imageUrl: "/protection.png"
    },
    {
      title: "Specialized Care",
      statistic: "3,000+ individuals supported",
      description: "Targeted support for vulnerable populations including seniors, differently-abled individuals, and women & children.",
      services: ["Disability Support", "Senior Care", "Women & Children Programs", "Counseling Services"],
      icon: <SpecializedIcon />,
      imageUrl: "/specialcare.png"
    }
  ];

  const handleLearnMore = (program: any) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard 
                key={index} 
                {...program} 
                onLearnMore={() => handleLearnMore(program)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProgramModal 
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
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
          <Link to="/volunteer" className="bg-[#EB414B] text-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-red-600 transition-colors inline-block">
            Volunteer Now
          </Link>
            <Link to="/donate" className="bg-white text-[#EB414B] border border-white px-8 py-3 rounded-md text-sm font-medium font-Niramit hover:bg-gray-50 transition-colors inline-block">
            Support Our Programs
            </Link>
        </div>
      </div>
    </section>
  );
};



export default function Programs() {
  return (
    <div className="min-h-screen bg-white">
      <Layout>
        <HeroSection />
        <ProgramsGrid />
        <ProgramImpact />
        <GetInvolved />
      </Layout>
    </div>
  );
}
