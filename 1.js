var maxSubArray = function(nums) {
    
    let len = nums.length;
    if(len==0){
        return 0;
    }
    let currentSum = nums[0];
    let max = currentSum;
    for(let i=0,j=1;j<len;){
        if(currentSum<0){
            i=j;
            j=i+1;
            currentSum = nums[i];
        }else{
            currentSum+=nums[j];
            j++
        }
        if(currentSum>max){
            max = currentSum;
        }
    }
    
    return max;
};


maxSubArray( [1])