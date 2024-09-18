import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer className="foot">
            <p className="foot-text">
                &copy; {new Date().getFullYear()} KeyUp || Written by: Erin Covacha
            </p>
        </footer>
  )
}
