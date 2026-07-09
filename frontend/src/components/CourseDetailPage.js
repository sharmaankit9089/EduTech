import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card } from './ui/card';
import { courses } from '../data/content';
import { colorClasses } from '../lib/courseColors';
import { CONTACT } from '../data/contact';

const CourseDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    if (course) {
      const pageTitle = `Online ${course.name} Tutoring (K-12) | LearnWithVijayshree`;
      const pageDesc = `Private 1-on-1 online ${course.name} tutoring for K-12 students. ${course.tagline} Book a free demo class today.`;
      const pageUrl = `https://learnwithvijayshree.com/courses/${course.id}`;

      document.title = pageTitle;

      // Meta description
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', pageDesc);

      // Canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
      canonical.href = pageUrl;

      // OG tags
      const setMeta = (prop, val) => {
        let el = document.querySelector(`meta[property="${prop}"]`);
        if (el) el.setAttribute('content', val);
      };
      setMeta('og:title', pageTitle);
      setMeta('og:description', pageDesc);
      setMeta('og:url', pageUrl);
    }
    window.scrollTo(0, 0);
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40 px-6" data-testid="course-not-found">
          <h1 className="font-display font-bold text-4xl text-slate-900 mb-4">Course not found</h1>
          <Link to="/courses" className="text-violet-600 font-display font-semibold" data-testid="back-courses">Back to Courses</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const c = colorClasses[course.color];
  const levels = course.levels;
  const highlights = course.highlights;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-50 to-white py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/courses" className="inline-flex items-center gap-2 font-display font-semibold text-violet-600 hover:text-violet-700 mb-8" data-testid="course-back-link">
            <ArrowLeft className="w-5 h-5" /> All Courses
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`${c.badge} px-4 py-2 rounded-full text-sm font-display font-bold`}>K-12 · Private 1-on-1</span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mt-6 mb-6" data-testid="course-title">
                Online <span className={c.grade}>{course.name}</span> Tutoring
              </h1>
              <p className="font-body text-lg text-slate-600 mb-8">{course.intro}</p>
              <Link to="/#appointment-form" className={`inline-block ${c.solid} text-white rounded-full px-8 py-4 text-lg font-display font-bold shadow-lg hover:-translate-y-1 transition-transform`} data-testid="course-cta-button">
                Book Free Demo Class
              </Link>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={course.image} alt={`Online ${course.name} tutoring`} className="w-full h-72 lg:h-96 object-cover" data-testid="course-hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">What you get</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm" data-testid={`course-highlight-${i}`}>
                <CheckCircle className={`w-6 h-6 ${c.grade} flex-shrink-0 mt-0.5`} />
                <span className="font-body text-slate-700">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-2">Grade-wise Syllabus</h2>
          <p className="font-body text-slate-500 mb-8">{course.tagline}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((item, index) => (
              <Card key={index} className={`grade-card bg-gradient-to-br ${c.card} rounded-3xl p-6 border-2`} data-testid={`course-level-${index}`}>
                <div className={`font-display font-bold text-2xl ${c.grade} mb-3`}>{item.grade}</div>
                <p className="font-body text-slate-600 text-sm leading-relaxed">{item.topics}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Start {course.name} the right way</h2>
          <p className="font-body text-violet-100 mb-6">Book your FREE 1-on-1 demo class — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/#appointment-form')} className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-4 text-lg font-display font-bold transition-colors" data-testid="course-bottom-cta">
              Book Free Demo Class
            </button>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-4 text-lg font-display font-bold inline-flex items-center justify-center gap-2 transition-colors" data-testid="course-whatsapp-cta">
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;
