require(['model/Grid'], function(Grid){
  'use strict';

  describe('Grid', function(){
    it('[constructor]', function(){
      var grid = new Grid({
        width: 11,
        height: 11
      });

      expect(grid.get('width')).toEqual(11);
      expect(grid.get('height')).toEqual(11);

      var badParameterTest1 = function(){
        new Grid(10, 11);
      };
      var badParameterTest2 = function(){
        new Grid(11, 10);
      };
      var badParameterTest3 = function(){
        new Grid(10, 10);
      };

      expect(badParameterTest1).toThrow("Invalid argument error");
      expect(badParameterTest2).toThrow("Invalid argument error");
      expect(badParameterTest3).toThrow("Invalid argument error");

    });
  });
});