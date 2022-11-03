import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

function MeetupItem({ id, image, title, address, description }) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemisFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemisFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite({
        id: id,
        title: title,
        description: description,
        image: image,
        address: address,
      });
    }
  }

  return (
    <li className='bg-white rounded  p-4 md:p-6 mb-4 flex flex-col md:flex-row md:gap-6 md:items-center shadow'>
      <div className='md:w-[240px]'>
        <img src={image} alt='meetups' className='' />
      </div>
      <div className='md:w-[600px] pt-4 md:pt-0 flex flex-center md:flex-start flex-col'>
        <h3 className='text-4xl'>{title}</h3>
        <address className='text-lg'>{address} </address>
        <p className='text-lg py-4'>{description}</p>
        <div
          onClick={toggleFavoriteStatusHandler}
          className=' p-1 w-[120px] font-bold flex items-center border-2 border-slate-200 gap-2 rounded-xl cursor-pointer'
        >
          {itemisFavorite ? (
            <MdOutlineFavorite color='red' size={36} />
          ) : (
            <MdOutlineFavoriteBorder color='red' size={36} />
          )}
          <span>Favorite</span>
        </div>
      </div>
    </li>
  );
}

export default MeetupItem;
