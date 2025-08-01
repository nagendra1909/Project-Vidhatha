import Layout from '@/components/Layout';
import React, { useState } from 'react';

// Location Icon Component
const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6693 8.33366C16.6693 13.3337 10.0026 18.3337 10.0026 18.3337C10.0026 18.3337 3.33594 13.3337 3.33594 8.33366C3.33594 6.56555 4.03832 4.86986 5.28856 3.61961C6.5388 2.36937 8.23449 1.66699 10.0026 1.66699C11.7707 1.66699 13.4664 2.36937 14.7166 3.61961C15.9669 4.86986 16.6693 6.56555 16.6693 8.33366Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0039 10.833C11.3846 10.833 12.5039 9.71372 12.5039 8.33301C12.5039 6.9523 11.3846 5.83301 10.0039 5.83301C8.62319 5.83301 7.50391 6.9523 7.50391 8.33301C7.50391 9.71372 8.62319 10.833 10.0039 10.833Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Phone Icon Component
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3391 14.1004V16.6004C18.34 16.8325 18.2925 17.0622 18.1995 17.2749C18.1065 17.4875 17.9701 17.6784 17.7991 17.8353C17.6281 17.9922 17.4262 18.1116 17.2063 18.186C16.9865 18.2603 16.7535 18.288 16.5224 18.2671C13.9581 17.9884 11.4949 17.1122 9.33072 15.7087C7.31725 14.4293 5.61017 12.7222 4.33072 10.7087C2.92237 8.53474 2.04592 6.05957 1.77239 3.48374C1.75156 3.2533 1.77895 3.02104 1.85281 2.80176C1.92666 2.58248 2.04536 2.38098 2.20136 2.21009C2.35736 2.0392 2.54723 1.90266 2.75888 1.80917C2.97054 1.71569 3.19934 1.66729 3.43072 1.66707H5.93072C6.33514 1.66309 6.72722 1.80631 7.03386 2.07002C7.3405 2.33373 7.54079 2.69995 7.59739 3.10041C7.70291 3.90046 7.8986 4.68601 8.18072 5.44207C8.29284 5.74034 8.31711 6.0645 8.25064 6.37614C8.18418 6.68778 8.02977 6.97383 7.80572 7.20041L6.74739 8.25874C7.93369 10.345 9.6611 12.0724 11.7474 13.2587L12.8057 12.2004C13.0323 11.9764 13.3184 11.8219 13.63 11.7555C13.9416 11.689 14.2658 11.7133 14.5641 11.8254C15.3201 12.1075 16.1057 12.3032 16.9057 12.4087C17.3105 12.4658 17.6802 12.6697 17.9445 12.9817C18.2088 13.2936 18.3492 13.6917 18.3391 14.1004Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Email Icon Component
const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6719 3.33301H3.33854C2.41807 3.33301 1.67188 4.0792 1.67188 4.99967V14.9997C1.67188 15.9201 2.41807 16.6663 3.33854 16.6663H16.6719C17.5923 16.6663 18.3385 15.9201 18.3385 14.9997V4.99967C18.3385 4.0792 17.5923 3.33301 16.6719 3.33301Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.3385 5.83301L10.8635 10.583C10.6063 10.7442 10.3088 10.8297 10.0052 10.8297C9.70161 10.8297 9.40415 10.7442 9.14688 10.583L1.67188 5.83301" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Clock Icon Component
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0052 18.3337C14.6076 18.3337 18.3385 14.6027 18.3385 10.0003C18.3385 5.39795 14.6076 1.66699 10.0052 1.66699C5.40284 1.66699 1.67188 5.39795 1.67188 10.0003C1.67188 14.6027 5.40284 18.3337 10.0052 18.3337Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.0039 5V10L13.3372 11.6667" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Message Icon Component
const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// User Icon Component
const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Header Component


// Hero Section Component
const HeroSection = () => {
  return (
    <section className="pt-24 bg-gradient-to-r from-[#EB414B] to-[#81272C] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold font-Niramit mb-6">
          Contact Us
        </h1>
        <p className="text-xl font-Niramit text-[#DBEAFE] leading-relaxed max-w-3xl mx-auto">
          Get in touch with us to learn more about our programs, volunteer opportunities, or to request
          assistance. We're here to help and answer your questions.
        </p>
      </div>
    </section>
  );
};

// Location Card Component
const LocationCard = ({ title, address, phone, email, hours }: {
  title: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}) => {
  return (
    <div className="bg-white rounded-lg border border-[#E4E4E7] shadow-sm p-6">
      <h3 className="text-xl font-bold font-Niramit text-[#EB414B] mb-6">
        {title}
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex items-center justify-center w-5 h-6 mt-1 mr-3">
            <LocationIcon />
          </div>
          <div>
            <p className="text-base font-Niramit text-[#4B5563]">
              {address}
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 mr-3">
            <PhoneIcon />
          </div>
          <p className="text-base font-Niramit text-[#4B5563]">
            {phone}
          </p>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 mr-3">
            <EmailIcon />
          </div>
          <p className="text-base font-Niramit text-[#4B5563]">
            {email}
          </p>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 mr-3">
            <ClockIcon />
          </div>
          <p className="text-base font-Niramit text-[#4B5563]">
            {hours}
          </p>
        </div>
      </div>
    </div>
  );
};

