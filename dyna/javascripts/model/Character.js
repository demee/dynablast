define('model/Character', ['model/Model'], function(Model){
  'use strict';

  var Character = function(attributes){
    _.extend(this, new Model(attributes));

  };

  return Character;
});