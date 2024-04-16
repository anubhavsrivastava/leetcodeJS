## Problem

You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.

Return the number of matches played in the tournament until a winner is decided.

Example 1:

Input: n = 7
Output: 6
Explanation: Details of the tournament:

- 1st Round: Teams = 7, Matches = 3, and 4 teams advance.
- 2nd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 3rd Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
  Total number of matches = 3 + 2 + 1 = 6.

Example 2:

Input: n = 14
Output: 13
Explanation: Details of the tournament:

- 1st Round: Teams = 14, Matches = 7, and 7 teams advance.
- 2nd Round: Teams = 7, Matches = 3, and 4 teams advance.
- 3rd Round: Teams = 4, Matches = 2, and 2 teams advance.
- 4th Round: Teams = 2, Matches = 1, and 1 team is declared the winner.
  Total number of matches = 7 + 3 + 2 + 1 = 13.

Constraints:

1 <= n <= 200

## Pre analysis

To get a winner, all other teams have to be a loser, irrespective of number of matches, to get a winner, n-1 teams have to lose.
for n-1 teams to lose they will need to play n-1 matches.

Approach
If we fix a winner 'x' in 'n' teams, and

in series 'x' will need to play n-1 matches to be ultimate winner.
in parallel team1 vs team2 (winner) will lead to 1 match while team2 vs x will lead to 1 match. No matter how matches are played in parallel, we require n-1 matches

## Another solution

Following the algorithm above,

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let matches = 0;

  while (n > 1) {
    if (n % 2 === 0) {
      matches += n / 2; // Each round halves the number of teams
      n /= 2;
    } else {
      matches += (n - 1) / 2; // One team gets a bye
      n = (n - 1) / 2 + 1; // The advancing team plus the halved remaining teams
    }
  }

  return matches;
};
```
