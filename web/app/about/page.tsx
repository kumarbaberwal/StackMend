// pages/about.tsx
"use client";
import Head from 'next/head';
import { FiCode, FiUsers, FiAward, FiZap } from 'react-icons/fi';
import Team from '@/components/about/Team';
import Stats from '@/components/about/Stats';
// pages/about.tsx
import Timeline from '@/components/about/Timeline';
import Testimonials from '@/components/about/Testimonials';


export default function About() {
  return (
    <>
      <Head>
        <title>About StackMend | AI-Powered Code Collaboration</title>
        <meta name="description" content="StackMend combines AI and community expertise to revolutionize debugging." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Mending Code, Together</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            StackMend is where AI meets human expertise to solve coding errors faster and smarter.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To eliminate the frustration of debugging by providing <span className="text-blue-600 font-medium">instant AI-curated fixes</span> and <span className="text-purple-600 font-medium">community-verified solutions</span>—all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why StackMend?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FiZap size={32} className="text-blue-600" />, title: "AI-Powered Fixes", desc: "Get instant solutions tailored to your code." },
              { icon: <FiUsers size={32} className="text-purple-600" />, title: "Community Wisdom", desc: "Vote on the best answers like Reddit." },
              { icon: <FiAward size={32} className="text-amber-500" />, title: "Expert Badges", desc: "Top contributors earn recognition." },
              { icon: <FiCode size={32} className="text-green-600" />, title: "Open Source", desc: "Contribute to our GitHub repository." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Stats Section */}
       <Timeline />
        <Testimonials />
        <Stats />

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Debugging Workflow?</h2>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Join StackMend Now
          </button>
        </div>
      </section>
    </>
  );
}
