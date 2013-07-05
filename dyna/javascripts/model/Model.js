define('model/Model', [], function(){
  'use strict';
  /**
   * Basic model object, can be used on it's own,
   * but usually it would be extended
   * @param attributes
   * @constructor
   */
  var Model = function(attributes){
    this._attributes = attributes || {};
  };

  /**
   * Gets value by key, return undefined
   * if key does not exist
   * @param {String} key
   * @returns {*}
   */
  Model.prototype.get = function(key){
    return this._attributes[key];
  };

  /**
   * Sets the value based on the key,
   * and triggers "change" event
   * in the form "change:[key]" if value has changed.
   * It will pass value to the event callback
   * @param {String} key
   * @param {*} value
   */
  Model.prototype.set = function(key, value){
    if(this._attributes[key] !== value){
      this._attributes[key] = value;
      this.trigger(['change:', key].join(''), value);
    }
  };

  /* Add event capabilities */
  asEvented.call(Model.prototype);

  return Model;
});