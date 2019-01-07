var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.stackStorage = {};
  
};

Stack.prototype.push = function(value) {
  this.stackStorage[this.counter] = value
  this.counter++;
};

Stack.prototype.pop = function() {
  //console.log(`Pop Start ${this.counter}`);
  this.counter--;
  if (this.counter < 0) this.counter = 0;
  var keyBeingPopped = this.counter;
  var beingPopped = this.stackStorage[this.counter];
  delete this.stackStorage[this.counter];
  return beingPopped;
};

Stack.prototype.size = function() {
  return this.counter;
};