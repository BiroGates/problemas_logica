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

    public Queue(int size)
    {
        this.size = size;
    }

    public void Isfull()
    {
        
    }
    public void EnQueue(int item)
    {

    }
}