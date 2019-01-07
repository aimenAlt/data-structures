var Stack = function() {
  var someInstance = {}; 
  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    counter--;
    if (counter < 0) counter = 0;
    var bePopped = storage[counter.toString()];
    delete storage[counter.toString()];
    return bePopped;
    
  };

  someInstance.size = function() {
//    var size = 0;
//    for (var key in storage) {
//        if (storage.hasOwnProperty(key)) size++;
//    }
    return counter;
  };


  return someInstance;
};