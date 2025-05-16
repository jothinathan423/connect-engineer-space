
import React, { useState } from 'react';
import { Folder } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const projectsData = [
  {
    id: 1,
    title: "Solar-Powered Water Purification System",
    category: "Sustainability",
    tags: ["Renewable Energy", "Water Treatment", "Sustainable Design"],
    image: "/placeholder.svg",
    shortDescription: "Designed and developed a portable water purification system powered by solar energy for remote areas.",
    fullDescription: `This project involved designing a compact, portable water purification system that operates entirely on solar energy.
    
    Key features:
    • Utilizes a 50W solar panel to power filtration and UV purification systems
    • Capable of purifying up to 5 gallons of water per hour
    • Includes sediment filtration, activated carbon filtration, and UV purification stages
    • Designed for durability and ease of maintenance in remote environments
    • Successfully tested in field conditions with 99.9% bacterial removal efficiency
    
    The project won first place in the University Engineering Sustainability Competition and is currently being developed further for potential deployment in rural communities.`,
    link: "#"
  },
  {
    id: 2,
    title: "Automated Greenhouse Control System",
    category: "Automation",
    tags: ["IoT", "Embedded Systems", "Agriculture"],
    image: "/placeholder.svg",
    shortDescription: "Created an IoT-based system for monitoring and controlling greenhouse environmental conditions.",
    fullDescription: `This project involved developing a smart control system for optimizing greenhouse conditions using IoT sensors and actuators.
    
    Key features:
    • Arduino-based controller with WiFi connectivity
    • Multiple sensor arrays monitoring temperature, humidity, soil moisture, and light levels
    • Automated control of ventilation, irrigation, and supplemental lighting
    • Mobile application for remote monitoring and manual control
    • Data logging and analysis capabilities for long-term optimization
    
    The system demonstrated a 30% reduction in water usage while improving plant growth rates compared to manual control methods.`,
    link: "#"
  },
  {
    id: 3,
    title: "Lightweight Electric Skateboard",
    category: "Transportation",
    tags: ["Electric Vehicle", "3D Printing", "Composite Materials"],
    image: "/placeholder.svg",
    shortDescription: "Engineered a lightweight, high-performance electric skateboard using composite materials.",
    fullDescription: `This project focused on designing an electric skateboard with an emphasis on weight reduction without compromising structural integrity.
    
    Key features:
    • Carbon fiber composite deck with optimized internal structure
    • Custom-designed motor mounts and battery enclosure using 3D printed components
    • Dual hub motors with regenerative braking capabilities
    • Extended range battery pack with 25-mile range
    • Integrated BMS system with smartphone connectivity for ride data
    
    The final product achieved a 40% weight reduction compared to commercial alternatives while maintaining comparable performance specifications.`,
    link: "#"
  },
  {
    id: 4,
    title: "Wind Turbine Blade Optimization",
    category: "Sustainability",
    tags: ["Renewable Energy", "CFD", "Aerodynamics"],
    image: "/placeholder.svg",
    shortDescription: "Optimized small-scale wind turbine blade design for improved efficiency at low wind speeds.",
    fullDescription: `This research project explored optimizing blade geometries for small-scale wind turbines operating in urban environments with variable, low-speed wind conditions.
    
    Key components:
    • CFD analysis of multiple airfoil designs under various wind conditions
    • Parametric modeling of blade geometry for automated testing
    • Physical prototyping using 3D printing for wind tunnel testing
    • Performance comparison between traditional and optimized designs
    
    The optimized design demonstrated a 22% increase in power generation at wind speeds between 8-15 mph compared to conventional designs.`,
    link: "#"
  },
  {
    id: 5,
    title: "Earthquake-Resistant Building Model",
    category: "Structural",
    tags: ["Structural Analysis", "Seismic Design", "Material Testing"],
    image: "/placeholder.svg",
    shortDescription: "Developed and tested models of earthquake-resistant structural designs for residential buildings.",
    fullDescription: `This academic project focused on designing and testing scale models of residential structures with enhanced earthquake resistance.
    
    Key features:
    • Analysis of various base isolation techniques
    • Computer modeling of structural response to seismic activity
    • Construction of scale models with different damping mechanisms
    • Shake table testing to simulate earthquake conditions
    • Comparative analysis of traditional vs. proposed designs
    
    The research contributed to the development of cost-effective damping solutions that could be implemented in residential construction in seismic zones.`,
    link: "#"
  },
  {
    id: 6,
    title: "Energy-Efficient HVAC Control System",
    category: "Automation",
    tags: ["Energy Efficiency", "Control Systems", "IoT"],
    image: "/placeholder.svg",
    shortDescription: "Designed an intelligent HVAC control system that reduces energy consumption in commercial buildings.",
    fullDescription: `This project involved developing a smart HVAC control system that optimizes energy usage while maintaining comfort levels in commercial spaces.
    
    Key features:
    • Multi-zone temperature and occupancy sensing
    • Machine learning algorithms for usage pattern recognition
    • Predictive control strategies based on weather forecasts and historical data
    • Integration with existing building management systems
    • Real-time energy consumption monitoring and reporting
    
    When implemented in a test environment, the system demonstrated energy savings of up to 25% compared to conventional thermostat-based control.`,
    link: "#"
  }
];

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 mt-auto">
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 2).map((tag: string, idx: number) => (
            <Badge key={idx} variant="outline" className="text-xs">{tag}</Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="text-xs">+{project.tags.length - 2} more</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription>
                <Badge className="mt-2">{project.category}</Badge>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6 rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="whitespace-pre-line">{project.fullDescription}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag: string, idx: number) => (
                    <Badge key={idx} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const categories = ["All", ...Array.from(new Set(projectsData.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Folder className="text-primary" />
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-fade-in [animation-delay:${index * 100}ms]`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
