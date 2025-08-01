import Layout from "@/components/Layout";
import { useState } from "react";

// Icon components
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.04131 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.3333 21.334H10.6667C9.19391 21.334 8 22.5279 8 24.0007V29.334C8 30.8067 9.19391 32.0007 10.6667 32.0007H53.3333C54.8061 32.0007 56 30.8067 56 29.334V24.0007C56 22.5279 54.8061 21.334 53.3333 21.334Z" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32 21.334V56.0007" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50.6654 32V50.6667C50.6654 52.0812 50.1035 53.4377 49.1033 54.4379C48.1031 55.4381 46.7465 56 45.332 56H18.6654C17.2509 56 15.8943 55.4381 14.8941 54.4379C13.8939 53.4377 13.332 52.0812 13.332 50.6667V32" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.9987 21.3325C18.2306 21.3325 16.5349 20.6302 15.2847 19.3799C14.0344 18.1297 13.332 16.434 13.332 14.6659C13.332 12.8978 14.0344 11.2021 15.2847 9.95183C16.5349 8.70159 18.2306 7.99921 19.9987 7.99921C22.5712 7.95439 25.0921 9.20257 27.2327 11.581C29.3732 13.9594 31.0341 17.3576 31.9987 21.3325C32.9633 17.3576 34.6242 13.9594 36.7647 11.581C38.9053 9.20257 41.4262 7.95439 43.9987 7.99921C45.7668 7.99921 47.4625 8.70159 48.7127 9.95183C49.963 11.2021 50.6654 12.8978 50.6654 14.6659C50.6654 16.434 49.963 18.1297 48.7127 19.3799C47.4625 20.6302 45.7668 21.3325 43.9987 21.3325" stroke="white" strokeWidth="5.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.9935 11.3331C16.9935 15.4997 14.0768 17.5831 10.6102 18.7914C10.4286 18.8529 10.2314 18.85 10.0518 18.7831C6.57682 17.5831 3.66016 15.4997 3.66016 11.3331V5.49972C3.66016 5.27871 3.74795 5.06675 3.90423 4.91047C4.06051 4.75419 4.27248 4.66639 4.49349 4.66639C6.16016 4.66639 8.24349 3.66639 9.69349 2.39972C9.87003 2.24889 10.0946 2.16602 10.3268 2.16602C10.559 2.16602 10.7836 2.24889 10.9602 2.39972C12.4185 3.67472 14.4935 4.66639 16.1602 4.66639C16.3812 4.66639 16.5931 4.75419 16.7494 4.91047C16.9057 5.06675 16.9935 5.27871 16.9935 5.49972V11.3331Z" stroke="#16A34A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
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
        </div>
      </div>
    </header>
  );
};

