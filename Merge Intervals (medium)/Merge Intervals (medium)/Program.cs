// See https://aka.ms/new-console-template for more information
using System.Text.Json;
Console.WriteLine("Hello, World!");
int[,] intervals = new int[,] { {1,4 },{2,5 },{7,9 } };


Func<int[,], int[,]> mergeIntervals = delegate (int[,] intervals)
{
    List<int[]> result = new List<int[]>();
    for (int i = 0; i < intervals.GetLength(0); i++)
    {
        Console.WriteLine(JsonSerializer.Serialize(Enumerable.Range(0,intervals.GetLength(1)).Select(x=> intervals[i,x]).ToArray()));
        int[] enumArr = Enumerable.Range(0, intervals.GetLength(1)).Select(x => intervals[i, x]).ToArray();
        result.Add(enumArr);    






    }
    int[,] returnArry = new int[,] { };

    Array.Copy(result.ToArray(), returnArry, result.Count);
    return returnArry;
};

var output =  mergeIntervals(intervals);

Console.ReadLine();