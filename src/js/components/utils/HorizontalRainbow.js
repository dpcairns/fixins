import React from "react"

export default class HorizontalRainbow extends React.Component{
render(){
  let rand = 0// Math.floor(Math.random()*5)
  let myImage = "./static/glitter" + rand + ".gif"
  return(
<div className="flex anim-flex">
<img src={myImage} height="40px" width="100px"/>
<img src={myImage} height="40px" width="100px"/>
<img src={myImage} height="40px" width="100px"/>
<img src={myImage} height="40px" width="100px"/>
<img src={myImage} height="40px" width="100px"/>


</div>
    )
  }
}
