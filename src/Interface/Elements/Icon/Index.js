import React from 'react'
import './style.css'

export const Icon = (type) => type ? <i className={`icon icon-${type}`} />:null