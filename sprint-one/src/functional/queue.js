var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var counter = 0;
  
  var firstInQueue = function(){
    var smallest = counter;
    for (var key in storage){
      if (parseInt(key) < smallest){
        smallest = parseInt(key);
      }
    }
    return smallest;
  };
  
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var keyBeingDequeued = firstInQueue();
    var beingDequeued = storage[keyBeingDequeued];
    delete storage[keyBeingDequeued];
    return beingDequeued;
  };

  someInstance.size = function() {
    var size = 0;
    for ( var key in storage) {
        if (storage.hasOwnProperty(key)) size++;
    }
    return size;
  };

  return someInstance;
};
