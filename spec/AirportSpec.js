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

    it('prevents landing if airport full', function() {
      for (var i = 0; i < 20; i++) {
        var plane = 'plane'
        airport.land(plane)
      }
      expect(function() {airport.land(plane1);}).toThrow('Airport is full!')
    })
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

  describe('#full', function() {
    it('returns true if airport is full', function() {
      for (var i = 0; i < 20; i++) {
        var plane = 'plane'
        airport.land(plane)
      }
      expect(airport.isfull()).toBe(true)
    });
  });
});
