
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const achievementsData = [
  {
    title: "First Place - College Hackathon 2023",
    description: "Developed an IoT-based smart irrigation system that reduced water usage by 40% while maintaining optimal plant health.",
    tags: ["IoT", "Embedded Systems", "Sustainability"]
  },
  {
    title: "Second Place - Engineering Innovation Challenge",
    description: "Created a low-cost prosthetic hand using 3D printing technology that costs 70% less than commercial alternatives.",
    tags: ["3D Printing", "Healthcare", "Accessibility"]
  },
  {
    title: "Best Technical Solution - National Engineering Competition",
    description: "Designed an energy-efficient HVAC system that reduced energy consumption by 30% in campus buildings.",
    tags: ["Energy Efficiency", "Mechanical Design", "Sustainability"]
  },
  {
    title: "Innovation Award - University Research Showcase",
    description: "Developed a novel method for recycling composite materials from decommissioned wind turbine blades.",
    tags: ["Material Science", "Recycling", "Renewable Energy"]
  }
];

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
            <Card key={index} className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors">
              <div className="h-2 bg-gradient-to-r from-primary to-primary/50" />
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{achievement.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {achievement.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
