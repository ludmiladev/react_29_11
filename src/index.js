import React from 'react';
import ReactDOM from 'react-dom';

/*
=========  v1. создает линку на цензор   =========  

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
*/
/*
==================V3  создает рисунок======================================

const image = React.createElement('img', {
  src:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  alt: 'Tacos With Lime',
  width: 640,
});
const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', null, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

const productWithChildrenInProps = React.createElement('div', {
  children: [image, title, price, button],
});

ReactDOM.render(image, document.getElementById('root'));  */


// ========================================= V4   JavaScript Syntax Extension (JSX)===========

/*const link = React.createElement(
  'a',
  {
    href: 'https://censor.net/ua/',
    target: '_blank',
    rel: 'noreferrer noopener',
  },
  'Ссылка на reactjs.org',
);
console.log("создаю линку", link);

ReactDOM.render(link, document.getElementById('root')); */

/*
const linkWithJSX = (
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
    Ссылка на reactjs.org
  </a>
);
ReactDOM.render(linkWithJSX, document.getElementById('root'));*/

// =================================V5 JavaScript Syntax Extension (JSX) перепишем карточку продукта======================
/*
const imageUrl =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
const price = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);

ReactDOM.render(product, document.getElementById('root')); */

// =================Правило общего родителя================================
/*
const post = (
  <div>
    <h2>Post Header</h2>
    <p>Post text</p>
  </div>
);
ReactDOM.render(post, document.getElementById('root'));*/

/*
const post = (
  <>
    <h2>Post Header</h2>
    <p>Post text</p>
  </>
);
ReactDOM.render(post, document.getElementById('root')); */

// ===================== Компоненты-функции ================================================================
/*
const Product = props => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// В разметке компонент записывается как JSX-тег
ReactDOM.render(<Product />, document.getElementById('root'));
*/


// ================== Свойства компонента (props) ====================================================================================

const Product = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add to cart</button>
  </div>
);
const App = () => (
  <div>
    <h1>Best selling products</h1>
    <Product
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      name="Tacos With Lime"
      price={10.99}
    />
    <Product
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      name="Fries and Burger"
      price={14.29}
    />
  </div>
);
ReactDOM.render(<App />, document.getElementById('root'));

// ====================== Свойство props.children =======================================================================================