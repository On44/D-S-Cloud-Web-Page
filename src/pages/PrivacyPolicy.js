import React from 'react';
import './PrivacyPolicy.css'; // Add appropriate styling here

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
          Welcome to D&S Cloud Computing. Your privacy is critically important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <ul>
            <li>
              **Personal Information**: When you register or contact us, we may collect information like your name, email address, phone number, and other relevant details.
            </li>
            <li>
              **Usage Data**: We may collect information about how you interact with our services, including your IP address, browser type, pages visited, and other analytics data.
            </li>
            <li>
              **Payment Information**: For transactions, we may collect billing details, payment methods, and related information.
            </li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide, operate, and maintain our services.</li>
            <li>Improve and personalize user experiences.</li>
            <li>Process transactions and communicate with you about them.</li>
            <li>Send you updates, promotional content, and important notifications.</li>
            <li>Ensure security and prevent fraudulent activities.</li>
          </ul>
        </section>

        <section>
          <h2>How We Share Your Information</h2>
          <p>
            D&S Cloud Computing does not sell your personal information. We may share your data with:
          </p>
          <ul>
            <li>
              **Service Providers**: Third-party vendors that assist with services like hosting, analytics, and payment processing.
            </li>
            <li>
              **Legal Authorities**: If required by law or to protect our legal rights.
            </li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>Your Choices and Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving promotional emails.</li>
            <li>Request data portability or restriction of processing in certain cases.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at <a href="mailto:privacy@dscloudcomputing.com">privacy@dscloudcomputing.com</a>.
          </p>
        </section>

        <section>
          <h2>Cookies and Tracking Technologies</h2>
          <p>
            We use cookies to enhance your browsing experience and gather analytics data. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with the effective date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:privacy@dscloudcomputing.com">privacy@dscloudcomputing.com</a></li>
            <li>Phone: +254 794 536 415</li>
            <li>Address: Nairobi, Kenya</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
