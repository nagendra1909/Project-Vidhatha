import Layout from "@/components/Layout";
import React, { useState } from "react";
import { Gift } from 'lucide-react';

// Icon components
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9935 11.3331C16.9935 15.4997 14.0768 17.5831 10.6102 18.7914C10.4286 18.8529 10.2314 18.85 10.0518 18.7831C6.57682 17.5831 3.66016 15.4997 3.66016 11.3331V5.49972C3.66016 5.27871 3.74795 5.06675 3.90423 4.91047C4.06051 4.75419 4.27248 4.66639 4.49349 4.66639C6.16016 4.66639 8.24349 3.66639 9.69349 2.39972C9.87003 2.24889 10.0946 2.16602 10.3268 2.16602C10.559 2.16602 10.7836 2.24889 10.9602 2.39972C12.4185 3.67472 14.4935 4.66639 16.1602 4.66639C16.3812 4.66639 16.5931 4.75419 16.7494 4.91047C16.9057 5.06675 16.9935 5.27871 16.9935 5.49972V11.3331Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Hero section
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 via-red-500 to-orange-500 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Gift Icon */}
        <div className="flex justify-center mb-6">
          <Gift size={48} color="white" strokeWidth={2} />
        </div>
        
        <h1 className="text-white font-niramit text-4xl md:text-5xl font-bold mb-6">
          Make a Difference Today
        </h1>
        <p className="text-white font-niramit text-xl mb-8 max-w-2xl mx-auto">
          Your donation helps us provide essential services to those who need it
          most. Every contribution counts toward building a better tomorrow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">
              50,000+
            </div>
            <div className="text-white font-niramit text-base">
              Lives impacted
            </div>
          </div>
          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">
              ₹25
            </div>
            <div className="text-white font-niramit text-base">
              Provides a meal
            </div>
          </div>

          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">
              ₹500
            </div>
            <div className="text-white font-niramit text-base">
              Medical consultation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 1: Donation Details Component
