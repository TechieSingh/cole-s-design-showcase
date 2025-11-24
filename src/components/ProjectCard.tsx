import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  timeline: string;
  teamSize: string;
  impact: string;
  tools: string[];
  problem: string;
  image: string;
  link?: string;
}

const ProjectCard = ({
  title,
  role,
  timeline,
  teamSize,
  impact,
  tools,
  problem,
  image,
  link,
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover-lift shadow-card-hover group cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {link && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-background/90 backdrop-blur-sm p-2 rounded-full">
              <ExternalLink className="w-5 h-5 text-accent" />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-3">
            <span>{role}</span>
            <span>•</span>
            <span>{timeline}</span>
            <span>•</span>
            <span>{teamSize}</span>
          </div>
        </div>

        <div className="py-4 px-5 bg-accent/10 rounded-lg border-l-4 border-accent">
          <p className="text-lg font-semibold text-accent">{impact}</p>
        </div>

        <p className="text-muted-foreground leading-relaxed">{problem}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="font-normal">
              {tool}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
