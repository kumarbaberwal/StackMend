// components/about/Timeline.tsx
import { FiCode, FiUsers, FiZap, FiAward } from 'react-icons/fi';

export default function Timeline() {
  const milestones = [
    {
      year: "2023",
      event: "StackMend Founded",
      icon: <FiCode className="text-blue-600" size={20} />,
      desc: "Launched as an open-source project to solve debugging frustrations.",
    },
    {
      year: "2024",
      event: "AI Integration",
      icon: <FiZap className="text-purple-600" size={20} />,
      desc: "Integrated GPT-4 for real-time code suggestions.",
    },
    {
      year: "2025",
      event: "10K+ Users",
      icon: <FiUsers className="text-green-600" size={20} />,
      desc: "Grew to a thriving community of developers.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Journey
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
          {milestones.map((milestone, idx) => (
            <div key={idx} className="relative pl-16 mb-12">
              <div className="absolute left-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-blue-500 dark:border-blue-400">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {milestone.year} — {milestone.event}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
