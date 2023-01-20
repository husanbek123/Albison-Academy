import React from 'react'
import "./Navbar.scss"
import Button from '../Button/Button'
import logo from "../../assets/logo.svg"


export default function Navbar() {
  return (
    <nav>
        <div className="nav__logo">
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className='nav__navigation'>
            <ul>
                <li className='nav__link'>
                    <a href="#one-step">Asosiy</a>
                </li>
                <li className='nav__link'>
                    <a href="#strong-portfolio">Ustunliklar</a>
                </li>
                <li className='nav__link'>
                    <a href="#find-job">Career</a>
                </li>
            </ul>
            <Button className='nav__btn' value="Contact" bg="blue" fontColor="white" />
        </div>
    </nav>
  )
}
