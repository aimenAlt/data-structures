var Queue = function() {
  
  
  // DOOOO NOOOOOOOT WRITE OBJECTS LIKE C++ CLASSES!!!!!!!!!!!!!!!!!
  
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueStorage = {};
  queueStorage.counter = 0;
  _.extend(queueStorage, queueMethods);
  
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




