import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#ffffffc8] text-gray-900 rounded-xl shadow-xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b86609]">
        Privacy Policy
      </h1>

      <p className="mb-6">
        <strong>Voice Of NRI</strong> values your privacy. This Privacy Policy
        explains how we collect, use, and protect your information.
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email address, and
              account details provided during registration.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with the app (e.g., device type, IP address, usage frequency).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and improve our services.</li>
            <li>Communicate updates, offers, and support.</li>
            <li>Analyze app performance and user behavior.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            3. Sharing Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              We do not sell, trade, or share your personal information with
              third parties, except:
            </li>
            <li>With trusted partners for operational purposes.</li>
            <li>When required by law.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            4. Data Security
          </h2>
          <p>
            We use industry-standard measures to protect your data. However, no
            method of electronic storage is 100% secure.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            5. User Rights
          </h2>
          <p>
            You can access, update, or delete your data at any time by
            contacting us. Opt-out of promotional emails by clicking the
            unsubscribe link in the email.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            6. Third-Party Services
          </h2>
          <p>
            Voice Of NRI may integrate with third-party services (e.g., payment
            processors or analytics tools). Please review their policies for
            additional details.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            7. Changes to Privacy Policy
          </h2>
          <p>
            We may update this policy periodically. Continued use of the app
            constitutes your acceptance of the revised policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            8. Contact Information
          </h2>
          <p>
            For questions about this Privacy Policy, please contact us at:{" "}
            <a
              href="mailto:contact@rayacreations.com"
              className="text-blue-600 underline"
            >
              contact@voiceofnri.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
