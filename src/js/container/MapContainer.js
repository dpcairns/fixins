import { connect } from 'react-redux'
import MapPage from '../components/MapPage'


const mapStateToProps = (state) => {
  return {
    allSpots: state.spots,
  }
}


const MapContainer = connect(
  mapStateToProps
)(MapPage)

export default MapContainer
