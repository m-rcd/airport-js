function Plane() {
 this.onBoard = [];
};

Plane.prototype.board = function(passenger) {
  this.onBoard.push(passenger)
};

Plane.prototype.disembark = function(passenger) {
  var index = this.onBoard.indexOf(passenger);
  this.onBoard.splice(index, 1);
}
