import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, CheckCircle } from 'lucide-react';
import { COURSES } from '../constants';

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-50 pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">Our Professional Programs</h1>
          <p className="text-brand-600">
            Explore our industry-aligned certifications designed to accelerate your career in the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {course.level === 'Post Graduate' && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded text-xs font-bold uppercase shadow-sm">
                    Best Seller
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-brand-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                  ₹{course.price.toLocaleString('en-IN')}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-brand-500 font-medium mb-4">
                  <span className="flex items-center gap-1.5 bg-brand-50 px-2 py-1 rounded text-brand-700">
                    <Clock size={14} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 bg-brand-50 px-2 py-1 rounded text-brand-700">
                      <Award size={14} /> {course.level}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-brand-900 mb-3 leading-snug">
                  {course.title}
                </h3>
                
                <p className="text-brand-600 mb-6 leading-relaxed text-sm flex-grow">
                  {course.shortDescription}
                </p>
                
                <div className="space-y-2 mb-8 border-t border-gray-100 pt-4">
                  {course.outcomes.slice(0, 2).map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-brand-700">{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link 
                    to={`/programs/${course.id}`} 
                    className="flex-1 bg-brand-900 text-white text-center px-4 py-3 rounded-lg font-semibold hover:bg-brand-800 transition-colors"
                  >
                    View Details
                  </Link>
                  <Link 
                    to={`/programs/${course.id}`}
                    className="flex-1 border border-brand-200 text-brand-900 text-center px-4 py-3 rounded-lg font-semibold hover:bg-brand-50 transition-colors"
                  >
                    Brochure
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;