import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../gql/moviesQuery";

const MovieList = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)

  if (loading) return <p>Loading</p>
  if (error) return <p>error ==== {JSON.stringify(error)}</p>

  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default MovieList