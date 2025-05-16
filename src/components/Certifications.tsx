
import React from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const certificationsData = [
  {
    id: 1,
    title: "SolidWorks Associate Certification (CSWA)",
    issuer: "Dassault Systèmes",
    issueDate: "June 2022",
    expiryDate: "June 2025",
    credentialId: "SW-2022-7654321",
    skills: ["3D Modeling", "Assembly Design", "Engineering Drawing"]
  },
  {
    id: 2,
    title: "Professional Engineer in Training (EIT)",
    issuer: "National Council of Examiners for Engineering and Surveying (NCEES)",
    issueDate: "May 2022",
    expiryDate: "No Expiration",
    credentialId: "EIT-MA-87654321",
    skills: ["Engineering Fundamentals", "Ethics", "Professional Practice"]
  },
  {
    id: 3,
    title: "ANSYS Mechanical Certification",
    issuer: "ANSYS, Inc.",
    issueDate: "August 2023",
    expiryDate: "August 2026",
    credentialId: "ANS-2023-123456",
    skills: ["FEA", "Structural Analysis", "Thermal Analysis"]
  },
  {
    id: 4,
    title: "Project Management Fundamentals",
    issuer: "Project Management Institute (PMI)",
    issueDate: "January 2023",
    expiryDate: "January 2026",
    credentialId: "PMI-FUND-987654",
    skills: ["Project Planning", "Risk Management", "Team Leadership"]
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <Award className="text-primary" />
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificationsData.map((cert, index) => (
            <Card key={cert.id} className={`animate-slide-up [animation-delay:${index * 150}ms]`}>
              <CardHeader>
                <CardTitle>{cert.title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span>{cert.issuer}</span>
                  <Badge variant="outline">{cert.issueDate}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-foreground/70">Credential ID</p>
                    <p className="font-medium">{cert.credentialId}</p>
                  </div>
                  <div>
                    <p className="text-foreground/70">Expiry Date</p>
                    <p className="font-medium">{cert.expiryDate}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-foreground/70 text-sm mb-2">Skills</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-primary text-sm hover:underline">Verify Certificate</a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
