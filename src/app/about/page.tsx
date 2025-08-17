export default function About() {
    const teamMembers = [
        {
            name: "Flim de Jong",
            email: "f.dejong-5@student.utwente.nl",
            role: "AI engineer",
            description: "Robotics student passionate about robot learning and autonomy",
            image: "🤖"
        },
    ];

    return (
        <section className="min-h-screen bg-black">
            {/* Hero Banner - Just Image */}
            {/* <div className="h-96 bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
                <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                        </svg>
                    </div>
                    <p className="text-lg opacity-75">Team Photo Placeholder</p>
                </div>
            </div> */}

            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Who We Are Section */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">About</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-gray-300 leading-relaxed mb-16 text-center">
                            We are a multidisciplinary student group with big ambitions and unrealistic goals. 
                            We're still learning and don't have the resources of professional labs, but we're passionate about robotics and AI, and we believe this passion can take us very far.
                            Join us on our journey!
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-16">
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-8">Our Mission</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    We believe robotics will transform the physical world the way AI has transformed the digital world. 
                                    Although we're not there yet, see: {" "}
                                    <a 
                                    href="https://agentic.substack.com/p/whats-missing-for-robot-foundation" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 underline">
                                    What's Missing for Robot Foundation Models
                                    </a>

                                    .{" "}
                                    Our mission is to contribute to that transformation by developing accessible robotic solutions and advancing the field through hands-on research and open collaboration.

                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Our approach is simple: read everything, build everything, and work with anyone willing to teach us.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-semibold text-white mb-8">What We Do</h3>
                                <div className="space-y-5">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-300">Democratize robotics through developing affordable and accessible robotic platforms</p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-300">Collaborate with fellow students, researchers and industry professionals</p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-300">Learn by implementing papers and models with the goal of conducting impactful research</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meet Our Team Section */}
                <div className="mb-32">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Team</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
                                {/* Profile Picture Placeholder */}
                                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                                <p className="text-orange-400 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Areas Section */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white text-center mb-16">Research Areas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center p-8 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
                            <div className="w-16 h-16 bg-orange-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🤖</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4">Vision-Language-Action Models</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Developing data-efficient VLA models that can understand instructions, perceive environments, and control robots across different platforms
                            </p>
                        </div>

                        <div className="text-center p-8 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
                            <div className="w-16 h-16 bg-orange-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🔧</span>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4">Accessible Robotic Platforms</h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Designing open-source, low-cost robot hardware that democratizes robotics research and makes experimentation accessible to everyone
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}