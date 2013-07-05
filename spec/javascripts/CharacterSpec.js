require(['Character'], function(Character){

  describe("Character", function() {
    var character;
    var characterSpriteImage = "/dyna/character_sprites/big_dyna.png";

    beforeEach(function(){
      character = new Character(characterSpriteImage);
    });

    it('[constructor]', function(){
      expect(character).toBeDefined();
      expect(character.animation).toBeDefined();
      expect(character._spriteImage).toBe(characterSpriteImage);
      expect(character._spriteSheet).toBe(character.animation.spriteSheet);

      expect(character._spriteSheet._animations[0]).toBe("walkDown");
      expect(character._spriteSheet._animations[1]).toBe("walkLeft");
      expect(character._spriteSheet._animations[2]).toBe("walkRight");
      expect(character._spriteSheet._animations[3]).toBe("walkUp");
    });

    it('_getSpriteSheetProperties', function(){
      var properties = character._getSpriteSheetProperties();

      expect(properties.images).toEqual([characterSpriteImage]);
      expect(properties.frames.width).toEqual(32);
      expect(properties.frames.height).toEqual(48);

    });
  });

});