/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0 

    for(let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[j]){
            j++
            nums[j] = nums[i]
        } 
    }
    return j + 1;
};



var removeDuplicates = function(nums) {
    let j = 0 

    nums.forEach(element, idx => {
        console.log(nums[idx + 1]);
        
    });


    for(let i = 1; i < nums.length; i++){
        if (nums[i] !== nums[j]){
            j++
            nums[j] = nums[i]
        } 
    }
    return j + 1;
};