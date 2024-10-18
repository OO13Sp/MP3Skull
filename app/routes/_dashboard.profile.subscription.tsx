import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Define your async function with a delay
const simulateAsyncOperation = async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay
};

export default function DashboardProfilePayment() {
  const [subscriptionPlan, setSubscriptionPlan] = useState('');
  const [showCancelModal, setShowCancelModal] = useState(false); // State for modal visibility

  useEffect(() => {
    // Retrieve the stored subscription plan from localStorage
    const plan = localStorage.getItem('subscriptionPlan');
    if (plan) {
      setSubscriptionPlan(plan);
    }
  }, []);

  const handleCancelSubscription = () => {
    // Update the subscription plan to "No Subscription Selected"
    setSubscriptionPlan('No Subscription Selected');
    localStorage.setItem('subscriptionPlan', 'No Subscription Selected'); // Update in localStorage
    setShowCancelModal(false); // Close the modal
  };

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-white mb-6">Subscription Status</h1>

        {/* Profile Card */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white"> </h3>
            <p className="text-gray-200">Current Subscription:</p>
            {/* Display the subscription plan here */}
            <p className="text-gray-100 font-medium">{subscriptionPlan || 'No Subscription Selected'}</p>
            <button
              className="text-gray-100 hover:underline bold"
              onClick={() => setShowCancelModal(true)} // Show the cancel modal when clicked
            >
              Cancel Anytime
            </button>
          </div>
          <Link to="/pay">
            <button className="text-gray-100 hover:underline">Change Subscription?</button>
          </Link>
        </div>
      </div>

      {/* Cancel Subscription Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Cancel Subscription</h2>
            <p className="mb-4">Are you sure you want to cancel your subscription?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                onClick={async () => {
                  await simulateAsyncOperation(); // Simulate a delay
                  setShowCancelModal(false); // Close modal after delay
                }}
              >
                No, Keep Subscription
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={async () => {
                  await simulateAsyncOperation(); // Simulate a delay
                  handleCancelSubscription(); // Cancel subscription and close modal
                }}
              >
                Yes, Cancel Subscription
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
