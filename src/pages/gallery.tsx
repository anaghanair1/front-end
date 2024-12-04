import React, { useState } from 'react';
import Layout from '@/components/Layout';
import FadeInSection from '@/components/FadeInSection';

const Gallery: React.FC = () => {
  const sections = [
    {
      title: 'General Meeting',
      images: [
        { src: '/images/9_13.jpg', alt: 'General Meeting 1' },
        { src: '/images/9_13-2.jpg', alt: 'General Meeting 1' },
        { src: '/images/9_13-3.jpg', alt: 'General Meeting 1' },
        { src: '/images/9_20.jpeg', alt: 'General Meeting 2' },
        { src: '/images/9_20-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_20-3.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_20-4.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_20-5.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_20-6.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_27.jpeg', alt: 'General Meeting 4' },
        { src: '/images/9_27-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_4.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_4-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_4-3.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_11-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_18.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_18-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_18-3.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_18-5.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_18-6.jpeg', alt: 'General Meeting 4' },
        { src: '/images/11_1.jpeg', alt: 'General Meeting 4' },
        { src: '/images/11_1-3.jpeg', alt: 'General Meeting 4' },
        { src: '/images/11_8.jpeg', alt: 'General Meeting 4' },
      ],
    },
    {
      title: 'Paper Reading',
      images: [
        { src: '/images/9_19.jpeg', alt: 'Paper Reading 1' },
        { src: '/images/9_19-2.jpeg', alt: 'Paper Reading 2' },
        { src: '/images/10_19.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_19-2.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_19-3.jpeg', alt: 'General Meeting 4' },
        { src: '/images/10_19-4.jpeg', alt: 'General Meeting 4' },
      ],
    },
    {
      title: 'Pacathon',
      images: [
        { src: '/images/10_25.jpeg', alt: 'Pacathon 1' },
        { src: '/images/10_25-2.jpeg', alt: 'Pacathon 2' },
        { src: '/images/10_25-3.jpeg', alt: 'Pacathon 3' },
        { src: '/images/10_25-5.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_25-6.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_25-7.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_25-9.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-2 2.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-3 2.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-2.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-3.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-4.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-5.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-6.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-7.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-8.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-9.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-10.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-11.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-12.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-13.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-14.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-15.jpeg', alt: 'Pacathon 4' },
        { src: '/images/10_26-16.jpeg', alt: 'Pacathon 4' },
        { src: '/images/11_2-4.jpeg', alt: 'Pacathon 4' },
        { src: '/images/11_2-2.jpeg', alt: 'Pacathon 4' },
      ],
    },
    {
      title: 'Favorites',
      images: [
        { src: '/images/9_28-2.jpeg', alt: 'Favorite 1' },
        { src: '/images/9_28-3.jpeg', alt: 'Favorite 1' },
        { src: '/images/9_28.jpeg', alt: 'Favorite 1' },
        { src: '/images/9_27-3.jpeg', alt: 'Favorite 2' },
        { src: '/images/9_25.jpeg', alt: 'Favorite 3' },
        { src: '/images/10_5.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_7.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_7-2.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_11.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_11-3.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_18-4.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_25-4.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_25-8.jpeg', alt: 'Favorite 4' },
        { src: '/images/10_25-10.jpeg', alt: 'Favorite 4' },
        { src: '/images/11_2-3.jpeg', alt: 'Favorite 4' },
      ],
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 flex flex-col items-center px-4 py-12">
        <h1
          className="text-5xl sm:text-7xl font-extrabold text-white font-mono mb-12 text-center pt-20"
        >
          Gallery
        </h1>
        {sections.map((section, index) => (
          <ImageCarousel key={index} section={section} />
        ))}
      </div>
    </Layout>
  );
};

const ImageCarousel: React.FC<{ section: { title: string; images: { src: string; alt: string }[] } }> = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? section.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === section.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6 mb-16">
      <FadeInSection>
        <h2 className="text-3xl font-bold text-white font-mono mb-6 text-center">
          {section.title}
        </h2>
      </FadeInSection>
      <div className="relative flex justify-center items-center">
        {/* Image */}
        <img
          src={section.images[currentIndex].src}
          alt={section.images[currentIndex].alt}
          className="rounded-lg shadow-lg"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-900 p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-900 p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8250;
        </button>
        {/* Dots */}
        <div className="flex justify-center mt-4 absolute bottom-4">
          {section.images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex
                  ? 'bg-white'
                  : 'bg-gray-400 bg-opacity-50'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
