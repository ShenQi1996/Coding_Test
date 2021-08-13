window.addEventListener("load", () => {
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

  //Search in Rotated Sorted Array

  // to find the min point in a sorted array

  var search = function (nums, target) {
    // [1, 3, 5] 0
    // Special case

    if (nums === null || nums.length === 0) {
      return -1;
    }

    // Left and right pointers in the array

    let left = 0;
    let right = nums.length - 1; // 2

    // First step is to find the pivot where the
    // array is rotated

    while (left < right) {
      // Middle pointer

      let middle = left + parseInt((right - left) / 2); // 0

      // If the element at the mid is greater than
      // the element at the right then we can say that
      // the array is rotated after middle index

      if (nums[middle] > nums[right]) {
        // 1 > 5
        left = middle + 1; // 4
      }

      // Else, the pivot is in the left part
      else {
        right = middle; // 0
      }
    }

    // After the above loop is completed, then the
    // left index will point to the pivot

    const pivot = left; // 0
    left = 0;
    right = nums.length - 1; // 6

    // Now we will find in which half of the array,
    // our target is present

    if (target >= nums[pivot] && target <= nums[right]) {
      // 5 >= 1
      left = pivot;
    } else {
      right = pivot; // 0
    }

    // Now perform normal binary search

    while (left <= right) {
      // 0 <= 0
      let middle = left + parseInt((right - left) / 2);

      if (nums[middle] === target) {
        return middle;
      } else if (target < nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return -1;
  };

  console.log(search);
});
