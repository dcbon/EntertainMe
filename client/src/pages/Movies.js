import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../gql/moviesQuery";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <p>Loading</p>
  if (error) return <p>error ==== {JSON.stringify(error)}</p>

  return (
    <div className="container mt-5">
      <div class="row row-cols-4 row-cols-md-6">
        <div class="col mb-4">
          <div class="card h-100 transparent-card">
            <i role="button" className="fas fa-heart text-danger like-btn h4"></i>
            <div className="rating rounded-circle p-2 small">7.6</div>
            <img role="button" src="http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg" class="rounded-lg img-fluid" alt=""/>
            <div class="mt-4 mx-2">
              <small class="badge badge-secondary mb-2">Romance</small>
              <h5 role="button" class="card-title">Card title</h5>
            </div>
          </div>
        </div>
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
