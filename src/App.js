import { useState } from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const [disabled, setDisabled] = useState(false)

  const onButton = () => {
    setButtonColor(newButtonColor)
  }

  const diableButton = (e) => {
    setDisabled(e.target.checked)
  }

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={onButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>

      <input
        id='disable-button-checkbox'
        type='checkbox'
        onChange={diableButton}
        defaultChecked={disabled}
        aria-checked={disabled}
      />

      <label htmlFor='disable-button-checkbox'>Disable button</label>

      {/* <button className='button'>Change to blue</button> */}
    </div>
  )
}

export default App
