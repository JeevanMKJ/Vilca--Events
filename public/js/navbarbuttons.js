const getDashboard = async (event) => {
  event.preventDefault();
  document.location.replace('/dashboard');
};

const getCreate = async (event) => {
  event.preventDefault();
  document.location.replace('/create');
};

const getSaved = async (event) => {
  event.preventDefault();
  document.location.replace('/savedEvents');
};

const getLogin = async (event) => {
  event.preventDefault();
  document.location.replace('/login');
};

const getHomepage = async (event) => {
  event.preventDefault();
  document.location.replace('/');
};

document.querySelector('#dashboard').addEventListener('click', getDashboard);

document.querySelector('#create').addEventListener('click', getCreate);

document.querySelector('#saved').addEventListener('click', getSaved);

document.querySelector('#homepagelink').addEventListener('click', getHomepage);

document.querySelector('#login').addEventListener('click', getLogin);



