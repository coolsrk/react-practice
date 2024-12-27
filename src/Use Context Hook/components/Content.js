import React, {useContext} from 'react'
import { ModeContext } from '../context/ModeContext';

const Content = () => {
  const modeProvider = useContext(ModeContext);  
  return (
    <div>
        <h1>Content</h1>
        <button onClick = {() => modeProvider.setMode('dark')}>Dark Mode</button>
        <button onClick = {() => modeProvider.setMode('light')}>Light</button>
    </div>
  )
}

export default Content