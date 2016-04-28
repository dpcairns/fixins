import React from "react"

export default class Toggle extends React.Component{
  render(){
    let ACTUARY = "ACTUARY"
    let OPTIMIST = "OPTIMIST"
    let PESSIMIST = "PESSIMIST"
    let clickHandler = this.props.clickHandler
    return(
      <div>
        <h2>pick a perspective!</h2>
        <div onClick={clickHandler.bind(this, PESSIMIST)} className="btn">nightmare glasses</div>
        <div onClick={clickHandler.bind(this, ACTUARY)} className="btn">normal vision</div>
        <div onClick={clickHandler.bind(this, OPTIMIST)} className="btn">fantasy world</div>
      </div>

    )
  }
}
