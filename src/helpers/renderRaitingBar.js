import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const renderRaitingBar = (raiting) => {
  let raitingBar = Array(raiting).fill('star')

  return raitingBar.map((_, i) => (
    <i key={i} className="raiting-star"><FontAwesomeIcon icon={faStar} /></i>
  ))
}

