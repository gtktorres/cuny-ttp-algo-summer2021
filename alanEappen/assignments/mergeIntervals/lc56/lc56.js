// Problem Statement #

// Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.


//Given: list of interval
//Goal// merge overlapping intervals and return the inverals with merged elemtents

//sort the array
//put start pointing to start pointer
//put end pointing to end pointer

//initiate a for loop to traverse thorugh each element
// we compare the current element with the end element if it's greater update
// greater element
//
// else there is no overlapping so push the interval to merged
// 
//edge cases:
// if there is only one interval return that interval
// if the interval length is 0 return null;


class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  if (intervals.length == 0) {
    return null
  }
  let merged = [];

  intervals.sort((a, b) => a.start - b.start);

  let startPtr = intervals[0].start
  let endPtr = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (endPtr >= intervals[i].start) {
      endPtr = Math.max(interval.end, endPtr);
    } else {
      merged.push(new Interval(startPtr, endPtr));
      startPtr = interval.start;
      endPtr = interval.end;
    }
  }

  merged.push(new Interval(startPtr, endPtr));
  return merged;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)





// Solution
// -----
// function merge(intervals) {
//   if (intervals.length < 2) {
//     return intervals;
//   }
//   // sort the intervals on the start time
//   intervals.sort((a, b) => a.start - b.start);

//   const mergedIntervals = [];
//   let start = intervals[0].start,
//     end = intervals[0].end;
//   for (i = 1; i < intervals.length; i++) {
//     const interval = intervals[i];
//     if (interval.start <= end) { // overlapping intervals, adjust the 'end'
//       end = Math.max(interval.end, end);
//     } else { // non-overlapping interval, add the previous interval and reset
//       mergedIntervals.push(new Interval(start, end));
//       start = interval.start;
//       end = interval.end;
//     }
//   }
//   // add the last interval
//   mergedIntervals.push(new Interval(start, end));
//   return mergedIntervals;
// }

// -----

// Time complexity #
// The time complexity of the above algorithm is O(N * logN), where ‘N’ is the total number of intervals. We are iterating the intervals only once which will take O(N), in the beginning though, since we need to sort the intervals, our algorithm will take O(N * logN).

// Space complexity #
// The space complexity of the above algorithm will be O(N) as we need to return a list containing all the merged intervals. We will also need O(N) space for sorting. For Java, depending on its version, Collections.sort() either uses Merge sort or Timsort, and both these algorithms need O(N) space. Overall, our algorithm has a space complexity of O(N).
