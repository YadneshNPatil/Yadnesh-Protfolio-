import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Transitioning from Logistics to ERP: A Complete Guide",
      excerpt: "Learn how my 6+ years of logistics experience enabled a seamless transition into ERP consulting with Microsoft Dynamics 365 F&O.",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Career Transition",
      categoryColor: "bg-primary/10 text-primary",
      tags: ["Career", "ERP", "Logistics", "D365 F&O"],
      featured: true
    },
    {
      id: 2,
      title: "Microsoft Dynamics 365 F&O: SCM Module Deep Dive",
      excerpt: "Explore the powerful Supply Chain Management features in D365 F&O and how they transform business operations.",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "Technical",
      categoryColor: "bg-accent/10 text-accent",
      tags: ["D365 F&O", "SCM", "Supply Chain"],
      featured: false
    },
    {
      id: 3,
      title: "Best Practices for ERP Implementation: Lessons from the Field",
      excerpt: "Key insights and proven strategies for successful ERP implementations based on real-world consulting experience.",
      date: "2025-01-05",
      readTime: "6 min read",
      category: "Best Practices",
      categoryColor: "bg-secondary/10 text-secondary",
      tags: ["ERP Implementation", "Best Practices", "Consulting"],
      featured: false
    },
    {
      id: 4,
      title: "Procurement Process Optimization in D365 F&O",
      excerpt: "How to configure and optimize procurement workflows in Microsoft Dynamics 365 F&O for maximum efficiency.",
      date: "2024-12-28",
      readTime: "7 min read",
      category: "Technical",
      categoryColor: "bg-accent/10 text-accent",
      tags: ["Procurement", "D365 F&O", "Process Optimization"],
      featured: false
    },
    {
      id: 5,
      title: "The Future of ERP: Trends and Predictions for 2025",
      excerpt: "Analyzing emerging trends in ERP technology and what they mean for businesses and consultants.",
      date: "2024-12-20",
      readTime: "4 min read",
      category: "Industry Insights",
      categoryColor: "bg-green-500/10 text-green-600",
      tags: ["Future Trends", "ERP", "Industry Analysis"],
      featured: false
    },
    {
      id: 6,
      title: "Common ERP Migration Challenges and Solutions",
      excerpt: "Identifying and addressing the most common challenges organizations face during ERP migrations.",
      date: "2024-12-15",
      readTime: "6 min read",
      category: "Problem Solving",
      categoryColor: "bg-orange-500/10 text-orange-600",
      tags: ["Migration", "Challenges", "Solutions"],
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ERP Insights & Blog</h2>
          <p className="text-xl text-neutral max-w-3xl mx-auto">
            Sharing knowledge and insights from the world of ERP consulting and implementation
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {blogPosts.filter(post => post.featured).map(post => (
            <Card key={post.id} className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={post.categoryColor}>{post.category}</Badge>
                  <Badge variant="outline" className="border-primary/30">Featured</Badge>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{post.title}</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button className="bg-primary text-white hover:bg-secondary transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={post.categoryColor}>{post.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{post.tags.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full text-sm">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Stay Updated with ERP Insights
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Get the latest articles on ERP implementation, best practices, and industry insights delivered directly to your inbox.
              </p>
              <Button className="bg-primary text-white hover:bg-secondary transition-colors duration-300">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}