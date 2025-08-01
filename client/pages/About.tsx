import Layout from "../components/Layout";

// Icon components
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

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-ngo-primary to-red-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold font-niramit mb-6">About Vidhatha Society</h1>
        <p className="text-xl font-niramit text-blue-200 leading-relaxed max-w-3xl mx-auto">
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
            <h2 className="text-4xl font-bold font-niramit text-ngo-gray-800 mb-8">Our Story</h2>
            
            <div className="space-y-6">
              <p className="text-base font-niramit text-ngo-gray-600 leading-relaxed">
                Vidhatha Society was born from a simple yet powerful belief: every person deserves access to
                quality healthcare, education, and opportunities to thrive, regardless of their
                circumstances.
              </p>
              
              <p className="text-base font-niramit text-ngo-gray-600 leading-relaxed">
                Founded in 2010 by a group of passionate community leaders, we started with a small
                clinic serving just a few dozen families. Today, we operate comprehensive programs
                across 25+ communities, having impacted over 50,000 lives.
              </p>
              
              <p className="text-base font-niramit text-ngo-gray-600 leading-relaxed">
                Our journey has been marked by countless stories of transformation - from patients who
                received life-saving treatment to students who discovered new career paths, from
                families who found support in their darkest hours to communities that came together for
                positive change.
              </p>
            </div>
            
            <button className="mt-8 bg-ngo-primary text-white px-6 py-3 rounded-md text-base font-medium font-niramit hover:bg-red-600 transition-all duration-300 hover:scale-105">
              Read Our Full History
            </button>
          </div>
          
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9145fe0927f140c4b000cb71df6a31e0%2Ff1eae86adcfc4e0994fca5700ec9632d?format=webp&width=800"
              alt="Vidhatha Society team with community members"
              className="w-full h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
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
    <section className="py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="flex justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold font-niramit text-ngo-gray-900 mb-2 tracking-tight">
                {stat.number}
              </h3>
              <p className="text-base font-niramit text-ngo-gray-600">
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
      description: "Vidhatha Society founded with a mission to serve the community"
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
          <h2 className="text-4xl font-bold font-niramit text-ngo-gray-800 mb-4">Our Journey</h2>
          <p className="text-xl font-niramit text-ngo-gray-600">
            Key milestones that have shaped our organization and expanded our impact
          </p>
        </div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-16 h-16 bg-ngo-primary rounded-full flex items-center justify-center mr-6 transition-all duration-300 hover:bg-red-600">
                <span className="text-white font-bold font-niramit text-sm">{milestone.year}</span>
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <p className="text-base font-niramit text-ngo-gray-700 leading-relaxed">
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
    <section className="py-28 bg-ngo-secondary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold font-niramit text-white mb-6">
          Join Our Mission
        </h2>
        <p className="text-xl font-niramit text-blue-200 mb-8 max-w-3xl mx-auto">
          Be part of our story. Whether through volunteering, donating, or partnering with us,
          you can help us continue transforming lives and building stronger communities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/volunteer" className="bg-ngo-primary text-white px-8 py-3 rounded-md text-base font-medium font-niramit hover:bg-red-600 transition-all duration-300 hover:scale-105 inline-block">
            Volunteer With Us
          </a>
          <a href="/donate" className="bg-white text-ngo-secondary border border-white px-8 py-3 rounded-md text-base font-medium font-niramit hover:bg-gray-50 transition-all duration-300 hover:scale-105 inline-block">
            Make a Donation
          </a>
        </div>
      </div>
    </section>
  );
};

export default function About() {
  return (
    <Layout>
      <HeroSection />
      <OurStorySection />
      <StatsSection />
      <JourneySection />
      <JoinMissionSection />
    </Layout>
  );
}