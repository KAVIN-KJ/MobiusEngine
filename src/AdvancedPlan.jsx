import React from 'react';
import check from './assets/check.png';
import './AdvancedPlan.css';

const AdvancedPlan = () => {
  return (
    <div className="advance-card">
      <div className="advance-left">
        <h2>Advance</h2>
        <p className="subtitle">Top-tier support for serious job hunters:</p>
        <ul className="features-grid">
          <li><img src={check} /> Everything in Plus</li>
          <li><img src={check} /> Custom Resumes & Cover Letters</li>
          <li><img src={check} /> 20 fully customized applications/week</li>
          <li><img src={check} /> Help with complex job searches</li>
          <li><img src={check} /> Access to senior resume experts, Founder & Exec Coaches</li>
        </ul>
      </div>
      <div className="advance-right">
        <p className="price"><span>$150</span>/week</p>
        <button className="get-started-btn">Get Started →</button>
      </div>
    </div>
  );
};

export default AdvancedPlan;
