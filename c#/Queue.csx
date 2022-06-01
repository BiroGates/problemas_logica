using Internal;

public class Item
{
    public int value;
    public Item pointer;
    public Item(int value, Item pointer)
    {
        this.value = value;
        this.pointer = pointer; 
    }
}

public class Queue
{
    public Item head = null;
    public Item tail = null;
    public int size = 0;

    public void Enqueue(int value)
    {
        this.head = new Item(value, this.head);
        this.size++;
    }

    public void DeQueue()
    {
        Item CurrentData = this.head;
        Item NextData = CurrentData.pointer;
        
        for(int i = 0; i < this.size; i++)
        {
            if(NextData.pointer == null)
            {
                CurrentData.pointer = null;
            }else{
                CurrentData = CurrentData.pointer;
                NextData = CurrentData.pointer;
            }            
        }
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
q.DeQueue();
q.Enqueue(450);
q.ShowData();