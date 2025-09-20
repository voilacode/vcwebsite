import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@voilajsx/uikit/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@voilajsx/uikit/card';
import { Badge } from '@voilajsx/uikit/badge';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle,
  User,
  Building,
  Phone,
  MapPin,
  Clock,
  AlertCircle
} from 'lucide-react';
import { SEO } from '../components';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Software Development Company | Free Consultation | Hyderabad India"
        description="Contact Voilacode Technologies for React, Node.js, Python, AI/ML development. Custom software, web apps, mobile development. Free consultation, 24hr response, Hyderabad."
      />
      <ContactContent />
    </>
  );
};

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_1vo0x63';
  const EMAILJS_TEMPLATE_ID = 'template_voilacode';
  const EMAILJS_PUBLIC_KEY = 'I5PVhs15odCYqRgew';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        inquiry_type: formData.inquiryType,
        to_email: 'packetcode@gmail.com, founder@voilacode.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'project', label: 'New Project', icon: Building },
    { value: 'consultation', label: 'Free Consultation', icon: CheckCircle },
    { value: 'support', label: 'Technical Support', icon: AlertCircle }
  ];

  if (isSubmitted) {
    return (
      <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-6 py-16">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-700">Message Sent!</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Thank you for reaching out to Voilacode Technologies. We've received your message and will get back to you within 24 hours.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-green-700">
              <strong>What's next?</strong><br />
              Our development team will review your requirements and respond via email with a detailed proposal.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2 py-2 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative text-center space-y-8 py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <div className="relative z-10 px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-8">
            <Mail className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-foreground mb-8">
            Contact Us
          </h1>

          <div className="space-y-6 max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              Ready to transform your business with custom software solutions?
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's discuss your project and bring your vision to life with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="border-0 bg-gradient-to-br from-background via-muted/20 to-muted/40 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Message */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                )}

                {/* Inquiry Type */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">What can we help you with?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {inquiryTypes.map(type => {
                      const Icon = type.icon;
                      return (
                        <label key={type.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="inquiryType"
                            value={type.value}
                            checked={formData.inquiryType === type.value}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-3 border-2 rounded-lg text-center transition-all ${
                            formData.inquiryType === type.value
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-input hover:border-primary/30'
                          }`}>
                            <Icon className="h-5 w-5 mx-auto mb-2" />
                            <div className="text-sm font-medium">{type.label}</div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., E-commerce Website, Mobile App, AI Solution"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Please describe your project requirements, timeline, budget, and any specific features you need..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">founder@voilacode.com</div>
                    <div className="text-sm text-muted-foreground">packetcode@gmail.com</div>
                    <Badge variant="secondary" className="mt-1">24h response</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm text-muted-foreground">+91 7032309797</div>
                    <Badge variant="secondary" className="mt-1">Business hours</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM IST</div>
                    <Badge variant="secondary" className="mt-1">Same day response</Badge>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Global Remote Team</div>
                    <Badge variant="secondary" className="mt-1">Worldwide service</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
              <CardDescription>Quick answers about our services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-sm">How do we start a project?</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Fill out the form and we'll schedule a free consultation to discuss your requirements and provide a detailed proposal.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-sm">What's included in the consultation?</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Project analysis, technology recommendations, timeline estimates, and detailed cost breakdown.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-sm">Do you work with startups?</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Yes! We offer flexible packages for startups including MVP development and growth-focused solutions.
                  </div>
                </div>

                <div>
                  <div className="font-medium text-sm">What's your typical project timeline?</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projects range from 2-3 weeks for simple websites to 6+ months for complex enterprise solutions.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;