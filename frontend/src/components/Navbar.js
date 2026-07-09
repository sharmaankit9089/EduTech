import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Serving Worldwide', to: '/locations' },
  { label: 'Blog', to: '/#blog' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const bookDemo = () => {
    setOpen(false);
    navigate('/#appointment-form');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100" data-testid="navbar">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center py-1" data-testid="nav-logo">
          <img src="/media/Logo1.png" alt="LearnWithVijayshree Logo" className="h-14 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="font-body font-medium text-slate-600 hover:text-violet-600 transition-colors" data-testid={`nav-link-${l.label.toLowerCase().replace(/ /g, '-')}`}>
              {l.label}
            </Link>
          ))}
          <Button onClick={bookDemo} className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 font-display font-bold" data-testid="nav-book-demo">
            Book Free Demo
          </Button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} data-testid="nav-mobile-toggle" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4" data-testid="nav-mobile-menu">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-body font-medium text-slate-700 hover:text-violet-600" data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/ /g, '-')}`}>
              {l.label}
            </Link>
          ))}
          <Button onClick={bookDemo} className="bg-violet-600 hover:bg-violet-700 text-white rounded-full font-display font-bold w-full" data-testid="nav-mobile-book-demo">
            Book Free Demo
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
