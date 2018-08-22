import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../Elements/Icon/Index'
import './style.css'

export const LeftMenu = () => {
    const menu = [
        { abbr: 'home', path: '/' },
        { abbr: 'folder', path: '/folder' },
        { abbr: 'instr', path: '/instr' },
        { abbr: 'add-instr', path: '/add-instr' },
        { abbr: 'settings', path: '/settings' }
    ]
    const url = window.location.pathname

    return (
        <nav className='left-menu'>
            {menu.map(({ abbr, path }) =>
                path === url || (path !== '/' && (new RegExp(path)).test(url)) ?
                    <div className={`left-menu__elem left-menu__elem--${abbr} active`} key={abbr}>{Icon(abbr)}</div>
                    :
                    <Link to={`${path}`} className={`left-menu__elem left-menu__elem--${abbr}`} key={abbr}>{Icon(abbr)}</Link>
            )}
        </nav>
    )
}