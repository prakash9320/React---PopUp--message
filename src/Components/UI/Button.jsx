import React from 'react'
 import classes from './Button.Module.css';
const Button = (props) => {
    return (
        <div>
            <button className ={classes.button} type={props.type || 'button'} onClick={props.onClick}>
                 {props.children}
            </button>
        </div>
    )
}

export default Button
