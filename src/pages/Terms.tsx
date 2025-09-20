import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@voilajsx/uikit/card';
import {
  FileText,
  Scale,
  AlertTriangle,
  Shield,
  Mail,
  Calendar
} from 'lucide-react';
import { SEO } from '../components';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Service - Legal Terms & Conditions | Voilacode Technologies"
        description="Read Voilacode Technologies' terms of service, including service agreements, acceptable use policies, intellectual property rights, and legal disclaimers."
      />
      <TermsContent />
    </>
  );
};

const TermsContent: React.FC = () => {
  return (
    <div className="space-y-2 py-2 px-2 md:px-12 max-w-7xl mx-auto">
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of Voilacode Technologies' website and services. Please read them carefully.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last updated: January 2025</span>
          </div>
        </section>

        {/* Introduction */}
        <Card>
          <CardHeader>
            <CardTitle>Agreement to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              By accessing our website at voilacode.com or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </CardContent>
        </Card>

        {/* Services Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Voilacode Technologies provides custom software development services including:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Custom website development and web applications</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Mobile application development for iOS and Android</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Desktop software solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Artificial Intelligence and Machine Learning solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>UI/UX design and consultation services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Security and compliance consulting</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Acceptable Use */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Acceptable Use
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              You agree to use our website and services only for lawful purposes. You must not:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Use our services for any illegal or unauthorized purpose</li>
              <li>• Violate any international, federal, provincial, or state regulations or laws</li>
              <li>• Transmit worms, viruses, or any code of a destructive nature</li>
              <li>• Attempt to gain unauthorized access to our systems or networks</li>
              <li>• Use our services to harass, abuse, insult, harm, defame, or intimidate anyone</li>
              <li>• Submit false or misleading information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Service Terms */}
        <Card>
          <CardHeader>
            <CardTitle>Service Agreement Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Project Scope & Timeline</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All projects begin with a detailed scope definition and timeline agreement. Changes to the agreed scope may result in additional costs and timeline adjustments.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Payment Terms</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Payment terms are specified in individual project contracts. Generally, we require a deposit before project commencement and progress-based payments throughout the development cycle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Intellectual Property</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Upon full payment, clients receive ownership of the custom code developed specifically for their project. We retain rights to general methodologies, frameworks, and pre-existing tools used in development.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Confidentiality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We maintain strict confidentiality of all client information, business processes, and proprietary data shared during the project lifecycle.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Disclaimers & Limitations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-3">Service Availability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While we strive to maintain high service availability, we do not guarantee uninterrupted access to our website or services. Scheduled maintenance and unforeseen circumstances may cause temporary service interruptions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Limitation of Liability</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To the fullest extent permitted by law, Voilacode Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Third-Party Services</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our solutions may integrate with third-party services. We are not responsible for the availability, functionality, or terms of service of these external platforms.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card>
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Either party may terminate service agreements under the following conditions:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• With written notice as specified in the service contract</li>
              <li>• Immediately for breach of terms or non-payment</li>
              <li>• For convenience, subject to contract terms and applicable fees</li>
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed mt-4">
              Upon termination, we will provide deliverables completed up to the termination date, subject to payment of all outstanding fees.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the jurisdiction where Voilacode Technologies operates. Any disputes arising from these terms or our services shall be resolved through binding arbitration or appropriate legal proceedings.
            </p>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Changes to Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
      </div>
    </div>
  );
};

export default TermsPage;