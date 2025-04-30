import React from 'react';
import './PriceCard.css';
import check from './assets/check.png'
const plans = [
  {
    title: 'April Promo',
    price: '$35',
    subtitle: '/week',
    features: [
      'Curated jobs from 1M+ listings, refreshed every 48 hours',
      'Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)',
      'Need more? Add extra apps for just $1.5 each',
      'Your own dedicated application analyst',
      'Personalized with up to 10 filters & 5 job titles',
    ],
  },
  {
    title: 'Starter',
    price: '$50',
    subtitle: '/week',
    badge: 'Popular',
    features: [
      'All the perks of the Promo Plan, plus:',
      'Resume review & story-focused feedback',
      'Dedicated search specialist',
      'Up to 50 job apps/week',
      'Extra apps at $1.5 each',
      'Analyst support within 6 hours (SLA/PST hours)',
    ],
  },
  {
    title: 'Plus',
    price: '$100',
    subtitle: '/week',
    features: [
      'Everything in Starter, with more muscle:',
      'Up to 75 apps/week',
      'Apply to 15 job titles',
      'Analyst + full application team on Pacific hours',
    ],
  },
];

const PriceCard = () => {
  return (
    <div className="pricing-section">
      {plans.map((plan, idx) => (
        <div className="pricing-card" key={idx}>
          <div className="card-header">
            <h3>{plan.title}</h3>
            {plan.badge && <span className="badge">{plan.badge}</span>}
          </div>
          <p className="price">
            <span>{plan.price}</span>{plan.subtitle}
          </p>
          <hr className="divider" />
          <ul className="features">
            {plan.features.map((f, i) => (
              <li key={i}><img src={check} alt="" /> {f}</li>
            ))}
          </ul>
          <button className="get-started">Get Started →</button>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
