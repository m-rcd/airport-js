function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather()
  this._hangar = [];
  this.AIRPORT_CAPACITY = 20;
}

Airport.prototype.planes = function () {
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if (this.planeInHangar(plane)) {
    throw 'Plane already landed!'
  }
  if (this.isstormy()) {
    throw 'No landing while stormy';
  };
  if (this.isfull()) {
    throw 'Airport is full!'
  }
  this._hangar.push(plane)
}

Airport.prototype.takeoff = function(plane) {
  var index = this._hangar.indexOf(plane);
  if (this.isstormy()) {
    throw 'No take off while stormy';
  };;
    this._hangar.splice(index, 1);
}

Airport.prototype.isstormy = function() {
  this._weather.stormy()
};

Airport.prototype.isfull = function() {
  return this._hangar.length === this.AIRPORT_CAPACITY;
}

Airport.prototype.capacity = function() {
  return this.AIRPORT_CAPACITY;
}

Airport.prototype.changeCapacity = function(number) {
  return this.AIRPORT_CAPACITY = number;
}

Airport.prototype.planeInHangar = function(plane) {
  return this._hangar.includes(plane)
}
