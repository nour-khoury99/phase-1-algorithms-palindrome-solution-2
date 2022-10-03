function isPalindrome(word) {
  // Write your algorithm 
  
  //iterate from the begenning tp the middle 
  //reacecar 7 / 2 == 3.5
  for ( let i = 0 ;i<word.length / 2 ; i ++){
      //check each letter to the correspondinig lettee from the end 
      const j = word.length - 1 - i
      const startChar = word[i]
      const endChar =word[j]
      
      if(startChar != endChar){
        return false
      }else {
        return true
      }
   }
}

/* 
  Add your pseudocode here

  iterate from the beginning to the middle 
  check each letter to the corresponding letter from the end 
    if any letters don't match  , return false

    else retrun true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
