
import React from 'react';
import { Code } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

const skillsData = {
  technical: [
    "CAD/CAM Software",
    "Finite Element Analysis",
    "Thermodynamics",
    "Fluid Mechanics",
    "Mechanical Design",
    "MATLAB"
  ],
  software: [
    "SolidWorks",
    "AutoCAD",
    "ANSYS",
    "MATLAB/Simulink",
    "3D Printing",
    "Microsoft Office Suite"
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Time Management",
    "Leadership"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Code className="text-primary" />
          <h2 className="section-title">Skills</h2>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="software">Software Skills</TabsTrigger>
            <TabsTrigger value="soft">Soft Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.technical.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center justify-center text-center hover:bg-primary/5 transition-colors border-primary/20">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="software" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.software.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center justify-center text-center hover:bg-primary/5 transition-colors border-primary/20">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.soft.map((skill, index) => (
                <Card key={index} className="p-4 flex items-center justify-center text-center hover:bg-primary/5 transition-colors border-primary/20">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/><path d="M2 20h20"/><path d="M14 12v.01"/></svg>
            </div>
            <span className="text-sm font-medium">3D Modeling</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 6V2H8"/><path d="m8 11.99-6.89-1.95L2 14.5l6 1.5v5l4 1 .5-.5"/><path d="m19.5 12.99-2.5.62v-2.62l2 1 .5-.5"/><path d="M22 17.5 16.5 19"/><path d="M10 2v4c0 1.1.9 2 2 2h4"/><path d="M17.5 11.5V9"/></svg>
            </div>
            <span className="text-sm font-medium">Prototyping</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <span className="text-sm font-medium">Sustainability</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M12 13a3 3 0 0 0 0-6 3 3 0 0 0-4 2.8"/><path d="M7 17v-1"/><path d="M17 17v-1"/><path d="M12 17v-1"/><path d="m14.8 5.2-1.6 1.6"/><path d="m10.8 5.2 1.6 1.6"/><path d="M7.2 10 6 9"/></svg>
            </div>
            <span className="text-sm font-medium">Automation</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <span className="text-sm font-medium">IoT</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"/><path d="m13 12-3 5h4l-3 5"/></svg>
            </div>
            <span className="text-sm font-medium">Renewable Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
