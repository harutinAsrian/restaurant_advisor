import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Map from './View/Map'
import List from './View/List'
import PlaceDetails from './View/PlaceDetails'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<><List /><Map /></>}/>
        <Route path="/restaurant/:id" element={<PlaceDetails />} />
      </Routes>
    </>
  )
}

export default Router