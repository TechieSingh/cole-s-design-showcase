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
      title: "AI-Powered IVR System",
      role: "AI Engineer Intern",
      timeline: "Rakuten",
      teamSize: "2024",
      impact: "Achieved 90%+ intent accuracy",
      tools: ["OpenAI GPT", "Twilio SIP", "Python", "NLP", "Real-time AI"],
      problem: "Built intelligent IVR system handling support calls with AI automation, reducing agent hand-offs and cutting latency by 22% through advanced DSP integration.",
      image: project1,
      link: "#",
    },
    {
      title: "EyeTurn Cloud & AR Vision",
      role: "AI Engineer Co-op",
      timeline: "Harvard Medical School",
      teamSize: "2023-2024",
      impact: "94% accuracy in object guidance",
      tools: ["PyTorch", "GPU Lambda", "AR", "Computer Vision", "AWS"],
      problem: "Engineered AR-based vision system for smart glasses with face/gaze detection. Published ACM paper and demonstrated to 100+ users in live settings.",
      image: project2,
      link: "#",
    },
    {
      title: "Real-time Medical Imaging",
      role: "Software Engineer",
      timeline: "Siemens Healthineers",
      teamSize: "2021-2023",
      impact: "Reduced rendering time by 70%",
      tools: ["C#", "ASP.NET Core", "Azure", "Real-time Systems", "Medical Imaging"],
      problem: "Architected real-time image marking system for medical imaging platform, dramatically improving performance and user experience for healthcare professionals.",
      image: project3,
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote: "Aditya's AI-powered IVR system transformed our customer support operations. His ability to integrate OpenAI GPT with our existing infrastructure was impressive, achieving over 90% intent accuracy.",
      name: "Engineering Lead",
      role: "Senior Manager",
      company: "Rakuten",
    },
    {
      quote: "Outstanding work on the EyeTurn Cloud project. Aditya's computer vision expertise and GPU optimization skills resulted in a 94% accurate AR system that's now published in ACM.",
      name: "Research Director",
      role: "Principal Investigator",
      company: "Harvard Medical School",
    },
  ];

  const skills = [
    {
      title: "AI & Machine Learning",
      icon: Palette,
      items: ["OpenAI GPT & LLMs", "PyTorch & NLP", "Computer Vision", "Real-time Deployment"],
    },
    {
      title: "Development",
      icon: Code,
      items: ["Python, Java, C#, JavaScript", "React, Node.js, Express.js", "ASP.NET Core, Spring Boot", "REST APIs & OAuth 2.0"],
    },
    {
      title: "Cloud & DevOps",
      icon: Briefcase,
      items: ["AWS & Azure", "Docker & Kubernetes", "Terraform & Git", "Azure DevOps & Linux"],
    },
    {
      title: "Databases & Integration",
      icon: Users,
      items: ["MySQL, PostgreSQL, MongoDB", "Firebase & SQLite", "Twilio SIP & LiveKit", "Real-time Systems"],
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
            AI Engineer • Developer • Problem Solver
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-primary-foreground">
            Aditya Ranjan Singh
            <br />
            Building <span className="text-accent">Intelligent</span> Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            AI Engineer with expertise in LLMs, Computer Vision, and Cloud Infrastructure. Master's in CIS at Northeastern University.
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
            Full-stack AI/ML capabilities with expertise in LLMs, Computer Vision, and Cloud Infrastructure
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
            I'm an AI Engineer and Developer pursuing my Master's in Computer Information Systems at Northeastern University (graduating Dec 2025). 
            With experience at Rakuten, Harvard Medical School, and Siemens Healthineers, I specialize in building intelligent, scalable AI solutions. 
            From achieving 90%+ accuracy in AI-powered IVR systems to engineering AR vision systems with 94% object guidance precision, 
            I combine cutting-edge AI/ML with robust cloud infrastructure. I'm passionate about exploring LLMs, computer vision, and real-time systems 
            that solve complex real-world problems.
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
              <p className="text-muted-foreground mb-4">Open to AI/ML roles and exciting collaboration opportunities</p>
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:singh.adityar@northeastern.edu" className="text-accent hover:underline">
                  singh.adityar@northeastern.edu
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
              <a href="mailto:singh.adityar@northeastern.edu">
                <Button variant="outline" size="icon" className="hover-lift">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Aditya Ranjan Singh. AI Engineer • Developer • Problem Solver</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
