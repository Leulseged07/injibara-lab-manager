
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Computer, Cpu, Monitor, Mouse, Keyboard, HardDrive, Printer } from "lucide-react";

const equipmentItems = [
  {
    id: 1,
    name: "Dell OptiPlex 7090",
    type: "Desktop Computer",
    location: "CS Lab",
    status: "Active",
    quantity: 25,
    lastMaintenance: "2023-12-15",
    icon: Computer
  },
  {
    id: 2,
    name: "HP EliteBook 850 G8",
    type: "Laptop",
    location: "Engineering Lab",
    status: "Active",
    quantity: 15,
    lastMaintenance: "2024-01-20",
    icon: Computer
  },
  {
    id: 3,
    name: "Intel Core i7-11700",
    type: "Processor",
    location: "CS Lab",
    status: "Active",
    quantity: 30,
    lastMaintenance: "2023-11-05",
    icon: Cpu
  },
  {
    id: 4,
    name: "Dell P2422H",
    type: "Monitor",
    location: "Networking Lab",
    status: "Maintenance Required",
    quantity: 20,
    lastMaintenance: "2023-09-10",
    icon: Monitor
  },
  {
    id: 5,
    name: "Logitech MX Master 3",
    type: "Mouse",
    location: "Language Lab",
    status: "Active",
    quantity: 40,
    lastMaintenance: "2024-02-01",
    icon: Mouse
  },
  {
    id: 6,
    name: "Microsoft Ergonomic Keyboard",
    type: "Keyboard",
    location: "CS Lab",
    status: "Active",
    quantity: 40,
    lastMaintenance: "2024-02-01",
    icon: Keyboard
  },
  {
    id: 7,
    name: "Western Digital 2TB HDD",
    type: "Storage",
    location: "Engineering Lab",
    status: "Low Stock",
    quantity: 5,
    lastMaintenance: "2023-12-05",
    icon: HardDrive
  },
  {
    id: 8,
    name: "HP LaserJet Pro M404dn",
    type: "Printer",
    location: "All Labs",
    status: "Active",
    quantity: 8,
    lastMaintenance: "2024-01-15",
    icon: Printer
  }
];

const EquipmentInventory = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Maintenance Required":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="equipment" className="py-16">
      <div className="university-container">
        <div className="text-center mb-12">
          <h2 className="university-heading mb-4">Equipment Inventory</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            View and manage all equipment across our computer laboratories. Our inventory system
            ensures that all resources are properly maintained and available when needed.
          </p>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm mb-8">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-university-blue text-white">
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Equipment</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead>Last Maintenance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipmentItems.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <TableRow key={item.id} className="hover:bg-muted/50">
                      <TableCell className="text-center">
                        <ItemIcon className="h-5 w-5 text-university-blue mx-auto" />
                      </TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.type}</TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={getStatusColor(item.status)}
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell>{item.lastMaintenance}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button className="university-button-primary">
            Generate Full Inventory Report
          </Button>
          <Button variant="outline" className="border-university-blue text-university-blue hover:bg-university-blue hover:text-white">
            Request Maintenance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentInventory;
