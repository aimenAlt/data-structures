class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.queueStorage = {};
    this.counter = 0;
    this.decounter = 0;
  }
  
  firstInQueue(){
  }
  
  enqueue(value){
    this.queueStorage[this.counter] = value;
    this.counter++;
  }
  
  dequeue(){
//    this.decounter++;
    var keyBeingDequeued = this.decounter
    var beingDequeued = this.queueStorage[keyBeingDequeued];
    delete this.queueStorage[keyBeingDequeued];
    this.decounter++;
    if (this.decounter > this.counter) this.decounter = this.counter;
    return beingDequeued;
  }
  
  size(){
    return this.counter - this.decounter;
  }
  

}
