import * as React from 'react';


export default class Map extends React.Component {
    mapRef = React.createRef();

    state = {
      // The map instance to use during cleanup
      map: null
    };
  
    componentDidMount() {
  
      const H = window.H;
      const platform = new H.service.Platform({
          apikey: "j-nPoLNixHrpmQVd6aIPOwLg763QlExeTqjabVPqjac"
      });
  
      const defaultLayers = platform.createDefaultLayers();
  
      // Create an instance of the map
      const map = new H.Map(
        this.mapRef.current,
        defaultLayers.vector.normal.map,
        {
          // Map of san diego
          center: { lat:32.79183010043411, lng: -117.20961698769774 },
          zoom: 11,
          pixelRatio: window.devicePixelRatio || 1
        }
      );

      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      const ui = H.ui.UI.createDefault(map, defaultLayers);
   
      this.setState({ map });
    }
  
    componentWillUnmount() {
      // Cleanup after the map to avoid memory leaks when this component exits the page
      this.state.map.dispose();
    }
  
    render() {
      return (
        // Set a height on the map so it will display
        <div ref={this.mapRef} style={{ height: "500px" }} />
      );
    }
  }

