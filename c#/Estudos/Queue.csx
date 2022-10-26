using Internal;

public class Item
{
    public int value;
    public Item pointer;
    public Item previous;

    public Item(int value, Item pointer)
    {
        this.value = value;
        this.pointer = pointer;
    }

    public void SetPrevious(Item previous)
    {
        this.previous = previous;
    }
}

public class Queue
{
    public Item head = null;
    public Item tail = null;
    public int size = 0;

    public void Enqueue(int value)
    {
        
        if(this.size == 0)
        {
            this.head = new Item(value, this.head); 
            this.tail = this.head;
        }else{
            this.head = new Item(value, this.head);
            this.head.pointer.SetPrevious(this.head);
        }
        this.size++;
    }

    public void DeQueue()
    {
        this.tail = this.tail.previous;
        this.tail.pointer = null;
        
        this.size--;
    }

    public void ShowData()
    {
        Item CurrentData = this.head;
        for(int i = 0; i < this.size; i++)
        {
            if(CurrentData.pointer != null)
            {
                Console.WriteLine(CurrentData.value.ToString());
                CurrentData = CurrentData.pointer;
            }else{
                Console.WriteLine(CurrentData.value.ToString());
                break;
            }
        }
        Console.WriteLine(this.size.ToString());
    }

}

Queue q = new Queue();
q.Enqueue(50);
q.Enqueue(150);
q.Enqueue(250);
q.Enqueue(350);
q.Enqueue(450);
q.DeQueue();
q.ShowData();
Console.WriteLine("=====");
Console.WriteLine(q.head.value.ToString());
Console.WriteLine(q.tail.value.ToString());