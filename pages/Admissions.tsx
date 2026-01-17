import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Calendar } from 'lucide-react';

const Admissions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">Admissions</h1>
        <p className="text-lg text-brand-600 mb-8">
          We are currently accepting applications for the upcoming batch. Our admission process is designed to identify candidates with the drive and potential to succeed in the digital industry.
        </p>
        
        <div className="bg-brand-50 p-8 rounded-xl border border-brand-100 mb-8">
          <h2 className="text-2xl font-bold text-brand-900 mb-4">Application Process</h2>
          <ol className="list-decimal list-inside space-y-3 text-brand-700">
            <li>Submit the online application form for your desired program.</li>
            <li>Schedule a counseling session with our academic advisors.</li>
            <li>Complete the entrance assessment (if applicable).</li>
            <li>Receive your offer letter and complete enrollment.</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Link to="/programs" className="bg-brand-900 text-white px-6 py-3 rounded-lg font-semibold">View Programs</Link>
          <a href="mailto:admissions@rajeshdigitaliq.com" className="border border-brand-200 text-brand-900 px-6 py-3 rounded-lg font-semibold">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Admissions;