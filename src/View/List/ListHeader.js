import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ListHeader = ({sortAscending, setSortAscending}) => {

  return (
    <div className="list-header" onClick={() => setSortAscending(arrDown => !arrDown)}>
      <span>Sort by raiting</span>
      <i><FontAwesomeIcon icon={sortAscending ? faChevronDown : faChevronUp} /></i>
    </div>
  )
}

export default ListHeader