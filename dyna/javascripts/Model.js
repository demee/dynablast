var Model = function(attributes){
  this._attributes = attributes || {};
}

Model.prototype.get = function(key){
  return this._attributes[key];
}


Model.prototype.set = function(key, value){
  if(this._attributes[key] !== value){
    this._attributes[key] = value;
    this.trigger(['change:', key].join(''));
  }
}


asEvented.call(Model.prototype);
