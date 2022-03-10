cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "org.apache.cordova.geolocation.Coordinates",
      "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
      "pluginId": "org.apache.cordova.geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "org.apache.cordova.geolocation.PositionError",
      "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
      "pluginId": "org.apache.cordova.geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "org.apache.cordova.geolocation.Position",
      "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
      "pluginId": "org.apache.cordova.geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "org.apache.cordova.geolocation.geolocation",
      "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
      "pluginId": "org.apache.cordova.geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-camera": "6.0.0",
    "cordova-plugin-statusbar": "3.0.0",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-ionic-webview": "5.0.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-sqlite-storage": "6.0.0",
    "cordova-plugin-geolocation": "4.1.0",
    "org.apache.cordova.geolocation": "0.3.6"
  };
});