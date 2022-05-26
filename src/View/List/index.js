import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getRestaurantData } from '../../redux/slices/dataSlice'
import { setCenterCoordinates } from '../../redux/slices/mapSlice';
import { restaurants } from '../../redux/selectors/selectors'
import ListHeader from './ListHeader';
import { renderRaitingBar } from '../../helpers/renderRaitingBar';
import { sortByAscending, sortByDescending } from '../../helpers/sortList';
import { Link } from 'react-router-dom';

const List = () => {
  const dispatch = useDispatch()
  const { restaurantsList, isLoading } = useSelector(restaurants)
  const [sortAscending, setSortAscending] = useState(true)
  const [sortedList, setSortedList] = useState([])

  useEffect(() => {
    dispatch(getRestaurantData())
  }, [])

  useEffect(() => {
    setSortedList(sortAscending ? sortByAscending(restaurantsList) : sortByDescending(restaurantsList))
  }, [restaurantsList, sortAscending])

  const handleClick = (coordinates) => {
    dispatch(setCenterCoordinates(coordinates))
  }

  const renderRestaurantItem = (restaurant) => {
    const { id, name, raiting, imgUrl, feedback, coordinates } = restaurant

    return <div className="list-item" key={id} onClick={() => handleClick(coordinates)}>
      <div className="list-item__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="list-item-info">
        <div className="list-item__name">{name}</div>
        <div className="list-item__raiting">raiting: {renderRaitingBar(raiting)}</div>
      </div>
      <Link to={`/restaurant/${id}`}>
        <div className="list-item__button">
          <i><FontAwesomeIcon icon={faAngleRight} /></i>
        </div>
      </Link>
    </div>
  }

  return (
    <div className="list">
      <ListHeader
        sortAscending={sortAscending}
        setSortAscending={setSortAscending}
      />
      <div className="list-item-container">
        {isLoading ? <div className="spinner">
          <span className="loader loader-quart"></span>
          Loading...
        </div> : !!sortedList.length && sortedList.map(restaurant => (
          renderRestaurantItem(restaurant)
        ))}
      </div>
    </div>
  )
}

export default List