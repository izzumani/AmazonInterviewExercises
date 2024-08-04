using System.Linq;
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

//var islands = new[,]
//       {
//             { 1, 1, 1, 0, 0 },
//             { 0, 1, 0, 0, 1 },
//             { 0, 0, 1, 1, 0 },
//             { 0, 1, 1, 0, 0 },
//             { 0, 0, 1, 0, 0 }
//        };


var islands = new[,]
       {
             { 0, 1, 1, 1, 0 },
             { 0, 1, 0, 1, 1 },
             { 0, 1, 1, 1, 0 },
             { 0, 1, 1, 0, 0 },
             { 0, 0, 0, 0, 0 }
        };


//var expected = new[,]
//       {
//             { 1, 2, 3, 4, 5 },
//             { 16, 17, 18, 19, 6 },
//             { 15, 24, 25, 20, 7 },
//             { 14, 23, 22, 21, 8 },
//             { 13, 12, 11, 10, 9 }
//        };
BiggestIslandExercises biggestIslandExercises = new();
biggestIslandExercises.BiggestIsland(islands);
Console.ReadLine();
public class BiggestIslandExercises

{
    public void BiggestIsland(int[,] islands)
    {
       
        List<string> islandsVisited = new List<string>();
        Queue<int[]> islandsExplore = new Queue<int[]>();
        int x =0, y =0, max_x= islands.GetLength(0)-1, max_y = islands.GetLength(1) - 1, min_x =0, min_y = 0;

        int maxIslandCount = 0;
        int islandCount = 0;
        for (int i = 0; i < islands.Length-1; i++)
        {
           
            if (islands[x,y]==1 && !islandsVisited.Any(z => string.Equals(z, $"{x},{y}", StringComparison.CurrentCultureIgnoreCase)))
            {
                int a=x,b=y;
                islandsExplore.Enqueue(new int[]{a,b });
                while(islandsExplore.Count>0)
                {
                    var node = islandsExplore.Dequeue();
                    islandsVisited.Add($"{node[0]},{node[1]}");
                    islandCount += 1;
                    if (node[0] + 1 <= max_x 
                        && islands[node[0]+1, node[1]] ==1
                        && !islandsVisited.Any(x=> x== $"{node[0] + 1},{node[1]}")
                        ) islandsExplore.Enqueue(new int[] { node[0] + 1, node[1] });
                    if (node[1] + 1 <= max_y 
                        && islands[node[0], node[1]+1] == 1
                        && !islandsVisited.Any(x => x == $"{node[0]},{node[1]+1}")
                        ) islandsExplore.Enqueue(new int[] { node[0], node[1] + 1 });
                    if (node[0] - 1 >= min_x 
                        && islands[node[0]-1, node[1]] == 1
                         && !islandsVisited.Any(x => x == $"{node[0]-1},{node[1]}")
                        ) islandsExplore.Enqueue(new int[] { node[0] - 1, node[1] });
                    if (node[1] - 1 >= min_y 
                        && islands[node[0], node[1] - 1] == 1
                         && !islandsVisited.Any(x => x == $"{node[0]},{node[1]-1}")
                        ) islandsExplore.Enqueue(new int[] { node[0], node[1] - 1 });

                }
            }
            maxIslandCount = Math.Max( maxIslandCount, islandCount);
            islandCount = 0;
            if (x == min_x && y != max_y)
             {
                y++;
                
            }
            else if (y == max_y && x != max_x)
            {
                x++;
            }
            else if (x == max_x && y != min_y)
            {
                y--;
                
            }
            else if (y== min_y && x != min_x + 1)
            {
                x--;
            }
            else
            {
                min_x += 1;
                min_y += 1;
                max_y -= 1;
                max_x -= 1;
                y++;
            }

        
        }
    }
}




