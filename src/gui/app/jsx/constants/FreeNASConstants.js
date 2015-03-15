// FreeNAS Constants
// -----------------
// Objects containing constant mirrored key-value pairs for use with Flux stores
// and dispatcher. Simple way to maintain consistency for actions and sources.

var keyMirror = require("keymirror");

module.exports = {

    ActionTypes: keyMirror({
        UPDATE_AUTH_STATE : null

      // Subscriptions
      , SUBSCRIBE_TO_MASK     : null
      , UNSUBSCRIBE_FROM_MASK : null

      // Events
      , MIDDLEWARE_EVENT          : null
      , LOG_MIDDLEWARE_TASK_QUEUE : null

      // RPC
      , RECIEVE_RPC_SERVICES        : null
      , RECIEVE_RPC_SERVICE_METHODS : null

      // Users
      , RECEIVE_RAW_USERS        : null
      , RECEIVE_USER_UPDATE_TASK : null
      , RESOLVE_USER_UPDATE_TASK : null

      // Services
      , RECEIVE_RAW_SERVICES : null

      //Widget Data
      , RECEIVE_RAW_WIDGET_DATA : null

      //SystemInfo Data
      , RECEIVE_SYSTEM_INFO_DATA : null

      //Update Data
      , RECEIVE_UPDATE_DATA : null

      //Networks
      , RECEIVE_GLOBAL_CONFIG             : null
      , RECEIVE_GLOBAL_CONFIG_UPDATE_TASK : null
      , RESOLVE_GLOBAL_CONFIG_UPDATE_TASK : null
      , RECEIVE_INTERFACES_LIST           : null
      , RECEIVE_INTERFACE_UPDATE_TASK     : null
      , RESOLVE_INTERFACE_UPDATE_TASK     : null
      , RECEIVE_HOSTS_LIST                : null
      , RECEIVE_HOST_UPDATE_TASK          : null
      , RESOLVE_HOST_UPDATE_TASK          : null
      , RECEIVE_STATIC_ROUTES_LIST        : null
      , RECEIVE_STATIC_ROUTE_UPDATE_TASK  : null
      , RESOLVE_STATIC_ROUTE_UPDATE_TASK  : null
    })

  , PayloadSources: keyMirror({
        MIDDLEWARE_ACTION    : null
      , MIDDLEWARE_LIFECYCLE : null
      , CLIENT_ACTION        : null
    })

};