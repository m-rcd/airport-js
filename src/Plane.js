function Plane() {
 this.onBoard = [];
 this.planeCapacity = 100;
};

Plane.prototype.board = function(passenger) {
  this.onBoard.push(passenger)
};

Plane.prototype.disembark = function(passenger) {
  var index = this.onBoard.indexOf(passenger);
  this.onBoard.splice(index, 1);
}

Plane.prototype.changePlaneCapacity = function(newCapacity) {
  this.planeCapacity = newCapacity
}
