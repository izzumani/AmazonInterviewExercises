// See https://aka.ms/new-console-template for more information
using System.Transactions;

Console.WriteLine("Hello, World!");



LinkedListNodes L1 = new LinkedListNodes(new int[] {2,6,8 });
LinkedListNodes L2 = new LinkedListNodes(new int[] { 3, 6, 7 });
LinkedListNodes L3= new LinkedListNodes(new int[] { 1, 3, 4 });

L1 = L1.MergeNodeList(L2);
L1 = L1.MergeNodeList(L3);

var sortedListValue = L1.GetSortedValues();

Console.ReadLine();
public class LinkedListNodes
{
    public Node Root = null;
    public LinkedListNodes(int[] values)
    {
        Root = new Node(values[0]);
        
        Node currentNode = Root;
       for (int i = 1; i < values.Length; i++)
        {
            Node node = new Node(values[i]);
            currentNode.next = node;
            currentNode = currentNode.next; 
        }
    }

    public class Node
    {
        public int value;

        public Node next;

        public Node(int _value)
        {
            value = _value;
            next = null;
        }

    }

    public LinkedListNodes MergeNodeList(LinkedListNodes node)
    {
        Node lastNode = Root;
       


        while (lastNode.next!=null)
        {
           
            lastNode = lastNode.next;
          
        }
        lastNode.next = node.Root;
        return this; 
    }

    public int[] GetSortedValues ()
    {
        Node current = Root;
        List<int> sortedValues = new List<int>();
        while (current.next !=null)
        {
            sortedValues.Add(current.value);
            current = current.next; 
        }

        sortedValues.Sort((a, b) => a - b);
        return sortedValues.ToArray();  
    }

    
}


