import React, { useState, useEffect } from 'react'
import { favoriteItems } from "../cache";
import { GET_FAVORITES } from "../gql/favoritesQueries";
import { useQuery } from "@apollo/client";

const MovieCard = ({movie}) => {
  const { data } = useQuery(GET_FAVORITES)
  const [faved, setFaved] = useState(false)

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

  return (
    <div class="col mb-4">
      <div class="card h-100 transparent-card">
        {
          !faved && <div role="button" className="fas fa-heart like-btn h4" onClick={() => addToFav(movie)}></div>
        }
        <div className="rating rounded-circle p-2 small">{movie.popularity}</div>
        <img role="button" src={!movie.poster_path || movie.poster_path.includes("poster") ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcDWX9Md-19_drWMmKVp6azbB8Y1stOiii55Q9KzGVMw&usqp=CAU&ec=45699843" : movie.poster_path} class="rounded-lg img-fluid" alt=""/>
        <div class="mt-4 mx-2">
          {
            movie.tags && movie.tags.map((tag, i) => {
              return <small class="badge badge-secondary mr-1 mb-2" key={i}>{tag}</small>
            })
          }
          <h6 role="button" class="card-title text-org text-wrap">{movie.title}</h6>
        </div>
      </div>
    </div>
  )
}

export default MovieCard