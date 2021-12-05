import React from 'react'
//import PropTypes from "prop-types";
function Alert(props) {
    return (
        props.alert && <div>
             <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                  <p>{props.alert.msg}</p>
               
                </div> 
        </div>
    )
}

export default Alert
