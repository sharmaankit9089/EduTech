import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card } from './ui/card';
import { regions } from '../data/content';

const RegionPreviewCard = ({ region }) => {
  const areas = region.areas;
  return (
    <Link to={`/locations/${region.id}`} className="group" data-testid={`locations-card-${region.id}`}>
      <Card className="grade-card bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{region.flag}</span>
          <h3 className="font-display font-bold text-2xl text-slate-900 group-hover:text-violet-600">{region.name}</h3>
        </div>
        <p className="font-body text-slate-600 text-sm mb-4 flex-1">{region.blurb}</p>
        <ul className="space-y-1 mb-4">
          {areas.slice(0, 3).map((area, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-slate-500 text-sm">
              <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-2 font-display font-semibold text-violet-600 mt-auto">
          Explore {region.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Card>
    </Link>
  );
};

const LocationsPage = () => {
  useEffect(() => {
    document.title = 'Online Tutoring Worldwide — USA, Canada, Europe, Australia & Dubai | LearnWithVijayshree';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Private 1-on-1 online tutoring for students in the USA, Canada, Europe, Australia and Dubai. Hire an expert online teacher in Math, Science, English, Hindi & Phonics. Book a free demo.');
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = 'https://learnwithvijayshree.com/locations';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 to-violet-950 text-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-display font-bold">
            <Globe className="w-4 h-4 text-amber-400" /> Serving 5 countries & regions
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mt-6 mb-6">
            Serving Students <span className="text-amber-400">Worldwide</span>
          </h1>
          <p className="font-body text-lg text-slate-300 max-w-3xl mx-auto">
            Wherever you are, expert 1-on-1 tutoring is one click away. We teach students across the USA, Canada, Europe, Australia and Dubai — with flexible scheduling for every time zone.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <RegionPreviewCard key={region.id} region={region} />
          ))}
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Learning from anywhere in the world?</h2>
          <p className="font-body text-violet-100 mb-6">Book a FREE 1-on-1 demo class at a time that suits your time zone.</p>
          <Link to="/#appointment-form" className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-4 text-lg font-display font-bold transition-colors" data-testid="locations-cta-button">
            Book Free Demo Class
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocationsPage;
