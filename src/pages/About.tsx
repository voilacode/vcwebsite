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
  FileText,
  Layout,
  Palette,
  Code2,
  Layers,
  Zap,
  Shield,
  Smartphone,
  Target,
  Eye,
  Users,
  Heart,
  Lightbulb,
  CheckCircle,
  Mail
} from 'lucide-react';
import { SEO } from '../components';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Expert Software Development Team | 5+ Years Experience | React, Node.js Specialists"
        description="Meet our experienced software development team in Hyderabad. 50+ successful projects across healthcare, finance, education. Specializing in React, Node.js, Python, AI/ML solutions."
      />
      <div className="space-y-12 py-2 px-2 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Enhanced Hero Section */}
        <section className="relative text-center space-y-8 py-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>

          <div className="relative z-10 px-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8">
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Our Journey & Values</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8">
              Innovation Meets Expertise
            </h1>

            <div className="space-y-6 max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                Founded with a passion for technology and a commitment to excellence, Voilacode Technologies has grown into a trusted partner for businesses seeking custom software solutions that truly make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple mission: to empower organizations through innovative digital products tailored exactly to their unique challenges and aspirations. Over the years, we have combined industry-leading technical expertise with client-focused collaboration to deliver measurable business impact.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver tailored, cutting-edge software solutions that enable businesses to thrive in the digital era, fostering innovation, efficiency, and growth.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-2xl transition-all duration-500 group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the premier technology partner recognized globally for transforming ideas into high-performance, scalable digital experiences leveraging the latest advancements in AI, software development, and design.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced What We Do Section */}
        <section className="relative">
          <div className="text-center my-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-6">
              <Code2 className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Voilacode Technologies, we specialize in custom software development services that span multiple domains and technologies.
            </p>
          </div>

          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-2xl">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Website Development</h3>
                  <p className="text-muted-foreground text-sm">Crafting responsive, SEO-friendly, and feature-rich websites optimized for performance and engagement.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Mobile Application Development</h3>
                  <p className="text-muted-foreground text-sm">Building intuitive native and cross-platform apps to reach your audience anytime, anywhere.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Desktop Software Solutions</h3>
                  <p className="text-muted-foreground text-sm">Designing robust and scalable applications for Windows, macOS, and Linux environments.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-chart1" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI & Machine Learning</h3>
                  <p className="text-muted-foreground text-sm">Creating intelligent automation, predictive analytics, natural language processing, and more.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="h-6 w-6 text-chart2" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground text-sm">Delivering user-centered designs that drive adoption, satisfaction, and brand loyalty.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-chart3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-chart3" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consulting & Support</h3>
                  <p className="text-muted-foreground text-sm">Offering expert guidance, system audits, maintenance, and continuous improvement.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </section>

        {/* Enhanced Core Values */}
        <section className="relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart1/10 backdrop-blur-sm rounded-full border border-chart1/20 mb-6">
              <Heart className="h-4 w-4 text-chart1 animate-pulse" />
              <span className="text-chart1 text-sm font-medium">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-chart1 via-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision and interaction at Voilacode Technologies.
            </p>
          </div>

          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-2xl">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Your goals and success drive every decision we make.',
                iconBg: 'bg-primary/10',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve complex problems.',
                iconBg: 'bg-secondary/10',
              },
              {
                icon: CheckCircle,
                title: 'Quality',
                description: 'We commit to delivering reliable, secure, and performant software.',
                iconBg: 'bg-accent/10',
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'Transparent communication and ethical practices are fundamental to our partnerships.',
                iconBg: 'bg-chart1/10',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'We believe in working closely with clients, fostering trust, and aligned vision.',
                iconBg: 'bg-chart2/10',
              },
            ].map(({ icon: Icon, title, description, iconBg }) => (
              <div key={title} className="flex gap-4">
                <div className={`${iconBg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Meet Our Team */}
        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-chart2/5 to-chart2/10 hover:shadow-2xl transition-all duration-500">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl font-bold">
              <div className="w-12 h-12 bg-chart2/10 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-chart2" />
              </div>
              Meet Our Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our strength lies in our diverse and talented team of software engineers, data scientists, designers, and strategists. Together, we combine technical know-how with creative thinking to create technology solutions that transform businesses and delight users.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl font-semibold">
              <CheckCircle className="h-6 w-6 text-primary" />
              Why Choose Voilacode Technologies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Proven expertise working across industries like healthcare, finance, education, retail, and more</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Agile methodologies ensuring fast delivery, flexibility, and continuous feedback</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Deep commitment to security best practices and compliance standards</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Extensive portfolio of successful projects and satisfied clients</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Passionate about pushing the boundaries of technology for business advantage</p>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Contact Call to Action */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl font-semibold">
              <Mail className="h-6 w-6 text-primary" />
              Ready to Innovate with Voilacode?
            </CardTitle>
            <CardDescription className="text-md text-muted-foreground">
              Connect with our experts today to explore how we can collaborate to bring your software vision to life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AboutPage;