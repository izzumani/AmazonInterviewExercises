// See https://aka.ms/new-console-template for more information

using System.Text.Json;


TaskScheduling taskScheduling = new TaskScheduling();

int Tasks = 3;
int[,] Prerequisites = new int[,] { { 0, 1 }, { 1, 2 },{ 2,0} };
//int Tasks = 6;
//int[,] Prerequisites = new int[,] { {2, 5 }, { 0, 5 },{ 0, 4 },{ 1, 4 },{ 3, 2 },{ 1, 3 } };
//int Tasks = 3;
//int[,] Prerequisites = new int[,] { { 0, 1 }, { 1, 2 } };
taskScheduling.CanFinishTasks(Tasks, Prerequisites);
Console.ReadLine();
public class TaskScheduling
{
    public void CanFinishTasks (int tasks, int[,]Prerequisites)
    {
        
        int[] inDegree = new int[tasks];
        Dictionary<int, List<int>> adjacentList =  Enumerable.Range(0, tasks).ToDictionary(x=> x,x=> new List<int>());
        
        Console.WriteLine($"1. adjacentList => {JsonSerializer.Serialize(adjacentList)}");
        for (int row = 0; row < Prerequisites.GetLength(0); row++)
        {
            var rowDetails = Enumerable.Range(0, Prerequisites.GetLength(1)).Select(x => Prerequisites[row, x]).ToArray();
            if (adjacentList.TryGetValue(rowDetails[0], out List<int> listValue))
            {
                
                adjacentList[rowDetails[0]].Add(rowDetails[1]);
                inDegree[rowDetails[1]] += 1;
            }
        }

        Console.WriteLine($"2. adjacentList => {JsonSerializer.Serialize(adjacentList)}");

        Console.WriteLine($"inDegree => {JsonSerializer.Serialize(inDegree)}");
        

        Queue<int> zeroInDegreeQueue = new Queue<int>();
        for (int i = 0; i < tasks; i++)
        {
            if (inDegree[i]==0)
                zeroInDegreeQueue.Enqueue(i);   

        }
        Console.WriteLine($"Enqueue  => {JsonSerializer.Serialize(zeroInDegreeQueue)}");
        int processedTasks = 0;
        List<int>order = new List<int>(); ;
        while (zeroInDegreeQueue.Count > 0)
        {
            var node = zeroInDegreeQueue.Dequeue();
            order.Add(node);
            processedTasks++;

           if (adjacentList.TryGetValue(node,out List<int> adjacentListValue))
            {
                foreach (var neighbor in adjacentListValue)
                {
                    inDegree[neighbor]--;

                    if (inDegree[neighbor] ==0)
                    {
                        zeroInDegreeQueue.Enqueue(neighbor);
                    }
                }
            }
        }



        Console.WriteLine($"order  => {JsonSerializer.Serialize(order)}");
    }
}