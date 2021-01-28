function Stack() 
{
    this.dataStore = [];
    this.top = 0;

    this.push = function (element) { this.dataStore[this.top++] = element; }
    this.pop = function () { return this.dataStore[--this.top]; }
    this.peek = function () { return this.dataStore[this.top - 1]; }
    this.Length = function () { return this.top; }
    this.clear = function () { this.top = 0; }
}

function Factorial(n) 
{
    let myStack = new Stack();
    let product = 1;

    while (n > 1) 
        myStack.push(n--);
    
    while (myStack.Length() > 0) 
        product *= myStack.pop();
    
    return product;
}

function PrintOut(num) 
{
    return console.log("Factorial de " + num + " = " + Factorial(num));
}

PrintOut(7);
PrintOut(12); 