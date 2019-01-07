var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style. 
  this.queueStorage = {};
  this.counter = 0;
};

Queue.prototype.firstInQueue = function(){
  var smallest = this.counter;
  for (var key in this.queueStorage){
    
    if (parseInt(key) < smallest) smallest = parseInt(key);
  }
  return smallest;
};

Queue.prototype.enqueue = function(value){
//  console.log("enqueue");
  this.queueStorage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function(){
//  console.log("dequeue");
  var keyBeingdeQueued = this.firstInQueue();
  var beingDequeued = this.queueStorage[keyBeingdeQueued];
  delete this.queueStorage[keyBeingdeQueued];
//  console.log();
  return beingDequeued;
};

Queue.prototype.size = function(){
  var length = 0;
//  console.log("size");
//  console.log(this.queueStorage);
  for (var key in this.queueStorage){
    length++;
  }
  return length;
};
