// FREENAS GUI ROUTES
// ==================

"use strict";

var React = require("react");

// Routing
var Router        = require("react-router");
var Route         = Router.Route;
var DefaultRoute  = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// STATIC ROUTES
var Root = require("./views/FreeNASWebApp");
  var Dashboard    = require("./views/Dashboard");

  var Accounts     = require("./views/Accounts");
    var Users      = require("./views/Accounts/Users");
      var UserItem = require("./views/Accounts/Users/UserItem");

    var Groups     = require("./views/Accounts/Groups");

  var Tasks        = require("./views/Tasks");

  var Network           = require("./views/Network");
    var Interfaces       = require("./views/Network/Interfaces");
      var InterfaceItem  = require("./views/Network/Interfaces/InterfaceItem");
    
    // There is already a variable named DefaultRoute. 
    var DefaultRouteView = require("./views/Network/DefaultRoute");

  var Storage      = require("./views/Storage");
  var Sharing      = require("./views/Sharing");
  var Services     = require("./views/Services");
  var SystemTools  = require("./views/SystemTools");
  var ControlPanel = require("./views/ControlPanel");
  var Power        = require("./views/Power");

var PageNotFound = require("./views/PageNotFound");

var Editor = require("./components/Viewer/Editor");

module.exports = (
  <Route path="/" handler={ Root }>
    <DefaultRoute handler={ Dashboard } />
    <Route name="dashboard" handler={ Dashboard } />

    {/* ACCOUNTS */}
    <Route name="accounts" handler={ Accounts }>
      <DefaultRoute handler={ Users } />
      <Route name    = "users"
             path    = "/accounts/users"
             handler = { Users } >
        <Route name    = "users-editor"
               path    = "/accounts/users/:userID"
               handler = { UserItem } />
      </Route>
      <Route name    = "groups"
             path    = "/accounts/groups"
             handler = { Groups } >
        <Route name    = "groups-editor"
               path    = "/accounts/groups/:groupID"
               handler = { Editor } />
      </Route>
    </Route>

    <Route name="tasks" handler={ Tasks } />

    {/* NETWORKS */}
    <Route name="network" handler={ Network }>
      <DefaultRoute handler={ Interfaces } />
      <Route name  = "interfaces"
           path    = "/network/interfaces"
           handler = { Interfaces } >
        <Route name    = "interfaces-editor"
               path    = "/network/interfaces/:interfaceID"
               handler = { InterfaceItem } />
      </Route>
      <Route name    = "default-route"
             path    = "/network/defaultroute"
             handler = { DefaultRouteView } >
      </Route>
    </Route>

    <Route name="storage" handler={ Storage } />
    <Route name="sharing" handler={ Sharing } />

    <Route name="services" handler={ Services }>
      <Route name    = "services-editor"
             path    = "/services/:serviceID"
             handler = { Editor } />
    </Route>

    <Route name="system-tools" handler={ SystemTools } />
    <Route name="control-panel" handler={ ControlPanel } />
    <Route name="power" handler={ Power } />
    <NotFoundRoute handler={ PageNotFound } />
  </Route>
);
