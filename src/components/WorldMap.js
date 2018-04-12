import WorldMap from 'grommet/components/WorldMap';

export default () => (
    <WorldMap colorIndex='accent-1'
    series={[{
    "place": [21, 19],
    "label": "Atlanta",
    "colorIndex": "accent-1",
    "id": "atlanta",
    "flag": <Box pad='small'\n  colorIndex='accent-1'>\n  Atlanta\n</Box>,
    "onClick": "...",
    "onHover": "..."
    }, {
    "place": [34.052234, -118.243685],
    "label": "Los Angeles",
    "colorIndex": "accent-2",
    "id": "los-angeles",
    "flag": <Box pad='small'\n  colorIndex='accent-2'>\n  Los Angeles\n</Box>
    }, {
    "place": [35.689487, 139.691706],
    "label": "Tokyo",
    "colorIndex": "graph-1",
    "id": "tokyo",
    "flag": <Box pad='small'\n  colorIndex='graph-1'>\n  Tokyo\n</Box>
    }, {
    "place": [51.507351, -0.127758],
    "label": "London",
    "colorIndex": "graph-2",
    "id": "london",
    "flag": <Box pad='small'\n  colorIndex='graph-2'>\n  London\n</Box>
    }, {
    "place": [-33.86882, 151.209296],
    "label": "Sydney",
    "colorIndex": "graph-3",
    "id": "sydney",
    "flag": <Box pad='small'\n  colorIndex='graph-3'>\n  Sydney\n</Box>
    }, {
    "place": [-22.906847, -43.172896],
    "label": "Rio De Janeiro",
    "colorIndex": "graph-4",
    "id": "rio-de-janeiro",
    "flag": <Box pad='small'\n  colorIndex='graph-4'>\n  Rio De Janeiro\n</Box>
    }]} />
  );
  
