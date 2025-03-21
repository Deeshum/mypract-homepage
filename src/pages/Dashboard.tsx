
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserProfile from "@/components/UserProfile";

const Dashboard = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/dashboard" className="text-2xl font-bold text-primary">
            MyPract
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {user?.email}
            </span>
            <Button variant="outline" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardCard 
                title="Clients" 
                count="0" 
                link="/clients" 
              />
              <DashboardCard 
                title="Projects" 
                count="0" 
                link="/projects" 
              />
              <DashboardCard 
                title="Invoices" 
                count="0" 
                link="/invoices" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <UserProfile />
          </div>
        </div>
      </main>
    </div>
  );
};

const DashboardCard = ({ 
  title, 
  count, 
  link 
}: { 
  title: string; 
  count: string; 
  link: string;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-3xl font-bold mb-4">{count}</p>
    <Button asChild variant="outline" className="w-full">
      <Link to={link}>View All {title}</Link>
    </Button>
  </div>
);

export default Dashboard;
