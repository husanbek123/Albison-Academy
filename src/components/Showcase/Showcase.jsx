import React from 'react'
import showcase from "../../assets/showcase-img.svg"
import Button from '../Button/Button'

import "./Showcase.scss"



export default function Showcase() {
  return (
    <section 
      className='showcase' 
      data-aos="fade-left"
      data-aos-offset="400"
      data-aos-duration="500"
    >
      <div className='showcase__info'>
        <h1>NEGA YANA GRAND KURSLAR</h1>
        <p>
          Kechagina ochilgan dasturchilar maktabimiz bitiruvchilari hozirda nafaqat bizda balki boshqa xalqaro IT kompaniyalarda ham o'z o'rnini egallashmoqda. Hozirda ushbu xalqaro kompaniyalar o'z ishonchlarini bildirib, yanada ko'proq dasturchilarni yetkazib berishda hamkorlarimizga aylanishdi
        </p>
        <div className="showcase__btns">
          <Button className="showcase__register" value="Ro'yxatdan o'tish" bg="blue" fontColor="white" />
          <Button className="showcase__all-courses" value="Barcha kurslar" bg="white" fontColor="blue" />
        </div>
      </div>
      <div className='showcase__img'>
        <img src={showcase} alt="" />
      </div>
    </section>
  )
}
