// Interfaces Action Creators
// ==========================

"use strict";

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes = FreeNASConstants.ActionTypes;

module.exports = {

    receiveInterfacesList: function( interfacesList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type           : ActionTypes.RECEIVE_INTERFACES_LIST
        , interfacesList : interfacesList
      });
    }

};
