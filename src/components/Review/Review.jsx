import React from 'react';
import './review.scss';

export const Review = ({ name, date, commentText }) => {
  return (
    <div className="review">
      <div className="review__header">
        <div className="review__name">{name}</div>
        <div className="review__date">{date}</div>
      </div>
      <div className="review__comment">
        {commentText}
      </div>
    </div>
  );
};
