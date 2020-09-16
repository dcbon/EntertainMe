import React from 'react'
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory()

  const toMovies = () => {
    history.push("/movies")
  }

  const toSeries = () => {
    history.push("/series")
  }

  return (
    <div className="container p-5">
      <div id="home-page-carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#home-page-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#home-page-carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" role="button" onClick={toMovies}>
          <img src="https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" class="d-block w-100" alt="movie"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Movies</h5>
            <p>see our Movie Collection</p>
          </div>
        </div>
        <div class="carousel-item" role="button" onClick={toSeries}>
          <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" class="d-block w-100" alt="series"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>Series</h5>
            <p>see our Tv Series Collection</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#home-page-carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#home-page-carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
  )
}

export default Home
