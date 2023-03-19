const saveEvent = document.querySelectorAll('[id=save-event]');

const updateUpvotes = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('upvote')) {
    const id = event.target.getAttribute('upvote');
    const upvote = '';

    const response = await fetch(`/api/upvotes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        upvote,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed');
    }
  } else if (event.target.hasAttribute('more-info')) {
    const id = event.target.getAttribute('more-info');
    document.location.replace(`/event/${id}`);
  }
};

const saveNewEvent = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('save-event')) {
    const event_id = event.target.getAttribute('save-event');

    const response = await fetch(`/api/saveEvent`, {
      method: 'POST',
      body: JSON.stringify({ event_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/savedevents');
    } else {
      alert('Failed to save event. Please try again.');
    }
  }
};

saveEvent.forEach((el) => el.addEventListener('click', saveNewEvent));

if (document.getElementById('homeevent-list')) {
  addEventListener('click', updateUpvotes);
} else if (document.getElementById('saved-events-list')) {
  addEventListener('click', updateUpvotes);
}
