// Interfaces
// ==========
// View showing interface information such as link state and aliases.

"use strict";

var React  = require("react");

var Router       = require("react-router");
var RouteHandler = Router.RouteHandler;

var Viewer      = require("../../components/Viewer");

var NetworksMiddleware = require("../../middleware/NetworksMiddleware");
var InterfacesStore      = require("../../stores/InterfacesStore");

var viewData = {
    format  : require("../../../data/middleware-keys/interfaces-display.json")[0]
  , routing : {
      "route" : "interfaces-editor"
    , "param" : "interfaceID"
  }
  , display : {
      filterCriteria: {
          connected: {
              name     : "connected interfaces"
            , testProp : { "link_state": "LINK_STATE_UP" }
          }
       , disconnected: {
              name     : "disconnected interfaces"
           , testprop : { "link_state": "LINK_STATE_DOWN" }
         }
        , unknown: {
              name     : "invalid or unknown interfaces"
            , testprop : { "link_state": "LINK_STATE_UNKNOWN" }
          }
      }
    , remainingName    : "other interfaces"
    , ungroupedName    : "all interfaces"
    , allowedFilters   : [ ]
    , defaultFilters   : [ ]
    , allowedGroups    : [ "connected", "disconnected", "unknown" ]
    , defaultGroups    : [ "connected", "disconnected", "unknown" ]
    , defaultCollapsed : [ "unknown" ]
  }
};

function getInterfacesFromStore() {
  return {
    interfacesList : InterfacesStore.getAllInterfaces()
  };
}

var Interfaces = React.createClass({

    getInitialState: function() {
      return getInterfacesFromStore();
    }

  , componentDidMount: function() {
    InterfacesStore.addChangeListener( this.handleInterfacesChange );
    NetworksMiddleware.requestInterfacesList();
    NetworksMiddleware.subscribe();
  }

  , componentWillUnmount: function() {
    InterfacesStore.removeChangeListener( this.handleInterfacesChange );
    NetworksMiddleware.unsubscribe();
  }

  , handleInterfacesChange: function() {
      this.setState( getInterfacesFromStore() );
  }

  , render: function() {
      return <Viewer header      = { "Networks" }
                     inputData   = { this.state.interfacesList }
                     viewData    = { viewData }
                     Editor      = { RouteHandler } />;
    }

});

module.exports = Interfaces;
