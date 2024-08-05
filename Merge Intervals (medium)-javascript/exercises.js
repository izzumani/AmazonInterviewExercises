function MergeIntervals(Intervals)
{
    counter =1;
    windowCounter = 0;
    while (Intervals.length-1> windowCounter) {
        console.log(Intervals[counter]);
        console.log(`${Intervals[windowCounter][1]} > ${Intervals[counter][0]}`)
     if (  Intervals[counter]!==undefined && Intervals[windowCounter][1] > Intervals[counter][0])
     {
        
        const firstArr = Intervals.splice(windowCounter,1);
        const nextArr = Intervals.splice(counter-1,1);
        const resultArr =  firstArr.concat(nextArr).flat();
       
        resultArr.sort();
        
 
        Intervals.splice(windowCounter,0,[resultArr[0],resultArr[resultArr.length-1]])
        //Intervals.unshift([resultArr[0],resultArr[resultArr.length-1]]);
        // counter--;
        // continue;
     }
        
        
        counter++;
        if(counter>=Intervals.length)
        {
            windowCounter++
            counter=windowCounter+1;
        }
    }
    console.log(Intervals);
}

//const intervals = [[1,4], [2,5], [7,9]]
const intervals = [[1,4], [7,9], [2,5], [6,8],[11,13]]
console.log(MergeIntervals(intervals))