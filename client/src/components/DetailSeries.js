import React from 'react'
import { useMutation } from "@apollo/client";
import { GET_SERIES, DEL_SERIES } from "../gql/seriesQueries";
// import { useHistory } from 'react-router-dom';

const DetailSeries = ({show, close, movie}) => {
  const modalToggle = show ? "modal d-block" : "modal d-none"
  // const history = useHistory()
  const [delSeries] = useMutation(DEL_SERIES, {
    refetchQueries: [{ query: GET_SERIES }]
  });

  const onEdit = (params) => {
    console.log('params ini edit', params)
  }

  const onDelete = () => {
    delSeries({
      variables: {
        _id: movie._id
      }
    })
  }


  return (
    <div className={modalToggle} onClick={close}>
      <div className="card border-org mb-3 modal-main">
        <button type="button" className="close" aria-label="Close" style={{zIndex: 10}} onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-body text-org">
          <div className="row">
            <div className="col">
              <img src={movie.poster_path} style={{width: '300px'}} className="ml-3" alt=""/>
            </div>
            <div className="col text-left">
              <h2 className="card-title mt-3">{movie.title}</h2>
              {
                movie.tags && movie.tags.map((tag, i) => {
                  return <small className="badge badge-secondary mr-1 mt-2 mb-3" key={i}>{tag}</small>
                })
              }
              <div className="card-text p overflow-auto" style={{height: "250px"}}>{movie.overview}</div>
              <div className="justify-content-center mt-3">
                <div onClick={() => onEdit(movie._id)} role="button" className="btn-org btn mr-3"><span className="fas fa-edit mr-3"></span>Edit</div>
                <div onClick={onDelete} role="button" className="btn-org btn"><span className="fas fa-trash mr-3"></span>Delete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailSeries
