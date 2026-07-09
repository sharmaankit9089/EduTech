import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, MessageSquare, GraduationCap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card } from './ui/card';
import { regions, courses } from '../data/content';
import { CONTACT } from '../data/contact';

const LocationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const region = regions.find((r) => r.id === id);

  useEffect(() => {
    if (region) {
      const pageTitle = `Online Tutoring in ${region.name} — Math, Science, English, Hindi & Phonics | LearnWithVijayshree`;
      const pageDesc = `Private 1-on-1 online tutoring for students in ${region.name}. ${region.blurb} Book a free demo class today.`;
      const pageUrl = `https://learnwithvijayshree.com/locations/${region.id}`;

      document.title = pageTitle;

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
  }, [region]);

  if (!region) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-40 px-6" data-testid="location-not-found">
          <h1 className="font-display font-bold text-4xl text-slate-900 mb-4">Location not found</h1>
          <Link to="/locations" className="text-violet-600 font-display font-semibold" data-testid="back-locations">Back to Locations</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const areas = region.areas;
  const courseList = courses;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 to-violet-950 text-white py-14 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/locations" className="inline-flex items-center gap-2 font-display font-semibold text-amber-400 hover:text-amber-300 mb-8" data-testid="location-back-link">
            <ArrowLeft className="w-5 h-5" /> All Locations
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{region.flag}</span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight" data-testid="location-title">
              Online Tutoring in <span className="text-amber-400">{region.name}</span>
            </h1>
          </div>
          <p className="font-body text-lg text-slate-300 max-w-3xl mb-8">{region.intro}</p>
          <Link to="/#appointment-form" className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-4 text-lg font-display font-bold transition-colors" data-testid="location-cta-button">
            Book Free Demo Class
          </Link>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">Popular areas we serve in {region.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm" data-testid={`location-area-${i}`}>
                <MapPin className="w-6 h-6 text-violet-600 flex-shrink-0 mt-0.5" />
                <span className="font-body text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses available */}
      <section className="py-14 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">Courses available in {region.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {courseList.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`} className="group" data-testid={`location-course-${course.id}`}>
                <Card className="grade-card bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md text-center h-full flex flex-col items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-violet-600 mb-3" />
                  <span className="font-display font-bold text-slate-900 group-hover:text-violet-600">{course.name}</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Ready to start in {region.name}?</h2>
          <p className="font-body text-violet-100 mb-6">Book your FREE 1-on-1 demo class — flexible times for your time zone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/#appointment-form')} className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-4 text-lg font-display font-bold transition-colors" data-testid="location-bottom-cta">
              Book Free Demo Class
            </button>
            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-4 text-lg font-display font-bold inline-flex items-center justify-center gap-2 transition-colors" data-testid="location-whatsapp-cta">
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationDetailPage;
