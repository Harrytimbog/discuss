import type { Post } from "@prisma/client";
import { db } from "@/db";

// Find a better name instead of PostWithData. e.g PostForListDisplay, Enriched PostList etc
export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

// Alternative / Shortcut if writing the typescript manually is confusing me. I will just remove the default return type on the function below
// export type PostWithData = Awaited<
//   ReturnType<typeof fetchPostsByTopicSlug>
// >[number];

export function fetchPostsByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
