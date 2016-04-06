import React from "react"
import { LineChart } from "rd3"
export default class CalorieDollarChart extends React.Component{


render(){
  let target = parseInt(300)
  let cumulativeArray = []
  let averagesOverTime = [target]


///////____FOREACH________////////////////

     this.props.userCheckIns.forEach(function(checkIn){
      let calories = checkIn.checkIn_dish.dish_calories
      let dollars = checkIn.checkIn_dish.dish_price
      let calorieDollars = checkIn.checkIn_dish.dish_calories / checkIn.checkIn_dish.dish_price
       cumulativeArray.push(calorieDollars)
       let cumulativeSum = cumulativeArray.reduce(function(prev, curr){
         return prev + curr
       })
       let calorieDollarAverage = (cumulativeSum / cumulativeArray.length)
       averagesOverTime.push(calorieDollarAverage)

})

//////////CHART___VALUES//////////////

let chartValues = averagesOverTime.map(function(item, index){
   return {x: parseInt(index), y: parseInt(item)}
 })
let lineData = [
{
  name: this.props.username,
  values: chartValues,
  strokeWidth: 5,
  strokeDashArray: "5,5",
},
];

/////////////_______END_CHART_VALUES_________/////////////

/////////////_________NODES_________//////////////
  let calorieDollarNodes = this.props.userCheckIns.map(function(checkIn){
     let calories = checkIn.checkIn_dish.dish_calories
     let dollars = checkIn.checkIn_dish.dish_price
     let calorieDollars = checkIn.checkIn_dish.dish_calories / checkIn.checkIn_dish.dish_price
      return (

          <li key={checkIn._id}>
            calories: {calories}
             dollars: {dollars}
             calorieDollars: {calorieDollars}
             <hr/>
          </li>

      )
    })
  ///////////////______END_NODES________/////////////////

let title= this.props.username + "'s CalorieDollars over time'"
 return (
  <div>
    <LineChart
  legend={true}
  data={lineData}
  width={765}
  height={400}
  viewBoxObject={{x: 0, y: 0, width: 765, height: 400}}
  title={title}
  yAxisLabel="Average CalorieDollars"
  xAxisLabel="Number of checkIns"
  gridHorizontal={true}
/>
  </div>
)
      }
}
