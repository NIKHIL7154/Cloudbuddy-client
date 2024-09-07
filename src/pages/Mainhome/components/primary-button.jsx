import React from 'react'

import PropTypes from 'prop-types'

import './primary-button.css'
import { useNavigate } from 'react-router-dom'

const PrimaryButton = (props) => {
  const navigate= useNavigate()
  return (
    <div className={`primary-button-container ${props.rootClassName} `}>
      <button onClick={()=>{
        navigate('/auth/login')
      }} className="primary-button-button button">{props.button}</button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryButton
