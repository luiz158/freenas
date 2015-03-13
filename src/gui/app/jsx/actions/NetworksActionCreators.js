// Networks Action Creators
// ========================

"use strict";

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes = FreeNASConstants.ActionTypes;

module.exports = {

    receiveInterfacesList: function( rawInterfacesList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type              : ActionTypes.RECEIVE_RAW_INTERFACES
        , rawInterfacesList : rawInterfacesList
      });
    }

};
