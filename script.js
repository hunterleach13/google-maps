let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.89923, lng: -80.18622},
    zoom: 16,
    styles:
    [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff7000"
            },
            {
                "lightness": "69"
            },
            {
                "saturation": "100"
            },
            {
                "weight": "1.17"
            },
            {
                "gamma": "2.04"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cb8536"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c09763"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ffb471"
            },
            {
                "lightness": "66"
            },
            {
                "saturation": "100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "-8"
            },
            {
                "gamma": "0.98"
            },
            {
                "weight": "2.45"
            },
            {
                "saturation": "26"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7b7458"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7c7257"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#5a4118"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#5a4118"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#5a4118"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#5a4118"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "color": "#242424"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#777054"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#5a4118"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            },
            {
                "color": "#ecc080"
            }
        ]
    }
]
  });

 const buhlMarker = new google.maps.Marker({
    position: { lat: 39.89932, lng: -80.18545},
    map,
    title: "Buhl Hall",
    icon: "https://i.imgur.com/FMxmSBq.png"
  });

 const fieldhouseMarker = new google.maps.Marker({
    position: { lat: 39.89810226598616, lng: -80.18755105159667},
    map,
    title: "Rudy Marisa Fieldhouse",
    icon: "https://i.imgur.com/FMxmSBq.png"
  });

