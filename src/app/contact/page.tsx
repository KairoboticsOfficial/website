export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border border-gray-800 rounded-2xl md:p-12 hover:border-gray-700 transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Interested in robotics, AI, or just want to see what we're building? 
                  We're always excited to connect with fellow students, researchers, and anyone passionate about the future of robotics.
                </p>
              </div>
              
              <div className="border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors lg:w-80">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-orange-500 font-medium text-lg mb-3">hello@kairobotics.com</p>
                <p className="text-gray-300">For general inquiries, collaborations, and partnerships</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center border border-gray-800 rounded-2xl p-12 hover:border-gray-700 transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't hesitate to reach out! We're always excited to meet new people and explore new opportunities.
          </p>
          <a 
            href="mailto:hello@kairobotics.com" 
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Send us an Email
          </a>
        </div>
      </section>
    </div>
  );
}