import React from "react"

export default class CalorieDollarChart extends React.Component{


render(){
  let cumulativeArray = []
  let calorieDollarNodes = this.props.userCheckIns.map(function(checkIn){
     let calories =checkIn.checkIn_dish.dish_calories
     let dollars = checkIn.checkIn_dish.dish_price
     let calorieDollars = checkIn.checkIn_dish.dish_calories / checkIn.checkIn_dish.dish_price
      cumulativeArray.push(calorieDollars)
      console.log(cumulativeArray)
      let cumulativeSum = cumulativeArray.reduce(function(prev, curr){
        return prev + curr
      })
      let calorieDollarAverage = (cumulativeSum / cumulativeArray.length)
      console.log(calorieDollarAverage)
      return (

          <li key={checkIn._id}>
            calories: {calories} <br/>
             dollars: {dollars} <br />
             calorieDollars: {calorieDollars} <br/>
             you average calorieDollars so far: {calorieDollarAverage}
             <hr/>
          </li>

      )
    })

 return (
  <div>
    <h3>insert d3 chart here</h3>
    <ul> {calorieDollarNodes} </ul>
  </div>
)
      }
}
