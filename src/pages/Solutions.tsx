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
  GraduationCap,
  Heart,
  ShoppingCart,
  DollarSign,
  Factory,
  CheckCircle,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Mail
} from 'lucide-react';
import { SEO } from '../components';

export const SolutionsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Industry Software Solutions | Healthcare HIPAA, Finance, Education | Custom Development"
        description="Custom software for healthcare (HIPAA compliant), finance, education, retail. ERP systems, patient management, e-learning platforms, fintech solutions. Proven ROI improvements."
      />
      <SolutionsContent />
    </>
  );
};

const SolutionsContent: React.FC = () => {
  const industrySolutions = [
    {
      icon: GraduationCap,
      title: 'Education Technology Solutions (EdTech)',
      description: 'Stay ahead in the evolving educational landscape with digital solutions designed to enhance learning, administration, and student outcomes.',
      solutions: [
        'Online examination and assessment platforms with real-time analytics',
        'Personalized e-learning apps tailoring content to student needs',
        'LMS (Learning Management System) integration and custom portals',
        'Virtual classrooms and remote learning tools powered by secure cloud infrastructure'
      ],
      benefits: 'Help educational institutions improve engagement, automate grading workflows, and offer scalable digital learning experiences.',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      icon: Heart,
      title: 'Healthcare & Wellness Technology',
      description: 'Modernize healthcare delivery with secure, compliant, and efficient digital tools tailored for providers and patients.',
      solutions: [
        'Telemedicine platforms for remote consultations with HIPAA-compliant features',
        'Patient management systems offering centralized record keeping and scheduling',
        'AI-powered diagnostic tools and predictive analytics for early disease detection',
        'Robust cybersecurity measures ensuring patient data privacy and regulatory compliance'
      ],
      benefits: 'Healthcare organizations can increase patient reach, reduce costs, and enhance care quality.',
      iconBg: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      icon: ShoppingCart,
      title: 'Retail & E-Commerce Solutions',
      description: 'Drive sales growth and enhance customer loyalty with e-commerce platforms and retail technology solutions built for scalability.',
      solutions: [
        'Custom e-commerce websites with advanced catalog, search, and payment integration',
        'Inventory and supply chain management automation',
        'Customer insights and behavioral analytics powered by AI',
        'Omnichannel retail solutions linking online and offline customer journeys'
      ],
      benefits: 'Retailers benefit from improved operational efficiency, higher conversion rates, and personalized marketing capabilities.',
      iconBg: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      icon: DollarSign,
      title: 'Finance & Insurance (FinTech / InsurTech) Technology',
      description: 'Accelerate digital transformation in finance and insurance sectors by implementing innovative technology solutions focused on security and compliance.',
      solutions: [
        'Automated claims processing and underwriting systems',
        'Fraud detection systems utilizing machine learning',
        'Customer portals providing transparency and self-service options',
        'Seamless integration with banking APIs and regulatory reporting tools'
      ],
      benefits: 'These solutions ensure faster services, reduced operational risk, and enhanced customer satisfaction.',
      iconBg: 'bg-chart1/10',
      iconColor: 'text-chart1'
    },
    {
      icon: Factory,
      title: 'Manufacturing & Supply Chain Technology',
      description: 'Optimize your production environment and supply chain with IoT, data analytics, and automation technologies.',
      solutions: [
        'Real-time equipment and inventory monitoring through IoT sensors',
        'Predictive maintenance solutions reducing downtime and saving costs',
        'Warehouse and logistics management software',
        'Robotics process automation (RPA) for streamlined workflows'
      ],
      benefits: 'Manufacturers can increase throughput, improve quality, and respond agilely to market demand.',
      iconBg: 'bg-chart2/10',
      iconColor: 'text-chart2'
    }
  ];

  const whyPartnerWithUs = [
    {
      icon: Target,
      title: 'Custom-Built for Your Unique Needs',
      description: 'We take the time to analyze your challenges and craft solutions that fit perfectly within your business model.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Technology Stack',
      description: 'We leverage modern technologies such as Node.js, React, Python, AI/ML frameworks, cloud infrastructure, and more.'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Delivery',
      description: 'From initial strategy and design to development, deployment, and support, we provide full lifecycle services.'
    },
    {
      icon: Shield,
      title: 'Focus on Security & Compliance',
      description: 'We embed stringent security protocols and compliance best practices in all solutions.'
    },
    {
      icon: Zap,
      title: 'Agile & Transparent Process',
      description: 'Our clients enjoy continuous involvement, rapid iterations, and clear communication.'
    }
  ];

  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      {/* Enhanced Hero Section */}
      <section className="relative text-center space-y-8 py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-chart1/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-accent/20 to-chart1/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart1/10 backdrop-blur-sm rounded-full border border-chart1/20 mb-8">
            <Target className="h-4 w-4 text-chart1 animate-pulse" />
            <span className="text-chart1 text-sm font-medium">Industry Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
            Industry Solutions
          </h1>

          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Transform your business with tailored technology solutions designed for your industry's unique challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From healthcare to finance, education to retail, we deliver specialized software solutions that drive innovation and efficiency across all business sectors.
            </p>
          </div>

          {/* Solution Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-medium">Education</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-sm font-medium">Healthcare</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <ShoppingCart className="h-6 w-6 text-accent" />
              </div>
              <div className="text-sm font-medium">Retail</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-chart1/10 rounded-xl flex items-center justify-center mx-auto">
                <DollarSign className="h-6 w-6 text-chart1" />
              </div>
              <div className="text-sm font-medium">Finance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Industry-Specific Technology Solutions We Offer</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Empowering your business for long-term success and digital transformation across various industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {industrySolutions.map((solution, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 bg-gradient-to-br from-background via-muted/20 to-muted/40 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${solution.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`h-8 w-8 ${solution.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">{solution.title}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">{solution.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 space-y-6">
                <div>
                  <h4 className="font-semibold mb-4 text-foreground text-lg">Our Solutions Include:</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {solution.solutions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-background/80 rounded-lg p-3 border border-gray-200">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-chart1/10 rounded-xl p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Impact:</strong> {solution.benefits}
                  </p>
                </div>
              </CardContent>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="bg-muted/30 rounded-lg p-8 my-16">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Partner with Voilacode Technologies for Your Solutions?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartnerWithUs.map((reason, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="space-y-8 my-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Proven Results Across Industries</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center p-8 bg-gradient-to-b from-primary/5 to-primary/10">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Industries Served</div>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-b from-secondary/5 to-secondary/10">
            <div className="text-3xl font-bold text-secondary mb-2">40%</div>
            <div className="text-sm text-muted-foreground">Avg. Efficiency Improvement</div>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-b from-accent/5 to-accent/10">
            <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Solution Uptime</div>
          </Card>
          
          <Card className="text-center p-8 bg-gradient-to-b from-chart1/5 to-chart1/10">
            <div className="text-3xl font-bold text-chart1 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Compliance Rate</div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Get Started on Tailored Solutions That Drive Results</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to harness technology tailored to your industry's exact requirements? Contact Voilacode Technologies today for a personalized consultation and begin your path toward enhanced productivity, innovation, and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get Personalized Consultation
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="px-8 py-6 text-lg" asChild>
              <Link to="/portfolio">
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;