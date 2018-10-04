'use strict';

describe ('Airport', function() {
  var airport;
  var plane1 = 'plane1';
  var plane2 = 'plane2';


  beforeEach(function() {
    airport = new Airport();
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  })

  describe('#land', function() {
    it("lands a plane", function() {
      airport.land(plane1)
      expect(airport.planes()).toEqual([plane1]);
    });

    it("prevents landing if stormy", function() {
      spyOn (airport, 'isstormy').and.returnValue(true);
      expect(function() {airport.land(plane1);}).toThrow('No landing while stormy')
      expect(airport.planes()).not.toContain(plane1)
    });

    it('prevents landing if airport full', function() {
      for (var i = 0; i < 20; i++) {
        var plane = new Plane()
        airport.land(plane)
      }
      expect(function() {airport.land(plane1);}).toThrow('Airport is full!')
    })

    it('throws an error if plane already landed', function() {
      airport.land(plane1)
      expect(function() {airport.land(plane1);}).toThrow('Plane already landed!')
    })
  });

  describe('#takeoff', function() {
    it('lets a plane take off', function() {
      airport.land(plane1)
      airport.land(plane2)
      airport.takeoff(plane2)
      expect(airport.planes()).not.toContain(plane2)
    });

    it('prevents take off if stormy', function() {
      airport.land(plane1)
      spyOn (airport, 'isstormy').and.returnValue(true);
      expect(function() {airport.takeoff(plane1);}).toThrow('No take off while stormy');
      expect(airport.planes()).toEqual([plane1])
    });
  });

  describe('#full', function() {
    it('returns true if airport is full', function() {
      for (var i = 0; i < 20; i++) {
        var plane = new Plane()
        airport.land(plane)
      }
      expect(airport.isfull()).toBe(true)
    });

    it('returns false if aiport is not full', function() {
      for (var i = 0; i < 18; i++) {
        var plane = new Plane()
        airport.land(plane)
      }
      expect(airport.isfull()).toBe(false)
    })
  });

  describe('default capacity', function() {
    it('can override default', function() {
      airport.changeCapacity(30)
      expect(airport.capacity()).toEqual(30)
    });
  });
});
