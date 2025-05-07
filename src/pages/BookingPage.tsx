
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data
const labs = [
  { id: "1", name: "Computer Science Lab", capacity: 30, equipment: "Desktops, Projector" },
  { id: "2", name: "Networking Lab", capacity: 20, equipment: "Switches, Routers, Servers" },
  { id: "3", name: "Engineering Lab", capacity: 15, equipment: "CAD Workstations, 3D Printers" },
  { id: "4", name: "Language Lab", capacity: 25, equipment: "Audio Equipment, Headsets" }
];

const availableTimes = [
  "08:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "01:00 PM - 03:00 PM",
  "03:00 PM - 05:00 PM"
];

const BookingPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedLabId = searchParams.get("lab");
  
  const [labId, setLabId] = useState(selectedLabId || "");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [purpose, setPurpose] = useState("");
  const [participants, setParticipants] = useState("1");
  const [requiresAssistance, setRequiresAssistance] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const selectedLab = labs.find(lab => lab.id === labId);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!labId || !date || !timeSlot || !purpose) {
      toast.error("Please fill all required fields");
      return;
    }
    
    setIsLoading(true);
    
    // Mock booking creation
    setTimeout(() => {
      toast.success("Lab booked successfully!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 university-container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="university-heading">Book a Lab</h1>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Lab Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="lab">Select Lab</Label>
                  <Select value={labId} onValueChange={setLabId} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a lab" />
                    </SelectTrigger>
                    <SelectContent>
                      {labs.map(lab => (
                        <SelectItem key={lab.id} value={lab.id}>
                          {lab.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="timeSlot">Time Slot</Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableTimes.map(time => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="participants">Number of Participants</Label>
                  <Input
                    id="participants"
                    type="number"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    min="1"
                    max={selectedLab?.capacity || "30"}
                    required
                  />
                  {selectedLab && (
                    <p className="text-xs text-muted-foreground">
                      Max capacity: {selectedLab.capacity} people
                    </p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose</Label>
                <Input
                  id="purpose"
                  placeholder="Briefly describe the purpose of your booking"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="assistance"
                  checked={requiresAssistance}
                  onCheckedChange={(checked) => {
                    if (typeof checked === 'boolean') {
                      setRequiresAssistance(checked);
                    }
                  }}
                />
                <Label htmlFor="assistance" className="text-sm font-normal">
                  I require technical assistance during this session
                </Label>
              </div>
              
              {selectedLab && (
                <div className="border rounded-md p-4 bg-muted/50">
                  <h3 className="font-medium mb-2">Lab Information</h3>
                  <p className="text-sm"><strong>Name:</strong> {selectedLab.name}</p>
                  <p className="text-sm"><strong>Capacity:</strong> {selectedLab.capacity} people</p>
                  <p className="text-sm"><strong>Available Equipment:</strong> {selectedLab.equipment}</p>
                </div>
              )}
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Booking..." : "Book Lab"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
