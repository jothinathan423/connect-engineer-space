
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'participation', label: 'Participation' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Find which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openResume = () => {
    // This would open your actual resume PDF file in a new tab
    // Replace the URL with your actual resume PDF file location
    window.open('/resume.pdf', '_blank');
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-primary">
          <span className="font-mono">Engineering</span> Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                activeSection === item.id 
                  ? "text-primary" 
                  : "text-foreground/70 hover:text-primary"
              )}
            >
              {item.label}
            </button>
          ))}
          
          <Button 
            variant="outline" 
            size="sm" 
            className="ml-2 flex items-center gap-2" 
            onClick={openResume}
          >
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 border-t border-border">
          <div className="container mx-auto py-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-medium transition-colors",
                  activeSection === item.id 
                    ? "text-primary bg-primary/5" 
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="outline" 
              size="sm" 
              className="mx-4 my-2 flex items-center gap-2 w-[calc(100%-2rem)]"
              onClick={openResume}
            >
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
