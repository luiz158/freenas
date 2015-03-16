// Global Config
// =============
// Viewer and Editor for the global network configuration.

"use strict";


var React = require("react");

var Router       = require("react-router");
var RouteHandler = Router.RouteHandler;

var Viewer = require("../../components/Viewer");


var itemData = {
    "route" : "globalconfig"
  , "param" : "routeID"
};

var DefaultRoute = React.createClass({
    render: function() {
      return (
        <Viewer header     = { "Global Config" }
                inputData  = { inputData }
                itemData   = { itemData }
                Editor     = { RouteHandler } >
        </Viewer>
      );
    }
});

module.exports = DefaultRoute;