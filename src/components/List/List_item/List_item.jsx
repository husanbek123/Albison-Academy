import React from 'react'
import "./List_item.scss"

export default function List_item({imgSrc, text}) {
  return (
    <li> 
      <img src={imgSrc} alt="" />
      <span>{text}</span>
    </li>
  )
}
