const newEventHandler = async (event) => {
  event.preventDefault();
  console.log('we did it');
  const event_image = document.querySelector('#image').value.trim();
  const event_title = document.querySelector('#title').value.trim();
  const date = document.querySelector('#date').value.trim();
  const time = document.querySelector('#time').value.trim();
  const description = document.querySelector('#description').value.trim();
  const location = document.querySelector('#location').value.trim();
  const email = document.querySelector('#email').value.trim();
  const social = document.querySelector('#social').value.trim();

  if (
    event_image &&
    event_title &&
    date &&
    time &&
    description &&
    location &&
    email &&
    social
  ) {
    const response = await fetch('/api/events/add-event', {
      method: 'POST',
      body: JSON.stringify({
        event_image,
        event_title,
        date,
        time,
        description,
        location,
        email,
        social,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create event');
    }
  } else {
    alert('Please provide information in all the fields');
  }
};

document
  .getElementById('createEvent')
  .addEventListener('click', newEventHandler);
