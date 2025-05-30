// components/about/Team.tsx
'use client';

import Image from "next/image";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import alexImg from "@/components/assets/teamMember1.png";
import priyaImg from "@/components/assets/teamMember2.png";
import jordanImg from "@/components/assets/teamMember3.png";
import morganImg from "@/components/assets/teamMember4.png";
import { StaticImageData } from "next/image";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  img: StaticImageData;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const team: TeamMember[] = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Ex-Google engineer passionate about open-source tooling.",
    img: alexImg,
    social: { github: "https://github.com", linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "Priya Patel",
    role: "Lead AI Engineer",
    bio: "ML specialist with a focus on developer productivity.",
    img: priyaImg,
    social: { github: "https://github.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Jordan Smith",
    role: "Frontend Architect",
    bio: "Next.js expert and UI/UX enthusiast.",
    img: jordanImg,
    social: { github: "https://github.com", twitter: "https://twitter.com" },
  },
  {
    name: "Morgan Lee",
    role: "Community Lead",
    bio: "Connects developers with the right solutions.",
    img: morganImg,
    social: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <Image
                src={member.img}
                alt={member.name}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <FiLinkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <FiTwitter size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
