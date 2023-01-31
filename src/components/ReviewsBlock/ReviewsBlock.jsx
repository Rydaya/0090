import React from 'react';

import { Review } from 'components/Review/Review';

import './reviewsBlock.scss';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

export const ReviewsBlock = () => {
  return (
    <div className="reviews">
      <div className="reviews__header">
        <div className="reviews__right">
          <h2>Latest reviews</h2>
          <button>All reviews</button>
        </div>
        <div className="reviews__left">
          <div className="reviews__item">
            <div>{<GlobalSvgSelector id="like" />}</div>
            <div>131</div>
          </div>
          <div className="reviews__item">
            <div>{<GlobalSvgSelector id="comment" />}</div>
            <div>14</div>
          </div>
        </div>
      </div>
      <Review name='Samuel Jackson' date='13 Apr 2022' commentText="Hey Eva! You're cool. Nice pic!"/>
    </div>
  );
};
