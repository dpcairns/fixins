import React from 'react';
import * as FixinsActions from "../actions/FixinsActions"
import FixinsStore from "../stores/FixinsStore"
import MapItself from "./utils/MapItself"
import Links from "./utils/Links"

export default class MapPage extends React.Component {


  render() {

      if(this.props.currentUser === undefined){
      this.context.router.push('index/login')
      }

    return(
    <div>
       <MapItself allSpots={this.props.allSpots} />
    </div>
    )
  }
}


MapPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
