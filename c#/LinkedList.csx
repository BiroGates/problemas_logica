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
    
    public void InsertAtFirst(int value)
    {
        this.head = new Node(value, this.head); 
    }
}

LinkedList list = new LinkedList();
list.InsertAtFirst(10);
Console.WriteLine(list.head.value.ToString());