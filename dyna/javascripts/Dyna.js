var Dyna = function(stageId){
    this.stage = new createjs.Stage(stageId);
}

Dyna.prototype.initTicker = function(){
    createjs.Ticker.addListener(this);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(60);
}

Dyna.prototype.tick = function(){
    this.stage.update();
}

Dyna.prototype.run = function(){
    this.initTicker();
}
