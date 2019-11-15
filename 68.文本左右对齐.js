/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let len = words.length;
  let itemArr = [];
  let currentLen = 0;
  let result = [];
  let buildStr = function (remander, arr, isLast) {
    // if(remander<0){
    //   remander = 0;
    // }
    let len = arr.length;
    let fillGap = len - 1;
    let kg = 0
    let result = '';
    for (let i = 0; i < arr.length - 1; i++) {
      if (isLast) {
        kg = 0
      } else if (remander < kg) {
        kg = remander;
      }else{
         kg = fillGap === 0 ? remander : Math.ceil(remander / (fillGap-i));
      }
      const str = arr[i];
      result += str + ' ' + new Array(kg).fill(' ').join('');
      remander -= kg;
    }
    if (isLast || remander > 0) {
      return result + arr[arr.length - 1] + new Array(remander).fill(' ').join('');
    }
    return result + arr[arr.length - 1];
  }
  for (let i = 0; i < len; i++) {
    const word = words[i];
    let wordLen = word.length;
    if (wordLen + currentLen <= maxWidth) {
      currentLen += wordLen + 1;
      itemArr.push(word);
    } else {
      // +1最后一个不需要空格
      let remander = maxWidth - currentLen + 1;
      result.push(buildStr(remander, itemArr, false))
      itemArr = []
      currentLen = 0
      i--;
    }
  }
  result.push(buildStr(maxWidth - currentLen + 1, itemArr, true))
  return result;
};


// fullJustify(["Give","me","my","Romeo;","and,","when","he","shall","die,","Take","him","and","cut","him","out","in","little","stars,","And","he","will","make","the","face","of","heaven","so","fine","That","all","the","world","will","be","in","love","with","night","And","pay","no","worship","to","the","garish","sun."],25)
// fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
//   "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20)

// fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)
// fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)
// fullJustify(["My","momma","always","said,","\\\"Life","was","like","a","box","of","chocolates.","You","never","know","what","you're","gonna","get."],20)
// @lc code=end

