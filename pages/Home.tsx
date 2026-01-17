import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, BookOpen, Clock } from 'lucide-react';
import { COURSES, STATS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-accent-600/20 border border-accent-500/30 rounded-full px-4 py-1.5">
                <span className="text-accent-500 text-xs font-bold tracking-wide uppercase">Admissions Open 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Master the Art of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-300">
                  Digital Intelligence
                </span>
              </h1>
              <p className="text-lg text-brand-100 max-w-xl leading-relaxed">
                Join a premium learning institute designed for the modern professional. 
                Gain the strategic skills, technical mastery, and analytical mindset required to lead in the digital economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/programs/pg-digital-marketing"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Explore Program <ArrowRight size={18} />
                </Link>
                <button className="bg-transparent border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-semibold transition-all">
                  Download Brochure
                </button>
              </div>
              <div className="pt-4 flex items-center gap-6 text-sm text-brand-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-500" />
                  <span>Placement Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-500" />
                  <span>Live Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-accent-500" />
                  <span>Expert Mentors</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-500/20 rounded-2xl blur-lg"></div>
              <img 
                src="https://picsum.photos/id/60/800/600" 
                alt="Digital Marketing Classroom" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-brand-900 mb-1">{stat.value}</p>
                <p className="text-brand-500 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs Section (Grid) */}
      <section className="py-20 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">Our Professional Programs</h2>
            <p className="text-brand-600">
              Designed for graduates and professionals, our curriculum bridges the gap between theoretical marketing concepts and real-world digital execution.
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
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
              <div className="bg-brand-900 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Outcome-Driven</h3>
              <p className="text-brand-600 text-sm leading-relaxed">
                Every module is designed with a specific career outcome in mind. You don't just learn theory; you build a portfolio of executed campaigns.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
              <div className="bg-brand-900 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">Industry Experts</h3>
              <p className="text-brand-600 text-sm leading-relaxed">
                Learn directly from practitioners who manage million-dollar ad budgets and lead digital strategies for global brands.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-brand-50 border border-brand-100">
              <div className="bg-brand-900 w-12 h-12 rounded-lg flex items-center justify-center text-white mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">University Syllabus</h3>
              <p className="text-brand-600 text-sm leading-relaxed">
                Our curriculum follows a rigorous university standard, ensuring you receive a diploma that holds weight in the corporate world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center mb-16">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brand-800 p-8 rounded-xl border border-brand-700 relative">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-accent-500" />
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-brand-300 text-xs uppercase tracking-wide">{t.role}, {t.company}</p>
                  </div>
                </div>
                <p className="text-brand-100 italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-50 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold text-brand-900 mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg text-brand-600 mb-8 max-w-2xl mx-auto">
            Admissions are closing soon for the upcoming batch. Secure your spot in the Post Graduate Diploma in Digital Marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link 
                to="/programs/pg-digital-marketing"
                className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-transform hover:-translate-y-1"
              >
                Start Application
              </Link>
             <Link 
                to="/admissions"
                className="bg-white border-2 border-brand-900 text-brand-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors"
              >
                Speak to Counselor
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;