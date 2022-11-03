import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className=' m-auto p-6 flex items-center justify-between border-b-2 border-teal-500'>
      <div className=' text-4xl'>Tech-Talk</div>
      <ul className='hidden md:flex gap-6 text-xl tracking-wide'>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>Add New Meetup</Link>
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
    </header>
  );
}
export default MainNavigation;
