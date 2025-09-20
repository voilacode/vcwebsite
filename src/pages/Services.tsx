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
import {
  Globe,
  Smartphone,
  Code,
  Cpu,
  Palette,
  Shield,
  CheckCircle,
  ArrowRight,
  Mail
} from 'lucide-react';
import { SEO } from '../components';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Software Development Services | React, Node.js, Python, AI/ML | Hyderabad India"
        description="Professional software development services: React web apps, Node.js backend, mobile development, AI/ML solutions, UI/UX design. Modern tech stack, agile methodology, competitive pricing."
      />
      <ServicesContent />
    </>
  );
};

const ServicesContent: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      description: 'Build engaging, responsive, and SEO-optimized websites that represent your brand and captivate your audience.',
      features: [
        'Responsive and mobile-friendly designs',
        'SEO best practices implementation',
        'Integration with third-party APIs and payment systems',
        'CMS solutions for easy content management'
      ],
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Create powerful and user-friendly mobile applications for iOS and Android platforms.',
      features: [
        'Native and cross-platform development',
        'Real-time notifications and offline capabilities',
        'Integration with backend APIs and cloud services',
        'User-centric UI/UX design'
      ],
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: Code,
      title: 'Desktop Software Solutions',
      description: 'Develop robust and efficient desktop applications tailored to your unique business processes.',
      features: [
        'Cross-platform compatibility',
        'Optimized for speed and reliability',
        'Integration with local hardware and peripheral devices',
        'Security-focused architecture'
      ],
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: Cpu,
      title: 'Artificial Intelligence (AI) & Machine Learning (ML)',
      description: 'Harness the power of AI and ML to automate workflows, derive actionable insights, and deliver smarter customer experiences.',
      features: [
        'Custom AI model development',
        'Natural Language Processing (NLP) applications',
        'Intelligent automation and decision support',
        'Scalable data processing pipelines'
      ],
      iconBg: 'bg-chart1/10',
      iconColor: 'text-chart1'
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Consultation',
      description: 'Design visually compelling and user-focused digital experiences.',
      features: [
        'User journey mapping and persona development',
        'Intuitive and accessible interfaces',
        'Mobile-first and responsive design',
        'Branding and graphic design services'
      ],
      iconBg: 'bg-chart2/10',
      iconColor: 'text-chart2'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Protect your digital assets and ensure compliance with industry standards such as GDPR, HIPAA, and PCI DSS.',
      features: [
        'Vulnerability assessments and penetration testing',
        'Secure coding and encryption techniques',
        'Continuous monitoring and incident response planning',
        'Compliance certifications and audits'
      ],
      iconBg: 'bg-chart3/10',
      iconColor: 'text-chart3'
    }
  ];

  const whyChooseUs = [
    'Expert development teams with cross-industry experience',
    'Agile project management for transparent and flexible delivery',
    'Focus on scalability, maintainability, and future-proof architecture',
    'Dedicated post-launch support and iterative improvements',
    'Strong emphasis on user experience and security'
  ];

  return (
    <div className="space-y-12 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      {/* Enhanced Hero Section */}
      <section className="relative text-center space-y-8 py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-chart1/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-accent/20 to-chart1/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 backdrop-blur-sm rounded-full border border-secondary/20 mb-8">
            <Code className="h-4 w-4 text-secondary animate-pulse" />
            <span className="text-secondary text-sm font-medium">Professional Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
            Our Services
          </h1>

          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Custom software solutions designed to empower your business and accelerate digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From web development to AI innovation, we deliver comprehensive technology solutions that drive growth and efficiency across all business sectors.
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Web Development</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Smartphone className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-sm font-medium">Mobile Apps</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Cpu className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">AI Solutions</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart1/10 rounded-xl flex items-center justify-center mx-auto">
                <Palette className="h-6 w-6 text-chart1" />
              </div>
              <div className="text-sm font-medium">UI/UX Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Leveraging the latest technologies and industry best practices, our expert team delivers scalable, secure, and innovative solutions that align perfectly with your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className={`w-16 h-16 ${service.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-muted/30 rounded-lg p-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 bg-background/80 border border-gray-200 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get Started Today</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore how Voilacode Technologies can transform your business with custom software solutions designed for innovation and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us for Free Consultation
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/portfolio">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;