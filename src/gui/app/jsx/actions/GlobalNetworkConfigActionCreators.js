// Global Network Config Action Creators
// =====================================

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

};