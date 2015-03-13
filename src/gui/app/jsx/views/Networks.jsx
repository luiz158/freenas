// Network Information and Settings
// ================================
// View containing sub-views for interface information, general network settings

// and so on.

"use strict";


var React = require("react");

var Router       = require("react-router");
var RouteHandler = Router.RouteHandler;
var SectionNav = require("../components/SectionNav");

var sections = [{
    route   : "interfaces"
  , display : "Interfaces"
},{
    route   : "default-route"
  , display : "DefaultRoute"
}];

var Networks = React.createClass({
    render: function() {
      return (
        <main>
          <SectionNav views = { sections } />
          <RouteHandler />
        </main>
      );
    }
});

module.exports = Networks;
