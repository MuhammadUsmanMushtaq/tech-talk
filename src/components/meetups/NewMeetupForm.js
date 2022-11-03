import { useRef } from 'react';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <form
      className='max-w-[800px] p-8 shadow bg-white'
      onSubmit={submitHandler}
    >
      <div className='flex flex-col'>
        <label className='text-xl p-2' htmlFor='title'>
          Meetup Title
        </label>
        <input
          className='p-2 border-2 border-gray-200'
          type='text'
          required
          id='title'
          ref={titleInputRef}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xl p-2' htmlFor='image'>
          Meetup Image
        </label>
        <input
          className='p-2 border-2 border-gray-200'
          type='url'
          required
          id='image'
          ref={imageInputRef}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xl p-2' htmlFor='address'>
          Address
        </label>
        <input
          className='p-2 border-2 border-gray-200'
          type='text'
          required
          id='address'
          ref={addressInputRef}
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xl p-2' htmlFor='description'>
          Description
        </label>
        <textarea
          className='p-2 border-2 border-gray-200 mb-8'
          rows='5'
          required
          id='description'
          ref={descriptionInputRef}
        ></textarea>
      </div>

      <div className='flex justify-center '>
        <button className=' w-[160px] px-1 py-2  rounded bg-teal-500 text-white text-center hover:bg-teal-600'>
          Add Meetup
        </button>
      </div>
    </form>
  );
}

export default NewMeetupForm;
