import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MyPract has revolutionized how we manage our CA practice. The automated workflows and client management features have increased our efficiency by 40%.",
    author: "Rajesh Sharma",
    title: "Managing Partner, Sharma & Associates, Mumbai"
  },
  {
    quote: "The GST compliance tracking and document organization features have made our practice completely paperless. Best investment for any CA firm.",
    author: "Priya Patel",
    title: "Senior Partner, Patel Tax Consultants, Bangalore"
  },
  {
    quote: "From ITR filing to client communication, MyPract streamlines everything. Our team productivity has improved significantly since we started using it.",
    author: "Amit Verma",
    title: "Founder, Verma & Co. Chartered Accountants, Delhi"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <Quote className="w-12 h-12 opacity-50" />
          </div>
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl mb-6">
              {testimonials[currentIndex].quote}
            </p>
            <div className="space-y-2">
              <p className="font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-primary-foreground/70">
                {testimonials[currentIndex].title}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;