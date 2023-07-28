import React, { useContext } from 'react'
import { DarkModeContext } from '../App'

export default function Header({toggleTheme}) {

const [darkTheme, setDarkTheme]= useContext(DarkModeContext)

  return (
    <div className={darkTheme && 'headerClass Dark'  || "headerClass" }>
      <h2>Where in the world?</h2>
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  )
}
