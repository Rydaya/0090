import React from 'react';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <form>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="message">
          Message:
          <textarea id="message"></textarea>
        </label>
        <input type="submit" value="Send a message" />
      </form>
    </footer>
  );
};