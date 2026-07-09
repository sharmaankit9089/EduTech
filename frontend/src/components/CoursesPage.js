import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Card } from './ui/card';
import { courses } from '../data/content';
import { colorClasses } from '../lib/courseColors';

const CourseCard = ({ course }) => {
  const c = colorClasses[course.color];
  return (
    <Link to={`/courses/${course.id}`} className="group" data-testid={`courses-card-${course.id}`}>
      <Card className="grade-card bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl h-full flex flex-col">
        <div className="h-44 overflow-hidden">
          <img src={course.image} alt={`${course.name} online tutoring`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <span className={`${c.badge} self-start px-3 py-1 rounded-full text-xs font-display font-bold mb-3`}>Grades covered: {course.levels.length}</span>
          <h3 className={`font-display font-bold text-2xl text-slate-900 mb-2 ${c.hoverText}`}>{course.name}</h3>
          <p className="font-body text-slate-600 text-sm mb-4 flex-1">{course.tagline}</p>
          <span className={`inline-flex items-center gap-2 font-display font-semibold ${c.grade}`}>
            View syllabus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Card>
    </Link>
  );
};

const CoursesPage = () => {
  useEffect(() => {
    document.title = 'Online Courses — Math, Science, English, Hindi & Phonics | LearnWithVijayshree';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Explore our online tutoring courses: Mathematics, Science, English, Hindi and Phonics for K-12 students. Private 1-on-1 lessons with grade-wise syllabus. Book a free demo.');
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-br from-violet-50 to-amber-50 py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <span className="bg-amber-400 text-slate-900 px-4 py-2 rounded-full text-sm font-display font-bold">K-12 Online Tutoring</span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mt-6 mb-6">
            Our <span className="text-violet-600">Courses</span>
          </h1>
          <p className="font-body text-lg text-slate-600 max-w-3xl mx-auto">
            Private 1-on-1 online lessons in Mathematics, Science, English, Hindi and Phonics — each with a clear, grade-wise syllabus tailored to your child.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="font-display font-bold text-3xl text-white mb-4">Not sure which course fits?</h2>
          <p className="font-body text-violet-100 mb-6 flex items-center justify-center gap-2 flex-wrap">
            <CheckCircle className="w-5 h-5" /> Book a FREE demo and we'll assess your child's needs together.
          </p>
          <Link to="/#appointment-form" className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-4 text-lg font-display font-bold transition-colors" data-testid="courses-cta-button">
            Book Free Demo Class
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
