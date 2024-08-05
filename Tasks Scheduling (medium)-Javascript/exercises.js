function getTaskScheduling(Prerequisites,tasks)
{
    const inDegree = Array(tasks).fill(0);
    console.log(inDegree);
    const adjacentList = new Map();
    let index  = 0;
    let workOrder = [];

    while (Prerequisites.length > index)
    {
        if(adjacentList.get(Prerequisites[index][0])==undefined)
        {
            adjacentList.set(Prerequisites[index][0],[Prerequisites[index][1]])
        }
        else
        {
            adjacentList.get(Prerequisites[index][0]).push(Prerequisites[index][1]);
            
        }
        
        inDegree[Prerequisites[index][1]]++
        index ++;
    }
    console.log(adjacentList);
    const zeroInDegreeQueue = inDegree.reduce((acc,elem,indx)=>{
        if(elem==0) 
            acc.push(indx);

            return acc
    },[])
    

    while (zeroInDegreeQueue.length > 0)
    {
        const queueIndex = zeroInDegreeQueue.shift();
        console.log(`queueIndex --> ${queueIndex}`);
       // console.log(inDegree);
        workOrder.push(queueIndex);
        const adjArr = adjacentList.get(queueIndex);
        if(adjArr==undefined)
            continue;
        for (const element of adjArr) {
            inDegree[element]--
            if (inDegree[element]==0)
            {
                zeroInDegreeQueue.push(element);
                console.log(zeroInDegreeQueue);
            }
        }
        
    }

 
   
    
    console.log(workOrder);
    
}

//const Prerequisites=[[0, 1], [1, 2]];
//const Prerequisites=[[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]]
const Prerequisites=[[0, 1], [1, 2], [2, 0]]
const Tasks=3;

console.log(getTaskScheduling(Prerequisites,Tasks))