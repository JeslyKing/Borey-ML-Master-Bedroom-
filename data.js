var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene1",
      "name": "Scene1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.020448154792219952,
        "pitch": 0.09932187300517725,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.5694323493958002,
          "pitch": 0.14282323452629875,
          "rotation": 0,
          "target": "1-scene2"
        },
        {
          "yaw": -2.3415840954900897,
          "pitch": 0.07523431777018175,
          "rotation": 4.71238898038469,
          "target": "2-scene3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene2",
      "name": "Scene2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.06598490062126139,
        "pitch": 0.005621992811613907,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.11514354295962015,
          "pitch": 0.16980272370457428,
          "rotation": 0,
          "target": "0-scene1"
        },
        {
          "yaw": 0.5735867395862364,
          "pitch": 0.06673694970147359,
          "rotation": 4.71238898038469,
          "target": "2-scene3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-scene3",
      "name": "Scene3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.2846249533135321,
        "pitch": 0.04310194488902752,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.9057036718326721,
          "pitch": 0.15863244189323744,
          "rotation": 6.283185307179586,
          "target": "1-scene2"
        },
        {
          "yaw": -0.9163421853939795,
          "pitch": 0.4450459740890267,
          "rotation": 7.853981633974483,
          "target": "0-scene1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