const DonationDetailsStep = ({ formData, updateFormData, errors }: {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  errors: Record<string, string>;
}) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-black font-niramit text-lg font-semibold mb-4">Donation Type</h3>
      <div className="space-y-3">
        {[
          { value: 'one-time', label: 'One-time Donation' },
          { value: 'monthly', label: 'Monthly Donation' },
          { value: 'yearly', label: 'Yearly Donation' }
        ].map((option) => (
          <label key={option.value} className="flex items-center gap-3">
            <input
              type="radio"
              name="donationType"
              value={option.value}
              checked={formData.donationType === option.value}
              onChange={(e) => updateFormData('donationType', e.target.value)}
              className="w-4 h-4"
            />
            <span className="text-black font-niramit text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-black font-niramit text-lg font-semibold mb-4">Select Amount (₹)</h3>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {['25', '50', '100', '250', '500', '1000'].map((amount) => (
          <button
            key={amount}
            onClick={() => {
              updateFormData('amount', amount);
              updateFormData('customAmount', '');
            }}
            className={`py-3 px-4 border rounded-md font-niramit text-sm font-medium ${
              formData.amount === amount
                ? 'border-red-500 bg-red-50 text-red-600'
                : 'border-gray-300 bg-white text-black hover:border-red-300'
            }`}
          >
            ₹{amount}
          </button>
        ))}
      </div>
      
      <div>
        <label className="block text-black font-niramit text-sm mb-2">Custom Amount</label>
        <input
          key="customAmount"
          type="number"
          placeholder="Enter custom amount"
          value={formData.customAmount}
          onChange={(e) => {
            updateFormData('customAmount', e.target.value);
            updateFormData('amount', '');
          }}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.amount ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
        />
        {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
      </div>
    </div>

    <div>
      <h3 className="text-black font-niramit text-lg font-semibold mb-4">Choose Program to Support</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            value: 'general-fund',
            label: 'General Fund',
            description: 'Support all our programs',
            icon: '❤️'
          },
          {
            value: 'healthcare',
            label: 'Healthcare Services',
            description: 'Free medical consultations and medicines',
            icon: '🩺'
          },
          {
            value: 'education',
            label: 'Education & Skills',
            description: 'Skill development and educational support',
            icon: '📚'
          },
          {
            value: 'community',
            label: 'Community Support',
            description: 'Food security and emergency relief',
            icon: '🤝'
          },
          {
            value: 'environment',
            label: 'Environmental Protection',
            description: 'Conservation and awareness',
            icon: '🌱'
          },
          {
            value: 'emergency',
            label: 'Emergency Relief',
            description: 'Disaster response and urgent needs',
            icon: '🚨'
          }
        ].map((program) => (
          <label key={program.value} className="flex items-start gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              name="program"
              value={program.value}
              checked={formData.program === program.value}
              onChange={(e) => updateFormData('program', e.target.value)}
              className="w-4 h-4 mt-1 text-red-500 border-gray-300 focus:ring-red-500"
            />
            <div className="flex items-center gap-3 flex-1">
              <span className="text-xl">{program.icon}</span>
              <div>
                <div className="text-black font-niramit text-sm font-medium">{program.label}</div>
                <div className="text-gray-600 font-niramit text-xs mt-1">{program.description}</div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  </div>
);

// Step 2: Payment Method Component  
const PaymentMethodStep = ({ formData, updateFormData, errors }: {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  errors: Record<string, string>;
}) => (
  <div className="space-y-6">
    <h3 className="text-black font-niramit text-lg font-semibold mb-4">Choose Payment Method</h3>
    {errors.paymentMethod && (
      <p className="text-red-500 text-sm mb-4">{errors.paymentMethod}</p>
    )}

    <div className="space-y-4">
      {[
        { value: 'upi', label: 'UPI (Google Pay, PhonePe, Paytm)', icon: '📱' },
        { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
        { value: 'netbanking', label: 'Net Banking', icon: '🏦' },
        { value: 'wallet', label: 'Digital Wallet', icon: '👛' }
      ].map((method) => (
        <label key={method.value} className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value={method.value}
            checked={formData.paymentMethod === method.value}
            onChange={(e) => updateFormData('paymentMethod', e.target.value)}
            className="w-4 h-4"
          />
          <span className="text-lg">{method.icon}</span>
          <span className="text-black font-niramit text-sm font-medium">{method.label}</span>
        </label>
      ))}
    </div>
  </div>
);

// Step 3: Personal Information Component
const PersonalInfoStep = ({ formData, updateFormData, errors }: {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  errors: Record<string, string>;
}) => (
  <div className="space-y-6">
    <label className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={formData.anonymous}
        onChange={(e) => updateFormData('anonymous', e.target.checked)}
        className="w-4 h-4"
      />
      <span className="text-black font-niramit text-sm">Make this donation anonymous</span>
    </label>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">First Name</label>
        <input
          key="firstName"
          type="text"
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.firstName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
          required
        />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Last Name</label>
        <input
          key="lastName"
          type="text"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.lastName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
          required
        />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Email Address</label>
        <input
          key="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData('email', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Phone Number</label>
        <input
          key="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
          placeholder="10-digit mobile number"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-niramit text-sm mb-2">Address</label>
      <textarea
        key="address"
        value={formData.address}
        onChange={(e) => updateFormData('address', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-24"
      />
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">City</label>
        <input
          key="city"
          type="text"
          value={formData.city}
          onChange={(e) => updateFormData('city', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">State</label>
        <input
          key="state"
          type="text"
          value={formData.state}
          onChange={(e) => updateFormData('state', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">PIN Code</label>
        <input
          key="pinCode"
          type="text"
          value={formData.pinCode}
          onChange={(e) => updateFormData('pinCode', e.target.value)}
          className={`w-full px-3 py-2 border rounded-md font-niramit text-sm ${
            errors.pinCode ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
          }`}
          placeholder="6-digit PIN code"
        />
        {errors.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode}</p>}
      </div>
    </div>

    <div>
      <label className="block text-gray-700 font-niramit text-sm mb-2">Dedication (Optional)</label>
      <textarea
        key="dedication"
        placeholder="In memory of.../In honor of..."
        value={formData.dedication}
        onChange={(e) => updateFormData('dedication', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-20"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-niramit text-sm mb-2">Message to Organization (Optional)</label>
      <textarea
        key="message"
        placeholder="Share why you are supporting our cause"
        value={formData.message}
        onChange={(e) => updateFormData('message', e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-20"
      />
    </div>
  </div>
);

// Step 4: Review Component
const ReviewStep = ({ formData, updateFormData, errors }: {
  formData: any;
  updateFormData: (field: string, value: any) => void;
  errors: Record<string, string>;
}) => {
  const donationAmount = formData.customAmount || formData.amount || '0';
  
  return (
    <div className="space-y-6">
      <h3 className="text-black font-niramit text-xl font-semibold">Review Your Donation</h3>
      
      <div className="bg-blue-50 p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-black font-niramit text-sm font-semibold mb-2">Donation Details</h4>
            <p className="text-black font-niramit text-2xl font-bold">₹{donationAmount}</p>
            <p className="text-gray-600 font-niramit text-sm">{formData.donationType} donation</p>
            <p className="text-gray-600 font-niramit text-sm">To: {formData.program}</p>
          </div>
          <div>
            <h4 className="text-black font-niramit text-sm font-semibold mb-2">Payment Method</h4>
            <p className="text-black font-niramit text-sm">{formData.paymentMethod}</p>
            <h4 className="text-black font-niramit text-sm font-semibold mb-2 mt-4">Contact</h4>
            <p className="text-black font-niramit text-sm">{formData.firstName} {formData.lastName}</p>
            <p className="text-black font-niramit text-sm">{formData.email}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.emailReceipt}
            onChange={(e) => updateFormData('emailReceipt', e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-black font-niramit text-sm">Email me a donation receipt</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.updates}
            onChange={(e) => updateFormData('updates', e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-black font-niramit text-sm">Send me updates about our programs</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.anonymous}
            onChange={(e) => updateFormData('anonymous', e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-black font-niramit text-sm">Make this donation anonymous</span>
        </div>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={formData.terms}
          onChange={(e) => updateFormData('terms', e.target.checked)}
          className={`w-5 h-5 mt-1 ${errors.terms ? 'border-red-500' : ''}`}
        />
        <p className="text-black font-niramit text-base">
          I agree to confirm the payment and proceed
        </p>
      </label>
      {errors.terms && <p className="text-red-500 text-xs mt-1 ml-8">{errors.terms}</p>}
    </div>
  );
};

// Multi-step donation form
const DonationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    donationType: 'one-time',
    amount: '',
    customAmount: '',
    program: 'general-fund',
    paymentMethod: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    dedication: '',
    message: '',
    anonymous: false,
    emailReceipt: false,
    updates: false,
    terms: false
  });

  const updateFormData = React.useCallback((field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  }, [errors]);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const validatePinCode = (pinCode: string) => {
    const pinRegex = /^\d{6}$/;
    return pinRegex.test(pinCode);
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        // Validate donation amount
        if (!formData.amount && !formData.customAmount) {
          newErrors.amount = 'Please select or enter a donation amount';
        }
        if (formData.customAmount && (isNaN(Number(formData.customAmount)) || Number(formData.customAmount) <= 0)) {
          newErrors.amount = 'Please enter a valid donation amount';
        }
        break;

      case 2:
        // Validate payment method
        if (!formData.paymentMethod) {
          newErrors.paymentMethod = 'Please select a payment method';
        }
        break;

      case 3:
        // Validate personal information
        if (!formData.firstName.trim()) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (formData.phone && !validatePhone(formData.phone)) {
          newErrors.phone = 'Please enter a valid 10-digit mobile number';
        }
        if (formData.pinCode && !validatePinCode(formData.pinCode)) {
          newErrors.pinCode = 'Please enter a valid 6-digit PIN code';
        }
        break;

      case 4:
        // Validate terms and conditions
        if (!formData.terms) {
          newErrors.terms = 'Please accept the terms and conditions to proceed';
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

  const progressWidth = (currentStep / 4) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DonationDetailsStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 2:
        return <PaymentMethodStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 3:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      case 4:
        return <ReviewStep formData={formData} updateFormData={updateFormData} errors={errors} />;
      default:
        return <DonationDetailsStep formData={formData} updateFormData={updateFormData} errors={errors} />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <HeartIcon />
        <h2 className="text-black font-niramit text-2xl font-semibold">Donation Details</h2>
      </div>
      
      <p className="text-gray-500 font-niramit text-sm mb-4">
        Step {currentStep} of 4 - Complete your donation
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
        <div 
          className="bg-[#EB414B] h-2 rounded-full transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      {/* Form Content */}
      <div className="mb-8">
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="text-red-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Please fix the following errors:
                </h3>
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc pl-5 space-y-1">
                    {Object.values(errors).map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {renderStepContent()}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between border-t border-gray-200 pt-6">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-4 py-2 border rounded-md font-niramit text-sm font-medium ${
            currentStep === 1
              ? 'border-gray-300 text-gray-400 cursor-not-allowed opacity-50'
              : 'border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
        >
          Previous
        </button>
        
        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            className="px-4 py-2 bg-black text-white rounded-md font-niramit text-sm font-medium hover:bg-gray-800"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              if (validateStep(currentStep)) {
                alert('Thank you for your donation! This would redirect to payment gateway.');
              }
            }}
            disabled={!formData.terms}
            className={`px-6 py-2 rounded-md font-niramit text-sm font-medium ${
              formData.terms
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Complete Donation
          </button>
        )}
      </div>
    </div>
  );
};

// Impact sidebar
const ImpactSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Your Impact */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-black font-niramit text-lg font-semibold mb-4">Your Impact</h3>
        
        <div className="bg-green-100 rounded-lg p-4 text-center mb-4">
          <div className="text-green-600 font-niramit text-2xl font-bold">₹0</div>
          <div className="text-gray-600 font-niramit text-sm">Your donation amount</div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-black font-niramit text-sm">Provides meals for:</span>
            <span className="text-black font-niramit text-sm font-semibold">0 people</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black font-niramit text-sm">Medical consultations:</span>
            <span className="text-black font-niramit text-sm font-semibold">0 consultations</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black font-niramit text-sm">Educational materials:</span>
            <span className="text-black font-niramit text-sm font-semibold">0 sets</span>
          </div>
        </div>
      </div>

      {/* Secure & Trusted */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4">
          <ShieldIcon />
          <h3 className="text-black font-niramit text-lg font-semibold">Secure & Trusted</h3>
        </div>
        
        <div className="space-y-3">
          {[
            'SSL Encrypted Payment',
            '80G Tax Exemption',
            'Instant Receipt',
            '100% Fund Utilization'
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-black font-niramit text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Need Help */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h3 className="text-black font-niramit text-lg font-semibold mb-4">Need Help?</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm">📞</span>
            <span className="text-black font-niramit text-sm">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">✉️</span>
            <span className="text-black font-niramit text-sm">donate@ngo.org</span>
          </div>
        </div>
        
        <p className="text-gray-600 font-niramit text-sm mt-3">
          Our support team is available 24/7 to help with your donation.
        </p>
      </div>
    </div>
  );
};

// Main DonateNow component
const DonateNow = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <main className="pt-2">
          <HeroSection />

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Form */}
                <div className="lg:col-span-2">
                  <DonationForm />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <ImpactSidebar />
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default DonateNow;
