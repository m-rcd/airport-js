describe('Plane', function() {
  var plane;
  var passenger1 = 'passenger1'

  beforeEach(function() {
    plane = new Plane();
  });

  describe('#board', function() {
    it('lets passengers board a plane', function() {
      plane.board(passenger1)
      expect(plane.onBoard).toContain(passenger1)
    });
  });
});
