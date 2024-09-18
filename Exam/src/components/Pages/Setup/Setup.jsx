import React from 'react'

export const Setup = () => {
  return (
    <>
        <div className="unbox">
            <h2>UNBOXING</h2>
            <ul>
                <li>Carefully remove the keyboard and accessories from the box.</li>
            </ul>
        </div>
        <div className="connecting">
            <h2>CONNECTING</h2>
            <ul>
                <li>Plug the USB cable into an available USB port on your computer.</li>
                <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
            </ul>
        </div>
        <div className="soft">
            <h2>SOFTWARE(OPTIONAL)</h2>
            <ul>
                <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                <li>Follow the on-screen instructions to install the software.</li>
            </ul>
        </div>
    </>
  )
}
