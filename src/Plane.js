function Plane() {
 this.onBoard = [];
 this.planeCapacity = 100;
};

Plane.prototype.board = function(passenger) {
  if (this.isfull()) {
    throw 'Plane is full!'
  }
  this.onBoard.push(passenger)
  
};

Plane.prototype.disembark = function(passenger) {
  var index = this.onBoard.indexOf(passenger);
  this.onBoard.splice(index, 1);
}

Plane.prototype.changePlaneCapacity = function(newCapacity) {
  this.planeCapacity = newCapacity
}

Plane.prototype.isfull = function() {
  return this.onBoard.length === this.planeCapacity
}
