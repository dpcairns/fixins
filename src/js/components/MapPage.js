import React from 'react';
import * as FixinsActions from "../actions/FixinsActions"
import FixinsStore from "../stores/FixinsStore"
import MapItself from "./utils/MapItself"
import Links from "./utils/Links"

export default class MapPage extends React.Component {


  render() {
    return(
    <div>
        <Links />
       <MapItself allSpots={this.props.allSpots} />
    </div>
    )
  }
}
