describe ('Airport', function() {
  var airport;
  var plane1 = 'plane1';
  var plane2 = 'plane2';

  beforeEach(function() {
    airport = new Airport();
  });

  describe('#land', function() {
    it("lands a plane", function() {
      airport.land(plane1)
      expect(airport.hangar).toContain(plane1);
    });

    it("prevents landing if stormy", function() {
      spyOn (airport, 'isstormy').and.returnValue(true);
      expect(function() {airport.land(plane1);}).toThrow('No landing while stormy')
    });
  });

  describe('#takeoff', function() {
    it('lets a plane take off', function() {
      airport.land(plane1)
      airport.land(plane2)
      airport.takeoff(plane2)
      expect(airport.hangar).not.toContain(plane2)
    });

    it('prevents take off if stormy', function() {
      airport.land(plane1)
      spyOn (airport, 'isstormy').and.returnValue(true);
      expect(function() {airport.takeoff(plane1);}).toThrow('No take off while stormy');
    });
  });
});
