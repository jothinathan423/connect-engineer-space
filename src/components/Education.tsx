
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in Mechanical Engineering",
    institution: "University of Technology",
    location: "Boston, MA",
    period: "2020 - 2024 (Expected)",
    description: "Specializing in Sustainable Energy Systems with a minor in Computer Science. Current GPA: 3.8/4.0",
    courses: ["Thermodynamics", "Fluid Mechanics", "Mechanical Design", "Control Systems", "Renewable Energy Technology"]
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Science Academy",
    location: "Cambridge, MA",
    period: "2016 - 2020",
    description: "Advanced placement in Mathematics, Physics, and Engineering. Graduated with honors.",
    courses: ["AP Physics", "AP Calculus", "Engineering Fundamentals", "Computer Programming"]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <BookOpen className="text-primary" />
          <h2 className="section-title">Education</h2>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <Card key={item.id} className={`animate-slide-up [animation-delay:${index * 150}ms]`}>
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.degree}</h3>
                      <p className="text-foreground/70 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        {item.institution}
                      </p>
                      <p className="text-foreground/70 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        {item.location}
                      </p>
                    </div>
                    <div className="bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium whitespace-nowrap">
                      {item.period}
                    </div>
                  </div>
                  
                  <p className="mb-4">{item.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, idx) => (
                        <span 
                          key={idx}
                          className="bg-secondary rounded-full px-3 py-1 text-xs"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;
