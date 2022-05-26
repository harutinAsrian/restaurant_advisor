import React from 'react'
import { useSelector } from 'react-redux'
import { MapContainer, TileLayer, useMap, Marker, Tooltip } from 'react-leaflet'
import { centerCoordinates, restaurants } from '../../redux/selectors/selectors'
import { renderRaitingBar } from '../../helpers/renderRaitingBar'
import { useNavigate } from 'react-router-dom' 

const Map = () => {
  const navigate = useNavigate()
  const center = useSelector(centerCoordinates)
  const { restaurantsList } = useSelector(restaurants)

  const handleClick = (id) => {
    navigate(`/restaurant/${id}`)
  }

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div id="map" className="map">
      <MapContainer
        center={center}
        zoom={16}
        scrollWheelZoom={false}
      >
        <ChangeView center={center} zoom={16} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          restaurantsList.length && restaurantsList.map(marker => {
            const { id, name, raiting, coordinates } = marker
            return (
              <Marker
                key={id}
                position={[coordinates.latitude, coordinates.longitude]}
                eventHandlers={{
                  click: e => handleClick(id),
                }}
              >
                <Tooltip>
                  {name} <br /> raiting: {renderRaitingBar(raiting)}
                </Tooltip>
              </Marker>
            )
          })
        }

      </MapContainer>
    </div>
  )
}

export default Map