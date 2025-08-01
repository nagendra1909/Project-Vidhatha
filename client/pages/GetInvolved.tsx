import React, { useState } from "react";
import Layout from "../components/Layout";

const GetInvolved = () => {
  return (
    <div className="min-h-screen bg-white">
      <Layout>
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
      </Layout>
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
            Join our mission to transform lives and build stronger communities.
            There are many ways to make a difference - find the one that's right
            for you.
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
              Choose how you'd like to contribute to our mission and become part
              of our community of changemakers
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
    <div className="flex flex-col h-full bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Volunteers working together in community service"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Volunteer Opportunities
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            Flexible hours
          </span>
        </div>

        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6 mb-4 flex-grow">
          Join our team of dedicated volunteers and make a direct impact in your
          community.
        </p>

        <div className="mb-6">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6 mb-2">
            Benefits:
          </h4>
          <div className="space-y-1">
            {[
              "Skill development",
              "Community impact",
              "Networking",
              "Recognition",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full flex-shrink-0"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="/volunteer"
          className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md inline-block hover:bg-gray-800 transition-colors mt-auto"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const DonateCard = () => {
  return (
    <div className="flex flex-col h-full bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Hands holding coins representing donation and giving"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Donate
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            One-time or recurring
          </span>
        </div>

        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6 mb-4 flex-grow">
          Support our programs through financial contributions that directly
          fund our initiatives.
        </p>

        <div className="mb-6">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6 mb-2">
            Benefits:
          </h4>
          <div className="space-y-1">
            {[
              "Tax deduction",
              "Impact reports",
              "Donor recognition",
              "Transparency",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full flex-shrink-0"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md hover:bg-gray-800 transition-colors mt-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

const PartnerCard = () => {
  return (
    <div className="flex flex-col h-full bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Business professionals shaking hands in partnership"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L13 19C13.197 19.197 13.4308 19.3532 13.6882 19.4598C13.9456 19.5665 14.2214 19.6213 14.5 19.6213C14.7786 19.6213 15.0544 19.5665 15.3118 19.4598C15.5692 19.3532 15.803 19.197 16 19C16.197 18.803 16.3532 18.5692 16.4598 18.3118C16.5665 18.0544 16.6213 17.7786 16.6213 17.5C16.6213 17.2214 16.5665 16.9456 16.4598 16.6882C16.3532 16.4308 16.197 16.197 16 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0002 13.9995L16.5002 16.4995C16.8981 16.8974 17.4376 17.1208 18.0002 17.1208C18.5628 17.1208 19.1024 16.8974 19.5002 16.4995C19.8981 16.1017 20.1215 15.5621 20.1215 14.9995C20.1215 14.4369 19.8981 13.8974 19.5002 13.4995L15.6202 9.61953C15.0577 9.05773 14.2952 8.74217 13.5002 8.74217C12.7052 8.74217 11.9427 9.05773 11.3802 9.61953L10.5002 10.4995C10.1024 10.8974 9.56284 11.1208 9.00023 11.1208C8.43762 11.1208 7.89805 10.8974 7.50023 10.4995C7.1024 10.1017 6.87891 9.56214 6.87891 8.99953C6.87891 8.43692 7.1024 7.89735 7.50023 7.49953L10.3102 4.68953C11.2225 3.77967 12.4121 3.20008 13.6909 3.0425C14.9696 2.88492 16.2644 3.15836 17.3702 3.81953L17.8402 4.09953C18.266 4.35651 18.7723 4.44564 19.2602 4.34953L21.0002 3.99953"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 3L22 14H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 3L2 14L8.5 20.5C8.89782 20.8978 9.43739 21.1213 10 21.1213C10.5626 21.1213 11.1022 20.8978 11.5 20.5C11.8978 20.1022 12.1213 19.5626 12.1213 19C12.1213 18.4374 11.8978 17.8978 11.5 17.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 4H11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Partner with Us
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            Long-term collaboration
          </span>
        </div>

        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6 mb-4 flex-grow">
          Corporate partnerships and collaborations that amplify our collective
          impact.
        </p>

        <div className="mb-6">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6 mb-2">
            Benefits:
          </h4>
          <div className="space-y-1">
            {[
              "CSR fulfillment",
              "Brand visibility",
              "Employee engagement",
              "Social impact",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full flex-shrink-0"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md hover:bg-gray-800 transition-colors mt-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

const CertificationCard = () => {
  return (
    <div className="flex flex-col h-full bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629141821139-ac3cc2f27a60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Professional receiving certificate at graduation ceremony"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute left-4 top-4 w-12 h-12 bg-[#EB414B] rounded-lg flex items-center justify-center shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.4787 12.8896L16.9937 21.4156C17.0107 21.516 16.9966 21.6192 16.9533 21.7114C16.9101 21.8036 16.8397 21.8803 16.7516 21.9314C16.6636 21.9825 16.562 22.0055 16.4605 21.9974C16.359 21.9892 16.2624 21.9502 16.1837 21.8856L12.6037 19.1986C12.4309 19.0695 12.2209 18.9998 12.0052 18.9998C11.7895 18.9998 11.5795 19.0695 11.4067 19.1986L7.8207 21.8846C7.74202 21.9491 7.64557 21.988 7.5442 21.9962C7.44283 22.0044 7.34138 21.9815 7.25337 21.9305C7.16536 21.8796 7.09498 21.803 7.05162 21.711C7.00827 21.619 6.99399 21.516 7.0107 21.4156L8.5247 12.8896"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-[#09090B] font-niramit text-xl font-bold leading-7 -tracking-[0.5px] mb-1.5">
            Certification Programs
          </h3>
          <span className="text-[#EB414B] font-niramit text-sm font-medium leading-5">
            3-6 months
          </span>
        </div>

        <p className="text-[#4B5563] font-niramit text-base font-normal leading-6 mb-4 flex-grow">
          Professional development opportunities while contributing to
          meaningful causes.
        </p>

        <div className="mb-6">
          <h4 className="text-[#1F2937] font-niramit text-base font-bold leading-6 mb-2">
            Benefits:
          </h4>
          <div className="space-y-1">
            {[
              "Professional certification",
              "Practical experience",
              "Career advancement",
              "Portfolio building",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full flex-shrink-0"></div>
                <span className="text-[#4B5563] font-niramit text-sm font-normal leading-5">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-2.5 px-4 bg-[#18181B] text-white text-center font-niramit text-sm font-medium leading-5 rounded-md hover:bg-gray-800 transition-colors mt-auto">
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
      description: "Basic medical knowledge helpful",
    },
    {
      title: "Education Mentor",
      hours: "3-5 hours/week",
      description: "Teaching or tutoring experience",
    },
    {
      title: "Community Outreach",
      hours: "5-8 hours/week",
      description: "Communication and interpersonal skills",
    },
    {
      title: "Event Coordinator",
      hours: "6-10 hours/week",
      description: "Event planning and organization",
    },
    {
      title: "Digital Marketing",
      hours: "2-4 hours/week",
      description: "Social media and content creation",
    },
    {
      title: "Administrative Support",
      hours: "3-6 hours/week",
      description: "Office management and data entry",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F9FAFB]">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col items-center gap-6 mb-16">
          <h2 className="text-[#1F2937] text-center font-niramit text-4xl font-bold leading-10">
            Volunteer Opportunities
          </h2>
          <p className="text-[#4B5563] text-center font-niramit text-xl font-normal leading-7">
            Explore various volunteer roles that match your skills, interests,
            and availability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col items-center gap-6"
            >
              <h3 className="text-[#09090B] text-center font-niramit text-lg font-bold leading-7 -tracking-[0.45px]">
                {opportunity.title}
              </h3>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9987 14.6663C11.6806 14.6663 14.6654 11.6816 14.6654 7.99967C14.6654 4.31778 11.6806 1.33301 7.9987 1.33301C4.3168 1.33301 1.33203 4.31778 1.33203 7.99967C1.33203 11.6816 4.3168 14.6663 7.9987 14.6663Z"
                      stroke="#4B5563"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 4V8L10.6667 9.33333"
                      stroke="#4B5563"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
    { number: "98%", label: "Satisfaction Rate", color: "#EA580C" },
  ];

  return (
    <section className="w-full py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1F2937] text-center font-geist text-4xl font-bold leading-10">
            Volunteer Impact
          </h2>
          <p className="text-[#4B5563] text-center font-niramit text-xl font-normal leading-7">
            See how our volunteers are making a real difference in our
            communities
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 w-full md:w-[318px]"
            >
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
      quote:
        "Volunteering at NGO Care has been incredibly rewarding. I've been able to use my nursing background to help people who really need it, and I've learned so much about community health.",
    },
    {
      name: "Michael Chen",
      role: "Education Mentor",
      quote:
        "Teaching kids in the literacy program has been amazing. Seeing their progress and enthusiasm for learning reminds me why education is so important. It's changed my perspective on giving back.",
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      quote:
        "Organizing community events has allowed me to develop my project management skills while bringing people together. Every event we host strengthens our community bonds.",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#EFF6FF]">
      <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1F2937] text-center font-geist text-4xl font-bold leading-10">
            Volunteer Stories
          </h2>
          <p className="text-[#4B5563] text-center font-geist text-xl font-normal leading-7">
            Hear from our volunteers about their experiences and the impact
            they've made
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-[#E4E4E7] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-6 flex-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1494790108755-2616c6106db8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        : index === 1
                          ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                          : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    }
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
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
            Join thousands of volunteers, donors, and partners who are already
            making a positive impact. Your contribution, no matter how big or
            small, can change lives.
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

export default GetInvolved;
