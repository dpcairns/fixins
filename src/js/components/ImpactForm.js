import React from "react"

export default class ImpactForm extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "",
      noNumber: "",
      statusQuo: "",
      fullNumber: ""
    }
  }

  handleNameChange(e){
    e.preventDefault()
    this.setState({name: e.target.value})
  }

  handleNoChange(e){
    e.preventDefault()
    this.setState({noNumber: e.target.value})

  }

  handleStatusChange(e){
    e.preventDefault()
    this.setState({stautsQuo: e.target.value})

  }

  handleFullChange(e){
    e.preventDefault()
    this.setState({fullNumber: e.target.value})

  }

    submitHandler(e){
      e.preventDefault()
      let newMetric = {}
      newMetric.name = this.state.name
      newMetric.noNumber = this.state.noNumber
      newMetric.statusQuo = this.state.stautsQuo
      newMetric.fullNumber = this.state.fullNumber
      if (newMetric.name && newMetric.noNumber && newMetric.statusQuo && newMetric.fullNumber){
      this.props.passItUp(newMetric)
      this.props.toggleModal()
    }
      this.setState({name: "", noNumber: "", statusQuo: "", fullNumber: ""})
    }

  render(){

    return(
      <div>
      <form className="text-center" onSubmit={this.submitHandler.bind(this)}>
      <h5>category name:</h5>
      <input type="text" placeholder="maybe...test scores?" value={this.state.name} onChange={this.handleNameChange.bind(this)}  />
      <br/>
      <h5>number of thingy if there are no programs anywhere in Oregon:</h5>
      <input max="100" value={this.state.noNumber} type="number" onChange={this.handleNoChange.bind(this)} />
      <br/>
      <h5>number of thingy right now:</h5>
      <input max="100" value={this.state.stautsQuo} type="number" onChange={this.handleStatusChange.bind(this)} />
      <br/>
      <h5>number of thingy if we fully fund after school programming:</h5>
      <input max="100" value={this.state.fullNumber} type="number" onChange={this.handleFullChange.bind(this)} />
      <br/>
      <button className="button btn btn-danger align-right" type="submit" value="make one!">make one!</button>
      </form>
      </div>

    )
  }
}
