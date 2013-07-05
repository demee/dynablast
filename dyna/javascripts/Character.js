define('Character', function(){
  /*
   * Only rendering and diplay
   */

  var Character = function(spriteImage){
    /* configuration */
    this._sprite_animation_frequency = 10;

    /* initialization */
    this._spriteImage = spriteImage;

    /* construction */
    this._spriteSheet = new createjs.SpriteSheet(this._getSpriteSheetProperties());
    this.animation    = new createjs.BitmapAnimation(this._spriteSheet);
  };

  Character.prototype._getSpriteSheetProperties = function(){
    return {
      images: [this._spriteImage],
      frames: {
        width: 32,
        height: 48
      },
      animations: {
        walkDown: {
          frames: [0, 1, 2, 3],
          frequency: this._sprite_animation_frequency
        },
        walkLeft: {
          frames: [4, 5, 6, 7],
          frequency: this._sprite_animation_frequency
        },
        walkRight: {
          frames: [8, 9, 10, 11],
          frequency: this._sprite_animation_frequency
        },
        walkUp: {
          frames: [12, 13, 14, 15],
          frequency: this._sprite_animation_frequency
        }
      }
    };
  }
})