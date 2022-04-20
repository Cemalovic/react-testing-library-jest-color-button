import { useState } from 'react'
import './App.css'

// replace(/\B(A-Z)\B/g, ' $1') znaci:
// ako nadjes veliko slovo unutar reci -> '/\B([A-Z])\B/', cak i vise puta -> 'g' (uradi to svaki put kad ga nadjes) a zelim da ga zamenis, sa bilo kojim slovom koji nadjes, da mu prethodi razmak -> ' $1'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  // const [buttonColor, setButtonColor] = useState('red')
  // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  const [disabled, setDisabled] = useState(false)

  const onButton = () => {
    setButtonColor(newButtonColor)
  }

  const diableButton = (e) => {
    setDisabled(e.target.checked)
  }

  return (
    <div>
      {/* <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={onButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button> */}

      <button
        style={{
          backgroundColor: disabled ? 'gray' : buttonColor,
          color: 'white'
        }}
        onClick={onButton}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
