define('model/Block', ['model/Model'], function(Model){
  'use strict';

  var Block = function(attributes){
    _.extend(this, new Model(attributes));
  };

  return Block;

});