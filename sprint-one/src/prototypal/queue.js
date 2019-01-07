var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueStorage = Object.create(queueMethods);
  queueStorage.counter = 0;
  return queueStorage;
};

var queueMethods = {};


queueMethods.firstInQueue = function(){
  var smallest = this.counter;
  for (var key in this){
    if (parseInt(key) < smallest && key !== "counter") smallest = parseInt(key);
  }
  return smallest;
};

queueMethods.enqueue = function(value){
  this[this.counter] = value;
  this.counter++;
};

queueMethods.dequeue = function(){
  var keyBeingDequeued = this.firstInQueue();
  var beingDequeued = this[keyBeingDequeued];
  delete this[keyBeingDequeued];
  return beingDequeued;
};

queueMethods.size = function(){
  var size = 0;
  for(var key in this){
    if (!_.isFunction(this[key]) && key !== "counter") size++;
  }
  return size;
};