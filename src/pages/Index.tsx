import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import SkillCard from "@/components/SkillCard";
import { ArrowRight, Mail, Linkedin, Github, Download, Palette, Code, Users, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  const projects = [
    {
      title: "FinTech Banking App",
      role: "Lead Product Designer",
      timeline: "8 months",
      teamSize: "Team of 6",
      impact: "Increased user engagement by 34%",
      tools: ["Figma", "React", "TypeScript", "Framer"],
      problem: "Redesigned mobile banking experience to reduce transaction friction and improve financial clarity for 2M+ users.",
      image: project1,
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      role: "Senior UX Designer",
      timeline: "6 months",
      teamSize: "Team of 8",
      impact: "Boosted conversion rate by 47%",
      tools: ["Sketch", "Vue.js", "A/B Testing", "Analytics"],
      problem: "Streamlined checkout flow and personalized shopping experience, resulting in significant revenue growth.",
      image: project2,
      link: "#",
    },
    {
      title: "Healthcare Patient Portal",
      role: "UX/UI Designer",
      timeline: "10 months",
      teamSize: "Team of 5",
      impact: "Reduced support tickets by 52%",
      tools: ["Adobe XD", "Angular", "User Testing", "Accessibility"],
      problem: "Created intuitive appointment scheduling and health records management system for diverse patient demographics.",
      image: project3,
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote: "Working with them was transformative. Their attention to detail and user-centric approach elevated our product beyond expectations.",
      name: "Sarah Chen",
      role: "VP of Product",
      company: "TechCorp",
    },
    {
      quote: "Exceptional designer who combines creativity with data-driven insights. Delivered a solution that increased our KPIs significantly.",
      name: "Michael Rodriguez",
      role: "CTO",
      company: "FinanceHub",
    },
  ];

  const skills = [
    {
      title: "Design",
      icon: Palette,
      items: ["User Research", "Wireframing & Prototyping", "Visual Design", "Design Systems"],
    },
    {
      title: "Development",
      icon: Code,
      items: ["React & TypeScript", "CSS/Tailwind", "Figma to Code", "Responsive Design"],
    },
    {
      title: "Strategy",
      icon: Briefcase,
      items: ["Product Strategy", "A/B Testing", "Analytics", "Stakeholder Management"],
    },
    {
      title: "Collaboration",
      icon: Users,
      items: ["Cross-functional Teams", "Agile/Scrum", "Design Reviews", "Mentorship"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 animate-fade-in bg-accent/20 text-accent border-accent/30">
            Product Designer • UX Specialist
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-primary-foreground">
            Crafting Digital Experiences
            <br />
            That Drive <span className="text-accent">Impact</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Specializing in FinTech & E-Commerce with a proven track record of increasing conversions and user satisfaction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="group">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
              Download Resume
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90 text-primary-foreground/60" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">Featured Work</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Case studies showcasing design thinking, problem-solving, and measurable business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Competencies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack design capabilities with 5+ years in FinTech and E-Commerce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">Social Proof</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders to deliver exceptional design outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap opacity-60">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by</p>
          <div className="flex gap-8 items-center">
            <div className="text-2xl font-bold text-muted-foreground">TechCorp</div>
            <div className="text-2xl font-bold text-muted-foreground">FinanceHub</div>
            <div className="text-2xl font-bold text-muted-foreground">HealthCare+</div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 text-primary-foreground/90">
            I'm a product designer passionate about creating intuitive digital experiences that solve real problems. 
            With expertise spanning FinTech, E-Commerce, and Healthcare, I combine user research, visual design, and 
            front-end development skills to deliver solutions that drive business growth. My approach is deeply rooted 
            in empathy, data-driven decision making, and continuous iteration. I believe great design is invisible—it 
            just works.
          </p>
          <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
            Read Full Story
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">Available for freelance projects and full-time opportunities</p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:hello@designer.com" className="text-accent hover:underline">
                  hello@designer.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-2">San Francisco, CA</p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover-lift">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="hover-lift">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Professional UX Portfolio. Designed & Developed with passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
