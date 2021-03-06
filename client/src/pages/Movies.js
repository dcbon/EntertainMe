import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../gql/moviesQueries";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)  

  if (error) return (
    <div className="container">
      <div className="container justify-content-center text-center">
        <div className="row justify-content-center mt-5">
          <div className="col mt-5">
            <img src="dreamer.svg" style={{width: 300}} alt="empty" />
          </div>
        </div>
        <h4 className="text-org mt-5">Something went wrong...</h4>
        <h5>Please refresh or come back later <span role="img" aria-label="heart">&#x1F9E1;</span></h5>
      </div>
    </div>
  )
  
  if(loading) return (
    <div className="container-sm">
      <div className="container justify-content-center text-center">
        <div className="row justify-content-center mt-5">
          <div className="col mt-5">
            <div className="spinner-border text-org" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        <h1 className="text-org mt-5">Please Wait..</h1>
      </div>
    </div>
  )

  return (
    <div className="container my-5">
      <div className="row row-cols-4 row-cols-md-6">
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
