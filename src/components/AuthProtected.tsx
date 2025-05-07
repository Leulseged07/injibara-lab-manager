
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface AuthProtectedProps {
  children: React.ReactNode;
  allowedRoles?: ("admin" | "faculty" | "student")[];
}

const AuthProtected = ({ children, allowedRoles }: AuthProtectedProps) => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      toast.error("Please login to access this page");
      navigate("/login");
      return;
    }
    
    if (!isLoading && isAuthenticated && allowedRoles && user) {
      if (!allowedRoles.includes(user.role)) {
        toast.error("You don't have permission to access this page");
        navigate("/dashboard");
      }
    }
  }, [isAuthenticated, isLoading, navigate, allowedRoles, user]);
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return null;
  }
  
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null;
  }
  
  return <>{children}</>;
};

export default AuthProtected;
