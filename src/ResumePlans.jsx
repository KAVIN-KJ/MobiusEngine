import React from 'react';
import check from './assets/check.png'; // green check icon
import './ResumePlans.css';

const ResumePlans = ({ title, subtitle, price, frequency, features, buttonText }) => {
  return (
    <div className="plan-card">
      <div className="plan-header">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
      <p className="price">
        <span>${price}</span> {frequency}
      </p>
      <hr className="divider" />
      <ul className="features-list">
        {features.map((text, index) => (
          <li key={index}>
            <img src={check} alt="✔" />
            {text}
          </li>
        ))}
      </ul>
      <button className="get-started-btn">{buttonText} →</button>
    </div>
  );
};

export default ResumePlans;
