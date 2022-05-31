using Internal;

public class Item
{
    int value;
    Item pointer;
    public Item(int value, Item pointer)
    {
        this.value = value;
        this.pointer = pointer;
    }
}

public class Queue
{
    int size;
    int qItems = 0;
    Item head;
    Item tail;
    
    public Queue(int size)
    {
        this.size = size;
    }

    public void Isfull()
    {

    }
    public void EnQueue(int value)
    {
        if(this.qItems < this.size)
        {
        }
    }
}