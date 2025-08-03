import React from "react";

export default function Terms() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-[#ffffffc8] text-gray-900 rounded-xl shadow-xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#b86609]">
        Terms & Conditions
      </h1>

      <p className="mb-6">
        Welcome to <strong>Voice Of NRI!</strong> By downloading, installing, or
        using our app, you agree to be bound by the following Terms and
        Conditions. Please read them carefully.
      </p>

      <div className="space-y-6 text-base leading-relaxed">
        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using Voice Of NRI, you agree to comply with these
            Terms. If you do not agree, please do not use the app.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            2. Eligibility
          </h2>
          <p>
            You must be at least 18 years old to use this app. By using Raya
            Creations, you confirm that you meet this requirement.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            3. User Accounts
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              Voice Of NRI reserves the right to suspend or terminate accounts
              for any unauthorized or fraudulent activity.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            4. Content Ownership and Copyright
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Content created and uploaded by users remains their property.
              However, by uploading content, you grant us a non-exclusive,
              royalty-free license to display, distribute, and promote your
              content.
            </li>
            <li>
              You must not upload any copyrighted material without the proper
              permissions.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            5. Prohibited Activities
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Post content that is offensive, illegal, or harmful.</li>
            <li>
              Engage in activities that harm the app’s security or
              functionality.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            6. Limitation of Liability
          </h2>
          <p>
            Voice Of NRI is not responsible for any damages or losses arising
            from the use of the app.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            7. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued
            use of the app constitutes your acceptance of the revised Terms.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-xl text-[#000] mb-2">
            8. Contact Information
          </h2>
          <p>
            For any questions or concerns regarding these Terms, please contact
            us at:{" "}
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
