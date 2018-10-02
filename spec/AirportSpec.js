describe ('Airport', function() {
  var airport;
  var plane1 = 'plane1';
  var plane2 = 'plane2';

  beforeEach(function() {
    airport = new Airport();
  });

  it("lands a plane", function() {
    airport.land(plane1)
    expect(airport.hangar).toContain(plane1);
  })

  it('lets a plane take off', function() {
    airport.land(plane1)
    airport.land(plane2)
    airport.takeoff(plane2)
    expect(airport.hangar).not.toContain(plane2)
  })
})
