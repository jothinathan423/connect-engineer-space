
import React from 'react';
import { Award, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const achievementsData = [
  {
    title: "First Place - College Hackathon 2023",
    description: "Developed an IoT-based smart irrigation system that reduced water usage by 40% while maintaining optimal plant health.",
    tags: ["IoT", "Embedded Systems", "Sustainability"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    fullDescription: `This project was developed during a 48-hour hackathon focused on sustainable solutions for agriculture.
    
    Key aspects of the project:
    • Arduino-based sensor network for monitoring soil moisture levels
    • Machine learning algorithm for predicting optimal watering schedules
    • Mobile application for remote monitoring and control
    • Solar-powered system for off-grid operation
    
    The project was recognized for its innovative approach to water conservation and practical implementation for small-scale farmers in drought-prone regions. Our team of four engineering students successfully demonstrated a working prototype that outperformed traditional irrigation methods in controlled tests.`
  },
  {
    title: "Second Place - Engineering Innovation Challenge",
    description: "Created a low-cost prosthetic hand using 3D printing technology that costs 70% less than commercial alternatives.",
    tags: ["3D Printing", "Healthcare", "Accessibility"],
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    fullDescription: `This achievement represents six months of research and development on affordable prosthetics for underserved communities.
    
    Our solution included:
    • Custom-designed 3D printable components using biodegradable PLA material
    • Tendon-based finger actuation system controlled by wrist movements
    • Modular design allowing for easy repairs and component replacement
    • Assembly instructions for local technicians with minimal specialized training
    
    The final product cost under $200 to produce compared to commercial alternatives ranging from $5,000-15,000, while maintaining comparable functionality for basic grasping tasks and daily activities.`
  },
  {
    title: "Best Technical Solution - National Engineering Competition",
    description: "Designed an energy-efficient HVAC system that reduced energy consumption by 30% in campus buildings.",
    tags: ["Energy Efficiency", "Mechanical Design", "Sustainability"],
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    fullDescription: `This project was implemented across three campus buildings as part of the university's carbon footprint reduction initiative.
    
    The HVAC system redesign included:
    • Installation of zoned temperature control with occupancy-based regulation
    • Recovery ventilation systems to recapture heating/cooling energy
    • Real-time monitoring and predictive maintenance capabilities
    • Integration with the campus smart building management system
    
    After a full academic year of operation, the system demonstrated 32.7% energy savings compared to the previous installation, exceeding our initial projections and resulting in approximately $45,000 in annual energy cost reduction.`
  },
  {
    title: "Innovation Award - University Research Showcase",
    description: "Developed a novel method for recycling composite materials from decommissioned wind turbine blades.",
    tags: ["Material Science", "Recycling", "Renewable Energy"],
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    fullDescription: `This research project tackled the growing problem of wind turbine blade disposal, as thousands of first-generation wind turbines reach end-of-life annually.
    
    Our innovative process includes:
    • Mechanical separation of fiberglass and epoxy components
    • Chemical treatment to break down epoxy resins into reusable components
    • Reclamation of glass fibers with minimal degradation of mechanical properties
    • Production of new composite materials from the reclaimed components
    
    The process achieves approximately 85% material recovery by weight, significantly reducing landfill waste while creating valuable secondary materials for manufacturing. The research has been published in the Journal of Sustainable Materials and is being evaluated for commercial scale-up by two renewable energy companies.`
  }
];

const AchievementCard = ({ achievement }: { achievement: any }) => {
  return (
    <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors h-full flex flex-col group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={achievement.image} 
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
      </div>
      <CardHeader>
        <CardTitle>{achievement.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4">{achievement.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {achievement.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <Eye className="size-4 mr-2" /> View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px] max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{achievement.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-1 mt-2">
                  {achievement.tags.map((tag: string) => (
                    <Badge key={tag} className="bg-primary/10 text-primary">{tag}</Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="mb-6 rounded-md overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="whitespace-pre-line">{achievement.fullDescription}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-primary" />
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <div 
              key={index}
              className={`animate-fade-in [animation-delay:${index * 100}ms]`}
            >
              <AchievementCard achievement={achievement} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
