require(['model/Character'], function(Character){
  'use strict';

  describe('Character', function(){
    it('[constructor]', function(){
      var characterModel = new Character({
        x: 123,
        y: 321
      });

      expect(characterModel.get('x')).toBe(123);
      expect(characterModel.get('y')).toBe(321);
    });
  });
});