const newEventForm = document.getElementById('new-event-form');
const eventsList = document.querySelector('.events-list');
const updateBlogBtns = document.querySelectorAll('[id=update-id]');
const submitUpdatedBlogBtns = document.querySelectorAll(
  '[id=submit-updated-event]'
);

const getUpdateBlogForm = (id) =>
  document.getElementById(`new-event-form-${id}`);

const updateFormHandler = async (event) => {
  event.preventDefault();
  const updateId = event.currentTarget.getAttribute('updateId');
  console.log(event.currentTarget.getAttribute('updateId'));

  const updateForm = getUpdateBlogForm(updateId);

  if (event.currentTarget.hasAttribute('updateId')) {
    event.currentTarget.classList.add('is-hidden');
    updateForm.classList.remove('is-hidden');
  }
};

const submitFormHandler = async (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('updateId');
  const image = document.getElementById(`update-image-${id}`).value.trim();
  // console.log(id);
  const title = document.getElementById(`update-title-${id}`).value.trim();
  const date = document.getElementById(`update-date-${id}`).value.trim();
  const time = document.getElementById(`update-time-${id}`).value.trim();
  const description = document
    .getElementById(`update-description-${id}`)
    .value.trim();
  const location = document
    .getElementById(`update-location-${id}`)
    .value.trim();
  const email = document.getElementById(`update-email-${id}`).value.trim();
  const social = document.getElementById(`update-social-${id}`).value.trim();
  if (
    id &&
    image &&
    title &&
    date &&
    time &&
    description &&
    location &&
    email &&
    social
  ) {
    console.log('we have info')
    const response = await fetch(`/api/events/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        image,
        title,
        date,
        time,
        description,
        location,
        email,
        social,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to Update event');
    }
  }
};

updateBlogBtns.forEach((el) => el.addEventListener('click', updateFormHandler));
submitUpdatedBlogBtns.forEach((el) =>
  el.addEventListener('click', submitFormHandler)
);

const delButtonHandler = async (event) => {
  console.log('clicked');
  if (event.target.hasAttribute('delete-id')) {
    const id = event.target.getAttribute('delete-id');
console.log(id)
    const response = await fetch(`api/events/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      console.log(response);
      alert('Failed to delete event');
    }
  }
};

document
  .querySelector('.events-list')
  .addEventListener('click', delButtonHandler);

