import { Play, Clock, Mouse, BarChart } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            See MyPract in Action
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience firsthand how MyPract transforms your practice management workflow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-4 rounded-lg bg-white shadow-md">
              <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Quick Overview</h3>
              <p className="text-sm text-gray-600">5-minute interactive walkthrough</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <Mouse className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Interactive Demo</h3>
              <p className="text-sm text-gray-600">Click through real features</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-md">
              <BarChart className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Real Data</h3>
              <p className="text-sm text-gray-600">See actual workflows</p>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative w-full overflow-hidden rounded-xl shadow-2xl"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              src="https://capture.navattic.com/cm3rgw34o001p03l99owbawe2"
              className="absolute top-0 left-0 w-full h-full"
              allow="fullscreen"
              data-navattic-demo-id="cm3rgw34o001p03l99owbawe2"
            />
          </div>
          
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-sm font-medium text-gray-600">
              Interactive Demo • 5 min walkthrough
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">What You'll See in the Demo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Client Management</h4>
              <p className="text-gray-600">See how easily you can manage client information, communications, and documents</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">Project Tracking</h4>
              <p className="text-gray-600">Experience our intuitive project management and task tracking system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;