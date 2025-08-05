import React from "react";

export default function Privacy() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#ffffffc8] text-gray-900 rounded-xl shadow-xl font-poppins">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#b86609]">
        Privacy Policy - Voice of NRI App
      </h1>

      <p className="mb-6 text-center text-sm text-gray-600">
        Effective Date: August 03, 2025
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            1. Introduction
          </h2>
          <p>
            Voice of NRI ("we", "our", or "us") respects your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you use our mobile application ("Voice of
            NRI" or "the App").
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            2. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number (during registration), profile picture (optional)
            </li>
            <li>
              <strong>Audio Room Activity:</strong> Mic access, voting, comments
            </li>
            <li>
              <strong>Technical Information:</strong> Device ID, IP address, OS
              version, usage statistics, mic/network permissions
            </li>
            <li>
              <strong>Third-Party Data (Agora SDK):</strong> Voice streaming and
              participation data
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Enable access to radio, podcasts, and audio rooms</li>
            <li>Authenticate users and manage sessions</li>
            <li>Allow voice participation and interactions</li>
            <li>Improve user experience and app performance</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            4. Data Sharing
          </h2>
          <p>
            We do not sell or rent your data. We may share limited data with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Agora.io, for real-time audio processing</li>
            <li>Legal authorities, if required by law</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            5. Data Retention
          </h2>
          <p>
            We retain your data only as long as needed for the purposes outlined
            in this policy, or as required by law.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            6. Your Rights
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>View and update your profile</li>
            <li>Request account deletion</li>
            <li>Withdraw mic/camera permissions anytime via device settings</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            7. Security
          </h2>
          <p>
            We use industry-standard encryption and access controls to protect
            your data.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            8. Children's Privacy
          </h2>
          <p>
            Voice of NRI is not intended for users under the age of 13. We do
            not knowingly collect data from children.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy. Changes will be posted within the
            app and updated with the effective date.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            10. Contact Us
          </h2>
          <p>
            If you have questions, email us at:{" "}
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
