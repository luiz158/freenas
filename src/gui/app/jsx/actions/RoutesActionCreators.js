// Routes Action Creators
// ======================

"use strict";

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes = FreeNASConstants.ActionTypes;

module.exports = {

// Only receives user-configured routes.
    receiveStaticRoutes: function( staticRoutesList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type             : ActionTypes.RECEIVE_STATIC_ROUTES_LIST
        , staticRoutesList : staticRoutesList
      });
    }

};
