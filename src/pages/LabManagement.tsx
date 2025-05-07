
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Mock data
const initialLabs = [
  { 
    id: "1", 
    name: "Computer Science Lab", 
    location: "Block A, Room 101",
    capacity: 30, 
    equipment: "30 Dell Desktops, 1 Projector, 2 Printers",
    status: "Operational",
    utilization: 65,
    notes: "Regular maintenance scheduled for end of month."
  },
  { 
    id: "2", 
    name: "Networking Lab", 
    location: "Block A, Room 105",
    capacity: 20, 
    equipment: "20 Workstations, 10 Cisco Routers, 15 Switches",
    status: "Operational",
    utilization: 45,
    notes: "Switch #5 needs replacement."
  },
  { 
    id: "3", 
    name: "Engineering Lab", 
    location: "Block B, Room 202",
    capacity: 15, 
    equipment: "15 CAD Workstations, 2 3D Printers, 1 Laser Cutter",
    status: "Under Maintenance",
    utilization: 0,
    notes: "Closed for renovation until June 15, 2025."
  },
  { 
    id: "4", 
    name: "Language Lab", 
    location: "Block C, Room 110",
    capacity: 25, 
    equipment: "25 Workstations with Audio Setup, Headsets",
    status: "Operational",
    utilization: 80,
    notes: "High demand - consider extending hours."
  }
];

const LabManagement = () => {
  const navigate = useNavigate();
  const [labs, setLabs] = useState(initialLabs);
  const [editingLab, setEditingLab] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    // Check authorization
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.error("Please login to access this page");
      navigate("/login");
      return;
    }
    
    const user = JSON.parse(storedUser);
    if (user.role === "student") {
      toast.error("You don't have permission to access this page");
      navigate("/dashboard");
    }
  }, [navigate]);
  
  const handleEditLab = (lab: any) => {
    setEditingLab({...lab});
  };
  
  const handleSaveLab = () => {
    setLabs(labs.map(lab => lab.id === editingLab.id ? editingLab : lab));
    toast.success("Lab information updated successfully");
    setEditingLab(null);
  };
  
  const filteredLabs = labs.filter(lab => 
    lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lab.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getStatusClass = (status: string) => {
    switch(status) {
      case 'Operational':
        return 'bg-green-100 text-green-800';
      case 'Under Maintenance':
        return 'bg-orange-100 text-orange-800';
      case 'Out of Service':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 university-container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="university-heading">Lab Management</h1>
          <Button variant="outline" onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
        
        {editingLab ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Lab Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Lab Name</Label>
                    <Input 
                      id="name" 
                      value={editingLab.name} 
                      onChange={(e) => setEditingLab({...editingLab, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input 
                      id="location" 
                      value={editingLab.location} 
                      onChange={(e) => setEditingLab({...editingLab, location: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacity</Label>
                    <Input 
                      id="capacity" 
                      type="number"
                      value={editingLab.capacity} 
                      onChange={(e) => setEditingLab({...editingLab, capacity: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <select 
                      id="status" 
                      className="w-full p-2 border rounded-md"
                      value={editingLab.status}
                      onChange={(e) => setEditingLab({...editingLab, status: e.target.value})}
                    >
                      <option value="Operational">Operational</option>
                      <option value="Under Maintenance">Under Maintenance</option>
                      <option value="Out of Service">Out of Service</option>
                    </select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="equipment">Equipment</Label>
                    <Textarea
                      id="equipment"
                      rows={3}
                      value={editingLab.equipment}
                      onChange={(e) => setEditingLab({...editingLab, equipment: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      rows={3}
                      value={editingLab.notes}
                      onChange={(e) => setEditingLab({...editingLab, notes: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setEditingLab(null)}>
                    Cancel
                  </Button>
                  <Button type="button" onClick={handleSaveLab}>
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <Input
                className="max-w-md"
                placeholder="Search labs by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button>Add New Lab</Button>
            </div>
            
            {filteredLabs.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">No labs found matching your search.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredLabs.map(lab => (
                  <Card key={lab.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{lab.name}</h3>
                          <p className="text-sm text-muted-foreground">{lab.location}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusClass(lab.status)}`}>
                          {lab.status}
                        </span>
                      </div>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <Label className="text-xs">Capacity</Label>
                          <p className="text-sm">{lab.capacity} people</p>
                        </div>
                        <div>
                          <Label className="text-xs">Equipment</Label>
                          <p className="text-sm">{lab.equipment}</p>
                        </div>
                        <div>
                          <Label className="text-xs">Notes</Label>
                          <p className="text-sm">{lab.notes}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between items-center">
                          <Label className="text-xs">Utilization</Label>
                          <span className="text-xs font-medium">{lab.utilization}%</span>
                        </div>
                        <Progress value={lab.utilization} />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm" onClick={() => handleEditLab(lab)}>
                          Edit Lab
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LabManagement;
