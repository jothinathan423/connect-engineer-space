
import React from 'react';
import { Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const participationData = [
  {
    title: "IEEE Conference on Robotics and Automation",
    date: "March 2023",
    description: "Participated as a student delegate and presented a poster on 'Applications of Machine Learning in Robotic Control Systems'.",
    location: "San Francisco, CA",
    category: "Conference"
  },
  {
    title: "ASME E-Fest Engineering Competition",
    date: "November 2022",
    description: "Competed in the Human Powered Vehicle Challenge as part of a 5-member university team.",
    location: "Boston, MA",
    category: "Competition"
  },
  {
    title: "Workshop on Advanced Manufacturing Techniques",
    date: "August 2022",
    description: "Hands-on training with state-of-the-art CNC machines and additive manufacturing equipment.",
    location: "Chicago, IL",
    category: "Workshop"
  },
  {
    title: "Sustainability in Engineering Design Symposium",
    date: "May 2022",
    description: "Attended sessions on sustainable materials and eco-friendly design methodologies for mechanical systems.",
    location: "Virtual Event",
    category: "Symposium"
  }
];

const Participation = () => {
  return (
    <section id="participation" className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Users className="text-primary" />
          <h2 className="section-title">Participation</h2>
        </div>

        <div className="space-y-6">
          {participationData.map((event, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                <div>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription className="mt-1">{event.date}</CardDescription>
                </div>
                <Badge className="bg-primary/10 hover:bg-primary/20 text-primary border-none">
                  {event.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participation;
