// Network Middleware
// ==================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworkActionCreators = require("../actions/NetworkActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.interface.changed", "network.host.changed", "network.route.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.interface.changed", "network.host.changed", "network.route.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

  , requestGlobalConfig: function() {
      MiddlewareClient.request( "network.config.get_global_config", [], function ( globalConfig ) {
        NetworkActionCreators.receiveGlobalConfig( globalConfig );
      });
    }

  , requestInterfacesList: function() {
      MiddlewareClient.request( "network.interfaces.query", [], function ( interfacesList ) {
        NetworkActionCreators.receiveInterfacesList( interfacesList );
      });
    }

  , requestHostsList: function() {
      MiddlewareClient.request( "network.hosts.query", [], function ( hostsList ) {
        NetworkActionCreators.receiveHostsList( hostsList );
      });
    }

// Only requests user-configured routes.
  , requestStaticRoutesList: function () {
      MiddlewareClient.request( "network.routes.query", [], function ( staticRoutesList ) {
        NetworkActionCreators.receiveStaticRoutes( staticRoutesList );
      });
    }

};
