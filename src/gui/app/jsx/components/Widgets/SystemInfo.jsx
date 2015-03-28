"use strict";

var React = require("react");

var Widget = require("../Widget");

var SystemMiddleware = require("../../middleware/SystemMiddleware");
var SystemStore      = require("../../stores/SystemStore");

var UpdateMiddleware = require("../../middleware/UpdateMiddleware");
var UpdateStore      = require("../../stores/UpdateStore");

var SystemInfo = React.createClass({

  getInitialState: function() {
    return {
        hardware   :   ""
      , version    :   ""
      , updates    :   ""
      , train      :   ""
    };
  }

  , componentDidMount: function() {
      SystemStore.addChangeListener( this.handleSystemChange );
      UpdateStore.addChangeListener( this.handleUpdateChange );

      SystemMiddleware.requestSystemInfo( "hardware" );
      SystemMiddleware.requestSystemInfo( "version" );
      // TODO: This causes a traceback (#8620)
      // UpdateMiddleware.requestUpdateInfo( "check_now_for_updates" );
      UpdateMiddleware.requestUpdateInfo( "get_current_train" );
   }

  , componentWillUnmount: function() {
      SystemStore.removeChangeListener( this.handleSystemChange );
      UpdateStore.removeChangeListener( this.handleUpdateChange );
    }

  , handleSystemChange: function() {
      this.setState({
          hardware : SystemStore.getSystemInfo( "hardware" )
        , version  : SystemStore.getSystemInfo( "version" )
      });
    }

  , handleUpdateChange: function() {
      this.setState({
          // TODO: This causes a traceback (#8620)
          // updates  : UpdateStore.getUpdate( "check_now_for_updates" )
          train    : UpdateStore.getUpdate( "get_current_train" )
      });
    }

  , render: function() {
    var memSize = (this.state.hardware["memory-size"] / 1024) / 1024;
    return (
      <Widget
        positionX  =  {this.props.positionX}
        positionY  =  {this.props.positionY}
        title      =  {this.props.title}
        size       =  {this.props.size} >
        <div className="wd-section wd-cpu-model">
          <span className="wd-title">CPU Model:</span>
          <span className="wd-value">{this.state.hardware["cpu-model"]}</span>
          <span className="wd-value">{"with " + this.state.hardware["cpu-cores"] + " cores."}</span>
        </div>
        <div className="wd-section wd-memory-size">
          <span className="wd-title">Memory Size:</span>
          <span className="wd-value">{memSize + " MB"}</span>
        </div>
        <div className="wd-section wd-version">
          <span className="wd-title">Version:</span>
          <span className="wd-value">{this.state.version}</span>
        </div>
        <div className="wd-section wd-train">
          <span className="wd-title">Current Update Train:</span>
          <span className="wd-value">{this.state.train}</span>
        </div>
        <div className="wd-section wd-update">
          <span className="wd-title">Available updates:</span>
          <span className="wd-value">{this.state.updates}</span>
        </div>

      </Widget>
    );
  }
});

module.exports = SystemInfo;