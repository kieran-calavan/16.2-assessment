// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let result = "";
    if (!encode) { 
    shift *=-1
    }
    
    input = input.toLowerCase()
    
    if (shift == 0 || shift < -25 || shift > 25 || !shift)
      return false
    
    for (let i = 0 ; i < input.length; i++){
      let letter = input.charCodeAt(i)
      if (letter < 97 || letter > 122){
        result += input[i]
        continue
      }
      
      letter = (letter+shift)
      if (letter > 122){
        letter = letter - 26
      }
      else if (letter < 97){
        letter = letter + 26
      }
      result += String.fromCharCode(letter)
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
