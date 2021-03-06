import config from '../config';

const URL_CATEGORIES = `${config.URL_BASE}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();

        return data;
      }

      throw new Error('Não foi possível retornar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const data = await res.json();

        return data;
      }

      throw new Error('Não foi possível retornar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
