import React from 'react';
import './ratesBlock.scss';

export const RatesBlock = () => {
  return <div className="rates">
    <div className='rates__title'>Services</div>
    <div className='rates__graph'>
        <div className='rate'>
            <div className='rate__text'>Manual tour booking</div>
            <div className='rate__amount'>11</div>
        </div>
        <div className='rate'>
            <div className='rate__text'>Package tours</div>
            <div className='rate__amount'>3</div>
        </div>
        <div className='rate'>
            <div className='rate__text'>Hotels</div>
            <div className='rate__amount'>1</div>
        </div>
    </div>
    <div className='rates__total'>
        <div>Total</div>
        <div>15</div>
    </div>
  </div>;
};