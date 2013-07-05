define('model/Grid', ['model/Model'], function(Model){
  'use strict';

  /**
   * Grid Model
   * @param attributes
   * @constructor
   */
  var Grid = function(attributes){
    if(_.isUndefined(attributes.width) || _.isUndefined(attributes.height)){
      throw new Error("Invalid argument error");
    }

    if(attributes.width % 2 === 0 || attributes.height % 2 === 0){
      throw new Error("Invalid argument error");
    }

    _.extend(this, new Model(attributes));

  };

  return Grid;
});