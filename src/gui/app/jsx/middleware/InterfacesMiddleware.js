// Interfaces Middleware
// =====================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var InterfacesActionCreators = require("../actions/InterfacesActionCreators");

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
        InterfacesActionCreators.receiveInterfacesList( interfacesList );
      });
    }

};