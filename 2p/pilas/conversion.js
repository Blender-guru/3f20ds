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

function ChangeBase(number, baseTarget) 
{
    let myStack = new Stack();
    let target = "";
    do 
    {
        myStack.push(number % baseTarget);
        number = Math.floor(number /= baseTarget);
    } while (number > 0);

    while (myStack.Length() > 0) 
    {
        target += myStack.pop();
    }
    return target;
}

function PrintOut(base, target)
{
    return console.log(base + "converted to base " + target + "is equal to " + ChangeBase(base, target));
}

PrintOut(64, 8);
PrintOut(56, 2);