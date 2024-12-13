import { useState } from "react"

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return(
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return(
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

// const App = () => {
//   const [left,setLeft] = useState(0)
//   const [right,setRight] = useState(0)
//   const [allClicks,setAll] = useState([])
//   const [total,setTotal] =useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updateLeft = left+1
//     setLeft(updateLeft)
//     setTotal(updateLeft+right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updateRight = right+1
//     setRight(updateRight)
//     setTotal(left+updateRight)
//   }

//   return(
//     <>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </>
//   )
// }

const App = () => {

  const [value,setValue] = useState(10)

  const setToValue= (newValue) => {
    console.log('value now ', newValue)
    setValue(newValue)
  }

  const Button = (props) => (
    <button onClick={props.handleClick}> {props.text} </button>
  )

  return(
    <div>
      {value}
      <Button handleClick={() => setToValue(1000)} text="1000" />
      <Button handleClick={() => setToValue(0)} text="0" />
      <Button handleClick={() => setToValue(value+1)} text="+1" />
    </div>
  )
}

export default App
