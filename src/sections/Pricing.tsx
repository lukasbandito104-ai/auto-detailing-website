import React from 'react';

const pricingTiers = [
  {
    title: 'Basic',
    price: '$19.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Standard',
    price: '$29.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    title: 'Premium',
    price: '$49.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

const Pricing = () => {
  return (
    <div>
      <h1>Our Pricing</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {pricingTiers.map((tier) => (
          <div key={tier.title} style={{ border: '1px solid #ccc', padding: '10px', width: '30%' }}>
            <h2>{tier.title}</h2>
            <p>{tier.price}</p>
            <h3>Features:</h3>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
