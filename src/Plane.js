function Plane() {
 this.onBoard = [];
};

Plane.prototype.board = function(passenger) {
  this.onBoard.push(passenger)
};
