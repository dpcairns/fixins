import React from "react"
import Infographic from "./Infographic"
import Toggle from "./Toggle"
import ImpactForm from "./ImpactForm"
import { Modal, Button } from "react-bootstrap"

export default class InfographicPage extends React.Component{
  constructor(){
    super()
    this.state = {
      visibility: "ACTUARY",
      userMetrics: [],
      showModal: false
    }
  }

  clickHandler(visibilityChoice){
    this.setState(
      { visibility: visibilityChoice}
    )
    console.log(this.state.visibility)
  }

  toggleModal(){
    this.setState({
      showModal: !this.state.showModal
    })
  }

  passItUp(newMetric){
    this.setState({
      userMetrics: [...this.state.userMetrics, newMetric]
    })
  }
  render(){
  let infoStyle = {padding:"20px", background: "lightblue", margin: "20px", minWidth: "25%", borderRadius: "15px"}
  let customStyle = {padding:"20px", background: "orange", margin: "20px", minWidth: "25%", borderRadius: "15px"}
  let visibility = this.state.visibility
  let image= "./static/loading.gif"
  let output1name = "math scores"
  let output2name = "reading scores"
  let output3name = "science scores"
  let output4name = "school days"
  let output5name = "meals"
  let output6name = "quantifiable misery alleviation"
  let userMetricNodes = []

  if (this.state.userMetrics.length > 0){
      userMetricNodes = this.state.userMetrics.map(function(metric){
        return(
        <div style={customStyle}>
            <Infographic name={metric.name}
            noNumber={metric.noNumber}
            statusQuo={metric.statusQuo}
            fullNumber={metric.fullNumber}
            image={image}
            visibility={visibility}/>
        </div>
        )
      }).reverse()
  }

  return(
    <div style={{background: "pink", textAlign: "center"}}>
    <div className="row">
    <div className="col-md-4 text-right">
      <h4>Your view: {visibility}</h4>
    </div>
    <div className="col-md-4 text-center">
      <Toggle clickHandler={this.clickHandler.bind(this)}/>
    </div>
    <div className="col-md-4 text-left">
      <h3><a onClick={this.toggleModal.bind(this)}>add your own metric?</a></h3>
    </div>
    </div>

    <div style={{display: "flex", flexWrap: "wrap", alignItems:"center", justifyContent: "center", transition: "flex-wrap 0.3s ease"}}>

    {userMetricNodes}

      <div style={infoStyle}>
      <Infographic name={output1name} noNumber={2} statusQuo={4} fullNumber={7} image={image}  visibility={visibility}/>
      </div>

      <div style={infoStyle}>
      <Infographic name={output2name} noNumber={1} statusQuo={3} fullNumber={6} image={image} visibility={visibility}/>
      </div>

      <div style={infoStyle}>
      <Infographic name={output3name} noNumber={4} statusQuo={5} fullNumber={5} image={image} visibility={visibility}/>
      </div>

      <div style={infoStyle}>
      <Infographic name={output4name} noNumber={4} statusQuo={5} fullNumber={9} image={image} visibility={visibility}/>
      </div>

      <div style={infoStyle}>
      <Infographic name={output5name} noNumber={1} statusQuo={1} fullNumber={6} image={image} visibility={visibility}/>
      </div>

      <div style={infoStyle}>
      <Infographic name={output6name} noNumber={2} statusQuo={4} fullNumber={7} image={image} visibility={visibility}/>
      </div>


      </div>

      <Modal show={this.state.showModal} bsSize="small" aria-labelledby="contained-modal-title-medium">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-md">cook up some data!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ImpactForm passItUp={this.passItUp.bind(this)} toggleModal={this.toggleModal.bind(this)} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.toggleModal.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>


      </div>
    )
  }
}
