describe ('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("lands a plane", function() {
    airport.land(plane)
    expect(airport.hangar).toContain(plane);
  })

  it('lets a plane take off', function() {
    airport.takeoff(plane)
    expect(airport.hangar).not.toContain(plane)
  })
})
