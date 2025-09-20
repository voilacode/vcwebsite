import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@voilajsx/uikit/card';
import {
  Shield,
  Eye,
  Lock,
  Database,
  Mail,
  Calendar
} from 'lucide-react';
import { SEO } from '../components';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Data Protection & Security | Voilacode Technologies"
        description="Learn how Voilacode Technologies protects your privacy and personal information. Our comprehensive privacy policy explains data collection, usage, and security measures."
      />
      <PrivacyContent />
    </>
  );
};

const PrivacyContent: React.FC = () => {
  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Voilacode Technologies, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: January 2025</span>
          </div>
        </section>

        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how Voilacode Technologies ("we," "our," or "us") collects, uses, and protects your information when you visit our website or use our services. By using our website and services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Personal Information</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We may collect the following personal information when you contact us or use our services:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• Name and contact information (email, phone number)</li>
                <li>• Company name and business information</li>
                <li>• Project requirements and technical specifications</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Technical Information</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                We automatically collect certain technical information when you visit our website:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                <li>• IP address and browser type</li>
                <li>• Device information and operating system</li>
                <li>• Website usage patterns and analytics data</li>
                <li>• Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>To provide and improve our software development services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>To communicate with you about projects, services, and support</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>To analyze website usage and improve user experience</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>To comply with legal obligations and protect our rights</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>To send relevant updates about our services (with your consent)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Data Protection & Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              We implement industry-standard security measures to protect your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Encryption</h4>
                <p className="text-xs text-muted-foreground">All data transmission is encrypted using SSL/TLS protocols</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Access Control</h4>
                <p className="text-xs text-muted-foreground">Strict access controls limit who can view your information</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Data Minimization</h4>
                <p className="text-xs text-muted-foreground">We only collect and store necessary information</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Regular Audits</h4>
                <p className="text-xs text-muted-foreground">Regular security audits ensure ongoing protection</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sharing Information */}
        <Card>
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• With your explicit consent</li>
              <li>• With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>• When required by law or to protect our legal rights</li>
              <li>• In case of business merger or acquisition (with advance notice)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card>
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Access & Correction</h4>
                <p className="text-xs text-muted-foreground">Request access to or correction of your personal data</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Data Portability</h4>
                <p className="text-xs text-muted-foreground">Request a copy of your data in a portable format</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Deletion</h4>
                <p className="text-xs text-muted-foreground">Request deletion of your personal information</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Opt-out</h4>
                <p className="text-xs text-muted-foreground">Opt-out of marketing communications at any time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted/30 rounded-lg p-4 space-y-2">
              <p className="text-sm"><strong>Email:</strong> founder@voilacode.com</p>
              <p className="text-sm"><strong>Phone:</strong> +91 7032309797</p>
              <p className="text-sm">
                <strong>Address:</strong> Voilacode Technologies<br/>
                2nd Floor, Oyster Uptown, Hitech City<br/>
                Hyderabad - 500081, India
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;