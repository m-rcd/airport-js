function Airport () {
  this.hangar = [];
}

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
}

Airport.prototype.takeoff = function(plane) {
  for( var i = 0; i < this.hangar.length-1; i++){
    if (this.hangar[i] === plane) {
      this.hangar.splice(i, 1);
    }
  }
}
