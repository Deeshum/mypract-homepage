
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import UserProfile from "@/components/UserProfile";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [counts, setCounts] = useState({
    clients: "0",
    projects: "0",
    invoices: "0"
  });
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        
        // Fetch clients count
        const { count: clientsCount, error: clientsError } = await supabase
          .from("clients")
          .select("*", { count: "exact", head: true });
        
        // Fetch projects count
        const { count: projectsCount, error: projectsError } = await supabase
          .from("projects")
          .select("*", { count: "exact", head: true });
        
        // Fetch invoices count
        const { count: invoicesCount, error: invoicesError } = await supabase
          .from("invoices")
          .select("*", { count: "exact", head: true });

        if (clientsError || projectsError || invoicesError) {
          throw new Error("Error fetching counts");
        }

        setCounts({
          clients: clientsCount !== null ? clientsCount.toString() : "0",
          projects: projectsCount !== null ? projectsCount.toString() : "0",
          invoices: invoicesCount !== null ? invoicesCount.toString() : "0"
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        toast({
          title: "Error fetching data",
          description: "There was a problem loading your dashboard information.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, [toast]);

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
                count={counts.clients} 
                link="/clients" 
                loading={loading}
              />
              <DashboardCard 
                title="Projects" 
                count={counts.projects} 
                link="/projects" 
                loading={loading}
              />
              <DashboardCard 
                title="Invoices" 
                count={counts.invoices} 
                link="/invoices" 
                loading={loading}
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
  link,
  loading = false 
}: { 
  title: string; 
  count: string; 
  link: string;
  loading?: boolean;
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-3xl font-bold mb-4">
      {loading ? (
        <span className="inline-block w-8 h-8 bg-gray-200 animate-pulse rounded"></span>
      ) : (
        count
      )}
    </p>
    <Button asChild variant="outline" className="w-full">
      <Link to={link}>View All {title}</Link>
    </Button>
  </div>
);

export default Dashboard;
