const updateUpvotes = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('upvote');
  const upvote = '';
  console.log(id)
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
};

document
  .getElementById('homeevent-list')
  .addEventListener('click', updateUpvotes);
