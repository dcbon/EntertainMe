import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../gql/moviesQueries";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <p>Loading</p>
  if (error) return <p>error ==== {JSON.stringify(error)}</p>

  return (
    <div className="container my-5">
      <div class="row row-cols-4 row-cols-md-6">
        {
          data.Movies && data.Movies.map((datum, i) => {
            return <MovieCard movie={datum} key={i} />
          })
        }
      </div>
    </div>
  )
}

export default Movies
