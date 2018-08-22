import React from 'react';
import './style.css'

export const Footer = () => <footer className='footer'><span>{`© ${(new Date()).getFullYear()} Media Direction Group`}</span></footer>