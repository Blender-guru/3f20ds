function Queue() 
{
    this.dataStore = [];
    this.enqueue = function(element){ this.dataStore.push(element) }
    this.dequeue = function(){ return this.dataStore.shift() }
    this.front = function(){ return this.dataStore[0] }
    this.back = function(){ return this.dataStore[this.dataStore.length - 1] }
    this.toString = function(){ let string = "";
                                for(let i = 0; i < this.dataStore.length; i++)
                                    string += this.dataStore[i] + "\n";
                                return string; }
    this.empty = function(){ if(this.dataStore.length == 0) return true;
                             else return false; }
}

function Dancer(name, sex) 
{
    this.name = name;
    this.sex = sex;
}

function KickOutDancers(males, females) 
{
    console.log("Dancers are: \n");
    while (!males.empty() && !females.empty()) 
    {
        console.log("Male dancer is: " + males.dequeue());
        console.log("Female dancer is: " + females.dequeue());
    }
}

function MyFunction()
{
    let maleDancers = new Queue();
    maleDancers.enqueue(new Dancer("Gaddiel", "Male"));
    maleDancers.enqueue(new Dancer("Jose", "Male"));

    let femaleDancers = new Queue();
    femaleDancers.enqueue(new Dancer("Karina", "Female"));
    femaleDancers.enqueue(new Dancer("Karol", "Female"));
    femaleDancers.enqueue(new Dancer("Karnete", "Female"));

    KickOutDancers(maleDancers, femaleDancers);

    if(!maleDancers.empty())
    {
        console.log(maleDancers.front().name + "hasn't a couple");
    }
    if(!femaleDancers.empty())
    {
        console.log(femaleDancer.front().name + "hasn't a couple");
    }
}

MyFunction();