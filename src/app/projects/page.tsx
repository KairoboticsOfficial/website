export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Kai: A humanoid robot on a budget",
            description: "Kai is a humanoid robot designed to be cost-effective yet performant, aiming for a BOM of under $1200 for the upper body. Everything is 3D printed, and components are taken off-the-shelf where possible",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
            technologies: ["ROS2", "3D Printing", "VLA", "SimpleFOC", "Planetary gear BLDC actuators"],
            status: "In Progress",
            year: "2025"
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Completed":
                return "bg-green-100 text-green-800";
            case "In Progress":
                return "bg-yellow-100 text-yellow-800";
            case "Competition Ready":
                return "bg-blue-100 text-blue-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <section className="mx-auto w-11/12 max-w-7xl mt-20 flex flex-col gap-16 mb-20">
            <header className="text-center">
                <h1 className="font-cormorantGaramond font-light text-6xl text-white mb-4">
                    Our Projects
                </h1>
            </header>

            {/* Featured Project */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Featured Project
                        </span>
                        <h2 className="text-3xl font-bold mb-4">{projects[0].title}</h2>
                        <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
                            {projects[0].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {projects[0].technologies.map((tech, index) => (
                                <span key={index} className="bg-neutral-700 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                            Learn More
                        </button>
                    </div>
                    <div className="relative">
                        <img 
                            src={projects[0].image} 
                            alt={projects[0].title}
                            className="rounded-xl w-full h-80 object-cover shadow-2xl"
                        />
                        <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(projects[0].status)}`}>
                                {projects[0].status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(1).map((project) => (
                    <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                        <div className="relative">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                                    {project.year}
                                </span>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="bg-neutral-100 text-neutral-700 px-2 py-1 rounded text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <button className="w-full bg-neutral-900 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-200 font-medium">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="border border-gray-800 rounded-2xl p-8 text-center hover:border-gray-700 transition-colors">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Want to Build Something Amazing?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Join our team and turn your boldest robotics ideas into reality. We love impossible challenges and we encourage you to push the boundaries of what's possible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
                        Join Our Team
                    </button>
                </div>
            </div>
        </section>
    );
}