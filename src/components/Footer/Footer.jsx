import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.svg"


export default function Footer() {
  return (
    <footer>
        <div className="footer-top">
            <div className='footer__contact'>
                <h2>Contact</h2>
                <p>Do you have any question?</p>
                <a href="tel: +998 88 123 80 80">(88) 123 80 80</a>
                <a href="tel: +998 90 112 27 57">(90) 112 27 57</a>
            </div>
            <div className='footer__address'>
                <h2>Address</h2>

                <a href="https://goo.gl/maps/i8BxsTgGTJUAWaSu9">Tashkent yunusobod iftihor 1</a>
            </div>
            <div className='footer__lang'>
                <h2>Language</h2>
                <ul>
                    <li>RU</li>
                    <li>UZ</li>
                    <li>EN</li>
                </ul>
            </div>
        </div>
        <div className='hr'></div>
        <div className="footer-bottom">
            <div className="footer__img">
                <a href="#" target="_blank"><img src={logo} alt="" /></a>
            </div>
        </div>
    </footer>
  )
}
