import React, { useState, useEffect } from 'react'
import { favoriteItems } from "../cache";
import { GET_FAVORITES } from "../gql/favoritesQueries";
import { useQuery } from "@apollo/client";
import { useHistory } from 'react-router-dom';

const MovieCard = ({movie}) => {
  const history = useHistory()
  const { data } = useQuery(GET_FAVORITES)
  const [faved, setFaved] = useState(false)

  useEffect(() => {
    checkFav()
  })

  const toDetail = () => {
    history.push(`/movies/${movie._id}`)
  }
  
  const checkFav = () => {
    if (data.favorites.includes(movie)) setFaved(true)
  }

  const addToFav = (fav) => {
    const favs = favoriteItems()
    favoriteItems([...favs, fav])
  }

  return (
    <div>
      <div className="col mb-4">
        <div className="card h-100 transparent-card">
          {
            !faved && <div role="button" className="fas fa-heart like-btn h4" onClick={() => addToFav(movie)}></div>
          }
          <div className="rating rounded-circle p-2 small">{movie.popularity}</div>
          <img role="button" src={movie.poster_path} className="rounded-lg img-fluid" onClick={toDetail} alt=""/>
          <div className="mt-4 mx-2">
            {
              movie.tags && movie.tags.map((tag, i) => {
                return <small className="badge badge-secondary mr-1 mb-2" key={i}>{tag}</small>
              })
            }
            <h6 role="button" onClick={toDetail} className="card-title text-org text-wrap">{movie.title}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard