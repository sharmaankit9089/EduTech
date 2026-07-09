import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users, Award, Mail, Phone, MessageSquare, Send, CheckCircle, Star, TrendingUp, Clock, MapPin, Globe } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { courses, regions, blogPosts } from '../data/content';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const WHATSAPP_URL = 'https://wa.me/919315371167';
const CONTACT_EMAIL = 'tutor@learnwithvijayshree.com';
const VIDEO_URL = 'https://customer-assets.emergentagent.com/job_d39a7962-5e01-4fc1-b6eb-54fa0a96b91c/artifacts/1rvb74bz_Learnwithvijayshree%20%281%29.mp4';

const colorClasses = {
  violet: { badge: 'bg-violet-100 text-violet-700', card: 'from-violet-50 to-white border-violet-100', grade: 'text-violet-600', dot: 'bg-violet-500' },
  emerald: { badge: 'bg-emerald-100 text-emerald-700', card: 'from-emerald-50 to-white border-emerald-100', grade: 'text-emerald-600', dot: 'bg-emerald-500' },
  sky: { badge: 'bg-sky-100 text-sky-700', card: 'from-sky-50 to-white border-sky-100', grade: 'text-sky-600', dot: 'bg-sky-500' },
  amber: { badge: 'bg-amber-100 text-amber-700', card: 'from-amber-50 to-white border-amber-100', grade: 'text-amber-600', dot: 'bg-amber-500' },
  rose: { badge: 'bg-rose-100 text-rose-700', card: 'from-rose-50 to-white border-rose-100', grade: 'text-rose-600', dot: 'bg-rose-500' },
};

