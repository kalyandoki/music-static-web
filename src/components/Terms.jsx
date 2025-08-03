import React from "react";

export default function Terms() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#ffffffc8] text-gray-900 rounded-xl shadow-xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#b86609]">
        Terms & Conditions Voice of NRI App
      </h1>
      <p className="text-center text-sm text-gray-600 mb-8">
        Effective Date: August 03, 2025
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By using the <strong>Voice of NRI</strong> app, you agree to be
            bound by these Terms & Conditions and our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            2. User Account
          </h2>
          <p>
            To access audio rooms, you must register an account using valid
            credentials. You are responsible for maintaining the confidentiality
            of your login details.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            3. Audio Room Usage
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Users must log in to join audio rooms.</li>
            <li>
              Mic access is permission-based. Raise hand to request speaking
              rights.
            </li>
            <li>Moderators can mute or remove users for misconduct.</li>
            <li>Comments and votes must be respectful and non-abusive.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            4. Community Guidelines
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Post or speak hate speech, threats, or offensive content</li>
            <li>Disrupt conversations or spam in audio rooms</li>
            <li>Impersonate others</li>
            <li>Violate any applicable laws</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            5. Intellectual Property
          </h2>
          <p>
            All content on the app — including radio, podcasts, and logos — is
            owned by <strong>Voice of NRI</strong> or its content partners.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            6. Limitation of Liability
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>User-generated content in audio rooms</li>
            <li>Temporary unavailability of services</li>
            <li>Technical issues due to third-party services like Agora</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            7. Suspension & Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate user access for
            violations of these Terms or community guidelines.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            8. Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use after
            updates means acceptance of changes.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            9. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of the United States,
            California.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            10. Contact Us
          </h2>
          <p>
            Questions? Email us at:{" "}
            <a
              href="mailto:support@voiceofnri.com"
              className="text-blue-600 underline"
            >
              support@voiceofnri.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
