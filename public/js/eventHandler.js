const newEventHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#event-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    const date = document.querySelector('#event-date').value.trim();
    const time = document.querySelector('#event-time').value.trim();
    const location = document.querySelector('#event-location').value.trim();
    const email = document.querySelector('#event-email').value.trim();
    const social = document.querySelector('#event-social').value.trim();
    
  
    if (title && description && date && time && location && email && social) {
      const response = await fetch(`/api/events`, {
        method: 'POST',
        body: JSON.stringify({ title, description, date, time, location, email, social }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create event');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete event');
      }
    }
  };
  
  document
    .querySelector('.new-event-form')
    .addEventListener('submit', newEventHandler);
  
  document
    .querySelector('.event-list')
    .addEventListener('click', delButtonHandler);
  