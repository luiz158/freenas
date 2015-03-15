// Network Middleware
// ==================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworksActionCreators = require("../actions/NetworksActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.changed", "network.interface.changed", "network.host.changed", "network.route.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.changed", "network.interface.changed", "network.host.changed", "network.route.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

  , requestInterfacesList: function() {
      MiddlewareClient.request( "network.interfaces.query", [], function ( interfacesList ) {
        NetworksActionCreators.receiveInterfacesList( interfacesList );
      });
    }

  , requestGlobalConfig: function() {
      MiddlewareClient.request( "network.config.get_global_config", [], function ( globalConfig ) {
        NetworksActionCreators.receiveGlobalConfig( globalConfig );
      });
    }

  , requestHostsList: function() {
      MiddlewareClient.request( "network.hosts.query", [], function ( hostsList ) {
        NetworksActionCreators.receiveHostsList( hostsList );
      });
    }

// Only requests user-configured routes.
  , requestStaticRoutesList: function () {
      MiddlewareClient.request( "network.routes.query", [], function ( staticRoutesList ) {
        NetworksActionCreators.receiveStaticRoutes( staticRoutesList );
      });
    }

};
