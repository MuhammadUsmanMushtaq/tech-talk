import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import MeetupList from '../meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className='p-6 text-2xl'>You got no favorites, try adding some</p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h2 className='py-6 text-4xl md:py-12 md:text-6xl text-center md:text-left'>
        Favorites
      </h2>
      {content}
    </section>
  );
}

export default FavoritesPage;