const fieldhouseCoords = [
    { lat: 39.89822129557472, lng: -80.18785727074538 },
    { lat: 39.89821720506465, lng: -80.18727432259585 },
    { lat: 39.89798540909532, lng: -80.18727609987678 },
    { lat: 39.89798677260331, lng: -80.18785904802633 },
    { lat: 39.89822129557472, lng: -80.18785727074538 }
  ];

  const hannaCoords = [
    { lat: 39.899575902129406, lng: -80.18715171790629 },
    { lat: 39.89957230113685, lng: -80.18694183506034 },
    { lat: 39.89937424625455, lng: -80.18694787003034 },
    { lat: 39.89937784725752, lng: -80.18715708232408 },
    { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

  const GpacCoords = [
    { lat: 39.90003, lng: -80.18801},
    { lat: 39.90002, lng: -80.18771},
    { lat: 39.89980, lng: -80.18772},
    { lat: 39.89981, lng: -80.18802},
    { lat: 39.90003, lng: -80.18801} 
  ];

  const ThayerCoords = [
    { lat: 39.89980, lng: -80.18429},
    { lat: 39.89979, lng: -80.18416},
    { lat: 39.89947, lng: -80.18416},
    { lat: 39.89947, lng: -80.18415},
    { lat: 39.89940, lng: -80.18415},
    { lat: 39.89939, lng: -80.18409},
    { lat: 39.89922, lng: -80.18409},
    { lat: 39.89922, lng: -80.18430},
    { lat: 39.89980, lng: -80.18429} 
  ];

  const pollockCoords = [
    { lat: 39.89932966350404, lng: -80.18516459443458 }, 
    { lat: 39.89932674703466, lng: -80.18474261889916 }, 
    { lat: 39.89918383988418, lng: -80.18474185858288 }, 
    { lat:39.89918675635962, lng: -80.18516611506715 }, 
    { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];

  const stewartCoords = [
    { lat: 39.89820313942542, lng: -80.18674222997413 },
    { lat: 39.898196966171525, lng: -80.1864800440406 },
    { lat: 39.8977313983387, lng: -80.1864981489516 },
    { lat: 39.89773808607581, lng: -80.18675966433287 },
    { lat: 39.89820313942542, lng: -80.18674222997413 },
  ];

  const southCoords = [
    { lat: 39.90036605487646, lng: -80.18613153937626 },
    { lat: 39.90036296834702, lng: -80.18572786691594 },
    { lat: 39.90022304553257, lng: -80.18572786691594 },
    { lat: 39.90022407437784, lng: -80.18613556268981 },
    { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];

  const westCoords = [
    { lat: 39.90053787146326, lng: -80.18560984971823 },
    { lat: 39.90053787146326, lng: -80.18542477729457 },
    { lat: 39.900227082463, lng: -80.18542305089767 },
    { lat: 39.90022503189161, lng: -80.1856048100907 },
    { lat: 39.90053787146326, lng: -80.18560984971823 },
  ];

  const eastCoords = [
    { lat: 39.900556198377956, lng: -80.1864066888825 },
    { lat: 39.90055312253561, lng: -80.1862209202955 },
    { lat: 39.900233234177925, lng: -80.18622893908343 },
    { lat: 39.90023425946349, lng: -80.18641337120577 },
    { lat: 39.900556198377956, lng: -80.1864066888825 },
  ];

  const willisonCoords = [
  { lat: 39.897538998708136, lng: -80.18620531789718 },
  { lat: 39.897541056479255, lng: -80.18638502589995 },
  { lat: 39.89711509654142, lng: -80.18639307252694 },
  { lat: 39.89711509654142, lng: -80.18621604673316 },
  { lat: 39.897538998708136, lng: -80.18620531789718 }
  ];

  const eberlyCoords = [
{ lat: 39.899922770354294, lng: -80.18553282853959 },
{ lat: 39.8999222559294, lng: -80.18550600644919 },
{ lat: 39.89994283292212, lng: -80.18550533589693 },
{ lat: 39.89994283292212, lng: -80.18549728926982 },
{ lat: 39.9000524053043, lng: -80.18549326595624 },
{ lat: 39.90005034760858, lng: -80.18533702727966 },
{ lat: 39.90004417452111, lng: -80.18533635672739 },
{ lat: 39.90004160240115, lng: -80.18518950578245 },
{ lat: 39.89993923194808, lng: -80.18519285854521 },
{ lat: 39.89993768867374, lng: -80.1851861530226 },
{ lat: 39.899848178703685, lng: -80.18518816467937 },
{ lat: 39.89984658769828, lng: -80.1851625027092 },
{ lat: 39.89970049070834, lng: -80.18516786712725 },
{ lat: 39.899702548414545, lng: -80.18530600089281 },
{ lat: 39.89968402905644, lng: -80.18530600089281 },
{ lat: 39.89968505790979, lng: -80.18535025734197 },
{ lat: 39.899704606120686, lng: -80.18535025734197 },
{ lat: 39.8997071782536, lng: -80.18550381380766 },
{ lat: 39.89981932314095, lng: -80.1854997904941 },
{ lat: 39.89981932314235, lng: -80.18550783712094 },
{ lat: 39.89984247229349, lng: -80.18550582546415 },
{ lat: 39.89984350114448, lng: -80.18553398865906 },
{ lat: 39.899922770354294, lng: -80.18553282853959 }
];

const CREDCoords = [
    { lat: 39.89820789567786, lng: -80.1863954019053 },
    { lat: 39.898204677891705, lng:  -80.18609970550332 },
    { lat: 39.89802287272942, lng:  -80.18610389977852 },
    { lat: 39.89802930831865,  lng:  -80.18640588759332 },
    { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];

  const CafCoords = [
  {lat: 39.900590997830925, lng: -80.18815567971573},
  {lat: 39.9005889401514, lng: -80.18809130669877},
  {lat: 39.90067536263846, lng: -80.18808661283293},
  {lat: 39.90067124728441, lng: -80.18796457232162},
  {lat: 39.900584310372246, lng: -80.18796926618744},
  {lat: 39.9005745363928, lng: -80.18770171583846},
  {lat: 39.900187698665945, lng: -80.18772553440714},
  {lat: 39.900203131352356, lng: -80.18817815717938},
  {lat: 39.900590997830925, lng: -80.18815567971573}
];

const theNest = [
    {lat: 39.8982031743014, lng: -80.18528256249408},
    {lat: 39.89803340961704, lng: -80.1852906091205},
    {lat: 39.89803958288567, lng: -80.18549915085532},
    {lat: 39.89820883311696, lng: -80.18549512754211}
  ];

  const cjCoords = [
    { lat: 39.900381516505455, lng: -80.18875312061515 },
    { lat: 39.90030229555674, lng: -80.18875312061515 },
    { lat: 39.900303838822865, lng: -80.1890005543931 },
    { lat: 39.90038357419121, lng: -80.18899988384086 },
    { lat: 39.900381516505455, lng: -80.18875312061515 },
  ];

  const chapelCoords = [
    { lat: 39.90094412190922, lng: -80.18730816171713 },
    { lat: 39.900937434485016, lng:-80.18702518866414 },
    { lat: 39.90050687827982 , lng:-80.18703994081373 },
    { lat: 39.90051099364375, lng: -80.18732090220995 },
    { lat: 39.90094412190922, lng: -80.18730816171713 }
    ];

    const stoverCoords = [
    { lat: 39.89999427537623, lng: -80.18639717039527 },
    { lat: 39.899993760951894, lng: -80.18635827836418 },
    { lat: 39.90002822737523 , lng: -80.18635693725966 },
    { lat: 39.900022568709886, lng: -80.18596667584431  },
    { lat: 39.89976381287705, lng: -80.18597673412829 },
    { lat: 39.899767928285605, lng: -80.18636632499137 },
    { lat: 39.89980239482252, lng: -80.18636565443911 },
    { lat: 39.89980239482252, lng: -80.1864045464702 },
    { lat: 39.89999427537623, lng: -80.18639717039527 }
];

    const BuhlhallCoords = [
  { lat: 39.89950878796206,  lng: -80.18562837849694},
  { lat: 39.899509816818046, lng: -80.18551304351189},
  { lat: 39.89954891333424,  lng: -80.18551304351189},
  { lat: 39.899546855623434, lng: -80.18537356864626},
  { lat: 39.89950055711358,  lng: -80.18537222754178},
  { lat: 39.899497470545185, lng: -80.18525689255674},
  { lat: 39.899184697556294, lng: -80.18526091587017},
  { lat: 39.899188812999625, lng: -80.18564178954172},
  { lat: 39.89950878796206,  lng: -80.18562837849694},  
];

  const millerCoords = [
    { lat: 39.89939727765804, lng: -80.1877995788888}, 
    { lat: 39.89939419108494, lng: -80.18761718866978},
    { lat: 39.89937772935947, lng: -80.18761718866978},
    { lat: 39.89937515721452, lng: -80.18760713038564},
    { lat: 39.899367955208106, lng: -80.1876057892811},
    { lat: 39.89936744077903,  lng: -80.1874254107189},
    { lat: 39.89937515721452, lng: -80.1874227285098},
    { lat: 39.899376186072516, lng: -80.18741602298704},
    { lat: 39.89939933537334, lng: -80.18741535243477}, 
    { lat: 39.89939984980218, lng: -80.1872289389021},
    { lat: 39.89955932254984, lng: -80.18723229166346},
    { lat: 39.89956343797066, lng: -80.18743748065987},
    { lat: 39.899593274764335, lng: -80.18743748065987},
    { lat: 39.89959481804641, lng: -80.18759103713101},
    { lat: 39.8995618946879, lng: -80.18759304878785},
    { lat: 39.89956086583266, lng: -80.18779555557518},
    { lat: 39.89939727765804, lng: -80.1877995788888}
];

    const WileyCoords = [
    { lat: 39.89316686459462, lng: -80.1816310612005}, 
    { lat: 39.893255354341534, lng: -80.18153785444144}, 
    { lat: 39.89317766858145, lng: -80.1814138022801}, 
    { lat: 39.893089178734236, lng: -80.18150902069584}, 
    { lat: 39.89316686459462, lng: -80.1816310612005}
];


   const fieldhousePolygon = new google.maps.Polygon({
    paths: fieldhouseCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const hannaPolygon = new google.maps.Polygon({
    paths: hannaCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const GpacPolygon = new google.maps.Polygon({
        paths: GpacCoords,
        strokeColor: "#7c7257",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#7c7257",
        fillOpacity: 0.35,
    });

    const ThayerPolygon = new google.maps.Polygon({
        paths: ThayerCoords,
        strokeColor: "#7c7257",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#7c7257",
        fillOpacity: 0.35,
    });

    const pollockPolygon = new google.maps.Polygon({
        paths: pollockCoords,
        strokeColor: "#7c7257",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#7c7257",
        fillOpacity: 0.35,
    });

     const stewartpolygon = new google.maps.Polygon({
    paths: stewartCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

      const southpolygon = new google.maps.Polygon({
    paths: southCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

      const westpolygon = new google.maps.Polygon({
    paths: westCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const eastpolygon = new google.maps.Polygon({
    paths: eastCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const willisonpolygon = new google.maps.Polygon({
    paths: willisonCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const eberlyPolygon = new google.maps.Polygon({
    paths: eberlyCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

    const nestPolygon = new google.maps.Polygon({
    paths: theNest,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

     const cjHouse = new google.maps.Polygon({
      paths: cjCoords,
      strokeColor: "#7c7257",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#7c7257",
      fillOpacity: 0.35,
    });

     const chapelHouse = new google.maps.Polygon({
      paths: chapelCoords,
      strokeColor: "#7c7257",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#7c7257",
      fillOpacity: 0.35,
    });

     const stoverpolygon = new google.maps.Polygon({
      paths: stoverCoords,
      strokeColor: "#7c7257",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#7c7257",
      fillOpacity: 0.35,
    });

     const BuhlhallHouse = new google.maps.Polygon({
      paths: BuhlhallCoords,
      strokeColor: "#7c7257",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#7c7257",
      fillOpacity: 0.35,
    });

     const millerPolygon = new google.maps.Polygon({
    paths: millerCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
    });

     const Wileypolygon = new google.maps.Polygon({
    paths: WileyCoords,
    strokeColor: "#7c7257",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#7c7257",
    fillOpacity: 0.35,
  });

  fieldhousePolygon.setMap(map);
  hannaPolygon.setMap(map);
  GpacPolygon.setMap(map);
  ThayerPolygon.setMap(map);
  pollockPolygon.setMap(map);
  stewartpolygon.setMap(map);
  southpolygon.setMap(map)
  westpolygon.setMap(map);
  eastpolygon.setMap(map);
  willisonpolygon.setMap(map);
  eberlyPolygon.setMap(map);
  CREDPolygon.setMap(map);
  CafPolygon.setMap(map);
  nestPolygon.setMap(map);
  cjHouse.setMap(map);
  chapelHouse.setMap(map);
  BuhlhallHouse.setMap(map);
  stoverpolygon.setMap(map);
  millerPolygon.setMap(map);
  Wileypolygon.setMap(map);


const buhlInfoWindow = new google.maps.InfoWindow({
    content: "This modern facility houses the departments of Communication, Criminal Justice, English and Human Studies. The Universitys radio, television, student newspaper, and yearbook facilities are located in this building. Dedicated in October, 1968, the four-story structure was made possible by a challenge grant from the Buhl Foundation of Pittsburgh, gifts from alumni and friends of the University, and grants from the Federal Government and the United Presbyterian Church (U.S.A.).",
  });

const fieldhouseInfoWindow = new google.maps.InfoWindow({
    content: "Rudy Marisa Field House and the Recreation Center was built in 1935 and was getting upgrades till this day. The Rudy Marisa field house was named after a former head basketball coach and Director of Athletics Rudy Marisa. Location for the Rudy Marisa Field house is located at 100-112 W Wayne St, Waynesburg, PA 15370.",
  });

buhlMarker.addListener("click", () => {
    buhlInfoWindow.open({
      anchor: buhlMarker,
      map,
      shouldFocus: false,
    });

fieldhouseMarker.addListener("click", () => {
    fieldhouseInfoWindow.open({
      anchor: fieldhouseMarker,
      map,
      shouldFocus: false,
      });
    });
  });

}


