// Hosts Middleware
// ================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworkActionCreators = require("../actions/NetworkActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.host.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.host.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

  , requestHostsList: function() {
      MiddlewareClient.request( "network.hosts.query", [], function ( hostsList ) {
        NetworkActionCreators.receiveHostsList( hostsList );
      });
    }

};