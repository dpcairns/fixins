import React from "react"

export default class Icon extends React.Component{
  render(){
    let visibility=this.props.visibility
    let image=this.props.image
    let iconType=this.props.iconType
    let normalStyles = {display: "inline"}
    let invisibleStyles = {display: "none"}
    let fadedStyles = {display: "inline", opacity: ".3"}
    let shiningStyles = {display: "inline", border: "2px solid yellow", borderRadius: "100%"}
    let content = ""
    let height = 50
    let key = Math.random
    let width = 50
    if (iconType==="NO_PROGRAM")
            {content = <img title="NO_PROGRAM" src={image} height={height} width={width} style={normalStyles}/>}

    else if (iconType==="CURRENT_LEVEL" && visibility==="ACTUARY"
            || iconType==="CURRENT_LEVEL" && visibility==="OPTIMIST"
  )
            {content = <img title="CURRENT_LEVEL"  src={image} height={height} width={width} style={normalStyles}/>}

    else if (iconType==="CURRENT_LEVEL"  && visibility==="PESSIMIST")
            {content = <img title="CURRENT_LEVEL" src={image} height={height} width={width} style={fadedStyles}/>}

    else if (iconType==="FULL_LEVEL"  && visibility==="OPTIMIST")
            {content = <img title="FULL_LEVEL" src={image} height={height} width={width} style={shiningStyles}/>}

    else if (iconType==="FULL_LEVEL" && visibility==="PESSIMIST" ||
            iconType==="FULL_LEVEL" && visibility==="ACTUARY")
            {content = <img title="FULL_LEVEL" src={image} height={height} width={width} style={invisibleStyles}/>}

            return(
              <div>{content}</div>
            )
  }
}
