import { useState } from 'react'


const StatisticLine = (props) => {

  return (
    <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
  )
}
const Statistics = (props) => {
  let total = 0
  const reviews = props.reviews
  reviews.forEach(value => {
    total += value
  })


  let totalAverage = 0
  const average = props.average
  average.forEach(value => {
    totalAverage += value
  })

  totalAverage = totalAverage / average.length

  if (total !== 0) {
    return (
      <table>
        <tbody>
        <StatisticLine text = "good" value ={reviews[0]}/>
        <StatisticLine text = "neutral" value ={reviews[1]}/>
        <StatisticLine text = "bad" value ={reviews[2]}/>
        <StatisticLine text = "all" value ={total}/>
        <StatisticLine text = "average" value ={totalAverage}/>
        <StatisticLine text = "positive" value ={(reviews[0]/total) * 100}/>
      </tbody>
      </table>
        )
  }
  return (<div>No feedback given</div>)
}

const Button = (props) => {
  return(
<button onClick={props.handleClick}>
  {props.text}
</button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState([])


  const setGoodPlusOne = () => {
    setGood(good + 1)
    setAverage(average.concat(1))
  }
  const setNeutralPlusOne = () => {
    setNeutral(neutral + 1)
    setAverage(average.concat(0))
  }
  const setBadPlusOne = () => {
    setBad(bad + 1)
    setAverage(average.concat(-1))
  }

  const reviews = [good, neutral, bad]
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGoodPlusOne} text = "good"/>
      <Button handleClick={setNeutralPlusOne} text = "neutral"/>
      <Button handleClick={setBadPlusOne} text = "bad"/>

      <h1>statistics</h1>
      <Statistics reviews={reviews} average={average} />

    </div>
  )
}

export default App