// Locations Section Component
const LocationsSection = () => {
  const locations = [
    {
      title: "Main Office",
      address: "123 Community Street, Hope City, HC 12345",
      phone: "+1 (555) 123-4567",
      email: "info@ngocare.org",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    },
    {
      title: "Healthcare Center",
      address: "456 Medical Avenue, Hope City, HC 12346",
      phone: "+1 (555) 234-5678",
      email: "health@ngocare.org",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM"
    },
    {
      title: "Education Hub",
      address: "789 Learning Lane, Hope City, HC 12347",
      phone: "+1 (555) 345-6789",
      email: "education@ngocare.org",
      hours: "Mon-Fri: 10:00 AM - 7:00 PM"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-Niramit text-[#1F2937] mb-6">
            Our Locations
          </h2>
          <p className="text-xl font-Niramit text-[#4B5563] max-w-3xl mx-auto">
            Visit us at any of our locations or reach out through your preferred communication
            method
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white rounded-lg border border-[#E4E4E7] shadow-sm p-6">
      <div className="flex items-center mb-6">
        <MessageIcon />
        <h3 className="text-2xl font-bold font-Niramit text-[#09090B] ml-2">
          Send us a Message
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this regarding?"
            className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help you..."
            rows={5}
            className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#EB414B] focus:border-transparent resize-vertical"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full h-10 bg-[#EB414B] text-white text-sm font-medium font-Niramit rounded-md hover:bg-red-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// Volunteer Form Component
const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interests: [] as string[],
    availability: '',
    skills: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    setFormData({ ...formData, interests: updatedInterests });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer form submitted:', formData);
  };

  const interests = [
    'Healthcare',
    'Education',
    'Community Support',
    'Environmental',
    'Arts & Culture',
    'Administrative'
  ];

  return (
    <div className="bg-white rounded-lg border border-[#E4E4E7] shadow-sm p-6">
      <div className="flex items-center mb-6">
        <UserIcon />
        <h3 className="text-2xl font-bold font-Niramit text-[#09090B] ml-2">
          Volunteer Interest Form
        </h3>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-800 font-Niramit">
          <strong>Quick Interest Form:</strong> Fill out this form to express interest, or use our
          <a href="/volunteer" className="underline hover:text-blue-900 ml-1">comprehensive volunteer application</a>
          for immediate consideration.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Your first name"
              className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your last name"
              className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full h-10 px-3 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Areas of Interest *
          </label>
          <div className="space-y-2">
            {interests.map((interest) => (
              <label key={interest} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="w-3 h-3 border border-[#71717A] rounded-sm mr-2 text-[#16A34A] focus:ring-[#16A34A]"
                />
                <span className="text-sm font-Niramit text-[#09090B]">
                  {interest}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Availability
          </label>
          <textarea
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder="Tell us about your availability (days, times, frequency)..."
            rows={3}
            className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-vertical"
          />
        </div>

        <div>
          <label className="block text-sm font-medium font-Niramit text-[#374151] mb-2">
            Skills & Experience
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Share any relevant skills or experience..."
            rows={3}
            className="w-full px-3 py-2 border border-[#E4E4E7] rounded-md text-sm font-Niramit placeholder-[#71717A] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-transparent resize-vertical"
          />
        </div>

        <a
          href="/volunteer"
          className="w-full h-10 bg-[#EB414B] text-white text-sm font-medium font-Niramit rounded-md hover:bg-red-600 transition-colors inline-flex items-center justify-center"
        >
          Complete Full Application
        </a>
      </form>
    </div>
  );
};

// Forms Section Component
const FormsSection = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <VolunteerForm />
        </div>
      </div>
    </section>
  );
};

// Emergency Section Component
const EmergencySection = () => {
  return (
    <section className="py-20 bg-[#FEF2F2]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold font-Niramit text-[#991B1B] mb-6">
          Emergency Assistance
        </h2>
        <p className="text-lg font-Niramit text-[#B91C1C] mb-8">
          If you need immediate assistance or are facing an emergency situation, please
          contact our emergency hotline available 24/7.
        </p>
        
        <div className="bg-[#DC2626] rounded-lg p-8 text-white">
          <div className="text-center">
            <h3 className="text-4xl font-bold font-Niramit mb-2">
              +1 (555) 911-HELP
            </h3>
            <p className="text-base font-Niramit text-[#FEE2E2]">
              Available 24 hours a day, 7 days a week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const faqs = [
    {
      question: "How can I access your healthcare services?",
      answer: "Our healthcare services are free and open to all community members. Simply visit our Healthcare Center during operating hours or call to schedule an appointment. No insurance or documentation required."
    },
    {
      question: "What volunteer opportunities are available?",
      answer: "We offer volunteer opportunities across all our programs including healthcare assistance, education mentoring, community outreach, event coordination, and administrative support. Visit our Get Involved page for details."
    },
    {
      question: "How are donations used?",
      answer: "85% of donations go directly to program services, 10% to administrative costs, and 5% to fundraising. We provide detailed annual reports and quarterly updates to all donors showing exactly how funds are used."
    },
    {
      question: "Do you provide services outside Hope City?",
      answer: "Yes, we serve 25+ communities in the region. While our main offices are in Hope City, we have mobile units and partner organizations that extend our reach to rural and underserved areas."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-Niramit text-[#1F2937] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl font-Niramit text-[#4B5563]">
            Quick answers to common questions about our services and programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-[#E4E4E7] shadow-sm p-6">
              <h3 className="text-lg font-bold font-Niramit text-[#09090B] mb-6">
                {faq.question}
              </h3>
              <p className="text-base font-Niramit text-[#4B5563] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component


// Main Contact Component
const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Layout >
      <HeroSection />
      <LocationsSection />
      <FormsSection />
      <EmergencySection />
      <FAQSection />
      </Layout>
    </div>
  );
};

export default Contact;
