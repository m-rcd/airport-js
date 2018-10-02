function Airport () {
  this.hangar = [];
}

Airport.prototype.land = function(plane) {
  if (this.isstormy()) {
    throw 'No landing while stormy';
  };
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
