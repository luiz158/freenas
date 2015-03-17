// Routes Middleware
// =================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworkActionCreators = require("../actions/NetworkActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.route.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.route.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

// Only requests user-configured routes.
  , requestStaticRoutesList: function () {
      MiddlewareClient.request( "network.routes.query", [], function ( staticRoutesList ) {
        NetworkActionCreators.receiveStaticRoutes( staticRoutesList );
      });
    }

};
