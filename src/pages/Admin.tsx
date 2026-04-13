import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Clock, Plus, Send } from "lucide-react";
import RichTextEditor from "@/components/RichTextEditor";

const Admin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const ADMIN_EMAIL = "shahbazpitafi2020@gmail.com";
  const isAdmin = user?.email === ADMIN_EMAIL;

  useEffect(() => {
    fetchPosts();
  }, [user]);

  const fetchPosts = async () => {
    const { data, error } = await supabase.from("posts").select("*").order("created_at", { ascending: false });
    if (!error) setPosts(data || []);
    setLoading(false);
  };

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || content === "<p></p>") {
      toast({ title: "Error", description: "Content is required.", variant: "destructive" });
      return;
    }
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now();
    const { error } = await supabase.from("posts").insert({
      title,
      slug,
      content,
      published: false,
      user_id: user?.id!,
    });
    if (!error) {
      toast({ title: "Submitted!", description: "Post submitted for approval." });
      setTitle(""); setContent(""); setShowForm(false);
      fetchPosts();
    }
  };

  const handleApprove = async (id: string) => {
    if (!isAdmin) return;
    const { error } = await supabase.from("posts").update({ published: true, published_at: new Date().toISOString() }).eq("id", id);
    if (!error) {
      toast({ title: "Approved!", description: "Post is now live." });
      fetchPosts();
    }
  };

  if (!user) return <div className="p-10 text-center text-muted-foreground">Please login to access the dashboard.</div>;

  return (
    <div className="p-8 bg-background min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-card p-6 rounded-xl shadow-sm border border-border">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CryptoUptrend Dashboard</h1>
            <p className="text-sm text-muted-foreground">Logged in as: <span className="text-primary font-semibold">{user?.email}</span> {isAdmin ? " (Admin)" : ""}</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-primary hover:bg-primary/90">
            {showForm ? "Cancel" : <><Plus className="mr-2" size={16} /> New Post</>}
          </Button>
        </div>

        {showForm && (
          <div className="bg-card p-6 rounded-xl shadow-md border-t-4 border-primary mb-8 animate-in fade-in zoom-in duration-200">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Write New Crypto News</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Input placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <RichTextEditor content={content} onChange={setContent} />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Send className="mr-2" size={16} /> Submit for Approval
              </Button>
            </form>
          </div>
        )}

        <div className="bg-card rounded-xl shadow-md overflow-hidden border border-border">
          <table className="w-full text-left">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="p-4">Post Title</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium text-foreground">{post.title}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${post.published ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {post.published ? <CheckCircle className="mr-1" size={12} /> : <Clock className="mr-1" size={12} />}
                      {post.published ? "LIVE" : "PENDING"}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {!post.published && isAdmin ? (
                      <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleApprove(post.id)}>
                        Approve & Publish
                      </Button>
                    ) : (
                      <span className="text-muted-foreground text-sm italic">{post.published ? "Published ✅" : "Waiting..."}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
