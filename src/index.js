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

// ==================V3  создает рисунок======================================
/*
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

ReactDOM.render(image, document.getElementById('root'));  
*/

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
/*
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
*/
// ====================== Свойство props.children =======================================================================================

// const Qwerty = 28;
// console.log('Qwerty :>> ', Qwerty);
// ====================== Свойство props.children ==========================================================================

/*
const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const App = () => (
  <div>
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>
  </div>
);
ReactDOM.render(<Panel />, document.getElementById('root'));*/

/*
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


// =========================================================================================================
/*
const Product = ({ imgUrl, name, price, quantity }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? 'Few left' : 'In stock'}</h1>
    <button type="button">Add to cart</button>
  </div>
);
ReactDOM.render(<Product />, document.getElementById('root')); */

// =====================Коллекции===================================================================================
/*
const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li>{book.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <BookList books={favouriteBooks} />,
  document.getElementById('root'),
);

*/
// ================================================Ключи================================================================
/*
const favouriteBooks = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Router overview' },
  { id: 'id-4', name: 'Redux in depth' },
];

const BookList = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.id}>{book.name}</li>
    ))}
  </ul>
);

ReactDOM.render(
  <BookList books={favouriteBooks} />,
  document.getElementById('root'),
);
*/

// =====================  Инлайн CSS================================================

const buttonStyles = {
  display: 'inline-flex',
  margin: '0 4px',
  padding: '8px 24px',
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: 'inherit',
};

const Button = ({ type = 'button', label, disabled }) => (
  <button
    type={type}
    disabled={disabled}
    style={{
      ...buttonStyles,
      backgroundColor: disabled ? '#0000001f' : '#2196f3',
      color: disabled ? '#00000042' : '#ffffff',
    }}
  >
    {label}
  </button>
);

ReactDOM.render(
  <Button />,
  document.getElementById('root'),
);