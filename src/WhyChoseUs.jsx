import React from 'react';
import './WhyChooseUs.css';
import trusted from './assets/Asset 3 1.png'
import help from './assets/Profile 1.png'
import star from './assets/Star 1.png'
const features = [
  {
    icon: trusted, 
    title: 'Tried, Tested, Trusted',
    description: 'Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.',
  },
  {
    icon: help,
    title: 'Real People, Real Help',
    description: 'A hands-on team that actually cares — guiding you through every twist in your career path.',
  },
  {
    icon: star,
    title: 'Beat the Line',
    description: 'We search, shortlist, and apply for you, so your name shows up first — every single day.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="features">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <img src={item.icon} alt="" className="feature-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
