import React, { useState } from "react";

const plans = [
  {
    name: "3 Days/Week",
    price: "$40/mo",
    description: "Perfect for those starting out or with a busy schedule.",
    features: ["Access 3 days per week", "All gym equipment", "Locker room access"],
  },
  {
    name: "4 Days/Week",
    price: "$50/mo",
    description: "Great for regulars who want more flexibility.",
    features: ["Access 4 days per week", "All gym equipment", "Locker room access", "1 guest pass/month"],
  },
  {
    name: "5 Days/Week",
    price: "$60/mo",
    description: "Best value for fitness enthusiasts!",
    features: ["Access 5 days per week", "All gym equipment", "Locker room access", "2 guest passes/month", "Priority class booking"],
  },
];

export default function MembershipPlans() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null as null | typeof plans[0]);

  const handleJoin = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100" id="membership">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Membership Plans</h2>
        <p className="text-center text-gray-600 mb-10">Choose the plan that fits your lifestyle and goals.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{plan.name}</h3>
              <div className="text-3xl font-bold text-red-600 mb-2">{plan.price}</div>
              <p className="text-gray-500 mb-4 text-center">{plan.description}</p>
              <ul className="mb-6 space-y-2 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto px-6 py-2 bg-red-600 text-white rounded-lg font-semibold shadow hover:bg-red-700 transition-colors hover:scale-105 hover:shadow-2xl"
                onClick={() => handleJoin(plan)}
              >
                Join Now
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative animate-fadeIn border-2 border-red-500/20">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-2xl"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h4 className="text-2xl font-bold mb-2 text-red-600">Thank you for choosing {selectedPlan?.name}!</h4>
              <p className="text-gray-700 mb-4">
                Please show up at our gym to complete the paperwork and activate your membership. We look forward to seeing you!
              </p>
              <div className="flex justify-center">
                <button
                  className="px-5 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 