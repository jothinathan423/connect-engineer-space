
import React from 'react';
import { BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProblemSolving = () => {
  return (
    <section id="problem-solving" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <BarChart2 className="text-primary" />
          <h2 className="section-title">Problem Solving</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-300" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16.5 9.4 7.5 4.21" />
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <circle cx="3.5" cy="5.5" r=".5" />
                  <circle cx="3.5" cy="18.5" r=".5" />
                  <circle cx="12" cy="7.5" r=".5" />
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="18.5" r=".5" />
                  <circle cx="20.5" cy="5.5" r=".5" />
                  <circle cx="20.5" cy="18.5" r=".5" />
                </svg>
                LeetCode Stats
              </CardTitle>
              <CardDescription>Solving algorithmic problems on LeetCode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <div className="text-sm font-medium flex justify-between items-center mb-1">
                    <span>Problems Solved</span>
                    <span className="text-primary">200+</span>
                  </div>
                  <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-300 h-3 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-blue-500">120</div>
                    <div className="text-xs text-muted-foreground">Easy</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-yellow-500">65</div>
                    <div className="text-xs text-muted-foreground">Medium</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-red-500">15</div>
                    <div className="text-xs text-muted-foreground">Hard</div>
                  </div>
                </div>
                
                <div className="text-sm text-center text-foreground/60">
                  <span>Username: </span>
                  <span className="font-mono font-medium">[LeetCode Username]</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all">
            <div className="h-2 bg-gradient-to-r from-green-500 to-green-300" />
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                GeeksforGeeks Stats
              </CardTitle>
              <CardDescription>Solving problems on GeeksforGeeks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative">
                  <div className="text-sm font-medium flex justify-between items-center mb-1">
                    <span>Problems Solved</span>
                    <span className="text-primary">150+</span>
                  </div>
                  <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-green-300 h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-green-500">75</div>
                    <div className="text-xs text-muted-foreground">School</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-yellow-500">55</div>
                    <div className="text-xs text-muted-foreground">Basic</div>
                  </div>
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <div className="text-xl font-semibold text-red-500">20</div>
                    <div className="text-xs text-muted-foreground">Hard</div>
                  </div>
                </div>
                
                <div className="text-sm text-center text-foreground/60">
                  <span>Username: </span>
                  <span className="font-mono font-medium">[GFG Username]</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;
