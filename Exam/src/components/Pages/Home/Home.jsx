import React from 'react'
import PropTypes from 'prop-types'
export const Home = (props) => {
  return (
    <div className="keyboard">
        <img src="src/assets/keybord.png" alt="person-logo" className="keyBoard_pic" />
        <p><strong>{props.model}</strong></p>
        <p>Type: {props.alive? "Mecahical":"Membrane"}</p>
        <p>RGB: {props.alive? "YES":"NO"}</p>
    </div>
  )


}
Home.defaultProps ={
    model:"keybord", 
    kind: false, 
    rgb:false
}
//check validity of types passed as props
Home.propTypes ={
    model:PropTypes.string,
    kind:PropTypes.bool,
    rgb:PropTypes.bool,
    
}
