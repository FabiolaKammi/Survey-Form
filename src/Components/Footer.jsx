import React from 'react';
const date = new Date();
const year=date.getFullYear();

const Footer = () => {
  return (
    <div className='footer-section'>
      <ul className='media'>
        <li>©</li>
        <li>Copyright</li>
        <li>{year}</li>
      </ul>
  
    </div>
  )
}

export default Footer;
