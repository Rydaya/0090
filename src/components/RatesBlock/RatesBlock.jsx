import React from 'react';
import { useSelector } from 'react-redux';
import './ratesBlock.scss';

export const RatesBlock = () => {
  const services = useSelector((state) => state.ratesSlice.services);
  return (
    <div className="rates">
      <div className="rates__title">Services</div>
      <div className="rates__graph">
        {services.map(({ name, value, id }) => (
          <div className="rates__item" key={id}>
            <div
              className={value === 11 ? 'rates__back rates__back_green' : 'rates__back'}
              style={{ width: (value * 100) / 15 + '%' }}
            ></div>
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
