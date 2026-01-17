import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-brand-900 mb-6">About Rajesh Digital IQ</h1>
        <p className="text-lg text-brand-600 mb-6">
          Rajesh Digital IQ is a premier institute dedicated to bridging the digital skills gap. Established in 2020, we have trained over 1,000 professionals and students, empowering them with actionable skills that drive real-world results.
        </p>
        <p className="text-lg text-brand-600 mb-6">
          Our mission is to democratize access to high-quality digital education and create the next generation of marketing leaders.
        </p>
      </div>
    </div>
  );
};

export default About;