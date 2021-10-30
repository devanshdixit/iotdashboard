import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Component } from 'react';
export class MapContainer extends Component {
   render() {
      return (
         <Map google={this.props.google} zoom={14}>
             <Marker 
                  onClick={this.onMarkerClick}
                  name={'Current location'} 
             />
            
          </Map>
      );
   }
}
export default GoogleApiWrapper({
       apiKey: ('AIzaSyBGp2Pnbz9Htx-jMVQPXXES7t0iA4tQwTw')
})(MapContainer);