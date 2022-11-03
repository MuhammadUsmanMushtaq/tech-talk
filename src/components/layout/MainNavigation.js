import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const [isOpen, setOpen] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <header className='max-w-[1240px] m-auto p-4 flex items-center justify-between border-b-2 border-teal-500'>
      <div className=' text-4xl'>Tech-Talk</div>
      <ul className='hidden md:flex gap-6 text-xl tracking-wide'>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add new meetup</Link>
        </li>
        <li>
          <Link to='/favorites'>
            My Favorites
            <span className='ml-2 rounded-full px-2 bg-teal-500 text-white'>
              {favoritesCtx.totalFavorites}
            </span>
          </Link>
        </li>
      </ul>
      {/* mobile hem menu */}
      <div
        onClick={toggle}
        className='text-teal-500 block cursor-pointer sm:hidden z-[999]'
      >
        {<Hamburger toggled={isOpen} toggle={setOpen} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          isOpen
            ? 'sm:hidden bg-[#f7fafc] absolute left-0 top-0 right-0 bottom-0 w-full ease-in duration-300 z-10'
            : 'sm:hidden absolute left-[-100%] top-0 right-0 bottom-0 w-full ease-in duration-300 z-10'
        }
      >
        <ul className='p-4 mt-28'>
          <li onClick={toggle} className='p-8 text-2xl  text-teal-500 '>
            <Link to='/'>All meetups</Link>
          </li>
          <li onClick={toggle} className='p-8 text-2xl   text-teal-500 '>
            <Link to='/new-meetup'>Add new meetup</Link>
          </li>
          <li onClick={toggle} className='p-8 text-2xl   text-teal-500'>
            <Link to='/favorites'>
              Favorites{' '}
              <span className='ml-10 rounded-full px-2 bg-teal-500 text-white'>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default MainNavigation;
