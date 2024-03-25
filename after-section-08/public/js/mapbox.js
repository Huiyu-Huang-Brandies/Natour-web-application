/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiaGVsZW4xOTk4MDMwMiIsImEiOiJjbHU2OGl2a3UxdnZyMmtudnBnaHB1dmpxIn0.6A1NHM-XzzbhRfoQQdcQYA';

  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  // make the map zooming for our location
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker(self designed one)
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200, //- don't use the 'px' like css
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
