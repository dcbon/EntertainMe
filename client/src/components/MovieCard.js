import React from 'react'

const MovieCard = ({movie}) => {

  return (
    <div class="col mb-4">
      <div class="card h-100 transparent-card">
        <i role="button" className="far fa-heart text-danger like-btn h4"></i>
        <div className="rating rounded-circle p-2 small">{movie.popularity}</div>
        <img role="button" src={!movie.poster_path || movie.poster_path.includes("poster") ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcDWX9Md-19_drWMmKVp6azbB8Y1stOiii55Q9KzGVMw&usqp=CAU&ec=45699843" : movie.poster_path} class="rounded-lg img-fluid" alt=""/>
        <div class="mt-4 mx-2">
          {
            movie.tags && movie.tags.map((tag, i) => {
              return <small class="badge badge-secondary mr-1 mb-2" key={i}>{tag}</small>
            })
          }
          <h5 role="button" class="card-title">{movie.title}</h5>
        </div>
      </div>
    </div>
  )
}

export default MovieCard