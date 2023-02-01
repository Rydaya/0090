import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <form className="footer__form">
        <label htmlFor="name" className="footer__name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="message">
          Message:
          <textarea id="message"></textarea>
        </label>
        <input className="footer__btn" type="submit" value="Send a message" />
      </form>
    </footer>
  );
};
