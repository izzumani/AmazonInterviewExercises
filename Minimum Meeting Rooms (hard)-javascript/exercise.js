function getMinimumNumberOfMeeting(meetings)
{
    let currentNumberOfRooms  = meetings.length;
if (meetings.length ==1)
{
    return 1;
}
else if (meetings.length ==2)
{
    if(meetings[0][0] > meetings[1][0])
    {
        const swapArr = meetings.shift();
        meetings.push(swapArr)
    }
    if(meetings[0][1] <= meetings[1][0])
        {
            currentNumberOfRooms --
            meetings[0][1] =meetings[1][1]
          
            meetings.splice(1,1);
       
        }
       
        return currentNumberOfRooms;
}

let currentValueCounter = 0
let nextValueCounter = currentValueCounter+1;



    console.log('Unnsorted: ',meetings);
    const scheduledMeetings = JSON.parse(JSON.stringify(meetings.sort((a,b)=>a[0]-b[0]).sort((a,b)=>{if(a[0]==b[0]) return a[1]-b[1]})));
    console.log("Sorted: ",scheduledMeetings);

  
        while(scheduledMeetings.length-1>currentValueCounter )
        {
            if(nextValueCounter >scheduledMeetings.length-1)
                {
                    currentValueCounter ++
                    nextValueCounter = currentValueCounter+1;

                }

            if( scheduledMeetings[nextValueCounter] !=undefined && scheduledMeetings[currentValueCounter][1] <= scheduledMeetings[nextValueCounter][0])
            {
                currentNumberOfRooms --
                scheduledMeetings[currentValueCounter][1] =scheduledMeetings[nextValueCounter][1]
              
                scheduledMeetings.splice(nextValueCounter,1);
                continue;
            }

            nextValueCounter++
            
            console.log("Updated Meeting rooms",scheduledMeetings);
        }
        
        console.log("Meeting rooms",scheduledMeetings);
    return currentNumberOfRooms 
}

//const meetings =[[1,4],[2,5],[7,9]] // Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can occur in any of the two rooms later.

//const meetings = [[4,5], [2,4]] // Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].

//const meetings = [[4,5], [2,4], [3,5], [2,3]] // Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].

const meetings =   [[1, 3], [2, 6], [8, 10], [15, 18], [5, 7]]
console.log( getMinimumNumberOfMeeting(meetings));
/*
 [[2,3],[2,4][3,5],[4,5]  ]
*/

/*

Test Case 1
Meetings: [[1, 3], [2, 4], [3, 5]]
Output: 2
Explanation:

[1, 3] and [2, 4] overlap, requiring two rooms.
[3, 5] can start in any of the two rooms after [1, 3] ends.
Test Case 2
Meetings: [[6, 8], [5, 7], [8, 9], [1, 4]]
Output: 2
Explanation:

[6, 8] and [5, 7] overlap, requiring two rooms.
[8, 9] and [1, 4] do not overlap with each other or with any of the other intervals, so they can use the same rooms.
Test Case 3
Meetings: [[1, 5], [5, 10], [10, 15], [15, 20]]
Output: 1
Explanation:

None of the meetings overlap, so only one room is required.
Test Case 4
Meetings: [[1, 4], [4, 5], [5, 6], [6, 7], [7, 8]]
Output: 1
Explanation:

Each meeting starts as the previous one ends, so only one room is required.
Test Case 5
Meetings: [[1, 3], [2, 6], [8, 10], [15, 18], [5, 7]]
Output: 2
Explanation:

[1, 3] and [2, 6] overlap, requiring two rooms.
[8, 10], [15, 18], and [5, 7] do not overlap with each other or with [2, 6], so they can be accommodated in the same room
*/