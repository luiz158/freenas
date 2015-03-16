// Network Action Creators
// =======================

"use strict";

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes = FreeNASConstants.ActionTypes;

module.exports = {

   receiveGlobalConfig: function( globalConfig ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type         : ActionTypes.RECEIVE_GLOBAL_CONFIG
        , globalConfig : globalConfig
      });
    }

  , receiveInterfacesList: function( interfacesList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type              : ActionTypes.RECEIVE_INTERFACES_LIST
        , interfacesList : interfacesList
      });
    }

  , receiveHostsList: function( hostsList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type      : ActionTypes.RECEIVE_HOSTS_LIST
        , hostsList : hostsList
      });
    }

// Only receives user-configured routes.
  , receiveStaticRoutes: function( staticRoutesList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type             : ActionTypes.RECEIVE_STATIC_ROUTES_LIST
        , staticRoutesList : staticRoutesList
      });
    }
};
