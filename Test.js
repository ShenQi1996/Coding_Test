window.addEventListener("load", () => {
  // put code here

  var findMin = function (nums) {
    let answer = nums[0];
    let zero = false;
    let curr = 0;
    if (nums.length == 2) {
      return (answer = Math.min(nums[0], nums[1]));
    } else {
      for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] == 0 || nums[i + 1] == 0) {
          zero = true;
        } else {
          curr = Math.min(nums[i], nums[i + 1]);
          answer = Math.min(answer, curr);
        }
      }
    }
    if (zero == true) {
      answer = 0;
    }
    return answer;
  };

  console.log(findMin([11, 13, 15, 17]));
});
