function Weather () {
}

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

Weather.prototype.stormy = function() {
  [0,1,2,3,4,5,6,7,8,9,10].random() > 8 
}
