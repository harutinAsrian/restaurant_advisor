import React from 'react'
import { useNavigate } from 'react-router-dom' 

const PlaceDetailsHeader = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div className="place-details__header" onClick={handleClick}>
      Back
    </div>
  )
}

export default PlaceDetailsHeader