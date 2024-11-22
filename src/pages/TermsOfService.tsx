import { Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service for MyPract</h1>
          <p className="text-gray-600 mb-8">Effective Date: 22-11-2024</p>
          
          <p className="mb-8">
            Welcome to MyPract, a practice management platform designed for accountants. By accessing or using MyPract, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
          </p>

          <div className="flex items-center gap-2 mb-8 text-gray-600">
            <Mail className="w-5 h-5" />
            <p>For any queries, feel free to contact us at hello@mypract.com</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6">
              <li>"Platform" refers to the MyPract website, application, and associated services.</li>
              <li>"User" refers to any individual or organization accessing or using the Platform.</li>
              <li>"We", "Us", or "Our" refers to MyPract.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
            <p>By registering for or using MyPract, you confirm that:</p>
            <ul className="list-disc pl-6">
              <li>You are legally capable of entering into a binding contract under Indian law.</li>
              <li>You have provided accurate and complete information during registration.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>As a user of MyPract, you agree to:</p>
            <ul className="list-disc pl-6">
              <li>Use the Platform only for lawful purposes related to practice management.</li>
              <li>Maintain the confidentiality of your account credentials.</li>
              <li>Ensure that any data you upload is accurate, compliant with Indian laws, and free of viruses or malicious content.</li>
              <li>Avoid activities that disrupt or harm the Platform's functionality or security.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
            <p>You must not:</p>
            <ul className="list-disc pl-6">
              <li>Use the Platform for fraudulent, illegal, or unauthorized purposes.</li>
              <li>Reverse-engineer, modify, or tamper with the Platform.</li>
              <li>Share or misuse confidential information available through the Platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Subscriptions and Payments</h2>
            <ul className="list-disc pl-6">
              <li>Use of certain features of MyPract may require a subscription.</li>
              <li>Payments are non-refundable unless otherwise specified.</li>
              <li>We reserve the right to modify pricing, with prior notice provided to you.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Usage and Ownership</h2>
            <ul className="list-disc pl-6">
              <li>Users retain ownership of the data they upload to the Platform.</li>
              <li>By using MyPract, you grant us a license to process and store your data for the purpose of providing our services.</li>
              <li>We comply with Indian data protection laws to safeguard your data.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if:</p>
            <ul className="list-disc pl-6">
              <li>You violate these Terms of Service.</li>
              <li>Your use of the Platform poses a security or legal risk.</li>
            </ul>
            <p className="mt-4">Upon termination, your access to the Platform will be revoked, and your data will be handled per our Privacy Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p>All content, trademarks, and materials provided on the Platform are owned by MyPract or its licensors. Users are prohibited from reproducing, distributing, or using these materials without prior written permission.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Liability Disclaimer</h2>
            <ul className="list-disc pl-6">
              <li>MyPract is provided on an "as-is" and "as-available" basis.</li>
              <li>We do not guarantee uninterrupted or error-free services.</li>
              <li>To the extent permitted by Indian law, we are not liable for indirect or consequential damages arising from your use of the Platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Links</h2>
            <p>The Platform may contain links to third-party websites. We do not endorse or assume responsibility for their content or services.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6">
              <li>These Terms of Service are governed by the laws of India.</li>
              <li>Any disputes will be subject to the exclusive jurisdiction of courts in Bangalore.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms of Service</h2>
            <p>We may update these Terms of Service from time to time. The revised terms will be effective upon posting on the Platform. Users are encouraged to review these terms periodically.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p>If you have any questions or concerns regarding these Terms of Service, please contact us at:</p>
            <p className="mt-2">Email: hello@mypract.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;