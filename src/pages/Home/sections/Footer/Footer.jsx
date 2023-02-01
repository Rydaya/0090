import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addComment } from 'store/slices/commentsSlice';

import './footer.scss';
import moment from 'moment/moment';

export const Footer = () => {
  const [data, setData] = useState({ name: '', comment: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: data.name,
      date: moment().format('D MMM YYYY'),
      comment: data.comment,
    };
    dispatch(addComment(comment));
    setData({ name: '', comment: '' });
  };

  return (
    <footer className="footer">
      <form className="footer__form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="footer__name">
          Name:
          <input
            value={data.name}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            value={data.comment}
            id="message"
            name="comment"
            onChange={handleChange}
          ></textarea>
        </label>
        <input className="footer__btn" type="submit" value="Send a message" />
      </form>
    </footer>
  );
};
