import React from 'react'
import "./Button.css"

export const Button = (props) => {
  return (

    <div>
        <button
        onClick={props.onClickProps}
        style={{
          backgroundColor: props.backgroundColor,
          color: props.fontColor
        }}
         className="btn"> {props.children}
        </button>
    </div>

  )
}
