var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackStorage = Object.create(stackMethods);
  stackStorage.counter = 0;
  return stackStorage;
};

var stackMethods = {};


stackMethods.push = function(value){
  this[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  this.counter--;
  if (this.counter < 0) this.counter = 0;
  var beingPopped = this[this.counter];
  delete this[this.counter];
  return beingPopped;
};

stackMethods.size = function(){
  return this.counter;
};