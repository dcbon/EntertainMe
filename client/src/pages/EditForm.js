import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { GET_MOVIE, PUT_MOVIE } from '../gql/moviesQueries';
import Alert from '../components/Alert'
import { useHistory, useParams } from "react-router-dom";

const EditForm = () => {
  const history = useHistory()
  const { _id } = useParams()
  const { loading, data } = useQuery(GET_MOVIE, {variables: { _id }})  
  const [title, setTitle] = useState("")
  const [poster_path, setPoster] = useState("")
  const [overview, setOverview] = useState("")
  const [popularity, setPopularity] = useState(0.0)
  const [tags, setTags] = useState([]) 
  const [validation, setValidation] = useState(true)
  const [msg, setMsg] = useState("")
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState({})
  
  
  
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

  const onChecked = (e) => {
    let temp = tags
    if (e.target.checked) {
      if (tags.length < 3) {
        temp.push(e.target.value)
        setTags(temp)
      } else {
        setMsg("Tags cannot be more than 3")
        setValidation(false)
        setModal(true)
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
    // console.log(data, '====data')
    if (title && overview && popularity && tags.length !== 0) {
      // postMovie({
      //   variables: {
      //     title,
      //     overview,
      //     poster_path: poster_path || "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcDWX9Md-19_drWMmKVp6azbB8Y1stOiii55Q9KzGVMw&usqp=CAU&ec=45699843",
      //     popularity,
      //     tags,
      //   }
      // });
      setMsg("Movie has been added to database")
      setValidation(true)
      setModal(true)
      setTitle("")
      setOverview("")
      setPoster("")
      setPopularity(0.0)
      setTags([])
      history.push("/movies")
    }
    else if (!title) {
      setMsg("Title cannot be empty!")
      setValidation(false)
      setModal(true)
    }
    else if (!overview) {
      setMsg("Overview cannot be empty!")
      setValidation(false)
      setModal(true)
    }
    else if (!popularity) {
      setMsg("Rating cannot be empty!")
      setValidation(false)
      setModal(true)
    }
    else if (tags.length === 0) {
      setMsg("Tag(s) cannot be empty!")
      setValidation(false)
      setModal(true)
    }
  }

  return (
    <div className="container my-5">
      {
        modal && <Alert show={modal} close={() => setModal(false)} validation={validation} msg={msg} />
      }
      <div className="row justify-content-center">
        <form className="col-5" onSubmit={submitMovie}>
          <h3 className="text-center text-org mb-3">Edit {data.Movie ? 'Movie' : 'Tv Series'}</h3>
          <div className="form-group">
            <label className="text-org ml-3">Title</label>
            <input 
              type="text" 
              className="form-control rounded-pill input-box" 
              id="title" 
              placeholder="eg. The Duchess"
              onChange={(e) => setTitle(e.target.value)}
              value={title || data.Movie.title}
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
              value={poster_path || data.Movie.poster_path}
            />
            <small className="text-gry ml-3">Empty it to use default poster</small>
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
                value={popularity || data.Movie.popularity}
              />
              <div className="input-group-append">
                <span className="input-group-text ml-3" id="">{popularity || data.Movie.popularity}</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Tags</label>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="romance" value="Romance" onChange={onChecked} checked={data.Movie.tags.includes("Romance")}/>
              <label className="custom-control-label" htmlFor="romance">Romance</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Drama" value="Drama" onChange={onChecked} checked={data.Movie.tags.includes("Drama")}/>
              <label className="custom-control-label" htmlFor="Drama">Drama</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Action" value="Action" onChange={onChecked} checked={data.Movie.tags.includes("Action")}/>
              <label className="custom-control-label" htmlFor="Action">Action</label>
            </div>
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="Comedy" value="Comedy" onChange={onChecked} checked={data.Movie.tags.includes("Comedy")}/>
              <label className="custom-control-label" htmlFor="Comedy">Comedy</label>
            </div>
          </div>
          <div className="form-group">
            <label className="text-org ml-3">Overview</label>
            <textarea 
              rows="3" 
              className="form-control rounded-box input-box" 
              id="overview" 
              placeholder="eg. This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s."
              onChange={(e) => setOverview(e.target.value)}
              value={overview || data.Movie.overview}
            />
          </div>
          <button type="submit" className="btn btn-org rounded-pill mt-2">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
