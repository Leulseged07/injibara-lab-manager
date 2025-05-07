
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { 
      name: "Home", 
      path: "/" 
    },
    { 
      name: "Labs",
      path: "#labs",
      dropdown: [
        { name: "Computer Science Lab", path: "#cs-lab" },
        { name: "Networking Lab", path: "#network-lab" },
        { name: "Engineering Lab", path: "#engineering-lab" },
        { name: "Language Lab", path: "#language-lab" },
      ]
    },
    { 
      name: "Equipment", 
      path: "#equipment" 
    },
    { 
      name: "Schedules", 
      path: "#schedules" 
    },
    { 
      name: "About", 
      path: "#about" 
    },
    { 
      name: "Contact", 
      path: "#contact" 
    },
  ];

  return (
    <nav className="bg-university-blue text-white sticky top-0 z-50 shadow-md">
      <div className="university-container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <span className="text-xl md:text-2xl font-bold font-['Playfair_Display']">
                Injibara University
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div 
                    className="flex items-center cursor-pointer hover:text-university-gold transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className="ml-1" />
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="hover:text-university-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown menu */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white text-university-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-university-blue"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost"
                  className="text-white hover:text-university-gold hover:bg-transparent"
                  onClick={() => navigate("/dashboard")}
                >
                  <User className="mr-2" size={18} />
                  {user?.name}
                </Button>
                <Button className="university-button-secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button className="university-button-secondary" onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.dropdown ? (
                  <div>
                    <div 
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-blue-900 transition-colors"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </div>
                    {activeDropdown === item.name && (
                      <div className="bg-blue-800 pl-8">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 hover:bg-blue-700 transition-colors"
                            onClick={toggleMenu}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-2 hover:bg-blue-900 transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {isAuthenticated ? (
              <div className="px-4 py-4 space-y-2">
                <Button 
                  className="w-full flex justify-center items-center"
                  onClick={() => {
                    navigate("/dashboard");
                    toggleMenu();
                  }}
                >
                  <User className="mr-2" size={18} />
                  Dashboard
                </Button>
                <Button className="university-button-secondary w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <div className="px-4 py-4">
                <Button 
                  className="university-button-secondary w-full"
                  onClick={() => {
                    navigate("/login");
                    toggleMenu();
                  }}
                >
                  Login
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
