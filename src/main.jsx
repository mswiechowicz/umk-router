import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

function Item() {
  const { itemId } = useParams();

  return (
    <main>
      <Link to={'/'}>Go to home</Link>
      <p>Item ID: {itemId}</p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='bg-umk-300 hover:bg-umk-400 dark:bg-red-500'>
        <header className='flex gap-5 justify-center mb-4'>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to={'/item/15'}>Item:15</NavLink>
          <NavLink to={'/item/95'}>Item:95</NavLink>
        </header>
        <Routes>
          <Route path='/' element={<div>home</div>} />
          <Route path='/about' element={<div>Tajny klucz: {import.meta.env.VITE_TAJNY}</div>} />
          <Route path='/contact' element={<div>contact</div>} />
          <Route path='/item/:itemId' element={<Item />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
