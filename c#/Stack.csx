using Internal;
class Item
{
    public int value;
    public Item next;
    public Item previous;
    
    public Item(int value, Item next)
    {
        this.value = value;
        this.next = next;
    }

    public void SetPrevious(Item previous)
    {
        this.previous = previous;
    }
}

class Stack
{
    public Item head = null;
    public Item tail = null; 
    public int size = 0;

    public void Push(int value)
    {
        if(this.size == 0)
        {
            this.head = new Item(value, this.head);
            this.tail = this.head;
        }else
        {
            this.head = new Item(value, this.head);
            this.head.next.SetPrevious(this.head);
        }

        this.size++;
    }

    public void Pop()
    {
        this.head = this.head.next;
        this.size--;    
    }

    public void Top()
    {
        Console.WriteLine(this.head.value.ToString());
    }

    public void ShowData()
    {
        Item CurrentData = this.head;
        for(int i = 0; i < this.size; i++)
        {
            if(CurrentData.next != null)
            {
                Console.WriteLine(CurrentData.value.ToString());
                CurrentData = CurrentData.next;
            }else
            {
                Console.WriteLine(CurrentData.value.ToString());
            }
        }
    }
}

Stack Pilha = new Stack();
Pilha.Push(10);
Pilha.Push(30);
Pilha.Push(150);
Pilha.Push(250);
Pilha.Pop();
Pilha.Pop();
Pilha.ShowData();
Console.WriteLine("=========");
Pilha.Top();