const CourseBlock = ({ course }) => {
  const c = colorClasses[course.color];
  const levels = course.levels;
  return (
    <div data-testid={`course-${course.id}`}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
        <h3 className="font-display font-bold text-3xl text-slate-900 flex items-center gap-3">
          <span className={`${c.badge} p-3 rounded-2xl font-display`}>{course.name}</span>
        </h3>
        <p className="font-body text-slate-500">{course.tagline}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((item, index) => (
          <Card key={index} className={`grade-card bg-gradient-to-br ${c.card} rounded-3xl p-6 border-2`} data-testid={`${course.id}-level-${index}`}>
            <div className={`font-display font-bold text-2xl ${c.grade} mb-3`}>{item.grade}</div>
            <p className="font-body text-slate-600 text-sm leading-relaxed">{item.topics}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const RegionCard = ({ region }) => {
  const areas = region.areas;
  return (
    <Card className="grade-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8" data-testid={`region-${region.id}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{region.flag}</span>
        <h3 className="font-display font-bold text-2xl text-white">{region.name}</h3>
      </div>
      <p className="font-body text-slate-300 mb-4 text-sm">{region.blurb}</p>
      <ul className="space-y-2">
        {areas.map((area, i) => (
          <li key={i} className="flex items-start gap-2 font-body text-slate-200 text-sm">
            <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <span>{area}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const LandingPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${API}/appointments`, formData);
      if (response.data) {
        toast.success('Appointment request submitted successfully! We\'ll contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl"
        data-testid="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-amber-50 py-20 md:py-32">
        <div className="decorative-blob absolute top-20 left-10 w-64 h-64 bg-violet-300" />
        <div className="decorative-blob absolute bottom-20 right-10 w-80 h-80 bg-amber-300" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-display font-bold" data-testid="free-demo-badge">
                  Book Your FREE Demo Class Today!
                </span>
              </div>

              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
                Make Learning <span className="text-violet-600">Fun & Easy</span> with Vijayshree
              </h1>

              <p className="font-body text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                Expert online teacher offering private 1-on-1 tutoring in <strong>Math, Science, English, Hindi & Phonics</strong> for K-12 students. Serving families across the USA, Canada, Europe, Australia & Dubai.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => scrollTo('appointment-form')}
                  className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-lg font-display font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                  data-testid="book-demo-button-hero"
                >
                  Book Free Demo Class
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-violet-600 border-2 border-violet-100 hover:border-violet-200 rounded-full px-8 py-6 text-lg font-display font-bold"
                  data-testid="learn-more-button"
                  onClick={() => scrollTo('courses')}
                >
                  Explore Courses
                </Button>
              </div>

              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-body text-slate-600">100+ Happy Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-body text-slate-600">5.0 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-violet-500" />
                  <span className="font-body text-slate-600">5 Countries & Regions</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1613271752699-ede48a285196?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGtpZHMlMjBmdW58ZW58MHx8fHwxNzY5ODg3NzM3fDA&ixlib=rb-4.1.0&q=85"
                alt="Happy student learning science online with a private tutor"
                className="hero-blob w-full h-auto shadow-2xl animate-float"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Video Section */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Why Choose <span className="text-violet-600">LearnWithVijayshree</span>?
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              As an experienced online teacher, I provide personalized 1-on-1 attention to help students master Math, Science, English, Hindi and Phonics with confidence.
            </p>
          </div>

          {/* Video Introduction */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-slate-900" data-testid="video-section">
              <video
                src={VIDEO_URL}
                controls
                playsInline
                preload="metadata"
                className="w-full h-auto aspect-video bg-black"
                data-testid="intro-video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center font-body text-slate-500 mt-4">A quick introduction to how we teach at LearnWithVijayshree</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-8 h-8 text-violet-600" />, title: 'Private 1-On-1 Tutoring', description: 'Personalized attention tailored to your child\'s learning pace and style' },
              { icon: <Clock className="w-8 h-8 text-emerald-500" />, title: 'Flexible Scheduling', description: 'Lessons across all time zones — USA, Canada, Europe, Australia & Dubai' },
              { icon: <TrendingUp className="w-8 h-8 text-amber-500" />, title: 'Proven Results', description: 'Improved grades and confidence with effective, engaging teaching methods' },
              { icon: <BookOpen className="w-8 h-8 text-violet-600" />, title: 'Five Subjects', description: 'Math, Science, English, Hindi & Phonics — all under one trusted teacher' },
              { icon: <GraduationCap className="w-8 h-8 text-emerald-500" />, title: 'Expert Teacher', description: 'Experienced educator passionate about making complex concepts simple' },
              { icon: <Award className="w-8 h-8 text-amber-500" />, title: 'Interactive Learning', description: 'Engaging online sessions with real-time problem solving and feedback' },
            ].map((feature, index) => (
              <Card key={index} className="grade-card bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md group" data-testid={`feature-card-${index}`}>
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
                <p className="font-body text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Our <span className="text-violet-600">Courses</span> & Syllabus
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive online tutoring in Math, Science, English, Hindi and Phonics — with a clear, grade-wise syllabus for every learner.
            </p>
          </div>

          <div className="space-y-16">
            {courses.map((course) => (
              <CourseBlock key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section id="locations" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-violet-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
              Trusted <span className="text-amber-400">Online Tutor</span> Worldwide
            </h2>
            <p className="font-body text-lg text-slate-300 max-w-3xl mx-auto">
              Private 1-on-1 online tutoring for students in the USA, Canada, Europe, Australia and Dubai. Wherever you are, expert help is one click away.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <RegionCard key={region.id} region={region} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 md:py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Learning <span className="text-violet-600">Tips & Resources</span>
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              Helpful articles and strategies for students and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="grade-card bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg flex flex-col" data-testid={`blog-card-${index}`}>
                <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-body text-sm text-amber-500 font-semibold mb-2">{post.date} · {post.readTime}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-3">{post.title}</h3>
                  <p className="font-body text-slate-600 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="font-display font-semibold text-violet-600 hover:text-violet-700 mt-auto" data-testid={`read-more-${index}`}>
                    Read More →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment-form" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-br from-violet-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Book Your <span className="text-violet-600">FREE Demo Class</span>
            </h2>
            <p className="font-body text-lg text-slate-600">
              Experience personalized online tutoring with no commitment. Let's start your learning journey!
            </p>
          </div>

          <Card className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-violet-100">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="appointment-form">
              <div>
                <label htmlFor="name" className="font-display font-semibold text-slate-900 block mb-2">Full Name *</label>
                <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12" placeholder="Enter student's name" data-testid="input-name" />
              </div>
              <div>
                <label htmlFor="email" className="font-display font-semibold text-slate-900 block mb-2">Email Address *</label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12" placeholder="your.email@example.com" data-testid="input-email" />
              </div>
              <div>
                <label htmlFor="phone" className="font-display font-semibold text-slate-900 block mb-2">Phone Number *</label>
                <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleInputChange} className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12" placeholder="(555) 123-4567" data-testid="input-phone" />
              </div>
              <div>
                <label htmlFor="message" className="font-display font-semibold text-slate-900 block mb-2">Message (Grade, subject & learning goals) *</label>
                <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 min-h-32" placeholder="E.g., My child is in 7th grade and needs help with Algebra and English writing." data-testid="input-message" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-lg font-display font-bold shadow-lg hover:shadow-xl hover:-translate-y-1" data-testid="submit-appointment-button">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Book Free Demo Class
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-display font-bold text-2xl mb-4">LearnWithVijayshree</h3>
              <p className="font-body text-slate-300 mb-4 max-w-md">
                Expert online teacher offering private 1-on-1 tutoring in Math, Science, English, Hindi & Phonics for K-12 students worldwide.
              </p>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-slate-400" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-body text-slate-300 hover:text-amber-400" data-testid="footer-email">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-body text-slate-300 hover:text-amber-400" data-testid="footer-phone">+91 93153 71167 (WhatsApp)</a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl mb-4">Courses</h3>
              <ul className="space-y-2 font-body text-slate-300">
                {courses.map((c) => (
                  <li key={c.id}><button onClick={() => scrollTo('courses')} className="hover:text-amber-400 transition-colors">{c.name}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-bold text-xl mb-4">
                <MapPin className="w-5 h-5 inline-block mr-2" />
                Serving Worldwide
              </h3>
              <div className="font-body text-slate-300 space-y-1 text-sm">
                <p>USA — California, New York, Florida, Washington, Alaska</p>
                <p>Canada — Toronto, Vancouver, Montreal</p>
                <p>Europe — London, Paris, Berlin</p>
                <p>Australia — Sydney, Melbourne</p>
                <p>Dubai — Marina, Downtown, Jumeirah</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="font-body text-slate-400">
              © 2026 LearnWithVijayshree. All rights reserved. | Private 1-On-1 Online Tutoring | Hire an Online Teacher — Math, Science, English, Hindi & Phonics
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