// Hero section with donation statistics
const HeroSection = () => {
  return (
    <section className="bg-[#EB414B] py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <GiftIcon />
        </div>
        <h1 className="text-white font-niramit text-5xl font-bold mb-4">
          Make a Difference Today
        </h1>
        <p className="text-white font-niramit text-xl mb-12">
          Your donation helps us continue our mission to serve communities in need
        </p>
        
        {/* Statistics */}
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">50,000+</div>
            <div className="text-white font-niramit text-base">Lives Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">₹25</div>
            <div className="text-white font-niramit text-base">Provides a meal</div>
          </div>
          <div className="text-center">
            <div className="text-white font-niramit text-3xl font-bold">₹500</div>
            <div className="text-white font-niramit text-base">Medical consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Multi-step donation form
const DonationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
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

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const progressWidth = (currentStep / 4) * 100;

  // Step 1: Donation Details
  const DonationDetailsStep = () => (
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
              onClick={() => updateFormData('amount', amount)}
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
            type="number"
            placeholder="Enter custom amount"
            value={formData.customAmount}
            onChange={(e) => updateFormData('customAmount', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
          />
        </div>
      </div>

      <div>
        <h3 className="text-black font-niramit text-lg font-semibold mb-4">Choose Program to Support</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { id: 'general-fund', title: 'General Fund', desc: 'Support all our programs', icon: '❤️' },
            { id: 'healthcare', title: 'Healthcare Services', desc: 'Free medical consultations and medicines', icon: '🏥' },
            { id: 'education', title: 'Education & Skills', desc: 'Skill development and educational support', icon: '🎓' },
            { id: 'community', title: 'Community Support', desc: 'Food security and emergency relief', icon: '👥' },
            { id: 'environment', title: 'Environmental Protection', desc: 'Green initiatives and awareness', icon: '🌱' },
            { id: 'emergency', title: 'Emergency Relief', desc: 'Disaster response and urgent needs', icon: '🛡️' }
          ].map((program) => (
            <button
              key={program.id}
              onClick={() => updateFormData('program', program.id)}
              className={`p-4 border rounded-lg text-left ${
                formData.program === program.id
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 bg-white hover:border-red-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{program.icon}</span>
                <div>
                  <h4 className="font-niramit text-base font-semibold text-black">{program.title}</h4>
                  <p className="font-niramit text-sm text-gray-600">{program.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Step 2: Payment Method
  const PaymentMethodStep = () => (
    <div className="space-y-6">
      <h3 className="text-black font-niramit text-lg font-semibold">Payment Method</h3>
      <div className="space-y-4">
        {[
          { value: 'card', label: 'Payment Method', icon: '💳' },
          { value: 'upi', label: 'UPI Payment', icon: '📱' },
          { value: 'netbanking', label: 'Net Banking', icon: '🏦' }
        ].map((method) => (
          <label key={method.value} className="flex items-center gap-3 p-4 border border-gray-300 rounded-md cursor-pointer hover:border-red-300">
            <input
              type="radio"
              name="paymentMethod"
              value={method.value}
              checked={formData.paymentMethod === method.value}
              onChange={(e) => updateFormData('paymentMethod', e.target.value)}
              className="w-5 h-5"
            />
            <span className="text-xl">{method.icon}</span>
            <span className="text-black font-niramit text-sm font-medium">{method.label}</span>
          </label>
        ))}
      </div>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={formData.emailReceipt}
            onChange={(e) => updateFormData('emailReceipt', e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-gray-700 font-niramit text-sm">Email me a donation receipt for tax purposes</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={formData.updates}
            onChange={(e) => updateFormData('updates', e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-gray-700 font-niramit text-sm">Keep me updated about how my donation is making an impact</span>
        </label>
      </div>
    </div>
  );

  // Step 3: Personal Information
  const PersonalInfoStep = () => (
    <div className="space-y-6">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={formData.anonymous}
          onChange={(e) => updateFormData('anonymous', e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-gray-700 font-niramit text-sm">Make this donation anonymous</span>
      </label>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Address</label>
        <textarea
          value={formData.address}
          onChange={(e) => updateFormData('address', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-24"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData('city', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">State</label>
          <input
            type="text"
            value={formData.state}
            onChange={(e) => updateFormData('state', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-niramit text-sm mb-2">PIN Code</label>
          <input
            type="text"
            value={formData.pinCode}
            onChange={(e) => updateFormData('pinCode', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Dedication (Optional)</label>
        <textarea
          placeholder="In memory of.../In honor of..."
          value={formData.dedication}
          onChange={(e) => updateFormData('dedication', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-20"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-niramit text-sm mb-2">Message to Organization (Optional)</label>
        <textarea
          placeholder="Share why you are supporting our cause"
          value={formData.message}
          onChange={(e) => updateFormData('message', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md font-niramit text-sm h-20"
        />
      </div>
    </div>
  );

  // Step 4: Review and Complete
  const ReviewStep = () => {
    const donationAmount = formData.customAmount || formData.amount || '0';
    
    return (
      <div className="space-y-6">
        <h3 className="text-black font-niramit text-xl font-semibold">Review Your Donation</h3>
        
        <div className="bg-blue-50 p-6 rounded-lg space-y-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-black font-niramit text-base font-semibold">Donation Type:</p>
              <p className="text-black font-niramit text-base">One Time</p>
            </div>
            <div>
              <p className="text-black font-niramit text-base font-semibold">Amount:</p>
              <p className="text-black font-niramit text-base">₹{donationAmount}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-black font-niramit text-base font-semibold">Program:</p>
              <p className="text-black font-niramit text-base">General Fund</p>
            </div>
            <div>
              <p className="text-black font-niramit text-base font-semibold">Payment Method:</p>
              <p className="text-black font-niramit text-base">{formData.paymentMethod || 'Not selected'}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            <p className="text-gray-600 font-niramit text-base">Your donation is secure and encrypted</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            <p className="text-gray-600 font-niramit text-base">You will receive a confirmation email after successful payment</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            <p className="text-gray-600 font-niramit text-base">Tax receipts will be sent within 24 hours</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
            <p className="text-gray-600 font-niramit text-base">100% of your donation goes directly to the selected program</p>
          </div>
        </div>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) => updateFormData('terms', e.target.checked)}
            className="w-5 h-5 mt-1"
          />
          <p className="text-black font-niramit text-base">
            I agree to the <a href="#" className="text-blue-600 underline">Terms and conditions</a> and <a href="#" className="text-blue-600 underline">Privacy Policy</a>
          </p>
        </label>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DonationDetailsStep />;
      case 2:
        return <PaymentMethodStep />;
      case 3:
        return <PersonalInfoStep />;
      case 4:
        return <ReviewStep />;
      default:
        return <DonationDetailsStep />;
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
            onClick={() => alert('Donation completed! Thank you for your contribution.')}
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

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <p className="font-niramit text-base text-gray-300 mb-6">
              Transforming lives through comprehensive healthcare, education, and community support services since 2010.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-niramit text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About Us', 'Our Programs', 'Volunteer', 'Donate', 'Home', 'Contact'].map((link) => (
                <a key={link} href="#" className="block text-gray-300 font-niramit text-base hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-niramit text-lg font-semibold mb-4">Our Programs</h3>
            <div className="space-y-2">
              {[
                'Healthcare Services',
                'Education & Skills', 
                'Community Support',
                'Arts & Culture',
                'Environmental Protection',
                'Specialized Care'
              ].map((program) => (
                <a key={program} href="#" className="block text-gray-300 font-niramit text-base hover:text-white">
                  {program}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-niramit text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 font-niramit text-base">123 Community Street</p>
                <p className="text-gray-300 font-niramit text-base">Hope City, HC 12345</p>
              </div>
              <p className="text-gray-300 font-niramit text-base">+1 (555) 123-4567</p>
              <p className="text-gray-300 font-niramit text-base">info@ngocare.org</p>
              
              <div className="pt-4">
                <h4 className="font-niramit text-base font-semibold text-white mb-2">Emergency Hotline</h4>
                <p className="text-red-400 font-niramit text-lg font-bold">+1 (555) 911-HELP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-niramit text-sm">
            © 2024 NGO Care. All rights reserved. | Tax ID: 12-3456789
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 font-niramit text-sm hover:text-white">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main DonateNow component
const DonateNow = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
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

      {/* <Footer /> */}
    </div>
  );
};

export default DonateNow;
