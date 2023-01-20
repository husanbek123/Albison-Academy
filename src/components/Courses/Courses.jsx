import React from 'react'
import "./Courses.scss"
import List from '../List/List/List.jsx'
import Button from '../Button/Button'


export default function Courses() {
  return (
    <section className="courses-section">
      <div className="courses__box">
        <div className="box__column">
          <List className="frontend" />
        </div>
        <div className="box__column">
          <List className="backend" />
        </div>
        <div className="box__column">
          <List className="internship" />
        </div>
      </div>
      <Button value="Ro'yxatdan o'tish" className="courses__btn" />
    </section>
  )
}
