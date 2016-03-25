import React from 'react';
import * as FixinsActions from "../actions/FixinsActions"
import FixinsStore from "../stores/FixinsStore"
import MapItself from "./utils/MapItself"

export default class MapPage extends React.Component {
  constructor() {
    super()
    this.state = {
      allSpots: []
    }
  }

  goFindSpots(){
       this.setState({ allSpots: FixinsStore.getSpotsFromStore() })
  }

  componentDidMount(){
    this.goFindSpots()
  }

  componentWillMount(){
    FixinsStore.on("changedSpots", this.goFindSpots.bind(this))
  }

  componentWillUnmount(){
    FixinsStore.removeListener("changedSpots", this.goFindSpots.bind(this))
  }

  render() {
    return(
    <div>
       <MapItself allSpots={this.state.allSpots} />
    </div>
    )
  }
}