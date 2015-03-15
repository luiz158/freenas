// Network Middleware
// ==================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworksActionCreators = require("../actions/NetworksActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.interface.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.interface.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

  , requestInterfacesList: function() {
      MiddlewareClient.request( "network.interfaces.query", [], function ( interfacesList ) {
        NetworksActionCreators.receiveInterfacesList( interfacesList );
      });
    }

};
