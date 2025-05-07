
import { createContext, useState, useEffect, useContext, ReactNode } from "react";

interface User {
  email: string;
  name: string;
  role: "admin" | "faculty" | "student";
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication logic
    setIsLoading(true);
    
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "admin@injibara.edu" && password === "admin123") {
          const userData = { email, name: "Admin User", role: "admin" as const };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLoading(false);
          resolve(true);
        } else if (email === "faculty@injibara.edu" && password === "faculty123") {
          const userData = { email, name: "Faculty User", role: "faculty" as const };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLoading(false);
          resolve(true);
        } else if (email === "student@injibara.edu" && password === "student123") {
          const userData = { email, name: "Student User", role: "student" as const };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setIsLoading(false);
          resolve(true);
        } else {
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        isLoading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
