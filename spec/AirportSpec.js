describe ('Airport', function() {
  var airport;
  var plane = 'plane';

  beforeEach(function() {
    airport = new Airport();
  });

  it("lands a plane", function() {
    airport.land(plane)
    expect(airport.hangar).toContain(plane);
  })

  it('lets a plane take off', function() {
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  })
})
