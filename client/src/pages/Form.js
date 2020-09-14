import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { GET_MOVIES, POST_MOVIE } from '../gql/moviesQueries';


const Form = () => {
  const [title, setTitle] = useState("")
  const [poster_path, setPoster] = useState("")
  const [overview, setOverview] = useState("")
  const [popularity, setPopularity] = useState(0.0)
  const [tags, setTags] = useState([]) 
  const [postMovie, { data }] = useMutation(POST_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }]
  });

  const changeForm = () => {
    
  }
  

  const onChecked = (e) => {
    let temp = tags
    if (e.target.checked) {
      if (tags.length < 3) {
        temp.push(e.target.value)
        setTags(temp)
      } else {
        alert("Tags cannot be more than 3") // nanti ganti sweetalert
        e.target.checked = false
      }
    } 

    if (!e.target.checked) {
      const newTemp = temp.filter(item => item !== e.target.value)
      setTags(newTemp || [])
    }
  }
  
  const submitMovie = (e) => {
    e.preventDefault()
    postMovie({
      variables: {
        title,
        overview,
        poster_path,
        popularity,
        tags,
      }
    });
  }
  

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <form className="col-5" onSubmit={submitMovie}>
          <h3 className="text-center text-org mb-3">Add Movie 
            <span><div className="far fa-exchange-alt ml-3 text-light" role="button" onClick={changeForm}></div></span>
          </h3>
          <div className="form-group">
            <label className="text-org ml-3">Title</label>
            <input 
              type="text" 
              className="form-control rounded-pill input-box" 
              id="title" 
              placeholder="eg. The Duchess"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Poster Path</label>
            <input 
              type="text" 
              className="form-control rounded-pill input-box" 
              id="poster" 
              placeholder="eg. http://static.tvmaze.com/uploads/images/original_untouched/272/682085.jpg"
              onChange={(e) => setPoster(e.target.value)}
              value={poster_path}
            />
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Rating</label>
            <div className="input-group mb-3">
              <input 
                type="range" 
                step="0.1" 
                className="form-control pop" 
                id="popularity" 
                min="0.0" max="10"
                onChange={(e) => setPopularity(Number(e.target.value))}
                value={popularity}
              />
              <div className="input-group-append">
                <span className="input-group-text ml-3" id="">{popularity}</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Tags</label>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="romance" value="Romance" onChange={onChecked}/>
              <label className="custom-control-label" htmlFor="romance">Romance</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Drama" value="Drama" onChange={onChecked}/>
              <label className="custom-control-label" htmlFor="Drama">Drama</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Action" value="Action" onChange={onChecked}/>
              <label className="custom-control-label" htmlFor="Action">Action</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Comedy" value="Comedy" onChange={onChecked}/>
              <label className="custom-control-label" htmlFor="Comedy">Comedy</label>
            </div>
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Overview</label>
            <textarea 
              rows="3" 
              className="form-control rounded-box input-box" 
              id="overview" 
              placeholder="eg. The Duchess"
              onChange={(e) => setOverview(e.target.value)}
              value={overview}
            />
          </div>
          <button type="submit" className="btn btn-org rounded-pill mt-2">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Form
