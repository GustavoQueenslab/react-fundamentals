// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle



function Box({style,children,...props}){
  return(
<div style={style} className="box" {...props}>{children}</div>
  )
}

function App() {
  return (
    <div>
      {/* We use camelCase in the styles instead kebab-case. We also use 2 brackets because it's the
      combination of a jsx expression and an object expression */}
      <Box style={{backgroundColor:'green',fontStyle:'italic'}}>Green</Box>
    </div>
  )
}

export default App