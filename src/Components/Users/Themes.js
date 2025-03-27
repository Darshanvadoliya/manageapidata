import React, { useContext } from 'react'
import { ThemeContext } from '../Context/allContexts'
// import { ThemeContext } from '../Context/ThemeContext'

function Themes() {
      const { theme, setTheme } = useContext(ThemeContext)
        
    return (
        <div className="dropdown">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Theme
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#" onClick={() => setTheme('light')}>Light Theme</a>
                <a className="dropdown-item" href="#" onClick={() => setTheme('dark')}>Dark Theme</a>
                <a className="dropdown-item" href="#" onClick={() => setTheme('warning')}>Orange Thme</a>
                <a className="dropdown-item" href="#" onClick={() => setTheme('secondary')}>Gray Thme</a>
            </div>
        </div>
    )
}

export default Themes