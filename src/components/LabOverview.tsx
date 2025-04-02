
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const labs = [
  {
    id: "cs-lab",
    name: "Computer Science Lab",
    location: "Block A, Room 101",
    computers: 40,
    availability: 85,
    status: "Available",
    courses: ["Programming", "Database", "AI", "Web Development"],
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNFMkU4RjAiLz48cmVjdCB4PSIyODAiIHk9IjEyMCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxNjAiIHJ4PSIxMCIgZmlsbD0iIzFBMzY1RCIvPjxyZWN0IHg9IjMwMCIgeT0iMTQwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgcng9IjUiIGZpbGw9IiM2NEE0RDciLz48cmVjdCB4PSIzMzAiIHk9IjI1MCIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyMCIgcng9IjUiIGZpbGw9IiNGNkFENTUiLz48L3N2Zz4="
  },
  {
    id: "network-lab",
    name: "Networking Lab",
    location: "Block B, Room 205",
    computers: 30,
    availability: 60,
    status: "Available",
    courses: ["Network Architecture", "Cyber Security", "System Administration"],
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNFMkU4RjAiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIyMDAiIHI9IjEwMCIgZmlsbD0iIzFBMzY1RCIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iNTAiIGZpbGw9IiM2NEE0RDciLz48Y2lyY2xlIGN4PSI2MDAiIGN5PSIyMDAiIHI9IjUwIiBmaWxsPSIjNjRBNEQ3Ii8+PGxpbmUgeDE9IjI0NiIgeTE9IjIwMCIgeDI9IjM1NCIgeTI9IjIwMCIgc3Ryb2tlPSIjRjZBRDU1IiBzdHJva2Utd2lkdGg9IjQiLz48bGluZSB4MT0iNDQ2IiB5MT0iMjAwIiB4Mj0iNTU0IiB5Mj0iMjAwIiBzdHJva2U9IiNGNkFENTUiIHN0cm9rZS13aWR0aD0iNCIvPjwvc3ZnPg=="
  },
  {
    id: "engineering-lab",
    name: "Engineering Lab",
    location: "Block C, Room 310",
    computers: 35,
    availability: 70,
    status: "Maintenance",
    courses: ["CAD Design", "Simulation", "Robotics"],
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNFMkU4RjAiLz48cmVjdCB4PSIzMTAiIHk9IjE2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMxQTM2NUQiLz48cmVjdCB4PSIyOTAiIHk9IjE0MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM2NEE0RDciLz48cG9seWdvbiBwb2ludHM9IjM5MCw4MCA0OTAsODAgNDQwLDEzMCIgZmlsbD0iI0Y2QUQ1NSIvPjwvc3ZnPg=="
  },
  {
    id: "language-lab",
    name: "Language Lab",
    location: "Block D, Room 120",
    computers: 25,
    availability: 90,
    status: "Available",
    courses: ["English", "French", "German", "Chinese"],
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgODAwIDQwMCIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNFMkU4RjAiLz48cmVjdCB4PSIyMDAiIHk9IjE1MCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1MCIgZmlsbD0iIzFBMzY1RCIvPjxjaXJjbGUgY3g9IjI1MCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSIyMDAiIHI9IjIwIiBmaWxsPSIjRkZGRkZGIi8+PGNpcmNsZSBjeD0iNDUwIiBjeT0iMjAwIiByPSIyMCIgZmlsbD0iI0ZGRkZGRiIvPjxjaXJjbGUgY3g9IjU1MCIgY3k9IjIwMCIgcj0iMjAiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4="
  }
];

const LabOverview = () => {
  return (
    <section id="labs" className="py-16 bg-university-light">
      <div className="university-container">
        <div className="text-center mb-12">
          <h2 className="university-heading mb-4">Laboratory Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art computer laboratories provide students and faculty with access to
            the latest technology and equipment for research, learning, and innovation.
          </p>
        </div>
        
        <Tabs defaultValue="cs-lab" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {labs.map(lab => (
              <TabsTrigger key={lab.id} value={lab.id} className="text-sm md:text-base">
                {lab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {labs.map(lab => (
            <TabsContent key={lab.id} value={lab.id} className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl text-university-blue">{lab.name}</CardTitle>
                        <CardDescription>{lab.location}</CardDescription>
                      </div>
                      <Badge variant={lab.status === "Available" ? "default" : "destructive"} className="text-xs">
                        {lab.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">Availability</span>
                          <span className="text-sm font-medium">{lab.availability}%</span>
                        </div>
                        <Progress value={lab.availability} className="h-2" />
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <span className="text-sm font-medium">Total Computers: {lab.computers}</span>
                        <span className="text-sm font-medium">Available Computers: {Math.floor(lab.computers * lab.availability / 100)}</span>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Supported Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.courses.map((course, index) => (
                            <Badge key={index} variant="outline" className="bg-white">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Lab Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                      <img 
                        src={lab.image} 
                        alt={`${lab.name} preview`} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" className="text-university-blue border-university-blue hover:bg-university-blue hover:text-white">
                        View Detailed Floor Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LabOverview;
