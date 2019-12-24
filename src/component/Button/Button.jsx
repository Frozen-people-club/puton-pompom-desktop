import React from 'react';

const Button = (props) => {
    return (
        <button type="button" className={props.class}  onClick={() => {props.updateData({active: props.index})}}>{props.dayWeek}</button>)
}

export default Button;