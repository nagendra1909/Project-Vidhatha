import Layout from "@/components/Layout";
import { useState } from "react";

// Icon components
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3346 17.5V15.8333C13.3346 14.9493 12.9834 14.1014 12.3583 13.4763C11.7332 12.8512 10.8854 12.5 10.0013 12.5H5.0013C4.11725 12.5 3.2694 12.8512 2.64428 13.4763C2.01916 14.1014 1.66797 14.9493 1.66797 15.8333V17.5" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.332 17.4991V15.8324C18.3315 15.0939 18.0857 14.3764 17.6332 13.7927C17.1807 13.209 16.5471 12.7921 15.832 12.6074" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.332 2.60742C14.049 2.79101 14.6846 3.20801 15.1384 3.79268C15.5922 4.37735 15.8386 5.09645 15.8386 5.83659C15.8386 6.57673 15.5922 7.29582 15.1384 7.8805C14.6846 8.46517 14.049 8.88217 13.332 9.06576" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.832 3.33398H4.16536C3.24489 3.33398 2.4987 4.08018 2.4987 5.00065V15.0007C2.4987 15.9211 3.24489 16.6673 4.16536 16.6673H15.832C16.7525 16.6673 17.4987 15.9211 17.4987 15.0007V5.00065C17.4987 4.08018 16.7525 3.33398 15.832 3.33398Z" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.332 1.66602V4.99935" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66797 1.66602V4.99935" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.4987 8.33398H17.4987" stroke="#09090B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.24 12.25C3.84461 11.8572 3.53134 11.3897 3.31845 10.8747C3.10556 10.3596 2.99731 9.80733 3 9.25002C3 8.12285 3.44777 7.04184 4.2448 6.24481C5.04183 5.44778 6.12283 5.00002 7.25 5.00002C8.83 5.00002 10.21 5.86002 10.94 7.14002H12.06C12.4311 6.48908 12.9681 5.94811 13.6163 5.57219C14.2645 5.19628 15.0007 4.99886 15.75 5.00002C16.8772 5.00002 17.9582 5.44778 18.7552 6.24481C19.5522 7.04184 20 8.12285 20 9.25002C20 10.42 19.5 11.5 18.76 12.25L11.5 19.5L4.24 12.25ZM19.46 12.96C20.41 12 21 10.7 21 9.25002C21 7.85763 20.4469 6.52227 19.4623 5.53771C18.4777 4.55314 17.1424 4.00002 15.75 4.00002C14 4.00002 12.45 4.85002 11.5 6.17002C11.0151 5.49652 10.3766 4.94834 9.63748 4.57095C8.89835 4.19356 8.0799 3.99784 7.25 4.00002C5.85761 4.00002 4.52226 4.55314 3.53769 5.53771C2.55312 6.52227 2 7.85763 2 9.25002C2 10.7 2.59 12 3.54 12.96L11.5 20.92L19.46 12.96Z" fill="black"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#ED4545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 12V24L32 28" stroke="#ED4545" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GroupIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 42V38C32 35.8783 31.1571 33.8434 29.6569 32.3431C28.1566 30.8429 26.1217 30 24 30H12C9.87827 30 7.84344 30.8429 6.34315 32.3431C4.84285 33.8434 4 35.8783 4 38V42" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 22C22.4183 22 26 18.4183 26 14C26 9.58172 22.4183 6 18 6C13.5817 6 10 9.58172 10 14C10 18.4183 13.5817 22 18 22Z" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 41.9998V37.9998C43.9986 36.2272 43.4087 34.5053 42.3227 33.1044C41.2367 31.7035 39.7162 30.7029 38 30.2598" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 6.25977C33.7208 6.70037 35.246 7.70117 36.3352 9.10439C37.4244 10.5076 38.0156 12.2334 38.0156 14.0098C38.0156 15.7861 37.4244 17.5119 36.3352 18.9151C35.246 20.3184 33.7208 21.3192 32 21.7598" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartRedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 28C41 25.08 44 21.58 44 17C44 14.0826 42.8411 11.2847 40.7782 9.22183C38.7153 7.15893 35.9174 6 33 6C29.48 6 27 7 24 10C21 7 18.52 6 15 6C12.0826 6 9.28469 7.15893 7.22183 9.22183C5.15893 11.2847 4 14.0826 4 17C4 21.6 7 25.1 10 28L24 42L38 28Z" stroke="#DC2626" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="70" height="69" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.4201 28.75L37.4299 36.8371C37.8452 37.1421 38.4243 37.0817 38.7676 36.6974L58.7109 14.375" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
    <path d="M61.6442 34.5C61.6442 39.9064 59.915 45.177 56.6996 49.5716C53.4842 53.9662 48.944 57.264 43.7168 59.0018C38.4895 60.7397 32.8377 60.8302 27.5552 59.2608C22.2726 57.6914 17.6247 54.5409 14.2642 50.2517C10.9037 45.9625 8.99945 40.7501 8.81883 35.3466C8.63822 29.9431 10.1903 24.6199 13.2572 20.1246C16.3241 15.6294 20.7517 12.1878 25.9181 10.2834C31.0845 8.37903 36.7302 8.10739 42.0624 9.50667" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Header component
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
            <a href="/" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">Home</a>
            <a href="/resources" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">Resources</a>
            <a href="/programs" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">Programs</a>
            <a href="/get-involved" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">Get Involved</a>
            <a href="/about" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">About</a>
            <a href="/contact" className="text-gray-700 font-niramit text-base font-medium hover:text-red-600 transition-colors">Contact</a>
          </nav>

          {/* Donate button */}
          <div className="hidden md:block">
            <a href="/donate" className="inline-flex items-center px-6 py-2 bg-white rounded-full border border-gray-200 hover:shadow-md transition-all duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M2 9.13738C2 14.0004 6.02 16.5914 8.962 18.9114C10 19.7294 11 20.5004 12 20.5004C13 20.5004 14 19.7304 15.038 18.9104C17.981 16.5924 22 14.0004 22 9.13838C22 4.27638 16.5 0.825382 12 5.50138C7.5 0.825382 2 4.27438 2 9.13738Z" fill="#E61C1F"/>
              </svg>
              <span className="text-gray-700 font-merriweather font-bold text-base">Donate now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Progress indicator component
const ProgressIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { number: 1, label: "Personal Info" },
    { number: 2, label: "Availability" }, 
    { number: 3, label: "Interests" },
    { number: 4, label: "Background" }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.number ? 'bg-[#E1414B] text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  <span className="font-geist text-sm font-bold">{step.number}</span>
                </div>
                <div className="ml-2">
                  <div className={`font-geist text-sm ${
                    currentStep >= step.number ? 'text-[#E1414B]' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-gray-300 rounded"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Multi-step volunteer form
const VolunteerForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    
    // Availability
    preferredDays: [] as string[],
    preferredTime: '',
    hoursPerWeek: '',
    preferredStartDate: '',
    commitmentDuration: '',
    
    // Interests & Skills
    programAreas: [] as string[],
    skills: '',
    experience: '',
    motivation: '',
    
    // Background - handled in success step
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const validateZipCode = (zipCode: string) => {
    const zipRegex = /^\d{6}$/;
    return zipRegex.test(zipCode);
  };

  const validateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        // Personal Information validation
        if (!formData.firstName.trim()) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email address is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone.trim()) {
          newErrors.phone = 'Phone number is required';
        } else if (!validatePhone(formData.phone)) {
          newErrors.phone = 'Please enter a valid 10-digit mobile number';
        }
        if (!formData.dateOfBirth) {
          newErrors.dateOfBirth = 'Date of birth is required';
        } else {
          const age = validateAge(formData.dateOfBirth);
          if (age < 16) {
            newErrors.dateOfBirth = 'You must be at least 16 years old to volunteer';
          }
          if (age > 80) {
            newErrors.dateOfBirth = 'Please verify your date of birth';
          }
        }
        if (!formData.address.trim()) {
          newErrors.address = 'Address is required';
        }
        if (!formData.city.trim()) {
          newErrors.city = 'City is required';
        }
        if (!formData.state.trim()) {
          newErrors.state = 'State is required';
        }
        if (!formData.zipCode.trim()) {
          newErrors.zipCode = 'ZIP code is required';
        } else if (!validateZipCode(formData.zipCode)) {
          newErrors.zipCode = 'Please enter a valid 6-digit ZIP code';
        }
        if (!formData.emergencyContactName.trim()) {
          newErrors.emergencyContactName = 'Emergency contact name is required';
        }
        if (!formData.emergencyContactPhone.trim()) {
          newErrors.emergencyContactPhone = 'Emergency contact phone is required';
        } else if (!validatePhone(formData.emergencyContactPhone)) {
          newErrors.emergencyContactPhone = 'Please enter a valid 10-digit phone number';
        }
        break;

      case 2:
        // Availability validation
        if (formData.preferredDays.length === 0) {
          newErrors.preferredDays = 'Please select at least one preferred day';
        }
        if (!formData.preferredTime) {
          newErrors.preferredTime = 'Please select your preferred time';
        }
        if (!formData.hoursPerWeek) {
          newErrors.hoursPerWeek = 'Please select your available hours per week';
        }
        if (!formData.preferredStartDate) {
          newErrors.preferredStartDate = 'Please select your preferred start date';
        } else {
          const startDate = new Date(formData.preferredStartDate);
          const today = new Date();
          if (startDate < today) {
            newErrors.preferredStartDate = 'Start date cannot be in the past';
          }
        }
        if (!formData.commitmentDuration) {
          newErrors.commitmentDuration = 'Please select your commitment duration';
        }
        break;

      case 3:
        // Interests & Skills validation
        if (formData.programAreas.length === 0) {
          newErrors.programAreas = 'Please select at least one program area of interest';
        }
        if (!formData.motivation.trim()) {
          newErrors.motivation = 'Please tell us why you want to volunteer';
        }
        if (formData.motivation.trim().length < 50) {
          newErrors.motivation = 'Please provide a more detailed motivation (at least 50 characters)';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
    // Clear error when user makes a selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Personal Information Step
  const PersonalInfoStep = () => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <UsersIcon />
        </div>
        <h3 className="font-niramit text-2xl font-bold text-gray-900">Personal Information</h3>
      </div>
      <p className="text-gray-600 font-niramit text-sm mb-8">Please provide your basic personal details</p>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">First Name *</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.firstName 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Last Name *</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.lastName 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Phone Number *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.phone 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
              placeholder="10-digit mobile number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Date of Birth *</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.dateOfBirth 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Address *</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.address 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">City *</label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.city 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">State *</label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.state 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">ZIP Code *</label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => handleInputChange('zipCode', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.zipCode 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
              placeholder="6-digit ZIP code"
            />
            {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Emergency Contact Name *</label>
            <input
              type="text"
              value={formData.emergencyContactName}
              onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.emergencyContactName 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
            />
            {errors.emergencyContactName && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-1">Emergency Contact Phone *</label>
            <input
              type="tel"
              value={formData.emergencyContactPhone}
              onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
              className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                errors.emergencyContactPhone 
                  ? 'border-red-500 focus:ring-red-500' 
                  : 'border-gray-200 focus:ring-red-500'
              }`}
              placeholder="10-digit phone number"
            />
            {errors.emergencyContactPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactPhone}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  // Availability Step
  const AvailabilityStep = () => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <UsersIcon />
        </div>
        <h3 className="font-niramit text-2xl font-bold text-gray-900">Availability</h3>
      </div>
      <p className="text-gray-600 font-niramit text-sm mb-8">Tell us when you're available to volunteer</p>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-niramit text-lg font-bold text-gray-900 mb-4">Preferred days (select all that apply)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <label key={day} className={`flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                errors.preferredDays ? 'border-red-500' : 'border-gray-200'
              }`}>
                <input
                  type="checkbox"
                  checked={formData.preferredDays.includes(day)}
                  onChange={(e) => handleCheckboxChange('preferredDays', day, e.target.checked)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="font-niramit text-sm text-gray-900">{day}</span>
              </label>
            ))}
          </div>
          {errors.preferredDays && <p className="text-red-500 text-xs mt-1">{errors.preferredDays}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Preferred Time of Day</label>
          <select
            value={formData.preferredTime}
            onChange={(e) => handleInputChange('preferredTime', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.preferredTime 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          >
            <option value="">Select preferred time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
            <option value="flexible">Flexible</option>
          </select>
          {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Hours per Week</label>
          <select
            value={formData.hoursPerWeek}
            onChange={(e) => handleInputChange('hoursPerWeek', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.hoursPerWeek 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          >
            <option value="">Select hours per week</option>
            <option value="1-4">1-4 hours</option>
            <option value="5-9">5-9 hours</option>
            <option value="10-15">10-15 hours</option>
            <option value="16+">16+ hours</option>
          </select>
          {errors.hoursPerWeek && <p className="text-red-500 text-xs mt-1">{errors.hoursPerWeek}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Preferred Start Date</label>
          <input
            type="date"
            value={formData.preferredStartDate}
            onChange={(e) => handleInputChange('preferredStartDate', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.preferredStartDate 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.preferredStartDate && <p className="text-red-500 text-xs mt-1">{errors.preferredStartDate}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Preferred Commitment Duration</label>
          <select
            value={formData.commitmentDuration}
            onChange={(e) => handleInputChange('commitmentDuration', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.commitmentDuration 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          >
            <option value="">Select commitment duration</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="1+ years">1+ years</option>
          </select>
          {errors.commitmentDuration && <p className="text-red-500 text-xs mt-1">{errors.commitmentDuration}</p>}
        </div>
      </div>
    </div>
  );

  // Interests & Skills Step
  const InterestsStep = () => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="mr-2">
          <HeartIcon />
        </div>
        <h3 className="font-niramit text-2xl font-bold text-gray-900">Interests & Skills</h3>
      </div>
      <p className="text-gray-600 font-niramit text-sm mb-8">Tell us about your interests and what you'd like to contribute</p>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-niramit text-lg font-bold text-gray-900 mb-4">Program Areas of Interest (select all that apply)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { value: 'healthcare', label: 'Healthcare Services', desc: 'Medical consultation, health awareness' },
              { value: 'education', label: 'Education & Skills', desc: 'Teaching, mentoring, skill development' },
              { value: 'community', label: 'Community Support', desc: 'Food distribution, emergency relief' },
              { value: 'environment', label: 'Environmental Protection', desc: 'Tree plantation, cleanup drives' },
              { value: 'arts', label: 'Arts & Culture', desc: 'Cultural events, traditional arts' },
              { value: 'specialized', label: 'Specialized Care', desc: 'Disability support, senior care' },
              { value: 'admin', label: 'Administrative Support', desc: 'Office work, data entry, coordination' },
              { value: 'events', label: 'Event Management', desc: 'Planning and organizing community events' }
            ].map((area) => (
              <label key={area.value} className={`flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer ${
                errors.programAreas ? 'border-red-500' : 'border-gray-200'
              }`}>
                <input
                  type="checkbox"
                  checked={formData.programAreas.includes(area.value)}
                  onChange={(e) => handleCheckboxChange('programAreas', area.value, e.target.checked)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 mt-1"
                />
                <div>
                  <div className="font-niramit text-sm font-medium text-gray-900">{area.label}</div>
                  <div className="font-niramit text-xs text-gray-500">{area.desc}</div>
                </div>
              </label>
            ))}
          </div>
          {errors.programAreas && <p className="text-red-500 text-xs mt-1">{errors.programAreas}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Skills & Expertise</label>
          <textarea
            value={formData.skills}
            onChange={(e) => handleInputChange('skills', e.target.value)}
            placeholder="List your relevant skills, qualifications, or expertise that could benefit our programs..."
            rows={4}
            className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Relevant Experience</label>
          <textarea
            value={formData.experience}
            onChange={(e) => handleInputChange('experience', e.target.value)}
            placeholder="Describe any relevant work, volunteer, or personal experience..."
            rows={4}
            className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Why do you want to volunteer with us?</label>
          <textarea
            value={formData.motivation}
            onChange={(e) => handleInputChange('motivation', e.target.value)}
            placeholder="Tell us what motivates you to volunteer and what you hope to achieve"
            rows={4}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.motivation 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
        </div>
      </div>
    </div>
  );

  // Success Step
  const SuccessStep = () => (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center">
        <div className="mb-6 flex justify-center">
          <CheckIcon />
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="font-niramit text-3xl font-bold text-green-800 mb-4">
            Application Submitted Successfully
          </h2>
          <p className="font-niramit text-lg text-green-700 mb-8">
            Thank you for your interest in volunteering with us. We've received your 
            application and will review it within 3-5 business days
          </p>
          
          <div className="bg-white rounded-lg p-6 text-left">
            <h3 className="font-niramit text-lg font-bold text-gray-900 mb-4">What happens next?</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>We'll review your application and match you with suitable opportunities</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Our volunteer coordinator will contact you within 5 business days</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>You'll be invited for a brief orientation session</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Background check for training will be arranged if required</span>
              </li>
            </ul>
          </div>
        </div>
        
        <a
          href="/"
          className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Return To Home
        </a>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <AvailabilityStep />;
      case 3:
        return <InterestsStep />;
      case 4:
        return <SuccessStep />;
      default:
        return <PersonalInfoStep />;
    }
  };

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* <Header /> */}
        {/* <Layout> */}
        <main className="pt-24">
          <div className="bg-[#EB414B] py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-white font-geist text-4xl font-bold mb-4">
                Volunteer Application
              </h1>
              <p className="text-blue-100 font-geist text-xl">
                Join our community of dedicated volunteers and make a lasting impact
              </p>
            </div>
          </div>
          
          <ProgressIndicator currentStep={currentStep} />
          <div className="py-12">
            <SuccessStep />
          </div>
        </main>
      {/* </Layout> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      <Layout>
        <main className="pt-2">
          {/* Hero Section */}
          <div className="bg-[#EB414B] py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-white font-geist text-4xl font-bold mb-4">
                Volunteer Application
              </h1>
              <p className="text-blue-100 font-geist text-xl">
                Join our community of dedicated volunteers and make a lasting
                impact
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator currentStep={currentStep} />

          {/* Form Content */}
          <div className="py-12">
            <div className="max-w-4xl mx-auto px-6">
              <div className="space-y-8">
                {Object.keys(errors).length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                          Please fix the following errors:
                        </h3>
                        <div className="mt-2 text-sm text-red-700">
                          <ul className="list-disc list-inside space-y-1">
                            {Object.values(errors).map((error, index) => (
                              <li key={index}>{error}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {renderCurrentStep()}

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className={`px-6 py-3 rounded-md border transition-colors ${
                        currentStep === 1
                          ? "border-gray-200 text-gray-400 cursor-not-allowed opacity-50"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* What to Expect Section */}
          <div className="bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-center font-geist text-3xl font-bold text-gray-900 mb-12">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center">
                  <div className="flex justify-center mb-6">
                    <ClockIcon />
                  </div>
                  <h3 className="font-geist text-lg font-bold text-gray-900 mb-4">
                    Application Review
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We'll review your application within 3-5 business days and
                    match you with suitable opportunities.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center">
                  <div className="flex justify-center mb-6">
                    <GroupIcon />
                  </div>
                  <h3 className="font-geist text-lg font-bold text-gray-900 mb-4">
                    Orientation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Attend a brief orientation session to learn about our
                    organization and volunteer guidelines.
                  </p>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 text-center">
                  <div className="flex justify-center mb-6">
                    <HeartRedIcon />
                  </div>
                  <h3 className="font-geist text-lg font-bold text-gray-900 mb-4">
                    Start Volunteering
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Begin your volunteer journey and start making a positive
                    impact in your community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default VolunteerForm;
