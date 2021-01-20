/* map parameters */
var map = new jsVectorMap({
    selector: "#world-map",
    map: 'world',
    normalizeFunction: 'polynomial',
    backgroundColor: '#22313F',
    zoomMax: 100,
    regionStyle: {
        initial: {
          fill: '#ff5566',
          fillOpacity: 1,
        }
    },
  });