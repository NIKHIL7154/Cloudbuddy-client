import React from 'react'

import PropTypes from 'prop-types'

import './testimonials-card.css'

const TestimonialsCard = (props) => {
  return (
    <div className={`testimonials-card-container1 ${props.rootClassName} `}>
      <div className="testimonials-card-container2">
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="testimonials-card-image"
        />
        <div className="testimonials-card-container3">
          <span className="testimonials-card-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

TestimonialsCard.defaultProps = {
  imageAlt1: 'image',
  text: 'To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.',
  imageSrc1: '/quote-mark.svg',
  rootClassName: '',
}

TestimonialsCard.propTypes = {
  imageAlt1: PropTypes.string,
  text: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TestimonialsCard
