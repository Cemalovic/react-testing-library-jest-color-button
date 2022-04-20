import { fireEvent, render, screen } from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App'

// '/learn react/i' je regEx izraz koji znaci
// daj mi string -> /learn react/
// koji je case-insensitive -> i tj. nije bitna velicina slova

// test('renders learn react link', () => {
//   render(<App />)
//   // const linkElement = screen.getByText(/learn react/i)
//   // const linkElement = screen.getByText('Learn React')
//   const linkElement = screen.getByRole('link', { name: /learn react/i })
//   expect(linkElement).toBeInTheDocument()
// })

test('button has correct initial collor', () => {
  render(<App />)

  // find an element with a role of 'button' and a text of 'Change to blue'
  // const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  // find an element with a role of 'button' and a text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  })

  // expect the background color to be red // mora da bude inline-style
  // expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // expect the background color to be Medium Violet Red
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  // click button
  fireEvent.click(colorButton)

  // expect the background color to be blue // mora da bude inline-style
  // expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })

  // expect the button text to be 'Change to red'
  // expect(colorButton.textContent).toBe('Change to red')

  // expect the button text to be 'Change to Medium Violet Red'
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)

  // check that the button starts 'enabled'
  // const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  })
  expect(colorButton).toBeEnabled()

  // check that the checkbox starts 'unchecked'
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('button disabled', () => {
  render(<App />)
  // const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('button changes and restore backround color on disabled and checked', () => {
  render(<App />)
  // const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  const colorButton = screen.getByRole('button', {
    name: 'Change to Midnight Blue'
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  // expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(colorButton)
  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
  // expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
})

describe('spaces before camel-case capital letters', () => {
  test('should work for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('should work for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('should work for multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
