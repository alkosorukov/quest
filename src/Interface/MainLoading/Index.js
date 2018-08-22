import React from "react";
import './style.css'

export const MainLoading = () => (
    <section className='loader-wrapper'>
        <div className='loader'/>
        <div className='loader-section section-left'/>
        <div className='loader-section section-right'/>
    </section>
)

export { showLoader, hideLoader } from './reducer'