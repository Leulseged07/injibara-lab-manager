
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-university-light">
      <div className="university-container">
        <div className="text-center mb-12">
          <h2 className="university-heading mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our laboratory management system or need assistance?
            Get in touch with our team for support, feedback, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="university-subheading mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is your message about?"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="h-32 w-full"
                />
              </div>

              <Button className="university-button-primary w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="university-subheading mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-university-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Location</h4>
                    <p className="text-gray-600">
                      Injibara University<br />
                      Injibara City<br />
                      Amhara Region<br />
                      Ethiopia
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-university-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Phone</h4>
                    <p className="text-gray-600">
                      Main Office: +251 58 777 8889<br />
                      Lab Management: +251 58 777 8890<br />
                      Technical Support: +251 58 777 8891
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-university-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email</h4>
                    <p className="text-gray-600">
                      General Inquiries:<br />
                      info@injibarauniversity.edu.et<br /><br />
                      Lab Management:<br />
                      labs@injibarauniversity.edu.et
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-university-blue shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday:<br />
                      8:00 AM - 5:00 PM<br /><br />
                      Saturday:<br />
                      9:00 AM - 12:00 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
