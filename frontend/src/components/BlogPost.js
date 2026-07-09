import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import Navbar from './Navbar';
import Footer from './Footer';
import { blogPosts } from '../data/content';
import { CONTACT } from '../data/contact';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | LearnWithVijayshree Blog`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', post.excerpt);
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6" data-testid="blog-not-found">
        <h1 className="font-display font-bold text-4xl text-slate-900 mb-4">Article not found</h1>
        <Button onClick={() => navigate('/')} className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6" data-testid="back-home-button">
          Back to Home
        </Button>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const paragraphs = post.content.slice();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 font-display font-semibold text-violet-600 hover:text-violet-700 mb-8" data-testid="blog-back-link">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>

        <div className="mb-6">
          <span className="bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-display font-bold" data-testid="blog-category">
            {post.category}
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 leading-tight mb-6" data-testid="blog-title">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-slate-500 font-body mb-8">
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>

        <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-3xl shadow-lg mb-10" data-testid="blog-hero-image" />

        <div className="prose prose-lg max-w-none space-y-6">
          {paragraphs.map((para, i) => (
            <p key={i} className="font-body text-lg text-slate-700 leading-relaxed" data-testid={`blog-paragraph-${i}`}>
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-8 md:p-10 text-center shadow-xl">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">Ready to start learning?</h3>
          <p className="font-body text-violet-100 mb-6">Book your FREE 1-on-1 demo class today. No commitment required.</p>
          <Button onClick={() => navigate('/#appointment-form')} className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full px-8 py-6 text-lg font-display font-bold" data-testid="blog-cta-button">
            Book Free Demo Class
          </Button>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-6">Keep reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="grade-card bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg block"
                  data-testid={`related-post-${r.slug}`}
                >
                  <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <div className="font-body text-sm text-amber-500 font-semibold mb-2">{r.date}</div>
                    <h4 className="font-display font-bold text-lg text-slate-900">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Floating WhatsApp */}
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl"
        data-testid="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
      <Footer />
    </div>
  );
};

export default BlogPost;
