export default function Lab() {
  const robots = [
    {
      id: 1,
      name: "Dual SO-101 arms",
      description: "Low-cost dual SO-101 teleoperation setup to test out VLA (Vision-Language-Action) algorithms and more. The arms are equipped with a camera and teleoperate using 2 leader arms.",
      specs: [
        "Feetech servo based",
        "Lerobot compatible"
      ],
      image: "/robot-arm.jpg",
      status: "Active"
    },
  ];

  const equipment = [
    {
      name: "3D Printers",
      items: ["Qidi Q1 pro", "Bambu Lab P1S",
      "─── Materials ───",
      "PLA+", 
      "PETG", 
      "TPU" ]
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className=" rounded-2xl p-8 md:p-12 hover:border-gray-700 transition-colors">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Lab</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Welcome to our Lab, I mean student rooms 😅.
              This is our collection of robots, 3D printers, and other equipment that powers our research and development.
              Everything you see here is owned by us, and we're always open to collaborations and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Robots Showcase */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Robots</h2>
          
          <div className="space-y-16">
            {robots.map((robot, index) => (
              <div key={robot.id} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white">{robot.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      robot.status === 'Active' ? 'bg-green-500 bg-opacity-20 text-black' :
                      robot.status === 'In Development' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
                      'bg-orange-500 bg-opacity-20 text-orange-400'
                    }`}>
                      {robot.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {robot.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Specifications:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {robot.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:border-gray-700 transition-colors">
                    <img
                      src={robot.image}
                      alt={robot.name}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Lab Equipment</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {equipment.map((category, index) => (
              <div key={index} className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center border border-gray-800 rounded-2xl p-12 hover:border-gray-700 transition-colors">
          <h2 className="text-3xl font-bold mb-4 text-white">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8">
            We are always open to partnerships, research collaborations, and exciting new projects.
          </p>
          <a href="/contact" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}