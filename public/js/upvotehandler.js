const saveEvent = document.querySelectorAll('[id=save-event]');

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
    // } else if (event.target.hasAttribute('save-event')) {
    //   const event_id = event.currentTarget.getAttribute('save-event');
    // console.log(event_id)
    // const response = await fetch(`/api/saveEvent`, {
    //   method: 'POST',
    //   body: JSON.stringify({ event_id }),
    //   headers: { 'Content-Type': 'application/json' },
    // });
    // console.log(response)
    // }
  }
};

const saveNewEvent = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('save-event')) {
    const event_id = event.target.getAttribute('save-event');
    console.log(event_id);
    const response = await fetch(`/api/saveEvent`, {
      method: 'POST',
      body: JSON.stringify({ event_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to save event. Please try again.');
    }
  }
};

// document.querySelector('.save-event').addEventListener('click', saveNewEvent);

saveEvent.forEach((el) => el.addEventListener('click', saveNewEvent));

if (document.getElementById('homeevent-list')) {
  addEventListener('click', updateUpvotes);
}
// .addEventListener('click', updateUpvotes);
else if (document.getElementById('saved-events-list')) {
  addEventListener('click', updateUpvotes);
}

// document
//   .getElementById('saved-events-list')
//   .addEventListener('click', updateUpvotes);
