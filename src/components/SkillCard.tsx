import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
}

const SkillCard = ({ title, items, icon: Icon }: SkillCardProps) => {
  return (
    <Card className="p-6 hover-lift shadow-card-hover">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-muted-foreground flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillCard;
