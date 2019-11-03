/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let dic = [0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let result = [];
    let digitsLen = digits.length;
    if(digitsLen===0)return [];
    function gen(index,str){
        if(index==digitsLen){
            result.push(str)
        }else{
          let digit=  digits[index];
          let arr = dic[digit];
          for (let i = 0; i < arr.length; i++) {
              const element = arr[i];
              gen(index+1,str+element)
          }
        }
    }
    gen(0,'')
    return result;
};
// letterCombinations('23')
// @lc code=end

