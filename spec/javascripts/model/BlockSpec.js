require(['model/Block'], function(Block){
  'use strict';
  describe('Block', function(){
    it('[constructor]', function(){
      var block = new Block({
        x: 123,
        y: 321
      });

      expect(block.get('x')).toBe(123);
      expect(block.get('y')).toBe(321);
    });
  });
});