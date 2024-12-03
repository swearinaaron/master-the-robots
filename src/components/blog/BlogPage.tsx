import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Laying the Foundations: Your Journey into AI Begins Here",
    excerpt: "Start your AI journey with fundamental concepts, principles, and practical applications. Learn why building a strong foundation is crucial for mastering AI.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=foundations&backgroundColor=8B5CF6&size=400",
    category: "Foundations"
  },
  {
    title: "Practical AI Tools: From Theory to Implementation",
    excerpt: "Dive into hands-on AI development using popular tools and frameworks. Learn to implement AI solutions in real-world scenarios.",
    date: "Jan 12, 2024",
    readTime: "6 min read",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=practical&backgroundColor=3B82F6&size=400",
    category: "Tools & Applications"
  },
  {
    title: "Advanced AI Mastery: Building Sophisticated Systems",
    excerpt: "Advanced techniques and methodologies for building sophisticated AI systems. Take your AI skills to the next level with expert insights.",
    date: "Jan 10, 2024",
    readTime: "10 min read",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=mastery&backgroundColor=10B981&size=400",
    category: "Advanced Topics"
  },
  {
    title: "AI Leadership: Strategic Implementation in Business",
    excerpt: "Learn to lead AI initiatives and develop strategic frameworks for AI implementation in business contexts. Navigate the future of AI leadership.",
    date: "Jan 8, 2024",
    readTime: "7 min read",
    imageUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=leadership&backgroundColor=F59E0B&size=400",
    category: "Leadership & Strategy"
  }
];

export function BlogPage() {
  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Deep dives and insights that complement our AI mastery courses
        </p>
      </div>

      {/* Blog posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="h-48 bg-purple-100 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-contain p-4"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mt-2"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 