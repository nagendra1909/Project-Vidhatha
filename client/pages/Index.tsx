import { useState } from "react";

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
            <a href="/" className="text-ngo-primary font-niramit text-base font-medium">Home</a>
            <a href="/programs" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Programs</a>
            <a href="/resources" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Resources</a>
            <a href="/get-involved" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Get Involved</a>
            <a href="/about" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">About</a>
            <a href="/contact" className="text-ngo-secondary font-niramit text-base font-medium hover:text-ngo-primary transition-colors">Contact</a>
          </nav>

          {/* Donate Button */}
          <a href="/donate" className="flex items-center gap-3 bg-white rounded-full px-3 py-3 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2">
              <HeartIcon />
              <span className="text-ngo-secondary font-merriweather text-base font-bold">Donate now</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
        <div className="flex-1 max-w-2xl">
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
                <img src="/placeholder.svg" alt="James Thompson" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-6">
                <QuoteIcon />
              </div>
              
              <blockquote className="text-ngo-gray-700 font-niramit text-lg leading-relaxed mb-6">
                "The vocational training program changed my life completely. I learned carpentry skills and now run my own small business. I can provide for my family and even employ two other people from my community."
              </blockquote>
              
              <div>
                <div className="text-ngo-gray-800 font-niramit text-xl font-bold">James Thompson, 28</div>
                <div className="text-ngo-primary font-niramit text-base mb-4">Education & Skills</div>
                <div className="bg-ngo-gray-100 p-3 rounded">
                  <div className="text-ngo-gray-600 font-niramit text-sm">
                    Impact: Started successful carpentry business
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center mt-8 gap-4">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-ngo-primary"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            </div>
            
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
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

const Footer = () => {
  return (
    <footer className="bg-ngo-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              {/* Logo placeholder */}
              <div className="h-8 w-32 bg-gray-600 rounded"></div>
            </div>
            <p className="text-ngo-gray-300 font-niramit text-base leading-relaxed mb-6">
              Transforming lives through comprehensive healthcare, education, and community support services since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-ngo-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-ngo-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-ngo-gray-400 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.9997 11.3703C16.1231 12.2025 15.981 13.0525 15.5935 13.7993C15.206 14.5461 14.5929 15.1517 13.8413 15.53C13.0898 15.9082 12.2382 16.0399 11.4075 15.9062C10.5768 15.7726 9.80947 15.3804 9.21455 14.7855C8.61962 14.1905 8.22744 13.4232 8.09377 12.5925C7.96011 11.7619 8.09177 10.9102 8.47003 10.1587C8.84829 9.40716 9.45389 8.79404 10.2007 8.40654C10.9475 8.01904 11.7975 7.87689 12.6297 8.0003C13.4786 8.12619 14.2646 8.52176 14.8714 9.12861C15.4782 9.73545 15.8738 10.5214 15.9997 11.3703Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-ngo-gray-400 hover:text-white transition-colors">
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
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="/volunteer" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Volunteer</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Our Programs */}
          <div>
            <h3 className="text-white font-niramit text-lg font-bold mb-6">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Healthcare Services</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Education & Skills</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Community Support</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Arts & Culture</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Environmental Protection</a></li>
              <li><a href="#" className="text-ngo-gray-300 font-niramit text-base hover:text-white transition-colors">Specialized Care</a></li>
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
                  <div className="text-ngo-gray-300 font-niramit text-base">123 Community Street</div>
                  <div className="text-ngo-gray-300 font-niramit text-base">Hope City, HC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M18.3332 14.1004V16.6004C18.3341 16.8325 18.2866 17.0622 18.1936 17.2749C18.1006 17.4875 17.9643 17.6784 17.7933 17.8353C17.6222 17.9922 17.4203 18.1116 17.2005 18.186C16.9806 18.2603 16.7477 18.288 16.5165 18.2671C13.9522 17.9884 11.489 17.1122 9.32486 15.7087C7.31139 14.4293 5.60431 12.7222 4.32486 10.7087C2.91651 8.53474 2.04007 6.05957 1.76653 3.48374C1.7457 3.2533 1.77309 3.02104 1.84695 2.80176C1.9208 2.58248 2.03951 2.38098 2.1955 2.21009C2.3515 2.0392 2.54137 1.90266 2.75302 1.80917C2.96468 1.71569 3.19348 1.66729 3.42486 1.66707H5.92486C6.32928 1.66309 6.72136 1.80631 7.028 2.07002C7.33464 2.33373 7.53493 2.69995 7.59153 3.10041C7.69705 3.90046 7.89274 4.68601 8.17486 5.44207C8.28698 5.74034 8.31125 6.0645 8.24478 6.37614C8.17832 6.68778 8.02392 6.97383 7.79986 7.20041L6.74153 8.25874C7.92783 10.345 9.65524 12.0724 11.7415 13.2587L12.7999 12.2004C13.0264 11.9764 13.3125 11.8219 13.6241 11.7555C13.9358 11.689 14.2599 11.7133 14.5582 11.8254C15.3143 12.1075 16.0998 12.3032 16.8999 12.4087C17.3047 12.4658 17.6744 12.6697 17.9386 12.9817C18.2029 13.2936 18.3433 13.6917 18.3332 14.1004Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-ngo-gray-300 font-niramit text-base">+1 (555) 123-4567</div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M16.666 3.33301H3.33268C2.41221 3.33301 1.66602 4.0792 1.66602 4.99967V14.9997C1.66602 15.9201 2.41221 16.6663 3.33268 16.6663H16.666C17.5865 16.6663 18.3327 15.9201 18.3327 14.9997V4.99967C18.3327 4.0792 17.5865 3.33301 16.666 3.33301Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.3327 5.83301L10.8577 10.583C10.6004 10.7442 10.3029 10.8297 9.99935 10.8297C9.69575 10.8297 9.39829 10.7442 9.14102 10.583L1.66602 5.83301" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-ngo-gray-300 font-niramit text-base">info@ngocare.org</div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-white font-niramit text-base font-bold mb-2">Emergency Hotline</h4>
              <div className="text-red-400 font-niramit text-lg font-bold">+1 (555) 911-HELP</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-ngo-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-ngo-gray-400 font-niramit text-sm">
            © 2024 NGO Care. All rights reserved. | Tax ID: 12-3456789
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-ngo-gray-400 font-niramit text-sm hover:text-white transition-colors">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ContentSections />
      <MissionValues />
      <FeaturedPrograms />
      <SuccessStories />
      <ImpactNumbers />
      <Newsletter />
      <Footer />
    </div>
  );
}
