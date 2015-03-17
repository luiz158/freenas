// Hosts Action Creators
// =======================

"use strict";

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes = FreeNASConstants.ActionTypes;

module.exports = {

    receiveHostsList: function( hostsList ) {
      FreeNASDispatcher.handleMiddlewareAction({
          type      : ActionTypes.RECEIVE_HOSTS_LIST
        , hostsList : hostsList
      });
    }

};
