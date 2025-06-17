import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaCloud, FaShieldAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface TrainingModule {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: string;
  schedule: string;
  prerequisites: string[];
}

const modules: TrainingModule[] = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: "Oracle Database Administration",
    description: "Master the fundamentals of Oracle database administration and management",
    topics: [
      "Database Architecture",
      "Backup and Recovery",
      "Performance Tuning",
      "Security Management",
      "High Availability",
      "Data Guard"
    ],
    duration: "4 weeks",
    level: "Intermediate",
    price: "$1,999",
    schedule: "Mon-Fri, 9:00 AM - 1:00 PM",
    prerequisites: [
      "Basic SQL knowledge",
      "Understanding of database concepts",
      "Linux/Unix basics"
    ]
  },
  {
    title: "Oracle Cloud Infrastructure",
    description: "Learn to deploy and manage applications on Oracle Cloud",
    topics: [
      "Cloud Architecture",
      "Virtual Machines",
      "Container Services",
      "Networking",
      "Storage Solutions",
      "Security & Compliance"
    ],
    duration: "3 weeks",
    level: "Advanced",
    price: "$2,499",
    schedule: "Mon-Fri, 2:00 PM - 6:00 PM",
    prerequisites: [
      "Cloud computing basics",
      "Networking fundamentals",
      "Linux administration"
    ]
  },
  {
    title: "Oracle Security",
    description: "Comprehensive security training for Oracle environments",
    topics: [
      "Access Control",
      "Encryption",
      "Audit Management",
      "Compliance",
      "Security Policies",
      "Threat Prevention"
    ],
    duration: "2 weeks",
    level: "Intermediate",
    price: "$1,799",
    schedule: "Mon-Fri, 10:00 AM - 2:00 PM",
    prerequisites: [
      "Database administration basics",
      "Security concepts",
      "Network security fundamentals"
    ]
  }
];

const TrainingPage = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredModules = selectedLevel 
    ? modules.filter(module => module.level === selectedLevel)
    : modules;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white mb-4">Oracle Training Programs</h1>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setSelectedLevel(null)}
              className={`px-4 py-2 rounded-lg ${
                selectedLevel === null 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Levels
            </button>
            <button 
              onClick={() => setSelectedLevel('Beginner')}
              className={`px-4 py-2 rounded-lg ${
                selectedLevel === 'Beginner' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setSelectedLevel('Intermediate')}
              className={`px-4 py-2 rounded-lg ${
                selectedLevel === 'Intermediate' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Intermediate
            </button>
            <button 
              onClick={() => setSelectedLevel('Advanced')}
              className={`px-4 py-2 rounded-lg ${
                selectedLevel === 'Advanced' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Advanced
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          {filteredModules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{module.title}</h2>
                    <p className="text-gray-400">{module.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      module.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      module.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {module.level}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                      {module.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                      {module.price}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Course Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">Schedule:</span>
                        <span>{module.schedule}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">Duration:</span>
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="font-medium">Price:</span>
                        <span>{module.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Prerequisites</h3>
                    <ul className="space-y-2">
                      {module.prerequisites.map((prerequisite, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {prerequisite}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setActiveModule(activeModule === index ? null : index)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    {activeModule === index ? (
                      <>
                        <span>Hide Topics</span>
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        <span>Show Topics</span>
                        <FaChevronDown />
                      </>
                    )}
                  </button>

                  {activeModule === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <h3 className="text-lg font-semibold text-white mb-4">Topics Covered</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-center gap-2 bg-gray-700/50 p-3 rounded-lg"
                          >
                            <svg
                              className="w-4 h-4 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-300">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TrainingPage; 