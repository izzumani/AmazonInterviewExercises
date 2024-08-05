function getFrequentNumber(input,k)
{
    // return Object.entries(input.reduce((acc,elem)=>{
    //     if (acc[elem]==undefined)
    //         acc[elem] = 1;
    //     else 
    //         acc[elem]++
    //     return acc;
    // },{})).sort((a,b)=>b[1]-a[1]).map((elem)=>parseInt(elem[0])).slice(0,k);

    return Object.entries(input.reduce((acc,elem,index)=>{
        if (acc[elem]==undefined)
        {
            const obj = {count:1, minIndex: index}
            acc[elem] = obj;
        }
            
        else 
        {
            acc[elem].count++
            
        }
            
        return acc;
    },{})).sort((a,b)=>{return b[1].count - a[1].count}).slice(0,k)
    .sort((a,b)=>{
        if( b[1].count == a[1].count)
        {
           
            return a[1].minIndex- b[1].minIndex
        }
           }
    )
    .map((elem)=>parseInt(elem[0]));



    //
   
}

const input = [1,16, 3, 5, 12,16 ,11, 12, 11,12]
const k = 3;

console.log(getFrequentNumber(input,k));

