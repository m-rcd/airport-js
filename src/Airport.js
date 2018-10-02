function Airport () {
  this.hangar = [];
  this.AIRPORT_CAPACITY = 20;
}

Airport.prototype.land = function(plane) {
  if (this.isstormy()) {
    throw 'No landing while stormy';
  };
  if (this.isfull()) {
    throw 'Airport is full!'
  }
  this.hangar.push(plane)
}

Airport.prototype.takeoff = function(plane) {
  var index = this.hangar.indexOf(plane);
  if (this.isstormy()) {
    throw 'No take off while stormy';
  };;
    this.hangar.splice(index, 1);
}

Airport.prototype.isstormy = function() {
  var weather = new Weather();
  weather.stormy()
};

Airport.prototype.isfull = function() {
  return this.hangar.length === this.AIRPORT_CAPACITY;
}

Airport.prototype.capacity = function() {
  return this.AIRPORT_CAPACITY;
}

Airport.prototype.changeCapacity = function(number) {
  return this.AIRPORT_CAPACITY = number;
}
