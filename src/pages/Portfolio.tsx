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
  ExternalLink,
  Code,
  Users,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Mail
} from 'lucide-react';
import { SEO } from '../components';

export const PortfolioPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Software Development Portfolio | 50+ Projects | React, Node.js Success Stories"
        description="Explore our successful software projects: FresherBot hiring platform, FirstAcademy e-learning, healthcare solutions. React, Node.js expertise with proven ROI improvements."
      />
      <PortfolioContent />
    </>
  );
};

const PortfolioContent: React.FC = () => {
  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      {/* Enhanced Hero Section */}
      <section className="relative text-center space-y-8 py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-chart2/10 to-chart3/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-chart2/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-chart2/20 to-chart3/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8">
            <Target className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Success Stories</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
            Our Portfolio
          </h1>

          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Explore our successful software projects that have transformed businesses and delivered exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From innovative web applications to cutting-edge AI solutions, our portfolio showcases the diversity and quality of our work across multiple industries.
            </p>
          </div>

          {/* Portfolio Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Web Apps</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart1/10 rounded-xl flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-chart1" />
              </div>
              <div className="text-sm font-medium">Enterprise</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart2/10 rounded-xl flex items-center justify-center mx-auto">
                <TrendingUp className="h-6 w-6 text-chart2" />
              </div>
              <div className="text-sm font-medium">AI Solutions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart3/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-chart3" />
              </div>
              <div className="text-sm font-medium">Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <PortfolioSections />
    </div>
  );
};

const PortfolioSections: React.FC = () => {
  const featuredProjects = [
    {
      title: 'FresherBot.com – Advanced Hiring Assessment Tool',
      description: 'We built FresherBot, an industry-leading hiring assessment platform designed specifically for colleges and companies to streamline recruitment processes.',
      details: 'Developed with Node.js and React, FresherBot offers customizable tests, real-time analytics, and an intuitive interface that empowers recruiters and students alike to connect through skill-based evaluations. This tool enhances the hiring efficiency and transforms campus placement drives into smooth, data-driven experiences.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Analytics'],
      icon: Users,
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10'
    },
    {
      title: 'FirstAcademy.in – Abroad Study Preparation Assessment Platform',
      description: 'FirstAcademy.in is a comprehensive test prep platform we developed to help students prepare effectively for studying abroad.',
      details: 'The platform features adaptive assessments, detailed performance insights, and personalized learning paths. Our development focused on delivering a high-performance, user-friendly experience to motivate learners and maximize success rates.',
      technologies: ['React', 'Python', 'AI/ML', 'Analytics'],
      icon: Target,
      iconColor: 'text-secondary',
      iconBg: 'bg-secondary/10'
    },
    {
      title: 'TuitionPoint.qa – Modern Tuition Center Website',
      description: 'For TuitionPoint.qa, we created a responsive, clean, and highly accessible tuition center website using Tailwind CSS.',
      details: 'The site showcases course offerings, faculty expertise, and student testimonials while ensuring optimal performance and SEO best practices. This digital presence helps Tuition Point attract and engage students across Qatar effectively.',
      technologies: ['React', 'Tailwind CSS', 'SEO', 'Responsive Design'],
      icon: Globe,
      iconColor: 'text-accent',
      iconBg: 'bg-accent/10'
    },
    {
      title: 'HealthRevivalHub.com – WordPress Website Optimization',
      description: 'We optimized HealthRevivalHub.com by improving site speed, security, and user experience on their existing WordPress platform.',
      details: 'Our work involved performance tuning, plugin management, SEO enhancements, and responsive design fixes that resulted in faster load times, higher search rankings, and improved visitor retention.',
      technologies: ['WordPress', 'SEO', 'Performance Optimization', 'Security'],
      icon: TrendingUp,
      iconColor: 'text-chart1',
      iconBg: 'bg-chart1/10'
    }
  ];

  const whyClientsChooseUs = [
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Every project is crafted to meet client-specific needs with precision.'
    },
    {
      icon: Code,
      title: 'Tech Expertise',
      description: 'Skilled in modern frontend and backend frameworks, CMSs, and cloud technologies.'
    },
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Focused on delivering engaging and intuitive user experiences.'
    },
    {
      icon: Shield,
      title: 'Collaborative Approach',
      description: 'Transparent communication and agile development ensure smooth project delivery.'
    }
  ];

  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore our successful collaborations that reflect our versatility and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${project.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className={`h-7 w-7 ${project.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.details}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-3 py-1 bg-background/80 border-primary/20 hover:bg-primary/10 transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Our Clients Choose Us */}
      <section className="bg-muted/30 rounded-lg p-8 my-16">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Our Clients Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyClientsChooseUs.map((reason, index) => (
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

      {/* Results & Impact */}
      <section className="space-y-8 my-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Proven Results & Business Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-8 bg-gradient-to-b from-primary/5 to-primary/10">
            <div className="text-4xl font-bold text-primary mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Average Sales Increase</div>
            <div className="text-xs text-muted-foreground mt-1">Through AI-powered insights</div>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-b from-secondary/5 to-secondary/10">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">HIPAA Compliance</div>
            <div className="text-xs text-muted-foreground mt-1">In healthcare applications</div>
          </Card>

          <Card className="text-center p-8 bg-gradient-to-b from-accent/5 to-accent/10">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Successful Projects</div>
            <div className="text-xs text-muted-foreground mt-1">Across multiple industries</div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">View More Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to become our next success story? Let's discuss how we can bring innovation and reliability to your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Start Your Project
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/services">
                View Our Services
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;