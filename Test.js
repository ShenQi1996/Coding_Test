window.addEventListener("load", () => {
  // TwoSum
  var twoSum = function (nums, target) {
    //brute force O(n2), nested for loop to look for k = target - current
    //optimize solution using hash table: {value: index}
    const map = new Map(); // {value: index}
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (map.has(need) && map.get(need) !== i) {
        //if need exists in map and is not current index
        return [i, map.get(need)];
      }
      map.set(nums[i], i);
    }
  };

  // put code here
  // Find Minimum in Rotated Sorted Array
  // var findMin = function (nums) {
  //   let answer = nums[0];
  //   let zero = false;
  //   let curr = 0;
  //   if (nums.length == 2) {
  //     return (answer = Math.min(nums[0], nums[1]));
  //   } else {
  //     for (let i = 1; i < nums.length - 1; i++) {
  //       if (nums[i] == 0 || nums[i + 1] == 0) {
  //         zero = true;
  //       } else {
  //         curr = Math.min(nums[i], nums[i + 1]);
  //         answer = Math.min(answer, curr);
  //       }
  //     }
  //   }
  //   if (zero == true) {
  //     answer = 0;
  //   }
  //   return answer;
  // };
  // console.log(findMin([11, 13, 15, 17]));

  // Output: num (min)
  // Input: array (nums)
  // Constraints: O(log n) time
  // Edge Cases: array is fully/not rotated, 1-length arrays

  // Approach
  // Track left pointer
  // Track right pointer
  // While left pointer < right pointer:
  // a) Get the midpoint between left and right
  // b) If num at mid is greater than num at right pointer, increment left pointer because that means the break is at or after right pointer ( we haven't reached it yet)
  // c) Otherwise, move right pointer to mid
  // Return num at left pointer
  // Time Complexity
  // O(log n) because we're often slicing the search space in half on each iteration.

  var findMin = function (nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
      // keep going until the pointers converge
      const midPointer = Math.floor((leftPointer + rightPointer) / 2);
      const [leftNumber, midNumber, rightNumber] = [
        nums[leftPointer],
        nums[midPointer],
        nums[rightPointer],
      ];
      if (midNumber > rightNumber) {
        leftPointer += 1;
      } else {
        rightPointer = midPointer;
      }
    }
    return nums[leftPointer];
  };

  //Search in Rotated Sorted Array
  // to find the min point in a sorted array
  // var search = function (nums, target) {
  //   // [1, 3, 5] 0
  //   // Special case
  //   if (nums === null || nums.length === 0) {
  //     return -1;
  //   }
  //   // Left and right pointers in the array
  //   let left = 0;
  //   let right = nums.length - 1; // 2
  //   // First step is to find the pivot where the
  //   // array is rotated
  //   while (left < right) {
  //     // Middle pointer
  //     let middle = left + parseInt((right - left) / 2); // 0
  //     // If the element at the mid is greater than
  //     // the element at the right then we can say that
  //     // the array is rotated after middle index
  //     if (nums[middle] > nums[right]) {
  //       // 1 > 5
  //       left = middle + 1; // 4
  //     }
  //     // Else, the pivot is in the left part
  //     else {
  //       right = middle; // 0
  //     }
  //   }
  //   // After the above loop is completed, then the
  //   // left index will point to the pivot
  //   const pivot = left; // 0
  //   left = 0;
  //   right = nums.length - 1; // 6
  //   // Now we will find in which half of the array,
  //   // our target is present
  //   if (target >= nums[pivot] && target <= nums[right]) {
  //     // 5 >= 1
  //     left = pivot;
  //   } else {
  //     right = pivot; // 0
  //   }
  //   // Now perform normal binary search
  //   while (left <= right) {
  //     // 0 <= 0
  //     let middle = left + parseInt((right - left) / 2);
  //     if (nums[middle] === target) {
  //       return middle;
  //     } else if (target < nums[middle]) {
  //       right = middle - 1;
  //     } else {
  //       left = middle + 1;
  //     }
  //   }
  //   return -1;
  // };
  //matrix
  //   var setZeroes = function(matrix) {
  //     var solution = [];
  //     for(var i=0; i<matrix.length; ++i){ // step 1
  //         for(var j=0; j<matrix[i].length; ++j){
  //             if(matrix[i][j]===0){
  //                 solution.push(i);
  //                 solution.push(j);
  //             }
  //         }
  //     }
  //     for(var k=0; k<solution.length; ++k){ // step 2
  //         for(j=0; j<matrix[solution[k]].length; ++j){
  //             matrix[solution[k]][j] = 0;
  //         }
  //         for(i=0; i<matrix.length; ++i){
  //             matrix[i][solution[k+1]] = 0;
  //         }
  //         ++k;
  //     }
  // };
  // MAXsubArray
  //   var maxSubArray = function(nums) {
  //     let answer = nums[0];
  //     let curr_max = nums[0];
  //     for(let i = 1 ; i < nums.length; i++){
  //         curr_max = Math.max(nums[i] , nums[i] + curr_max);
  //         answer = Math.max(answer, curr_max);
  //     }
  //     return answer;
  // };
  // productExceptSelf
  //   var productExceptSelf = function(nums) {
  //     const leftProducts = Array(nums.length);
  //     const rightProducts = Array(nums.length);
  //     leftProducts[0] = 1;
  //     rightProducts[nums.length - 1] = 1;
  //     for (let i = 1; i < nums.length; i++) {
  //         leftProducts[i] = leftProducts[i-1] * nums[i-1];
  //         rightProducts[nums.length - i - 1] = rightProducts[nums.length-i] * nums[nums.length - i];
  //     }
  //     const answer = Array(nums.length);
  //     for(let i = 0; i < nums.length; i++) {
  //         answer[i] = leftProducts[i] * rightProducts[i];
  //     }
  //     return answer;
  // };
  // TwoSum
  // var twoSum = function(nums, target) {
  //   //brute force O(n2), nested for loop to look for k = target - current
  //   //optimize solution using hash table: {value: index}
  //   const map = new Map(); // {value: index}
  //   for(let i = 0; i < nums.length; i++){
  //       const need = target - nums[i];
  //       if(map.has(need) && map.get(need) !== i){ //if need exists in map and is not current index
  //           return [i, map.get(need)];
  //       }
  //       map.set(nums[i], i);
  //   }
  // };
  // Max Profit
  // var maxProfit = function(prices) {
  //   let min = 999999;
  //   let maxProfit = 0
  //   for(let i = 0; i < prices.length; i++){
  //       if(prices[i] < min){
  //           min = prices[i]
  //       }else{
  //           maxProfit = Math.max(maxProfit, prices[i] - min)
  //       }
  //   }
  //   return maxProfit;
  // };
  //Longest Substring Without Repeating Characters
  // var lengthOfLongestSubstring = function(s) {
  //   if (!s.length) return 0;
  //   const scope = [s[0]];
  //   let max = 1;
  //   for (let i=1; i<s.length; i++){
  //       if (!scope.includes(s[i])){
  //           scope.push(s[i]);
  //           max = Math.max(max, scope.length)
  //       } else {
  //           scope.shift();
  //           i--;
  //       }
  //   }
  //   return max;
  // };
  //Spiral Matrix
  // var spiralOrder = function(matrix) {
  //   let result = []
  //   while(matrix.length) {
  //         console.log("size is before " + matrix.length)
  //       let top = matrix.shift()
  //       let bottom = (matrix.pop() || []).reverse()
  //       console.log("Top is "+top)
  //       console.log("Bottom is " + bottom)
  //       let left = []
  //       let right = []
  //       console.log("size is " + matrix.length)
  //       for(let i=0; i<matrix.length; i++) {
  //           if(matrix[i].length > 0) {
  //               right.push(matrix[i].pop())
  //           }
  //           if(matrix[i].length > 0) {
  //               left.unshift(matrix[i].shift())
  //           }
  //       }
  //       result.push(...top, ...right, ...bottom, ...left)
  //   }
  //   return result
  // Reverse Linked List
  // var reverseList = function(head) {
  //   let next = null;
  //   let prev = null;
  //   let curr = head
  //   while(curr != null){
  //       next = curr.next;
  //       curr.next = prev;
  //       prev = curr;
  //       curr = next;
  //   }
  //   return prev
  // };
  //Maximum Depth of Binary Tree
  // var maxDepth = function(root) {
  //   if(!root) return 0;
  //   var queue = [root];
  //   var layers = 0;
  //   var node = root;
  //   while(queue.length) {
  //       var curLevelLen = queue.length;
  //       for(var i = 0; i < curLevelLen; i++) {
  //           node = queue.shift();
  //           if(node.left) queue.push(node.left);
  //           if(node.right) queue.push(node.right);
  //       }
  //       layers++;
  //   }
  //   return layers;
  // };
  //Maximum Depth of Binary Tree
  // var maxDepth = function (root) {
  //   if (root == null) return 0;
  //   //travel to the end of all branches in the tree, therby end up with 0 for depth
  //   //check left side of node
  //   let leftMax = maxDepth(root.left);
  //   //check right side node
  //   let rightMax = maxDepth(root.right);
  //   //as call stack updates to the first function call, and gets closer to head node, depth increments by 1
  //   //Math max is to update the highest depth from either side of the node
  //   let depth = Math.max(leftMax, rightMax);
  //   return depth + 1;
  // };
  //Longest Repeating Character Replacement
  //   var characterReplacement = function(s, k) {
  //     const n = s.length;
  //     const charCount = new Array(26);
  //     charCount.fill(0);
  //     let windowStart = 0;
  //     let maxLength = Number.MIN_VALUE;
  //     let maxCount = 0;
  //     for (let windowEnd = 0; windowEnd < n; windowEnd++) {
  //         const currentCharIdx = s.charCodeAt(windowEnd)-65;
  //         charCount[currentCharIdx]++;
  //         maxCount = Math.max(maxCount, charCount[currentCharIdx]);
  //         // num of chars we need to change < k
  //         // length-maxCount = num Operations
  //         while ((windowEnd-windowStart+1)-maxCount > k) {
  //             const leftChar = s.charCodeAt(windowStart)-65;
  //             charCount[leftChar]--;
  //             windowStart++;
  //         }
  //         maxLength = (maxLength, windowEnd-windowStart+1);
  //     }
  //     return maxLength;
  // };
  //   Linked List Cycle
  //   var hasCycle = function(head) {
  //     let slow = head;
  //     let fast = head;
  //     while(fast && fast.next){
  //         slow = slow.next
  //         fast = fast.next.next
  //         if(slow === fast){
  //             return true
  //         }
  //     }
  //     return false
  // };
});
