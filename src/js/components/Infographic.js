import React from "react"
import Icon from "./Icon"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
export default class Infographic extends React.Component{
  render(){
    let NO_PROGRAM = "NO_PROGRAM"
    let CURRENT_LEVEL = "CURRENT_LEVEL"
    let FULL_LEVEL = "FULL_LEVEL"
    let icons = []
    let name = this.props.name
    let noNumber = this.props.noNumber
    let statusQuo = this.props.statusQuo
    let fullNumber = this.props.fullNumber
    let image = this.props.image
    let bonus = fullNumber - statusQuo
    let deficit = statusQuo - noNumber
    let counter = 1
    let key = ""

    let visibility = this.props.visibility
    while (counter <= fullNumber ) {
            if (counter <= noNumber){
              key = Math.random
            icons.push(
                  <Icon key={key + counter} image={image} iconType={NO_PROGRAM} visibility={visibility} />
                )
              }
            else if (noNumber < counter && counter <= statusQuo) {
             key = Math.random
            icons.push(
                  <Icon key={key + counter} image={image} iconType={CURRENT_LEVEL} visibility={visibility} />
                )
              }
            else  if  (statusQuo < counter && counter <= fullNumber) {
            key = Math.random
            icons.push(
                  <Icon key={key + counter} image={image} iconType={FULL_LEVEL} visibility={visibility} />
                )
              }
            counter++

            console.log("counter: " + counter)
            console.log("stautsQuo: " + statusQuo)
            console.log("fullNumber: " + fullNumber)
    }

  return(
        <div style={{display: "inline"}}>
          <h3>{name}</h3> <br/>
          number if no programs: {noNumber} <br/>
          number now: {statusQuo} <br/>
          number if fully funded: {fullNumber}<br/>
          dancing burgers (metaphoic): <br/>
              <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
              <div style={{display: "flex", flexWrap: "wrap"}}>
                {icons}
                </div>
              </ReactCSSTransitionGroup>
        </div>
    )
  }
}
