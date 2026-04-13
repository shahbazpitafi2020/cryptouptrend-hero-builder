import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, ArrowLeft } from "lucide-react";
import { timeAgo, getPostImage } from "@/lib/postUtils";
import type { Post } from "@/hooks/usePosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug!)
        .maybeSingle();
      if (error) throw error;
      if (!data) throw new Error("Post not found");
      return data as Post;
    },
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["related-posts", post?.category, post?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .eq("category", post!.category)
        .neq("id", post!.id)
        .order("published_at", { ascending: false })
        .limit(4);
      if (error) throw error;
      return data as Post[];
    },
    enabled: !!post,
  });

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="container py-10 max-w-4xl mx-auto">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-64 w-full mb-6" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-2" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Link to="/" className="text-primary hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | CryptoUptrend</title>
        <meta name="description" content={post.excerpt || post.title} />
      </Helmet>
      <Navbar />

      <article className="container py-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground">{post.category}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-primary text-primary-foreground text-[11px]">{post.category}</Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {post.published_at ? timeAgo(post.published_at) : "Just now"}
          </span>
        </div>

        {/* Featured Image */}
        {post.featured_image_url && (
          <img
            src={post.featured_image_url}
            alt={post.title}
            className="w-full max-h-[480px] object-cover mb-8"
          />
        )}

        {/* Content */}
        <div className="prose prose-sm md:prose-base max-w-none text-foreground leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="container py-8 max-w-4xl mx-auto border-t border-border">
          <h2 className="text-base font-semibold text-section-title mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedPosts.map((rp, i) => (
              <Link
                key={rp.id}
                to={`/post/${rp.slug}`}
                className="group flex gap-3 p-3 bg-card border border-border hover:shadow-sm transition-shadow"
              >
                <img
                  src={getPostImage(rp, i)}
                  alt={rp.title}
                  className="w-20 h-20 object-cover flex-shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground mt-1">
                    {rp.published_at ? timeAgo(rp.published_at) : "Just now"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
};

export default PostPage;
