import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, TrendingUp } from "lucide-react";

const Index = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // Ab humne 'published' wali shart hata di hai taake data nazar aaye
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Dynamic SEO Variables
  const latestPostTitle = posts.length > 0 ? posts[0].title : "Crypto Uptrend";
  const seoDescription = posts.length > 0 
    ? posts[0].content.substring(0, 160) + "..." 
    : "Stay updated with the latest crypto trends and news on Crypto Uptrend.";

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Helmet>
        <title>{latestPostTitle} | Crypto Uptrend</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={latestPostTitle} />
        <meta property="og:description" content={seoDescription} />
      </Helmet>

      {/* --- HEADER / NAVBAR --- */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <TrendingUp className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Crypto<span className="text-blue-600">Uptrend</span>
            </span>
          </div>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
            Live Market Updates
          </Badge>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Breaking News</h1>
          <p className="text-gray-500">Latest updates from the world of Cryptocurrency</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-[300px] w-full rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-none">Crypto News</Badge>
                      <div className="flex items-center text-gray-400 text-xs gap-1">
                        <Clock size={12} />
                        {new Date(post.created_at).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold leading-snug group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-4 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="mt-6 pt-4 border-t flex justify-end">
                      <span className="text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                        Read Full Story →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-2xl border-2 border-dashed">
                <p className="text-gray-400 text-lg">Abhi tak koi news publish nahi hui.</p>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="mt-20 border-t bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© 2026 Crypto Uptrend. Managed by Tahir SanaUllah.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
