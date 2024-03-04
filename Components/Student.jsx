import React from "react"
import propTypes from 'prop-types'

const Student = (props) => {
    {/*props read-only shared between Components
helps to pass data from Parent to child as a paremeter
Componet key=Value*/}
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student{props.isStudent ? "Yes":"No"}</p>
        </div>
    )
}

{/*propType is a mechanism in the node which ensures the value passed is a correct i.e a string or number gives a warning if its incorect */ }

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent:propTypes.bool
    
}
{/*defaultProps are used incase prop is not passed down */ }
Student.defaultProps = {
    name: "Guest",
    age: 30,

    isStudent:true,
}
    
export default Student