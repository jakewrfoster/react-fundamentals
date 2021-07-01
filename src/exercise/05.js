// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const doStyles = (bgColor) => ({backgroundColor: bgColor, fontStyle: 'italic'});
const Box = ({size, color, children}) => (
  <div className={`box box--${size}`} style={doStyles(color)}>{children}</div>
);
const smallBox = <div className="box box--small" style={doStyles('lightblue')}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={doStyles('pink')}>medium pink box</div>
const largeBox = <div className="box box--large" style={doStyles('orange')}>large orange box</div>

function App() {
  return (
    <div>
      <Box size="small" color="lightblue">small lightblue box</Box>
      <Box size="medium" color="pink">medium pink box</Box>
      <Box size="large" color="orange">large orange box</Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
