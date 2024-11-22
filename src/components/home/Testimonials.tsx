import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "MyPract has transformed how we manage our accounting practice. The efficiency gains are remarkable.",
    author: "Sarah Johnson",
    title: "Managing Partner, Johnson & Associates"
  },
  {
    quote: "The client management and document organization features have saved us countless hours.",
    author: "Michael Chen",
    title: "Senior Tax Advisor, Chen Tax Services"
  },
  {
    quote: "Best investment we've made for our practice. The team management features are exceptional.",
    author: "David Smith",
    title: "Founder, Smith Accounting Group"
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