
import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-primary" />
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 animate-slide-up">
            <p className="text-lg">
              I'm Alex Mitchell, a passionate Mechanical Engineering student with a keen interest in sustainable technology and renewable energy systems.
            </p>
            <p>
              Throughout my academic journey, I've developed a strong foundation in engineering principles, complemented by hands-on experience through internships and project work. My goal is to contribute to the development of innovative solutions that address real-world challenges, particularly in the realm of energy efficiency and sustainability.
            </p>
            <p>
              Beyond academics, I'm an active participant in engineering competitions, hackathons, and volunteer initiatives that align with my professional interests.
            </p>
            <p>
              I'm currently seeking opportunities to apply my skills and knowledge in a professional setting through internships or entry-level positions in the field of mechanical engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 16V4a2 2 0 0 1 2-2h11"/><path d="M5 14H4a2 2 0 1 0 0 4h1"/><path d="M22 18H11a2 2 0 1 0 0 4h11"/><path d="M15 12V7a2 2 0 0 0-2-2h-1"/><path d="M8 12V7a2 2 0 0 1 2-2h1"/><rect x="8" y="12" width="8" height="8" rx="1"/></svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Problem Solver</h3>
                <p className="text-sm text-foreground/70">Analytical approach to complex engineering challenges</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Innovator</h3>
                <p className="text-sm text-foreground/70">Passionate about creating sustainable solutions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Team Player</h3>
                <p className="text-sm text-foreground/70">Strong collaboration skills in multidisciplinary teams</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>
                </div>
                <h3 className="font-medium text-lg mb-1">Continuous Learner</h3>
                <p className="text-sm text-foreground/70">Always expanding knowledge in emerging technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
