// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts';

export default function BlogIndex() {
  const posts = getSortedPostsData();
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-6">
          {posts.map((post: any) => (
            <article key={post.id} className="border-b border-gray-800 pb-6">
              <Link 
                href={`/blog/${post.id}`}
                className="text-2xl font-semibold hover:text-blue-400 transition-colors block"
              >
                {post.title}
              </Link>
              <p className="text-gray-400 mt-2">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}