import React from 'react'


const Alert = ({show, close, validation, msg}) => {
  const modalToggle = show ? "modal d-block" : "modal d-none"
  const img = validation ? 'success.png' : 'danger.png'

  return (
    <div className={modalToggle} onClick={close}>
      <div className="card border-org mb-3 modal-main" style={{maxWidth: "18rem"}}>
        <button type="button" className="close" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="card-body text-org text-center justify-content-center align-items-center">
          <img src={img} style={{width: '150px'}} className="m-3" alt=""/>
          <h5 className="card-title mt-3">{validation ? 'SUCCESS' : 'ERROR'}</h5>
          <p className="card-text">{msg}</p>
        </div>
      </div>
    </div>
  )
}

export default Alert
