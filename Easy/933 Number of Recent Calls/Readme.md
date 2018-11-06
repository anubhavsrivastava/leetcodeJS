## Problem

Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

Example 1:

Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]

Output: [null,1,2,3,3]

Note:

Each test case will have at most 10000 calls to ping.

Each test case will call ping with strictly increasing values of t.

Each call to ping will have 1 <= t <= 10^9.

## Pre analysis

Will keep an array to keep each pings and return filter where currentPing-indexedPing <=3000

## Post analysis

After few submission, since test cases were increasing size of array, it took ~5 sec for 68 test cases.
Realised that array could be trimmed since no new ping would satisfy previous ping conditions. This resulted for timing to 170ms approx.

## Another solution

Better and clean solution with shift

    var RecentCounter = function() {
        this.queue = [];
    };

    /**
    * @param {number} t
    * @return {number}
    */
    RecentCounter.prototype.ping = function(t) {
    this.queue.push(t);
        while(this.queue.length && this.queue[0] < t-3000) {
            this.queue.shift();
        }
        return this.queue.length;
    };
