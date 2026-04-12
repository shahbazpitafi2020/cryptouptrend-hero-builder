import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Post = Tables<"posts">;

export const usePosts = (category?: string, limit?: number) => {
  return useQuery({
    queryKey: ["posts", category, limit],
    queryFn: async () => {
      let query = supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false });

      if (category) {
        query = query.eq("category", category);
      }
      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as Post[];
    },
  });
};

export const useAllPublishedPosts = (limit = 20) => {
  return useQuery({
    queryKey: ["all-posts", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data as Post[];
    },
  });
};
