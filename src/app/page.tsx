import Link from 'next/link'
import { getSortedPostsData, type BlogPostData } from '../../lib/posts';

// Make the component async to fetch data
async function Home() {
  // Fetch the posts data
  const allPostsData: BlogPostData[] = getSortedPostsData();
  const latestPost = allPostsData[0]; // Get the most recent post
  
  return (
    <>
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center mt-28">  
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            We Build
            <br />
            <span className="text-gray-300">Intelligent Robotics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            University of Twente's embodied AI robotics community.
          </p>
          
          {/* Call to Action */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors w-full sm:w-80"
            />
            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-colors w-full sm:w-auto">
              Get Updates
            </button>
          </div>
        </div>
      </div>     

      {/* Featured Project Section */}
      <section className="pb-16 pt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Project</h2>
              <span className="px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-400 rounded-full text-sm font-medium">
                In Progress
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Dual SO-101 Arms</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Low-cost dual arm teleoperation setup designed for testing VLA (Vision-Language-Action) algorithms. 
                  Our platform makes advanced robotics research accessible with off-the-shelf components and 
                  open-source software.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">ROS2</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">3D Printing</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">Lerobot</span>
                  <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">VLA Models</span>
                </div>
                <Link href="/projects" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition-colors">
                  View All Projects
                </Link>
              </div>
              
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                <div className="bg-gray-900 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🦾</div>
                    <p>Project Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Blog Post Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-gray-700 transition-colors">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Latest from Our Blog</h2>
              <Link href="/blog" className="text-orange-400 hover:text-orange-300 font-medium">
                View All Posts →
              </Link>
            </div>
            
            {latestPost ? (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="border border-gray-800 rounded-lg overflow-hidden">
                  <div className="bg-gray-900 h-80 flex items-center justify-center">
                    {latestPost.image ? (
                      <img 
                        src={latestPost.image} 
                        alt={latestPost.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📝</div>
                        <p>Blog Post Image</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-orange-400 text-sm">
                      {latestPost.date ? new Date(latestPost.date).toLocaleDateString() : 'No date'}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 text-sm">{latestPost.readTime || '5 min read'}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {latestPost.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {latestPost.excerpt || latestPost.description || 'Read this blog post to learn more...'}
                  </p>
                  {latestPost.tags && latestPost.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {latestPost.tags.map((tag: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={`/blog/${latestPost.id}`} className="text-orange-400 hover:text-orange-300 font-medium">
                    Read Full Post →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <div className="text-4xl mb-2">📝</div>
                  <p>No blog posts available yet.</p>
                </div>
                <p className="text-gray-400">Check back soon for our latest updates!</p>
              </div>
            )}
          </div>
        </div>
      </section>       
    </>
  )
}
 
export default Home