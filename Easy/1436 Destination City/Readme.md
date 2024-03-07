## Problem

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo"
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

Example 2:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".

Example 3:

Input: paths = [["A","Z"]]
Output: "Z"

Constraints:

1 <= paths.length <= 100
paths[i].length == 2
1 <= cityAi.length, cityBi.length <= 10
cityAi != cityBi
All strings consist of lowercase and uppercase English letters and the space character.

## Pre analysis

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city. So, we can just check the last element of each path and return the one which is not in the first element of any path.

Another approach is simply to use hash and iterate randomly to reach final destination.

## Another approach

```javascript
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const departCity = paths.map((x) => x[0]);
  for (let i = 0; i < paths.length; i++) {
    if (!departCity.includes(paths[i][1])) {
      return paths[i][1];
    }
  }
};
```
