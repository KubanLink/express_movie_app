const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET movie listing. */
router.get('/', (req, res, next) => {
  // axios
  //   .get(
  //     `https://pokeapi.co/api/v2/pokemon/ditto`,
  //   )
  //   .then(async (response) => {
  //     console.log(response)
  //     const species = await axios.get(response.data.species.url)
  //     console.log(species)
  //     // handle success
  //     // const moviesData = response.data.results;
  //     // console.log(moviesData);
  //     res.render('movies/index', {
  //       poke: response.data,
  //       species: species.data
  //     });
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(() => {
  //     // always execute
  //   });
});

/* GET movie by id listing. */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const { data: movie } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    );
    // const movieData = movie.data;
    console.log(movie);
    res.render('movies/show', {
      movie,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
