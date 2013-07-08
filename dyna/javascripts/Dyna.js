define('Dyna', ['LoadingScreen'], function(){
  'use strict';
  /**
   *
   * @param stageId
   * @constructor
   */
  var Dyna = function(stageId){
    this.stage = new createjs.Stage(stageId);
  };

  Dyna.prototype.initTicker = function(){
    createjs.Ticker.addListener(this);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(30);
  };

  Dyna.prototype.tick = function(){
    this.stage.update();
  };

  Dyna.prototype.run = function(){
    this.initTicker();
    this.showLoadingScreen();
    this.resourcesLoader.on('finish', this.showMenuScreen());
  };

  Dyna.prototype.showLoadingScreen = function() {

  };

  Dyna.prototype.showMenuScreen = function(){

  };

  return Dyna;
});
