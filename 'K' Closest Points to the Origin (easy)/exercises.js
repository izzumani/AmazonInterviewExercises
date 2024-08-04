function FindTheClosetPointsToTheOrigin(points, k)
{
    const results = points.reduce((acc,elem,indx)=>{
        result = parseInt(Math.sqrt(elem[0]**elem[0] +  elem[1]** elem[1]));
        acc.push([result,indx])
        return acc;
    },[] ).InsertSort(0).slice(0,k).InsertSort(1).map((elem)=> points[elem[1]] );
    //.sort((a,b)=> a[0] - b[0]).slice(0,k).sort((a,b)=> a[1]-b[1]).map((elem)=> points[elem[1]] );

    console.log(results);
}

Object.defineProperty(Array.prototype,"InsertSort",{
value: function InsertSort(indexer)
{
    let j =0;
    let currentValue = 0;
    let arr = this;
    console.log(this);
    for (let index = 1; index < arr.length; index++) {
        
        j = index -1;
        currentValue = arr[index]
       while (j>=0 && arr[j][indexer] >  currentValue[indexer]) {
        arr[j+1] = arr[j];
        j--
       }

       arr[j+1] = currentValue;
    }
    return arr;
},
enumerable:true,
writable:true,
configurable:true

});



// const points = [[1,2],[1,3]];
// const k =1;

const points = [[1,3],[3,4],[2,-1]];
const k =2;

FindTheClosetPointsToTheOrigin(points, k)
