
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white/95 sticky top-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold gradient-text">Neural</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-neural-600 transition duration-200">Services</a>
            <a href="#about" className="text-gray-700 hover:text-neural-600 transition duration-200">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-neural-600 transition duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-neural-600 transition duration-200">Contact</a>
            <Button className="bg-neural-600 hover:bg-neural-700">Get Started</Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={cn(
          "md:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          isMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        )}>
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#services" className="text-gray-700 hover:text-neural-600 transition duration-200 py-2">Services</a>
            <a href="#about" className="text-gray-700 hover:text-neural-600 transition duration-200 py-2">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-neural-600 transition duration-200 py-2">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-neural-600 transition duration-200 py-2">Contact</a>
            <Button className="bg-neural-600 hover:bg-neural-700 w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
