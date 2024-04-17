import React, { useState } from 'react';
import Movie from './Movie';


// Example data array
let moviesData = [
// Gotta rep the nerdy stuff
  {
    id: 1,
    title: 'Warcraft',
    synopsis: 'As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.',
    imageUrl: 'https://shadowhawksshade.files.wordpress.com/2016/06/warcraft-poster.jpg',
    reviews: [],
    rating: 0
  },
//   The Prestige is my favorite movie of all time.
  {
    id: 2,
    title: 'The Prestige', 
    synopsis: 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
    imageUrl: 'https://images.moviesanywhere.com/4d9df0e6b0bd732b3d1fa967b5b919fa/1adaca39-ae5e-4867-91fd-6025d3d08eb4.jpg',
    reviews: [],
    rating: 0
  },
// Shout out to Miyazaki  
  {
    id: 3,
    title: 'Princess Mononoke',
    synopsis: 'On a journey to find the cure for a Tatarigami\'s curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.',
    imageUrl: 'https://m.media-amazon.com/images/I/81jSJRqb9IL._AC_UF1000,1000_QL80_.jpg',
    reviews: [],
    rating: 0
  }
];

function MovieList() {
  let [movies, setMovies] = useState(moviesData);

  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} data={movie} />
      ))}
    </div>
  );
}

export default MovieList;
