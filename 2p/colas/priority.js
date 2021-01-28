function PriorityQueue() 
{
    let items = [];
    function QueueItem(item, priority) 
    {
        this.item = item;
        this.priority = priority;
    }

    this.enqueue = function (item, priority) 
    {
        let queueItem = new QueueItem(item, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) 
        {
            if (queueItem.priority < items[i].priority) 
            {
                items.splice(i, 0, queueItem);
                added = true;
                break;
            }
        }
        if (!added) items.push(queueItem);  
    }
    this.dequeue = function () { return items.shift(); }
    this.front = function () { return items[0]; }
    this.size = function () { return items.length;  }
    this.print = function () {  for (let i = 0; i < items.length; i++) 
                                    console.log(items[i].item + " - " + items[i].priority);
    };
}
function MyFunction(myPriorityQueue)
{
    myPriorityQueue.enqueue("Gaddiel", 1);
    myPriorityQueue.enqueue("Armando", 3);
    myPriorityQueue.enqueue("Everardo", 2);
    myPriorityQueue.enqueue("Kratos", 4);
    myPriorityQueue.enqueue("Ness", 3);
    myPriorityQueue.enqueue("Ike", 2);
    myPriorityQueue.print();    
}
MyFunction(new PriorityQueue());