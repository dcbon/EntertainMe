import React, { useState } from 'react'
import { useMutation, useQuery } from "@apollo/client";
import { DEL_MOVIE, GET_MOVIES, GET_MOVIE } from "../gql/moviesQueries";
import Alert from '../components/Alert'
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams()
  const [alert, setAlert] = useState(false)
  const [validation, setValidation] = useState(true)
  const [msg, setMsg] = useState("")
  const [delMovie] = useMutation(DEL_MOVIE, {
    refetchQueries: [{ query: GET_MOVIES }]
  });

  const onEdit = (params) => {
    console.log('params', params)
  }

  const onDelete = () => {
    // delMovie({
    //   variables: {
    //     _id: data.movie._id
    //   }
    // })
    setMsg("Movie has been deleted")
    setValidation(true)
    setAlert(true)
  }

  // console.log('data', data)

  return (
    <div>
      {
        alert && <Alert show={alert} close={() => setAlert(false)} validation={validation} msg={msg} />
      }
      {/* <div className="card border-org mb-3">
        <div className="card-body text-org">
          <div className="row">
            <div className="col">
              <img src={data.movie.poster_path} style={{width: '300px'}} className="ml-3" alt=""/>
            </div>
            <div className="col text-left">
              <h2 className="card-title mt-3">{data.movie.title}</h2>
              {
                data.movie.tags && data.movie.tags.map((tag, i) => {
                  return <small className="badge badge-secondary mr-1 mt-2 mb-3" key={i}>{tag}</small>
                })
              }
              <div className="card-text p overflow-auto" style={{height: "250px"}}>{data.movie.overview}</div>
              <div className="justify-content-center mt-3">
                <div onClick={() => onEdit(data.movie._id)} role="button" className="btn-org btn mr-3"><span className="fas fa-edit mr-3"></span>Edit</div>
                <div onClick={onDelete} role="button" className="btn-org btn"><span className="fas fa-trash mr-3"></span>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Detail
