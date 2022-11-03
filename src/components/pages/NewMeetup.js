import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetupForm from '../meetups/NewMeetupForm';

function NewMeetupPage() {
  const navigate = useNavigate();
  function AddMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-99079-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate({ pathname: '/' }, { replace: true });
    });
  }
  return (
    <section>
      <div>
        <h2 className='py-6 text-4xl md:py-12 md:text-6xl text-center md:text-left'>
          New Meetup
        </h2>
      </div>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
