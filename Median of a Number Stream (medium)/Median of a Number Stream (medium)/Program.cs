// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

MedianNumberStream medianNumberStream = new();
medianNumberStream.insertNum(3);
medianNumberStream.insertNum(1);
Console.WriteLine($"median --> {medianNumberStream.findMedian()}");
medianNumberStream.insertNum(5);
Console.WriteLine($"median --> {medianNumberStream.findMedian()}");
medianNumberStream.insertNum(4);
Console.WriteLine($"median --> {medianNumberStream.findMedian()}");
Console.ReadLine();


public class MedianNumberStream
{
    public List<int> numbers = new List<int>();
    public void insertNum(int num)
    {
        numbers.Add(num);
        numbers.Sort();  
    }
    public decimal findMedian()
    {
        decimal result = 0;
        if (numbers.Count == 0)
        {
            return 0;
        }
        else if (numbers.Count == 1) 
        {
            return (decimal)numbers[0];
        }
        else
        {
            int length = numbers.Count; 
            int midLength = length  / 2;
            if ((length % 2) == 0)
            {
                result = (numbers[midLength-1] + numbers[midLength])/2m;
            }
            else
            {
                result =(decimal) numbers[midLength];
            }
           
        }
        return result;
    }
}
