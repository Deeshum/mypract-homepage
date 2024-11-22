import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isAnnual ? 3199 : 3999,
      features: [
        "Up to 50 clients",
        "Basic document management",
        "Calendar integration",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: isAnnual ? 6499 : 7299,
      features: [
        "Unlimited clients",
        "Advanced document management",
        "Team management",
        "Priority support",
        "Custom workflows"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className={!isAnnual ? "font-semibold" : ""}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-primary" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span className={isAnnual ? "font-semibold" : ""}>
              Annual (Save 20%)
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-6">
                {typeof plan.price === "number" ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold">{plan.price}</span>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;