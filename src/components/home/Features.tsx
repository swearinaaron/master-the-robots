import React from 'react';
import { Brain, CheckCircle, ArrowRight } from 'lucide-react';
import { withDevMode } from '../../context/DeveloperMode';

const features = [
  {
    title: 'Interactive Learning',
    description: 'Learn by doing with hands-on applications',
    icon: <ArrowRight className="w-12 h-12 text-[#34cddc]" />,
  },
  {
    title: 'Expert Guidance',
    description: 'Get support from industry professionals',
    icon: <Brain className="w-12 h-12 text-[#34cddc]" />,
  },
  {
    title: 'Structured Path',
    description: 'Follow a clear learning path to master key concepts',
    icon: <CheckCircle className="w-12 h-12 text-[#34cddc]" />,
  },
];

function FeaturesComponent() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-900/50 border border-gray-800">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Features = withDevMode(FeaturesComponent, 'Features');