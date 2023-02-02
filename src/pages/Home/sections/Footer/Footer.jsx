import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addComment } from 'store/slices/commentsSlice';

import './footer.scss';
import moment from 'moment/moment';

export const Footer = () => {
  const [name, setName] = useState({
    value: '',
    isFilled: false,
    error: 'Name field cannot be empty',
  });
  const [comment, setComment] = useState({
    value: '',
    isFilled: false,
    error: 'Comment field cannot be empty',
  });
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    name.error || comment.error ? setFormValid(false) : setFormValid(true);
  }, [name.error, comment.error]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setName({ ...name, isFilled: true });
        break;
      case 'comment':
        setComment({ ...comment, isFilled: true });
        break;
    }
  };

  const nameHandler = (e) => {
    e.target.value === ''
      ? setName({ ...name, error: 'Field cannot be empty', value: e.target.value })
      : setName({ ...name, error: '', value: e.target.value });
  };

  const commentHandler = (e) => {
    e.target.value === ''
      ? setComment({ ...comment, error: 'Field cannot be empty', value: e.target.value })
      : setComment({ ...comment, error: '', value: e.target.value });
  };

  const handleSubmit = (e) => {
    if (e.type === 'submit' || (e.charCode === 13 && e.ctrlKey)) {
      e.preventDefault();
      if (formValid) {
        const commentInfo = {
          name: name.value,
          date: moment().format('D MMM YYYY'),
          comment: comment.value,
        };
        dispatch(addComment(commentInfo));
        setName({ value: '', isFilled: false, error: '' });
        setComment({ value: '', isFilled: false, error: '' });
        setFormValid(false);
      }
    }
  };

  return (
    <footer className="footer">
      <form className="footer__form" onSubmit={handleSubmit} onKeyPress={handleSubmit}>
        <label htmlFor="name" className="footer__name">
          <input
            placeholder="Enter name"
            value={name.value}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blurHandler(e)}
          />
          {name.isFilled && name.error && <div className="footer__error">{name.error}</div>}
        </label>
        <label htmlFor="message">
          <textarea
            placeholder="Enter your comment"
            value={comment.value}
            id="message"
            name="comment"
            onChange={(e) => commentHandler(e)}
            onBlur={(e) => blurHandler(e)}
          ></textarea>
          {comment.isFilled && comment.error && (
            <div className="footer__error">{comment.error}</div>
          )}
        </label>
        <input disabled={!formValid} className="footer__btn" type="submit" value="Send a message" />
      </form>
    </footer>
  );
};
