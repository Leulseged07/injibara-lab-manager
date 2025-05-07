
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock authentication - in a real app, this would connect to a backend
    setTimeout(() => {
      // Simple validation
      if (email === "admin@injibara.edu" && password === "admin123") {
        // Store user info in localStorage (would use proper auth tokens in production)
        localStorage.setItem("user", JSON.stringify({ 
          email, 
          name: "Admin User", 
          role: "admin" 
        }));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else if (email === "faculty@injibara.edu" && password === "faculty123") {
        localStorage.setItem("user", JSON.stringify({ 
          email, 
          name: "Faculty User", 
          role: "faculty" 
        }));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else if (email === "student@injibara.edu" && password === "student123") {
        localStorage.setItem("user", JSON.stringify({ 
          email, 
          name: "Student User", 
          role: "student" 
        }));
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Access the Injibara University Computer Laboratory System
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@injibara.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mt-2">Demo accounts:</p>
                <p>Admin: admin@injibara.edu / admin123</p>
                <p>Faculty: faculty@injibara.edu / faculty123</p>
                <p>Student: student@injibara.edu / student123</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
