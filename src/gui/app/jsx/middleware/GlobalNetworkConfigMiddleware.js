// Global Network Config Middleware
// ================================

"use strict";

var MiddlewareClient = require("../middleware/MiddlewareClient");

var NetworkActionCreators = require("../actions/NetworkActionCreators");

module.exports = {

    subscribe: function() {
      MiddlewareClient.subscribe( ["network.changed"] );
      MiddlewareClient.subscribe( ["task.*"] );
    }

  , unsubscribe: function() {
      MiddlewareClient.unsubscribe( ["network.changed"] );
      MiddlewareClient.unsubscribe( ["task.*"] );
    }

  , requestGlobalConfig: function() {
    MiddlewareClient.request( "network.config.get_global_config", [], function ( globalConfig ) {
      NetworkActionCreators.receiveGlobalConfig( globalConfig );
    });
  }

};