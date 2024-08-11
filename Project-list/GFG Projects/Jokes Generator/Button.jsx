import React from 'react';
import '../Jokes Generator/Button.css'

const Button = ({callApi}) => {
  return (
    <button onClick={callApi}>
        Click to generate a joke
    </button>
  )
}

export default Button
