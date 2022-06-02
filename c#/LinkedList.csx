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
    
    // Big O (1); 
    public void InsertAtFirst(int value)
    {
        this.head = new Node(value, this.head);
        this.size++;
    }

    
    // Big O (1);
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
    
    // Big O (n)
    public int this[int _index]
    {
        get
        {
            Node CurrentNode = this.head;
            int value = -1;
            for(int i = 0; i < this.size; i++)
            {
                if(i != _index)
                {
                    CurrentNode = CurrentNode.pointer;
                }else if (i == _index){
                    value = CurrentNode.value;
                }else
                {
                    value = -1;
                }
            }
            return value;
        }
        set
        {

            if(_index == 0) InsertAtFirst(value); 
            else if(_index == this.size) InsertAtFirst(value);
            else{
                Node CurrentNode = this.head;
                Node NextNode = this.head.pointer;
                for(int i = 0; i < this.size; i++)
                {
                    if(i + 1 == _index){
                        CurrentNode.pointer = new Node(value, NextNode);
                    }else{
                        CurrentNode = CurrentNode.pointer;
                        NextNode = NextNode.pointer; 
                    }

                }
                this.size++;
            }
        }
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
    }
}

LinkedList list = new LinkedList();
list[0] = 50;
list[1] = 150;
list[2] = 250;
list[3] = 350;
list[4] = 450;
list.ShowValues();
Console.WriteLine("=========");
Console.WriteLine(list[0].ToString());