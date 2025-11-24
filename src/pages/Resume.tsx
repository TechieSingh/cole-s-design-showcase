import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const handleDownload = () => {
    // Create a printable version or trigger PDF download
    window.print();
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Button variant="outline" onClick={() => window.history.back()}>
            ← Back
          </Button>
          <Button onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <Card className="p-8 md:p-12 print:shadow-none print:border-none">
          {/* Header */}
          <div className="text-center mb-8 border-b pb-6">
            <h1 className="text-4xl font-bold mb-4">ADITYA RANJAN SINGH</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <a href="mailto:singh.adityara@northeastern.edu" className="flex items-center gap-1 hover:text-accent">
                <Mail className="w-4 h-4" />
                singh.adityara@northeastern.edu
              </a>
              <span>⋄</span>
              <a href="https://linkedin.com/in/techiesingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent">
                <Linkedin className="w-4 h-4" />
                linkedin.com/techiesingh
              </a>
              <span>⋄</span>
              <a href="https://github.com/techiesingh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent">
                <Github className="w-4 h-4" />
                github.com/techiesingh
              </a>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground mt-2">
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (857) 891-9850
              </span>
              <span>⋄</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Boston, MA
              </span>
            </div>
          </div>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-lg">Master in Computer Information Systems</h3>
                    <p className="text-muted-foreground">Northeastern University</p>
                  </div>
                  <Badge variant="secondary">Dec 2025</Badge>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-lg">Bachelor in Computer Science and Engineering</h3>
                    <p className="text-muted-foreground">Siddaganga Institute of Technology</p>
                  </div>
                  <Badge variant="secondary">Aug 2022</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">TECHNICAL SKILLS</h2>
            <div className="space-y-3">
              <div>
                <span className="font-semibold">Languages: </span>
                <span className="text-muted-foreground">Python, Java, C#, JavaScript</span>
              </div>
              <div>
                <span className="font-semibold">Frameworks: </span>
                <span className="text-muted-foreground">Scikit-learn, PyTorch, React, Node.js, Express.js, ASP.NET Core, Spring Boot</span>
              </div>
              <div>
                <span className="font-semibold">AI/ML & LLMs: </span>
                <span className="text-muted-foreground">OpenAI GPT, prompt engineering, NLP, real-time LLM deployment</span>
              </div>
              <div>
                <span className="font-semibold">Cloud & DevOps: </span>
                <span className="text-muted-foreground">AWS, Docker, Kubernetes, Terraform, Git, Azure DevOps, Linux</span>
              </div>
              <div>
                <span className="font-semibold">Databases: </span>
                <span className="text-muted-foreground">MySQL, PostgreSQL, MongoDB, SQLite, Firebase</span>
              </div>
              <div>
                <span className="font-semibold">Tools: </span>
                <span className="text-muted-foreground">Twilio SIP, LiveKit, REST APIs, OAuth 2.0, JWT</span>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b pb-2">WORK EXPERIENCE</h2>
            <div className="space-y-6">
              {/* AI Engineer Intern - Rakuten */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">AI Engineer Intern</h3>
                    <p className="text-muted-foreground">Rakuten</p>
                  </div>
                  <Badge variant="secondary">Jun 2025 - Present</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Built and deployed an AI-powered IVR at Rakuten Broadband that handles cancellation, troubleshooting and payment requests via natural dialogue, reaching 90%+ intent accuracy and completing calls over Twilio SIP</li>
                  <li>Integrated Twilio SIP, OpenAI GPT, and SMS automation to validate 6-digit PINs and send tailored responses, achieving 95% PIN success and reducing agent hand-offs via DTMF self-serve flows in Rakuten AI support</li>
                  <li>Cut P95 latency 22% (3.6 s→2.78 s) using 16 kHz mono, browser AEC, and LiveKit + Krisp cloud noise suppression</li>
                  <li>Kept 97%+ coverage across links by tuning audio presets and moving DSP to balance bandwidth and device CPU</li>
                </ul>
              </div>

              {/* AI Engineer Co-op - Mass Eye and Ear */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">AI Engineer Co-op</h3>
                    <p className="text-muted-foreground">Mass Eye and Ear (Harvard Medical School)</p>
                  </div>
                  <Badge variant="secondary">Jan 2025 - Jun 2025</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Built open-vocab assistive vision on AR glasses; Kinesis streams video to SageMaker CLIP-YOLO-World, Transcribe parses speech, Polly emits spatial beeps—guiding blind users to objects within 120 ms with 94% accuracy</li>
                  <li>Engineered EyeTurn Cloud: imgs to S3; Step Functions invoke GPU Lambda for face detect, UNet/SAM seg + gaze math, store DynamoDB; API Gateway returns angles in 14 s as on-demand ECS cuts idle cost 85%</li>
                  <li>Published ACM paper on assistive vision; blind-user study showed 94% target hits with 120 ms median latency</li>
                  <li>Improved EyeTurn segmentation 28%, demoed live at several medical Summits with 100's of active users now</li>
                </ul>
              </div>

              {/* Software Engineer - Siemens Healthineers */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Software Engineer</h3>
                    <p className="text-muted-foreground">Siemens Healthineers</p>
                  </div>
                  <Badge variant="secondary">Aug 2022 - Dec 2023</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Engineered advanced imaging tools for syngo.via platform using C#, .NET Core, WPF and MEF implementing multi-threaded rendering enable real-time interactive image marking, endoscopic views, cutting refresh time by 70%</li>
                  <li>Architected high-performance image processing algorithms in C# with .NET PLINQ to convert DICOM into structured data formats, reducing processing time by 60%, integrated with Azure Service Bus for real-time data streaming</li>
                  <li>Built License Editor using Angular and ASP.NET, automating license management reducing manual tasks by 85%</li>
                  <li>Led .NET 6 migration, enhancing application response time by 35% with optimized dependency and NUnit testing</li>
                  <li>Implemented ASP.NET Core Identity with OAuth 2.0/JWT, strengthening security and ensuring EU GDPR compliance</li>
                </ul>
              </div>

              {/* Software Engineer Intern - Siemens Healthineers */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Software Engineer Intern</h3>
                    <p className="text-muted-foreground">Siemens Healthineers</p>
                  </div>
                  <Badge variant="secondary">Jan 2022 - Jun 2022</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Created "Clean Code Cop" using .NET Core, Roslyn analyzers to automate code checks, reducing violations by 50%. Added real-time alerts via Azure Communication Services, enhancing developer responsiveness and code quality</li>
                  <li>Built an NLP chatbot with Rasa NLU, Python, and an internally deployed GPT-J LLM to analyze code snippets and developer queries, providing real-time assistance and flagging code issues, reducing support queries by 40%</li>
                  <li>Enhanced tracking by linking with TFS via REST APIs; automated 200+ alerts via Azure Communication Services</li>
                  <li>Optimized CI/CD in Azure DevOps, TFS to automate builds, tests, deployments, cutting deployment time by 60%</li>
                </ul>
              </div>

              {/* Founder - MealMates.co */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Founder</h3>
                    <p className="text-muted-foreground">MealMates.co (Acquired)</p>
                  </div>
                  <Badge variant="secondary">Jan 2023 - Nov 2023</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Established Meal Mates with a team of 11, supplying over 11,000 meals at $1 each through subscription & meal ordering services, deployed AI customer support using LLM-based RAG model, cutting support costs by 50%</li>
                  <li>Applied demand forecasting with AWS SageMaker, TensorFlow, and XGBoost, decreasing food waste by 20%</li>
                  <li>Secured significant milestone by facilitating Thunkies-Tiffin's Acquiring our user-base, increasing user count by 40%</li>
                </ul>
              </div>

              {/* Software Engineer Intern - Maathi Ghar */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-lg">Software Engineer Intern</h3>
                    <p className="text-muted-foreground">Maathi Ghar</p>
                  </div>
                  <Badge variant="secondary">Jun 2021 - Aug 2021</Badge>
                </div>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Improved platform performance by refactoring to a microservices architecture with Spring Boot and Spring Cloud, boosting efficiency. Services on AWS EC2, S3, optimized PostgreSQL databases, reducing load times by 60%</li>
                  <li>Built CMS using Spring MVC, Thymeleaf with OAuth 2.0 & JWT in Spring Security for efficient content management</li>
                </ul>
              </div>
            </div>
          </section>
        </Card>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print\\:hidden {
            display: none;
          }
          .print\\:shadow-none {
            box-shadow: none;
          }
          .print\\:border-none {
            border: none;
          }
          body {
            background: white;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;

