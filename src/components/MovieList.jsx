import React from 'react'

var titles = ['Vikings', 'Narcos', 'Rick and Morty'];

const MovieList = (titles) => ( {}
  <ul>
    {
      titles.map( title => 
        <li>{title}</li>
        )
      }
  </ul>
)


export default MovieList