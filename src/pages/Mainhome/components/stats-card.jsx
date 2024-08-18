import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats-card.css'

const StatsCard = (props) => {
  return (
    <div className="stats-card-container1">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="stats-card-image"
      />
      <div className="stats-card-container2">
        <h1 className="Headline4">{props.number}</h1>
        <span>
          {props.text ?? (
            <Fragment>
              <span className="stats-card-text3">
                <span>Description</span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}

StatsCard.defaultProps = {
  number: '10',
  imageSrc: '/05.svg',
  imageAlt: 'image',
  text: undefined,
}

StatsCard.propTypes = {
  number: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
}

export default StatsCard
