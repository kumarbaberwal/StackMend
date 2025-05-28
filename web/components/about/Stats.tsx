// components/about/Stats.tsx
import CountUp from 'react-countup';
import { FiCode, FiUsers, FiThumbsUp, FiClock } from 'react-icons/fi';

export default function Stats() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { value: 10000, label: "Errors Resolved", icon: <FiCode className="mx-auto mb-4 text-blue-600" size={24} /> },
            { value: 5000, label: "Active Developers", icon: <FiUsers className="mx-auto mb-4 text-purple-600" size={24} /> },
            { value: 95, label: "Satisfaction Rate", icon: <FiThumbsUp className="mx-auto mb-4 text-green-600" size={24} />, suffix: "%" },
            { value: 24, label: "AI Support", icon: <FiClock className="mx-auto mb-4 text-amber-500" size={24} />, suffix: "/7" },
          ].map((stat, idx) => (
            <div key={idx} className="py-6">
              {stat.icon}
              <CountUp 
                end={stat.value} 
                duration={2.5} 
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2" 
              />
              {stat.suffix && <span className="text-4xl font-bold text-gray-900 dark:text-white">{stat.suffix}</span>}
              <p className="text-gray-600 dark:text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
