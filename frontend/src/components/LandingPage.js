import React, { useState } from 'react';
import { BookOpen, GraduationCap, Users, Award, Mail, Phone, MessageSquare, Send, CheckCircle, Star, TrendingUp, Clock, MapPin } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

  const scrollToForm = () => {
    document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* SEO Meta Tags would be in index.html */}
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
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
        {/* Decorative blobs */}
        <div className="decorative-blob absolute top-20 left-10 w-64 h-64 bg-violet-300" />
        <div className="decorative-blob absolute bottom-20 right-10 w-80 h-80 bg-amber-300" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <span className="bg-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-display font-bold" data-testid="free-demo-badge">
                  🎉 Book Your FREE Demo Class Today!
                </span>
              </div>
              
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
                Make Learning <span className="text-violet-600">Fun & Easy</span> with Vijayshree
              </h1>
              
              <p className="font-body text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
                Expert online tutors in USA providing private 1-on-1 tutoring for K-12 Math & Science. 
                Personalized coaching that helps your child excel!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={scrollToForm}
                  className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-lg font-display font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                  data-testid="book-demo-button-hero"
                >
                  Book Free Demo Class
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-violet-600 border-2 border-violet-100 hover:border-violet-200 rounded-full px-8 py-6 text-lg font-display font-bold"
                  data-testid="learn-more-button"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span className="font-body text-slate-600">100+ Happy Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="font-body text-slate-600">5.0 Rating</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative z-10">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1613271752699-ede48a285196?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGtpZHMlMjBmdW58ZW58MHx8fHwxNzY5ODg3NzM3fDA&ixlib=rb-4.1.0&q=85"
                  alt="Happy student learning science"
                  className="hero-blob w-full h-auto shadow-2xl animate-float"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Video */}
      <section id="about" className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Why Choose <span className="text-violet-600">LearnWithVijayshree</span>?
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              As an experienced online teacher, I provide personalized attention to help students master Math and Science concepts with confidence.
            </p>
          </div>

          {/* Video Introduction Placeholder */}
          <div className="mb-16">
            <div className="video-thumbnail max-w-4xl mx-auto bg-gradient-to-br from-violet-100 to-amber-100 rounded-3xl overflow-hidden shadow-xl" data-testid="video-section">
              <div className="aspect-video flex items-center justify-center relative">
                <img
                  src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0dXRvciUyMHRlYWNoaW5nJTIwbGFwdG9wfGVufDB8fHx8MTc2OTg4Nzc0Mnww&ixlib=rb-4.1.0&q=85"
                  alt="Online tutor teaching"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-xl cursor-pointer hover:scale-110 transition-transform">
                    <svg className="w-16 h-16 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-violet-600" />,
                title: 'Private 1-On-1 Tutoring',
                description: 'Personalized attention tailored to your child\'s learning pace and style'
              },
              {
                icon: <Clock className="w-8 h-8 text-emerald-500" />,
                title: 'Flexible Scheduling',
                description: 'Learn at your convenience with flexible time slots that fit your schedule'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
                title: 'Proven Results',
                description: 'Improved grades and confidence with our effective teaching methods'
              },
              {
                icon: <BookOpen className="w-8 h-8 text-violet-600" />,
                title: 'Comprehensive Curriculum',
                description: 'Complete K-12 Math & Science aligned with Common Core standards'
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
                title: 'Expert Teacher',
                description: 'Experienced educator passionate about making complex concepts simple'
              },
              {
                icon: <Award className="w-8 h-8 text-amber-500" />,
                title: 'Interactive Learning',
                description: 'Engaging online sessions with real-time problem solving and feedback'
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="grade-card bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md group"
                data-testid={`feature-card-${index}`}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
                <p className="font-body text-slate-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects & Grades Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Subjects & <span className="text-violet-600">Grade Levels</span>
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive online tutoring for all K-12 Math and Science subjects
            </p>
          </div>

          {/* Math Section */}
          <div className="mb-12">
            <h3 className="font-display font-bold text-3xl text-slate-900 mb-8 flex items-center gap-3">
              <span className="bg-violet-100 text-violet-600 p-3 rounded-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              Mathematics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { grade: 'K-2', topics: 'Number sense, Basic addition & subtraction, Shapes & patterns' },
                { grade: '3-5', topics: 'Multiplication & division, Fractions, Geometry basics, Word problems' },
                { grade: '6-8', topics: 'Pre-algebra, Ratios & proportions, Integer operations, Basic geometry' },
                { grade: '9-12', topics: 'Algebra I & II, Geometry, Trigonometry, Pre-calculus, Calculus' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="grade-card bg-gradient-to-br from-violet-50 to-white rounded-3xl p-6 border-2 border-violet-100"
                  data-testid={`math-grade-${index}`}
                >
                  <div className="font-display font-bold text-2xl text-violet-600 mb-3">
                    Grade {item.grade}
                  </div>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">{item.topics}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Science Section */}
          <div>
            <h3 className="font-display font-bold text-3xl text-slate-900 mb-8 flex items-center gap-3">
              <span className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Science
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { grade: 'K-2', topics: 'Life science basics, Weather & seasons, Five senses, Simple experiments' },
                { grade: '3-5', topics: 'Earth science, Matter & energy, Life cycles, Scientific method' },
                { grade: '6-8', topics: 'Physical science, Cell biology, Ecosystems, Basic chemistry & physics' },
                { grade: '9-12', topics: 'Biology, Chemistry, Physics, Environmental science, Advanced labs' }
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="grade-card bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-6 border-2 border-emerald-100"
                  data-testid={`science-grade-${index}`}
                >
                  <div className="font-display font-bold text-2xl text-emerald-600 mb-3">
                    Grade {item.grade}
                  </div>
                  <p className="font-body text-slate-600 text-sm leading-relaxed">{item.topics}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">
              Learning <span className="text-violet-600">Tips & Resources</span>
            </h2>
            <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
              Helpful articles and strategies for students and parents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1574660430686-b2a255cfce68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHN0dWRlbnQlMjBzdHVkeWluZyUyMG1hdGh8ZW58MHx8fHwxNzY5ODg3NzMyfDA&ixlib=rb-4.1.0&q=85',
                title: '5 Ways to Make Math Fun for Kids',
                excerpt: 'Discover creative strategies to help your child develop a love for mathematics through engaging activities and real-world applications.',
                date: 'Jan 2026'
              },
              {
                image: 'https://images.unsplash.com/photo-1613271752699-ede48a285196?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxzY2llbmNlJTIwZXhwZXJpbWVudCUyMGtpZHMlMjBmdW58ZW58MHx8fHwxNzY5ODg3NzM3fDA&ixlib=rb-4.1.0&q=85',
                title: 'The Benefits of 1-on-1 Online Tutoring',
                excerpt: 'Learn why personalized online tutoring is more effective than traditional classroom learning for many students.',
                date: 'Jan 2026'
              },
              {
                image: 'https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0dXRvciUyMHRlYWNoaW5nJTIwbGFwdG9wfGVufDB8fHx8MTc2OTg4Nzc0Mnww&ixlib=rb-4.1.0&q=85',
                title: 'How to Prepare for Science Exams',
                excerpt: 'Effective study techniques and test-taking strategies to help your child ace their science exams with confidence.',
                date: 'Jan 2026'
              }
            ].map((post, index) => (
              <Card 
                key={index} 
                className="grade-card bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg"
                data-testid={`blog-card-${index}`}
              >
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="font-body text-sm text-amber-500 font-semibold mb-2">{post.date}</div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">{post.title}</h3>
                  <p className="font-body text-slate-600 mb-4">{post.excerpt}</p>
                  <button className="font-display font-semibold text-violet-600 hover:text-violet-700" data-testid={`read-more-${index}`}>
                    Read More →
                  </button>
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
                <label htmlFor="name" className="font-display font-semibold text-slate-900 block mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12"
                  placeholder="Enter student's name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-display font-semibold text-slate-900 block mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-display font-semibold text-slate-900 block mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 h-12"
                  placeholder="(555) 123-4567"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-display font-semibold text-slate-900 block mb-2">
                  Message (Tell us about current grade and learning goals) *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-50 border-slate-200 focus:border-violet-500 focus:ring-violet-200 rounded-xl p-4 min-h-32"
                  placeholder="E.g., My child is in 7th grade and needs help with Algebra and preparing for upcoming tests."
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-lg font-display font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
                data-testid="submit-appointment-button"
              >
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

      {/* Footer with SEO Locations */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h3 className="font-display font-bold text-2xl mb-4">LearnWithVijayshree</h3>
              <p className="font-body text-slate-300 mb-4">
                Expert online math and science tutor providing personalized 1-on-1 tutoring for K-12 students across the USA.
              </p>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="font-body text-slate-300">info@learnwithvijayshree.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 font-body text-slate-300">
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                <li><a href="#appointment-form" className="hover:text-amber-400 transition-colors">Book Demo</a></li>
                <li><button className="hover:text-amber-400 transition-colors">Subjects</button></li>
                <li><button className="hover:text-amber-400 transition-colors">Blog</button></li>
              </ul>
            </div>

            {/* Serving Locations */}
            <div>
              <h3 className="font-display font-bold text-xl mb-4">
                <MapPin className="w-5 h-5 inline-block mr-2" />
                Serving Students Across USA
              </h3>
              <div className="font-body text-slate-300 space-y-1">
                <p>California Online Tutoring</p>
                <p>New York Online Teacher</p>
                <p>Florida Math & Science Tutor</p>
                <p>Washington Private Tutoring</p>
                <p>Alaska Online Education</p>
                <p className="text-sm text-slate-400 mt-3">
                  And students throughout the United States
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="font-body text-slate-400">
              © 2026 LearnWithVijayshree. All rights reserved. | Private 1-On-1 Online Tutoring | Hire Teacher USA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;