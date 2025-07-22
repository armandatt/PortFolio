'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaDatabase, FaRobot, FaServer, FaDocker, FaCodeBranch, FaLayerGroup } from 'react-icons/fa';
import { Leaf } from 'lucide-react';

const services = [
  {
    icon: <FaLayerGroup size={28} />,
    title: 'MERN Stack Development',
    description: 'Building scalable web applications using MongoDB, Express.js, React, and Node.js with clean and modular code architecture.',
  },
  {
    icon: <FaRobot size={28} />,
    title: 'Agentic AI Systems',
    description: 'Designing autonomous agents and tools for reasoning, planning, and interacting with users or APIs intelligently.',
  },
  {
    icon: <FaCodeBranch size={28} />,
    title: 'LLM Workflows',
    description: 'Implementing custom Large Language Model pipelines, prompt engineering, embeddings, and retrieval-augmented generation.',
  },
  {
    icon: <FaDatabase size={28} />,
    title: 'Database Design & Optimization',
    description: 'Designing relational and NoSQL databases, optimizing performance, indexing, query structure, and schema modeling.',
  },
  {
    icon: <FaServer size={28} />,
    title: 'Serverless Backends',
    description: 'Building ultra-scalable and cost-efficient APIs using serverless platforms like Cloudflare Workers, Vercel, and AWS Lambda.',
  },
  {
    icon: <FaDocker size={28} />,
    title: 'Dockerization & CI/CD',
    description: 'Creating containerized environments with Docker, setting up GitHub Actions & CI/CD pipelines for efficient DevOps workflows.',
  },
];

export default function ServicesSection() {
  return (
    <section id= "services" className="w-full py-12 bg-[#191f0a]">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Leaf className="h-6 w-6 text-[#b5c67b]" />
            Services Offered
            <Leaf className="h-6 w-6 text-[#b5c67b]" />
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            “Passionate about backend systems, AI, and efficient software workflows.”
          </p>
          <div className="flex justify-center mt-4">
            <div className="h-[5px] w-[100px] bg-[#7e9e3e] rounded-sm"></div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full border border-[#7dd155] hover:shadow-[0_0_12px_#7dd155aa] transition-all duration-300 rounded-xl bg-[#101308] p-5"
            >
              <CardHeader className="flex items-center gap-4 p-0 pb-3">
                <div className="rounded-full p-2 bg-[#1a1f0e] border border-[#7dd155]">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-white font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[#c0d7b1] text-base leading-relaxed mt-2">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}









