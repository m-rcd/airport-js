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
  });

  describe('#disembark', function() {
    it('lets passengers disembark', function() {
      plane.board(passenger1)
      plane.board(passenger2)
      plane.disembark(passenger1)
      expect(plane.onBoard).not.toContain(passenger1)
    })
  })
});
