function findMedian(arr,number)
{
    arr.push(number);
    if (arr.length <=1) return arr[0];
    let median = parseInt(arr.length/2);
    arr.sort();
    if ((arr.length%2)==0)
        return (arr[median-1] + arr[median])/2
    else 
        return arr[median];
}
const arr = []
console.log(findMedian(arr,3));
console.log(arr);
console.log(findMedian(arr,1));
console.log(arr);
console.log(findMedian(arr,5));
console.log(arr);
console.log(findMedian(arr,4));
console.log(arr);