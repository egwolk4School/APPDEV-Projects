import React from 'react'

export const Troubleshooting = () => {
  return (
    <>
        <div className="not">
            <h2>NOT RESPONDING</h2>
            <ul>
                <li>Ensure the USB connection is secure.</li>
                <li>Try connecting the keyboard to a different USB port.</li>
                <li>Restart your computer if necessary.</li>
            </ul>
        </div>
        <div className="connecting">
            <h2>BACKLIGHT</h2>
            <ul>
                <li>Check if the backlight is disabled or set to a minimal brightness level</li>
                <li>Verify that the configuration software is properly installed.</li>
            </ul>
        </div>
        <div className="soft">
            <h2>KEY REGISTER</h2>
            <ul>
                <li>Confirm that no physical obstructions are affecting the key.</li>
                <li>Test the key in different applications to determine if the issue is software-related.</li>
            </ul>
        </div>
    </>
  )
}
