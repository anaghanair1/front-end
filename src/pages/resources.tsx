import React from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

interface ResourceCategory {
  title: string; 
  links: { name: string; url: string }[]; 
}

interface ResourceItem {
  title: string; 
  categories: ResourceCategory[];
}

const resources: ResourceItem[] = [
  {
    title: 'Deep Learning',
    categories: [
      {
        title: 'Code',
        links: [
          { name: 'Neural Net Basics', url: 'https://github.com/nn/basics' },
        ],
      },
      {
        title: 'Slides',
        links: [
          { name: 'Intro to Computer Vision', url: 'https://docs.google.com/presentation/d/1rC_EwIXJAsFOlKQZmJvSklpDdSqR-tCQ/edit?usp=share_link&ouid=111860343331968100995&rtpof=true&sd=true' },
        ],
      },
      {
        title: 'Lab',
        links: [
          { name: 'Lab 2 Exercises', url: 'https://example.com/lab2' },
        ],
      },
      {
        title: 'Shared on Discord',
        links: [
          { name: 'Tensorflow - Neural Network Playground', url: 'https://playground.tensorflow.org/' },
        ],
      },
    ],
  },
  {
    title: 'Neural Networks',
    categories: [
      {
        title: 'Code',
        links: [
            { name: 'Neural networks from scratch', url: 'https://github.com/buaiml/NeuralNetworksFromScratch' },
            { name: 'Snake', url: 'https://github.com/buaiml/Snake4Neat' },
        ],
      },
      {
        title: 'Slides',
        links: [
          { name: 'NN Overview', url: 'https://example.com/nn-overview' },
        ],
      },
      {
        title: 'Lab',
        links: [
          { name: 'Lab 2 Exercises', url: 'https://example.com/lab2' },
        ],
      },
      {
        title: 'Shared on Discord',
        links: [
          { name: 'Neural Net Basics', url: 'https://github.com/nn/basics' },
        ],
      },
    ],
  },
  {
    title: 'Pacathon',
    categories: [
      {
        title: 'Code',
        links: [
          { name: 'Neural Net Basics', url: 'https://github.com/nn/basics' },
        ],
      },
      {
        title: 'Info',
        links: [
          { name: 'NN Overview', url: 'https://example.com/nn-overview' },
        ],
      },
    ],
  },
];

const ResourceItem: React.FC<{ resource: ResourceItem }> = ({ resource }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-4">
            {resource.title}
          </h3>
          {resource.categories.map((category, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg sm:text-xl text-white font-mono font-bold">
                {category.title}
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline font-mono"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900">
        <div className="pt-24 pb-16">
          <FadeInSection>
            <h1
              className="text-white text-center font-mono font-extrabold mb-12 w-full px-4"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: '1.1',
              }}
            >
              Resources
            </h1>
          </FadeInSection>
          {resources.map((resource, index) => (
            <FadeInSection key={index} delay={index * 200}>
              <ResourceItem resource={resource} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;