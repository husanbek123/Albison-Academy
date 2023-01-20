import React from 'react'
import "./Button.scss"

    
export default function Button({className, value, bg, fontColor}) {

  fontColor === "blue" ? fontColor = "rgb(46, 24, 106)" : fontColor = fontColor
  
  if(className === "courses__btn") {
    return (
      <button  
        className={className}
        style={{
          color: fontColor,
        }}
      >
        Ro'yxatdan o'ting
      </button>
    )
  }
  else {
    return (
      <button 
        className={className}
        style={{
          backgroundColor: bg === "blue" ? "rgb(46, 24, 106)" : "white",
          color: fontColor,
        }}
      >
        {value}
      </button>
    )
  }
}
