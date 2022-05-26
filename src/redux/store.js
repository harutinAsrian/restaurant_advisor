import { configureStore, combineReducers } from '@reduxjs/toolkit'
import restaurantList from './slices/dataSlice'
import centerCoordinates from './slices/mapSlice'

const rootReducer = combineReducers({
  restaurantList,
  centerCoordinates,
})

export const store = configureStore({
  reducer: rootReducer
})
