require(['model/Model'], function(Model){
  'use strict';

  describe('Model', function(){
    var attributes = {
      a: "a",
      b: 1
    };
    var model;


    beforeEach(function(){
      model = new Model(attributes);
    });


    it('[constructor]', function(){
      expect(model._attributes).toEqual(attributes);

      //empty constructor test
      model = new Model();

      expect(model._attributes).toBeDefined();
      model.set('a', 'a');
      expect(model.get('a')).toBe('a');

    });

    it('get', function(){
      expect(model.get('a')).toBe('a');
      expect(model.get('b')).toBe(1);
    });

    it('set', function(){
      model.set('c', 'c');

      expect(model.get('c')).toBe('c');
    });

    it('event change', function(){
      var changed = false, value = undefined;

      model.on('change:d', function(val){
        changed = true;
        value = val;
      });

      model.set('d', 'd');

      expect(changed).toBeTruthy();
      expect(value).toEqual('d');
    });

  });
});