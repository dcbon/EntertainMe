import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_SERIES } from "../gql/seriesQueries";
import MovieCard from "../components/MovieCard";

const Series = () => {
  const { loading, error, data } = useQuery(GET_SERIES)

  if (loading) return <p>Loading</p>
  if (error) return <p>error ==== {JSON.stringify(error)}</p>

  return (
    <div className="container my-5">
      <div class="row row-cols-4 row-cols-md-6">
        {
          data.tvSeries && data.tvSeries.map((datum, i) => {
            return <MovieCard movie={datum} key={i} />
          })
        }
      </div>
    </div>
  )
}

export default Series

