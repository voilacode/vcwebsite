import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@voilajsx/uikit/card';
import { Button } from '@voilajsx/uikit/button';
import { Badge } from '@voilajsx/uikit/badge';
import {
  Globe,
  Server,
  Database,
  Cloud,
  Cpu,
  Smartphone,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Mail
} from 'lucide-react';
import { SEO } from '../components';

export const TechnologiesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Modern Tech Stack Experts | React, Node.js, Python, AI/ML, AWS | Full-Stack Development"
        description="Expert developers in React, Node.js, Python, TensorFlow, AWS, Docker. Modern frameworks for scalable, secure software solutions. Full-stack development capabilities in Hyderabad."
      />
      <TechnologiesContent />
    </>
  );
};

const TechnologiesContent: React.FC = () => {
  const technologyCategories = [
    {
      icon: Globe,
      title: 'Frontend Frameworks & Libraries',
      description: 'Building dynamic, responsive, and scalable user interfaces with modern frameworks',
      technologies: [
        { name: 'React.js', description: 'Building dynamic, responsive, and scalable user interfaces with declarative components' },
        { name: 'Next.js', description: 'Server-side rendering and static site generation for fast, SEO-friendly React apps' },
        { name: 'Vue.js', description: 'Progressive framework for flexible and approachable frontend development' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework enabling fast and consistent UI styling' }
      ],
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Server,
      title: 'Backend Technologies',
      description: 'High-performance, scalable server-side solutions and APIs',
      technologies: [
        { name: 'Node.js', description: 'High-performance, event-driven backend services and APIs for real-time and scalable applications' },
        { name: 'Express.js', description: 'Minimal and flexible Node.js web framework for building RESTful APIs' },
        { name: 'Python & Django', description: 'Rapid development of secure, scalable web applications using Python frameworks' },
        { name: 'GraphQL', description: 'Flexible query language for APIs with efficient data fetching' }
      ],
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      description: 'Robust data storage solutions for modern applications',
      technologies: [
        { name: 'PostgreSQL', description: 'Advanced open-source relational database with strong data integrity and scalability' },
        { name: 'MongoDB', description: 'NoSQL database for flexible, schema-less data storage, ideal for modern applications' },
        { name: 'Redis', description: 'In-memory data structure store used for caching and real-time analytics' },
        { name: 'Amazon S3 & Cloud Storage', description: 'Durable object storage solutions for media assets and backups' }
      ],
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment solutions',
      technologies: [
        { name: 'AWS & Azure', description: 'Scalable cloud infrastructure with extensive services for compute, storage, and AI' },
        { name: 'Docker & Kubernetes', description: 'Containerization and orchestration platforms for consistent deployments and scaling' },
        { name: 'CI/CD Pipelines', description: 'Automated testing and deployment workflows to ensure code quality and fast release cycles' }
      ],
      iconBg: 'bg-chart1/10',
      iconColor: 'text-chart1'
    },
    {
      icon: Cpu,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Cutting-edge AI and ML frameworks for intelligent applications',
      technologies: [
        { name: 'TensorFlow & PyTorch', description: 'Leading machine learning frameworks for AI model building and deployment' },
        { name: 'Natural Language Processing (NLP)', description: 'Tools and libraries enabling human language understanding in apps' },
        { name: 'OpenAI API', description: 'Integrating advanced AI capabilities such as chatbots, text generation, and vision APIs' }
      ],
      iconBg: 'bg-chart2/10',
      iconColor: 'text-chart2'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile application development',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile app development with near-native performance' },
        { name: 'Flutter', description: 'Google\'s open-source UI toolkit for building beautiful, natively compiled applications' },
        { name: 'Swift & Kotlin', description: 'Native iOS and Android development for maximum performance and platform integration' }
      ],
      iconBg: 'bg-chart3/10',
      iconColor: 'text-chart3'
    }
  ];

  const whyOurTechChoicesMatter = [
    {
      icon: TrendingUp,
      title: 'Performance & Scalability',
      description: 'Our modern tech stack ensures your apps remain fast and scalable as your user base grows.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We build secure architectures using best practices, protecting your business and customer data.'
    },
    {
      icon: CheckCircle,
      title: 'Maintainability',
      description: 'Clean, modular codebases simplify ongoing development and future enhancements.'
    },
    {
      icon: Zap,
      title: 'Future-Ready',
      description: 'By leveraging trending technologies, your solutions stay competitive and adaptable to change.'
    }
  ];

  const techStack = [
    'React.js', 'Next.js', 'Vue.js', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'TensorFlow', 'PyTorch', 'React Native', 'Flutter'
  ];

  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      {/* Enhanced Hero Section */}
      <section className="relative text-center space-y-8 py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart2/10 to-chart3/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-chart2/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-chart2/20 to-chart3/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-8">
            <Cpu className="h-4 w-4 text-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">Modern Tech Stack</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
            Technologies
          </h1>

          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Cutting-edge technologies powering robust, scalable, and high-performance solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From modern frameworks to AI/ML platforms, we leverage the latest technologies to build future-ready applications that drive your business forward.
            </p>
          </div>

          {/* Technology Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Frontend</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Server className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-sm font-medium">Backend</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Cloud className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Cloud</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart1/10 rounded-xl flex items-center justify-center mx-auto">
                <Cpu className="h-6 w-6 text-chart1" />
              </div>
              <div className="text-sm font-medium">AI/ML</div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1 bg-background/80 border-primary/20 hover:bg-primary/10 transition-colors duration-200">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Expertise Across Modern Development Technologies</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our technology stack is carefully chosen to ensure speed, security, maintainability, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {technologyCategories.map((category, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-7 w-7 ${category.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{category.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div key={idx} className="bg-background/80 rounded-lg p-3 border border-gray-400/20 hover:bg-muted/20 transition-colors duration-200">
                      <h4 className="font-semibold text-foreground mb-1 text-sm">{tech.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Our Technology Choices Matter */}
      <section className="bg-muted/30 rounded-lg p-8 my-16">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Our Technology Choices Matter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyOurTechChoicesMatter.map((reason, index) => (
              <Card key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="space-y-8 my-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Technology Philosophy</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Security First</h3>
            <p className="text-muted-foreground text-sm">
              We prioritize security at every layer, implementing industry best practices and staying updated with the latest security protocols and compliance requirements.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Performance Optimized</h3>
            <p className="text-muted-foreground text-sm">
              Every technology choice is made with performance in mind, ensuring your applications load fast, respond quickly, and scale efficiently under load.
            </p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Innovation Ready</h3>
            <p className="text-muted-foreground text-sm">
              We stay ahead of technology trends, adopting emerging technologies that provide competitive advantages while maintaining stability and reliability.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Explore More or Talk to Our Experts</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Want to know how our technology expertise can translate to your project's success? Contact Voilacode Technologies for a personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Technical Consultation
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;