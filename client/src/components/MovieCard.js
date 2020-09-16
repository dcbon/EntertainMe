import React, { useState, useEffect } from 'react'
import { favoriteItems } from "../cache";
import { GET_FAVORITES } from "../gql/favoritesQueries";
import { useQuery } from "@apollo/client";
import Detail from './Detail'
import DetailSeries from './DetailSeries'

const MovieCard = ({movie}) => {
  const { data } = useQuery(GET_FAVORITES)
  const [faved, setFaved] = useState(false)
  const [modal, setModal] = useState(false)
  const [movieModal, setMovieModal] = useState(false)
  const [seriesModal, setSeriesModal] = useState(false)

  useEffect(() => {
    checkFav()
  })
  
  const checkFav = () => {
    if (data.favorites.includes(movie)) setFaved(true)
  }

  const addToFav = (fav) => {
    const favs = favoriteItems()
    favoriteItems([...favs, fav])
  }

  const openModal = (type) => {
    if (type === "Movies") {
      setMovieModal(true)
    } else {
      setSeriesModal(true)
    }
    setModal(true)
  }
  

  return (
    <div>
    {
      modal && movieModal && <Detail show={modal} close={() => setModal(false)} movie={movie} />
    }
    {
      modal && seriesModal && <DetailSeries show={modal} close={() => setModal(false)} movie={movie} />
    }
      <div className="col mb-4">
        <div className="card h-100 transparent-card">
          {
            !faved && <div role="button" className="fas fa-heart like-btn h4" onClick={() => addToFav(movie)}></div>
          }
          <div className="rating rounded-circle p-2 small">{movie.popularity}</div>
          <img role="button" src={movie.poster_path} className="rounded-lg img-fluid" onClick={() => openModal(movie.__typename)} alt=""/>
          <div className="mt-4 mx-2">
            {
              movie.tags && movie.tags.map((tag, i) => {
                return <small className="badge badge-secondary mr-1 mb-2" key={i}>{tag}</small>
              })
            }
            <h6 role="button" onClick={() => openModal(movie.__typename)} className="card-title text-org text-wrap">{movie.title}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard