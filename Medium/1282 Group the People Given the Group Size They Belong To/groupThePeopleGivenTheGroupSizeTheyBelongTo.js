/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const groups = {}
    groupSizes.forEach((groupSize, person)=>{
      groups[groupSize] = groups[groupSize] || [[]]
      latestGroup = groups[groupSize][groups[groupSize].length-1]
      if(latestGroup.length<groupSize){
          latestGroup.push(person)
      }
      else{
          groups[groupSize].push([person])
      }
    })  
  
   return Object.values(groups).flat()
  };