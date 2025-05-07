
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data for the dashboard
const upcomingBookings = [
  { id: 1, labName: "Computer Science Lab", date: "2025-05-10", time: "10:00 AM - 12:00 PM" },
  { id: 2, labName: "Networking Lab", date: "2025-05-15", time: "02:00 PM - 04:00 PM" },
];

const availableLabs = [
  { id: 1, name: "Computer Science Lab", availability: "Available", computers: 30 },
  { id: 2, name: "Networking Lab", availability: "Limited", computers: 10 },
  { id: 3, name: "Engineering Lab", availability: "Unavailable", computers: 0 },
  { id: 4, name: "Language Lab", availability: "Available", computers: 20 },
];

const recentAnnouncements = [
  { id: 1, title: "Lab Maintenance", date: "2025-05-02", content: "The Computer Science Lab will be under maintenance on May 5th." },
  { id: 2, title: "New Equipment", date: "2025-04-28", content: "New networking equipment has been installed in the Networking Lab." },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<{name?: string, role?: string} | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      toast.error("Please login to access dashboard");
      navigate("/login");
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/");
  };
  
  if (!user) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 university-container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="university-heading">Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="font-medium">Welcome, {user.name}</span>
            <Button variant="outline" onClick={handleLogout}>Logout</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Bookings */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Your Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="p-4 border rounded-md">
                      <div className="font-semibold">{booking.labName}</div>
                      <div className="text-sm text-muted-foreground">
                        Date: {booking.date} • Time: {booking.time}
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive hover:text-destructive-foreground">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  No upcoming bookings
                </div>
              )}
              <div className="mt-4">
                <Button onClick={() => navigate("/bookings/new")}>Book Lab Session</Button>
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              {recentAnnouncements.length > 0 ? (
                <div className="space-y-4">
                  {recentAnnouncements.map((announcement) => (
                    <div key={announcement.id} className="border-b pb-3 last:border-b-0">
                      <h3 className="font-medium">{announcement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{announcement.date}</p>
                      <p className="text-sm">{announcement.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  No recent announcements
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Lab Availability */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Lab Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {availableLabs.map((lab) => {
                  let statusClass = "text-green-600";
                  if (lab.availability === "Limited") statusClass = "text-amber-600";
                  if (lab.availability === "Unavailable") statusClass = "text-red-600";
                  
                  return (
                    <Card key={lab.id} className="overflow-hidden">
                      <CardContent className="p-4">
                        <h3 className="font-medium">{lab.name}</h3>
                        <p className={`text-sm font-medium ${statusClass}`}>
                          {lab.availability}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {lab.computers} computers available
                        </p>
                        <Button 
                          className="mt-3 w-full" 
                          size="sm"
                          variant={lab.availability === "Unavailable" ? "outline" : "default"}
                          disabled={lab.availability === "Unavailable"}
                          onClick={() => navigate(`/bookings/new?lab=${lab.id}`)}
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Admin/Faculty specific sections */}
        {user.role !== "student" && (
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" onClick={() => navigate("/lab-management")}>
                    Lab Management
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/equipment")}>
                    Equipment Inventory
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/users")}>
                    User Management
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
