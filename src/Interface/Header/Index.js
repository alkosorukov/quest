import React from "react"
import { Link } from 'react-router-dom'
import Search from '../Search/Index'
import PanelMenu from '../PanelMenu/Index'
import Welcome from '../Welcome/Index'
import { faq } from '../../Common/svg-icons'

import logo from './img/logo.png'
import logo2 from './img/logo@2x.png'
import logo3 from './img/logo@3x.png'

import './style.css'


export const Header = () => (
    <header className="header">
        <Welcome />
        <div className='topline'>
            <Link to="/" className="header-logo"><img src={logo} srcSet={`${logo2} 2x, ${logo3} 3x`} alt="" /></Link>
            <section className="header-tool">
                <form className="header-tool__lang">
                    <fieldset><button type="button" className="header-tool__lang-btn">EN</button>/<span className="header-tool__lang-span">RU</span></fieldset>
                </form>

                <PanelMenu />
                <Search className="ml-20" />
                <Link to="/faq" className="header-tool__faq">{faq('#4A4A4A')}</Link>
            </section>
        </div>
    </header>
)