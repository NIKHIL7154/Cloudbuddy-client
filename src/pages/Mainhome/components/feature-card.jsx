import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-container">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="feature-card-image"
      />
      <h5 className="feature-card-text1 Headline5">{props.cardTitle}</h5>
      <span>
        {props.text1 ?? (
          <Fragment>
            <span className="feature-card-text3">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                erat nibh tristique ipsum.
              </span>
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

FeatureCard.defaultProps = {
  cardTitle: 'Title',
  imageSrc: '/01.svg',
  imageAlt: 'image',
  text1: undefined,
}

FeatureCard.propTypes = {
  cardTitle: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.element,
}

export default FeatureCard
