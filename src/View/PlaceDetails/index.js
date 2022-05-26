import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { restaurants } from '../../redux/selectors/selectors'
import { useParams } from 'react-router-dom'
import { getRestaurantData } from '../../redux/slices/dataSlice'
import PlaceDetailsHeader from './PlaceDetailsHeader'
import { renderRaitingBar } from '../../helpers/renderRaitingBar'
import { updateRestaurantItem } from '../../redux/slices/dataSlice'

const PlaceDetails = () => {
  const dispatch = useDispatch()
  const [currentRestaurant, setCurrentRestaurant] = useState({})
  const [formState, setFormState] = useState({})

  const { id } = useParams()
  const { restaurantsList } = useSelector(restaurants)

  useEffect(() => {
    dispatch(getRestaurantData())
  }, [])

  useEffect(() => {
    let current = restaurantsList.find(item => item.id == id)
    setCurrentRestaurant(current)
  }, [restaurantsList])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormState({
      [name]: value
    })
  }

  const handleClick = (id) => {
    if (!formState.text) return
    const dataToServer = { ...currentRestaurant, feedback: [...currentRestaurant.feedback, formState.text] }
    dispatch(updateRestaurantItem({ id, data: dataToServer }))
    setFormState({})
  }

  const handleClear = (id) => {
    const dataToServer = { ...currentRestaurant, feedback: [] }
    dispatch(updateRestaurantItem({ id, data: dataToServer }))
  }

  if (!currentRestaurant) return null

  return (
    <div className="place-details-container">
      <PlaceDetailsHeader />
      <div className="place-details">
        <div className="place-details__img">
          <img src={currentRestaurant.imgUrl} alt="" />
        </div>
        <div className="place-details-info">
          <div className="place-details__title">{currentRestaurant.name}</div>
          <div className="place-details__raiting">raiting: {renderRaitingBar(currentRestaurant.raiting)}</div>
          <span className="subtitle">restaurant reviews:</span>
          <div className="place-details__feedback">
            {currentRestaurant?.feedback?.map(item => (
              <span key={currentRestaurant.id}>{item}</span>
            ))}
          </div>
          <div className="place-details__review-info">
            <span className="subtitle">Write a review:</span>
            <span className="clear-all" onClick={() => handleClear(id)}>clear all reviews</span>
          </div>
          <div className="place-details__leave-feedback">
            <textarea
              value={formState.text || ''}
              name="text"
              onChange={handleChange}
            />
          </div>
          <div className="place-details__submit">
            <button onClick={() => handleClick(id)}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetails