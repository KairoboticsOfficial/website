// app/blog/[id]/page.tsx
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Read markdown file from /posts directory
async function getBlogPost(id: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filePath = path.join(postsDirectory, `${id}.md`);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse frontmatter and content
    const { data, content } = matter(fileContents);
    
    return {
      title: data.title || 'Untitled',
      date: data.date || null,
      author: data.author || null,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.date && (
          <p className="text-gray-600 mb-2">
            Published on {new Date(post.date).toLocaleDateString()}
          </p>
        )}
        {post.author && (
          <p className="text-gray-600 mb-2">By {post.author}</p>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      
      <article className="prose prose-lg max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mt-8 mb-6 text-white">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl font-semibold mt-8 mb-4 text-white">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl font-medium mt-6 mb-3 text-white">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-xl font-medium mt-4 mb-2 text-gray-800">
                {children}
              </h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-lg font-medium mt-4 mb-2 text-gray-800">
                {children}
              </h5>
            ),
            h6: ({ children }) => (
              <h6 className="text-base font-medium mt-4 mb-2 text-gray-800">
                {children}
              </h6>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-white">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-gray-700">
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic bg-blue-50 py-2 my-6">
                {children}
              </blockquote>
            ),
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              ) : (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}