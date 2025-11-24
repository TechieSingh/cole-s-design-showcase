import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TestimonialCard = ({ quote, name, role, company }: TestimonialCardProps) => {
  return (
    <Card className="p-8 hover-lift shadow-card-hover">
      <Quote className="w-10 h-10 text-accent mb-4" />
      <blockquote className="text-lg leading-relaxed mb-6 text-foreground">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">
          {role} at {company}
        </p>
      </div>
    </Card>
  );
};

export default TestimonialCard;
