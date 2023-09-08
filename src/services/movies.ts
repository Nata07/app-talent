import axios from "axios";

export async function favoriteMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/account/20403096/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options);
    const { status } = response;

    if(status !== 200) {
      throw new Error('Erro ao buscar filmes')
    }

    return response.data;
  } catch (err) {
    console.error(err);
  }
}