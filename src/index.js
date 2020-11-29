import React from 'react';
import ReactDOM from 'react-dom';

const link = React.createElement(
  'a',
  {
    href: 'https://censor.net/ua/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  'Ссылка на reactjs.org',
);
console.log("создаю линку", link);

ReactDOM.render(link, document.getElementById('root'));