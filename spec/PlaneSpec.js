describe('Plane', function() {
  var plane;
  var passenger1 = 'passenger1'
  var passenger2 = 'passenger2'

  beforeEach(function() {
    plane = new Plane();
  });

  describe('#board', function() {
    it('lets passengers board a plane', function() {
      plane.board(passenger1)
      expect(plane.onBoard).toContain(passenger1)
    });

    it('prevents passenger boarding if plane is full', function() {
      for (var i = 0; i < 100; i++) {
        var passenger = 'passenger'
        plane.board(passenger)
    }
    expect(function() {plane.board(passenger1);}).toThrow('Plane is full!')
  });
});

  describe('#disembark', function() {
    it('lets passengers disembark', function() {
      plane.board(passenger1)
      plane.board(passenger2)
      plane.disembark(passenger1)
      expect(plane.onBoard).not.toContain(passenger1)
    });
  });

  describe('plane capacity', function() {
    it('can change plane capacity', function() {
      plane.changePlaneCapacity(110)
      expect(plane.planeCapacity).toEqual(110)
    });
  });

  describe('full', function() {
    it('returns true if plane is full', function() {
      for (var i = 0; i < 100; i++) {
        var passenger = 'passenger'
        plane.board(passenger)
      }
      expect(plane.isfull()).toBe(true)
    });
  });
});
