describe ('Weather', function() {
 var weather;

 beforeEach(function() {
   weather = new Weather();
 })

 describe('when stormy', function() {
   it('returns true', function() {
     spyOn (weather, 'stormy').and.returnValue(true);
     expect(weather.stormy()).toBe(true);
   })
 })

 describe('when not stormy', function() {
   it('returns false', function() {
     spyOn (weather, 'stormy').and.returnValue(false);
     expect(weather.stormy()).toBe(false);
   })
 })
})
