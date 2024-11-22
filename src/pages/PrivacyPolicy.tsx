import { Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy for MyPract</h1>
          <p className="text-gray-600 mb-8">Effective Date: 22/11/2024</p>
          
          <p className="mb-8">
            At MyPract, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our practice management application for accountants. By using MyPract, you agree to the practices described in this policy.
          </p>

          <div className="flex items-center gap-2 mb-8 text-gray-600">
            <Mail className="w-5 h-5" />
            <p>For any questions or concerns, you can reach us at hello@mypract.com</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">a. Information You Provide Directly</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Account Details: Name, email address, phone number, and organization details.</li>
              <li>Billing Information: Payment details, GST number, and related financial information.</li>
              <li>Client Data: Information you upload, input, or process on behalf of your clients.</li>
            </ul>
            <h3 className="text-xl font-medium mb-2">b. Information Collected Automatically</h3>
            <ul className="list-disc pl-6">
              <li>Usage Data: Log data such as IP address, browser type, operating system, and usage statistics.</li>
              <li>Cookies: Data collected through cookies to enhance your experience on the platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>To provide, maintain, and improve the MyPract platform.</li>
              <li>To process payments and manage subscriptions.</li>
              <li>To respond to your inquiries and offer customer support.</li>
              <li>To notify you about updates, security alerts, and product changes.</li>
              <li>To ensure compliance with Indian laws, including tax regulations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Sharing of Information</h2>
            <p className="mb-4">We do not sell or rent your personal information to third parties. However, we may share your information:</p>
            <ul className="list-disc pl-6">
              <li>With Service Providers: For hosting, payment processing, and analytics.</li>
              <li>For Legal Compliance: When required to comply with laws or protect our legal rights.</li>
              <li>With Consent: When you explicitly approve sharing with third parties.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
            <p>We retain your personal and client data for as long as necessary to provide our services or comply with legal obligations. Upon termination of your account, we will delete your data unless otherwise required by law.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>We employ industry-standard measures to protect your data, including encryption, secure servers, and regular audits. However, no method of transmission over the Internet or electronic storage is completely secure.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="mb-4">In accordance with Indian data protection laws, you have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal data.</li>
              <li>Correct inaccuracies in your data.</li>
              <li>Request deletion of your data.</li>
              <li>Opt out of marketing communications.</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at hello@mypract.com.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p>MyPract may include integrations with third-party services. We are not responsible for their privacy practices, and we encourage you to review their policies.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be effective upon posting on our platform.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>For questions, feedback, or concerns regarding this Privacy Policy, please reach out to us at:</p>
            <p className="mt-2">Email: hello@mypract.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;