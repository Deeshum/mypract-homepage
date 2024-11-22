import { Play } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            See MyPract in Action
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch how MyPract streamlines your practice management workflow
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto group">
          <div 
            className="relative w-full overflow-hidden rounded-xl shadow-2xl"
            style={{ paddingTop: '56.25%' }}
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-300" />
            <iframe
              src="https://capture.navattic.com/cm3rgw34o001p03l99owbawe2"
              className="absolute top-0 left-0 w-full h-full"
              allow="fullscreen"
              data-navattic-demo-id="cm3rgw34o001p03l99owbawe2"
            />
            <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
              <div className="bg-white/90 p-6 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-sm font-medium text-gray-600">
              Interactive Demo • 5 min walkthrough
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;