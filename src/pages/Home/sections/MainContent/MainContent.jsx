import React from 'react';
import './mainContent.scss';

import { RatesBlock } from 'components/RatesBlock/RatesBlock';
import { ReviewsBlock } from 'components/ReviewsBlock/ReviewsBlock';

export const MainContent = () => {
  return (
    <div className="main">
      <RatesBlock />
      <ReviewsBlock />
    </div>
  );
};
