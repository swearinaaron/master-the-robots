import React from 'react';
import { Code, Brain, CheckCircle } from 'lucide-react';
import { withDevMode } from '../../context/DeveloperMode';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Learn by doing with hands-on projects and real-world applications',
    icon: Code,
  },
  {
    title: 'Expert Guidance',
    description: 'Get support from experienced AI and robotics professionals',
    icon: Brain,
  },
  {
    title: 'Structured Path',
    description: 'Follow a clear learning path from basics to advanced concepts',
    icon: CheckCircle,
  },
];

function FeaturesComponent() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <feature.icon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Features = withDevMode(FeaturesComponent, 'Features');