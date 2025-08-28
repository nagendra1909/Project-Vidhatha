import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Heart, Users, Globe } from "lucide-react";
import Layout from "../components/Layout";

// Animation styles
const fadeInUp = {
  opacity: 0,
  transform: 'translateY(30px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
};

const fadeInLeft = {
  opacity: 0,
  transform: 'translateX(-30px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
};

const fadeInRight = {
  opacity: 0,
  transform: 'translateX(30px)',
  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
};

const visible = {
  opacity: 1,
  transform: 'translateY(0) translateX(0)'
};

// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, options]);

  return [setElement, isVisible] as const;
};



// Icon components - All consistently sized at 48x48 for uniformity
const HeartIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <Heart size={48} color="#EF4444" fill="none" strokeWidth={2} />
  </div>
);

const GroupIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <Users size={48} color="#ef4444" fill="none" strokeWidth={2} />
  </div>
);

const EarthIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.8 3.99951C34.7355 3.99951 43.6 12.8657 43.6 23.8033C43.6 34.7409 34.7355 43.607 23.8 43.607C12.8645 43.607 4 34.7409 4 23.8033C4 12.8657 12.8645 3.99951 23.8 3.99951ZM27.1323 31.6258C24.9127 31.7548 22.6873 31.7548 20.4677 31.6258C20.7369 33.1823 21.0795 34.5844 21.4775 35.7806C21.9764 37.2778 22.5269 38.3472 23.0417 39.0007C23.2159 39.2185 23.4832 39.6463 23.804 39.6463C24.0911 39.6205 24.4019 39.1967 24.5564 39.0007C25.0712 38.3472 25.6236 37.2778 26.1206 35.7806C26.5606 34.4229 26.9002 33.034 27.1323 31.6258ZM38.6757 29.2592C38.1504 29.485 37.6006 29.6929 37.0264 29.883C35.3394 30.4455 33.3674 30.897 31.2052 31.2099C30.9363 33.1861 30.4924 35.1346 29.8786 37.0322C29.6885 37.6065 29.4806 38.1564 29.2549 38.6818C31.4139 37.8875 33.3745 36.6335 35.0011 35.0065C36.6277 33.3796 37.8815 31.4186 38.6757 29.2592ZM8.92426 29.2592C9.71846 31.4186 10.9723 33.3796 12.5989 35.0065C14.2255 36.6335 16.1861 37.8875 18.3451 38.6818C18.115 38.1406 17.907 37.5903 17.7214 37.0322C17.1076 35.1346 16.6637 33.1861 16.3948 31.2099C14.4189 30.9409 12.4709 30.4969 10.5736 29.883C9.9994 29.6929 9.44962 29.485 8.92426 29.2592Z" fill="#ef4444"/>
    </svg>
  </div>
);

const GlobeIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <Globe size={48} color="#ef4444" fill="none" strokeWidth={2}/>
  </div>
);

const FocusIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 2V8.124C29.5248 8.56917 32.8013 10.1743 35.3135 12.6865C37.8257 15.1987 39.4308 18.4752 39.876 22H46V26H39.876C39.4308 29.5248 37.8257 32.8013 35.3135 35.3135C32.8013 37.8257 29.5248 39.4308 26 39.876V46H22V39.876C18.4752 39.4308 15.1987 37.8257 12.6865 35.3135C10.1743 32.8013 8.56917 29.5248 8.124 26H2V22H8.124C8.56917 18.4752 10.1743 15.1987 12.6865 12.6865C15.1987 10.1743 18.4752 8.56917 22 8.124V2H26ZM24 12C20.8174 12 17.7652 13.2643 15.5147 15.5147C13.2643 17.7652 12 20.8174 12 24C12 27.1826 13.2643 30.2348 15.5147 32.4853C17.7652 34.7357 20.8174 36 24 36C27.1826 36 30.2348 34.7357 32.4853 32.4853C34.7357 30.2348 36 27.1826 36 24C36 20.8174 34.7357 17.7652 32.4853 15.5147C30.2348 13.2643 27.1826 12 24 12ZM20 24C20 22.9391 20.4214 21.9217 21.1716 21.1716C21.9217 20.4214 22.9391 20 24 20C25.0609 20 26.0783 20.4214 26.8284 21.1716C27.5786 21.9217 28 22.9391 28 24C28 25.0609 27.5786 26.0783 26.8284 26.8284C26.0783 27.5786 25.0609 28 24 28C22.9391 28 21.9217 27.5786 21.1716 26.8284C20.4214 26.0783 20 25.0609 20 24Z" fill="#ef4444"/>
    </svg>
  </div>
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

