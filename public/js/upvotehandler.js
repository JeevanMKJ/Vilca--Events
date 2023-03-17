const updateUpvotes = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('upvote')) {
    const id = event.target.getAttribute('upvote');
    const upvote = '';
    console.log(id);
    const response = await fetch(`/api/upvotes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        upvote,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
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

  const eventId = document.querySelector('save-event').getAttribute('id');
  const response = await fetch(`/api/saveEvent`, {
    method: 'POST',
    body: JSON.stringify({ eventId }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to save event. Please try again.');
  }
};

document.querySelector('.save-event').addEventListener('click', saveNewEvent);

document
  .getElementById('homeevent-list')
  .addEventListener('click', updateUpvotes);
