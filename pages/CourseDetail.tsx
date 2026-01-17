import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, Clock, Book, Calendar, Award, UserCheck, Target } from 'lucide-react';
import { COURSES } from '../constants';

const CourseDetail: React.FC = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(COURSES[0]);
  const [activeSemester, setActiveSemester] = useState<number | null>(1);
  const [isEnrollModalOpen, setEnrollModalOpen] = useState(false);

  useEffect(() => {
    const foundCourse = COURSES.find(c => c.id === id);
    if (foundCourse) {
      setCourse(foundCourse);
      setActiveSemester(1);
    }
  }, [id]);

  // Enrollment Modal Component
  const EnrollmentModal = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        <div className="bg-brand-900 p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Secure Your Spot</h3>
          <button onClick={() => setEnrollModalOpen(false)} className="hover:bg-brand-800 p-1 rounded"><ChevronDown className="rotate-180" /></button>
        </div>
        <div className="p-8">
          <p className="text-sm text-gray-500 mb-6">Fill out the form below to start your application for the <strong>{course.title}</strong>.</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted! Check your email."); setEnrollModalOpen(false); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" placeholder="John Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" placeholder="john@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none" placeholder="+1 (555) 000-0000" required />
            </div>
            <button type="submit" className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-lg transition-colors mt-4">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-50 pb-20">
      {isEnrollModalOpen && <EnrollmentModal />}
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-xs text-gray-500">Course Fee</p>
          <p className="text-xl font-bold text-brand-900">₹{course.price.toLocaleString('en-IN')}</p>
        </div>
        <button 
          onClick={() => setEnrollModalOpen(true)}
          className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-2.5 px-6 rounded-lg shadow-md transition-colors"
        >
          Apply Now
        </button>
      </div>

      {/* Course Header */}
      <div className="bg-brand-900 text-white pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
               <div className="flex items-center gap-2 text-accent-400 text-sm font-bold uppercase tracking-wider mb-4">
                 <Award size={16} /> {course.level}
               </div>
               <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                 {course.title}
               </h1>
               <p className="text-lg text-brand-100 max-w-2xl leading-relaxed mb-8">
                 {course.shortDescription}
               </p>
               <div className="flex flex-wrap gap-6 text-sm font-medium text-brand-200">
                 <div className="flex items-center gap-2 bg-brand-800 px-4 py-2 rounded-lg">
                   <Clock size={18} className="text-accent-500" /> {course.duration}
                 </div>
                 <div className="flex items-center gap-2 bg-brand-800 px-4 py-2 rounded-lg">
                   <Book size={18} className="text-accent-500" /> {course.credits} Credits
                 </div>
                 <div className="flex items-center gap-2 bg-brand-800 px-4 py-2 rounded-lg">
                   <UserCheck size={18} className="text-accent-500" /> {course.eligibility}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-900 mb-4">Program Overview</h2>
              <p className="text-brand-600 leading-relaxed mb-6">
                {course.fullDescription}
              </p>
              <h3 className="font-bold text-brand-900 mb-3">Key Learning Objectives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-accent-500 mt-1 shrink-0" />
                    <span className="text-sm text-brand-700">{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-900 mb-6">Curriculum Architecture</h2>
              <div className="space-y-4">
                {course.semesters.map((semester) => (
                  <div key={semester.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => setActiveSemester(activeSemester === semester.id ? null : semester.id)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors ${activeSemester === semester.id ? 'bg-brand-50' : 'bg-white hover:bg-gray-50'}`}
                    >
                      <div>
                        <h3 className="font-bold text-brand-900">{semester.title}</h3>
                        <p className="text-xs text-brand-500 mt-1">{semester.description}</p>
                      </div>
                      {activeSemester === semester.id ? <ChevronUp size={20} className="text-brand-400" /> : <ChevronDown size={20} className="text-brand-400" />}
                    </button>
                    
                    {activeSemester === semester.id && (
                      <div className="bg-white p-4 border-t border-gray-100">
                        <div className="grid gap-4">
                          {semester.modules.map((module) => (
                            <div key={module.code} className="bg-gray-50 rounded p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold bg-brand-200 text-brand-800 px-2 py-0.5 rounded">{module.code}</span>
                                <h4 className="font-semibold text-brand-900 text-sm">{module.title}</h4>
                              </div>
                              <ul className="pl-2 space-y-1">
                                {module.topics.map((topic, i) => (
                                  <li key={i} className="text-xs text-brand-600 flex items-start gap-2">
                                    <span className="w-1 h-1 bg-brand-400 rounded-full mt-1.5 shrink-0"></span>
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Capstone Section */}
                <div className="border border-accent-200 bg-accent-50/50 rounded-lg p-5">
                  <h3 className="font-bold text-brand-900 flex items-center gap-2">
                    <Award className="text-accent-600" size={20} /> Capstone Project & Internship
                  </h3>
                  <p className="text-sm text-brand-700 mt-2">
                    Students are required to undertake a comprehensive project involving digital marketing strategy, execution, performance tracking, and reporting for a real or simulated organization.
                  </p>
                </div>
              </div>
            </div>

            {/* Outcomes & Completion */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-brand-900 mb-6">Practical Outcomes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                     {course.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3 bg-brand-50 p-4 rounded-lg border border-brand-100">
                        <Target size={20} className="text-accent-500 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-brand-800">{outcome}</span>
                      </div>
                    ))}
                </div>

                {course.completionStatement && (
                    <div className="text-center p-6 bg-brand-900 rounded-xl text-white">
                        <h3 className="font-serif font-bold text-xl mb-3 text-accent-400">Award of Certification</h3>
                        <p className="text-brand-100 italic leading-relaxed">
                            "{course.completionStatement}"
                        </p>
                    </div>
                )}
            </div>

             {/* Assessment */}
             <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-brand-900 mb-4">Assessment & Evaluation</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                 <div className="flex-1 bg-gray-50 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-brand-900">{course.assessment.internal}%</div>
                    <div className="text-xs text-brand-500 uppercase tracking-wide">Internal Assessment</div>
                 </div>
                 {course.assessment.endSemester > 0 && (
                     <div className="flex-1 bg-gray-50 p-4 rounded text-center">
                        <div className="text-2xl font-bold text-brand-900">{course.assessment.endSemester}%</div>
                        <div className="text-xs text-brand-500 uppercase tracking-wide">End Semester Exam</div>
                     </div>
                 )}
                 <div className="flex-1 bg-gray-50 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-brand-900">{course.assessment.project}%</div>
                    <div className="text-xs text-brand-500 uppercase tracking-wide">Project & Practical</div>
                 </div>
              </div>
             </div>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6 hidden md:block">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-500 text-sm line-through decoration-red-500">₹{Math.round(course.price * 1.4).toLocaleString('en-IN')}</p>
                  <p className="text-4xl font-bold text-brand-900">₹{course.price.toLocaleString('en-IN')}</p>
                  <p className="text-green-600 text-xs font-bold bg-green-50 inline-block px-2 py-1 rounded mt-2">Early bird pricing ends in 2 days</p>
                </div>
                
                <button 
                  onClick={() => setEnrollModalOpen(true)}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-lg shadow-md transition-all hover:shadow-lg mb-3"
                >
                  Apply Now
                </button>
                <p className="text-center text-xs text-gray-500 mb-6">No credit card required for initial application</p>
                
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-semibold text-brand-900">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Mode</span>
                    <span className="font-semibold text-brand-900">Online / Hybrid</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Next Batch</span>
                    <span className="font-semibold text-brand-900">Nov 15, 2024</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-900 rounded-xl p-6 text-white text-center">
                <h4 className="font-serif font-bold text-xl mb-2">Need Guidance?</h4>
                <p className="text-brand-200 text-sm mb-4">Our academic counselors are here to help you choose the right path.</p>
                <button className="text-white border border-white/30 hover:bg-white/10 w-full py-2 rounded font-medium text-sm transition-colors">
                  Request Callback
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;