// Impact Numbers Icons - All consistently sized at 48x48 for uniformity
const EducationIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.16 21.84C44.4 21.72 44.62 21.55 44.79 21.34C44.96 21.13 45.07 20.88 45.11 20.62C45.15 20.36 45.12 20.1 45.02 19.86C44.92 19.62 44.76 19.41 44.54 19.25L26.88 10.37C26.4 10.13 25.86 10 25.32 10C24.78 10 24.24 10.13 23.76 10.37L6.1 19.25C5.88 19.41 5.72 19.62 5.62 19.86C5.52 20.1 5.49 20.36 5.53 20.62C5.57 20.88 5.68 21.13 5.85 21.34C6.02 21.55 6.24 21.72 6.46 21.84L23.76 30.84C24.24 31.08 24.78 31.21 25.32 31.21C25.86 31.21 26.4 31.08 26.88 30.84L44.16 21.84Z" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M45.31 19.99V31.99" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.32 25.01V31.99C13.32 33.43 14.59 34.73 16.51 35.64C18.43 36.55 21.49 37.2 24.79 37.2C28.09 37.2 31.15 36.55 33.07 35.64C34.99 34.73 36.26 33.43 36.26 31.99V25.01" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const HealthIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <Stethoscope size={48} color="#8B5CF6" />
  </div>
);

const HomeIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18L24 4.01L42 18V40.01C42 40.8 41.68 41.55 41.1 42.12C40.53 42.69 39.78 43.01 39 43.01H9C8.22 43.01 7.47 42.69 6.9 42.12C6.33 41.55 6.01 40.8 6.01 40.01L6 18Z" stroke="#FFA500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 43.99V24H30V43.99" stroke="#FFA500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const TreeIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.16 40.01C19.73 40.01 16.44 38.3 14.23 35.4C12.05 32.5 11.16 28.7 11.74 25.03C12.31 21.36 14.35 18.14 17.4 16.15C20.45 14.16 24.22 13.58 27.72 14.59C33.62 10.01 36.41 8.95 39.96 4.01C41.57 8 43.18 12.36 43.18 20.01C43.18 31.01 33.78 40.01 23.16 40.01Z" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33 42C5.33 36 8.62 30.89 14.69 30C19.13 29.04 25.32 25.99 27.17 24" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);


