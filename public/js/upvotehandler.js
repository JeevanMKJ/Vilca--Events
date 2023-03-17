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
document
  .getElementById('homeevent-list')
  .addEventListener('click', updateUpvotes);
