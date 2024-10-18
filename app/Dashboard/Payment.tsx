import React, { useState } from 'react';

export default function Payment() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true); // Show confirmation modal
  };

  const confirmSubscription = () => {
    // Store the selected subscription plan (e.g., in localStorage)
    localStorage.setItem('subscriptionPlan', selectedPlan);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkBlue">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Payment Plans</h1>
      <div className="w-full max-w-2xl p-8 rounded-lg bg-gradient-to-b from-black to-darkGray shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Subscription Plans</h2>
        <p className="text-center text-white mb-8">
          Upgrade to access, User Roles and Permissions, Mobile accessibility, integration with AI Tools, and Standard Customer support.
        </p>
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 text-sm font-medium text-white ${isMonthly ? 'bg-[#61DAFB]' : 'bg-transparent'} rounded-l-lg focus:outline-none`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium text-white ${!isMonthly ? 'bg-[#61DAFB]' : 'bg-transparent'} rounded-r-lg focus:outline-none`}
            onClick={() => setIsMonthly(false)}
          >
            Annual
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          {[
            { name: 'Basic', price: 0, current: false },
            { name: 'Standard', price: 12, current: false },
            { name: 'Professional', price: 24, current: false },
          ].map((plan) => (
            <div
              key={plan.name}
              className="p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-[#0F97C2] mb-4">
                ${plan.price}
                <span className="text-lg text-white"> /Per month</span>
              </p>
              <button
                className={`mt-4 px-4 py-2 w-full rounded ${
                  plan.current ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#61DAFB] hover:bg-[#0C7AA3]'
                }`}
                onClick={() => handleSelectPlan(plan.name)} // Trigger modal on click
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-[#61DAFB] text-white rounded-lg hover:bg-[#0C7AA3]">Upgrade Now</button>
        </div>
        <p className="text-center text-white mt-6">100% secure payment method with money-back guarantee.</p>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Confirm Subscription</h3>
            <p>Are you sure you want to choose the {selectedPlan} plan?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={confirmSubscription}>
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
