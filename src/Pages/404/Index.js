import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import img404 from './img/404.png'

import './style.css'

export const PasDePage = () => {


    const token = true
    return (
        <Fragment>
            <div className='content-404'>
            <article>
                <img src={img404} alt='404' className='img404'/>
                <p>
                Искомая страница не найдена. Попробуйте 
                {token ?

                    <Fragment> вернуться на <Link to='/'>главную</Link></Fragment>
                    :
                    <Fragment>{' '}<Link to='/auth'>авторизоваться</Link></Fragment>
                }
                </p>
                </article>
            </div>
        </Fragment>
    )
}