// Is code ko copy karke src/pages/Admin.tsx mein paste karein
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Plus, Send } from "lucide-react";

const Admin = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // SIRF AAPKA ACCESS
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
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") + "-" + Date.now();
    const { error } = await supabase.from("posts").insert({
      title,
      slug,
      content,
      published: false, 
      user_id: user?.id!
    });
    if (!error) {
      toast({ title: "Submitted!", description: "Tahir Bhai ko approval ke liye bhej diya gaya hai." });
      setTitle(""); setContent(""); setShowForm(false);
      fetchPosts();
    }
  };

  const handleApprove = async (id: string) => {
    if (!isAdmin) return;
    const { error } = await supabase.from("posts").update({ published: true }).eq("id", id);
    if (!error) {
      toast({ title: "Approved!", description: "Post ab live hai." });
      fetchPosts();
    }
  };

  if (!user) return <div className="p-10 text-center text-gray-500">Please login to access the dashboard.</div>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">CryptoUptrend Dashboard</h1>
            <p className="text-sm text-gray-500">Logged in as: <span className="text-blue-600 font-semibold">{user?.email}</span> {isAdmin ? " (Admin)" : ""}</p>
          </div>
          <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
            {showForm ? "Cancel" : <><Plus className="mr-2" size={16}/> New Post</>}
          </Button>
        </div>

        {showForm && (
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 mb-8 animate-in fade-in zoom-in duration-200">
            <h2 className="text-lg font-semibold mb-4">Write New Crypto News</h2>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <Input placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              <Textarea placeholder="Write content here..." className="min-h-[200px]" value={content} onChange={(e) => setContent(e.target.value)} required />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Send className="mr-2" size={16}/> Submit for Approval
              </Button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
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
                <tr key={post.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-medium text-gray-700">{post.title}</td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {post.published ? <CheckCircle className="mr-1" size={12}/> : <Clock className="mr-1" size={12}/>}
                      {post.published ? 'LIVE' : 'PENDING'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    {!post.published && isAdmin ? (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => handleApprove(post.id)}>
                        Approve & Publish
                      </Button>
                    ) : (
                      <span className="text-gray-400 text-sm italic">{post.published ? "Published ✅" : "Waiting..."}</span>
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
