import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import SkillCard from "@/components/SkillCard";
import { ArrowRight, Mail, Linkedin, Github, Download, Palette, Code, Users, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Index = () => {
  const projects = [
    {
      title: "Healthcare Dashboard Redesign",
      role: "UI/UX Designer & Developer",
      timeline: "Siemens Healthineers",
      teamSize: "2021-2023",
      impact: "Reduced user task time by 45%",
      tools: ["Figma", "React", "TypeScript", "C#", "User Testing"],
      problem: "Redesigned medical imaging interface with focus on accessibility and efficiency. Conducted user research with 50+ healthcare professionals, reducing cognitive load and improving workflow for radiologists.",
      image: project3,
      link: "#",
    },
    {
      title: "AR Smart Glasses Interface",
      role: "UX Designer & Developer",
      timeline: "Harvard Medical School",
      teamSize: "2023-2024",
      impact: "94% usability score in testing",
      tools: ["Figma", "React", "AR Design", "User Research", "PyTorch"],
      problem: "Designed intuitive AR interface for visually impaired users. Created gesture-based navigation system tested with 100+ users. Balanced technical constraints with accessibility requirements.",
      image: project2,
      link: "#",
    },
    {
      title: "AI Customer Support Portal",
      role: "UI/UX Designer",
      timeline: "Rakuten",
      teamSize: "2024",
      impact: "Increased customer satisfaction by 40%",
      tools: ["Figma", "React", "OpenAI Integration", "A/B Testing"],
      problem: "Designed conversational UI for AI-powered customer support system. Created seamless handoff experience between AI and human agents, improving user trust and reducing frustration.",
      image: project1,
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote: "Aditya brings a unique combination of design thinking and technical expertise. His UI designs are not only beautiful but implementable, which accelerates our development cycle significantly.",
      name: "Product Lead",
      role: "Senior Manager",
      company: "Rakuten",
    },
    {
      quote: "Exceptional UX work on the AR glasses interface. Aditya's user research and iterative design process resulted in a highly accessible system that users loved. His technical background helped bridge design and engineering.",
      name: "Research Director",
      role: "Principal Investigator",
      company: "Harvard Medical School",
    },
  ];

  const skills = [
    {
      title: "UI/UX Design",
      icon: Palette,
      items: ["User Research & Testing", "Wireframing & Prototyping", "Figma & Design Systems", "Accessibility (WCAG)"],
    },
    {
      title: "Frontend Development",
      icon: Code,
      items: ["React & TypeScript", "Tailwind CSS & Styling", "Responsive Design", "Framer Motion & Animations"],
    },
    {
      title: "Product Design",
      icon: Briefcase,
      items: ["User Personas & Journeys", "Information Architecture", "A/B Testing & Analytics", "Design-to-Code Workflow"],
    },
    {
      title: "Technical Skills",
      icon: Users,
      items: ["Python & AI Integration", "REST APIs & Backend", "AWS & Cloud Services", "Git & Version Control"],
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
            UI/UX Designer • Developer • Problem Solver
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-primary-foreground">
            Aditya Ranjan Singh
            <br />
            Designing <span className="text-accent">Intuitive</span> Experiences
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            UI/UX Designer with technical expertise in frontend development and AI. Creating user-centered designs backed by code at Northeastern University.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a href="https://github.com/TechieSingh" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/resume">
              <Button variant="outline" size="xl" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                Download Resume
                <Download className="w-5 h-5" />
              </Button>
            </Link>
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
            Design-to-code expertise with strong foundation in user research, frontend development, and technical problem-solving
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
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Experience at</p>
          <div className="flex gap-8 items-center">
            <div className="text-2xl font-bold text-muted-foreground">Rakuten</div>
            <div className="text-2xl font-bold text-muted-foreground">Harvard Medical School</div>
            <div className="text-2xl font-bold text-muted-foreground">Siemens Healthineers</div>
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
            I'm a UI/UX Designer and Developer pursuing my Master's in Computer Information Systems at Northeastern University (graduating Dec 2025). 
            With experience at Rakuten, Harvard Medical School, and Siemens Healthineers, I specialize in creating intuitive, user-centered designs 
            that are technically sound and accessible. My unique advantage is bridging design and development—I don't just design interfaces, 
            I build them with React and understand the technical constraints. From redesigning healthcare dashboards to crafting AR interfaces 
            for accessibility, I combine user research, visual design, and frontend development to create experiences that users love.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Read Full Story
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">Open to UI/UX design roles and product design opportunities</p>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:singh.adityara@northeastern.edu" className="text-accent hover:underline">
                  singh.adityara@northeastern.edu
                </a>
              </div>
              <a 
                href="https://www.techiesingh.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-accent transition-colors inline-block mb-2"
              >
                www.techiesingh.com
              </a>
              <p className="text-sm text-muted-foreground">Boston, MA • Northeastern University</p>
            </div>

            <div className="flex flex-col gap-4 items-center md:items-end">
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/techiesingh" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://github.com/TechieSingh" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
                <a href="mailto:singh.adityara@northeastern.edu">
                  <Button variant="outline" size="icon" className="hover-lift">
                    <Mail className="w-5 h-5" />
                  </Button>
                </a>
              </div>
              <Link to="/resume">
                <Button variant="outline" className="hover-lift">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Aditya Ranjan Singh. UI/UX Designer • Developer • Problem Solver</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
