
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

type ScheduleEvent = {
  id: number;
  title: string;
  start: string;
  end: string;
  lab: string;
  instructor: string;
  course: string;
  type: "class" | "maintenance" | "open" | "reserved";
};

const scheduleEvents: ScheduleEvent[] = [
  {
    id: 1,
    title: "Programming Fundamentals",
    start: "9:00 AM",
    end: "10:30 AM",
    lab: "CS Lab",
    instructor: "Dr. Hailu Abebe",
    course: "CS101",
    type: "class"
  },
  {
    id: 2,
    title: "Database Systems",
    start: "11:00 AM",
    end: "12:30 PM",
    lab: "CS Lab",
    instructor: "Mrs. Tigist Bekele",
    course: "CS305",
    type: "class"
  },
  {
    id: 3,
    title: "Network Security",
    start: "9:00 AM",
    end: "11:00 AM",
    lab: "Networking Lab",
    instructor: "Dr. Solomon Wolde",
    course: "NET402",
    type: "class"
  },
  {
    id: 4,
    title: "Weekly Maintenance",
    start: "1:00 PM",
    end: "3:00 PM",
    lab: "Engineering Lab",
    instructor: "Technical Staff",
    course: "N/A",
    type: "maintenance"
  },
  {
    id: 5,
    title: "Open Lab Hours",
    start: "3:00 PM",
    end: "6:00 PM",
    lab: "CS Lab",
    instructor: "Various Staff",
    course: "Multiple",
    type: "open"
  },
  {
    id: 6,
    title: "Research Group Meeting",
    start: "2:00 PM",
    end: "4:00 PM",
    lab: "Language Lab",
    instructor: "Dr. Kidist Ayele",
    course: "LNG500",
    type: "reserved"
  }
];

const LabSchedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedLab, setSelectedLab] = useState<string>("all");
  
  const filteredEvents = selectedLab === "all" 
    ? scheduleEvents 
    : scheduleEvents.filter(event => event.lab === selectedLab);

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "class":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "maintenance":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "open":
        return "bg-green-100 text-green-800 border-green-200";
      case "reserved":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="schedules" className="py-16 bg-university-light">
      <div className="university-container">
        <div className="text-center mb-12">
          <h2 className="university-heading mb-4">Laboratory Schedule</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            View and manage the schedules for each computer laboratory. Plan classes,
            maintenance, and reserve time for research or special events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl text-university-blue">Select Date & Lab</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
                
                <div className="pt-4">
                  <label className="text-sm font-medium mb-2 block">Filter by Laboratory:</label>
                  <Select value={selectedLab} onValueChange={setSelectedLab}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a laboratory" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Laboratories</SelectItem>
                      <SelectItem value="CS Lab">Computer Science Lab</SelectItem>
                      <SelectItem value="Networking Lab">Networking Lab</SelectItem>
                      <SelectItem value="Engineering Lab">Engineering Lab</SelectItem>
                      <SelectItem value="Language Lab">Language Lab</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl text-university-blue">
                {selectedDate ? selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                }) : "Schedule"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <div key={event.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-lg">{event.title}</h4>
                          <p className="text-gray-500 text-sm">{event.lab} • {event.start} - {event.end}</p>
                        </div>
                        <Badge variant="outline" className={getBadgeColor(event.type)}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                      </div>
                      <div className="mt-2 text-sm">
                        <p><span className="font-medium">Course:</span> {event.course}</p>
                        <p><span className="font-medium">Instructor:</span> {event.instructor}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No schedule events found for the selected filters.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LabSchedule;
