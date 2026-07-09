import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { courses } from '../data/content';
import { CONTACT } from '../data/contact';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-2xl mb-4">{CONTACT.brand}</h3>
            <p className="font-body text-slate-300 mb-4 max-w-md">
              Expert online teacher offering private 1-on-1 tutoring in Math, Science, English, Hindi & Phonics for K-12 students worldwide.
            </p>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-slate-400" />
              <a href={`mailto:${CONTACT.email}`} className="font-body text-slate-300 hover:text-amber-400" data-testid="footer-email">{CONTACT.email}</a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-slate-400" />
              <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-body text-slate-300 hover:text-amber-400" data-testid="footer-phone">{CONTACT.phoneDisplay} (WhatsApp)</a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-4">Courses</h3>
            <ul className="space-y-2 font-body text-slate-300">
              {courses.map((c) => (
                <li key={c.id}>
                  <Link to={`/courses/${c.id}`} className="hover:text-amber-400 transition-colors" data-testid={`footer-course-${c.id}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              <MapPin className="w-5 h-5 inline-block mr-2" />
              Serving Worldwide
            </h3>
            <ul className="space-y-2 font-body text-slate-300 text-sm">
              <li><Link to="/locations/usa" className="hover:text-amber-400" data-testid="footer-region-usa">United States</Link></li>
              <li><Link to="/locations/canada" className="hover:text-amber-400" data-testid="footer-region-canada">Canada</Link></li>
              <li><Link to="/locations/europe" className="hover:text-amber-400" data-testid="footer-region-europe">Europe</Link></li>
              <li><Link to="/locations/australia" className="hover:text-amber-400" data-testid="footer-region-australia">Australia</Link></li>
              <li><Link to="/locations/dubai" className="hover:text-amber-400" data-testid="footer-region-dubai">Dubai (UAE)</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="font-body text-slate-400">
            © 2026 {CONTACT.brand}. All rights reserved. | Private 1-On-1 Online Tutoring | Hire an Online Teacher — Math, Science, English, Hindi & Phonics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
