const viewEvent = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/events/${id}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to get event');
      }
    }
  };