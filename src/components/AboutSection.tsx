
import { Card, CardContent } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Building, Users, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="university-container">
        <div className="text-center mb-12">
          <h2 className="university-heading mb-4">About Injibara University</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Injibara University is dedicated to providing quality education and 
            research opportunities in an environment that fosters innovation and academic excellence.
          </p>
        </div>

        <Tabs defaultValue="university" className="space-y-8">
          <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full md:w-3/4 mx-auto">
            <TabsTrigger value="university" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>University</span>
            </TabsTrigger>
            <TabsTrigger value="departments" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>Departments</span>
            </TabsTrigger>
            <TabsTrigger value="staff" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Staff</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Achievements</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="university" className="animate-fade-in space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="university-subheading mb-4">Our Story</h3>
                    <p className="text-gray-700 mb-4">
                      Founded in 2005, Injibara University has grown from a small institution to one of 
                      Ethiopia's leading universities. Located in the beautiful city of Injibara in the 
                      Amhara Region, our university has become a center for academic excellence, innovation, 
                      and community development.
                    </p>
                    <p className="text-gray-700">
                      The Computer Laboratory Management System is part of our commitment to providing 
                      state-of-the-art facilities and resources to our students and faculty. By efficiently 
                      managing our computer laboratories, we ensure that all members of our community have 
                      access to the technology they need for their academic and research endeavors.
                    </p>
                  </div>
                  <div>
                    <h3 className="university-subheading mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-4">
                      Injibara University strives to be a center of excellence in education, research, and 
                      community service, producing graduates who are competitive in the global market and 
                      contribute positively to society.
                    </p>
                    <p className="text-gray-700">
                      We are dedicated to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
                      <li>Providing quality education that meets international standards</li>
                      <li>Conducting innovative research that addresses local and global challenges</li>
                      <li>Engaging with and serving our communities through outreach programs</li>
                      <li>Fostering an inclusive environment that celebrates diversity</li>
                      <li>Promoting sustainable development and environmental conservation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h3 className="university-subheading mb-4">Academic Departments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Computer Science and Engineering",
                      description: "Offers programs in Computer Science, Software Engineering, and Information Technology with a focus on both theoretical foundations and practical applications."
                    },
                    {
                      name: "Electrical and Electronics Engineering",
                      description: "Focuses on electrical systems, electronics, telecommunications, and control systems, preparing students for careers in power systems, telecommunications, and automation."
                    },
                    {
                      name: "Mechanical Engineering",
                      description: "Provides education in mechanical systems design, thermodynamics, materials science, and manufacturing technologies."
                    },
                    {
                      name: "Civil Engineering",
                      description: "Offers training in structural engineering, construction management, transportation systems, and environmental engineering."
                    },
                    {
                      name: "Business and Economics",
                      description: "Provides programs in management, accounting, finance, and economics, preparing students for careers in business and public administration."
                    },
                    {
                      name: "Natural and Computational Sciences",
                      description: "Offers programs in mathematics, physics, chemistry, and biology, providing a strong foundation for research and further studies."
                    }
                  ].map((dept, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-university-blue mb-2">{dept.name}</h4>
                      <p className="text-gray-600 text-sm">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h3 className="university-subheading mb-4">Key Laboratory Staff</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Dr. Hailu Abebe",
                      position: "Laboratory Director",
                      department: "Computer Science",
                      email: "hailu.abebe@injibarauniversity.edu.et"
                    },
                    {
                      name: "Mrs. Tigist Bekele",
                      position: "Lab Manager, CS Lab",
                      department: "Computer Science",
                      email: "tigist.bekele@injibarauniversity.edu.et"
                    },
                    {
                      name: "Dr. Solomon Wolde",
                      position: "Lab Manager, Networking Lab",
                      department: "Computer Engineering",
                      email: "solomon.wolde@injibarauniversity.edu.et"
                    },
                    {
                      name: "Mr. Dawit Kebede",
                      position: "Lab Manager, Engineering Lab",
                      department: "Mechanical Engineering",
                      email: "dawit.kebede@injibarauniversity.edu.et"
                    },
                    {
                      name: "Dr. Kidist Ayele",
                      position: "Lab Manager, Language Lab",
                      department: "Languages",
                      email: "kidist.ayele@injibarauniversity.edu.et"
                    },
                    {
                      name: "Mr. Yonas Tadesse",
                      position: "Technical Support Specialist",
                      department: "IT Services",
                      email: "yonas.tadesse@injibarauniversity.edu.et"
                    }
                  ].map((staff, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-university-blue">{staff.name}</h4>
                      <p className="text-university-dark font-medium">{staff.position}</p>
                      <p className="text-gray-600 text-sm">{staff.department}</p>
                      <p className="text-gray-500 text-sm mt-2">{staff.email}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <h3 className="university-subheading mb-4">Recent Achievements</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "National Award for Laboratory Excellence",
                      year: "2023",
                      description: "Injibara University received the national award for laboratory excellence in computer science education, recognizing our commitment to providing state-of-the-art facilities."
                    },
                    {
                      title: "Partnership with Tech Industry Leaders",
                      year: "2023",
                      description: "Established partnerships with leading technology companies to provide students with access to industry-standard software, hardware, and internship opportunities."
                    },
                    {
                      title: "Research Publication Growth",
                      year: "2022",
                      description: "Our faculty and students published over 50 research papers in international journals, with significant contributions from research conducted in our computer laboratories."
                    },
                    {
                      title: "Expansion of Laboratory Facilities",
                      year: "2022",
                      description: "Completed a major expansion of our laboratory facilities, adding two new specialized labs and upgrading existing equipment to meet growing demands."
                    },
                    {
                      title: "Community Outreach Program",
                      year: "2021",
                      description: "Launched a community outreach program providing computer literacy training to over 500 members of the local community."
                    }
                  ].map((achievement, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold text-university-blue">{achievement.title}</h4>
                        <span className="text-sm font-medium bg-university-gold text-university-dark px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AboutSection;
