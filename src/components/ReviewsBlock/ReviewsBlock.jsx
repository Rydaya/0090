import React from 'react';
import { useSelector } from 'react-redux';
import { Review } from 'components/Review/Review';

import './reviewsBlock.scss';
import { GlobalSvgSelector } from 'assets/icons/global/GlobalSvgSelector';

export const ReviewsBlock = () => {
  const comments = useSelector((state) => state.commentsSlice.comments);

  return (
    <div className="reviews">
      <div className="reviews__header">
        <div className="reviews__right">
          <h2>Latest reviews</h2>
          <button>All reviews</button>
        </div>
        <div className="reviews__left">
          <div className="reviews__item">
            <div className="reviews__icon">{<GlobalSvgSelector id="like" />}</div>
            <div>131</div>
          </div>
          <div className="reviews__item">
            <div className="reviews__icon">{<GlobalSvgSelector id="comment" />}</div>
            <div>14</div>
          </div>
        </div>
      </div>
      {comments.map(({ name, date, comment }) => (
        <Review key={name + date} name={name} date={date} commentText={comment} />
      ))}
    </div>
  );
};
