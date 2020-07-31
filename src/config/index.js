const URL_BASE = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://rockyflix.herokuapp.com';

export default {
  URL_BASE,
};
