class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stackStorage = {};
    this.counter = 0;
  }
  
  push(value){
    this.stackStorage[this.counter] = value;
    this.counter++;
  }
  pop(){
    this.counter--;
    if (this.counter < 0) this.counter = 0;
    var BeingPopped = this.stackStorage[this.counter];
    delete this.stackStorage[this.counter];
    return BeingPopped;
  }
  size(){
    return this.counter;
  }

}