var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var stackStorage = {};
  //Write and return a different object which will contain the methods seperatley. along with stirage and counter and stack meth. 
  stackStorage.counter = 0;
  _.extend(stackStorage, stackMethods);
  
  return stackStorage;
};

var stackMethods = {};

stackMethods.push = function(value){
  //var counter = 0;
  //console.log(this);
  this[this.counter] = value;
  this.counter++;
//  console.log(`after ${this.counter}`);
};

stackMethods.pop = function(value){
//  console.log(this);
  this.counter--;
  if (this.counter < 0) this.counter = 0;
  var gonnaPop = this[this.counter];
  delete this[this.counter];
//  console.log(`popping: ${gonnaPop}`);
  return gonnaPop;
};

stackMethods.size = function(value){
//  var size = 0;
//    for (var key in this.stackStorage) {
//        if (this.stackStorage.hasOwnProperty(key)) size++;
//    }
//    return size;
  return this.counter;
};








