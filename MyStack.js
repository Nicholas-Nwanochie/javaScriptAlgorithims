// Functions: push, pop, peek, view, length
 
//Creates a stack constructor
var Stack = (function () {
 
  function Stack() {
    //The top of the Stack
    this.top = 0;
    //The array representation of the stack
    this.stack = new Array();
  }
 
  //Adds a value onto the end of the stack
  Stack.prototype.push = function (value) {
    this.stack[this.top] = value;
    this.top++;
  };
 
  //Removes and returns the value at the end of the stack
  Stack.prototype.pop = function () {
    if (this.top === 0) {
      return "Stack is Empty";
    }
 
    this.top--;
    var result = this.stack[this.top];
    delete this.stack[this.top];
    return result;
  };
 
  //Returns the size of the stack
  Stack.prototype.size = function () {
    return this.top;
  };
 
  //Returns the value at the end of the stack
  Stack.prototype.peek = function () {
    return this.stack[this.top - 1];
  }
 
  //To see all the elements in the stack
  Stack.prototype.view = function () {
    for (var i = 0; i < this.top; i++)
      console.log(this.stack[i]);
  };
 
  return Stack;
 
}());
 
//Implementation
var myStack = new Stack();
 
myStack.push(1);
myStack.push(5);
myStack.push(76);
myStack.push(69);
myStack.push(32);
myStack.push(54);
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push(55);
console.log(myStack.peek());
myStack.view();
