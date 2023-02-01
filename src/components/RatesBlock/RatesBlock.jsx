import React from 'react';
import './ratesBlock.scss';

const services = [
  { name: 'Manual tour booking', value: 11, id: 1 },
  { name: 'Package tours', value: 3, id: 2 },
  { name: 'Hotels', value: 1, id: 3 },
];

export const RatesBlock = () => {
  return (
    <div className="rates">
      <div className="rates__title">Services</div>
      <div className="rates__graph">
        {services.map(({ name, value, id }) => (
          <div className="rates__item" key={id}>
            <div className={value === 11 ? "rates__back rates__back_green" : "rates__back"} style={{ width: (value * 100 / 15) + '%' }}></div>
            <div className="rates__text">{name}</div>
            <div className="rates__amount">{value}</div>
          </div>
        ))}
      </div>
      <div className="rates__item rates__total">
        <div>Total</div>
        <div className="rates__amount">15</div>
      </div>
    </div>
  );
};