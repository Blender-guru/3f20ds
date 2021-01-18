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

function Palindrome(word)
{
    let myStack = new Stack();

    for(let i = 0; i < word.Length; i++)
    {
        myStack.push(word[i]);
    }

    for(let i = 0; i < word.Length; i++)
    {
        if(word[i] != myStack.pop())
            return false;
    }
    return true;
}

function WriteValue(word)
{
    if(Palindrome(word))
        console.log("\"" + word + "\" is palindrome.");
    else
        console.log("\"" + word + "\" isn't palindrome.");
}

function DoStuff()
{
    WriteValue("anitalavalatina");
    WriteValue("rage");
}

DoStuff();