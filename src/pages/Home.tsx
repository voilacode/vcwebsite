import React from 'react';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { ArrowRight, Code, Star, Users, Zap } from 'lucide-react';
import { SEO } from '../components';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Custom Software Development Company | React, Node.js, AI/ML | Voilacode Technologies Hyderabad"
        description="Leading software development company in Hyderabad specializing in React web apps, Node.js, mobile development, AI/ML solutions. 50+ projects, free consultation, 24hr response."
      />
      <div className="space-y-24 py-8 px-0">

        {/* About Section */}
        <section className="space-y-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Voilacode Technologies</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Voilacode Technologies is a next-generation software development company committed to delivering customized, reliable, and scalable solutions that fuel business growth and operational excellence. Our team thrives on innovation, quality, and client satisfaction, leveraging proven methodologies and the latest technology stacks to solve real-world challenges.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We pride ourselves on understanding your unique business needs thoroughly, enabling us to craft solutions that are not only functional but also intuitive, secure, and future-proof.
            </p>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="relative py-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent"></div>

          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                <Zap className="h-4 w-4" />
                <span>Comprehensive Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">End-to-End</span> Software Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We deliver comprehensive software solutions across all platforms and technologies, transforming your ideas into powerful digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
              {/* Website Development Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://i.ibb.co/rGyVTwQy/services-webdev.jpg"
                    alt="Web Development Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-sm font-medium text-primary">Web Development</div>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Custom Website Development</CardTitle>
                  <CardDescription className="text-base leading-relaxed">Responsive, SEO-friendly websites tailored for performance and user engagement</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'E-commerce platforms & corporate sites',
                      'Built with React, Next.js, Vue',
                      'API & payment gateway integration',
                      'SEO optimization & analytics'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-primary group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Mobile Development Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://i.ibb.co/fGLmkXyQ/services-mobile.jpg"
                    alt="Mobile App Development Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-sm font-medium text-secondary">Mobile Apps</div>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">Mobile Application Development</CardTitle>
                  <CardDescription className="text-base leading-relaxed">Native iOS and Android applications designed for maximum UX and responsiveness</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'Native & cross-platform solutions',
                      'React Native, Flutter development',
                      'Push notifications & offline support',
                      'Real-time updates & analytics'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Desktop Software Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-chart1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://i.ibb.co/vg1FvPT/services-desktop.jpg"
                    alt="Desktop Software Development Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-accent/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-sm font-medium text-accent">Desktop Software</div>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">Robust Desktop Software</CardTitle>
                  <CardDescription className="text-base leading-relaxed">High-performance desktop applications compatible with Windows, macOS, and Linux</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'Custom tools & enterprise suites',
                      'Cross-platform compatibility',
                      'Cloud services integration',
                      'Focus on stability & security'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-accent group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* AI & ML Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-chart1/5 via-transparent to-chart2/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://i.ibb.co/xKdCBcxT/services-cloudinfra.jpg"
                    alt="Cloud Infrastructure & AI Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chart1/60 via-chart1/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-sm font-medium text-chart1">AI & Cloud Solutions</div>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-chart1 transition-colors">Artificial Intelligence & ML</CardTitle>
                  <CardDescription className="text-base leading-relaxed">Tailored AI implementations for chatbots, predictive analytics, and automation</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'Natural language processing',
                      'Predictive analytics & insights',
                      'Image & speech recognition',
                      'Data-driven decision making'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-chart1 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-chart1 group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* UI/UX Design Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-chart2/5 via-transparent to-chart3/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://i.ibb.co/X0vkLQ5/services-uiux.jpg"
                    alt="UI/UX Design Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chart2/60 via-chart2/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-sm font-medium text-chart2">UI/UX Design</div>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-chart2 transition-colors">UI/UX Design & Consultation</CardTitle>
                  <CardDescription className="text-base leading-relaxed">User-centric design principles creating accessible and visually appealing interfaces</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'Wireframing & prototyping',
                      'Continuous user testing',
                      'Branding & graphic design',
                      'Enhanced customer trust'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-chart2 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-chart2 group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* Security & Compliance Card */}
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted dark:from-background dark:to-muted shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-chart3/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Service Image */}
                <div className="relative h-48 bg-gradient-to-br from-chart3/10 to-primary/10 group-hover:from-chart3/20 group-hover:to-primary/20 transition-all duration-500">
                <img
                    src="https://i.ibb.co/VchVzYCc/services-security.jpg"
                    alt="Security Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="relative z-10 pb-4 pt-6">
                  <CardTitle className="text-xl group-hover:text-chart3 transition-colors">Security & Compliance</CardTitle>
                  <CardDescription className="text-base leading-relaxed">Implementation of data protection protocols and compliance with GDPR, HIPAA, PCI DSS</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="space-y-3">
                    {[
                      'Vulnerability assessments',
                      'Penetration testing',
                      'Secure coding practices',
                      'Regular security audits'
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-chart3 rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 group-hover:bg-chart3 group-hover:text-white transition-all">
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Work With Voilacode Technologies?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Deep Technical Expertise</h3>
              <p className="text-muted-foreground text-sm">Seasoned software engineers, AI specialists, and UX designers with diverse industry experience</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer-First Philosophy</h3>
              <p className="text-muted-foreground text-sm">We immerse ourselves in your business environment to create tailored solutions</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Agile Development</h3>
              <p className="text-muted-foreground text-sm">Iterative planning and transparent communication for quicker, higher quality results</p>
            </Card>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative py-20 bg-gradient-to-r from-muted/20 via-transparent to-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart1/10 border border-chart1/20 rounded-full text-sm font-medium text-chart1">
                <Code className="h-4 w-4" />
                <span>Tech Stack</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Technologies We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Master</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies and frameworks to build robust, scalable solutions that drive business success.
              </p>
            </div>
            {/* Technology Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {[
                { name: "React", icon: "R", color: "from-blue-500 to-cyan-500" },
                { name: "Node.js", icon: "N", color: "from-green-500 to-emerald-500" },
                { name: "Python", icon: "P", color: "from-yellow-500 to-orange-500" },
                { name: "AWS", icon: "A", color: "from-orange-500 to-red-500" },
                { name: "MongoDB", icon: "M", color: "from-green-600 to-green-700" },
                { name: "PostgreSQL", icon: "P", color: "from-blue-600 to-indigo-600" },
                { name: "Docker", icon: "D", color: "from-blue-400 to-blue-600" },
                { name: "Kubernetes", icon: "K", color: "from-purple-500 to-pink-500" },
                { name: "TypeScript", icon: "T", color: "from-blue-500 to-blue-700" },
                { name: "Next.js", icon: "N", color: "from-gray-800 to-black" }
              ].map((tech, index) => (
                <div key={index} className="group flex flex-col items-center space-y-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <span className="text-2xl font-bold text-white">{tech.icon}</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</div>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full mx-auto mt-2 group-hover:from-primary group-hover:to-secondary transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Tech Tags */}
            <section className='pt-8'>
            <div className="flex flex-wrap justify-center gap-3 mt-16 ">
              {[
                "Machine Learning", "AI/ML", "Cloud Computing", "DevOps",
                "Microservices", "API Development", "Mobile Development", "UI/UX Design"
              ].map((tag, index) => (
                <div key={index} className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20 text-sm font-medium text-foreground hover:text-primary hover:border-primary/40 transition-all duration-300">
                  {tag}
                </div>
              ))}
            </div>
            </section>

          </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;