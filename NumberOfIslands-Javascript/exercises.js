

function BiggestIsland(matrix)
{
    let totalNumberOfBoxes = matrix[0].length* matrix[1].length;
    let index =0;
    let x=0,y=0,min=0,max= matrix[0].length-1;
    let visited = [];
    let toBeVisited =[];
    let numberOfIslandsCounter = 0;
    let highestNumberOfIslands = 0;
    while (totalNumberOfBoxes >index) 
    {
        console.log(`matrix[${x},${y}] --> ${matrix[x][y]}`)
        if(matrix[x][y]==1 && visited.includes(`${x},${y}`)==false)
        {
            toBeVisited.push([x,y]);
            console.log(toBeVisited);
            
            while (toBeVisited.length > 0)
            {
                let [a,b] = toBeVisited.shift();
                numberOfIslandsCounter++
                visited.push(`${a},${b}`)
                console.log(numberOfIslandsCounter);
                if (matrix[a-1]!==undefined 
                    && matrix[a-1][b]==1 
                    &&  visited.includes(`${a-1},${b}`)==false)
                    {
                        toBeVisited.push([a-1,b])
                    }
                if (matrix[a][b-1]!==undefined 
                    && matrix[a][b-1]==1 
                    &&  visited.includes(`${a},${b-1}`)==false)
                    {
                            toBeVisited.push([a,b-1])
                    }

                    if (matrix[a+1]!==undefined 
                        && matrix[a+1][b]==1 
                        &&  visited.includes(`${a+1},${b}`)==false)
                        {
                            toBeVisited.push([a+1,b])
                        }
                    if (matrix[a][b+1]!==undefined 
                        && matrix[a][b+1]==1 
                        &&  visited.includes(`${a},${b+1}`)==false)
                        {
                                toBeVisited.push([a,b+1])
                        }
        
            }
           
        }
        highestNumberOfIslands = Math.max(highestNumberOfIslands,numberOfIslandsCounter);
        numberOfIslandsCounter = 0;
        if(x==min && y !=max)
        {
            y++;
        }
        else if(y==max && x !=max)
        {
            x++;
        }
        else if (x==max && y !=min)
        {
            y--;
        }
        else if (y==min && x !=min +1 )
        {
            x--;
        }
        else
        {
            min +=1;
            max -=1
            y++;
        }
        
        index+=1; 
    }
    return highestNumberOfIslands
}

const matrix = [
    [1,1,1,0,0],
    [0,1,0,0,1],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,0,1,0,0],
]

console.log(BiggestIsland(matrix));