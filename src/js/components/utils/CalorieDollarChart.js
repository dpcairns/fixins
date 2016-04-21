import React from "react"
import { LineChart } from "rd3"
import MtSvgLines from 'react-mt-svg-lines';      // ES6+

export default class CalorieDollarChart extends React.Component{

render(){
  let target = parseInt(300)
  if (this.props.userTarget){
    target = parseInt(this.props.userTarget)
  }
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


 let targetValues = averagesOverTime.map(function(item, index){
    return {x: parseInt(index), y: parseInt(target)}
  })

let lineData = [
  {
    name: "your target calorieDollars",
    values: targetValues,
    strokeWidth: 5,
    stroke: "#fff",
    strokeDashArray: "5,5",
  },
{
  name: this.props.username + "actual calorieDollars",
  values: chartValues,
  strokeWidth: 10,
}

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
          animation={true}
          duration={200}
          width={1100}
          height={500}
          viewBoxObject={{x: 0, y: 0, width: 1100, height: 500}}
          title={title}
          hoverAnimation={false}
          yAxisLabel="Average CalorieDollars"
          xAxisLabel="Number of checkIns"
          gridHorizontal={true}
        />
  </div>
)
      }
}

///  <MtSvgLines animate={ true } duration={ 500 }>
