import React from 'react';
import MeetupItem from './MeetupItem';

function MeetupList({ meetups }) {
  return (
    <ul>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;
