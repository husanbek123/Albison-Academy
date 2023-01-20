import React from 'react'
import List_item from '../List_item/List_item'

// Frontend images
import html from '../../../assets/html.svg'
import css3 from '../../../assets/css3.svg'
import react from '../../../assets/react.svg'
import javascript from '../../../assets/javascript.svg'
import nextjs from '../../../assets/nextjs.svg'
import git from '../../../assets/git.svg'

// Backend images
import nodejs from '../../../assets/nodejs.svg'
import java from '../../../assets/java.svg'
import python from '../../../assets/python.svg'
import go from '../../../assets/go.svg'
import mongodb from '../../../assets/mongodb.svg'
import postgresql from '../../../assets/postgresql.svg'

// Internship images
import Albison from '../../../assets/Albison.svg'
import itechart from '../../../assets/itechart.svg'
import epam from '../../../assets/epam.svg'
import rounded from '../../../assets/rounded.svg'
import tax from '../../../assets/tax.svg'
import transition from '../../../assets/transition.svg'


export default function List({className}) {
  if(className === "frontend") {
    return ( 
      <>
        <h1>{className.charAt(0).toUpperCase() + className.slice(1)}</h1>
        <ul className={className}>
          <List_item imgSrc={html} text="HTML" />
          <List_item imgSrc={css3} text="CSS + SASS" />
          <List_item imgSrc={javascript} text="JavaScript" />
          <List_item imgSrc={react} text="React Js" />
          <List_item imgSrc={nextjs} text="Next JS" />
          <List_item imgSrc={git} text="Git" />
        </ul>
      </>
    )
  }
  else if(className === "backend") {
    return ( 
      <>
        <h1>{className.charAt(0).toUpperCase() + className.slice(1)}</h1>
        <ul className={className}>
          <List_item imgSrc={nodejs} text="Node.js + Nest.js" />
          <List_item imgSrc={java} text="Java" />
          <List_item imgSrc={python} text="Python" />
          <List_item imgSrc={go} text="Go" />
          <List_item imgSrc={mongodb} text="MongoDB" />
          <List_item imgSrc={postgresql} text="PostgreSQL" />
        </ul>
      </>
    )
  }
  else if(className === "internship") {
    return ( 
      <>
        <h1>{className.charAt(0).toUpperCase() + className.slice(1)}</h1>
        <ul className={className}>
          <List_item imgSrc={Albison} text="Albison" />
          <List_item imgSrc={itechart} text="iTechArt" />
          <List_item imgSrc={epam} text="Epam" />
          <List_item imgSrc={rounded} text="Rounded" />
          <List_item imgSrc={tax} text="SICNT" />
          <List_item imgSrc={transition} text="Itransition" />
        </ul>
      </>
    )
  }
}
