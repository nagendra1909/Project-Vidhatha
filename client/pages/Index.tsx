import { useState } from "react";
import Layout from "../components/Layout";

// Icon components
const HeartIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.1673 3.66675C27.134 3.66675 23.834 5.86675 22.0006 9.16675C20.1673 5.86675 16.8673 3.66675 12.834 3.66675C6.96732 3.66675 1.83398 7.33341 1.83398 14.6667C1.83398 23.8334 22.0006 42.1667 22.0006 42.1667C22.0006 42.1667 42.1673 23.8334 42.1673 14.6667C42.1673 7.33341 37.034 3.66675 31.1673 3.66675Z" stroke="#EB414B" strokeWidth="4" strokeLinejoin="round"/>
  </svg>
);

const GroupIcon = () => (
  <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.83398 42.1667C3.83398 38.1001 5.44946 34.2 8.32501 31.3244C11.2006 28.4489 15.1007 26.8334 19.1673 26.8334C23.234 26.8334 27.1341 28.4489 30.0096 31.3244C32.8852 34.2 34.5007 38.1001 34.5007 42.1667H30.6673C30.6673 39.1168 29.4557 36.1917 27.299 34.035C25.1424 31.8783 22.2173 30.6667 19.1673 30.6667C16.1173 30.6667 13.1923 31.8783 11.0356 34.035C8.87892 36.1917 7.66732 39.1168 7.66732 42.1667H3.83398ZM19.1673 24.9167C12.8136 24.9167 7.66732 19.7705 7.66732 13.4167C7.66732 7.063 12.8136 1.91675 19.1673 1.91675C25.5211 1.91675 30.6673 7.063 30.6673 13.4167C30.6673 19.7705 25.5211 24.9167 19.1673 24.9167ZM19.1673 21.0834C23.4032 21.0834 26.834 17.6526 26.834 13.4167C26.834 9.18091 23.4032 5.75008 19.1673 5.75008C14.9315 5.75008 11.5007 9.18091 11.5007 13.4167C11.5007 17.6526 14.9315 21.0834 19.1673 21.0834Z" fill="#EB414B"/>
    <path d="M35.045 28.1808C37.7388 29.3935 40.025 31.3586 41.6286 33.8398C43.2321 36.3209 44.0848 39.2125 44.084 42.1667H40.2506C40.2513 39.951 39.6119 37.7822 38.4092 35.9213C37.2065 34.0603 35.4919 32.5864 33.4714 31.6768L35.045 28.1808ZM33.7263 6.54166C35.6574 7.33765 37.3085 8.68936 38.4701 10.4253C39.6317 12.1612 40.2514 14.203 40.2506 16.2917C40.251 18.9219 39.2682 21.4572 37.495 23.3999C35.7219 25.3425 33.2866 26.5521 30.6673 26.7912V22.933C32.0875 22.7296 33.405 22.0763 34.4265 21.069C35.448 20.0616 36.1196 18.7534 36.3429 17.3362C36.5661 15.919 36.3291 14.4677 35.6667 13.1951C35.0043 11.9225 33.9514 10.8958 32.6626 10.2657L33.7263 6.54166Z" fill="#EB414B"/>
  </svg>
);

const EarthIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.8 3.99951C34.7355 3.99951 43.6 12.8657 43.6 23.8033C43.6 34.7409 34.7355 43.607 23.8 43.607C12.8645 43.607 4 34.7409 4 23.8033C4 12.8657 12.8645 3.99951 23.8 3.99951ZM27.1323 31.6258C24.9127 31.7548 22.6873 31.7548 20.4677 31.6258C20.7369 33.1823 21.0795 34.5844 21.4775 35.7806C21.9764 37.2778 22.5269 38.3472 23.0417 39.0007C23.2159 39.2185 23.4832 39.6463 23.804 39.6463C24.0911 39.6205 24.4019 39.1967 24.5564 39.0007C25.0712 38.3472 25.6236 37.2778 26.1206 35.7806C26.5606 34.4229 26.9002 33.034 27.1323 31.6258ZM38.6757 29.2592C38.1504 29.485 37.6006 29.6929 37.0264 29.883C35.3394 30.4455 33.3674 30.897 31.2052 31.2099C30.9363 33.1861 30.4924 35.1346 29.8786 37.0322C29.6885 37.6065 29.4806 38.1564 29.2549 38.6818C31.4139 37.8875 33.3745 36.6335 35.0011 35.0065C36.6277 33.3796 37.8815 31.4186 38.6757 29.2592ZM8.92426 29.2592C9.71846 31.4186 10.9723 33.3796 12.5989 35.0065C14.2255 36.6335 16.1861 37.8875 18.3451 38.6818C18.115 38.1406 17.907 37.5903 17.7214 37.0322C17.1076 35.1346 16.6637 33.1861 16.3948 31.2099C14.4189 30.9409 12.4709 30.4969 10.5736 29.883C9.9994 29.6929 9.44962 29.485 8.92426 29.2592Z" fill="#EB414B"/>
  </svg>
);

const FocusIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 2V8.124C29.5248 8.56917 32.8013 10.1743 35.3135 12.6865C37.8257 15.1987 39.4308 18.4752 39.876 22H46V26H39.876C39.4308 29.5248 37.8257 32.8013 35.3135 35.3135C32.8013 37.8257 29.5248 39.4308 26 39.876V46H22V39.876C18.4752 39.4308 15.1987 37.8257 12.6865 35.3135C10.1743 32.8013 8.56917 29.5248 8.124 26H2V22H8.124C8.56917 18.4752 10.1743 15.1987 12.6865 12.6865C15.1987 10.1743 18.4752 8.56917 22 8.124V2H26ZM24 12C20.8174 12 17.7652 13.2643 15.5147 15.5147C13.2643 17.7652 12 20.8174 12 24C12 27.1826 13.2643 30.2348 15.5147 32.4853C17.7652 34.7357 20.8174 36 24 36C27.1826 36 30.2348 34.7357 32.4853 32.4853C34.7357 30.2348 36 27.1826 36 24C36 20.8174 34.7357 17.7652 32.4853 15.5147C30.2348 13.2643 27.1826 12 24 12ZM20 24C20 22.9391 20.4214 21.9217 21.1716 21.1716C21.9217 20.4214 22.9391 20 24 20C25.0609 20 26.0783 20.4214 26.8284 21.1716C27.5786 21.9217 28 22.9391 28 24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28C22.9391 28 21.9217 27.5786 21.1716 26.8284C20.4214 26.0783 20 25.0609 20 24Z" fill="#EB414B"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.32422 8.5H12.6576" stroke="#EB414B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.99023 3.83337L12.6569 8.50004L7.99023 13.1667" stroke="#EB414B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const QuoteIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 42.0001C12 42.0001 20 40.0001 20 26.0001V10.0001C20 7.50007 18.488 5.96607 16 6.00007H8C5.5 6.00007 4 7.50007 4 9.94407V22.0001C4 24.5001 5.5 26.0001 8 26.0001C10 26.0001 10 26.0001 10 28.0001V30.0001C10 32.0001 8 34.0001 6 34.0001C4 34.0001 4 34.0161 4 36.0621V40.0001C4 42.0001 4 42.0001 6 42.0001Z" stroke="#EB414B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 42.0001C36 42.0001 44 40.0001 44 26.0001V10.0001C44 7.50007 42.486 5.96607 40 6.00007H32C29.5 6.00007 28 7.50007 28 9.94407V22.0001C28 24.5001 29.5 26.0001 32 26.0001H33.5C33.5 30.5001 34 34.0001 28 34.0001V40.0001C28 42.0001 28 42.0001 30 42.0001Z" stroke="#EB414B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-between">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/5140f3a836186c0897d4412d1dedd5fd4f28a4de?width=2880')`,
          filter: 'drop-shadow(0 8px 10px rgba(0, 0, 0, 0.7))',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-9xl mx-auto px-2 flex items-center justify-between h-full">
        <div className="flex-1 max-w-4xl">
          <h1 className="text-white font-niramit text-5xl font-bold leading-tight mb-6">
            Transforming Lives,<br />Building Hope
          </h1>
          
          <p className="text-blue-200 font-niramit text-xl leading-relaxed mb-8 max-w-xl">
            Join us in creating lasting change through healthcare, education, and community support. Together, we can make a difference in the lives of those who need it most.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/volunteer" className="bg-white text-ngo-primary px-8 py-3 rounded-md font-geist text-lg font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Volunteer
              <ArrowRightIcon />
            </a>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-16 mt-16">
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 text-yellow-300">
                <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.6628 28V25.3333C21.6628 23.9188 21.1009 22.5623 20.1007 21.5621C19.1005 20.5619 17.7439 20 16.3294 20H8.32943C6.91494 20 5.55839 20.5619 4.55819 21.5621C3.558 22.5623 2.99609 23.9188 2.99609 25.3333V28" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.3294 14.6667C15.2749 14.6667 17.6628 12.2789 17.6628 9.33333C17.6628 6.38781 15.2749 4 12.3294 4C9.38391 4 6.99609 6.38781 6.99609 9.33333C6.99609 12.2789 9.38391 14.6667 12.3294 14.6667Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white font-geist text-2xl font-bold">50,000+</div>
              <div className="text-blue-200 font-geist text-base">Lives Impacted</div>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 text-ngo-primary">
                <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.653 18.6667C27.6397 16.72 29.653 14.3867 29.653 11.3333C29.653 9.38841 28.8804 7.52315 27.5051 6.14788C26.1298 4.77262 24.2646 4 22.3197 4C19.973 4 18.3197 4.66667 16.3197 6.66667C14.3197 4.66667 12.6663 4 10.3197 4C8.37474 4 6.50948 4.77262 5.13421 6.14788C3.75895 7.52315 2.98633 9.38841 2.98633 11.3333C2.98633 14.4 4.98633 16.7333 6.98633 18.6667L16.3197 28L25.653 18.6667Z" stroke="#EB414B" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white font-geist text-2xl font-bold">15+</div>
              <div className="text-blue-200 font-geist text-base">Programs</div>
            </div>
            
            <div className="text-center">
              <div className="w-8 h-8 mx-auto mb-3 text-yellow-300">
                <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.3294 29.3333C23.6932 29.3333 29.6628 23.3638 29.6628 16C29.6628 8.63616 23.6932 2.66663 16.3294 2.66663C8.96563 2.66663 2.99609 8.63616 2.99609 16C2.99609 23.3638 8.96563 29.3333 16.3294 29.3333Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.3294 2.66663C12.9057 6.2615 10.9961 11.0356 10.9961 16C10.9961 20.9643 12.9057 25.7384 16.3294 29.3333C19.7531 25.7384 21.6628 20.9643 21.6628 16C21.6628 11.0356 19.7531 6.2615 16.3294 2.66663Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-white font-geist text-2xl font-bold">25+</div>
              <div className="text-blue-200 font-geist text-base">Communities</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="hidden lg:block flex-1 max-w-lg">
          <div className="relative">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/9df290f6a88aaee6370fa211720a0d55628fbadf?width=1000" 
              alt="Community" 
              className="w-full h-auto rounded-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-ngo-primary text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">14 Years</div>
              <div className="text-sm">of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSections = () => {
  return (
    <>
      {/* Women & Child Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-16">
          <div className="flex-1 grid grid-cols-2 gap-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/8f72c9802b018dd43ec81595d3f4e94527a0d63c?width=1004" 
              alt="Women and Children" 
              className="w-full h-96 object-cover rounded-[50px]"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d2009583a5a8fb83858a033322a7897dc296916a?width=1004" 
              alt="Community Support" 
              className="w-full h-96 object-cover rounded-[50px]"
            />
          </div>
          
          <div className="flex-1 text-center">
            <h2 className="text-black font-niramit text-6xl font-bold mb-8">WOMEN & CHILD</h2>
            <p className="text-ngo-gray-600 font-niramit text-2xl leading-relaxed mb-12 max-w-lg mx-auto">
              Vidhatha Society is a non-profit organization dedicated to transforming the lives of orphans and vulnerable children in India, particularly in Telugu-speaking regions of Andhra Pradesh and Telangana.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-ngo-primary text-white px-8 py-3 rounded font-niramit text-xl hover:bg-red-600 transition-colors">
                Donate
              </button>
              <a href="/volunteer" className="border border-ngo-secondary text-ngo-secondary px-8 py-3 rounded font-niramit text-xl hover:bg-ngo-secondary hover:text-white transition-colors inline-block">
                Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Old Age Home Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-16">
          <div className="flex-1 text-center">
            <h2 className="text-black font-niramit text-6xl font-bold mb-8">OLDAGE HOME</h2>
            <p className="text-ngo-gray-600 font-niramit text-2xl leading-relaxed mb-12 max-w-lg mx-auto">
              Vidhatha Society is a non-profit organization dedicated to transforming the lives of orphans and vulnerable children in India, particularly in Telugu-speaking regions of Andhra Pradesh and Telangana.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-ngo-primary text-white px-8 py-3 rounded font-niramit text-xl hover:bg-red-600 transition-colors">
                Donate
              </button>
              <a href="/volunteer" className="border border-ngo-secondary text-ngo-secondary px-8 py-3 rounded font-niramit text-xl hover:bg-ngo-secondary hover:text-white transition-colors inline-block">
                Volunteer
              </a>
            </div>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-8">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/bf73a5db1c602a2e3b8225dc6e36b841d4d47de1?width=1004" 
              alt="Old Age Care" 
              className="w-full h-96 object-cover rounded-[50px]"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d04b54492381426b995dd53eea8a740031b226a0?width=1004" 
              alt="Elder Support" 
              className="w-full h-96 object-cover rounded-[50px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const MissionValues = () => {
  return (
    <section className="py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black font-niramit text-4xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-ngo-secondary font-niramit text-xl max-w-3xl mx-auto">
            To empower communities through comprehensive healthcare, education, and social support services, creating sustainable positive change and fostering hope for a better tomorrow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <HeartIcon />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Compassion</h3>
            <p className="text-ngo-secondary font-niramit text-lg leading-relaxed">
              We approach every individual with empathy, understanding, and genuine care for their wellbeing.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <GroupIcon />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Community</h3>
            <p className="text-ngo-secondary font-niramit text-lg leading-relaxed">
              We believe in the power of collective action and building strong, supportive communities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <FocusIcon />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Impact</h3>
            <p className="text-ngo-secondary font-niramit text-lg leading-relaxed">
              We focus on creating measurable, sustainable change that transforms lives for the better.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <EarthIcon />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Inclusivity</h3>
            <p className="text-ngo-secondary font-niramit text-lg leading-relaxed">
              We serve all members of our community regardless of background, beliefs, or circumstances.
            </p>
          </div>
        </div>
        
        {/* Vision Banner */}
        <div className="hero-gradient rounded-xl p-12 flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-white font-niramit text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-white font-niramit text-xl leading-relaxed max-w-3xl">
              A world where every individual has access to quality healthcare, education, and opportunities to thrive, regardless of their socioeconomic background. We envision communities that are self-sufficient, resilient, and united in their commitment to mutual support and growth.
            </p>
          </div>
          <div className="text-right">
            <div className="text-ngo-primary font-niramit text-4xl font-bold">2030</div>
            <div className="text-white font-niramit text-xl">Our goal to reach 100,000 lives</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Healthcare Services",
      impact: "25,000+ patients served annually",
      description: "Free medical consultations, medicine distribution, and health awareness campaigns across multiple specialties.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b040d70a8d8141e1fc6c9ab83127f722f5cfbf25?width=636"
    },
    {
      title: "Education & Skills",
      impact: "5,000+ students supported",
      description: "Comprehensive skill development, educational support, and literacy programs for all age groups.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b32a199a43f7b608d9ae3370bf3de4bb6dd624be?width=636"
    },
    {
      title: "Community Support",
      impact: "15,000+ families assisted",
      description: "Food security, emergency relief, and funeral services to support families in times of need.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e10513ca55d162a46bbf26759417ec65676f9282?width=636"
    },
    {
      title: "Environmental Protection",
      impact: "50,000+ trees planted",
      description: "Green initiatives, tree plantation drives, and environmental education for a sustainable future.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b53f1fdd96de81f81d91af5c14974c666443f43b?width=636"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black font-niramit text-4xl font-bold mb-4">Our Featured Programs</h2>
          <p className="text-ngo-secondary font-niramit text-xl max-w-3xl mx-auto">
            Discover how we're making a difference through our comprehensive range of community-focused programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-ngo-secondary font-niramit text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-ngo-primary font-niramit text-sm font-bold mb-4">{program.impact}</p>
                <p className="text-gray-600 font-niramit text-base leading-relaxed mb-6">{program.description}</p>
                <button className="w-full border border-gray-300 text-ngo-secondary py-2 rounded font-niramit text-base hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-ngo-primary text-white px-8 py-3 rounded font-niramit text-base font-bold hover:bg-red-600 transition-colors">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      name: "James Thompson",
      age: 28,
      program: "Education & Skills",
      quote:
        "The vocational training program changed my life completely. I learned carpentry skills and now run my own small business. I can provide for my family and even employ two other people from my community.",
      impact: "Started successful carpentry business",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Maria Santos",
      age: 34,
      program: "Healthcare Services",
      quote:
        "Thanks to the free medical consultations, I was able to get treatment for my diabetes. The health awareness programs taught me how to manage my condition and live a healthier life.",
      impact: "Successfully managing diabetes with proper care",
      image:
        "https://images.unsplash.com/photo-1534339480783-6816b68be29c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Rajesh Kumar",
      age: 42,
      program: "Community Support",
      quote:
        "When my family faced financial crisis, the emergency relief program helped us get back on our feet. Now I volunteer to help other families in similar situations.",
      impact: "Recovered from financial crisis, now helps others",
      image:
        "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Priya Sharma",
      age: 25,
      program: "Environmental Protection",
      quote:
        "Participating in the tree plantation drive opened my eyes to environmental issues. I now lead a local green initiative in my neighborhood and we've planted over 500 trees.",
      impact: "Leading environmental initiatives in community",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-ngo-gray-800 font-niramit text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-ngo-gray-600 font-niramit text-xl max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={currentStoryData.image} 
                  alt={currentStoryData.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <QuoteIcon />
              </div>
              
              <blockquote className="text-ngo-gray-700 font-niramit text-lg leading-relaxed mb-6">
                "{currentStoryData.quote}"
              </blockquote>
              
              <div>
                <div className="text-ngo-gray-800 font-niramit text-xl font-bold">
                  {currentStoryData.name}, {currentStoryData.age}
                </div>
                <div className="text-ngo-primary font-niramit text-base mb-4">
                  {currentStoryData.program}
                </div>
                <div className="bg-ngo-gray-100 p-3 rounded">
                  <div className="text-ngo-gray-600 font-niramit text-sm">
                    Impact: {currentStoryData.impact}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 gap-4">
            <button 
              onClick={prevStory}
              className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStory ? 'bg-ngo-primary' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextStory}
              className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactNumbers = () => {
  const stats = [
    { number: "50,000+", label: "Lives Impacted", icon: "heart" },
    { number: "15,000+", label: "Families Supported", icon: "group" },
    { number: "5,000+", label: "Students Educated", icon: "education" },
    { number: "25,000+", label: "Patients Treated", icon: "health" },
    { number: "2,500+", label: "Homes Built", icon: "home" },
    { number: "50,000+", label: "Trees Planted", icon: "tree" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white font-niramit text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-white font-niramit text-xl max-w-3xl mx-auto">
            Every number represents a life touched, a family supported, and a community strengthened
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white font-niramit text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-white font-niramit text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Card */}
        <div className="glass-card p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-white font-niramit text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-white font-niramit text-base leading-relaxed mb-8">
            These numbers continue to grow every day thanks to supporters like you. Together, we can reach even more people and create lasting change.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-ngo-primary text-white px-6 py-3 rounded font-niramit text-base font-bold hover:bg-red-600 transition-colors">
              Donate Today
            </button>
            <a href="/volunteer" className="border border-white text-white px-6 py-3 rounded font-niramit text-base font-bold hover:bg-white hover:text-black transition-colors inline-block">
              Volunteer Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black font-niramit text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-ngo-secondary font-niramit text-xl max-w-4xl mx-auto">
            Subscribe to our newsletter to receive updates about our programs, success stories, and ways you can make a difference in your community.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4 max-w-lg w-full">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-white px-4 py-3 rounded-md border border-gray-300 font-niramit text-base focus:outline-none focus:ring-2 focus:ring-ngo-primary"
            />
            <button className="bg-ngo-primary text-white px-6 py-3 rounded-md font-niramit text-base font-bold hover:bg-red-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <p className="text-gray-500 font-niramit text-base">
            We respect your privacy. <span className="text-ngo-primary">Unsubscribe</span> at any time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/cace8c4771975f89ca95b4f3cbf11028f3c02079?width=80" alt="Monthly Updates" className="w-10 h-10" />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Monthly Updates</h3>
            <p className="text-ngo-secondary font-niramit text-base">
              Get monthly reports on our programs and their impact
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/1bc64747af890d00c614e0b61315ec680fb3a49b?width=80" alt="Volunteer Opportunities" className="w-10 h-10" />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Volunteer Opportunities</h3>
            <p className="text-ngo-secondary font-niramit text-base">
              Be the first to know about new volunteer opportunities
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/de833d48a94e4e6e5c5b79c3862765c9715bf9f6?width=80" alt="Success Stories" className="w-10 h-10" />
            </div>
            <h3 className="text-ngo-secondary font-niramit text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-ngo-secondary font-niramit text-base">
              Read inspiring stories from the communities we serve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Index() {
  return (
    <Layout>
      <Hero />
      <ContentSections />
      <MissionValues />
      <FeaturedPrograms />
      <SuccessStories />
      <ImpactNumbers />
      <Newsletter />
    </Layout>
  );
}

