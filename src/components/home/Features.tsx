import { 
  Users, FileText, Calendar, ClipboardList, 
  FolderOpen, Users2 
} from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Management",
    description: "Efficiently manage client information, communications, and relationships all in one place."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Engagement Letters & Billing",
    description: "Create and manage engagement letters and handle billing seamlessly."
  },
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: "Project Management",
    description: "Track projects from start to finish with powerful project management tools."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Calendar Integration",
    description: "Keep track of deadlines, meetings, and important dates with integrated calendars."
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Document Management",
    description: "Secure document storage and sharing with advanced organization features."
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Team Management",
    description: "Manage your team, assign tasks, and track progress effectively."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need to Run Your Practice
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;