const Hero = () => {
  const [heroRef, heroVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/5140f3a836186c0897d4412d1dedd5fd4f28a4de?width=2880')`,
          filter: 'drop-shadow(0 8px 10px rgba(0, 0, 0, 0.7))',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-0">
          <div
            ref={heroRef}
            className="flex-1 max-w-4xl text-center lg:text-left"
            style={{
              ...fadeInLeft,
              ...(heroVisible ? visible : {})
            }}
          >
            <h1 className="text-white font-niramit text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Transforming Lives,<br />Building Hope
            </h1>

            <p className="text-blue-200 font-niramit text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Join us in creating lasting change through healthcare, education, and community support. Together, we can make a difference in the lives of those who need it most.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Link
                to="/volunteer"
                className="w-full sm:w-auto bg-white text-ngo-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-geist text-base sm:text-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-50 hover:scale-105 transition-all duration-300 min-h-[44px]"
              >
                Volunteer
                <ArrowRightIcon />
              </Link>
              <Link
                to="/donate"
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-geist text-base sm:text-lg font-medium hover:bg-white hover:text-ngo-primary hover:scale-105 transition-all duration-300 min-h-[44px] text-center"
              >
                Donate Now
              </Link>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-16"
              style={{
                ...fadeInUp,
                ...(statsVisible ? visible : {}),
                transitionDelay: '0.3s'
              }}
            >
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3 text-yellow-300">
                  <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6628 28V25.3333C21.6628 23.9188 21.1009 22.5623 20.1007 21.5621C19.1005 20.5619 17.7439 20 16.3294 20H8.32943C6.91494 20 5.55839 20.5619 4.55819 21.5621C3.558 22.5623 2.99609 23.9188 2.99609 25.3333V28" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.3294 14.6667C15.2749 14.6667 17.6628 12.2789 17.6628 9.33333C17.6628 6.38781 15.2749 4 12.3294 4C9.38391 4 6.99609 6.38781 6.99609 9.33333C6.99609 12.2789 9.38391 14.6667 12.3294 14.6667Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-white font-geist text-xl sm:text-2xl font-bold">50,000+</div>
                <div className="text-blue-200 font-geist text-sm sm:text-base">Lives Impacted</div>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3 text-ngo-primary">
                  <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.653 18.6667C27.6397 16.72 29.653 14.3867 29.653 11.3333C29.653 9.38841 28.8804 7.52315 27.5051 6.14788C26.1298 4.77262 24.2646 4 22.3197 4C19.973 4 18.3197 4.66667 16.3197 6.66667C14.3197 4.66667 12.6663 4 10.3197 4C8.37474 4 6.50948 4.77262 5.13421 6.14788C3.75895 7.52315 2.98633 9.38841 2.98633 11.3333C2.98633 14.4 4.98633 16.7333 6.98633 18.6667L16.3197 28L25.653 18.6667Z" stroke="#EB414B" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-white font-geist text-xl sm:text-2xl font-bold">15+</div>
                <div className="text-blue-200 font-geist text-sm sm:text-base">Programs</div>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-3 text-yellow-300">
                  <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3294 29.3333C23.6932 29.3333 29.6628 23.3638 29.6628 16C29.6628 8.63616 23.6932 2.66663 16.3294 2.66663C8.96563 2.66663 2.99609 8.63616 2.99609 16C2.99609 23.3638 8.96563 29.3333 16.3294 29.3333Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.3294 2.66663C12.9057 6.2615 10.9961 11.0356 10.9961 16C10.9961 20.9643 12.9057 25.7384 16.3294 29.3333C19.7531 25.7384 21.6628 20.9643 21.6628 16C21.6628 11.0356 19.7531 6.2615 16.3294 2.66663Z" stroke="#FDE047" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-white font-geist text-xl sm:text-2xl font-bold">25+</div>
                <div className="text-blue-200 font-geist text-sm sm:text-base">Communities</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="hidden lg:block flex-1 max-w-lg mt-8 lg:mt-0"
            style={{
              ...fadeInRight,
              ...(heroVisible ? visible : {}),
              transitionDelay: '0.6s'
            }}
          >
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9df290f6a88aaee6370fa211720a0d55628fbadf?width=1000"
                alt="Community"
                className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-ngo-primary text-white p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-lg sm:text-2xl font-bold">14 Years</div>
                <div className="text-xs sm:text-sm">of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSections = () => {
  const [womenChildRef, womenChildVisible] = useIntersectionObserver();
  const [oldAgeRef, oldAgeVisible] = useIntersectionObserver();

  return (
    <>
      {/* Women & Child Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div
              ref={womenChildRef}
              className="flex-1 w-full"
              style={{
                ...fadeInLeft,
                ...(womenChildVisible ? visible : {})
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8f72c9802b018dd43ec81595d3f4e94527a0d63c?width=1004"
                  alt="Women and Children"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d2009583a5a8fb83858a033322a7897dc296916a?width=1004"
                  alt="Community Support"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="flex-1 text-center lg:text-left"
              style={{
                ...fadeInRight,
                ...(womenChildVisible ? visible : {}),
                transitionDelay: '0.3s'
              }}
            >
              <h2 className="text-black font-niramit text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
                WOMEN & CHILD
              </h2>
              <p className="text-ngo-gray-600 font-niramit text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg mx-auto lg:mx-0">
                Vidhatha Society is a non-profit organization dedicated to transforming the lives of orphans and vulnerable children in India, particularly in Telugu-speaking regions of Andhra Pradesh and Telangana.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link to="/donate" className="w-full sm:w-auto bg-ngo-primary text-white px-6 sm:px-8 py-3 rounded font-niramit text-lg sm:text-xl hover:bg-red-600 hover:scale-105 transition-all duration-300 min-h-[44px] text-center">
                  Donate
                </Link>
                <Link to="/volunteer" className="w-full sm:w-auto border border-ngo-secondary text-ngo-secondary px-6 sm:px-8 py-3 rounded font-niramit text-lg sm:text-xl hover:bg-ngo-secondary hover:text-white hover:scale-105 transition-all duration-300 inline-block text-center min-h-[44px]">
                  Volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Old Age Home Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div
              className="flex-1 text-center lg:text-left order-2 lg:order-1"
              style={{
                ...fadeInLeft,
                ...(oldAgeVisible ? visible : {})
              }}
            >
              <h2 className="text-black font-niramit text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
                OLDAGE HOME
              </h2>
              <p className="text-ngo-gray-600 font-niramit text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg mx-auto lg:mx-0">
                Providing compassionate care and dignity to our elderly community members. Our old age home offers a safe, comfortable environment where seniors can live with respect and receive the care they deserve.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link to="/donate" className="w-full sm:w-auto bg-ngo-primary text-white px-6 sm:px-8 py-3 rounded font-niramit text-lg sm:text-xl hover:bg-red-600 hover:scale-105 transition-all duration-300 min-h-[44px] text-center">
                  Donate
                </Link>
                <Link to="/volunteer" className="w-full sm:w-auto border border-ngo-secondary text-ngo-secondary px-6 sm:px-8 py-3 rounded font-niramit text-lg sm:text-xl hover:bg-ngo-secondary hover:text-white hover:scale-105 transition-all duration-300 inline-block text-center min-h-[44px]">
                  Volunteer
                </Link>
              </div>
            </div>

            <div
              ref={oldAgeRef}
              className="flex-1 w-full order-1 lg:order-2"
              style={{
                ...fadeInRight,
                ...(oldAgeVisible ? visible : {}),
                transitionDelay: '0.3s'
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bf73a5db1c602a2e3b8225dc6e36b841d4d47de1?width=1004"
                  alt="Old Age Care"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] hover:scale-105 transition-transform duration-500"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d04b54492381426b995dd53eea8a740031b226a0?width=1004"
                  alt="Elder Support"
                  className="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const MissionValues = () => {
  const [missionRef, missionVisible] = useIntersectionObserver();
  const [valuesRef, valuesVisible] = useIntersectionObserver();
  const [visionRef, visionVisible] = useIntersectionObserver();

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={missionRef}
          className="text-center mb-12 sm:mb-16"
          style={{
            ...fadeInUp,
            ...(missionVisible ? visible : {})
          }}
        >
          <h2 className="text-black font-niramit text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Mission & Values</h2>
          <p className="text-ngo-secondary font-niramit text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            To empower communities through comprehensive healthcare, education, and social support services, creating sustainable positive change and fostering hope for a better tomorrow.
          </p>
        </div>

        <div
          ref={valuesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {[
            {
              icon: <HeartIcon />,
              title: "Compassion",
              description: "We approach every individual with empathy, understanding, and genuine care for their wellbeing."
            },
            {
              icon: <GroupIcon />,
              title: "Community",
              description: "We believe in the power of collective action and building strong, supportive communities."
            },
            {
              icon: <FocusIcon />,
              title: "Impact",
              description: "We focus on creating measurable, sustainable change that transforms lives for the better."
            },
            {
              icon: <GlobeIcon />,
              title: "Inclusivity",
              description: "We serve all members of our community regardless of background, beliefs, or circumstances."
            }
          ].map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              style={{
                ...fadeInUp,
                ...(valuesVisible ? visible : {}),
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="flex justify-center mb-4 sm:mb-6">
                {value.icon}
              </div>
              <h3 className="text-ngo-secondary font-niramit text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-ngo-secondary font-niramit text-base sm:text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Banner */}
        <div
          ref={visionRef}
          className="rounded-xl p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-0 lg:justify-between"
          style={{
            background: 'linear-gradient(135deg, #EB414B 0%, #F97316 50%, #FCD34D 100%)',
            ...fadeInUp,
            ...(visionVisible ? visible : {}),
            transitionDelay: '0.4s'
          }}
        >
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-white font-niramit text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Vision</h3>
            <p className="text-white font-niramit text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0">
              A world where every individual has access to quality healthcare, education, and opportunities to thrive, regardless of their socioeconomic background. We envision communities that are self-sufficient, resilient, and united in their commitment to mutual support and growth.
            </p>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-ngo-primary font-niramit text-4xl sm:text-5xl lg:text-6xl font-bold">2030</div>
            <div className="text-white font-niramit text-base sm:text-lg lg:text-xl mt-2">Our goal to reach 100,000 lives</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturedPrograms = () => {
  const [programsRef, programsVisible] = useIntersectionObserver();
  const [headerRef, headerVisible] = useIntersectionObserver();

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
      description: "Food security, emergency relief, and funeral services to support families in times of need for the people.",
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
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="text-center mb-12 sm:mb-16"
          style={{
            ...fadeInUp,
            ...(headerVisible ? visible : {})
          }}
        >
          <h2 className="text-black font-niramit text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Featured Programs</h2>
          <p className="text-ngo-secondary font-niramit text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Discover how we're making a difference through our comprehensive range of community-focused programs
          </p>
        </div>

        <div
          ref={programsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{
                ...fadeInUp,
                ...(programsVisible ? visible : {}),
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-ngo-secondary font-niramit text-lg sm:text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-ngo-primary font-niramit text-xs sm:text-sm font-bold mb-3 sm:mb-4">{program.impact}</p>
                <p className="text-gray-600 font-niramit text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{program.description}</p>
                <button className="w-full border border-gray-300 text-ngo-secondary py-2 sm:py-3 rounded font-niramit text-sm sm:text-base hover:bg-gray-50 hover:scale-105 transition-all duration-300 min-h-[44px]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/programs"
            className="inline-block bg-ngo-primary text-white px-6 sm:px-8 py-3 rounded font-niramit text-base font-bold hover:bg-red-600 hover:scale-105 transition-all duration-300 min-h-[44px]"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [storiesRef, storiesVisible] = useIntersectionObserver();

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

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextStory();
    } else if (isRightSwipe) {
      prevStory();
    }
  };

  // Auto-advance carousel (optional) - pause on hover/focus
  useEffect(() => {
    const interval = setInterval(() => {
      nextStory();
    }, 8000); // Change story every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevStory();
      } else if (e.key === 'ArrowRight') {
        nextStory();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-ngo-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          style={{
            ...fadeInUp,
            ...(storiesVisible ? visible : {})
          }}
        >
          <h2 className="text-ngo-gray-800 font-niramit text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Success Stories</h2>
          <p className="text-ngo-gray-600 font-niramit text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs
          </p>
        </div>

        <div
          ref={storiesRef}
          className="bg-white rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto no-select carousel-container"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            ...fadeInUp,
            ...(storiesVisible ? visible : {}),
            transitionDelay: '0.3s'
          }}
        >
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <div className="text-center mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-gray-200 mx-auto mb-4">
                <img
                  src={currentStoryData.image}
                  alt={currentStoryData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mb-4">
                <QuoteIcon />
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-ngo-gray-700 font-niramit text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                "{currentStoryData.quote}"
              </blockquote>

              <div className="mb-4">
                <div className="text-ngo-gray-800 font-niramit text-lg sm:text-xl font-bold">
                  {currentStoryData.name}, {currentStoryData.age}
                </div>
                <div className="text-ngo-primary font-niramit text-sm sm:text-base mb-3">
                  {currentStoryData.program}
                </div>
                <div className="bg-ngo-gray-100 p-3 rounded">
                  <div className="text-ngo-gray-600 font-niramit text-xs sm:text-sm">
                    Impact: {currentStoryData.impact}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 xl:w-64 xl:h-64 rounded-full overflow-hidden bg-gray-200">
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

              <blockquote className="text-ngo-gray-700 font-niramit text-lg xl:text-xl leading-relaxed mb-6">
                "{currentStoryData.quote}"
              </blockquote>

              <div>
                <div className="text-ngo-gray-800 font-niramit text-xl xl:text-2xl font-bold">
                  {currentStoryData.name}, {currentStoryData.age}
                </div>
                <div className="text-ngo-primary font-niramit text-base xl:text-lg mb-4">
                  {currentStoryData.program}
                </div>
                <div className="bg-ngo-gray-100 p-3 xl:p-4 rounded">
                  <div className="text-ngo-gray-600 font-niramit text-sm xl:text-base">
                    Impact: {currentStoryData.impact}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={prevStory}
              className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-ngo-primary hover:scale-110 transition-all duration-300 touch-manipulation"
              aria-label="Previous story"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex gap-2 sm:gap-3 px-4">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentStory
                      ? 'bg-ngo-primary scale-125'
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-ngo-primary hover:scale-110 transition-all duration-300 touch-manipulation"
              aria-label="Next story"
            >
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 sm:mt-6">
            <div className="flex justify-center text-xs sm:text-sm text-gray-500 mb-2">
              {currentStory + 1} of {stories.length}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-ngo-primary h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentStory + 1) / stories.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Swipe Hint for Mobile */}
          <div className="block sm:hidden text-center mt-4">
            <p className="text-xs text-gray-400">
              Swipe left or right to navigate stories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ImpactNumbers = () => {
  const stats = [
    { number: "50,000+", label: "Lives Impacted", icon: <HeartIcon /> },
    { number: "15,000+", label: "Families Supported", icon: <GroupIcon /> },
    { number: "5,000+", label: "Students Educated", icon: <EducationIcon /> },
    { number: "25,000+", label: "Patients Treated", icon: <HealthIcon /> },
    { number: "2,500+", label: "Homes Built", icon: <HomeIcon /> },
    { number: "50,000+", label: "Trees Planted", icon: <TreeIcon /> }
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
        
        {/* Stats Grid with uniform tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              {/* Icon container with consistent sizing */}
              <div className="flex justify-center items-center mb-6 h-16">
                {stat.icon}
              </div>
              {/* Number with consistent styling */}
              <div className="text-white font-niramit text-3xl lg:text-4xl font-bold mb-3 min-h-[3rem] flex items-center justify-center">
                {stat.number}
              </div>
              {/* Label with consistent styling */}
              <div className="text-white font-niramit text-lg lg:text-xl min-h-[2.5rem] flex items-center justify-center text-center leading-tight">
                {stat.label}
              </div>
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
            <Link to="/donate" className="bg-ngo-primary text-white px-6 py-3 rounded font-niramit text-base font-bold hover:bg-red-600 transition-colors">
              Donate Today
            </Link>
            <Link to="/volunteer" className="border border-white text-white px-6 py-3 rounded font-niramit text-base font-bold hover:bg-white hover:text-black transition-colors inline-block">
              Volunteer Now
            </Link>
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
          <img src="/stay-connected.png" alt="Stay Connected" className="mx-auto mb-6 w-16 h-16" />
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
            <button 
              onClick={() => {
              if (email) {
                // Show success toast
                const toast = document.createElement('div');
                toast.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg z-50 flex items-center gap-2';
                toast.innerHTML = `
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                Successfully subscribed to our newsletter!
                `;
                document.body.appendChild(toast);
                
                // Remove toast after 3 seconds
                setTimeout(() => {
                if (document.body.contains(toast)) {
                  document.body.removeChild(toast);
                }
                }, 3000);
                
                // Clear email input
                setEmail("");
              }
              }}
              className="bg-ngo-primary text-white px-6 py-3 rounded-md font-niramit text-base font-bold hover:bg-red-600 transition-colors"
            >
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
  // Add CSS styles to head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }

      @media (prefers-reduced-motion: reduce) {
        html {
          scroll-behavior: auto;
        }

        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      .hero-gradient {
        background: linear-gradient(135deg, #EB414B 0%, #81272C 100%);
      }

      /* Touch-friendly carousel */
      .touch-manipulation {
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }

      /* Smooth carousel transitions */
      .carousel-container {
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }

      /* Prevent text selection during swipe */
      .no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Ensure proper touch targets */
      button, a, [role="button"] {
        min-height: 44px;
        min-width: 44px;
      }

      /* Smooth transitions for interactive elements */
      .transition-smooth {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

