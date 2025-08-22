import Layout from "@/components/Layout";
import React, { useState } from "react";

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

const CheckIcon = () => (
  <svg width="70" height="69" viewBox="0 0 70 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.4201 28.75L37.4299 36.8371C37.8452 37.1421 38.4243 37.0817 38.7676 36.6974L58.7109 14.375" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
    <path d="M61.6442 34.5C61.6442 39.9064 59.915 45.177 56.6996 49.5716C53.4842 53.9662 48.944 57.264 43.7168 59.0018C38.4895 60.7397 32.8377 60.8302 27.5552 59.2608C22.2726 57.6914 17.6247 54.5409 14.2642 50.2517C10.9037 45.9625 8.99945 40.7501 8.81883 35.3466C8.63822 29.9431 10.1903 24.6199 13.2572 20.1246C16.3241 15.6294 20.7517 12.1878 25.9181 10.2834C31.0845 8.37903 36.7302 8.10739 42.0624 9.50667" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Step 1: Personal Information Component
const PersonalInfoStep = ({ formData, handleInputChange, errors }: {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  errors: Record<string, string>;
}) => (
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
            key="firstName"
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
            key="lastName"
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
            key="email"
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
            key="phone"
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
          key="dateOfBirth"
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
          key="address"
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
            key="city"
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
            key="state"
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
            key="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.zipCode 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Emergency Contact Name *</label>
          <input
            key="emergencyContactName"
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
            key="emergencyContactPhone"
            type="tel"
            value={formData.emergencyContactPhone}
            onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
            className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
              errors.emergencyContactPhone 
                ? 'border-red-500 focus:ring-red-500' 
                : 'border-gray-200 focus:ring-red-500'
            }`}
          />
          {errors.emergencyContactPhone && <p className="text-red-500 text-xs mt-1">{errors.emergencyContactPhone}</p>}
        </div>
      </div>
    </div>
  </div>
);

// Step 2: Availability Component
const AvailabilityStep = ({ formData, handleInputChange, handleCheckboxChange, errors }: {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
  errors: Record<string, string>;
}) => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
    <div className="flex items-center mb-6">
      <div className="mr-2">
        <CalendarIcon />
      </div>
      <h3 className="font-niramit text-2xl font-bold text-gray-900">Availability</h3>
    </div>
    <p className="text-gray-600 font-niramit text-sm mb-8">Tell us when you're available to volunteer</p>
    
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Preferred Days *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
            <label key={day} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.preferredDays.includes(day)}
                onChange={(e) => handleCheckboxChange('preferredDays', day, e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">{day}</span>
            </label>
          ))}
        </div>
        {errors.preferredDays && <p className="text-red-500 text-xs mt-1">{errors.preferredDays}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Preferred Time *</label>
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
          <option value="morning">Morning (6AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 6PM)</option>
          <option value="evening">Evening (6PM - 10PM)</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.preferredTime && <p className="text-red-500 text-xs mt-1">{errors.preferredTime}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Hours per Week *</label>
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
          <option value="1-5">1-5 hours</option>
          <option value="6-10">6-10 hours</option>
          <option value="11-20">11-20 hours</option>
          <option value="20+">20+ hours</option>
        </select>
        {errors.hoursPerWeek && <p className="text-red-500 text-xs mt-1">{errors.hoursPerWeek}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1">Preferred Start Date *</label>
          <input
            key="preferredStartDate"
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
          <label className="block text-sm font-medium text-gray-900 mb-1">Commitment Duration *</label>
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
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="ongoing">Ongoing</option>
          </select>
          {errors.commitmentDuration && <p className="text-red-500 text-xs mt-1">{errors.commitmentDuration}</p>}
        </div>
      </div>
    </div>
  </div>
);

// Step 3: Interests Component
const InterestsStep = ({ formData, handleInputChange, handleCheckboxChange, errors }: {
  formData: any;
  handleInputChange: (field: string, value: any) => void;
  handleCheckboxChange: (field: string, value: string, checked: boolean) => void;
  errors: Record<string, string>;
}) => (
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
    <div className="flex items-center mb-6">
      <div className="mr-2">
        <UsersIcon />
      </div>
      <h3 className="font-niramit text-2xl font-bold text-gray-900">Interests & Skills</h3>
    </div>
    <p className="text-gray-600 font-niramit text-sm mb-8">Tell us about your interests and what you'd like to contribute</p>
    
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Program Areas of Interest *</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { value: 'healthcare', label: 'Healthcare Services' },
            { value: 'education', label: 'Education & Skills' },
            { value: 'community', label: 'Community Support' },
            { value: 'arts', label: 'Arts & Culture' },
            { value: 'environment', label: 'Environmental Protection' },
            { value: 'elderly', label: 'Elderly Care' }
          ].map((area) => (
            <label key={area.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.programAreas.includes(area.value)}
                onChange={(e) => handleCheckboxChange('programAreas', area.value, e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">{area.label}</span>
            </label>
          ))}
        </div>
        {errors.programAreas && <p className="text-red-500 text-xs mt-1">{errors.programAreas}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Skills & Expertise (Optional)</label>
        <textarea
          key="skills"
          value={formData.skills}
          onChange={(e) => handleInputChange('skills', e.target.value)}
          className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          rows={3}
          placeholder="List your relevant skills, experience, or expertise"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Previous Volunteer Experience (Optional)</label>
        <textarea
          key="experience"
          value={formData.experience}
          onChange={(e) => handleInputChange('experience', e.target.value)}
          className="w-full px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          rows={3}
          placeholder="Describe any previous volunteer experience"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-1">Why do you want to volunteer with us? *</label>
        <textarea
          key="motivation"
          value={formData.motivation}
          onChange={(e) => handleInputChange('motivation', e.target.value)}
          className={`w-full px-3 py-3 border rounded-md focus:outline-none focus:ring-2 ${
            errors.motivation 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-200 focus:ring-red-500'
          }`}
          rows={4}
          placeholder="Please share your motivation for volunteering (minimum 50 characters)"
        />
        {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation}</p>}
      </div>
    </div>
  </div>
);

// Success Step Component
const SuccessStep = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8 text-center">
      <div className="flex justify-center mb-6">
        <CheckIcon />
      </div>
      
      <h2 className="font-niramit text-3xl font-bold text-gray-900 mb-4">
        Application Submitted Successfully!
      </h2>
      
      <p className="text-gray-600 font-niramit text-lg mb-8">
        Thank you for your interest in volunteering with us. We'll review your application and get back to you within 3-5 business days.
      </p>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="font-niramit text-lg font-semibold text-green-800 mb-4">What happens next?</h3>
        <div className="text-left space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-green-700 font-niramit text-sm">Our volunteer coordinator will review your application</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-green-700 font-niramit text-sm">You'll receive an email confirmation within 24 hours</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-green-700 font-niramit text-sm">We may contact you for a brief phone interview</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-green-700 font-niramit text-sm">Once approved, you'll be invited to an orientation session</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md font-niramit text-sm font-medium hover:bg-gray-300"
        >
          Return to Home
        </button>
        <button
          onClick={() => window.location.href = '/programs'}
          className="px-6 py-3 bg-red-600 text-white rounded-md font-niramit text-sm font-medium hover:bg-red-700"
        >
          Learn About Our Programs
        </button>
      </div>
    </div>
  </div>
);

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
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
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
          if (age < 16) newErrors.dateOfBirth = 'You must be at least 16 years old to volunteer';
        }
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) {
          newErrors.zipCode = 'ZIP code is required';
        } else if (!validateZipCode(formData.zipCode)) {
          newErrors.zipCode = 'Please enter a valid 6-digit ZIP code';
        }
        if (!formData.emergencyContactName.trim()) newErrors.emergencyContactName = 'Emergency contact name is required';
        if (!formData.emergencyContactPhone.trim()) {
          newErrors.emergencyContactPhone = 'Emergency contact phone is required';
        } else if (!validatePhone(formData.emergencyContactPhone)) {
          newErrors.emergencyContactPhone = 'Please enter a valid 10-digit mobile number';
        }
        break;

      case 2:
        // Availability validation
        if (formData.preferredDays.length === 0) newErrors.preferredDays = 'Please select at least one preferred day';
        if (!formData.preferredTime) newErrors.preferredTime = 'Please select a preferred time';
        if (!formData.hoursPerWeek) newErrors.hoursPerWeek = 'Please select hours per week';
        if (!formData.preferredStartDate) {
          newErrors.preferredStartDate = 'Please select a preferred start date';
        } else {
          const selectedDate = new Date(formData.preferredStartDate);
          const today = new Date();
          if (selectedDate < today) newErrors.preferredStartDate = 'Start date cannot be in the past';
        }
        if (!formData.commitmentDuration) newErrors.commitmentDuration = 'Please select commitment duration';
        break;

      case 3:
        // Interests & Skills validation
        if (formData.programAreas.length === 0) newErrors.programAreas = 'Please select at least one program area';
        if (!formData.motivation.trim()) {
          newErrors.motivation = 'Please share your motivation for volunteering';
        } else if (formData.motivation.trim().length < 50) {
          newErrors.motivation = 'Please provide at least 50 characters describing your motivation';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleInputChange = React.useCallback((field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  const handleCheckboxChange = React.useCallback((field: string, value: string, checked: boolean) => {
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
  }, [errors]);

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep formData={formData} handleInputChange={handleInputChange} errors={errors} />;
      case 2:
        return <AvailabilityStep formData={formData} handleInputChange={handleInputChange} handleCheckboxChange={handleCheckboxChange} errors={errors} />;
      case 3:
        return <InterestsStep formData={formData} handleInputChange={handleInputChange} handleCheckboxChange={handleCheckboxChange} errors={errors} />;
      case 4:
        return <SuccessStep />;
      default:
        return <PersonalInfoStep formData={formData} handleInputChange={handleInputChange} errors={errors} />;
    }
  };

  if (currentStep === 4) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <SuccessStep />
        </Layout>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        {/* Hero Section */}
        <div className="bg-red-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="font-niramit text-4xl md:text-5xl font-bold mb-4">
              Volunteer Application
            </h1>
            <p className="font-niramit text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
              Join our community of dedicated volunteers and make a lasting impact!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              {[1, 2, 3].map((step, index) => (
                <React.Fragment key={step}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step}
                  </div>
                  {index < 2 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      currentStep > step ? 'bg-red-600' : 'bg-gray-200'
                    }`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-xs font-medium text-gray-600">Personal Info</span>
              <span className="text-xs font-medium text-gray-600">Availability</span>
              <span className="text-xs font-medium text-gray-600">Interests</span>
            </div>
          </div>

          {/* Form Content */}
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 border rounded-md font-niramit text-sm font-medium ${
                currentStep === 1
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
                  : 'border-gray-300 text-gray-700 hover:border-gray-400'
              }`}
            >
              Previous
            </button>
            
            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 bg-red-600 text-white rounded-md font-niramit text-sm font-medium hover:bg-red-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  if (validateStep(currentStep)) {
                    setCurrentStep(4);
                  }
                }}
                className="px-6 py-3 bg-green-600 text-white rounded-md font-niramit text-sm font-medium hover:bg-green-700"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default VolunteerForm;
