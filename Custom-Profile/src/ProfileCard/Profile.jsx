import './Profile.css'
import PropTypes from 'prop-types'
export default function Profile(props){//props is to pass info to functional components
    return(
        <div className="person">
            <img src="src/assets/gogo.jpg" alt="person-logo" className="person-picture" />
            <p><strong>{props.name}</strong></p>
            <p>College Program: {(props.course).toUpperCase()}</p>
            <p>Biological Status: {props.alive? "alive":"deceased"}</p>
            <p>Age: {props.age} years old</p>
        </div>
    )
}

Profile.defaultProps ={
    name:"Guest", 
    course:"unknown",
    alive: false, 
    age:0
}
//check validity of types passed as props
Profile.propTypes ={
    name:PropTypes.string,
    food:PropTypes.string,
    isHealthy:PropTypes.bool,
    age:PropTypes.number
}