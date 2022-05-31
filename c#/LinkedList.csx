using Internal;

public class Node
{
    public int value;
    public Node pointer;

    public Node(int value, Node pointer)
    {
        this.value = value;
        this.pointer = pointer;
    }
}

public class LinkedList
{
    public Node head = null;
    public int size = 0;
    // Insert First Node
    public void InsertAtFirst(int value)
    {
        this.head = new Node(value, this.head);
        this.size++;
    }

    // Insert Last Node
    public void InsertAtLast(int value)
    {
        Node CurrentNode = this.head;
        for(int i = 0; i < this.size; i++)
        {
            if(CurrentNode.pointer != null) CurrentNode = CurrentNode.pointer;
            else CurrentNode.pointer = new Node(value, null);
        }
        this.size++;
    }

    // Insert At Index
    public void InsertAtIndex(int index, int value)
    {
        
        if(index == 0) InsertAtFirst(value); 
        else if(index == this.size) InsertAtFirst(value);
        else{
            Node CurrentNode = this.head;
            Node NextNode = this.head.pointer;
            for(int i = 0; i < this.size; i++)
            {
                if(i + 1 == index){
                    CurrentNode.pointer = new Node(value, NextNode);
                }else{
                    CurrentNode = CurrentNode.pointer;
                    NextNode = NextNode.pointer; 
                }

            }
            this.size++;
        }
    }

    // Get At Index
    public int GetAtIndex(int index)
    {
        Node CurrentNode = this.head;
        int result = 0;
        for(int i = 0; i < this.size; i++)
        {
            if(index < 0) return -1;
            if(index > this.size) return -1;
            if(i == index) result = CurrentNode.value;
            else CurrentNode = CurrentNode.pointer;
        }
        
        this.size++;
        
        return result;
    }

    // Show values
    public void ShowValues()
    {
        Node CurrentNode = this.head;
        for(int i = 0; i < this.size; i++)
        {
            Console.WriteLine(i + " : " + CurrentNode.value.ToString());
            CurrentNode = CurrentNode.pointer;
        }
        Console.WriteLine(this.size.ToString());        
    }
}

LinkedList list = new LinkedList();
list.InsertAtFirst(10);
list.InsertAtFirst(30);
list.InsertAtFirst(50);
list.InsertAtLast(20);
list.InsertAtIndex(0, 250);
list.ShowValues();
Console.WriteLine(list.GetAtIndex(3).ToString());